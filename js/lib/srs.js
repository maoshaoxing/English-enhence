/* ============================================
   Spaced Repetition System
   Ebbinghaus Forgetting Curve
   ============================================

   Ebbinghaus review intervals (after learning):
   1st review: 1 day
   2nd review: 2 days
   3rd review: 4 days
   4th review: 7 days
   5th review: 15 days
   6th review: 30 days
   7th review: 60 days
   8th review: 120 days
*/

const SRS = {
    // Fixed Ebbinghaus intervals indexed by review count (how many times reviewed successfully)
    EBBINGHAUS_INTERVALS: [0, 1, 2, 4, 7, 15, 30, 60, 120],

    defaults: {
        easeFactor: 2.5,
        interval: 0,
        repetitions: 0,     // How many times successfully reviewed
        nextReview: null,    // ISO date string
        lastReview: null,    // ISO date string  
        mistakes: 0,         // Total mistakes
        lastQuality: -1      // Last rating (5=know, 3=unsure, 0=forgot)
    },

    // Process a review response
    // quality: 5=know, 3=unsure, 0=forgot
    review(word, quality, progress) {
        const record = progress[word] || { ...this.defaults };

        if (quality >= 3) {
            // Correct - advance to next Ebbinghaus interval
            record.repetitions += 1;
            const idx = Math.min(record.repetitions, this.EBBINGHAUS_INTERVALS.length - 1);
            record.interval = this.EBBINGHAUS_INTERVALS[idx];
        } else {
            // Wrong - reset to beginning
            record.repetitions = 0;
            record.interval = 0;
            record.mistakes = (record.mistakes || 0) + 1;
        }

        // Set dates
        const now = new Date();
        record.lastReview = now.toISOString();
        record.lastQuality = quality;

        // Calculate next review
        const next = new Date(now);
        if (record.interval > 0) {
            next.setDate(next.getDate() + record.interval);
        } else {
            // Review again in 4 hours (same day) if wrong
            next.setHours(next.getHours() + 4);
        }
        record.nextReview = next.toISOString();

        progress[word] = record;
        return progress;
    },

    // Get words due for review today
    getDueWords(progress, allWords, limit = 999) {
        const now = new Date();
        const due = [];

        for (const [word, record] of Object.entries(progress)) {
            if (!record.nextReview) continue;
            const reviewDate = new Date(record.nextReview);
            
            // Due if review time has passed
            if (reviewDate <= now) {
                const wordData = allWords.find(w => w.word === word);
                if (wordData) {
                    due.push({
                        ...wordData,
                        record,
                        daysOverdue: Math.ceil((now - reviewDate) / (1000 * 60 * 60 * 24))
                    });
                }
            }
        }

        // Sort: most overdue first, then by interval length
        due.sort((a, b) => {
            const aDate = new Date(a.record.nextReview);
            const bDate = new Date(b.record.nextReview);
            return aDate - bDate;
        });

        return due.slice(0, limit);
    },

    // Get new words to learn (not yet studied + not already in plan)
    getNewWords(allWords, progress, existingInPlan, count = 100) {
        const studied = new Set(Object.keys(progress));
        existingInPlan.forEach(w => studied.add(w));
        
        const newWords = allWords.filter(w => !studied.has(w.word));
        return newWords.slice(0, count);
    },

    // Build today's learning plan
    // Rules:
    // - First day ever: only new words (no review)
    // - Normal day: review all due words first, then fill up to dailyCount with new words
    getTodayPlan(allWords, progress, source, dailyCount = 100) {
        const stats = Storage.getStats();
        const today = Utils.today();

        // Get due words for review (all of them)
        const dueWords = this.getDueWords(progress, allWords, 999);

        // How many new words to add (fill remaining quota)
        const reviewCount = Math.min(dueWords.length, dailyCount);
        let newCount = Math.max(0, dailyCount - reviewCount);
        
        // Get new words (exclude already-studied words)
        const studiedWords = Object.keys(progress);
        const newWords = this.getNewWords(allWords, progress, studiedWords, newCount);

        // Build plan: review first, then fill with new
        let plan = [
            ...dueWords.slice(0, reviewCount).map(w => ({ ...w, type: 'review' })),
            ...newWords.map(w => ({ ...w, type: 'new' }))
        ];

        // If nothing at all (all words mastered, no reviews due)
        if (plan.length === 0) {
            plan = [];
        }

        return {
            plan,
            reviewCount: plan.filter(w => w.type === 'review').length,
            newCount: plan.filter(w => w.type === 'new').length,
            totalDue: dueWords.length,
            remainingNew: allWords.length - Object.keys(progress).length
        };
    },

    // Get mastered count (repetitions >= 3 = past 3 Ebbinghaus intervals)
    getMasteredCount(progress) {
        return Object.values(progress).filter(r => {
            const intervals = this.EBBINGHAUS_INTERVALS;
            const idx = Math.min(r.repetitions, intervals.length - 1);
            return intervals[idx] >= 7;  // Past 7-day interval = firmly learned
        }).length;
    },

    // Get stats for a vocabulary source
    getLevelStats(progress, totalWords) {
        const learned = Object.keys(progress).length;
        const mastered = this.getMasteredCount(progress);
        const inProgress = learned - mastered;
        const remaining = Math.max(0, totalWords - learned);

        return {
            learned,
            mastered,
            inProgress,
            remaining,
            total: totalWords,
            masteryRate: totalWords > 0 ? Math.round((mastered / totalWords) * 100) : 0
        };
    },

    // Get review recommendations
    getReviewRecommendations(progress) {
        const now = new Date();
        const due = [];

        for (const [word, record] of Object.entries(progress)) {
            if (!record.nextReview) continue;
            const reviewDate = new Date(record.nextReview);
            const daysUntilDue = Math.ceil((reviewDate - now) / (1000 * 60 * 60 * 24));

            due.push({
                word,
                daysUntilDue,
                interval: record.interval,
                repetitions: record.repetitions,
                mistakes: record.mistakes,
                quality: record.lastQuality
            });
        }

        return {
            dueToday: due.filter(d => d.daysUntilDue <= 0).length,
            dueThisWeek: due.filter(d => d.daysUntilDue <= 7).length,
            mastered: due.filter(d => d.daysUntilDue > 30).length,
            struggling: due.filter(d => d.mistakes > 3).length
        };
    }
};
