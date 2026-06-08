/* ============================================
   IELTS 7.0 - Main Application
   ============================================ */

const App = {
    // Initialize everything
    async init() {
        // Load theme
        const settings = Storage.getSettings();
        document.documentElement.setAttribute('data-theme', settings.theme || 'dark');
        document.querySelector('.theme-icon').textContent = settings.theme === 'dark' ? '🌙' : '☀️';

        // Init router
        Router.init();

        // Init modules
        VocabModule.init();
        VocabModule.loadCustomWords();
        SettingsModule.init();
        ListeningModule.init();
        SpeakingModule.init();
        ReadingModule.init();
        WritingModule.init();

        // Register dashboard route
        Router.register('dashboard', () => this.renderDashboard());
        Router.register('more', () => {
            // Just show the more menu on mobile
        });

        // Set up keyboard shortcuts globally
        this.setupKeyboardShortcuts();

        // Hide loader
        setTimeout(() => {
            document.getElementById('app-loader')?.classList.add('hide');
        }, 300);

        // Navigate to dashboard
        Router.navigate('dashboard');
    },

    // Dashboard render
    renderDashboard() {
        const content = document.getElementById('app-content');
        const stats = Storage.getStats();
        const checkins = Storage.getCheckins();
        const today = Utils.today();
        const checkedIn = checkins.includes(today);
        const settings = Storage.getSettings();
        const dailyNew = settings.dailyNewWords || 100;

        // Calculate streak
        let streak = 0;
        const todayDate = new Date();
        for (let i = checkins.length - 1; i >= 0; i--) {
            const checkDate = new Date(checkins[i] + 'T00:00:00');
            const diffDays = Math.round((todayDate - checkDate) / (1000 * 60 * 60 * 24));
            if (diffDays === streak || diffDays === streak + 1) {
                streak = diffDays + 1;
            } else if (diffDays > streak + 1) {
                break;
            }
        }

        // Get vocabulary progress (ALL sources)
        const allSources = ['basic', 'intermediate', 'advanced', 'cet4', 'cet6', 'custom-ielts', 'custom'];
        let totalWordsLearned = 0;
        let totalMastered = 0;
        
        allSources.forEach(src => {
            const progress = Storage.getWordProgress(src);
            totalWordsLearned += Object.keys(progress).length;
            totalMastered += SRS.getMasteredCount(progress);
        });

        content.innerHTML = `
            <div class="fade-in">
                <!-- Hero -->
                <div class="hero">
                    <div class="hero-badge">${streak > 0 ? `🔥 连续 ${streak} 天` : '🎓 从今天开始'}</div>
                    <h1 class="hero-title">四六级雅思宝典</h1>
                    <p class="hero-subtitle">每天 ${dailyNew} 词，艾宾浩斯科学复习，一年冲刺雅思 7.0</p>
                    
                    <div class="hero-stats">
                        <div class="hero-stat">
                            <div class="hero-stat-num" style="color:var(--accent);">${totalWordsLearned}</div>
                            <div class="hero-stat-label">已学单词</div>
                        </div>
                        <div class="hero-stat">
                            <div class="hero-stat-num" style="color:var(--success);">${totalMastered}</div>
                            <div class="hero-stat-label">已掌握</div>
                        </div>
                        <div class="hero-stat">
                            <div class="hero-stat-num" style="color:var(--gold);">${checkins.length}</div>
                            <div class="hero-stat-label">打卡天</div>
                        </div>
                    </div>

                    <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
                        <button class="btn btn-primary btn-lg" onclick="Router.navigate('vocabulary')">🚀 开始学习</button>
                        <button class="btn ${checkedIn ? 'btn-secondary' : 'btn-gold'} btn-lg" onclick="App.checkin(this)">
                            ${checkedIn ? '✅ 今日已打卡' : '📅 今日打卡'}
                        </button>
                    </div>
                </div>

                <!-- Streak Bar -->
                ${streak > 0 ? `
                <div class="streak-bar" style="margin-bottom:28px;">
                    <div class="streak-fire ${streak > 0 ? 'fire-glow' : ''}">🔥</div>
                    <div>
                        <div class="streak-num">${streak} 天</div>
                        <div style="font-size:var(--text-sm); color:var(--text-secondary);">连续学习记录</div>
                    </div>
                </div>
                ` : ''}

                <!-- Today's Goal -->
                <div class="card" style="margin-bottom:28px;">
                    <div class="section-header" style="margin-bottom:16px;">
                        <h2 class="section-title">🎯 今日目标</h2>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(120px,1fr)); gap:16px;">
                        <div>
                            <div style="font-size:var(--text-xs); color:var(--text-secondary); margin-bottom:4px;">新词进度</div>
                            <div style="font-size:var(--text-2xl); font-weight:900; color:var(--accent);">
                                ${stats.todayWords || 0} <span style="font-size:var(--text-sm); color:var(--text-secondary); font-weight:500;">/ ${dailyNew}</span>
                            </div>
                        </div>
                        <div>
                            <div style="font-size:var(--text-xs); color:var(--text-secondary); margin-bottom:4px;">今日复习</div>
                            <div style="font-size:var(--text-2xl); font-weight:900; color:var(--gold);">${stats.todayReviewed || 0}</div>
                        </div>
                        <div>
                            <div style="font-size:var(--text-xs); color:var(--text-secondary); margin-bottom:4px;">总掌握率</div>
                            <div style="font-size:var(--text-2xl); font-weight:900; color:var(--success);">
                                ${totalWordsLearned > 0 ? Math.round(totalMastered/totalWordsLearned*100) : 0}%
                            </div>
                        </div>
                    </div>
                    <div class="progress-track" style="margin-top:16px;">
                        <div class="progress-fill" style="width:${dailyNew > 0 ? Math.min(100, (stats.todayWords||0)/dailyNew*100) : 0}%"></div>
                    </div>
                </div>

                <!-- Module Cards -->
                <div class="section-header">
                    <h2 class="section-title">📚 学习模块</h2>
                </div>
                <div class="module-grid">
                    <div class="module-card" onclick="Router.navigate('vocabulary')">
                        <div class="module-card-icon">📖</div>
                        <div class="module-card-title">单词背诵</div>
                        <div class="module-card-desc">不背单词风格 · 艾宾浩斯科学复习</div>
                        <div style="margin-top:12px; display:flex; gap:4px; flex-wrap:wrap;">
                            <span class="badge-blue">基础</span>
                            <span class="badge-gold">中档</span>
                            <span class="badge-rose">高级</span>
                            <span class="badge-purple">CET4/6</span>
                            <span class="badge-green">主题词</span>
                        </div>
                    </div>
                    <div class="module-card" onclick="Router.navigate('listening')">
                        <div class="module-card-icon">🎧</div>
                        <div class="module-card-title">听力训练</div>
                        <div class="module-card-desc">沉浸式视频 + 字幕 + 理解题 + 听写</div>
                        <span class="tag" style="margin-top: 12px;">15 个课程</span>
                    </div>
                    <div class="module-card" onclick="Router.navigate('speaking')">
                        <div class="module-card-icon">🗣️</div>
                        <div class="module-card-title">口语练习</div>
                        <div class="module-card-desc">Part 1/2/3 题库 · 计时训练 · 范文参考</div>
                        <span class="tag" style="margin-top: 12px;">40 个话题</span>
                    </div>
                    <div class="module-card" onclick="Router.navigate('reading')">
                        <div class="module-card-icon">📚</div>
                        <div class="module-card-title">阅读理解</div>
                        <div class="module-card-desc">分屏阅读 · 自动批改 · 计时训练</div>
                        <span class="tag" style="margin-top: 12px;">10 篇文章</span>
                    </div>
                    <div class="module-card" onclick="Router.navigate('writing')">
                        <div class="module-card-icon">✍️</div>
                        <div class="module-card-title">写作训练</div>
                        <div class="module-card-desc">Task 1/2 · 框架引导 · 高分范文</div>
                        <span class="tag" style="margin-top: 12px;">10 个题目</span>
                    </div>
                    <div class="module-card" onclick="Router.navigate('settings')">
                        <div class="module-card-icon">⚙️</div>
                        <div class="module-card-title">学习计划</div>
                        <div class="module-card-desc">词库选择 · 每日词量 · 自定义导入</div>
                        <span class="tag" style="margin-top: 12px;">个性化配置</span>
                    </div>
                </div>

                <!-- Tips -->
                <div class="card" style="margin-top:28px;">
                    <h3 style="font-weight:700; margin-bottom:8px;">💡 ${Utils.randomItem(['雅思小贴士','学习技巧','今日金句'])}</h3>
                    <p style="font-size:var(--text-sm); color:var(--text-secondary); line-height:1.7;">
                        ${this.getDailyTip()}
                    </p>
                </div>
            </div>
        `;
    },

    // Check-in
    checkin(btn) {
        const checkins = Storage.getCheckins();
        const today = Utils.today();
        if (!checkins.includes(today)) {
            checkins.push(today);
            Storage.setCheckins(checkins);
            btn.className = 'btn btn-secondary btn-lg';
            btn.textContent = '✅ 今日已打卡';
            
            // Update streak display
            const streakEl = document.querySelector('.streak-number');
            if (streakEl) {
                const currentStreak = parseInt(streakEl.textContent);
                streakEl.textContent = currentStreak + 1;
            }
        }
    },

    // Keyboard shortcuts
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Don't trigger if user is typing in an input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            switch(e.key) {
                case '1': Router.navigate('dashboard'); break;
                case '2': Router.navigate('vocabulary'); break;
                case '3': Router.navigate('listening'); break;
                case '4': Router.navigate('speaking'); break;
                case '5': Router.navigate('reading'); break;
                case '6': Router.navigate('writing'); break;
            }
        });
    },

    // Daily tips
    getDailyTip() {
        const tips = [
            '雅思听力 Section 1 和 2 通常是日常生活对话，Section 3 和 4 是学术讨论和讲座。建议先从 Section 1 开始练习。',
            '口语 Part 2 的 1 分钟准备时间非常宝贵！建议在草稿纸上写下 3-4 个关键词，而不是完整的句子。',
            '阅读中遇到生词不要慌，学会根据上下文猜测词义。雅思阅读不需要认识每一个单词。',
            '写作 Task 2 占总分的 2/3，建议先写 Task 2 再写 Task 1，因为 Task 2 的分值更高。',
            '每天坚持背 50 个新词 + 复习之前出错的单词，一年可以掌握 8000+ 词汇，远超雅思 7 分要求。',
            '听力练习时，先看题目预测答案类型（人名/数字/日期），这会大大提高准确率。',
            '口语考试不要背答案！考官能轻易识别背诵痕迹。记住关键词和框架，用自己的话表达。',
            '阅读 Heading 匹配题：先读 headings，标关键词，再读段落首尾句，效率最高。',
            '写作使用多样化的句式很重要：简单句+复合句+复杂句交替使用，但不要为了复杂而复杂。',
            '听力大小写不影响分数，但拼写错误会扣分。常见的星期、月份拼写要牢记。',
            '口语 Part 3 是提分关键！展示你的逻辑思维和深入讨论能力，不要只给简短回答。',
            '阅读判断题(T/F/NG)：注意区分 False 和 Not Given，False 是"与原文矛盾"，NG 是"原文没提"。',
            '每天花 15 分钟做精听训练：听一句写一句，坚持一个月听力水平会有质的飞跃。',
            '写作不要用模板！但可以记住一些万能连接词和句型框架，灵活运用。',
            '考前一个月，每周至少做一套完整的模拟题，严格按照考试时间进行。'
        ];
        return Utils.randomItem(tips);
    }
};

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());
