/* ============================================
   IELTS 听力模块 JS
   ============================================ */

const ListeningModule = {
    currentCategory: 'all',
    currentItem: null,

    init() {
        Router.register('listening', () => this.render());
    },

    getResources() {
        return window.LISTENING_DATA || [];
    },

    getCategories() {
        const cats = new Set(this.getResources().map(r => r.category));
        return ['all', ...cats];
    },

    getFilteredList() {
        if (this.currentCategory === 'all') return this.getResources();
        return this.getResources().filter(r => r.category === this.currentCategory);
    },

    render() {
        const content = document.getElementById('app-content');
        const resources = this.getFilteredList();
        const categories = this.getCategories();

        const catLabels = { all: '全部', lecture: '学术讲座', daily: '日常对话', news: '新闻广播', campus: '校园生活' };

        content.innerHTML = `
            <div class="page-section listening-container">
                <div class="page-header">
                    <h1 class="page-title">🎧 听力训练</h1>
                    <p class="page-subtitle">沉浸式英语听力，从真实的语境中提升听力水平</p>
                </div>

                <!-- Categories -->
                <div class="listening-categories">
                    ${categories.map(cat => `
                        <button class="listening-cat-btn ${cat === this.currentCategory ? 'active' : ''}"
                            onclick="ListeningModule.filterBy('${cat}')">${catLabels[cat] || cat}</button>
                    `).join('')}
                </div>

                <!-- Resources Grid -->
                <div class="listening-grid">
                    ${resources.length === 0 ? `
                        <div class="empty-state">
                            <div class="empty-state-icon">🎧</div>
                            <h3 class="empty-state-title">暂无听力资源</h3>
                            <p class="empty-state-desc">听力内容正在加载中...</p>
                        </div>
                    ` : resources.map(r => `
                        <div class="listening-item" onclick="ListeningModule.openItem('${r.id}')">
                            <div class="listening-thumb">
                                ${r.thumbnail ? `<img src="${r.thumbnail}" alt="${r.title}">` : '🎬'}
                            </div>
                            <div class="listening-info">
                                <div class="listening-title">${r.title}</div>
                                <div class="listening-meta">
                                    <span>${catLabels[r.category] || r.category}</span>
                                    <span>•</span>
                                    <span>${r.duration || '未知'}</span>
                                    <span>•</span>
                                    <span>${r.difficulty === 'easy' ? '⭐ 基础' : r.difficulty === 'medium' ? '⭐⭐ 中档' : '⭐⭐⭐ 困难'}</span>
                                </div>
                                <div class="listening-tags">
                                    ${(r.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    filterBy(category) {
        this.currentCategory = category;
        this.render();
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
            <div class="page-section listening-container">
                <div style="margin-bottom: 16px;">
                    <button class="btn btn-ghost" onclick="ListeningModule.render()">← 返回列表</button>
                </div>

                <div class="listening-player">
                    <div class="listening-video-wrap">
                        <iframe src="${item.videoUrl}" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                    </div>

                    <div class="listening-player-body">
                        <div class="listening-player-title">${item.title}</div>
                        <div class="listening-player-source">${item.source || ''}</div>

                        <div class="listening-player-actions">
                            <button class="listening-mode-btn active" onclick="ListeningModule.switchMode('transcript', this)">📝 字幕</button>
                            <button class="listening-mode-btn" onclick="ListeningModule.switchMode('quiz', this)">❓ 理解题</button>
                            <button class="listening-mode-btn" onclick="ListeningModule.switchMode('dictation', this)">✏️ 听写</button>
                        </div>

                        <div id="listening-mode-content">
                            ${this.renderTranscript(item)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    switchMode(mode, btn) {
        document.querySelectorAll('.listening-mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const container = document.getElementById('listening-mode-content');
        if (!container) return;

        switch(mode) {
            case 'transcript':
                container.innerHTML = this.renderTranscript(this.currentItem);
                break;
            case 'quiz':
                container.innerHTML = this.renderQuiz(this.currentItem);
                break;
            case 'dictation':
                container.innerHTML = this.renderDictation(this.currentItem);
                break;
        }
    },

    renderTranscript(item) {
        if (!item.transcript || item.transcript.length === 0) {
            return '<div class="empty-state"><p class="empty-state-desc">暂无字幕</p></div>';
        }
        return `
            <div class="listening-transcript">
                ${item.transcript.map(line => `
                    <div class="listening-line">
                        <div class="listening-line-en">${line.en || ''}</div>
                        <div class="listening-line-zh">${line.zh || ''}</div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderQuiz(item) {
        if (!item.quiz || item.quiz.length === 0) {
            return '<div class="empty-state"><p class="empty-state-desc">暂无理解题</p></div>';
        }
        return `
            <div class="listening-quiz">
                <h3 style="font-weight:600; margin-bottom:12px;">理解测试</h3>
                ${item.quiz.map((q, qi) => `
                    <div class="listening-quiz-item" data-q="${qi}">
                        <div class="listening-quiz-q">${qi + 1}. ${q.question}</div>
                        <div class="listening-quiz-options">
                            ${q.options.map((opt, oi) => `
                                <button class="listening-quiz-opt" onclick="ListeningModule.checkAnswer(${qi}, ${oi}, this)">
                                    ${String.fromCharCode(65 + oi)}. ${opt}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    checkAnswer(qi, oi, btn) {
        const item = this.currentItem;
        if (!item || !item.quiz) return;
        
        const q = item.quiz[qi];
        const parent = btn.closest('.listening-quiz-item');
        
        // Disable all buttons
        parent.querySelectorAll('.listening-quiz-opt').forEach(b => {
            b.disabled = true;
            b.style.cursor = 'default';
        });

        if (oi === q.answer) {
            btn.classList.add('correct');
        } else {
            btn.classList.add('wrong');
            // Show correct answer
            parent.querySelectorAll('.listening-quiz-opt')[q.answer].classList.add('correct');
        }
    },

    renderDictation(item) {
        if (!item.dictation || item.dictation.length === 0) {
            return '<div class="empty-state"><p class="empty-state-desc">暂无听写内容</p></div>';
        }
        return `
            <div class="listening-quiz">
                <h3 style="font-weight:600; margin-bottom:12px;">✏️ 听写填空</h3>
                <p style="font-size:var(--text-sm); color:var(--text-secondary); margin-bottom:16px;">
                    先听视频，然后填写空缺的单词
                </p>
                ${item.dictation.map((d, di) => `
                    <div style="margin-bottom: 12px;">
                        <p style="font-size:var(--text-sm); line-height:1.7;">${d.before} 
                            <input type="text" class="dictation-input" data-answer="${d.answer}" 
                                style="width: ${d.answer.length * 12 + 40}px; padding:4px 8px; font-size:var(--text-sm);"
                                placeholder="..." onkeypress="if(event.key==='Enter')ListeningModule.checkDictation(this)">
                        ${d.after || ''}</p>
                    </div>
                `).join('')}
                <button class="btn btn-primary" onclick="ListeningModule.checkAllDictation()">📝 检查答案</button>
            </div>
        `;
    },

    checkDictation(input) {
        const answer = input.dataset.answer.toLowerCase().trim();
        const value = input.value.toLowerCase().trim();
        if (value === answer) {
            input.style.borderColor = 'var(--success)';
            input.style.background = 'rgba(52,211,153,0.1)';
        }
    },

    checkAllDictation() {
        document.querySelectorAll('.dictation-input').forEach(input => {
            const answer = input.dataset.answer.toLowerCase().trim();
            const value = input.value.toLowerCase().trim();
            if (value === answer) {
                input.style.borderColor = 'var(--success)';
                input.style.background = 'rgba(52,211,153,0.1)';
            } else {
                input.style.borderColor = 'var(--danger)';
                input.style.background = 'rgba(248,113,113,0.1)';
                // Show correct answer
                const parent = input.parentElement;
                const hint = document.createElement('span');
                hint.style.cssText = 'color:var(--success); font-size:var(--text-xs); margin-left:8px;';
                hint.textContent = `✔ ${answer}`;
                parent.appendChild(hint);
                input.disabled = true;
            }
        });
    }
};
