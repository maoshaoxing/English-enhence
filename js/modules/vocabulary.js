/* ============================================
   Vocabulary Module - 不背单词风格
   支持多词库 + 艾宾浩斯遗忘曲线
   ============================================ */

const VocabModule = {
    currentSource: 'basic',
    currentSession: [],
    sessionIndex: 0,
    revealed: false,
    isActive: false,
    allSources: ['basic', 'intermediate', 'advanced', 'cet4', 'cet6', 'custom'],

    // Initialize
    init() {
        Router.register('vocabulary', () => this.render());
        Router.register('review', () => this.renderReview());
    },

    // Get active sources from settings
    getActiveSources() {
        const settings = Storage.getSettings();
        let sources = settings.activeSources || ['basic'];
        // Filter to only include valid sources that have data
        return sources.filter(s => VOCAB_DATA[s] && VOCAB_DATA[s].length > 0);
    },

    // Get words for current source (or all active)
    getWordList(source) {
        const s = source || this.currentSource;
        if (s === '_all') {
            // Return combined words from all active sources
            const sources = this.getActiveSources();
            let combined = [];
            sources.forEach(src => {
                combined = combined.concat(VOCAB_DATA[src] || []);
            });
            return combined;
        }
        return VOCAB_DATA[s] || [];
    },

    // Get source label
    getSourceLabel(source) {
        if (source === '_all') return '全部词库';
        return VOCAB_SOURCES[source]?.label || source;
    },

    getSourceEmoji(source) {
        if (source === '_all') return '📚';
        return VOCAB_SOURCES[source]?.emoji || '📖';
    },

    // Get total progress across all sources
    getTotalProgress() {
        const sources = this.getActiveSources();
        let totalWords = 0;
        let totalLearned = 0;
        let totalMastered = 0;

        sources.forEach(s => {
            const words = VOCAB_DATA[s] || [];
            const progress = Storage.getWordProgress(s);
            totalWords += words.length;
            totalLearned += Object.keys(progress).length;
            totalMastered += SRS.getMasteredCount(progress);
        });

        return {
            totalLearned,
            totalMastered,
            totalWords,
            masteryRate: totalWords > 0 ? Math.round((totalMastered / totalWords) * 100) : 0
        };
    },

    // Main render
    render() {
        const content = document.getElementById('app-content');
        const settings = Storage.getSettings();
        const dailyCount = settings.dailyNewWords || 100;
        const sources = this.getActiveSources();
        const totalProgress = this.getTotalProgress();
        
        // Check if current source still valid
        if (!sources.includes(this.currentSource) && this.currentSource !== '_all') {
            this.currentSource = sources[0] || 'basic';
        }

        // Get current source stats
        const allWords = this.getWordList();
        const progress = Storage.getWordProgress(this.currentSource);
        const levelStats = SRS.getLevelStats(progress, allWords.length);
        const srsInfo = SRS.getReviewRecommendations(progress);

        content.innerHTML = `
            <div class="page-section vocab-container" id="vocab-root">
                <div class="page-header">
                    <h1 class="page-title">📖 单词背诵</h1>
                    <p class="page-subtitle">艾宾浩斯遗忘曲线 · 每日 ${dailyCount} 词</p>
                </div>

                <!-- Source Selector -->
                <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-bottom: 16px;">
                    ${sources.length > 1 ? `
                        <button class="level-btn ${this.currentSource === '_all' ? 'active' : ''}" 
                            onclick="VocabModule.switchSource('_all')">📚 全部</button>
                    ` : ''}
                    ${sources.map(src => `
                        <button class="level-btn ${this.currentSource === src ? 'active' : ''}" 
                            onclick="VocabModule.switchSource('${src}')">
                            ${VOCAB_SOURCES[src]?.emoji || '📖'} ${VOCAB_SOURCES[src]?.label || src}
                        </button>
                    `).join('')}
                    <button class="btn btn-ghost btn-sm" onclick="Router.navigate('settings')" 
                        style="margin-left: 8px;">⚙️</button>
                </div>

                <!-- Total Progress (when on _all) -->
                ${this.currentSource === '_all' ? `
                    <div class="glass-card" style="margin-bottom: 20px; text-align: center;">
                        <h3 style="font-weight: 700; margin-bottom: 12px;">📊 全部词库总进度</h3>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
                            <div>
                                <div style="font-size: var(--text-2xl); font-weight: 800; color: var(--accent-primary);">
                                    ${totalProgress.totalLearned}</div>
                                <div style="font-size: var(--text-xs); color: var(--text-secondary);">已学 / ${totalProgress.totalWords}</div>
                            </div>
                            <div>
                                <div style="font-size: var(--text-2xl); font-weight: 800; color: var(--success);">
                                    ${totalProgress.totalMastered}</div>
                                <div style="font-size: var(--text-xs); color: var(--text-secondary);">已掌握</div>
                            </div>
                            <div>
                                <div style="font-size: var(--text-2xl); font-weight: 800; color: var(--gold);">
                                    ${totalProgress.masteryRate}%</div>
                                <div style="font-size: var(--text-xs); color: var(--text-secondary);">总掌握率</div>
                            </div>
                        </div>
                        <div class="progress-bar" style="margin-top: 12px;">
                            <div class="progress-fill gold" style="width: ${totalProgress.masteryRate}%"></div>
                        </div>
                    </div>
                ` : `
                    <!-- Summary Stats -->
                    <div class="vocab-summary">
                        <div class="vocab-summary-item">
                            <div class="vocab-summary-value" style="color: var(--accent-primary)">${levelStats.learned}</div>
                            <div class="vocab-summary-label">已学</div>
                        </div>
                        <div class="vocab-summary-item">
                            <div class="vocab-summary-value" style="color: var(--success)">${levelStats.mastered}</div>
                            <div class="vocab-summary-label">已掌握 ✓</div>
                        </div>
                        <div class="vocab-summary-item">
                            <div class="vocab-summary-value" style="color: var(--gold)">${levelStats.remaining}</div>
                            <div class="vocab-summary-label">剩余</div>
                        </div>
                        <div class="vocab-summary-item">
                            <div class="vocab-summary-value" style="color: var(--gold)">${levelStats.masteryRate}%</div>
                            <div class="vocab-summary-label">掌握率</div>
                        </div>
                    </div>

                    <!-- Progress bar -->
                    <div class="progress-bar" style="margin-bottom: 16px;">
                        <div class="progress-fill gold" style="width: ${levelStats.masteryRate}%"></div>
                    </div>
                `}

                <!-- SRS Info -->
                <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-bottom: 20px;">
                    <span class="tag">📅 今日待复习: <strong>${srsInfo.dueToday}</strong></span>
                    <span class="tag">📆 本周待复习: <strong>${srsInfo.dueThisWeek}</strong></span>
                    <span class="tag">💪 困难词: <strong>${srsInfo.struggling}</strong></span>
                    <span class="tag">🎯 每日目标: <strong>${dailyCount}</strong></span>
                </div>

                <!-- Action Buttons -->
                <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 24px;">
                    <button class="btn btn-primary btn-lg" onclick="VocabModule.startSession()">
                        🚀 开始学习
                    </button>
                    <button class="btn btn-secondary btn-lg" onclick="VocabModule.renderReview()">
                        🔄 复习错题
                    </button>
                </div>

                <!-- Per-source progress (when in _all mode) -->
                ${this.currentSource === '_all' ? this.renderAllSourcesProgress() : ''}

                <!-- Calendar -->
                <div class="glass-card">
                    <h3 style="font-size: var(--text-lg); font-weight: 700; margin-bottom: 12px;">📊 学习日历</h3>
                    <div id="vocab-calendar"></div>
                </div>

                <!-- Ebbinghaus Schedule -->
                <div class="glass-card" style="margin-top: 16px;">
                    <h3 style="font-size: var(--text-sm); font-weight: 700; margin-bottom: 8px; color: var(--text-secondary);">
                        🧠 艾宾浩斯复习周期
                    </h3>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
                        <span class="tag" style="color: var(--success);">1天</span>
                        <span class="tag" style="color: var(--success);">2天</span>
                        <span class="tag" style="color: var(--info);">4天</span>
                        <span class="tag" style="color: var(--info);">7天</span>
                        <span class="tag" style="color: var(--accent-primary);">15天</span>
                        <span class="tag" style="color: var(--accent-primary);">30天</span>
                        <span class="tag" style="color: var(--gold);">60天</span>
                        <span class="tag" style="color: var(--gold);">120天</span>
                    </div>
                </div>
            </div>
        `;

        this.renderCalendar();
    },

    // Render per-source progress in _all mode
    renderAllSourcesProgress() {
        const sources = this.getActiveSources();
        let html = '<div class="glass-card" style="margin-bottom: 20px;"><h3 style="font-weight:700; margin-bottom:12px;">📚 词库进度详情</h3>';

        sources.forEach(s => {
            const words = VOCAB_DATA[s] || [];
            const progress = Storage.getWordProgress(s);
            const learned = Object.keys(progress).length;
            const mastered = SRS.getMasteredCount(progress);
            const pct = words.length > 0 ? Math.round(learned / words.length * 100) : 0;
            
            html += `
                <div style="margin-bottom: 10px; cursor: pointer;" onclick="VocabModule.switchSource('${s}')">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <span style="font-size: var(--text-sm); font-weight: 600;">
                            ${VOCAB_SOURCES[s]?.emoji || '📖'} ${VOCAB_SOURCES[s]?.label || s}
                        </span>
                        <span style="font-size: var(--text-xs); color: var(--text-secondary);">
                            ${learned}/${words.length} · 掌握 ${mastered}
                        </span>
                    </div>
                    <div class="progress-bar" style="height: 4px;">
                        <div class="progress-fill" style="width: ${pct}%"></div>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        return html;
    },

    // Render calendar
    renderCalendar() {
        const container = document.getElementById('vocab-calendar');
        if (!container) return;

        const checkins = Storage.getCheckins();
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
        let html = `<div style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: 12px; text-align: center;">
            ${year}年${month + 1}月 · ${checkins.length}天打卡</div>
            <div class="calendar-grid">`;

        weekDays.forEach(d => {
            html += `<div style="text-align:center; font-size:var(--text-xs); color:var(--text-tertiary); padding:4px 0;">${d}</div>`;
        });

        for (let i = 0; i < firstDay; i++) {
            html += '<div class="calendar-day empty"></div>';
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const isChecked = checkins.includes(dateStr);
            const isToday = dateStr === Utils.today();
            html += `<div class="calendar-day ${isChecked ? 'checked' : ''} ${isToday ? 'today' : ''}">${day}</div>`;
        }

        html += '</div>';
        container.innerHTML = html;
    },

    // Switch source
    switchSource(source) {
        this.currentSource = source;
        this.render();
    },

    // Start learning session
    startSession() {
        const allWords = this.getWordList();
        const progress = Storage.getWordProgress(this.currentSource);
        const settings = Storage.getSettings();
        const dailyCount = settings.dailyNewWords || 100;

        const result = SRS.getTodayPlan(allWords, progress, this.currentSource, dailyCount);

        if (result.plan.length === 0) {
            // Check if all words are done
            if (allWords.length > 0 && Object.keys(progress).length >= allWords.length && result.totalDue === 0) {
                this.showMessage('🎉 太棒了！这个词库的所有单词都已掌握！');
                return;
            }
            this.showMessage('🎉 今天没有需要学习的单词，明天再来吧！');
            return;
        }

        this.currentSession = result.plan;
        this.sessionIndex = 0;
        this.revealed = false;
        this.isActive = true;
        this.renderSession();
    },

    // Render session
    renderSession() {
        const content = document.getElementById('app-content');
        if (this.sessionIndex >= this.currentSession.length) {
            this.renderSessionComplete();
            return;
        }

        const item = this.currentSession[this.sessionIndex];
        const total = this.currentSession.length;
        const progress = (this.sessionIndex / total * 100).toFixed(0);

        content.innerHTML = `
            <div class="page-section vocab-container">
                <!-- Session progress -->
                <div class="session-progress">
                    <span class="session-progress-text">${this.sessionIndex + 1} / ${total}</span>
                    <div class="session-progress-bar">
                        <div class="session-progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <span class="tag">${item.type === 'new' ? '🆕 新词' : '🔄 复习'}</span>
                    <span class="tag">${this.getSourceEmoji(this.currentSource)} ${this.getSourceLabel(this.currentSource)}</span>
                </div>

                <!-- Word Card -->
                <div class="word-card-container">
                    <div class="word-card" id="word-card" onclick="VocabModule.revealWord()" style="min-height: ${this.revealed ? 'auto' : '360px'};">
                        ${!this.revealed ? `
                            <div class="word-display" id="word-display">
                                <div class="word-text">${item.word}</div>
                                <div class="word-phonetic">${item.phonetic || ''}</div>
                                <div class="word-hint">
                                    <span class="kbd">空格</span> 或点击卡片查看释义
                                </div>
                            </div>
                        ` : `
                            <div class="word-revealed" style="width: 100%;">
                                <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px; flex-wrap:wrap; justify-content:center;">
                                    <span class="word-text" style="font-size: 2rem; margin-bottom:0;">${item.word}</span>
                                    <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation(); Utils.speak('${item.word.replace(/'/g, "\\'")}')">🔊</button>
                                </div>
                                <div class="word-phonetic" style="font-size: var(--text-sm);">${item.phonetic || ''}</div>
                                <div class="word-meaning">${item.meaning || ''}</div>
                                
                                <div class="word-examples">
                                    ${(item.examples || []).map(ex => `
                                        <div class="word-example">
                                            <div class="word-example-en">${ex.en || ''}</div>
                                            <div class="word-example-zh">${ex.zh || ''}</div>
                                        </div>
                                    `).join('')}
                                </div>
                                
                                ${item.memoryTip ? `
                                    <div class="word-memory-tip">
                                        <span class="word-memory-icon">💡</span>
                                        <span>${item.memoryTip}</span>
                                    </div>
                                ` : ''}
                            </div>
                        `}
                    </div>
                </div>

                <div style="text-align: center; margin-bottom: 12px;">
                    <button class="btn btn-ghost btn-sm" onclick="Utils.speak('${item.word.replace(/'/g, "\\'")}')">
                        🔊 播放发音
                    </button>
                </div>

                ${this.revealed ? `
                    <div class="word-actions">
                        <button class="word-action-btn btn-know" onclick="VocabModule.rateWord(5)">
                            <span class="action-icon">✅</span>
                            <span class="action-label">认识</span>
                            <span class="action-sub">记得很熟</span>
                        </button>
                        <button class="word-action-btn btn-unsure" onclick="VocabModule.rateWord(3)">
                            <span class="action-icon">🤔</span>
                            <span class="action-label">模糊</span>
                            <span class="action-sub">想了一会儿</span>
                        </button>
                        <button class="word-action-btn btn-dontknow" onclick="VocabModule.rateWord(0)">
                            <span class="action-icon">❌</span>
                            <span class="action-label">不认识</span>
                            <span class="action-sub">完全忘了</span>
                        </button>
                    </div>
                ` : ''}

                <!-- Quick stats -->
                <div style="text-align: center; margin-top: 12px;">
                    <span style="font-size: var(--text-xs); color: var(--text-tertiary);">
                        ${this.currentSession.filter(w => w.type === 'review').length} 个待复习 · ${this.currentSession.filter(w => w.type === 'new').length} 个新词
                    </span>
                </div>
            </div>
        `;

        // Auto-play pronunciation for new words
        if (!this.revealed && item.type === 'new') {
            setTimeout(() => Utils.speak(item.word), 300);
        }
    },

    // Reveal word
    revealWord() {
        if (this.revealed || this.sessionIndex >= this.currentSession.length) return;
        this.revealed = true;
        this.renderSession();
    },

    // Rate word and move next
    rateWord(quality) {
        if (this.sessionIndex >= this.currentSession.length) return;

        const item = this.currentSession[this.sessionIndex];
        const progress = Storage.getWordProgress(this.currentSource);
        
        // Update Ebbinghaus SRS
        SRS.review(item.word, quality, progress);
        Storage.setWordProgress(this.currentSource, progress);

        // Update stats
        const stats = Storage.getStats();
        stats.todayWords = (stats.todayWords || 0) + 1;
        if (item.type === 'review') {
            stats.todayReviewed = (stats.todayReviewed || 0) + 1;
        }
        stats.lastStudyDate = Utils.today();
        Storage.setStats(stats);

        // Daily log
        const today = Utils.today();
        const dailyLog = Storage.getDailyLog(today);
        dailyLog.newWords += (item.type === 'new' ? 1 : 0);
        dailyLog.reviewedWords += (item.type === 'review' ? 1 : 0);
        dailyLog.completedItems.push({
            word: item.word,
            quality,
            source: this.currentSource,
            type: item.type,
            time: new Date().toISOString()
        });
        Storage.setDailyLog(today, dailyLog);

        // Check-in
        this.checkin();

        // Next
        this.sessionIndex++;
        this.revealed = false;

        if (this.sessionIndex >= this.currentSession.length) {
            this.renderSessionComplete();
        } else {
            this.renderSession();
        }
    },

    // Check-in
    checkin() {
        const checkins = Storage.getCheckins();
        const today = Utils.today();
        if (!checkins.includes(today)) {
            checkins.push(today);
            Storage.setCheckins(checkins);
        }
    },

    // Session complete
    renderSessionComplete() {
        const content = document.getElementById('app-content');
        const totalWords = this.currentSession.length;

        const reviewCount = this.currentSession.filter(w => w.type === 'review').length;
        const newCount = this.currentSession.filter(w => w.type === 'new').length;

        // Calculate streak
        const checkins = Storage.getCheckins();
        let streak = 0;
        const today = new Date();
        for (let i = checkins.length - 1; i >= 0; i--) {
            const checkDate = new Date(checkins[i] + 'T00:00:00');
            const diffDays = Math.round((today - checkDate) / (1000 * 60 * 60 * 24));
            if (diffDays === streak || diffDays === streak + 1) {
                streak = diffDays + 1;
            } else if (diffDays > streak + 1) {
                break;
            }
        }

        content.innerHTML = `
            <div class="page-section vocab-container">
                <div class="session-stats">
                    <div class="session-stats-icon">🎉</div>
                    <h2 class="session-stats-title">今日学习完成！</h2>
                    
                    <div class="session-stats-grid" style="grid-template-columns: repeat(3, 1fr);">
                        <div class="session-stat-item">
                            <div class="session-stat-value" style="color: var(--accent-primary)">${totalWords}</div>
                            <div class="session-stat-label">今日总计</div>
                        </div>
                        <div class="session-stat-item">
                            <div class="session-stat-value" style="color: var(--info)">${newCount}</div>
                            <div class="session-stat-label">新学词汇</div>
                        </div>
                        <div class="session-stat-item">
                            <div class="session-stat-value" style="color: var(--gold)">${reviewCount}</div>
                            <div class="session-stat-label">复习词汇</div>
                        </div>
                    </div>

                    <div class="streak-display" style="justify-content: center; margin-bottom: 24px;">
                        <div class="streak-fire ${streak > 0 ? 'flame-effect' : ''}">🔥</div>
                        <div>
                            <div class="streak-number">${streak}</div>
                            <div class="streak-label">连续学习天数</div>
                        </div>
                    </div>

                    <!-- Ebbinghaus schedule for today's new words -->
                    <div class="glass-card" style="margin-bottom: 20px; text-align: left;">
                        <h4 style="font-size: var(--text-sm); font-weight: 700; margin-bottom: 8px;">📅 今日新词复习计划</h4>
                        <p style="font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.7;">
                            今天学的 ${newCount} 个新词将在以下时间点安排复习：<br>
                            🔄 第1次: <strong>明天</strong> · 第2次: <strong>2天后</strong> · 第3次: <strong>4天后</strong><br>
                            🔄 第4次: <strong>7天后</strong> · 第5次: <strong>15天后</strong> · 第6次: <strong>30天后</strong><br>
                            🔄 第7次: <strong>60天后</strong> · 第8次: <strong>120天后</strong>
                        </p>
                    </div>

                    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                        <button class="btn btn-primary btn-lg" onclick="VocabModule.startSession()">
                            🔄 再来一组
                        </button>
                        <button class="btn btn-secondary btn-lg" onclick="Router.navigate('vocabulary')">
                            📊 查看进度
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    // Render review page (error book)
    renderReview() {
        const content = document.getElementById('app-content');
        const progress = Storage.getWordProgress(this.currentSource);
        const allWords = this.getWordList();
        const wordMap = {};
        allWords.forEach(w => { wordMap[w.word] = w; });

        // Get most-mistaken words
        const mistakes = Object.entries(progress)
            .filter(([_, r]) => r.mistakes > 0)
            .sort((a, b) => b[1].mistakes - a[1].mistakes)
            .slice(0, 30);

        const sources = this.getActiveSources();

        content.innerHTML = `
            <div class="page-section vocab-container">
                <div class="page-header">
                    <h1 class="page-title">🔄 错题复习</h1>
                    <p class="page-subtitle">集中攻克记忆难点</p>
                </div>

                <!-- Source selector for review -->
                <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-bottom: 16px;">
                    ${sources.length > 1 ? `
                        <button class="level-btn ${this.currentSource === '_all' ? 'active' : ''}" 
                            onclick="VocabModule.currentSource='_all'; VocabModule.renderReview()">📚 全部</button>
                    ` : ''}
                    ${sources.map(src => `
                        <button class="level-btn ${this.currentSource === src ? 'active' : ''}" 
                            onclick="VocabModule.currentSource='${src}'; VocabModule.renderReview()">
                            ${VOCAB_SOURCES[src]?.emoji || ''} ${VOCAB_SOURCES[src]?.label || src}
                        </button>
                    `).join('')}
                </div>

                ${mistakes.length === 0 ? `
                    <div class="empty-state">
                        <div class="empty-state-icon">🎉</div>
                        <h2 class="empty-state-title">没有错题！</h2>
                        <p class="empty-state-desc">继续保持，你的错误率为 0%</p>
                        <button class="btn btn-primary" onclick="Router.navigate('vocabulary')">返回单词</button>
                    </div>
                ` : `
                    <div style="text-align: center; margin-bottom: 16px;">
                        <button class="btn btn-primary" onclick="VocabModule.startSession()">
                            🚀 开始复习 (${mistakes.length}个错题)
                        </button>
                    </div>
                    <div class="error-book-list">
                        ${mistakes.map(([word, record]) => {
                            const wd = wordMap[word];
                            return `
                                <div class="error-book-item" onclick="Utils.speak('${word.replace(/'/g, "\\'")}')">
                                    <div>
                                        <div class="error-book-word">${wd?.word || word}</div>
                                        <div style="font-size: var(--text-xs); color: var(--text-secondary);">${wd?.meaning || ''}</div>
                                    </div>
                                    <div class="error-book-count">出错 ${record.mistakes} 次</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `}
            </div>
        `;
    },

    // Show message
    showMessage(msg) {
        const content = document.getElementById('app-content');
        content.innerHTML = `
            <div class="page-section vocab-container">
                <div class="empty-state">
                    <div class="empty-state-icon">✅</div>
                    <h2 class="empty-state-title">${msg}</h2>
                    <button class="btn btn-primary" onclick="VocabModule.render()">返回</button>
                </div>
            </div>
        `;
    },

    // Load custom words from storage
    loadCustomWords() {
        const custom = Storage.get('custom_words', []);
        if (VOCAB_DATA) {
            VOCAB_DATA.custom = custom;
        }
    }
};
