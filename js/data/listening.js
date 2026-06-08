// IELTS 听力资源数据 ~15 items
var LISTENING_DATA = [
    // ===== EASY (5 items) =====
    {
        id: "daily-1",
        title: "At the Supermarket",
        category: "daily",
        difficulty: "easy",
        duration: "8:15",
        source: "BBC Learning English",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/embed/1rD6h5zATIY",
        tags: ["购物", "日常对话", "生活英语"],
        transcript: [
            { en: "Hello, welcome to our supermarket.", zh: "您好，欢迎来到我们的超市。" },
            { en: "Can I help you find anything today?", zh: "今天需要我帮您找什么吗？" },
            { en: "Yes, I'm looking for the dairy section.", zh: "是的，我在找乳制品区。" },
            { en: "It's at the back of the store, on the left side.", zh: "在商店的后面，左手边。" },
            { en: "Thank you. Also, where can I find fresh bread?", zh: "谢谢。另外，新鲜面包在哪里？" },
            { en: "The bakery is near the entrance, next to the fruit section.", zh: "面包房在入口附近，水果区旁边。" },
            { en: "Great. Do you have any special offers today?", zh: "太好了。今天有什么特价商品吗？" },
            { en: "Yes, all vegetables are 20% off until closing time.", zh: "有的，所有蔬菜直到关门时间都打八折。" },
            { en: "That sounds wonderful. I'll grab some tomatoes then.", zh: "听起来不错。那我就拿些西红柿。" },
            { en: "Enjoy your shopping! Let me know if you need anything else.", zh: "祝您购物愉快！如果需要其他帮助请告诉我。" }
        ],
        quiz: [
            {
                question: "Where is the dairy section located?",
                options: ["Near the entrance", "At the back of the store on the left", "Next to the bakery", "On the right side"],
                answer: 1
            },
            {
                question: "What is the special offer today?",
                options: ["Bread is half price", "Vegetables are 20% off", "Dairy products are on sale", "Free samples available"],
                answer: 1
            },
            {
                question: "Where is the bakery located?",
                options: ["At the back of the store", "Near the entrance, next to the fruit section", "Next to the dairy section", "On the left side"],
                answer: 1
            }
        ],
        dictation: [
            { before: "Hello, welcome", answer: "to our supermarket", after: "" },
            { before: "It's at the back of the store,", answer: "on the left side", after: "" },
            { before: "The bakery is near the entrance, next to", answer: "the fruit section", after: "" },
            { before: "All vegetables are 20% off", answer: "until closing time", after: "" }
        ]
    },
    {
        id: "campus-1",
        title: "Campus Orientation Tour",
        category: "campus",
        difficulty: "easy",
        duration: "10:05",
        source: "University of Cambridge",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLm5kHkF1z3hQ3jQFJZ6KqB3BC0rCBKkmX",
        tags: ["校园", "新生", "大学生活"],
        transcript: [
            { en: "Welcome to our university orientation tour.", zh: "欢迎参加我们的大学校园导览。" },
            { en: "My name is Sarah, and I'll be your guide today.", zh: "我是Sarah，今天将由我为大家 guide。" },
            { en: "We'll start at the main library, which opens at 8 AM daily.", zh: "我们将从主图书馆出发，每天上午8点开放。" },
            { en: "The library has over two million books and online resources.", zh: "图书馆拥有超过两百万册图书和在线资源。" },
            { en: "Next, we'll walk to the student union building.", zh: "接下来，我们将前往学生会大楼。" },
            { en: "This is where you can join clubs and social activities.", zh: "在这里你可以加入社团和参加社交活动。" },
            { en: "The dining hall serves three meals a day, from 7 AM to 8 PM.", zh: "食堂每天供应三餐，从早上7点到晚上8点。" },
            { en: "You can use your student ID card to pay for meals.", zh: "你可以使用学生证支付餐费。" },
            { en: "Finally, let me show you the sports center.", zh: "最后，让我带大家看看体育中心。" },
            { en: "It has a swimming pool, a gym, and several sports courts.", zh: "里面有游泳池、健身房和多个运动场地。" }
        ],
        quiz: [
            {
                question: "What time does the main library open?",
                options: ["7 AM", "8 AM", "9 AM", "10 AM"],
                answer: 1
            },
            {
                question: "Where can students join clubs and social activities?",
                options: ["The main library", "The sports center", "The student union building", "The dining hall"],
                answer: 2
            },
            {
                question: "How can students pay for meals in the dining hall?",
                options: ["Cash only", "Credit card", "Student ID card", "Mobile payment"],
                answer: 2
            },
            {
                question: "What facilities does the sports center have?",
                options: ["Only a gym", "A swimming pool and gym", "Swimming pool, gym, and sports courts", "Only sports courts"],
                answer: 2
            }
        ],
        dictation: [
            { before: "Welcome to our university", answer: "orientation tour", after: "" },
            { before: "The library has over two million books and", answer: "online resources", after: "" },
            { before: "This is where you can join clubs and", answer: "social activities", after: "" },
            { before: "The dining hall serves three meals a day, from", answer: "7 AM to 8 PM", after: "" },
            { before: "It has a swimming pool, a gym, and several", answer: "sports courts", after: "" }
        ]
    },
    {
        id: "daily-2",
        title: "Ordering Food at a Restaurant",
        category: "daily",
        difficulty: "easy",
        duration: "9:30",
        source: "EF English Live",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/embed/1rD6h5zATIY",
        tags: ["餐厅", "点餐", "日常对话"],
        transcript: [
            { en: "Good evening, welcome to Bella Italia.", zh: "晚上好，欢迎来到Bella Italia餐厅。" },
            { en: "A table for two, please.", zh: "请安排一张两人桌。" },
            { en: "Right this way. Here are your menus.", zh: "这边请。这是你们的菜单。" },
            { en: "Can I start you off with some drinks?", zh: "要先来点喝的吗？" },
            { en: "Yes, I'll have a glass of orange juice, please.", zh: "好的，请给我一杯橙汁。" },
            { en: "And I'll have mineral water.", zh: "我要矿泉水。" },
            { en: "Are you ready to order your main course?", zh: "你们准备好点主菜了吗？" },
            { en: "I'd like the grilled salmon with vegetables.", zh: "我想要烤三文鱼配蔬菜。" },
            { en: "I'll have the spaghetti carbonara, please.", zh: "我要意式培根蛋酱面。" },
            { en: "Excellent choices. I'll bring your drinks right away.", zh: "很好的选择。我马上把饮料送来。" }
        ],
        quiz: [
            {
                question: "What is the name of the restaurant?",
                options: ["Pizza Roma", "Bella Italia", "Pasta House", "Italian Kitchen"],
                answer: 1
            },
            {
                question: "What drinks did the customers order?",
                options: ["Beer and wine", "Orange juice and mineral water", "Coffee and tea", "Coke and lemonade"],
                answer: 1
            },
            {
                question: "What main course did the second person order?",
                options: ["Grilled salmon", "Spaghetti carbonara", "Beef steak", "Chicken salad"],
                answer: 1
            }
        ],
        dictation: [
            { before: "Good evening, welcome to", answer: "Bella Italia", after: "" },
            { before: "I'll have a glass of", answer: "orange juice", after: ", please" },
            { before: "I'd like the grilled salmon", answer: "with vegetables", after: "" },
            { before: "I'll bring your drinks", answer: "right away", after: "" }
        ]
    },
    {
        id: "lecture-1",
        title: "Introduction to Photosynthesis",
        category: "lecture",
        difficulty: "easy",
        duration: "11:20",
        source: "Khan Academy",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/embed/_DGdDlwgxBg",
        tags: ["生物学", "科学", "基础知识"],
        transcript: [
            { en: "Today we'll learn about photosynthesis, a vital process for plants.", zh: "今天我们将学习光合作用，这是植物的重要过程。" },
            { en: "Photosynthesis is how plants convert sunlight into energy.", zh: "光合作用是植物将阳光转化为能量的过程。" },
            { en: "This process takes place in the leaves of the plant.", zh: "这个过程发生在植物的叶子中。" },
            { en: "The green pigment in leaves is called chlorophyll.", zh: "叶子中的绿色色素叫做叶绿素。" },
            { en: "Chlorophyll absorbs sunlight and uses it for photosynthesis.", zh: "叶绿素吸收阳光并用它进行光合作用。" },
            { en: "Plants also need water and carbon dioxide to make food.", zh: "植物还需要水和二氧化碳来制造养分。" },
            { en: "The main product of photosynthesis is glucose, a type of sugar.", zh: "光合作用的主要产物是葡萄糖，一种糖类。" },
            { en: "Oxygen is released as a byproduct of this process.", zh: "氧气作为这个过程的副产品被释放出来。" },
            { en: "Photosynthesis is essential for life on Earth.", zh: "光合作用对地球上的生命至关重要。" },
            { en: "It provides most of the oxygen in our atmosphere.", zh: "它提供了我们大气中的大部分氧气。" }
        ],
        quiz: [
            {
                question: "What is photosynthesis?",
                options: ["How plants absorb water", "How plants convert sunlight into energy", "How plants grow roots", "How plants produce flowers"],
                answer: 1
            },
            {
                question: "What pigment gives leaves their green color?",
                options: ["Carotene", "Chlorophyll", "Melanin", "Xanthophyll"],
                answer: 1
            },
            {
                question: "What is the main product of photosynthesis?",
                options: ["Oxygen", "Carbon dioxide", "Glucose", "Water"],
                answer: 2
            },
            {
                question: "What is released as a byproduct of photosynthesis?",
                options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
                answer: 2
            }
        ],
        dictation: [
            { before: "Photosynthesis is how plants convert sunlight", answer: "into energy", after: "" },
            { before: "The green pigment in leaves is called", answer: "chlorophyll", after: "" },
            { before: "Plants also need water and carbon dioxide to", answer: "make food", after: "" },
            { before: "The main product of photosynthesis is", answer: "glucose", after: ", a type of sugar" },
            { before: "It provides most of the oxygen in", answer: "our atmosphere", after: "" }
        ]
    },
    {
        id: "news-1",
        title: "Local Community Cleanup Event",
        category: "news",
        difficulty: "easy",
        duration: "7:45",
        source: "VOA Learning English",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/embed/1rD6h5zATIY",
        tags: ["社区", "环保", "新闻"],
        transcript: [
            { en: "Hundreds of volunteers gathered this weekend for a community cleanup.", zh: "数百名志愿者本周末聚集在一起参加社区清洁活动。" },
            { en: "The event was organized by the Green Earth Foundation.", zh: "该活动由绿色地球基金会组织。" },
            { en: "Volunteers collected trash from parks, streets, and riversides.", zh: "志愿者从公园、街道和河边收集垃圾。" },
            { en: "More than 500 bags of waste were collected in just one day.", zh: "仅一天就收集了超过500袋垃圾。" },
            { en: "Local businesses donated gloves, bags, and refreshments.", zh: "当地企业捐赠了手套、袋子和点心。" },
            { en: "Many families came with their children to participate.", zh: "许多家庭带着孩子来参加。" },
            { en: "The event also included educational workshops on recycling.", zh: "活动还包括关于回收利用的教育研讨会。" },
            { en: "Next month's event will focus on planting trees in the park.", zh: "下个月的活动将集中在公园植树。" },
            { en: "Everyone is welcome to join and make a difference.", zh: "欢迎大家参与，一起做出改变。" }
        ],
        quiz: [
            {
                question: "How many volunteers participated in the cleanup?",
                options: ["Tens of", "Hundreds of", "Thousands of", "Dozens of"],
                answer: 1
            },
            {
                question: "Who organized the event?",
                options: ["The city government", "The Green Earth Foundation", "Local businesses", "School students"],
                answer: 1
            },
            {
                question: "How many bags of waste were collected?",
                options: ["Over 100", "Over 300", "Over 500", "Over 1000"],
                answer: 2
            },
            {
                question: "What will next month's event focus on?",
                options: ["Cleaning rivers", "Planting trees", "Building parks", "Recycling workshops"],
                answer: 1
            }
        ],
        dictation: [
            { before: "Hundreds of volunteers gathered this weekend", answer: "for a community cleanup", after: "" },
            { before: "The event was organized by", answer: "the Green Earth Foundation", after: "" },
            { before: "Volunteers collected trash from parks, streets, and", answer: "riversides", after: "" },
            { before: "The event also included educational workshops on", answer: "recycling", after: "" }
        ]
    },

    // ===== MEDIUM (5 items) =====
    {
        id: "lecture-2",
        title: "Climate Change and Its Global Impact",
        category: "lecture",
        difficulty: "medium",
        duration: "14:50",
        source: "TED-Ed",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/embed/_DGdDlwgxBg",
        tags: ["环境", "气候变化", "科学"],
        transcript: [
            { en: "Climate change is one of the most pressing challenges of our time.", zh: "气候变化是我们时代最紧迫的挑战之一。" },
            { en: "Global temperatures have risen by 1.1 degrees Celsius since pre-industrial times.", zh: "自前工业化时代以来，全球气温已上升1.1摄氏度。" },
            { en: "This warming is primarily caused by greenhouse gas emissions.", zh: "这种变暖主要是由温室气体排放造成的。" },
            { en: "Carbon dioxide levels have reached record highs in the atmosphere.", zh: "大气中的二氧化碳水平已达到创纪录的高度。" },
            { en: "The effects include rising sea levels and extreme weather events.", zh: "影响包括海平面上升和极端天气事件。" },
            { en: "Coastal cities around the world are already experiencing flooding.", zh: "世界各地的沿海城市已经在经历洪水。" },
            { en: "Agricultural patterns are shifting due to changing rainfall.", zh: "由于降雨模式的变化，农业生产模式正在转变。" },
            { en: "Many species face extinction as their habitats disappear.", zh: "许多物种由于栖息地消失而面临灭绝。" },
            { en: "International agreements aim to limit global warming to 1.5 degrees.", zh: "国际协议旨在将全球变暖限制在1.5度以内。" },
            { en: "Individual actions, such as reducing energy use, also make a difference.", zh: "个人行动，如减少能源使用，也能产生影响。" }
        ],
        quiz: [
            {
                question: "How much have global temperatures risen since pre-industrial times?",
                options: ["0.5 degrees Celsius", "1.1 degrees Celsius", "2.0 degrees Celsius", "3.0 degrees Celsius"],
                answer: 1
            },
            {
                question: "What is the primary cause of global warming?",
                options: ["Volcanic eruptions", "Greenhouse gas emissions", "Solar activity", "Deforestation only"],
                answer: 1
            },
            {
                question: "What target temperature limit do international agreements aim for?",
                options: ["1.0 degrees", "1.5 degrees", "2.0 degrees", "2.5 degrees"],
                answer: 1
            },
            {
                question: "Which of the following is mentioned as an effect of climate change?",
                options: ["Increased snowfall", "Rising sea levels", "Longer winters", "More forests"],
                answer: 1
            },
            {
                question: "How are agricultural patterns being affected?",
                options: ["No changes observed", "Shifting due to changing rainfall", "Improved crop yields globally", "All regions produce more food"],
                answer: 1
            }
        ],
        dictation: [
            { before: "Climate change is one of the most pressing", answer: "challenges of our time", after: "" },
            { before: "This warming is primarily caused by", answer: "greenhouse gas emissions", after: "" },
            { before: "Carbon dioxide levels have reached", answer: "record highs", after: " in the atmosphere" },
            { before: "Coastal cities around the world", answer: "are already experiencing flooding", after: "" },
            { before: "Many species face extinction as", answer: "their habitats disappear", after: "" }
        ]
    },
    {
        id: "campus-2",
        title: "Library Registration and Services",
        category: "campus",
        difficulty: "medium",
        duration: "11:35",
        source: "University of Melbourne",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLm5kHkF1z3hQ3jQFJZ6KqB3BC0rCBKkmX",
        tags: ["图书馆", "注册", "校园服务"],
        transcript: [
            { en: "Welcome to the university library registration desk.", zh: "欢迎来到大学图书馆注册处。" },
            { en: "I'd like to register for a library membership, please.", zh: "我想注册办理图书证。" },
            { en: "Certainly. Do you have your student ID card with you?", zh: "好的。您带学生证了吗？" },
            { en: "Yes, here it is. I'm a new postgraduate student.", zh: "带了，给您。我是一名新研究生。" },
            { en: "Let me enter your details into the system.", zh: "让我把你的信息录入系统。" },
            { en: "You can borrow up to 20 books at a time for two weeks.", zh: "你每次最多可以借20本书，为期两周。" },
            { en: "There's a quiet study area on the second floor.", zh: "二楼有一个安静的学习区。" },
            { en: "Group study rooms can be booked online in advance.", zh: "小组学习室可以在线提前预约。" },
            { en: "The library also provides access to online journals and databases.", zh: "图书馆还提供在线期刊和数据库的访问权限。" },
            { en: "If you need any help, ask the staff at the information desk.", zh: "如果需要任何帮助，请咨询服务台的工作人员。" }
        ],
        quiz: [
            {
                question: "What is the first thing needed for library registration?",
                options: ["Passport", "Student ID card", "Driver's license", "Bank statement"],
                answer: 1
            },
            {
                question: "How many books can be borrowed at one time?",
                options: ["10 books", "15 books", "20 books", "25 books"],
                answer: 2
            },
            {
                question: "How long is the standard borrowing period?",
                options: ["One week", "Two weeks", "Three weeks", "One month"],
                answer: 1
            },
            {
                question: "How can group study rooms be booked?",
                options: ["At the front desk", "By phone", "Online in advance", "By email"],
                answer: 2
            }
        ],
        dictation: [
            { before: "I'd like to register for", answer: "a library membership", after: ", please" },
            { before: "You can borrow up to 20 books at a time", answer: "for two weeks", after: "" },
            { before: "There's a quiet study area", answer: "on the second floor", after: "" },
            { before: "Group study rooms can be booked", answer: "online in advance", after: "" },
            { before: "The library also provides access to online journals and", answer: "databases", after: "" }
        ]
    },
    {
        id: "news-2",
        title: "Technology Breakthrough in Renewable Energy",
        category: "news",
        difficulty: "medium",
        duration: "10:15",
        source: "BBC News",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/embed/1rD6h5zATIY",
        tags: ["科技", "能源", "创新"],
        transcript: [
            { en: "Scientists have announced a major breakthrough in solar energy technology.", zh: "科学家宣布了太阳能技术的重大突破。" },
            { en: "A new type of solar panel achieves 40% energy efficiency.", zh: "一种新型太阳能电池板实现了40%的能源效率。" },
            { en: "This is nearly double the efficiency of traditional solar panels.", zh: "这几乎是传统太阳能电池板效率的两倍。" },
            { en: "The research team used a special material called perovskite.", zh: "研究团队使用了一种名为钙钛矿的特殊材料。" },
            { en: "Perovskite panels are also cheaper to manufacture than silicon ones.", zh: "钙钛矿电池板的制造成本也比硅电池板更低。" },
            { en: "This development could accelerate the transition to clean energy.", zh: "这一进展可以加速向清洁能源的转型。" },
            { en: "The technology is expected to be commercially available within three years.", zh: "这项技术预计将在三年内投入商业使用。" },
            { en: "Many countries have increased their investment in renewable energy.", zh: "许多国家已经增加了对可再生能源的投资。" },
            { en: "Solar power currently provides about 5% of global electricity.", zh: "太阳能目前提供全球约5%的电力。" },
            { en: "This breakthrough could significantly increase that share.", zh: "这一突破可以显著提高这一份额。" }
        ],
        quiz: [
            {
                question: "What efficiency does the new solar panel achieve?",
                options: ["20%", "30%", "40%", "50%"],
                answer: 2
            },
            {
                question: "What special material did the research team use?",
                options: ["Silicon", "Perovskite", "Graphene", "Carbon fiber"],
                answer: 1
            },
            {
                question: "When is the technology expected to be commercially available?",
                options: ["Within one year", "Within two years", "Within three years", "Within five years"],
                answer: 2
            },
            {
                question: "What percentage of global electricity does solar power currently provide?",
                options: ["About 3%", "About 5%", "About 10%", "About 15%"],
                answer: 1
            }
        ],
        dictation: [
            { before: "Scientists have announced a major breakthrough", answer: "in solar energy technology", after: "" },
            { before: "A new type of solar panel achieves", answer: "40% energy efficiency", after: "" },
            { before: "The research team used a special material called", answer: "perovskite", after: "" },
            { before: "This development could accelerate the transition", answer: "to clean energy", after: "" },
            { before: "The technology is expected to be commercially available", answer: "within three years", after: "" }
        ]
    },
    {
        id: "lecture-3",
        title: "The History of the Internet",
        category: "lecture",
        difficulty: "medium",
        duration: "13:40",
        source: "Crash Course",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/embed/_DGdDlwgxBg",
        tags: ["历史", "科技", "互联网"],
        transcript: [
            { en: "The internet has transformed almost every aspect of modern life.", zh: "互联网已经改变了现代生活的几乎每一个方面。" },
            { en: "It began as a military project called ARPANET in the 1960s.", zh: "它始于20世纪60年代一个名为ARPANET的军事项目。" },
            { en: "The first message was sent between two computers in 1969.", zh: "第一条信息于1969年在两台计算机之间发送。" },
            { en: "The word 'internet' was first used in 1974.", zh: "互联网这个词于1974年首次被使用。" },
            { en: "Tim Berners-Lee invented the World Wide Web in 1989.", zh: "蒂姆·伯纳斯-李于1989年发明了万维网。" },
            { en: "The first website went live in 1991 and was purely text-based.", zh: "第一个网站于1991年上线，完全是基于文本的。" },
            { en: "By the late 1990s, the internet had become widely available.", zh: "到20世纪90年代末，互联网已经广泛普及。" },
            { en: "Social media platforms emerged in the early 2000s.", zh: "社交媒体平台在21世纪初兴起。" },
            { en: "Today, over 5 billion people use the internet worldwide.", zh: "如今，全球有超过50亿人使用互联网。" },
            { en: "The internet continues to evolve with new technologies like AI.", zh: "互联网随着人工智能等新技术不断发展。" }
        ],
        quiz: [
            {
                question: "What was the original name of the internet project?",
                options: ["WorldNet", "ARPANET", "CyberNet", "GlobalLink"],
                answer: 1
            },
            {
                question: "When was the first message sent between two computers?",
                options: ["1965", "1969", "1974", "1989"],
                answer: 1
            },
            {
                question: "Who invented the World Wide Web?",
                options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Vint Cerf"],
                answer: 2
            },
            {
                question: "How many people use the internet worldwide today?",
                options: ["2 billion", "3 billion", "4 billion", "Over 5 billion"],
                answer: 3
            },
            {
                question: "When did the first website go live?",
                options: ["1989", "1991", "1995", "2000"],
                answer: 1
            }
        ],
        dictation: [
            { before: "The internet has transformed almost every aspect", answer: "of modern life", after: "" },
            { before: "It began as a military project called", answer: "ARPANET", after: " in the 1960s" },
            { before: "Tim Berners-Lee invented the", answer: "World Wide Web", after: " in 1989" },
            { before: "The first website went live in 1991 and was", answer: "purely text-based", after: "" },
            { before: "Today, over 5 billion people", answer: "use the internet worldwide", after: "" }
        ]
    },
    {
        id: "daily-3",
        title: "Booking a Hotel Room",
        category: "daily",
        difficulty: "medium",
        duration: "9:55",
        source: "British Council",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/embed/1rD6h5zATIY",
        tags: ["旅行", "酒店", "预订"],
        transcript: [
            { en: "Hello, I'd like to book a hotel room for next weekend.", zh: "你好，我想预订下周末的酒店房间。" },
            { en: "Certainly, sir. What dates are you looking at?", zh: "好的，先生。您想要哪几天？" },
            { en: "I'm arriving on Friday the 15th and leaving on Sunday the 17th.", zh: "我15号周五入住，17号周日退房。" },
            { en: "We have a standard room available for those nights.", zh: "这几晚我们有标准间可供选择。" },
            { en: "How much is the standard room per night?", zh: "标准间每晚多少钱？" },
            { en: "It's 120 dollars per night, including breakfast.", zh: "每晚120美元，含早餐。" },
            { en: "Is there free Wi-Fi in the room?", zh: "房间里有免费Wi-Fi吗？" },
            { en: "Yes, complimentary Wi-Fi is available throughout the hotel.", zh: "有的，整个酒店都提供免费Wi-Fi。" },
            { en: "Great. I'd also like a room with a view of the city.", zh: "太好了。我还想要一个能看到城市景观的房间。" },
            { en: "I can arrange a room on the top floor with a nice view.", zh: "我可以为您安排顶层视野好的房间。" }
        ],
        quiz: [
            {
                question: "When is the customer arriving?",
                options: ["Thursday the 14th", "Friday the 15th", "Saturday the 16th", "Sunday the 17th"],
                answer: 1
            },
            {
                question: "How much is the standard room per night?",
                options: ["100 dollars", "110 dollars", "120 dollars", "130 dollars"],
                answer: 2
            },
            {
                question: "What is included in the room price?",
                options: ["Dinner", "Breakfast", "Airport transfer", "Spa access"],
                answer: 1
            },
            {
                question: "What special request does the customer make?",
                options: ["A quiet room", "A room with a city view", "A room near the elevator", "A ground floor room"],
                answer: 1
            }
        ],
        dictation: [
            { before: "It's 120 dollars per night, including", answer: "breakfast", after: "" },
            { before: "Complimentary Wi-Fi is available", answer: "throughout the hotel", after: "" },
            { before: "I'm arriving on Friday the 15th and leaving on", answer: "Sunday the 17th", after: "" },
            { before: "I can arrange a room", answer: "on the top floor", after: " with a nice view" }
        ]
    },

    // ===== HARD (5 items) =====
    {
        id: "lecture-4",
        title: "Behavioral Economics and Decision Making",
        category: "lecture",
        difficulty: "hard",
        duration: "16:20",
        source: "TED Talks",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/embed/_DGdDlwgxBg",
        tags: ["经济学", "心理学", "行为科学"],
        transcript: [
            { en: "Behavioral economics challenges the assumption that humans are rational decision-makers.", zh: "行为经济学挑战了人类是理性决策者的假设。" },
            { en: "Traditional economics assumes people always make logical choices to maximize benefits.", zh: "传统经济学假设人们总是做出逻辑选择以最大化利益。" },
            { en: "However, our decisions are often influenced by cognitive biases and emotions.", zh: "然而，我们的决策往往受到认知偏见和情绪的影响。" },
            { en: "One well-known bias is loss aversion, where losses feel worse than gains feel good.", zh: "一个著名的偏见是损失厌恶，即损失的感受比获得的感受更强烈。" },
            { en: "People tend to avoid risks when seeking gains but take risks to avoid losses.", zh: "人们在寻求收益时倾向于规避风险，但在避免损失时却愿意冒险。" },
            { en: "Anchoring is another bias, where we rely too heavily on the first piece of information.", zh: "锚定效应是另一种偏见，我们过度依赖第一条信息。" },
            { en: "Nudging is a concept that uses these insights to guide better decision-making.", zh: "助推是一个利用这些洞见来引导更好决策的概念。" },
            { en: "For example, placing healthy food at eye level increases its selection rate.", zh: "例如，将健康食品放在视线高度可以增加其选择率。" },
            { en: "Richard Thaler won the Nobel Prize for his contributions to this field.", zh: "理查德·塞勒因对该领域的贡献获得了诺贝尔奖。" },
            { en: "Understanding these biases can help us make better financial and life decisions.", zh: "理解这些偏见可以帮助我们做出更好的财务和生活决策。" }
        ],
        quiz: [
            {
                question: "What assumption does behavioral economics challenge?",
                options: ["People are emotional", "People are rational decision-makers", "People are unpredictable", "People are selfish"],
                answer: 1
            },
            {
                question: "What is loss aversion?",
                options: ["Preferring gains over losses", "Losses feel worse than gains feel good", "Avoiding all risks", "Seeking high rewards"],
                answer: 1
            },
            {
                question: "What is the anchoring bias?",
                options: ["Making decisions based on emotions", "Relying too heavily on the first piece of information", "Avoiding difficult choices", "Following others' opinions"],
                answer: 1
            },
            {
                question: "What is 'nudging'?",
                options: ["Pushing people to buy products", "Using insights to guide better decision-making", "Forcing people to change habits", "Ignoring cognitive biases"],
                answer: 1
            },
            {
                question: "Who won the Nobel Prize for contributions to behavioral economics?",
                options: ["Daniel Kahneman", "Richard Thaler", "Amos Tversky", "Adam Smith"],
                answer: 1
            }
        ],
        dictation: [
            { before: "Behavioral economics challenges the assumption that humans are", answer: "rational decision-makers", after: "" },
            { before: "One well-known bias is loss aversion, where losses feel worse than", answer: "gains feel good", after: "" },
            { before: "Anchoring is another bias, where we rely too heavily on", answer: "the first piece of information", after: "" },
            { before: "Nudging is a concept that uses these insights to guide", answer: "better decision-making", after: "" },
            { before: "Understanding these biases can help us make better financial and", answer: "life decisions", after: "" }
        ]
    },
    {
        id: "news-3",
        title: "Global Economic Outlook 2026",
        category: "news",
        difficulty: "hard",
        duration: "12:50",
        source: "The Economist",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/embed/1rD6h5zATIY",
        tags: ["经济", "全球", "金融"],
        transcript: [
            { en: "The International Monetary Fund has released its latest global economic forecast.", zh: "国际货币基金组织发布了最新的全球经济预测。" },
            { en: "Global GDP growth is projected at 3.1 percent for the current year.", zh: "今年全球GDP增长率预计为3.1%。" },
            { en: "Emerging economies are expected to drive most of this growth.", zh: "新兴经济体预计将推动大部分增长。" },
            { en: "Inflation rates have eased in many developed countries, but remain a concern.", zh: "许多发达国家的通胀率已经缓解，但仍然令人担忧。" },
            { en: "Supply chain disruptions continue to affect international trade.", zh: "供应链中断继续影响国际贸易。" },
            { en: "Central banks are maintaining cautious monetary policies.", zh: "各国央行保持着谨慎的货币政策。" },
            { en: "Digital currencies are gaining acceptance among central banks worldwide.", zh: "数字货币正在获得全球央行的认可。" },
            { en: "Climate-related investments are reshaping global financial markets.", zh: "气候相关投资正在重塑全球金融市场。" },
            { en: "Experts warn of potential risks from geopolitical tensions.", zh: "专家警告地缘政治紧张局势的潜在风险。" },
            { en: "International cooperation remains crucial for sustainable economic recovery.", zh: "国际合作对可持续经济复苏仍然至关重要。" }
        ],
        quiz: [
            {
                question: "What is the projected global GDP growth for the current year?",
                options: ["2.5 percent", "3.1 percent", "3.8 percent", "4.2 percent"],
                answer: 1
            },
            {
                question: "Which economies are expected to drive most of the growth?",
                options: ["Developed economies", "Emerging economies", "European economies", "North American economies"],
                answer: 1
            },
            {
                question: "What continues to affect international trade?",
                options: ["Trade tariffs", "Supply chain disruptions", "Labor shortages", "Currency fluctuations"],
                answer: 1
            },
            {
                question: "What is gaining acceptance among central banks?",
                options: ["Cryptocurrencies", "Digital currencies", "Gold reserves", "Stock markets"],
                answer: 1
            },
            {
                question: "What remains crucial for sustainable economic recovery?",
                options: ["Trade protectionism", "International cooperation", "Military spending", "Tax reductions"],
                answer: 1
            }
        ],
        dictation: [
            { before: "The International Monetary Fund has released its latest", answer: "global economic forecast", after: "" },
            { before: "Supply chain disruptions continue to affect", answer: "international trade", after: "" },
            { before: "Central banks are maintaining cautious", answer: "monetary policies", after: "" },
            { before: "Climate-related investments are reshaping", answer: "global financial markets", after: "" },
            { before: "International cooperation remains crucial for sustainable", answer: "economic recovery", after: "" }
        ]
    },
    {
        id: "lecture-5",
        title: "Quantum Computing Fundamentals",
        category: "lecture",
        difficulty: "hard",
        duration: "18:10",
        source: "MIT OpenCourseWare",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/embed/_DGdDlwgxBg",
        tags: ["物理", "量子计算", "前沿科技"],
        transcript: [
            { en: "Quantum computing represents a fundamental shift in how we process information.", zh: "量子计算代表了信息处理方式的根本性转变。" },
            { en: "Classical computers use bits that are either zero or one.", zh: "经典计算机使用只能是0或1的比特。" },
            { en: "Quantum computers use qubits, which can exist in multiple states simultaneously.", zh: "量子计算机使用量子比特，它可以同时存在于多种状态。" },
            { en: "This property is called superposition and is key to quantum computing power.", zh: "这种特性称为叠加态，是量子计算能力的关键。" },
            { en: "Another principle is quantum entanglement, linking particles across distances.", zh: "另一个原理是量子纠缠，将粒子跨越距离连接起来。" },
            { en: "Quantum computers excel at solving certain problems that are intractable for classical computers.", zh: "量子计算机擅长解决某些经典计算机难以处理的问题。" },
            { en: "These include drug discovery, cryptography, and climate modeling.", zh: "这包括药物发现、密码学和气候建模。" },
            { en: "Current quantum computers face challenges with stability and error correction.", zh: "当前的量子计算机面临稳定性和纠错方面的挑战。" },
            { en: "Major technology companies are investing heavily in quantum research.", zh: "主要科技公司正在大力投资量子研究。" },
            { en: "A practical quantum computer for general use is still several years away.", zh: "通用实用的量子计算机仍需数年时间才能实现。" }
        ],
        quiz: [
            {
                question: "What is a qubit?",
                options: ["A classical binary unit", "A quantum bit that can exist in multiple states", "A type of computer chip", "An encryption algorithm"],
                answer: 1
            },
            {
                question: "What is the property called when qubits exist in multiple states simultaneously?",
                options: ["Entanglement", "Superposition", "Collapse", "Decoherence"],
                answer: 1
            },
            {
                question: "Which principle links particles across distances?",
                options: ["Superposition", "Quantum entanglement", "Wave-particle duality", "Uncertainty principle"],
                answer: 1
            },
            {
                question: "What challenges do current quantum computers face?",
                options: ["High cost only", "Stability and error correction", "Lack of applications", "Limited interest"],
                answer: 1
            },
            {
                question: "Which area is mentioned as one where quantum computers excel?",
                options: ["Word processing", "Drug discovery", "Web browsing", "Video games"],
                answer: 1
            }
        ],
        dictation: [
            { before: "Quantum computing represents a fundamental shift in how we", answer: "process information", after: "" },
            { before: "Another principle is quantum entanglement, linking particles", answer: "across distances", after: "" },
            { before: "Quantum computers excel at solving certain problems that are", answer: "intractable for classical computers", after: "" },
            { before: "Current quantum computers face challenges with stability and", answer: "error correction", after: "" },
            { before: "A practical quantum computer for general use", answer: "is still several years away", after: "" }
        ]
    },
    {
        id: "campus-3",
        title: "Academic Research Methodology",
        category: "campus",
        difficulty: "hard",
        duration: "15:25",
        source: "University of Oxford",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/embed/videoseries?list=PLm5kHkF1z3hQ3jQFJZ6KqB3BC0rCBKkmX",
        tags: ["学术", "研究方法", "论文"],
        transcript: [
            { en: "Welcome to this workshop on academic research methodology.", zh: "欢迎参加本次学术研究方法论研讨会。" },
            { en: "Today we'll cover the key components of a successful research project.", zh: "今天我们将探讨成功研究项目的关键组成部分。" },
            { en: "First, you need to formulate a clear research question.", zh: "首先，你需要提出一个清晰的研究问题。" },
            { en: "Your research question should be specific, measurable, and achievable.", zh: "你的研究问题应该是具体、可衡量和可实现的。" },
            { en: "Next, conduct a thorough literature review to understand existing work.", zh: "接下来，进行彻底的文献综述以了解现有研究。" },
            { en: "Choose an appropriate methodology based on your research objectives.", zh: "根据你的研究目标选择适当的研究方法。" },
            { en: "Quantitative methods use statistical analysis of numerical data.", zh: "定量方法使用统计分析方法处理数值数据。" },
            { en: "Qualitative methods explore themes and patterns in non-numerical data.", zh: "定性方法探索非数值数据中的主题和模式。" },
            { en: "Data collection must follow ethical guidelines and obtain proper consent.", zh: "数据收集必须遵循伦理准则并获得适当同意。" },
            { en: "Finally, analyze your results and draw evidence-based conclusions.", zh: "最后，分析你的结果并得出基于证据的结论。" }
        ],
        quiz: [
            {
                question: "What is the first step in a research project according to the lecture?",
                options: ["Data collection", "Literature review", "Formulating a clear research question", "Choosing a methodology"],
                answer: 2
            },
            {
                question: "What should a research question be?",
                options: ["Broad and general", "Specific, measurable, and achievable", "Complex and theoretical", "Easy to answer"],
                answer: 1
            },
            {
                question: "What do quantitative methods use?",
                options: ["Thematic analysis", "Statistical analysis of numerical data", "Case studies", "Interviews"],
                answer: 1
            },
            {
                question: "What must data collection follow?",
                options: ["Budget constraints", "Ethical guidelines", "Time schedules", "Peer review"],
                answer: 1
            },
            {
                question: "What should conclusions be based on?",
                options: ["Personal opinions", "Evidence", "Popular theories", "Assumptions"],
                answer: 1
            }
        ],
        dictation: [
            { before: "First, you need to formulate", answer: "a clear research question", after: "" },
            { before: "Next, conduct a thorough literature review", answer: "to understand existing work", after: "" },
            { before: "Choose an appropriate methodology based on", answer: "your research objectives", after: "" },
            { before: "Data collection must follow ethical guidelines and", answer: "obtain proper consent", after: "" },
            { before: "Finally, analyze your results and draw", answer: "evidence-based conclusions", after: "" }
        ]
    },
    {
        id: "daily-4",
        title: "Job Interview Preparation",
        category: "daily",
        difficulty: "hard",
        duration: "13:10",
        source: "BBC Learning English",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/embed/1rD6h5zATIY",
        tags: ["求职", "面试", "职场英语"],
        transcript: [
            { en: "Welcome to our job interview preparation session.", zh: "欢迎参加我们的求职面试准备课程。" },
            { en: "A successful interview requires thorough preparation and confidence.", zh: "成功的面试需要充分的准备和自信。" },
            { en: "Start by researching the company's background and its core values.", zh: "首先研究公司的背景和核心价值观。" },
            { en: "Prepare specific examples that demonstrate your skills and achievements.", zh: "准备好能展示你技能和成就的具体例子。" },
            { en: "The STAR method is excellent for structuring your responses.", zh: "STAR方法是组织回答的绝佳方式。" },
            { en: "STAR stands for Situation, Task, Action, and Result.", zh: "STAR代表情境、任务、行动和结果。" },
            { en: "Describe the situation you faced and the task you needed to accomplish.", zh: "描述你面对的情境和需要完成的任务。" },
            { en: "Then explain the specific actions you took to address the challenge.", zh: "然后解释你为应对挑战所采取的具体行动。" },
            { en: "Finally, share the results and what you learned from the experience.", zh: "最后，分享结果以及你从这次经历中学到的东西。" },
            { en: "Remember to prepare thoughtful questions to ask the interviewer as well.", zh: "记得也要准备好向面试官提问的有深度的问题。" }
        ],
        quiz: [
            {
                question: "What should you research before an interview?",
                options: ["The interviewer's personal life", "The company's background and core values", "The salary range only", "Other candidates"],
                answer: 1
            },
            {
                question: "What does STAR stand for?",
                options: ["Start, Talk, Answer, Review", "Situation, Task, Action, Result", "Strategy, Timing, Action, Response", "Structure, Topic, Analysis, Reflection"],
                answer: 1
            },
            {
                question: "What does the 'A' in STAR represent?",
                options: ["Answer", "Action", "Analysis", "Approach"],
                answer: 1
            },
            {
                question: "What is the final step in the STAR method?",
                options: ["Asking questions", "Sharing results and lessons learned", "Thanking the interviewer", "Discussing salary"],
                answer: 1
            },
            {
                question: "What else should you prepare besides answers to questions?",
                options: ["A resume", "Thoughtful questions for the interviewer", "Reference letters", "A portfolio"],
                answer: 1
            }
        ],
        dictation: [
            { before: "A successful interview requires thorough preparation and", answer: "confidence", after: "" },
            { before: "Start by researching the company's background and", answer: "its core values", after: "" },
            { before: "Prepare specific examples that demonstrate your skills and", answer: "achievements", after: "" },
            { before: "The STAR method is excellent for structuring", answer: "your responses", after: "" },
            { before: "Remember to prepare thoughtful questions", answer: "to ask the interviewer", after: " as well" }
        ]
    }
];
