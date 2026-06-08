// IELTS Vocabulary Data Index
// Consolidates ALL vocabulary sources

const VOCAB_DATA = {
    basic: typeof VOCAB_BASIC !== 'undefined' ? VOCAB_BASIC : [],
    intermediate: typeof VOCAB_INTERMEDIATE !== 'undefined' ? VOCAB_INTERMEDIATE : [],
    advanced: typeof VOCAB_ADVANCED !== 'undefined' ? VOCAB_ADVANCED : [],
    cet4: typeof VOCAB_CET4 !== 'undefined' ? VOCAB_CET4 : [],
    cet6: typeof VOCAB_CET6 !== 'undefined' ? VOCAB_CET6 : [],
    'custom-ielts': typeof VOCAB_CUSTOM_IELTS !== 'undefined' ? VOCAB_CUSTOM_IELTS : [],
    custom: []  // User's own words - filled dynamically
};

// Word source labels and metadata
const VOCAB_SOURCES = {
    basic: { label: '雅思基础', emoji: '⭐', desc: '雅思核心基础词汇' },
    intermediate: { label: '雅思中档', emoji: '⭐⭐', desc: '雅思核心进阶词汇' },
    advanced: { label: '雅思高级', emoji: '⭐⭐⭐', desc: '雅思高级学术词汇' },
    cet4: { label: '四级词汇', emoji: '📘', desc: '大学英语四级词汇 (3585词)' },
    cet6: { label: '六级词汇', emoji: '📕', desc: '大学英语六级词汇 (729词)' },
    'custom-ielts': { label: '雅思主题词', emoji: '💎', desc: '按主题分类的雅思词汇 (1127词)' },
    custom: { label: '我的词汇', emoji: '📝', desc: '自定义词汇' }
};

// Log
console.log('📚 IELTS Vocabulary Loaded:');
Object.keys(VOCAB_DATA).forEach(key => {
    console.log(`   ${VOCAB_SOURCES[key]?.label || key}: ${VOCAB_DATA[key].length} words`);
});
