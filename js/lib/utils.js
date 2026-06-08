/* ============================================
   Utility Functions
   ============================================ */

const Utils = {
    // Get today's date as YYYY-MM-DD
    today() {
        return new Date().toISOString().split('T')[0];
    },

    // Format date for display
    formatDate(dateStr) {
        const d = new Date(dateStr);
        const months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        return `${d.getDate()} ${months[d.getMonth()]}`;
    },

    // Shuffle array
    shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    },

    // Pick random items from array
    pickRandom(arr, n) {
        const shuffled = Utils.shuffle(arr);
        return shuffled.slice(0, n);
    },

    // Get random item
    randomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    // Debounce
    debounce(fn, delay = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    },

    // Generate ID
    genId() {
        return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    },

    // Clamp value
    clamp(val, min, max) {
        return Math.max(min, Math.min(max, val));
    },

    // Throttle
    throttle(fn, limit = 300) {
        let inThrottle = false;
        return (...args) => {
            if (!inThrottle) {
                fn(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Escape HTML
    escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    // Format seconds to mm:ss
    formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    },

    // Days between two dates
    daysBetween(d1, d2) {
        const a = new Date(d1);
        const b = new Date(d2);
        return Math.floor((b - a) / (1000 * 60 * 60 * 24));
    },

    // Check if date is today
    isToday(dateStr) {
        return dateStr === Utils.today();
    },

    // Get week day name
    getWeekDay(dateStr) {
        const days = ['日', '一', '二', '三', '四', '五', '六'];
        return days[new Date(dateStr).getDay()];
    },

    // Smooth scroll to element
    scrollTo(el) {
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },

    // Trigger browser speech
    speak(text, rate = 0.85) {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = rate;
        // Try to find a good English voice
        const voices = window.speechSynthesis.getVoices();
        const enVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Google')) 
                     || voices.find(v => v.lang.startsWith('en-US'))
                     || voices.find(v => v.lang.startsWith('en'));
        if (enVoice) utterance.voice = enVoice;
        window.speechSynthesis.speak(utterance);
    }
};
