/* ============================================
   Settings Module - Vocabulary Learning Plan
   ============================================ */

const SettingsModule = {
    init() {
        Router.register('settings', () => this.render());
    },

    render() {
        const content = document.getElementById('app-content');
        const settings = Storage.getSettings();
        const activeSources = settings.activeSources || ['basic'];

        content.innerHTML = `
            <div class="page-section" style="max-width: 600px; margin: 0 auto;">
                <div class="page-header">
                    <h1 class="page-title">⚙️ 学习计划</h1>
                    <p class="page-subtitle">定制你的专属背词方案</p>
                </div>

                <!-- Daily Word Count -->
                <div class="glass-card" style="margin-bottom: 20px;">
                    <h3 style="font-weight: 700; margin-bottom: 16px;">📊 每日学习量</h3>
                    <div style="text-align: center;">
                        <div style="font-size: 3rem; font-weight: 800; color: var(--accent-primary); margin-bottom: 8px;">
                            <span id="word-count-display">${settings.dailyNewWords}</span>
                            <span style="font-size: 1.2rem; color: var(--text-secondary);">词/天</span>
                        </div>
                        <p style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: 12px;">
                            拖拽滑块调整每日计划背诵的词汇量
                        </p>
                        <input type="range" id="daily-count-slider" 
                            min="10" max="200" step="10" value="${settings.dailyNewWords}"
                            style="width: 80%; height: 6px; -webkit-appearance: none; appearance: none; 
                            background: var(--accent-gradient); border-radius: 3px; outline: none; cursor: pointer;"
                            oninput="SettingsModule.updateWordCount(this.value)">
                        <div style="display: flex; justify-content: space-between; max-width: 80%; margin: 8px auto 0;">
                            <span style="font-size: var(--text-xs); color: var(--text-tertiary);">10词</span>
                            <span style="font-size: var(--text-xs); color: var(--text-accent); font-weight: 600;">推荐: 100词</span>
                            <span style="font-size: var(--text-xs); color: var(--text-tertiary);">200词</span>
                        </div>
                    </div>
                </div>

                <!-- Word Source Selection -->
                <div class="glass-card" style="margin-bottom: 20px;">
                    <h3 style="font-weight: 700; margin-bottom: 16px;">📚 选择词汇库</h3>
                    <p style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: 12px;">
                        勾选要学习的词汇来源（可多选）
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        ${Object.entries(VOCAB_SOURCES).map(([key, info]) => {
                            const data = VOCAB_DATA[key] || [];
                            const isActive = activeSources.includes(key);
                            const progress = Storage.getWordProgress(key);
                            const learned = Object.keys(progress).length;
                            return `
                                <label class="source-select-item" style="display: flex; align-items: center; gap: 12px; 
                                    padding: 12px 16px; background: ${isActive ? 'rgba(108,99,255,0.08)' : 'var(--bg-card)'}; 
                                    border: 1px solid ${isActive ? 'var(--accent-primary)' : 'var(--border-color)'}; 
                                    border-radius: var(--radius-md); cursor: pointer; transition: all var(--transition-fast);">
                                    <input type="checkbox" ${isActive ? 'checked' : ''} 
                                        onchange="SettingsModule.toggleSource('${key}', this.checked)"
                                        style="width: 20px; height: 20px; accent-color: var(--accent-primary); cursor: pointer;">
                                    <div style="flex: 1;">
                                        <div style="font-weight: 600; font-size: var(--text-sm);">
                                            ${info.emoji} ${info.label}
                                        </div>
                                        <div style="font-size: var(--text-xs); color: var(--text-secondary);">
                                            ${data.length} 词 · 已学 ${learned}
                                        </div>
                                    </div>
                                </label>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- Custom Words Import -->
                <div class="glass-card" style="margin-bottom: 20px;">
                    <h3 style="font-weight: 700; margin-bottom: 12px;">📝 导入自定义词汇</h3>
                    <p style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: 12px;">
                        每行一个单词，格式: 单词,释义,音标(可选)
                    </p>
                    <textarea id="custom-words-input" rows="6" 
                        style="width: 100%; resize: vertical; font-size: var(--text-sm); font-family: var(--font-mono);"
                        placeholder="abandon, 放弃, /əˈbændən/&#10;ability, 能力&#10;例如: word, meaning, phonetic"></textarea>
                    <div style="display: flex; gap: 8px; margin-top: 12px;">
                        <button class="btn btn-primary" onclick="SettingsModule.importCustomWords()">📥 导入词汇</button>
                        <button class="btn btn-ghost" onclick="SettingsModule.clearCustomWords()">🗑️ 清空自定义</button>
                    </div>
                    <div id="custom-words-status" style="margin-top: 8px; font-size: var(--text-sm);"></div>
                </div>

                <!-- Save & Start -->
                <div style="text-align: center; margin-top: 24px;">
                    <button class="btn btn-primary btn-lg" onclick="SettingsModule.saveAndStart()">
                        ✅ 保存并开始学习
                    </button>
                </div>

                <!-- Ebbinghaus Info -->
                <div class="glass-card" style="margin-top: 20px;">
                    <h3 style="font-weight: 700; margin-bottom: 8px;">🧠 艾宾浩斯遗忘曲线</h3>
                    <p style="font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.7;">
                        你的复习计划按照艾宾浩斯遗忘曲线自动安排：<br>
                        <strong>第1次复习</strong>: 1天后 · 
                        <strong>第2次</strong>: 2天后 · 
                        <strong>第3次</strong>: 4天后 · 
                        <strong>第4次</strong>: 7天后 · 
                        <strong>第5次</strong>: 15天后 · 
                        <strong>第6次</strong>: 30天后 · 
                        <strong>第7次</strong>: 60天后 · 
                        <strong>第8次</strong>: 120天后
                    </p>
                    <p style="font-size: var(--text-xs); color: var(--text-tertiary); margin-top: 8px;">
                        💡 第一天只学不复习，之后每天先复习到期词汇，再学新词
                    </p>
                </div>
            </div>
        `;
    },

    updateWordCount(val) {
        document.getElementById('word-count-display').textContent = val;
    },

    toggleSource(source, checked) {
        const settings = Storage.getSettings();
        let sources = settings.activeSources || ['basic'];
        
        if (checked && !sources.includes(source)) {
            sources.push(source);
        } else if (!checked && sources.includes(source)) {
            sources = sources.filter(s => s !== source);
        }
        
        // Must have at least one source
        if (sources.length === 0) {
            sources = ['basic'];
            // Re-check the checkbox
            document.querySelectorAll('.source-select-item input').forEach(cb => cb.checked = false);
        }

        settings.activeSources = sources;
        Storage.setSettings(settings);
        
        // Update visual highlighting
        document.querySelectorAll('.source-select-item').forEach((item, i) => {
            const cb = item.querySelector('input');
            item.style.background = cb.checked ? 'rgba(108,99,255,0.08)' : 'var(--bg-card)';
            item.style.borderColor = cb.checked ? 'var(--accent-primary)' : 'var(--border-color)';
        });
    },

    importCustomWords() {
        const text = document.getElementById('custom-words-input').value.trim();
        if (!text) {
            document.getElementById('custom-words-status').innerHTML = '<span style="color:var(--warning);">请输入词汇</span>';
            return;
        }

        const lines = text.split('\n').filter(l => l.trim());
        const words = [];
        
        lines.forEach(line => {
            const parts = line.split(',').map(p => p.trim());
            if (parts.length >= 2) {
                words.push({
                    word: parts[0].toLowerCase(),
                    phonetic: parts[2] || '',
                    meaning: parts[1]
                });
            }
        });

        if (words.length === 0) {
            document.getElementById('custom-words-status').innerHTML = '<span style="color:var(--danger);">无法识别词汇格式</span>';
            return;
        }

        // Save custom words
        Storage.set('custom_words', words);
        VOCAB_DATA.custom = words;

        document.getElementById('custom-words-status').innerHTML = 
            `<span style="color:var(--success);">✅ 成功导入 ${words.length} 个自定义词汇！</span>`;
        document.getElementById('custom-words-input').value = '';
    },

    clearCustomWords() {
        Storage.set('custom_words', []);
        VOCAB_DATA.custom = [];
        document.getElementById('custom-words-status').innerHTML = 
            `<span style="color:var(--text-secondary);">已清空自定义词汇</span>`;
    },

    saveAndStart() {
        const settings = Storage.getSettings();
        const count = parseInt(document.getElementById('word-count-display').textContent);
        settings.dailyNewWords = count;
        Storage.setSettings(settings);
        
        Router.navigate('vocabulary');
    },

    // Load custom words from storage on app init
    loadCustomWords() {
        const custom = Storage.get('custom_words', []);
        VOCAB_DATA.custom = custom;
    }
};
