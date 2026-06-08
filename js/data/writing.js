// IELTS 写作题库数据

const WRITING_DATA = {
    task1: [
        {
            id: "task1-line-1",
            title: "Line graph: Population growth in three cities",
            question: "The line graph below shows the population growth of three major cities from 2000 to 2020. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
            hint: "注意描述整体趋势、最高点和最低点、进行对比",
            difficulty: "medium",
            category: "线图",
            framework: [
                "第一段: 改写题目，说明图表展示了什么",
                "第二段: 总体趋势概述（整体上升/下降/波动）",
                "第三段: 描述城市A和城市B的详细变化",
                "第四段: 描述城市C的变化并做对比"
            ],
            vocabulary: ["steady increase", "sharp decline", "fluctuate", "reach a peak", "bottom out", "dramatically", "gradually"],
            sample: "The line graph illustrates the population changes in three major cities between 2000 and 2020.\n\nOverall, all three cities experienced population growth over the period, although at different rates.\n\nTokyo's population rose steadily from 8 million to 12 million, while New York showed a more moderate increase from 7 million to 9 million.\n\nIn contrast, Shanghai saw a dramatic increase, particularly after 2010, surging from 10 million to over 18 million by 2020."
        },
        {
            id: "task1-bar-1",
            title: "Bar chart: Energy consumption by sector",
            question: "The bar chart shows the energy consumption by five different sectors in a country between 2010 and 2020. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
            hint: "注意比较不同部门之间的差异以及时间变化",
            difficulty: "medium",
            category: "柱状图",
            framework: [
                "第一段: 改写题目，说明图表内容",
                "第二段: 概述总体特征（最高/最低部门，变化趋势）",
                "第三段: 描述工业、交通和居民部门的能耗变化",
                "第四段: 描述农业和服务业并做对比总结"
            ],
            vocabulary: ["consumption", "sector", "account for", "substantial", "minor", "in contrast", "notably", "significant increase"],
            sample: "The bar chart compares energy consumption across five sectors in 2010 and 2020.\n\nOverall, the industrial sector consumed the most energy in both years, while agriculture consumed the least.\n\nIndustry accounted for 45% of total energy use in 2010, rising slightly to 48% in 2020. Transport remained relatively stable at around 25%.\n\nBy contrast, the agricultural sector consumed only 5% in both years, making it the smallest contributor."
        },
        {
            id: "task1-pie-1",
            title: "Pie charts: Global internet usage by device",
            question: "The pie charts show the percentage of global internet usage by different devices in 2010 and 2025. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
            hint: "注意整体比例变化和增减幅度的对比",
            difficulty: "easy",
            category: "饼图",
            framework: [
                "第一段: 改写题目，说明图表展示了什么",
                "第二段: 总体变化概述",
                "第三段: 详细描述份额增加的项目",
                "第四段: 详细描述份额减少的项目并做对比"
            ],
            vocabulary: ["percentage", "proportion", "dominant", "minority", "increase twofold", "decline significantly", "account for", "smartphone"],
            sample: "The two pie charts illustrate how global internet usage by device changed between 2010 and 2025.\n\nOverall, smartphones became the dominant device for internet access, while desktop usage declined considerably.\n\nSmartphones surged from just 15% in 2010 to 55% in 2025, becoming the most used device.\n\nMeanwhile, desktop computers dropped sharply from 60% to 20%, and tablet usage grew modestly from 5% to 15%."
        },
        {
            id: "task1-table-1",
            title: "Table: Export values by country",
            question: "The table shows the export values (in billions of dollars) of five countries in three different years: 2005, 2010, and 2015. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
            hint: "关注数据的对比和排名变化，不要逐行描述",
            difficulty: "hard",
            category: "表格",
            framework: [
                "第一段: 改写题目，说明表格数据内容",
                "第二段: 总体趋势概述（哪个国家最高/最低，变化趋势）",
                "第三段: 描述表现最好和增长最快的国家",
                "第四段: 描述表现最差或下降的国家并做对比"
            ],
            vocabulary: ["export value", "rank", "significant growth", "decline", "surpass", "margin", "consistently", "fluctuation"],
            sample: "The table presents export values in billions of dollars for five countries between 2005 and 2015.\n\nOverall, Country A maintained the highest export value throughout the period, while Country E remained the lowest.\n\nCountry A's exports grew steadily from 120 billion in 2005 to 180 billion in 2015. Country B showed the most dramatic growth, rising from 80 billion to 150 billion.\n\nIn contrast, Country D experienced a notable decline from 60 billion in 2010 to 45 billion in 2015, falling behind Country C."
        },
        {
            id: "task1-process-1",
            title: "Process diagram: Water cycle",
            question: "The diagram below illustrates the water cycle process. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
            hint: "关注流程的顺序、每个阶段的输入输出",
            difficulty: "hard",
            category: "流程图",
            framework: [
                "第一段: 改写题目，说明该过程展示的是什么",
                "第二段: 概述整个过程包含几个阶段",
                "第三段: 详细描述前几个步骤",
                "第四段: 描述剩余步骤并说明最终结果"
            ],
            vocabulary: ["evaporation", "condensation", "precipitation", "groundwater", "runoff", "vapor", "accumulation", "circulation"],
            sample: "The diagram illustrates the water cycle, a continuous natural process involving several key stages.\n\nOverall, the water cycle consists of four main stages: evaporation, condensation, precipitation, and collection.\n\nThe process begins when the sun heats water in oceans and lakes, causing evaporation. Water vapor rises and cools, leading to condensation and cloud formation.\n\nSubsequently, precipitation occurs in the form of rain or snow. The water then returns to the earth, where it collects in rivers, lakes, and oceans, completing the cycle."
        }
    ],
    task2: [
        {
            id: "task2-education-1",
            title: "Education topic",
            question: "Some people believe that university education should be free for everyone. To what extent do you agree or disagree?",
            hint: "考虑教育公平、国家经济、个人发展等多个角度",
            difficulty: "medium",
            category: "教育",
            band: 7,
            framework: [
                "第一段: 引入话题 + 明确立场（部分同意）",
                "第二段: 同意的理由（教育公平、人才发展）",
                "第三段: 不同意的理由（财政压力、资源分配）",
                "第四段: 平衡观点（建议部分免费或助学贷款）",
                "第五段: 总结重申立场"
            ],
            vocabulary: ["tertiary education", "tuition fees", "equal opportunities", "government funding", "student loans", "social mobility", "economic burden"],
            sample: "The question of whether university education should be free has been a topic of intense debate. In my view, while free education has significant merits, a completely free system may not be entirely feasible.\n\nOn the one hand, providing free university education would promote equal opportunities for students from all socioeconomic backgrounds, thereby enhancing social mobility. Countries with free education often report higher enrollment rates among disadvantaged groups.\n\nOn the other hand, completely free education would place a significant burden on taxpayers and government budgets. It may also lead to oversubscription and reduced quality of education if funding is insufficient.\n\nIn my view, a balanced approach would be most effective — offering free education for low-income students while maintaining reasonable fees for others, supported by accessible student loan programs."
        },
        {
            id: "task2-technology-1",
            title: "Technology topic: Discuss both views",
            question: "Some people think that the increasing use of technology in the workplace has made employees less productive. Others believe it has greatly improved efficiency. Discuss both views and give your own opinion.",
            hint: "从效率和干扰两个对立角度分析",
            difficulty: "medium",
            category: "科技",
            band: 7,
            framework: [
                "第一段: 引入话题，说明两种对立观点",
                "第二段: 支持技术提高效率的观点（自动化、沟通）",
                "第三段: 支持技术降低效率的观点（分心、过度依赖）",
                "第四段: 给出自己的立场和理由",
                "第五段: 总结"
            ],
            vocabulary: ["automation", "streamline", "distraction", "multitasking", "efficiency", "digital tools", "work-life balance", "over-reliance"],
            sample: "The impact of technology on workplace productivity is a highly debated issue. While some argue that it has diminished productivity, others claim it has revolutionized efficiency.\n\nProponents of technology argue that automation and digital tools have streamlined countless tasks, reducing manual labor and enabling instant global communication. Software solutions allow employees to complete complex tasks in minutes.\n\nConversely, critics point out that constant notifications and the ease of accessing social media can lead to significant distractions. Moreover, employees may spend excessive time learning new systems.\n\nIn my opinion, while technology does introduce distractions, its benefits far outweigh the drawbacks, provided that companies implement clear usage policies."
        },
        {
            id: "task2-environment-1",
            title: "Environment topic: Advantages and disadvantages",
            question: "Many countries are investing heavily in renewable energy sources such as solar and wind power. What are the advantages and disadvantages of this trend?",
            hint: "从环境、经济、能源安全等方面分析利弊",
            difficulty: "medium",
            category: "环境",
            band: 7,
            framework: [
                "第一段: 引入话题，说明可再生能源投资的趋势",
                "第二段: 主要优点（环保、可持续、能源独立）",
                "第三段: 主要缺点（成本、间歇性、土地使用）",
                "第四段: 总结并给出自己的看法"
            ],
            vocabulary: ["renewable energy", "sustainable", "carbon emissions", "intermittent", "infrastructure", "energy security", "long-term investment", "environmental impact"],
            sample: "In recent years, many nations have allocated substantial funds toward renewable energy development. This essay will examine both the benefits and drawbacks of this shift.\n\nThe primary advantage of renewable energy is its positive environmental impact. Solar and wind power produce little to no greenhouse gas emissions, helping combat climate change. Additionally, these sources reduce dependence on fossil fuels, enhancing national energy security.\n\nHowever, renewable energy also presents notable disadvantages. The initial cost of building solar farms and wind turbines remains high. Furthermore, solar and wind power are intermittent — they cannot generate electricity when the sun is not shining or the wind is not blowing.\n\nDespite these challenges, I believe the long-term environmental and economic benefits of renewable energy make it a worthwhile investment for any country."
        },
        {
            id: "task2-society-1",
            title: "Social topic: Problems and solutions",
            question: "In many cities around the world, traffic congestion has become a serious problem. What are the causes of this issue, and what measures can governments take to solve it?",
            hint: "从城市规划、公共交通、政策等多维度分析",
            difficulty: "medium",
            category: "社会",
            band: 7,
            framework: [
                "第一段: 引入话题，说明交通拥堵的严重性",
                "第二段: 分析主要原因（车辆增加、城市规划不足）",
                "第三段: 解决方案一（完善公共交通系统）",
                "第四段: 解决方案二（政策调控和技术手段）",
                "第五段: 总结"
            ],
            vocabulary: ["congestion", "infrastructure", "public transport", "urban planning", "car ownership", "commuting", "emissions", "traffic management"],
            sample: "Traffic congestion has become one of the most pressing issues in urban areas worldwide, causing lost productivity and increased pollution.\n\nThe primary causes of this problem include the rapid increase in private car ownership, inadequate public transport systems, and poor urban planning that encourages car-dependent lifestyles.\n\nOne effective solution is to invest in comprehensive public transport networks, including metro systems, buses, and cycling infrastructure. This would provide viable alternatives to car travel.\n\nAdditionally, governments can implement policies such as congestion charging, carpooling incentives, and restrictions on private vehicle use during peak hours. Smart traffic management systems can also optimize traffic flow.\n\nIn conclusion, a combination of infrastructure investment and policy measures is essential to tackle urban traffic congestion effectively."
        },
        {
            id: "task2-health-1",
            title: "Health topic: Causes and effects",
            question: "The number of people suffering from lifestyle-related diseases such as diabetes and heart disease is increasing. What are the causes of this trend, and what are its effects on society?",
            hint: "从饮食习惯、久坐生活、工作压力等角度分析原因和影响",
            difficulty: "medium",
            category: "健康",
            band: 7,
            framework: [
                "第一段: 引入话题，指出现代生活方式疾病的增加",
                "第二段: 分析主要原因（不良饮食、缺乏运动）",
                "第三段: 对社会的影响（医疗负担、生产力下降）",
                "第四段: 对个人的影响（生活质量、寿命）",
                "第五段: 总结并提出建议方向"
            ],
            vocabulary: ["sedentary lifestyle", "processed food", "obesity", "chronic disease", "healthcare burden", "life expectancy", "prevention", "public health"],
            sample: "The rising prevalence of lifestyle-related diseases has become a major concern for modern societies. This essay will explore the causes of this trend and its broader societal effects.\n\nThe main causes include the widespread consumption of processed foods high in sugar and fat, increasingly sedentary lifestyles due to desk jobs, and high levels of chronic stress in modern work environments.\n\nOne significant effect on society is the escalating burden on healthcare systems. Treating chronic diseases requires substantial medical resources and long-term care, straining public health budgets.\n\nOn an individual level, these diseases reduce quality of life and lower life expectancy. They also impact workplace productivity, as affected individuals may require frequent medical leave.\n\nAddressing this issue requires a public health approach focused on prevention through education, healthier food policies, and promotion of physical activity."
        }
    ]
};
