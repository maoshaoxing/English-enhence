/* ============================================
   localStorage Wrapper
   ============================================ */

const Storage = {
    _prefix: 'ielts7_',

    // Get item with default
    get(key, defaultValue = null) {
        try {
            const val = localStorage.getItem(this._prefix + key);
            return val ? JSON.parse(val) : defaultValue;
        } catch {
            return defaultValue;
        }
    },

    // Set item
    set(key, value) {
        try {
            localStorage.setItem(this._prefix + key, JSON.stringify(value));
            return true;
        } catch {
            console.warn('Storage full or unavailable');
            return false;
        }
    },

    // Remove item
    remove(key) {
        localStorage.removeItem(this._prefix + key);
    },

    // Get all keys
    keys() {
        const keys = [];
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k.startsWith(this._prefix)) {
                keys.push(k.slice(this._prefix.length));
            }
        }
        return keys;
    },

    // Clear all app data
    clear() {
        this.keys().forEach(k => this.remove(k));
    },

    // --- Specific Data Accessors ---

    // Word progress: { [word]: { easeFactor, interval, repetitions, nextReview, lastReview, mistakes } }
    getWordProgress(level) {
        return this.get(`vocab_progress_${level}`, {});
    },

    setWordProgress(level, data) {
        this.set(`vocab_progress_${level}`, data);
    },

    getWordProgressAll() {
        const sources = ['basic', 'intermediate', 'advanced', 'cet4', 'cet6', 'custom-ielts', 'custom'];
        let all = {};
        sources.forEach(s => {
            Object.assign(all, this.getWordProgress(s));
        });
        return all;
    },

    // Check-in dates
    getCheckins() {
        return this.get('checkins', []);
    },

    setCheckins(dates) {
        this.set('checkins', dates);
    },

    // Learning stats
    getStats() {
        return this.get('stats', {
            totalWordsLearned: 0,
            totalSessions: 0,
            todayWords: 0,
            todayReviewed: 0,
            lastStudyDate: null,
            streakDays: 0,
            moduleProgress: {
                vocabulary: { learned: 0, total: 938 },
                listening: { completed: 0, total: 96 },
                speaking: { practiced: 0, total: 40 },
                reading: { completed: 0, total: 10 },
                writing: { practiced: 0, total: 10 }
            }
        });
    },

    setStats(data) {
        this.set('stats', data);
    },

    // Daily log
    getDailyLog(date) {
        return this.get(`daily_${date}`, {
            date,
            newWords: 0,
            reviewedWords: 0,
            listeningMinutes: 0,
            speakingMinutes: 0,
            readingMinutes: 0,
            writingMinutes: 0,
            completedItems: []
        });
    },

    setDailyLog(date, data) {
        this.set(`daily_${date}`, data);
    },

    // Favorites
    getFavorites() {
        return this.get('favorites', []);
    },

    setFavorites(items) {
        this.set('favorites', items);
    },

    // Settings
    getSettings() {
        return this.get('settings', {
            dailyNewWords: 100,
            activeSources: ['basic'],
            theme: 'dark',
            pronunciation: 'us'
        });
    },

    setSettings(data) {
        this.set('settings', data);
    },

    // Check if first visit
    isFirstVisit() {
        const v = this.get('visited', false);
        if (!v) this.set('visited', true);
        return !v;
    }
};
