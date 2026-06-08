/* ============================================
   IELTS 阅读模块 JS
   ============================================ */

const ReadingModule = {
    currentPassageId: null,
    userAnswers: {},

    init() {
        Router.register('reading', () => this.render());
    },

    getPassages() {
        return window.READING_DATA || [];
    },

    render() {
        const content = document.getElementById('app-content');
        const passages = this.getPassages();

        content.innerHTML = `
            <div class="page-section reading-container">
                <div class="page-header">
                    <h1 class="page-title">📚 阅读理解</h1>
                    <p class="page-subtitle">雅思阅读真题风格训练，提升阅读速度与准确率</p>
                </div>

                ${passages.length === 0 ? `
                    <div class="empty-state">
                        <div class="empty-state-icon">📚</div>
                        <h3 class="empty-state-title">暂无阅读文章</h3>
                        <p class="empty-state-desc">阅读内容正在加载中...</p>
                    </div>
                ` : `
                    <select class="reading-select" onchange="ReadingModule.openPassage(this.value)">
                        <option value="">选择一篇文章开始阅读...</option>
                        ${passages.map(p => `
                            <option value="${p.id}" ${p.id === this.currentPassageId ? 'selected' : ''}>
                                ${p.difficulty === 'easy' ? '⭐' : p.difficulty === 'medium' ? '⭐⭐' : '⭐⭐⭐'} ${p.title} (${p.wordCount || '?'}词)
                            </option>
                        `).join('')}
                    </select>

                    ${this.currentPassageId ? this.renderPassage() : `
                        <div class="empty-state">
                            <div class="empty-state-icon">📖</div>
                            <h3 class="empty-state-title">选择一篇文章</h3>
                            <p class="empty-state-desc">从上方下拉菜单中选择一篇阅读文章</p>
                        </div>
                    `}
                `}
            </div>
        `;
    },

    openPassage(id) {
        if (!id) {
            this.currentPassageId = null;
            this.userAnswers = {};
            this.render();
            return;
        }
        this.currentPassageId = id;
        this.userAnswers = {};
        this.render();
    },

    renderPassage() {
        const passage = this.getPassages().find(p => p.id === this.currentPassageId);
        if (!passage) return '';

        return `
            <div class="reading-layout page-enter">
                <div class="reading-passage">
                    <div class="reading-passage-title">${passage.title}</div>
                    <div style="display:flex; gap:8px; margin-bottom:12px; flex-wrap:wrap;">
                        <span class="tag">📝 ${passage.wordCount || '?'} 词</span>
                        <span class="tag">⏱️ 20 分钟</span>
                        <span class="tag ${passage.difficulty === 'easy' ? 'badge-basic' : passage.difficulty === 'medium' ? 'badge-intermediate' : 'badge-advanced'}">
                            ${passage.difficulty === 'easy' ? '⭐ 基础' : passage.difficulty === 'medium' ? '⭐⭐ 中档' : '⭐⭐⭐ 困难'}
                        </span>
                    </div>
                    <div class="reading-passage-text">
                        ${(passage.paragraphs || []).map(p => `<p>${p}</p>`).join('')}
                    </div>
                </div>

                <div>
                    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
                        <h3 style="font-weight:700;">📝 题目</h3>
                        <button class="btn btn-primary btn-sm" onclick="ReadingModule.checkAnswers()">✅ 提交批改</button>
                    </div>
                    
                    <div class="reading-questions">
                        ${(passage.questions || []).map((q, qi) => `
                            <div class="reading-q-item" data-q="${qi}">
                                <div class="reading-q-num">Question ${qi + 1}</div>
                                <div class="reading-q-text">${q.question}</div>
                                <div class="reading-q-options">
                                    ${q.options.map((opt, oi) => `
                                        <button class="reading-q-opt" onclick="ReadingModule.selectAnswer(${qi}, ${oi}, this)">
                                            ${opt}
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    selectAnswer(qi, oi, btn) {
        const parent = btn.closest('.reading-q-item');
        parent.querySelectorAll('.reading-q-opt').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.userAnswers[qi] = oi;
    },

    checkAnswers() {
        const passage = this.getPassages().find(p => p.id === this.currentPassageId);
        if (!passage || !passage.questions) return;

        let correct = 0;
        const total = passage.questions.length;

        passage.questions.forEach((q, qi) => {
            const item = document.querySelector(`.reading-q-item[data-q="${qi}"]`);
            if (!item) return;

            const userAnswer = this.userAnswers[qi];
            const opts = item.querySelectorAll('.reading-q-opt');

            opts.forEach((opt, oi) => {
                opt.disabled = true;
                opt.style.cursor = 'default';
                opt.classList.remove('selected');
                
                if (oi === q.answer) {
                    opt.classList.add('correct');
                } else if (oi === userAnswer && oi !== q.answer) {
                    opt.classList.add('wrong');
                }
            });

            if (userAnswer === q.answer) correct++;
        });

        // Show results
        const header = document.querySelector('.reading-layout h3');
        if (header) {
            header.innerHTML = `📝 题目 <span style="color:var(--success); font-size:var(--text-sm); font-weight:400; margin-left:8px;">
                ${correct}/${total} 正确 (${Math.round(correct/total*100)}%)
            </span>`;
        }

        // Update stats
        const stats = Storage.getStats();
        stats.moduleProgress.reading.completed = (stats.moduleProgress.reading.completed || 0) + 1;
        Storage.setStats(stats);
    }
};
