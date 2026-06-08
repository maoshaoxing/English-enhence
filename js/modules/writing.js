/* ============================================
   IELTS 写作模块 JS
   ============================================ */

const WritingModule = {
    currentTask: 1,
    currentTopic: null,

    init() {
        Router.register('writing', () => this.render());
    },

    getTopics() {
        const data = window.WRITING_DATA;
        return data ? data[`task${this.currentTask}`] || [] : [];
    },

    render() {
        const content = document.getElementById('app-content');
        const topics = this.getTopics();

        content.innerHTML = `
            <div class="page-section writing-container">
                <div class="page-header">
                    <h1 class="page-title">✍️ 写作训练</h1>
                    <p class="page-subtitle">掌握 Task 1 图表作文与 Task 2 议论文写作技巧</p>
                </div>

                <!-- Task Selector -->
                <div class="writing-task-selector">
                    <button class="writing-task-btn ${this.currentTask === 1 ? 'active' : ''}" 
                        onclick="WritingModule.switchTask(1)">Task 1 图表作文</button>
                    <button class="writing-task-btn ${this.currentTask === 2 ? 'active' : ''}" 
                        onclick="WritingModule.switchTask(2)">Task 2 议论文</button>
                </div>

                ${topics.length === 0 ? `
                    <div class="empty-state">
                        <div class="empty-state-icon">✍️</div>
                        <h3 class="empty-state-title">暂无写作题目</h3>
                        <p class="empty-state-desc">写作内容正在加载中...</p>
                    </div>
                ` : `
                    <div style="display:grid; gap:12px;">
                        ${topics.map(t => `
                            <div class="glass-card glass-card-interactive" onclick="WritingModule.showTopic('${t.id}')">
                                <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
                                    <div>
                                        <div style="font-weight:600; margin-bottom:6px;">${t.title || t.question?.slice(0, 60) + '...'}</div>
                                        <div style="font-size:var(--text-xs); color:var(--text-secondary);">
                                            ${t.category || ''} ${t.band ? '· Band ' + t.band : ''}
                                        </div>
                                    </div>
                                    <span class="tag">${t.difficulty === 'easy' ? '⭐ 基础' : t.difficulty === 'medium' ? '⭐⭐ 中档' : '⭐⭐⭐ 困难'}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        `;
    },

    switchTask(task) {
        this.currentTask = task;
        this.currentTopic = null;
        this.render();
    },

    showTopic(id) {
        const topics = this.getTopics();
        const topic = topics.find(t => t.id === id);
        if (!topic) return;

        this.currentTopic = topic;

        const content = document.getElementById('app-content');
        content.innerHTML = `
            <div class="page-section writing-container">
                <div style="margin-bottom:16px;">
                    <button class="btn btn-ghost" onclick="WritingModule.render()">← 返回列表</button>
                </div>

                <!-- Topic Card -->
                <div class="writing-topic-card page-enter">
                    <div class="writing-topic-label">
                        Task ${this.currentTask} · ${this.currentTask === 1 ? '图表作文' : '议论文'}
                        ${topic.band ? `· 目标 Band ${topic.band}` : ''}
                    </div>
                    <div class="writing-topic-text">${topic.question || topic.title}</div>
                    ${topic.hint ? `<div class="writing-topic-hint">💡 ${topic.hint}</div>` : ''}
                </div>

                <!-- Writing Timer -->
                <div class="writing-timer-bar">
                    <span style="font-size:var(--text-sm); color:var(--text-secondary);">⏱️ 建议用时:</span>
                    <span style="font-weight:700; color:var(--accent-primary);">${this.currentTask === 1 ? '20 分钟' : '40 分钟'}</span>
                </div>

                <!-- Framework (思路框架) -->
                <div class="writing-framework page-enter">
                    <div class="writing-framework-title">📋 写作思路框架</div>
                    ${(topic.framework || this.getDefaultFramework()).map(step => `
                        <div class="writing-framework-step">${step}</div>
                    `).join('')}
                </div>

                <!-- Topic Vocabulary -->
                ${topic.vocabulary ? `
                    <div class="writing-vocab-section">
                        <div class="writing-vocab-title">📝 话题词汇推荐</div>
                        <div class="writing-vocab-grid">
                            ${topic.vocabulary.map(v => `<span class="writing-vocab-chip">${v}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Sample Essay -->
                ${topic.sample ? `
                    <div class="writing-sample page-enter">
                        <div class="writing-sample-title">📖 范文参考</div>
                        ${topic.band ? `<div class="writing-sample-band">Band ${topic.band} 范文</div>` : ''}
                        <div class="writing-sample-text">
                            ${topic.sample.split('\n').filter(p => p.trim()).map(p => `<p>${p}</p>`).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Self-Checklist -->
                <div class="writing-checklist page-enter">
                    <div class="writing-checklist-title">✅ 自评清单</div>
                    ${this.getChecklist().map((item, i) => `
                        <div class="checklist-item">
                            <input type="checkbox" class="checklist-checkbox" id="check-${i}">
                            <label for="check-${i}" class="checklist-text">${item}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    getDefaultFramework() {
        if (this.currentTask === 1) {
            return [
                '🔹 第一段 (Introduction): 改写题目，概述图表主要趋势',
                '🔹 第二段 (Overview): 总结最显著的特征/变化',
                '🔹 第三段 (Details 1): 详细描述第一组数据/变化',
                '🔹 第四段 (Details 2): 详细描述第二组数据/变化，做对比',
                '🔹 注意: 不要加入个人观点，只描述数据事实'
            ];
        }
        return [
            '🔹 第一段 (Introduction): 引入话题，明确表达你的立场',
            '🔹 第二段 (Body 1): 第一个论点 + 具体论据和例子',
            '🔹 第三段 (Body 2): 第二个论点 + 具体论据和例子',
            '🔹 第四段 (Body 3 - 可选): 让步反驳段',
            '🔹 第五段 (Conclusion): 总结观点，重申立场',
            '🔹 注意: 每个段落都需要主题句，用连接词衔接'
        ];
    },

    getChecklist() {
        if (this.currentTask === 1) {
            return [
                '是否改写了题目而不是照抄？',
                '是否包含了整体趋势概述？',
                '数据描述是否准确(数字/百分比)？',
                '是否使用了对比和比较的句式？',
                '词汇是否多样化(上升/下降/波动)？',
                '语法是否准确(时态/比较级)？',
                '字数是否达标(150+ words)？'
            ];
        }
        return [
            '是否清楚表达了自己的立场？',
            '每个段落是否有明确的主题句？',
            '论点是否有充分的论据支持？',
            '是否使用了连接词(however/moreover等)？',
            '词汇是否丰富(同义替换/话题词汇)？',
            '是否有让步和反驳的段落？',
            '结论是否重申了观点？',
            '字数是否达标(250+ words)？'
        ];
    }
};
