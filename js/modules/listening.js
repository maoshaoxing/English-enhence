/* ============================================
   IELTS 听力模块 — Bilibili 播客合集
   ============================================ */

const ListeningModule = {
    currentCategory: 'all',
    currentItem: null,
    currentPage: 0,
    perPage: 20,

    init() {
        Router.register('listening', () => this.render());
    },

    getResources() {
        return window.LISTENING_DATA || [];
    },

    getCategories() {
        const cats = new Set(this.getResources().map(r => r.category));
        return Array.from(cats);
    },

    getFilteredList() {
        if (this.currentCategory === 'all') return this.getResources();
        return this.getResources().filter(r => r.category === this.currentCategory);
    },

    render() {
        const content = document.getElementById('app-content');
        const all = this.getFilteredList();
        const total = all.length;
        const pages = Math.ceil(total / this.perPage);
        
        // Ensure currentPage is valid
        if (this.currentPage >= pages) this.currentPage = Math.max(0, pages - 1);
        
        const start = this.currentPage * this.perPage;
        const pageItems = all.slice(start, start + this.perPage);
        const categories = this.getCategories();

        const catLabels = {
            all: '📋 全部',
            podcast: '🎙️ 播客',
            daily: '💬 日常对话',
            speaking: '🗣️ 口语训练',
            grammar: '📝 语法专项',
            lecture: '🎓 学术讲座',
            listening: '👂 听力专练'
        };

        content.innerHTML = `
            <div class="page-section fade-up" style="max-width:960px;margin:0 auto;">
                <div class="hero" style="padding:36px 20px 28px;margin-bottom:24px;">
                    <h1 class="hero-title" style="font-size:2.5rem;">🎧 英语播客</h1>
                    <p class="hero-subtitle" style="font-size:var(--text-base);margin-bottom:20px;">96集精选播客 · 语速适中发音清晰 · 四六级托福雅思备考素材</p>
                </div>

                <!-- Category Filter -->
                <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-bottom:20px;">
                    <button class="pill-btn ${this.currentCategory === 'all' ? 'active' : ''}" 
                        onclick="ListeningModule.currentCategory='all';ListeningModule.currentPage=0;ListeningModule.render()">
                        📋 全部 (${total})
                    </button>
                    ${categories.map(cat => `
                        <button class="pill-btn ${cat === this.currentCategory ? 'active' : ''}" 
                            onclick="ListeningModule.currentCategory='${cat}';ListeningModule.currentPage=0;ListeningModule.render()">
                            ${catLabels[cat] || cat}
                        </button>
                    `).join('')}
                </div>

                <!-- Episode Grid -->
                <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px;margin-bottom:20px;">
                    ${pageItems.map((r, i) => `
                        <div class="card card-glow" style="cursor:pointer;padding:18px;transition:all 0.2s;" 
                            onclick="ListeningModule.openItem('${r.id}')">
                            <div style="display:flex;gap:12px;align-items:flex-start;">
                                <div style="width:44px;height:44px;border-radius:var(--radius-md);background:var(--accent-gradient);
                                    display:flex;align-items:center;justify-content:center;flex-shrink:0;color:white;font-weight:700;font-size:.85rem;">
                                    ${start + i + 1}
                                </div>
                                <div style="flex:1;min-width:0;">
                                    <div style="font-weight:600;font-size:var(--text-sm);line-height:1.4;margin-bottom:4px;">
                                        ${r.title}
                                    </div>
                                    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
                                        <span style="font-size:var(--text-xs);color:var(--text-secondary);">⏱ ${r.duration || ''}</span>
                                        <span class="tag">${catLabels[r.category]?.replace(/[^\u4e00-\u9fa5]/g,'') || r.category}</span>
                                        ${r.difficulty === 'easy' ? '<span class="badge-green">基础</span>' : r.difficulty === 'hard' ? '<span class="badge-rose">困难</span>' : '<span class="badge-blue">中档</span>'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Pagination -->
                ${pages > 1 ? `
                    <div style="display:flex;justify-content:center;gap:8px;align-items:center;">
                        <button class="btn btn-secondary btn-sm" ${this.currentPage === 0 ? 'disabled' : ''}
                            onclick="ListeningModule.currentPage=0;ListeningModule.render()">⏮️</button>
                        <button class="btn btn-secondary btn-sm" ${this.currentPage === 0 ? 'disabled' : ''}
                            onclick="ListeningModule.currentPage--;ListeningModule.render()">◀</button>
                        <span style="font-size:var(--text-sm);color:var(--text-secondary);padding:0 12px;">
                            ${this.currentPage + 1} / ${pages}
                        </span>
                        <button class="btn btn-secondary btn-sm" ${this.currentPage >= pages - 1 ? 'disabled' : ''}
                            onclick="ListeningModule.currentPage++;ListeningModule.render()">▶</button>
                        <button class="btn btn-secondary btn-sm" ${this.currentPage >= pages - 1 ? 'disabled' : ''}
                            onclick="ListeningModule.currentPage=${pages - 1};ListeningModule.render()">⏭️</button>
                    </div>
                ` : ''}
            </div>
        `;
    },

    openItem(id) {
        const item = this.getResources().find(r => r.id === id);
        if (!item) return;
        this.currentItem = item;
        this.renderPlayer(item);
    },

    renderPlayer(item) {
        const content = document.getElementById('app-content');
        
        content.innerHTML = `
            <div class="page-section fade-up" style="max-width:900px;margin:0 auto;">
                <div style="margin-bottom:16px;">
                    <button class="btn btn-ghost" onclick="ListeningModule.render()">← 返回列表</button>
                </div>

                <div class="card" style="overflow:hidden;padding:0;margin-bottom:20px;">
                    <!-- Bilibili Player -->
                    <div style="position:relative;padding-bottom:56.25%;height:0;background:#000;">
                        <iframe src="${item.videoUrl}"
                            style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;"
                            allow="autoplay;encrypted-media" allowfullscreen scrolling="no">
                        </iframe>
                    </div>
                    
                    <div style="padding:20px;">
                        <h2 style="font-size:var(--text-xl);font-weight:700;margin-bottom:6px;">${item.title}</h2>
                        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;">
                            <span class="tag">⏱ ${item.duration || '未知'}</span>
                            <span class="tag">📺 ${item.source || ''}</span>
                            ${(item.tags || []).slice(0,5).map(t => `<span class="tag">${t}</span>`).join('')}
                        </div>

                        <!-- Mode Toggle -->
                        <div style="display:flex;gap:8px;flex-wrap:wrap;">
                            <button class="pill-btn active" onclick="ListeningModule.switchMode('transcript',this)">📝 字幕</button>
                            <button class="pill-btn" onclick="ListeningModule.switchMode('quiz',this)">❓ 理解题</button>
                            <button class="pill-btn" onclick="ListeningModule.switchMode('dictation',this)">✏️ 听写</button>
                        </div>
                    </div>
                </div>

                <div id="listening-mode-content" class="card fade-in" style="min-height:200px;">
                    ${this.renderTranscript(item)}
                </div>
            </div>
        `;
    },

    switchMode(mode, btn) {
        document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const container = document.getElementById('listening-mode-content');
        if (!container) return;
        container.className = 'card fade-in';

        if (mode === 'transcript') container.innerHTML = this.renderTranscript(this.currentItem);
        else if (mode === 'quiz') container.innerHTML = this.renderQuiz(this.currentItem);
        else if (mode === 'dictation') container.innerHTML = this.renderDictation(this.currentItem);
    },

    renderTranscript(item) {
        if (!item.transcript || item.transcript.length === 0) {
            return `<div style="text-align:center;padding:40px;color:var(--text-secondary);">
                <p style="font-size:2rem;margin-bottom:12px;">🎧</p>
                <p>播放视频后对照字幕练习听力</p>
                <p style="font-size:var(--text-xs);color:var(--text-tertiary);margin-top:8px;">建议先盲听一遍，再看字幕跟读</p></div>`;
        }
        return `
            <h3 style="font-size:var(--text-sm);font-weight:700;color:var(--text-secondary);margin-bottom:16px;">📝 中英字幕对照</h3>
            <div style="max-height:400px;overflow-y:auto;">
                ${item.transcript.map((line, i) => `
                    <div style="padding:8px 0;border-bottom:1px solid var(--border);cursor:pointer;transition:background 0.15s;"
                        onmouseenter="this.style.background='var(--bg-glass)'" onmouseleave="this.style.background=''">
                        <div style="font-size:var(--text-sm);color:var(--text-primary);line-height:1.6;margin-bottom:2px;">
                            ${i+1}. ${line.en}
                        </div>
                        <div style="font-size:var(--text-xs);color:var(--text-secondary);">${line.zh}</div>
                    </div>
                `).join('')}
            </div>`;
    },

    renderQuiz(item) {
        if (!item.quiz || item.quiz.length === 0) {
            return `<div style="text-align:center;padding:40px;color:var(--text-secondary);">
                <p style="font-size:2rem;margin-bottom:12px;">❓</p><p>暂无理解题</p></div>`;
        }
        return `
            <h3 style="font-size:var(--text-sm);font-weight:700;color:var(--text-secondary);margin-bottom:16px;">❓ 理解测试</h3>
            ${item.quiz.map((q, qi) => `
                <div style="margin-bottom:16px;padding:16px;background:var(--bg-glass);border-radius:var(--radius-md);">
                    <div style="font-weight:600;font-size:var(--text-sm);margin-bottom:8px;">${qi + 1}. ${q.question}</div>
                    <div style="display:grid;gap:6px;">
                        ${q.options.map((opt, oi) => `
                            <button style="text-align:left;padding:10px 14px;background:var(--bg-surface);border:1px solid var(--border);
                                border-radius:var(--radius-sm);font-size:var(--text-sm);cursor:pointer;transition:all 0.15s;"
                                onclick="ListeningModule.checkAnswer(${qi},${oi},this)"
                                onmouseenter="this.style.borderColor='var(--accent)'" onmouseleave="if(!this.dataset.done)this.style.borderColor=''">
                                ${String.fromCharCode(65 + oi)}. ${opt}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `).join('')}`;
    },

    checkAnswer(qi, oi, btn) {
        const item = this.currentItem;
        if (!item || !item.quiz || btn.dataset.done) return;
        
        const q = item.quiz[qi];
        const parent = btn.parentElement;
        
        // Disable all options
        parent.querySelectorAll('button').forEach(b => {
            b.dataset.done = '1';
            b.style.cursor = 'default';
            if (b.style) { b.style.opacity = '0.7'; }
        });

        if (oi === q.answer) {
            btn.style.borderColor = 'var(--success)';
            btn.style.background = 'rgba(63,185,80,0.1)';
            btn.innerHTML = '✅ ' + btn.textContent;
            btn.style.opacity = '1';
        } else {
            btn.style.borderColor = 'var(--error)';
            btn.style.background = 'rgba(248,81,73,0.1)';
            btn.innerHTML = '❌ ' + btn.textContent;
            // Highlight correct
            const correctBtn = parent.querySelectorAll('button')[q.answer];
            correctBtn.style.borderColor = 'var(--success)';
            correctBtn.style.background = 'rgba(63,185,80,0.1)';
            correctBtn.innerHTML = '✅ ' + correctBtn.textContent.replace(/^[A-D]\.\s*/, '');
            correctBtn.style.opacity = '1';
        }
    },

    renderDictation(item) {
        if (!item.dictation || item.dictation.length === 0) {
            return `<div style="text-align:center;padding:40px;color:var(--text-secondary);">
                <p style="font-size:2rem;margin-bottom:12px;">✏️</p><p>暂无听写内容</p></div>`;
        }
        return `
            <h3 style="font-size:var(--text-sm);font-weight:700;color:var(--text-secondary);margin-bottom:16px;">✏️ 填空听写</h3>
            <p style="font-size:var(--text-xs);color:var(--text-tertiary);margin-bottom:16px;">先播放视频，然后填写空缺的单词</p>
            ${item.dictation.map((d, di) => `
                <div style="margin-bottom:14px;padding:12px;background:var(--bg-glass);border-radius:var(--radius-sm);">
                    <p style="font-size:var(--text-sm);line-height:1.8;">
                        ${d.before} 
                        <input type="text" data-answer="${d.answer}" 
                            style="width:${Math.max(60, d.answer.length * 10 + 20)}px;padding:4px 8px;font-size:var(--text-sm);
                            border:1px solid var(--border);border-radius:var(--radius-xs);background:var(--bg-surface);color:var(--text-primary);"
                            placeholder="键入单词" onkeypress="if(event.key==='Enter')ListeningModule.checkDictation(this)">
                        ${d.after || ''}
                    </p>
                </div>
            `).join('')}
            <button class="btn btn-primary" onclick="ListeningModule.checkAllDictation()" style="margin-top:8px;">📝 检查答案</button>`;
    },

    checkDictation(input) {
        const answer = input.dataset.answer.toLowerCase().trim();
        const value = input.value.toLowerCase().trim();
        if (value === answer) {
            input.style.borderColor = 'var(--success)';
            input.style.background = 'rgba(63,185,80,0.1)';
        }
    },

    checkAllDictation() {
        document.querySelectorAll('input[data-answer]').forEach(input => {
            const answer = input.dataset.answer.toLowerCase().trim();
            const value = input.value.toLowerCase().trim();
            if (value === answer) {
                input.style.borderColor = 'var(--success)';
                input.style.background = 'rgba(63,185,80,0.1)';
            } else {
                input.style.borderColor = 'var(--error)';
                input.style.background = 'rgba(248,81,73,0.1)';
                const hint = document.createElement('span');
                hint.style.cssText = 'color:var(--success);font-size:var(--text-xs);margin-left:8px;font-weight:600;';
                hint.textContent = '→ ' + answer;
                input.parentElement.appendChild(hint);
                input.disabled = true;
            }
        });
    }
};
