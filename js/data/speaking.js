// IELTS 口语题库数据
const SPEAKING_DATA = {
    part1: [
        {
            id: "p1-work",
            question: "Do you work or are you a student?",
            difficulty: "easy",
            sample: "I'm currently a full-time student at Beijing University, majoring in Computer Science. I find my coursework both challenging and rewarding, especially the programming modules.\n\nActually, I graduated last year and now I work as a software engineer at a tech company. It's a demanding job but I really enjoy solving complex problems on a daily basis.",
            keywords: ["university", "major", "freshman", "graduate", "software engineer", "career"]
        },
        {
            id: "p1-hometown",
            question: "Where is your hometown?",
            difficulty: "easy",
            sample: "My hometown is a small coastal city called Qingdao in Shandong Province. It's renowned for its beautiful beaches and fresh seafood, and I think it's one of the most liveable cities in China.\n\nI grew up in Chengdu, which is the capital of Sichuan Province. It's famous for its spicy cuisine and relaxed lifestyle, and I feel incredibly fortunate to have been raised there.",
            keywords: ["hometown", "coastal", "province", "liveable", "cuisine", "lifestyle"]
        },
        {
            id: "p1-hobbies",
            question: "What do you like to do in your free time?",
            difficulty: "easy",
            sample: "In my spare time, I'm really into photography. I enjoy capturing landscapes and street scenes, and it gives me a great excuse to explore new places. It's also a wonderful way to unwind after a busy week.\n\nI'm quite keen on reading, especially fiction and self-development books. I find that reading broadens my horizons and helps me see the world from different perspectives.",
            keywords: ["photography", "landscape", "unwind", "reading", "fiction", "broaden horizons"]
        },
        {
            id: "p1-travel",
            question: "Do you enjoy travelling?",
            difficulty: "easy",
            sample: "Absolutely, I'm passionate about travelling. I believe it's one of the best ways to learn about different cultures and traditions. Every trip I've taken has left me with unforgettable memories and valuable insights.\n\nYes, travelling is my greatest passion. I try to visit at least two new destinations every year, whether domestically or abroad. It really broadens my mind and helps me appreciate diversity.",
            keywords: ["travelling", "cultures", "traditions", "destinations", "domestically", "diversity"]
        },
        {
            id: "p1-technology",
            question: "How often do you use the internet?",
            difficulty: "easy",
            sample: "I use the internet on a daily basis, probably several hours a day. It's indispensable for my studies, as I need to research academic papers and access online learning platforms. I also use it for entertainment and keeping in touch with friends.\n\nTo be honest, I'm almost always connected to the internet. Whether it's for work, social media, or streaming videos, it has become an integral part of my everyday life.",
            keywords: ["internet", "online", "academic", "platforms", "social media", "streaming"]
        },
        {
            id: "p1-food",
            question: "What kind of food do you like?",
            difficulty: "easy",
            sample: "I'm a big fan of Italian cuisine, especially pasta and pizza. I love the combination of fresh ingredients like tomatoes, basil, and olive oil. I also enjoy experimenting with cooking at home.\n\nI have a soft spot for spicy food, particularly Sichuan dishes. The bold flavours and the tingling sensation from Sichuan peppercorns are absolutely irresistible to me.",
            keywords: ["cuisine", "pasta", "ingredients", "spicy", "Sichuan", "flavours"]
        },
        {
            id: "p1-music",
            question: "Do you like listening to music?",
            difficulty: "easy",
            sample: "Yes, music plays a huge role in my life. I listen to it while studying, commuting, and even before going to bed. My taste is quite eclectic — I enjoy everything from classical to pop music depending on my mood.\n\nDefinitely. I can't imagine a day without music. It helps me concentrate when I'm working and relaxes me when I'm stressed. My favourite genre is indie rock.",
            keywords: ["music", "eclectic", "classical", "pop", "genre", "indie rock"]
        },
        {
            id: "p1-sports",
            question: "Do you play any sports?",
            difficulty: "easy",
            sample: "Yes, I play badminton regularly with my friends at the weekend. It's a fast-paced sport that keeps me fit and active. I find it's also a great social activity that strengthens our bond.\n\nI enjoy swimming during the summer months. It's a full-body workout and very refreshing, especially on hot days. I try to go at least twice a week when the weather permits.",
            keywords: ["badminton", "fit", "active", "swimming", "workout", "refreshing"]
        },
        {
            id: "p1-family",
            question: "Can you tell me about your family?",
            difficulty: "easy",
            sample: "There are four members in my family: my parents, my younger sister, and me. We are very close-knit and always support each other through thick and thin. My parents have been a great source of inspiration for me.\n\nI come from a small family of three. My mother is a teacher and my father runs his own business. Despite our busy schedules, we always make time for family dinners and conversations.",
            keywords: ["close-knit", "support", "inspiration", "family dinners", "business"]
        },
        {
            id: "p1-shopping",
            question: "Do you enjoy shopping?",
            difficulty: "easy",
            sample: "I'm not particularly fond of shopping, to be honest. I prefer to buy things online because it's more convenient and time-saving. Brick-and-mortar stores can be quite crowded and exhausting.\n\nYes, I enjoy shopping, especially for clothes and accessories. It's a great way to de-stress and treat myself. I like browsing through different stores and discovering new styles.",
            keywords: ["online shopping", "convenient", "brick-and-mortar", "accessories", "de-stress", "browsing"]
        },
        {
            id: "p1-friends",
            question: "How often do you see your friends?",
            difficulty: "easy",
            sample: "I meet up with my friends at least once a week, usually over the weekend. We often grab a meal together or watch a movie. I cherish these moments because my friends mean a great deal to me.\n\nSince we're all quite busy with our own commitments, we don't see each other as often as I'd like. But we keep in touch through messaging apps and try to catch up at least twice a month.",
            keywords: ["meet up", "cherish", "commitments", "keep in touch", "messaging", "catch up"]
        },
        {
            id: "p1-reading",
            question: "Do you like reading books?",
            difficulty: "easy",
            sample: "Yes, I'm an avid reader. I particularly enjoy mystery novels and biographies. Reading not only entertains me but also enriches my vocabulary and critical thinking skills.\n\nI love reading, though I don't get as much time for it as I used to. When I do read, I prefer non-fiction books about history and science. I find them incredibly enlightening.",
            keywords: ["avid reader", "mystery novels", "biographies", "non-fiction", "enlightening", "vocabulary"]
        },
        {
            id: "p1-environment",
            question: "Do you care about the environment?",
            difficulty: "easy",
            sample: "Yes, I'm quite environmentally conscious. I always recycle rubbish and try to reduce my plastic usage. I believe every small action counts when it comes to protecting our planet.\n\nAbsolutely. The state of the environment concerns me deeply. I've made changes to my lifestyle such as using reusable bags, cycling instead of driving, and conserving electricity at home.",
            keywords: ["environmentally conscious", "recycle", "plastic", "reusable", "conserving", "lifestyle"]
        },
        {
            id: "p1-health",
            question: "How do you stay healthy?",
            difficulty: "easy",
            sample: "I try to maintain a balanced diet and exercise regularly. I go jogging every morning and make sure I eat plenty of fruits and vegetables. I also think getting enough sleep is crucial for good health.\n\nI stay healthy by keeping an active lifestyle. I walk everywhere when possible and avoid processed foods. Additionally, I practise meditation to manage stress levels effectively.",
            keywords: ["balanced diet", "jogging", "fruits", "vegetables", "active lifestyle", "meditation"]
        },
        {
            id: "p1-weather",
            question: "What kind of weather do you like?",
            difficulty: "easy",
            sample: "I prefer mild weather, not too hot or too cold. Spring is my favourite season because the temperature is pleasant and everything feels fresh and vibrant. I enjoy going for walks when it's sunny but not scorching.\n\nI'm fond of rainy weather, actually. I find the sound of rain very soothing and it creates a cosy atmosphere at home. It's the perfect weather for curling up with a good book and a cup of tea.",
            keywords: ["mild", "spring", "vibrant", "rainy", "soothing", "cosy"]
        }
    ],
    part2: [
        {
            id: "p2-describe-person",
            title: "Describe a person you admire.",
            prompts: ["Who this person is", "How you know them", "What they are like", "Explain why you admire them"],
            difficulty: "medium",
            sample: "The person I admire the most is my high school history teacher, Mr Zhang. He was not only knowledgeable but also incredibly passionate about teaching. His classes were always engaging because he would bring historical events to life with vivid stories and thought-provoking questions. What truly set him apart was his patience — he never dismissed any question, no matter how trivial it seemed. He inspired me to think critically and pursue knowledge for its own sake rather than just for exams. Even now, years after graduation, I still reflect on the lessons he taught us, both inside and outside the classroom.",
            keywords: ["admire", "role model", "inspiring", "passionate", "thought-provoking", "critical thinking"]
        },
        {
            id: "p2-describe-place",
            title: "Describe a place you enjoy visiting.",
            prompts: ["Where this place is", "How often you go there", "What you do there", "Explain why you enjoy it so much"],
            difficulty: "medium",
            sample: "A place I thoroughly enjoy visiting is the city library near my home. It's a modern building with several floors dedicated to different genres and resources. I go there almost every weekend to study and borrow books. The atmosphere is incredibly peaceful, with plenty of natural light and comfortable reading areas. What I appreciate most is the sense of community — you see people of all ages immersed in learning. The library also hosts regular events like author talks and reading clubs, which I find intellectually stimulating. For me, it's a sanctuary away from the hustle and bustle of city life.",
            keywords: ["library", "peaceful", "natural light", "community", "intellectually stimulating", "sanctuary"]
        },
        {
            id: "p2-describe-experience",
            title: "Describe a memorable event from your childhood.",
            prompts: ["What the event was", "When and where it happened", "Who was with you", "Explain why it was so memorable"],
            difficulty: "medium",
            sample: "One of the most memorable events from my childhood was my first trip to the Great Wall with my grandparents when I was about eight years old. I remember waking up early, filled with excitement, and the long drive there felt like an eternity. When we finally arrived and I saw the wall stretching across the mountains, I was absolutely awestruck. My grandfather told me stories about the history of the wall as we climbed the steep steps together. The sense of accomplishment when we reached the top was overwhelming. That experience sparked my lifelong interest in history and travel, and it remains one of my fondest memories.",
            keywords: ["memorable", "childhood", "Great Wall", "excitement", "awestruck", "accomplishment"]
        },
        {
            id: "p2-describe-object",
            title: "Describe an object that is special to you.",
            prompts: ["What the object is", "How you got it", "What it looks like", "Explain why it is special to you"],
            difficulty: "medium",
            sample: "A special object I cherish is a vintage fountain pen that my father gave me on my fifteenth birthday. It has a sleek black barrel with gold accents and a smooth nib that glides across the paper effortlessly. My father told me it belonged to my grandfather, who used it throughout his career as a journalist. Holding that pen makes me feel connected to my family's history and traditions. Whenever I use it to write important letters or journal entries, I'm reminded of the value of patience and craftsmanship in an age of digital haste. It's more than just a writing instrument — it's a family heirloom filled with memories.",
            keywords: ["cherish", "vintage", "fountain pen", "family heirloom", "craftsmanship", "sentimental"]
        },
        {
            id: "p2-describe-activity",
            title: "Describe a hobby you enjoy.",
            prompts: ["What the hobby is", "When you started it", "How often you do it", "Explain why you enjoy it"],
            difficulty: "medium",
            sample: "A hobby I'm really passionate about is playing the guitar. I started learning when I was in middle school after being inspired by a friend's performance at a school talent show. At first, I found it quite challenging — my fingers would ache and I struggled with chord transitions. But I persisted, practising for at least an hour every day. Over time, I improved significantly and even formed a small band with my classmates. Playing the guitar allows me to express my emotions creatively and serves as a wonderful stress reliever. It has also taught me discipline and the value of consistent effort.",
            keywords: ["guitar", "passionate", "talent show", "chord", "stress reliever", "discipline"]
        },
        {
            id: "p2-describe-achievement",
            title: "Describe an achievement you are proud of.",
            prompts: ["What the achievement was", "How you achieved it", "Who helped you", "Explain why you are proud of it"],
            difficulty: "medium",
            sample: "An achievement I take great pride in is winning the first prize in a national English debating competition during my sophomore year of university. I spent months preparing, researching a wide range of topics from climate policy to global economics. My coach and teammates were incredibly supportive, helping me refine my arguments and delivery. On the day of the final, I was nervous but also determined to give my best. When they announced our team as the winner, I felt an overwhelming sense of validation for all the hard work we had put in. This achievement boosted my confidence enormously and confirmed my passion for public speaking.",
            keywords: ["achievement", "debating", "competition", "confidence", "public speaking", "validation"]
        },
        {
            id: "p2-describe-festival",
            title: "Describe an important festival in your country.",
            prompts: ["What the festival is", "When it is celebrated", "How people celebrate it", "Explain why it is important"],
            difficulty: "medium",
            sample: "The Spring Festival, or Chinese New Year, is undoubtedly the most significant festival in my country. It usually falls between late January and mid-February, marking the beginning of the lunar new year. The celebrations last for about two weeks, but the most important days are the New Year's Eve and the first day. Families gather for a lavish reunion dinner, exchange red envelopes containing money, and set off fireworks to ward off evil spirits. What makes it truly special is the emphasis on family reunion — people travel across the country to be with their loved ones. It's a time of joy, reflection, and hope for the year ahead.",
            keywords: ["Spring Festival", "lunar new year", "reunion dinner", "red envelopes", "fireworks", "family reunion"]
        },
        {
            id: "p2-describe-skill",
            title: "Describe a skill you want to learn.",
            prompts: ["What the skill is", "Why you want to learn it", "How you plan to learn it", "Explain how it will benefit you"],
            difficulty: "medium",
            sample: "A skill I'm determined to learn is data analysis using Python. In today's data-driven world, I believe this skill is becoming increasingly essential across almost every industry. I'm particularly interested in how data can reveal patterns and inform better decision-making. My plan is to take an online course on a platform like Coursera or Udemy, and then work on real-world projects to solidify my understanding. I also intend to join a study group to stay motivated. Mastering data analysis would significantly enhance my career prospects and enable me to contribute more meaningfully to my field.",
            keywords: ["data analysis", "Python", "data-driven", "online course", "career prospects", "decision-making"]
        },
        {
            id: "p2-describe-book",
            title: "Describe a book you enjoyed reading.",
            prompts: ["What the book is", "When you read it", "What it is about", "Explain why you enjoyed it"],
            difficulty: "medium",
            sample: "A book that left a lasting impression on me is 'To Kill a Mockingbird' by Harper Lee. I read it during my final year of high school for an English literature class at first, but I quickly became absorbed in the story. The novel is set in the American South and deals with profound themes of racial injustice, moral growth, and empathy through the eyes of a young girl named Scout Finch. What struck me most was the character of Atticus Finch, a lawyer who stands up for what is right despite overwhelming social pressure. The book taught me the importance of integrity and seeing the world from others' perspectives.",
            keywords: ["To Kill a Mockingbird", "racial injustice", "moral growth", "empathy", "integrity", "perspective"]
        },
        {
            id: "p2-describe-app",
            title: "Describe a useful application or website you use.",
            prompts: ["What the app or website is", "How you discovered it", "How you use it", "Explain why it is so useful"],
            difficulty: "medium",
            sample: "A website I find incredibly useful is Notion, which is an all-in-one workspace for note-taking, project management, and collaboration. I discovered it through a recommendation from a classmate who used it to organise her study schedule. Since then, I've used it for everything — planning my assignments, tracking my reading list, and even managing personal goals. The flexibility of its database and template system is remarkable. What sets Notion apart is how customisable it is; you can design your workspace exactly the way you want. It has drastically improved my productivity and helped me stay organised amidst a busy schedule.",
            keywords: ["Notion", "workspace", "project management", "note-taking", "productivity", "customisable"]
        },
        {
            id: "p2-describe-meal",
            title: "Describe a memorable meal you had.",
            prompts: ["What the meal was", "Where you had it", "Who you were with", "Explain why it was memorable"],
            difficulty: "medium",
            sample: "The most memorable meal I've ever had was a home-cooked hotpot dinner during the Spring Festival two years ago. My entire extended family gathered at my grandmother's house, and we spent the whole afternoon preparing ingredients together — slicing meat, washing vegetables, and making dipping sauces. The hotpot itself was bubbling with a spicy broth that filled the room with an irresistible aroma. As we ate and chatted late into the night, I felt a deep sense of warmth and belonging. That meal was memorable not because of the food alone, but because of the love and togetherness it represented.",
            keywords: ["hotpot", "extended family", "broth", "togetherness", "memorable", "aroma"]
        },
        {
            id: "p2-describe-rule",
            title: "Describe a rule or law that you think is important.",
            prompts: ["What the rule or law is", "How you know about it", "Who it affects", "Explain why you think it is important"],
            difficulty: "medium",
            sample: "A law I consider highly important is the ban on single-use plastics that was implemented in my city a few years ago. This regulation prohibits the use of plastic bags, straws, and cutlery in most retail establishments. I first learned about it through news reports and noticed the changes gradually in supermarkets and restaurants. This law affects everyone, from consumers to business owners, and it has significantly reduced plastic waste in our community. I believe it's crucial because plastic pollution is one of the most pressing environmental issues of our time, and such legislation pushes us towards more sustainable habits.",
            keywords: ["single-use plastics", "regulation", "plastic waste", "sustainable", "legislation", "environmental"]
        },
        {
            id: "p2-describe-plant",
            title: "Describe a plant or flower you like.",
            prompts: ["What the plant or flower is", "Where it grows", "What it looks like", "Explain why you like it"],
            difficulty: "medium",
            sample: "A flower I particularly admire is the plum blossom, which is a symbol of resilience in Chinese culture. It blooms in late winter, often while snow is still on the ground, which is quite remarkable. The flowers are delicate, with five petals in shades of pink, red, or white, and they emit a subtle, sweet fragrance. Plum blossoms grow on rugged branches that twist in elegant shapes. I like them because they represent perseverance and hope — they endure harsh conditions and bloom when everything else seems dormant. Every time I see plum blossoms, I'm reminded to stay strong in difficult times.",
            keywords: ["plum blossom", "resilience", "blooms", "petals", "fragrance", "perseverance"]
        },
        {
            id: "p2-describe-photo",
            title: "Describe a photo you like.",
            prompts: ["What the photo shows", "When and where it was taken", "Who took it", "Explain why you like it so much"],
            difficulty: "medium",
            sample: "A photo I truly treasure is a candid shot of my grandparents sitting on their favourite park bench, holding hands and laughing. It was taken about three years ago during a family picnic in a park near their home. My cousin happened to capture the moment with her phone, and the result was surprisingly beautiful. The warm afternoon sunlight filters through the trees, casting a golden glow on their faces. What I love about this photo is how naturally it captures their affection and joy after decades of marriage. It reminds me that love can be simple, enduring, and beautiful, and it always brings a smile to my face.",
            keywords: ["candid", "treasure", "golden glow", "affection", "joy", "enduring"]
        },
        {
            id: "p2-describe-news",
            title: "Describe a piece of good news you received.",
            prompts: ["What the news was", "When and where you received it", "How you felt when you received it", "Explain why it was good news for you"],
            difficulty: "medium",
            sample: "The best news I ever received was when I found out that I had been accepted into my dream university. It was a chilly winter afternoon, and I was checking my email nervously, as I had been waiting for weeks. When I saw the words 'Congratulations! We are pleased to offer you admission,' my heart skipped a beat. I screamed with joy and ran to tell my parents, who were equally overjoyed. That moment felt like all my years of hard work had finally paid off. It was good news not just because of the acceptance itself, but because it validated my efforts and opened the door to a bright future.",
            keywords: ["accepted", "dream university", "admission", "congratulations", "validated", "bright future"]
        }
    ],
    part3: [
        {
            id: "p3-education",
            question: "How do you think education will change in the future?",
            difficulty: "hard",
            sample: "I believe education will undergo a profound transformation in the coming decades. The traditional model of students sitting in a physical classroom for hours is likely to give way to more personalised and flexible learning approaches. Technology, especially artificial intelligence, will play a pivotal role by adapting course materials to each student's pace and learning style. We're also likely to see a greater emphasis on skills like critical thinking, creativity, and emotional intelligence, rather than rote memorisation. However, I think the role of teachers will remain irreplaceable, as they provide mentorship and inspiration that no algorithm can replicate.",
            keywords: ["personalised learning", "artificial intelligence", "critical thinking", "emotional intelligence", "rote memorisation", "mentorship"]
        },
        {
            id: "p3-technology",
            question: "What impact has technology had on people's social relationships?",
            difficulty: "hard",
            sample: "Technology has had a dual impact on social relationships. On the positive side, it has made communication incredibly convenient, allowing people to maintain connections across vast distances. Social media platforms help us stay updated with friends and family, and online communities have enabled people with niche interests to find each other. On the flip side, I'm concerned that excessive screen time is eroding face-to-face interaction skills. Many people, especially younger generations, may feel more comfortable texting than having a real conversation. There's also the issue of social comparison on platforms like Instagram, which can negatively affect mental health. Ultimately, technology is a tool — it depends on how we use it.",
            keywords: ["dual impact", "social media", "face-to-face", "screen time", "social comparison", "mental health"]
        },
        {
            id: "p3-environment",
            question: "What measures should governments take to protect the environment?",
            difficulty: "hard",
            sample: "Governments should adopt a multi-pronged approach to environmental protection. Firstly, they need to enforce stricter regulations on industrial emissions and waste disposal to hold corporations accountable. Secondly, investing heavily in renewable energy sources such as solar, wind, and hydroelectric power is crucial to reducing our reliance on fossil fuels. Thirdly, public awareness campaigns can educate citizens about sustainable practices like recycling and energy conservation. Additionally, offering tax incentives for green businesses and electric vehicle adoption could accelerate the transition to a low-carbon economy. I believe that meaningful change requires both top-down legislation and grassroots participation.",
            keywords: ["regulations", "renewable energy", "fossil fuels", "public awareness", "tax incentives", "low-carbon economy"]
        },
        {
            id: "p3-globalization",
            question: "Do you think globalisation is a positive or negative force?",
            difficulty: "hard",
            sample: "I see globalisation as a double-edged sword with both significant benefits and drawbacks. On the positive side, it has facilitated unprecedented cultural exchange, economic growth, and technological advancement. People can now access products, ideas, and opportunities from around the world with ease. However, the negative aspects cannot be ignored — globalisation has contributed to income inequality, cultural homogenisation, and environmental degradation. Local industries in developing countries often struggle to compete with multinational corporations. I think the goal should be to pursue a form of globalisation that is more inclusive and sustainable, ensuring that its benefits are distributed more equitably across societies.",
            keywords: ["double-edged sword", "cultural exchange", "income inequality", "cultural homogenisation", "multinational corporations", "inclusive"]
        },
        {
            id: "p3-urbanization",
            question: "What challenges do big cities face today?",
            difficulty: "hard",
            sample: "Big cities today confront a myriad of complex challenges. Overpopulation is perhaps the most pressing issue, leading to housing shortages, traffic congestion, and strained public services. The cost of living in major urban centres has skyrocketed, making it increasingly difficult for young people to afford housing. Environmental concerns are also significant, as cities contribute disproportionately to carbon emissions and waste generation. Furthermore, social issues such as crime, inequality, and social isolation are more pronounced in densely populated areas. Addressing these challenges requires comprehensive urban planning, investment in public transportation, affordable housing policies, and community-building initiatives.",
            keywords: ["overpopulation", "housing shortages", "traffic congestion", "cost of living", "carbon emissions", "urban planning"]
        },
        {
            id: "p3-culture",
            question: "Why is it important to preserve cultural traditions?",
            difficulty: "hard",
            sample: "Preserving cultural traditions is vital for several reasons. Firstly, traditions provide a sense of identity and belonging, connecting individuals to their heritage and community. They offer a framework of values and practices that have been passed down through generations, contributing to social cohesion. Secondly, cultural diversity enriches the human experience — each tradition represents a unique way of understanding the world, from art and music to cuisine and philosophy. When a tradition disappears, we lose a piece of that collective wisdom. However, I also believe that traditions should not be static; they need to evolve and adapt to contemporary contexts while retaining their core essence.",
            keywords: ["identity", "belonging", "heritage", "social cohesion", "cultural diversity", "evolve"]
        },
        {
            id: "p3-health",
            question: "What can be done to encourage people to lead healthier lifestyles?",
            difficulty: "hard",
            sample: "Encouraging healthier lifestyles requires interventions at multiple levels. At the individual level, education about nutrition and exercise is fundamental — people need to understand the long-term consequences of poor habits. Schools should incorporate comprehensive health education into their curricula from an early age. At the community level, cities can be designed to promote physical activity, with more parks, cycle lanes, and pedestrian-friendly streets. Governments can also implement policies such as sugar taxes, subsidies for fresh produce, and mandatory nutritional labelling on food products. Additionally, workplace wellness programmes that offer gym memberships or mental health support can make a significant difference.",
            keywords: ["nutrition", "health education", "physical activity", "sugar taxes", "wellness programmes", "mental health support"]
        },
        {
            id: "p3-media",
            question: "How has social media changed the way people communicate?",
            difficulty: "hard",
            sample: "Social media has fundamentally redefined communication in both positive and concerning ways. On one hand, it has democratised information sharing, allowing anyone with internet access to have a voice and reach a global audience. It has also facilitated real-time interaction and enabled social movements to mobilise quickly. On the other hand, the brevity and speed of platforms like Twitter have encouraged superficial exchanges rather than deep, meaningful conversations. The prevalence of echo chambers and algorithms that prioritise sensational content has contributed to polarisation and the spread of misinformation. I think the key challenge of our time is learning to use these powerful tools critically and responsibly.",
            keywords: ["democratised", "global audience", "superficial", "echo chambers", "polarisation", "misinformation"]
        },
        {
            id: "p3-employment",
            question: "What factors should people consider when choosing a career?",
            difficulty: "hard",
            sample: "Choosing a career is one of the most consequential decisions a person can make, and several factors should be carefully weighed. Passion and personal interest are important — doing something you genuinely enjoy leads to greater job satisfaction and motivation. However, practical considerations such as salary, job security, and career prospects cannot be overlooked. The work-life balance a profession offers is increasingly valued, especially among younger generations. It's also wise to consider the long-term trajectory of the industry; some fields may face automation or decline in the coming decades. Ultimately, the best career choice balances personal fulfilment with financial stability and future growth potential.",
            keywords: ["job satisfaction", "salary", "work-life balance", "career prospects", "automation", "fulfilment"]
        },
        {
            id: "p3-science",
            question: "Should scientific research always be funded by governments?",
            difficulty: "hard",
            sample: "I don't believe all scientific research should be solely government-funded, but public investment is indispensable. Government funding is crucial for basic scientific research that may not have immediate commercial applications but advances our fundamental understanding of the world. Fields like astronomy, fundamental physics, and long-term medical research rely heavily on public grants. However, private sector funding also plays an important role, particularly in applied research and product development where there's a clear path to market. I think an optimal model involves collaboration between public institutions and private enterprises, with governments providing foundational support and ethical oversight while the private sector drives innovation and practical applications.",
            keywords: ["government-funded", "public investment", "basic research", "commercial applications", "public-private collaboration", "ethical oversight"]
        }
    ]
};
