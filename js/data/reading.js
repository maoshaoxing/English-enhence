// IELTS 阅读文章数据 ~10篇

var READING_DATA = [
    // ============================================================
    // EASY (3篇) — 300-500 words
    // ============================================================
    {
        id: "reading-1",
        title: "How Children Learn Language",
        difficulty: "easy",
        wordCount: 420,
        paragraphs: [
            "Language acquisition in children is a remarkable process that has fascinated researchers for decades. Unlike adults who often struggle to learn a second language, children seem to absorb their native language effortlessly. By the age of five, most children have mastered the basic grammatical structures of their mother tongue, despite having received no formal instruction.",
            "Theories of language acquisition fall into two main camps. The behaviourist view, championed by B.F. Skinner, argues that children learn language through imitation and reinforcement. When a child says 'milk' and receives milk, the behaviour is rewarded and thus repeated. However, this theory struggles to explain how children produce sentences they have never heard before.",
            "The nativist perspective, proposed by Noam Chomsky, suggests that humans are born with an innate capacity for language. Chomsky posited the existence of a 'language acquisition device' in the brain that allows children to derive grammatical rules from the language they hear. Evidence for this includes the fact that children across all cultures reach similar language milestones at roughly the same ages, even in vastly different linguistic environments.",
            "More recent research emphasises the role of social interaction. The interactionist approach argues that language develops through meaningful communication with caregivers. Studies show that children who are spoken to more frequently tend to develop larger vocabularies. Furthermore, the quality of interaction—such as using 'parentese', the slow, exaggerated speech that adults naturally use with babies—appears to support language learning by making speech sounds more distinct."
        ],
        questions: [
            {
                question: "What is the main purpose of the passage?",
                options: ["To compare different theories of language acquisition", "To argue that behaviourism is the correct theory", "To describe how to teach children language", "To explain why adults struggle to learn languages"],
                answer: 0
            },
            {
                question: "According to behaviourist theory, why do children learn language?",
                options: ["They are born with a language instinct", "Their brains have a special language device", "They imitate others and are rewarded for correct use", "They interact socially with caregivers"],
                answer: 2
            },
            {
                question: "What evidence supports the nativist perspective?",
                options: ["Children who are spoken to more have larger vocabularies", "Children worldwide reach language milestones at similar ages", "Children imitate adults' speech exactly", "Formal instruction improves language learning"],
                answer: 1
            },
            {
                question: "The word 'parentese' in paragraph 4 is closest in meaning to",
                options: ["A formal teaching method", "A simplified speech pattern used with babies", "A second language learning technique", "A type of grammatical rule"],
                answer: 1
            },
            {
                question: "What does the interactionist approach emphasise?",
                options: ["Imitation and reinforcement", "Innate biological capacity", "Meaningful communication with caregivers", "Formal grammatical instruction"],
                answer: 2
            }
        ]
    },
    {
        id: "reading-2",
        title: "The Science of Sleep",
        difficulty: "easy",
        wordCount: 380,
        paragraphs: [
            "Sleep is not merely a passive state of rest; it is an active and essential biological process. During sleep, the body performs critical functions such as tissue repair, muscle growth, and the consolidation of memory. Adults typically require between seven and nine hours of sleep per night, yet a significant portion of the population regularly gets less than this.",
            "The sleep cycle consists of several stages, most notably REM (Rapid Eye Movement) sleep and non-REM sleep. Non-REM sleep includes three stages, ranging from light sleep to deep sleep. Deep sleep is particularly important for physical recovery, while REM sleep is associated with dreaming and emotional regulation. A complete cycle lasts about 90 minutes, and most people experience four to six cycles per night.",
            "Chronic sleep deprivation has serious consequences for health. Studies have linked insufficient sleep to a higher risk of obesity, diabetes, cardiovascular disease, and weakened immune function. Moreover, lack of sleep impairs cognitive performance, including attention, decision-making, and reaction time. Drivers who have been awake for 18 hours perform similarly to those with a blood alcohol concentration of 0.05%.",
            "Recent research has revealed the glymphatic system, a waste-clearing process that is highly active during sleep. This system removes toxic proteins, including beta-amyloid, which is associated with Alzheimer's disease. These findings suggest that adequate sleep may play a protective role against neurodegenerative conditions, further underscoring why sleep should not be seen as optional."
        ],
        questions: [
            {
                question: "What is the main idea of the passage?",
                options: ["People should sleep more than nine hours per night", "Sleep is an active biological process vital for health", "REM sleep is more important than non-REM sleep", "Sleep deprivation only affects cognitive performance"],
                answer: 1
            },
            {
                question: "How long does a complete sleep cycle typically last?",
                options: ["Seven to nine hours", "30 minutes", "90 minutes", "18 hours"],
                answer: 2
            },
            {
                question: "What is the glymphatic system responsible for?",
                options: ["Regulating emotional responses during sleep", "Increasing blood alcohol concentration", "Removing waste products from the brain", "Controlling muscle growth at night"],
                answer: 2
            },
            {
                question: "According to the passage, what happens to someone awake for 18 hours?",
                options: ["They are unable to dream", "Their cognitive performance resembles mild intoxication", "They enter REM sleep immediately", "Their glymphatic system becomes more active"],
                answer: 1
            },
            {
                question: "Which condition is NOT mentioned as being linked to sleep deprivation?",
                options: ["Obesity", "Diabetes", "Asthma", "Cardiovascular disease"],
                answer: 2
            },
            {
                question: "The word 'consolidation' in paragraph 1 most nearly means",
                options: ["Destruction", "Strengthening and stabilising", "Reduction", "Observation"],
                answer: 1
            }
        ]
    },
    {
        id: "reading-3",
        title: "Urban Community Gardens",
        difficulty: "easy",
        wordCount: 460,
        paragraphs: [
            "Community gardens have become increasingly popular in cities around the world. These shared green spaces, where residents collectively grow vegetables, herbs, and flowers, transform vacant lots into productive and beautiful areas. What began as a grassroots response to urban decay has evolved into a movement with far-reaching benefits for individuals and neighbourhoods alike.",
            "One of the most immediate benefits of community gardens is improved access to fresh food. In many urban areas, particularly low-income neighbourhoods, supermarkets are scarce and fresh produce is expensive. These 'food deserts' leave residents reliant on processed foods high in sugar and fat. Community gardens offer a practical solution by enabling residents to grow their own nutritious food at minimal cost.",
            "Beyond nutrition, community gardens serve as vital social spaces. They bring together people of different ages, backgrounds, and cultures, fostering social cohesion in increasingly diverse cities. Gardeners share knowledge, tools, and harvests, creating networks of mutual support. Research has shown that neighbourhoods with active community gardens report lower crime rates and stronger community ties.",
            "Environmental benefits are also significant. Gardens reduce the urban heat island effect by providing shade and releasing moisture into the air. They improve air quality, support urban biodiversity by providing habitats for pollinators, and reduce stormwater runoff. Furthermore, growing food locally reduces the carbon emissions associated with transporting produce over long distances.",
            "Despite these advantages, community gardens face challenges. Land tenure is often insecure, with gardens occupying sites that could be sold for development. Funding for tools, seeds, and water can be inconsistent. Nevertheless, many cities have begun incorporating community gardens into their urban planning policies, recognising them as essential infrastructure for sustainable urban living."
        ],
        questions: [
            {
                question: "What is the primary focus of the passage?",
                options: ["The challenges of urban agriculture", "The multiple benefits of community gardens in cities", "How to start a community garden", "The history of urban farming"],
                answer: 1
            },
            {
                question: "What does the term 'food deserts' in paragraph 2 refer to?",
                options: ["Areas where no food is available at all", "Urban areas with limited access to fresh, affordable food", "Neighbourhoods with too many supermarkets", "Gardens that cannot grow food"],
                answer: 1
            },
            {
                question: "According to the passage, what social benefit do community gardens provide?",
                options: ["They increase property values", "They create paid jobs for residents", "They bring diverse groups together and build community ties", "They replace traditional parks"],
                answer: 2
            },
            {
                question: "Which environmental benefit of community gardens is mentioned?",
                options: ["They eliminate all urban pollution", "They cool the surrounding area and support biodiversity", "They consume large amounts of water", "They require fertilisers that harm the environment"],
                answer: 1
            },
            {
                question: "What is one major challenge facing community gardens?",
                options: ["Residents are not interested in gardening", "They produce too much food", "Land ownership is not secure", "They increase crime rates"],
                answer: 2
            }
        ]
    },

    // ============================================================
    // MEDIUM (4篇) — 500-700 words
    // ============================================================
    {
        id: "reading-4",
        title: "The Silk Road: An Ancient Network of Exchange",
        difficulty: "medium",
        wordCount: 580,
        paragraphs: [
            "The Silk Road was not a single road but a vast network of trade routes that connected China with the Mediterranean world for over 1,500 years. Stretching approximately 6,400 kilometres, it facilitated the exchange of goods, ideas, technologies, and cultures between East and West. Despite its name, silk was only one of many commodities traded along these routes. Spices, precious stones, glassware, textiles, and even animals traversed the harsh terrains of deserts and mountains.",
            "The origins of the Silk Road date back to the 2nd century BCE, during the Han Dynasty. The Chinese emperor sent the diplomat Zhang Qian on a mission to establish alliances with Central Asian tribes. Though the diplomatic mission largely failed, Zhang Qian returned with detailed accounts of the civilisations to the west, sparking Chinese interest in trade. The Han Dynasty subsequently expanded its influence westward, securing the routes that would become the Silk Road.",
            "Trade along the Silk Road reached its zenith during the Tang Dynasty, from the 7th to the 10th centuries CE. The Tang capital, Chang'an (now Xi'an), became a cosmopolitan metropolis where merchants, scholars, and religious pilgrims from diverse backgrounds converged. It was during this period that Buddhism spread from India to China, carried by monks travelling alongside merchant caravans. Similarly, papermaking technology travelled from China westward, revolutionising communication and record-keeping in Europe.",
            "The exchange was not limited to tangible goods. The Silk Road was a conduit for the transmission of knowledge in astronomy, mathematics, medicine, and engineering. For instance, the Indian numeral system, including the concept of zero, reached the Islamic world and eventually Europe through these routes. Artistic styles also blended; Persian motifs appeared in Chinese ceramics, while Chinese painting techniques influenced Persian miniature art.",
            "The decline of the Silk Road began in the 14th century, accelerated by the collapse of the Mongol Empire, which had previously provided security across much of the route. The rise of maritime trade, pioneered by European explorers who sought faster sea routes to Asia, further diminished the importance of overland travel. By the 16th century, the Silk Road had largely faded into obscurity. However, there has been a resurgence of interest in the Silk Road in recent decades. The designation of the Silk Roads as a UNESCO World Heritage site and China's modern Belt and Road Initiative both reflect recognition of these ancient routes as symbols of connectivity and cross-cultural exchange. Archaeologists continue to uncover new evidence of the richness of this network, revealing that the Silk Road was far more complex and interconnected than previously understood."
        ],
        questions: [
            {
                question: "What is the best title for this passage?",
                options: ["The Economic History of Ancient China", "The Silk Road as a Network of Exchange", "Maritime Trade Routes of Europe", "The Decline of Overland Commerce"],
                answer: 1
            },
            {
                question: "According to the passage, what sparked Chinese interest in trade with the West?",
                options: ["The demand for silk in Europe", "Zhang Qian's reports of western civilisations", "The discovery of a sea route to India", "The collapse of the Mongol Empire"],
                answer: 1
            },
            {
                question: "During which dynasty did Silk Road trade reach its peak?",
                options: ["The Han Dynasty", "The Ming Dynasty", "The Tang Dynasty", "The Mongol Empire"],
                answer: 2
            },
            {
                question: "What is implied about the Indian numeral system?",
                options: ["It was invented on the Silk Road", "It reached Europe via the Silk Road through Islamic intermediaries", "It was never adopted in China", "It was less advanced than the Roman numeral system"],
                answer: 1
            },
            {
                question: "The word 'zenith' in paragraph 3 is closest in meaning to",
                options: ["Beginning", "Lowest point", "Peak", "Middle"],
                answer: 2
            },
            {
                question: "Which factor contributed to the decline of the Silk Road?",
                options: ["Decreased demand for silk", "The rise of cheaper maritime trade routes", "A treaty between China and Europe", "The invention of papermaking"],
                answer: 1
            },
            {
                question: "What does the passage suggest about modern interest in the Silk Road?",
                options: ["It is purely historical with no contemporary relevance", "It has grown, with new initiatives inspired by the ancient network", "It has declined as new trade routes have emerged", "It is limited to archaeological research"],
                answer: 1
            }
        ]
    },
    {
        id: "reading-5",
        title: "Cultural Differences in Nonverbal Communication",
        difficulty: "medium",
        wordCount: 630,
        paragraphs: [
            "Nonverbal communication—gestures, facial expressions, eye contact, personal space, and tone of voice—conveys a substantial portion of meaning in human interaction. While some aspects of nonverbal behaviour appear to be universal, particularly basic emotional expressions, the rules governing their use vary considerably across cultures. Misinterpretation of these differences can lead to misunderstanding or even offence in cross-cultural encounters.",
            "Consider the simple gesture of nodding. In most Western cultures, nodding the head up and down signifies agreement or affirmation. However, in parts of Greece, Turkey, and Bulgaria, a single nod can mean 'no', while shaking the head may mean 'yes'. Similarly, the thumbs-up gesture is positive in many Western contexts but considered offensive in parts of the Middle East and West Africa. Such differences highlight the danger of assuming that gestures carry the same meaning everywhere.",
            "Eye contact is another area of significant cultural variation. In North American and many European cultures, direct eye contact is interpreted as a sign of honesty, confidence, and attentiveness. Avoiding eye contact may be perceived as evasive or disrespectful. In contrast, in many East Asian cultures, prolonged eye contact can be viewed as aggressive, disrespectful, or intimidating, particularly when addressing a senior or authority figure. In these contexts, lowering the gaze is a mark of respect.",
            "The concept of personal space—the invisible boundary we maintain around ourselves—also differs markedly. In many Northern European and North American settings, an arm's length of distance is comfortable for conversation. Moving closer can provoke discomfort or anxiety. In many Latin American and Middle Eastern cultures, however, closer proximity is the norm and indicates warmth and engagement. Withdrawing from close contact in these contexts may be interpreted as coldness or rejection.",
            "Touch is perhaps the most complex nonverbal channel. In high-contact cultures such as those in Southern Europe, the Middle East, and Latin America, physical contact during conversation—such as touching an arm or patting a shoulder—is common and expected. Low-contact cultures, including Japan, the United Kingdom, and the United States, tend to restrict touch to more intimate relationships or specific professional contexts. Even the handshake, a near-universal greeting, varies in duration, firmness, and appropriateness depending on cultural norms. Understanding these cultural variations is increasingly important in our globalised world. For international business travellers, diplomats, and migrants, awareness of local nonverbal norms can facilitate smoother communication and relationship building. Cross-cultural training programmes now routinely include modules on nonverbal behaviour, recognising that competence in this area is as critical as language proficiency. Ultimately, cultural sensitivity in nonverbal communication is not about memorising every local custom but about cultivating awareness that one's own way of communicating is not the only way."
        ],
        questions: [
            {
                question: "What is the main argument of the passage?",
                options: ["Nonverbal communication is universal across all cultures", "People should avoid using gestures in foreign countries", "Cultural differences in nonverbal communication are significant and can cause misunderstanding", "Eye contact is the most important form of nonverbal communication"],
                answer: 2
            },
            {
                question: "According to the passage, what does nodding mean in parts of Greece?",
                options: ["The same as in Western cultures", "It can mean 'no'", "It is considered offensive", "It has no meaning"],
                answer: 1
            },
            {
                question: "How is prolonged eye contact viewed in many East Asian cultures?",
                options: ["As a sign of honesty", "As a mark of confidence", "As aggressive or disrespectful", "As a greeting"],
                answer: 2
            },
            {
                question: "What can be inferred about high-contact cultures?",
                options: ["They avoid physical touch in conversation", "They maintain larger personal space", "They engage in more physical contact during conversation", "They prefer formal greetings over handshakes"],
                answer: 2
            },
            {
                question: "The phrase 'low-contact cultures' in paragraph 5 refers to cultures where",
                options: ["People do not greet each other", "Physical touch is limited in daily interaction", "Eye contact is avoided entirely", "People stand very close when talking"],
                answer: 1
            },
            {
                question: "What does the passage suggest about cross-cultural training programmes?",
                options: ["They focus only on language skills", "They now include nonverbal communication as a key component", "They are unnecessary for business travellers", "They recommend memorising all local customs"],
                answer: 1
            },
            {
                question: "Which of the following best describes the author's tone in the final paragraph?",
                options: ["Critical and dismissive", "Encouraging and practical", "Sceptical and doubtful", "Humorous and light-hearted"],
                answer: 1
            },
            {
                question: "The word 'facilitate' in the last paragraph most nearly means",
                options: ["Prevent", "Delay", "Make easier", "Complicate"],
                answer: 2
            }
        ]
    },
    {
        id: "reading-6",
        title: "The Impact of Microplastics on Marine Ecosystems",
        difficulty: "medium",
        wordCount: 550,
        paragraphs: [
            "Microplastics—tiny plastic fragments measuring less than five millimetres in diameter—have become one of the most pervasive pollutants in the world's oceans. They originate from a variety of sources, including the breakdown of larger plastic debris, synthetic fibres shed from clothing during washing, and microbeads formerly used in cosmetics and personal care products. Their small size makes them difficult to remove from the environment and allows them to be transported across vast distances by ocean currents.",
            "The biological impact of microplastics begins at the base of the food chain. Zooplankton, the tiny organisms that form the foundation of marine food webs, have been observed ingesting microplastics. Laboratory studies have shown that this ingestion can reduce feeding rates, decrease reproductive success, and alter the behaviour of these organisms. Because zooplankton are consumed by larger animals, microplastics accumulate and magnify as they move up the food chain, a process known as trophic transfer.",
            "Larger marine animals are also affected. Sea turtles, for instance, often mistake plastic bags for jellyfish, but they also ingest microplastics through contaminated prey. Fish, seabirds, and marine mammals have all been found with microplastics in their digestive systems. Beyond physical blockage, microplastics can leach harmful additives, such as phthalates and bisphenol A, which are known endocrine disruptors. These chemicals can interfere with hormone systems and reproduction.",
            "A particularly concerning aspect of microplastics is their ability to act as vectors for other pollutants. Due to their chemical properties, microplastics attract and concentrate persistent organic pollutants from the surrounding water, becoming more toxic than the surrounding environment. When organisms ingest these contaminated particles, they are exposed to concentrated doses of harmful chemicals. This combination of plastic and chemical pollution presents a dual threat that scientists are only beginning to understand.",
            "Addressing the problem of microplastic pollution requires action at multiple levels. On an individual level, consumers can reduce their plastic footprint by choosing natural fibres, avoiding single-use plastics, and supporting bans on microbeads. On a broader scale, improved waste management infrastructure, particularly in developing countries, can prevent plastic from entering waterways. Innovations in biodegradable materials and filtration technology for washing machines also offer promising avenues for mitigation."
        ],
        questions: [
            {
                question: "What is the passage primarily concerned with?",
                options: ["The chemical composition of plastics", "The sources and ecological impacts of microplastic pollution", "Methods for cleaning plastic from the ocean", "The history of plastic manufacturing"],
                answer: 1
            },
            {
                question: "How do microplastics enter the ocean from clothing?",
                options: ["Through the breakdown of plastic bags", "As synthetic fibres released during washing", "Through industrial waste directly dumped into rivers", "From cosmetic products washed off the skin"],
                answer: 1
            },
            {
                question: "What is 'trophic transfer' as described in the passage?",
                options: ["The movement of nutrients through the water column", "The accumulation of microplastics at higher levels of the food chain", "The process by which zooplankton filter-feed", "The breakdown of plastic into smaller fragments"],
                answer: 1
            },
            {
                question: "What additional danger do microplastics pose besides physical ingestion?",
                options: ["They make seawater taste unpleasant", "They absorb and concentrate toxic pollutants from seawater", "They prevent sunlight from reaching marine plants", "They increase the temperature of the ocean"],
                answer: 1
            },
            {
                question: "The word 'vectors' in paragraph 4 is closest in meaning to",
                options: ["Carriers", "Barriers", "Creators", "Destinations"],
                answer: 0
            },
            {
                question: "Which solution to microplastic pollution is mentioned in the passage?",
                options: ["Burning plastic waste at higher temperatures", "Using more plastic products so they break down evenly", "Developing better filtration technology for washing machines", "Dumping plastic waste in designated offshore areas"],
                answer: 2
            },
            {
                question: "What can be inferred from the passage about bans on microbeads?",
                options: ["They have completely solved the microplastic problem", "They target one specific source of microplastics", "They are opposed by environmental groups", "They are ineffective in reducing pollution"],
                answer: 1
            }
        ]
    },
    {
        id: "reading-7",
        title: "The Evolution of Artificial Intelligence",
        difficulty: "medium",
        wordCount: 610,
        paragraphs: [
            "Artificial intelligence has evolved from a theoretical concept in computer science to a transformative force reshaping industries and daily life. The term 'artificial intelligence' was first coined in 1956 at the Dartmouth Conference, where a group of researchers gathered to explore the possibility of creating machines capable of reasoning like humans. What followed were periods of dramatic progress interspersed with 'AI winters', when funding and interest waned due to unfulfilled promises.",
            "Early AI research focused on symbolic reasoning and rule-based systems. These 'expert systems' encoded human knowledge into sets of if-then rules and achieved impressive results in narrow domains such as medical diagnosis and chess playing. IBM's Deep Blue, which defeated world champion Garry Kasparov in 1997, exemplified this approach. However, these systems were brittle; they could not handle situations beyond their programmed rules and required enormous manual effort to update.",
            "The turning point came with the rise of machine learning, particularly deep learning. Instead of being explicitly programmed with rules, machine learning systems learn patterns from vast amounts of data. Deep learning, which uses multi-layered neural networks inspired by the structure of the human brain, has driven breakthroughs in image recognition, natural language processing, and speech synthesis. The landmark moment came in 2012 when a deep learning model achieved a dramatic improvement in the ImageNet visual recognition competition.",
            "Recent years have seen the emergence of large language models, which are trained on enormous text corpora and can generate human-like text, translate languages, write code, and engage in conversation. These models, based on transformer architecture introduced in 2017, represent a fundamentally different approach. Rather than being designed for a single task, they function as foundation models that can be adapted to a wide range of applications with minimal fine-tuning.",
            "The rapid advancement of AI raises important societal questions. Concerns about job displacement are widespread; many routine cognitive and manual tasks may be automated. There are also significant issues surrounding bias, as AI systems trained on historical data can perpetuate and amplify existing societal inequalities. Privacy concerns are heightened by AI's ability to analyse personal data at unprecedented scale. Moreover, the development of increasingly capable systems has prompted debates about AI safety and the need for robust governance frameworks. Looking ahead, researchers are working toward artificial general intelligence (AGI)—systems that match or exceed human cognitive ability across virtually all domains. While AGI remains theoretical, the pace of progress has led many experts to call for proactive regulation and ethical guidelines. The challenge for society will be to harness the benefits of AI while managing its risks, ensuring that this powerful technology serves human welfare rather than undermining it."
        ],
        questions: [
            {
                question: "What is the main purpose of the passage?",
                options: ["To argue that AI is too dangerous to develop", "To trace the development of AI and discuss its implications for society", "To explain how neural networks work in detail", "To compare AI with human intelligence"],
                answer: 1
            },
            {
                question: "What were 'AI winters' as mentioned in paragraph 1?",
                options: ["Seasonal fluctuations in computing power", "Periods of reduced funding and interest in AI research", "The cold temperatures required for supercomputers", "Competitions between AI research groups"],
                answer: 1
            },
            {
                question: "What limitation did early expert systems have?",
                options: ["They required too much data to function", "They could only perform well in very specific, rule-bound domains", "They were slower than human experts", "They could only play chess"],
                answer: 1
            },
            {
                question: "What was significant about the 2012 ImageNet competition?",
                options: ["It was the first AI competition ever held", "A deep learning model achieved a major performance breakthrough", "An expert system defeated a human champion", "The term 'AI' was first used"],
                answer: 1
            },
            {
                question: "The word 'brittle' in paragraph 2 most nearly means",
                options: ["Flexible and adaptable", "Fragile and easily broken", "Expensive to maintain", "Simple to understand"],
                answer: 1
            },
            {
                question: "According to the passage, how are large language models different from earlier AI systems?",
                options: ["They are designed for a single specific task", "They require no training data", "They serve as adaptable foundation models for many applications", "They are based on symbolic reasoning"],
                answer: 2
            },
            {
                question: "What concern about AI is mentioned in the passage?",
                options: ["AI systems are still too expensive to deploy", "AI may perpetuate and amplify societal biases", "AI cannot understand human language", "AI development has been banned in most countries"],
                answer: 1
            },
            {
                question: "What does the passage suggest about artificial general intelligence?",
                options: ["It has already been achieved", "It remains theoretical but researchers are working toward it", "It is impossible to create", "It would pose no risks to society"],
                answer: 1
            }
        ]
    },

    // ============================================================
    // HARD (3篇) — 700-900 words
    // ============================================================
    {
        id: "reading-8",
        title: "Cognitive Biases and Decision Making",
        difficulty: "hard",
        wordCount: 780,
        paragraphs: [
            "Human rationality has long been a central assumption in economics and classical decision theory. The rational actor model posits that individuals make decisions by carefully weighing all available information, calculating probabilities accurately, and choosing the option that maximises their utility. However, decades of research in cognitive psychology and behavioural economics have revealed a more complex and less flattering picture of human judgment. Rather than being optimal decision-makers, humans are subject to systematic patterns of deviation from rationality, known as cognitive biases.",
            "The pioneering work of psychologists Daniel Kahneman and Amos Tversky in the 1970s laid the foundation for our understanding of these biases. Through a series of elegant experiments, they demonstrated that people rely on mental shortcuts, or heuristics, which generally serve us well but can lead to predictable errors. Kahneman later proposed a dual-process model of cognition, distinguishing between System 1, which is fast, intuitive, and automatic, and System 2, which is slow, deliberate, and analytical. Most everyday decisions are made by System 1, which is efficient but susceptible to bias. One of the most well-documented biases is confirmation bias: the tendency to search for, interpret, and recall information in a way that confirms one's pre-existing beliefs. In a classic study, participants presented with mixed evidence about capital punishment became more entrenched in their original positions, interpreting the same data as supporting opposing conclusions. This bias is particularly pernicious because it operates outside conscious awareness; people genuinely believe they are evaluating evidence objectively while systematically favouring information that aligns with their views.",
            "Availability bias describes the tendency to overestimate the likelihood of events that are easily recalled. Because vivid, dramatic events—such as plane crashes, terrorist attacks, or shark attacks—receive extensive media coverage, people consistently overestimate their frequency relative to more common but less sensational causes of death, such as heart disease or diabetes. This bias has significant implications for public policy, as it can distort perceptions of risk and lead to misallocation of resources toward rare but memorable threats rather than more pressing but mundane ones.",
            "Anchoring bias occurs when an initial piece of information, or 'anchor', disproportionately influences subsequent judgments. For example, real estate agents asked to estimate the value of a house produce significantly different appraisals depending on the listing price they are first shown, even when they deny being influenced by it. In negotiation contexts, the first offer often serves as a powerful anchor, pulling the final settlement toward the initial figure. This bias persists even when the anchor is clearly arbitrary, such as the last digits of a person's social security number.",
            "The sunk cost fallacy presents another challenge to rational decision-making. This bias causes people to continue investing in a failing course of action because they have already invested resources—time, money, or effort—that cannot be recovered. A rational analysis would ignore sunk costs and consider only future costs and benefits, yet people consistently throw good money after bad. This phenomenon explains everything from individuals staying in unsatisfying relationships to governments continuing to fund ineffective projects. Awareness of cognitive biases does not automatically protect against them. Research suggests that even experts who teach about biases fall prey to them in their own decision-making. However, some strategies can help mitigate their effects. These include encouraging deliberation and diverse perspectives in group decision-making, using structured decision-making frameworks such as pre-mortems and red-teaming, and designing environments that make unbiased choices the default option. Understanding the limitations of human cognition is not cause for despair but rather an invitation to build systems and habits that compensate for our predictable imperfections."
        ],
        questions: [
            {
                question: "What is the main thesis of the passage?",
                options: ["Humans are fundamentally irrational and cannot make good decisions", "Cognitive biases are rare and affect only some individuals", "While humans are subject to systematic biases, awareness and structured approaches can help mitigate them", "The rational actor model accurately describes human decision-making"],
                answer: 2
            },
            {
                question: "According to the passage, what distinguishes System 1 from System 2 thinking?",
                options: ["System 1 is slower but more accurate than System 2", "System 1 is fast and intuitive while System 2 is slow and analytical", "System 1 is used only by experts while System 2 is used by novices", "System 1 and System 2 are identical in function"],
                answer: 1
            },
            {
                question: "What does the classic study on capital punishment demonstrate about confirmation bias?",
                options: ["People changed their minds after seeing mixed evidence", "Participants with the same evidence reached different conclusions based on pre-existing beliefs", "The evidence clearly supported one position", "Confirmation bias only affects people with strong opinions"],
                answer: 1
            },
            {
                question: "Why might the availability bias lead to poor public policy decisions?",
                options: ["It causes policymakers to ignore all statistical data", "It makes rare but memorable threats seem more important than common but less dramatic ones", "It prevents media coverage of important issues", "It only affects individual decisions, not policy"],
                answer: 1
            },
            {
                question: "The word 'pernicious' in paragraph 3 is closest in meaning to",
                options: ["Beneficial", "Harmful in a subtle or gradual way", "Temporary", "Easily noticed"],
                answer: 1
            },
            {
                question: "What does the example of real estate agents illustrate about anchoring bias?",
                options: ["Agents are immune to anchoring effects", "Anchoring influences judgment even when professionals deny being affected", "Anchoring only occurs with arbitrary numbers", "Higher anchors always lead to higher estimates"],
                answer: 1
            },
            {
                question: "How does the sunk cost fallacy violate rational decision-making?",
                options: ["It ignores future benefits in favour of past costs", "It considers irrecoverable past investments when they should be ignored", "It refuses to invest any resources at all", "It prioritises short-term gains over long-term benefits"],
                answer: 1
            },
            {
                question: "What can be inferred from the passage about teaching cognitive biases?",
                options: ["Teaching about biases fully immunises people against them", "Even experts who teach about biases are still susceptible", "Only experts can be trained to avoid biases", "Cognitive biases cannot be studied experimentally"],
                answer: 1
            }
        ]
    },
    {
        id: "reading-9",
        title: "The Economics of the Gig Economy",
        difficulty: "hard",
        wordCount: 810,
        paragraphs: [
            "The gig economy, characterised by short-term, flexible work arrangements mediated by digital platforms, has experienced explosive growth over the past decade. Companies such as Uber, Airbnb, and TaskRabbit have become household names, and millions of workers worldwide now derive some or all of their income from gig work. Proponents celebrate the flexibility and autonomy this model offers, while critics point to precarious working conditions, lack of benefits, and the erosion of traditional employment protections.",
            "From a macroeconomic perspective, the gig economy represents a significant shift in the structure of labour markets. Traditional employment is built on the standard employment relationship: a long-term, full-time arrangement between an employer and an employee, with associated benefits such as health insurance, paid leave, and retirement contributions. The gig economy fundamentally disrupts this model by reclassifying workers as independent contractors rather than employees. This reclassification has profound implications for tax systems, social safety nets, and labour regulations that were designed around the standard employment relationship.",
            "The business model of gig platforms relies heavily on network effects. A platform becomes more valuable as more users join, creating a self-reinforcing cycle. For ride-sharing services, having more drivers reduces wait times for passengers, which attracts more passengers, which in turn attracts more drivers. This dynamic has enabled rapid scaling but also creates winner-take-most markets, where a single platform can dominate. Critics argue that this market concentration gives platforms excessive power over workers, who have little bargaining power and few alternative platforms to turn to.",
            "The experience of gig workers is characterised by a fundamental paradox. On one hand, workers report valuing the flexibility to set their own schedules, choose when and how much to work, and avoid the constraints of a traditional office environment. Many are students, parents, or retirees who appreciate the ability to earn income on their own terms. On the other hand, research consistently reveals that gig workers earn below minimum wage once expenses—including vehicle maintenance, fuel, insurance, and the employer portion of payroll taxes—are factored in. Moreover, they lack access to employer-provided benefits such as health insurance, paid sick leave, and pension contributions.",
            "The classification of gig workers has become a contentious legal and political issue. In many jurisdictions, whether a worker is classified as an employee or an independent contractor determines their entitlement to minimum wage, overtime pay, workers' compensation, and unemployment insurance. Platform companies have vigorously defended the contractor model, arguing that it is essential to the flexibility that workers value. Labour unions and worker advocacy groups have pushed for reclassification, contending that gig workers are economically dependent on platforms and should therefore receive the protections afforded to employees. Several landmark legal cases and regulatory reforms, including California's Proposition 22, have attempted to address this question, with mixed results. Looking to the future, the gig economy is likely to continue evolving rather than disappearing. Technological advances such as automation and artificial intelligence may further disrupt traditional employment by enabling even finer-grained allocation of tasks. Some economists have proposed portable benefits systems that would decouple health insurance and retirement savings from individual employers, allowing workers to maintain coverage regardless of their employment status. Others have advocated for a universal basic income as a response to the increasing precarity of work. What seems clear is that the tension between flexibility and security that characterises the gig economy reflects deeper questions about the changing nature of work in the twenty-first century that society has only begun to grapple with."
        ],
        questions: [
            {
                question: "What is the central issue examined in the passage?",
                options: ["How gig economy companies make profits", "The tension between flexibility and security in the gig economy and its broader implications", "The history of labour unions in the technology sector", "How to start a successful gig economy business"],
                answer: 1
            },
            {
                question: "What does the passage identify as a key disruption caused by the gig economy?",
                options: ["The replacement of all traditional jobs with gig work", "The reclassification of workers from employees to independent contractors", "The elimination of digital platforms", "The reduction of network effects in labour markets"],
                answer: 1
            },
            {
                question: "According to the passage, how do network effects operate in gig platforms?",
                options: ["They make platforms less valuable as more users join", "They create a cycle where more users attract even more users", "They only benefit passengers, not drivers", "They are unique to ride-sharing services"],
                answer: 1
            },
            {
                question: "What paradox do gig workers experience according to the passage?",
                options: ["They value flexibility but often earn below minimum wage after expenses", "They earn high wages but have no free time", "They prefer traditional employment but cannot find it", "They are classified as employees but treated as contractors"],
                answer: 0
            },
            {
                question: "What is Proposition 22, as mentioned in the passage?",
                options: ["A federal law banning gig economy platforms", "A California regulatory measure addressing gig worker classification", "A proposal to eliminate all independent contracting", "A universal basic income programme"],
                answer: 1
            },
            {
                question: "The phrase 'portable benefits' in the last paragraph most likely refers to",
                options: ["Benefits that can be taken from job to job regardless of employment status", "Benefits provided only by the government", "Benefits that expire when changing jobs", "Benefits exclusive to full-time employees"],
                answer: 0
            },
            {
                question: "What can be inferred about the author's view of the gig economy's future?",
                options: ["It will be completely replaced by traditional employment", "It will continue to evolve and raise fundamental questions about the nature of work", "It will be eliminated by regulation", "It will become less significant as automation increases"],
                answer: 1
            },
            {
                question: "The word 'precarity' in the last paragraph is closest in meaning to",
                options: ["Stability", "Uncertainty and insecurity", "Prosperity", "Permanence"],
                answer: 1
            }
        ]
    },
    {
        id: "reading-10",
        title: "Social Mobility in Modern Societies",
        difficulty: "hard",
        wordCount: 760,
        paragraphs: [
            "Social mobility—the ability of individuals to move up or down the socioeconomic ladder relative to their parents—is a defining feature of how societies are structured. The ideal of meritocracy, in which talent and effort determine success rather than birth and connections, is central to the self-image of many modern democracies. Yet empirical research on social mobility reveals a more complicated reality. High levels of income inequality often correlate with lower rates of intergenerational mobility, a phenomenon that economists have termed the 'Great Gatsby Curve'.",
            "The measurement of social mobility typically involves examining the correlation between parents' income or socioeconomic status and that of their children in adulthood. A high correlation indicates low mobility, meaning that where you start in life strongly predicts where you end up. In countries such as Denmark, Norway, and Canada, the intergenerational earnings elasticity is relatively low, indicating that children's economic outcomes are less dependent on their parents' position. In contrast, countries like the United States, the United Kingdom, and Italy show higher elasticities, suggesting a stronger inheritance of economic status.",
            "Several factors contribute to differences in social mobility across countries. Educational systems play a crucial role: countries with universal, high-quality early childhood education tend to have higher mobility, as these programmes help level the playing field before gaps widen. The structure of labour markets matters as well. Nations with strong vocational education and training systems, such as Germany and Switzerland, provide alternative pathways to stable, well-paying careers for those who do not pursue university education. Progressive taxation and robust social safety nets also appear to support mobility by reducing the advantages that wealthy families can pass on to their children.",
            "The neighbourhood in which a child grows up exerts a powerful influence on their life trajectory. Research by economist Raj Chetty and his colleagues has demonstrated that children from low-income families who move to higher-opportunity neighbourhoods at a young age show significantly better outcomes in adulthood, including higher earnings and college attendance rates. This research suggests that factors such as school quality, crime rates, and the availability of positive role models in a community can fundamentally shape economic prospects. The effects are particularly pronounced for children who move before their teenage years.",
            "Social mobility is not solely an economic phenomenon; it has profound social and psychological dimensions. Individuals who experience upward mobility often face challenges of cultural adaptation, navigating unfamiliar social norms and institutions. The concept of 'code-switching'—adjusting one's language, appearance, and behaviour to fit into different social contexts—is a common experience for those who move between socioeconomic worlds. Furthermore, the perception that society is fair and offers equal opportunity has significant implications for social cohesion, political stability, and trust in institutions. Policies aimed at improving social mobility require a multifaceted approach. Investment in early childhood development, education reform, affordable housing policies that promote mixed-income neighbourhoods, and labour market regulations that reduce wage inequality have all been shown to contribute to greater mobility. However, implementing such policies is politically challenging, as they often require trade-offs with other priorities and may face opposition from those who benefit from existing structures. The persistence of low mobility in many wealthy nations suggests that meaningful change will require sustained political will and a willingness to address deep-seated structural inequalities."
        ],
        questions: [
            {
                question: "What is the primary focus of the passage?",
                options: ["A comparison of different economic systems", "The factors that influence social mobility and the policies that might improve it", "A historical analysis of class structures in Europe", "The psychological effects of poverty"],
                answer: 1
            },
            {
                question: "What does the 'Great Gatsby Curve' represent?",
                options: ["The relationship between income inequality and social mobility", "The correlation between education and earnings", "The decline of manufacturing employment", "The rise of the middle class"],
                answer: 0
            },
            {
                question: "According to the passage, which countries show relatively high intergenerational earnings elasticity?",
                options: ["Denmark and Norway", "The United States and the United Kingdom", "Canada and Germany", "Switzerland and Sweden"],
                answer: 1
            },
            {
                question: "How do vocational education systems contribute to social mobility?",
                options: ["They reduce the need for early childhood education", "They provide non-university pathways to stable careers", "They eliminate income inequality", "They replace traditional universities entirely"],
                answer: 1
            },
            {
                question: "What did Raj Chetty's research find about neighbourhood effects?",
                options: ["Neighbourhoods have no impact on children's future outcomes", "Moving to higher-opportunity areas improves outcomes, especially for young children", "Only wealthy children benefit from good neighbourhoods", "Crime rates are the only factor that matters"],
                answer: 1
            },
            {
                question: "The term 'code-switching' in paragraph 5 is used to describe",
                options: ["Learning a foreign language", "Adjusting one's behaviour to fit different social contexts", "Changing one's career path", "Moving between different neighbourhoods"],
                answer: 1
            },
            {
                question: "What challenges to implementing mobility-enhancing policies are mentioned?",
                options: ["Lack of research on effective interventions", "Political opposition from groups benefiting from the status quo", "International trade agreements", "Technological barriers in data collection"],
                answer: 1
            },
            {
                question: "What can be inferred about the author's view of meritocracy?",
                options: ["It is a fully achieved reality in modern democracies", "The ideal is appealing but actual social mobility is limited by structural factors", "It is an outdated concept with no relevance today", "It only applies in Scandinavian countries"],
                answer: 1
            }
        ]
    }
];
