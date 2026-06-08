/* ============================================
   IELTS 口语模块 JS
   ============================================ */

const SpeakingModule = {
    currentPart: 1,
    currentTopic: null,
    timer: null,
    timeLeft: 0,
    isRunning: false,

    init() {
        Router.register('speaking', () => this.render());
    },

    getTopics() {
        const data = window.SPEAKING_DATA;
        return data ? data[`part${this.currentPart}`] || [] : [];
    },

    render() {
        const content = document.getElementById('app-content');
        const topics = this.getTopics();
        
        content.innerHTML = `
            <div class="page-section speaking-container">
                <div class="page-header">
                    <h1 class="page-title">🗣️ 口语练习</h1>
                    <p class="page-subtitle">雅思口语三部分全方位练习，轻松应对考官</p>
                </div>

                <!-- Part Selector -->
                <div class="speaking-part-selector">
                    <button class="speaking-part-btn ${this.currentPart === 1 ? 'active' : ''}" 
                        onclick="SpeakingModule.switchPart(1)">Part 1 日常话题</button>
                    <button class="speaking-part-btn ${this.currentPart === 2 ? 'active' : ''}" 
                        onclick="SpeakingModule.switchPart(2)">Part 2 话题卡</button>
                    <button class="speaking-part-btn ${this.currentPart === 3 ? 'active' : ''}" 
                        onclick="SpeakingModule.switchPart(3)">Part 3 深入讨论</button>
                </div>

                <!-- Topics List -->
                ${topics.length === 0 ? `
                    <div class="empty-state">
                        <div class="empty-state-icon">🗣️</div>
                        <h3 class="empty-state-title">暂无口语话题</h3>
                        <p class="empty-state-desc">话题库正在加载中...</p>
                    </div>
                ` : `
                    <div style="display:flex; gap:12px; justify-content:center; margin-bottom:20px;">
                        <button class="btn btn-primary btn-lg" onclick="SpeakingModule.randomTopic()">🎲 随机抽题</button>
                    </div>
                    <div style="display:grid; gap:12px;">
                        ${topics.map(t => `
                            <div class="glass-card glass-card-interactive" onclick="SpeakingModule.showTopic('${t.id}')">
                                <div style="font-weight:600; margin-bottom:4px;">${t.question || t.title}</div>
                                <div style="font-size:var(--text-xs); color:var(--text-secondary);">
                                    ${t.difficulty ? (t.difficulty === 'easy' ? '⭐ 简单' : t.difficulty === 'medium' ? '⭐⭐ 中等' : '⭐⭐⭐ 困难') : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        `;

        // If there's already a selected topic, show it
        if (this.currentTopic) {
            this.showTopic(this.currentTopic.id);
        }
    },

    switchPart(part) {
        this.currentPart = part;
        this.currentTopic = null;
        this.stopTimer();
        this.render();
    },

    randomTopic() {
        const topics = this.getTopics();
        if (topics.length === 0) return;
        const topic = Utils.randomItem(topics);
        this.currentTopic = topic;
        this.showTopic(topic.id);
    },

    showTopic(id) {
        const topics = this.getTopics();
        const topic = topics.find(t => t.id === id);
        if (!topic) return;

        this.currentTopic = topic;
        this.stopTimer();

        const container = document.querySelector('.speaking-container') || document.getElementById('app-content');
        
        // Scroll to topic card
        const topicSection = document.createElement('div');
        
        const timerMinutes = this.currentPart === 2 ? 1 : 2;
        const timerSeconds = timerMinutes * 60;
        this.timeLeft = timerSeconds;

        // Find the topics list and insert after it
        const existingCard = document.getElementById('speaking-topic-card');
        if (existingCard) existingCard.remove();

        const cardHtml = `
            <div id="speaking-topic-card" class="speaking-topic-card page-enter">
                <div class="speaking-topic-label">Part ${this.currentPart} · ${this.currentPart === 1 ? '日常话题' : this.currentPart === 2 ? '话题卡' : '深入讨论'}</div>
                
                ${this.currentPart === 2 ? `
                    <div style="font-size:var(--text-sm); color:var(--text-tertiary); margin-bottom:12px;">
                        请就以下话题进行 1-2 分钟的陈述
                    </div>
                    <div class="speaking-topic-text" style="font-size:var(--text-lg);">
                        <strong>${topic.title}</strong>
                    </div>
                    <div style="text-align:left; max-width:500px; margin:0 auto 20px;">
                        ${(topic.prompts || []).map(p => `<p style="font-size:var(--text-sm); color:var(--text-secondary); margin-bottom:4px;">• ${p}</p>`).join('')}
                    </div>
                ` : `
                    <div class="speaking-topic-text">${topic.question || topic.title}</div>
                `}

                <div class="speaking-timer" id="speaking-timer">${Utils.formatTime(this.timeLeft)}</div>

                <div class="speaking-controls">
                    <button class="btn btn-primary" onclick="SpeakingModule.startTimer()">▶️ 开始计时</button>
                    <button class="btn btn-secondary" onclick="SpeakingModule.pauseTimer()">⏸️ 暂停</button>
                    <button class="btn btn-ghost" onclick="SpeakingModule.resetTimer()">🔄 重置</button>
                    <button class="btn btn-secondary" onclick="SpeakingModule.showSample('${topic.id}')">📖 看范文</button>
                </div>

                <div id="speaking-sample-area"></div>
            </div>
        `;

        // Append card to container
        const pageSection = container.querySelector('.page-section') || container;
        
        // Check if card already exists in DOM
        const mainContent = document.getElementById('app-content');
        const existing = document.getElementById('speaking-topic-card');
        
        if (existing) {
            existing.outerHTML = cardHtml;
        } else {
            // Insert after the topics list
            const topicsList = mainContent.querySelector('[style*="display:grid"]') || 
                              mainContent.querySelector('.empty-state') ||
                              mainContent.querySelector('[style*="justify-content:center"]')?.parentElement;
            
            if (topicsList?.parentElement) {
                topicsList.insertAdjacentHTML('afterend', cardHtml);
            } else {
                mainContent.insertAdjacentHTML('beforeend', cardHtml);
            }
        }

        this.currentTopic = topic;
        
        // Scroll to card
        document.getElementById('speaking-topic-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },

    startTimer() {
        if (this.isRunning) return;
        this.isRunning = true;
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            const timerEl = document.getElementById('speaking-timer');
            if (timerEl) {
                timerEl.textContent = Utils.formatTime(this.timeLeft);
                if (this.timeLeft <= 10) {
                    timerEl.classList.add('warning');
                } else {
                    timerEl.classList.remove('warning');
                }
            }
            if (this.timeLeft <= 0) {
                this.stopTimer();
                const timerEl = document.getElementById('speaking-timer');
                if (timerEl) {
                    timerEl.textContent = '⏰ 时间到！';
                    timerEl.classList.add('warning');
                }
            }
        }, 1000);
    },

    pauseTimer() {
        this.isRunning = false;
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    },

    resetTimer() {
        this.stopTimer();
        const minutes = this.currentPart === 2 ? 1 : 2;
        this.timeLeft = minutes * 60;
        const timerEl = document.getElementById('speaking-timer');
        if (timerEl) {
            timerEl.textContent = Utils.formatTime(this.timeLeft);
            timerEl.classList.remove('warning');
        }
    },

    stopTimer() {
        this.isRunning = false;
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    },

    showSample(id) {
        const topics = this.getTopics();
        const topic = topics.find(t => t.id === id);
        if (!topic || !topic.sample) return;

        const area = document.getElementById('speaking-sample-area');
        if (!area) return;

        area.innerHTML = `
            <div class="speaking-sample page-enter">
                <div class="speaking-sample-title">📖 范文参考</div>
                <div class="speaking-sample-text">${topic.sample.replace(/\n/g, '<br>')}</div>
                ${topic.keywords ? `
                    <div class="speaking-vocab-list">
                        ${topic.keywords.map(kw => `<span class="speaking-vocab-tag">${kw}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        `;

        area.scrollIntoView({ behavior: 'smooth' });
    }
};
