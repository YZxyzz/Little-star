export interface ConversationMessage {
    id: string;
    speaker: 'child' | 'ai';
    speakerName: string;
    content: string;
    time: string;
    timeAgo: string;
    audioDuration: string;
}

export interface LiveMoment {
    id: string;
    type: 'quote' | 'curiosity' | 'emotion' | 'milestone' | 'funny';
    time: string;
    timeAgo: string;
    emoji: string;
    title: string;
    content: string;
    tag?: string;
    isNew?: boolean;
    relatedMessageIds?: string[];
}

export interface ReportScenario {
    id: string;
    name: string;
    childName: string;
    mood: 'happy' | 'calm' | 'sad' | 'mixed' | 'curious' | 'anxious';
    moodText: string;
    tags: string[];

    // Part 0: Highlights (Narrative hook)
    highlights: {
        text: string;
        quote: string; // Pull-out quote
    };

    // Part 1: Overview (Stats & Comparison)
    overview: {
        stats: {
            dialogueCount: number;
            dialogueTrend: 'up' | 'down' | 'same';
            dialogueDiff: number; // e.g. 2
            sharedCount: number;
            sharedTrend: 'up' | 'down' | 'same'; // "本周平均" comparison
            sharedDiff: string; // e.g. "本周平均 6"
            questionCount: number;
            questionTrend: 'up' | 'down' | 'same';
        };
        moodTrend: {
            morning: string;
            afternoon: string;
            evening: string;
            weeklyStability: number; // 1-5 stars
            weeklyTrend: 'better' | 'worse' | 'same';
        };
    };

    // Part 2: Timeline (Dialogue)
    timeline: {
        time: string;
        mood: string;
        content: string[]; // "小明说..."
        analysis: string[]; // "开心的事/难过的事"
        alert?: boolean;
    }[];

    // Part 3: Child's World Tabs
    childWorld: {
        mood: {
            summary: string;
            details: { time: string; mood: string; reason: string }[];
        };
        people: {
            name: string;
            count: number;
            status: 'positive' | 'negative' | 'neutral';
            context: string;
        }[];
        interests: {
            topic: string;
            count: number;
            details: string[]; // Questions asked etc.
            weeklyTrend: string; // "提及 23 次"
        }[];
        troubles?: { // Optional
            title: string;
            quotes: string[];
            analysis: string[];
        };
    };

    // Part 4: Alerts (Worth Watching) - Optional
    alerts?: {
        title: string;
        time: string;
        quotes: string[]; // "小明说..."
        moodAnalysis: string[];
        reason: string;
        goodNews: string[];
    }[];

    // Part 5: Action Plan (Tonight's Action)
    actionPlan: {
        title: string;
        steps: {
            step: string; // "第一步：倾听"
            goal: string;
            donts: string[];
            dos: string[];
            exampleDialogue: { speaker: 'parent' | 'child'; text: string }[];
        }[];
    };

    // Part 6: Conversation Tips
    conversationTips: {
        topic: string;
        opener: string;
        resources: { type: 'book' | 'video' | 'activity'; title: string; desc: string }[];
    }[];

    // Part 7: Feedback (Mock handled in UI) - just placeholder data
    feedback?: {
        questions: string[];
    }

    // Live Conversation (Raw dialogue for Home)
    liveConversation: ConversationMessage[];

    // Live Moments (Real-time feed for Home)
    liveMoments: LiveMoment[];

    // Topic Highlights (今日话题总结 for Home - aggregated, not dialogue)
    topicHighlights: TopicHighlight[];
}

// 📌 话题总结（首页今日动态用）
export interface TopicHighlight {
    id: string;
    emoji: string;
    topic: string;
    summary: string;
    keyInsight?: string;
    mentionCount: number;
    type: 'curiosity' | 'social' | 'emotion' | 'growth' | 'fun';
    isNew?: boolean;
}

// ============================================================
// 记忆图谱系统 (Memory Map System) - 记录 Tab 数据模型
// ============================================================

// 👥 人物图谱
export interface Person {
    id: string;
    name: string;
    relationship: string;
    status: 'close' | 'tense' | 'new' | 'neutral';
    mentionCount: number;
    trend: 'up' | 'down' | 'stable';
    keyQuotes: string[];
    recentInteraction: string;
    hasNewUpdate: boolean;
}

// 💛 情绪档案
export interface EmotionProfile {
    summary: string;
    weeklyTrend: { day: string; mood: string; level: number }[];
    patterns: {
        happyTriggers: string[];
        anxietyTriggers: string[];
        relaxedMoments: string[];
    };
    stability: {
        score: number;
        trend: 'better' | 'worse' | 'same';
        comparedTo: string;
    };
}

// 🔭 兴趣图谱
export interface Interest {
    id: string;
    topic: string;
    emoji: string;
    heatLevel: number;
    depthLevel: number;
    mentionCount: number;
    evolution: string[];
    questionExamples: string[];
    hasNewUpdate: boolean;
}

// 🌱 成长足迹
export interface GrowthMilestone {
    id: string;
    date: string;
    title: string;
    description: string;
    abilityTag: string;
    psychologyNote: string;
    hasNewUpdate: boolean;
}

// ⚡ 正在经历
export interface Challenge {
    id: string;
    title: string;
    firstAppeared: string;
    currentStatus: 'active' | 'improving' | 'resolved';
    trend: 'worsening' | 'improving' | 'stable';
    description: string;
    parentTips: string[];
}

// 🌍 小小世界观
export interface WorldviewItem {
    id: string;
    question: string;
    childTheory: string;
    context: string;
    understandingLevel: 'emerging' | 'developing' | 'established';
}

// ✨ 新动态推送
export interface NewUpdate {
    id: string;
    level: 'urgent' | 'daily' | 'weekly' | 'achievement';
    emoji: string;
    title: string;
    summary: string;
    dimension: 'people' | 'emotion' | 'interest' | 'growth' | 'challenge' | 'worldview';
    timestamp: string;
    isNew: boolean;
}

// 记忆图谱聚合
export interface MemoryMapData {
    childName: string;
    people: Person[];
    emotion: EmotionProfile;
    interests: Interest[];
    growthTrack: GrowthMilestone[];
    challenges: Challenge[];
    worldview: WorldviewItem[];
    newUpdates: NewUpdate[];
    badges: {
        people: number;
        emotion: number;
        interest: number;
        growth: number;
        challenge: number;
        worldview: number;
    };
}

// ============================================================
// 记忆图谱 Mock 数据
// ============================================================

export const MEMORY_MAP: MemoryMapData = {
    childName: '小明',

    // 👥 人物图谱
    people: [
        {
            id: 'p-xiaohong',
            name: '小红',
            relationship: '好朋友',
            status: 'close',
            mentionCount: 28,
            trend: 'up',
            keyQuotes: ['小红是我最好的朋友！', '我要把画送给小红看'],
            recentInteraction: '一起画画，有时比较谁画得好',
            hasNewUpdate: true,
        },
        {
            id: 'p-xiaoqiang',
            name: '小强',
            relationship: '同学',
            status: 'tense',
            mentionCount: 8,
            trend: 'stable',
            keyQuotes: ['小强又欺负我了', '小强挤开了我，抢走了秋千'],
            recentInteraction: '本周第3次提到冲突',
            hasNewUpdate: false,
        },
        {
            id: 'p-wanglaoshi',
            name: '王老师',
            relationship: '老师',
            status: 'close',
            mentionCount: 5,
            trend: 'stable',
            keyQuotes: ['王老师表扬我作文写得好'],
            recentInteraction: '正面互动，孩子信任老师',
            hasNewUpdate: false,
        },
        {
            id: 'p-lili',
            name: '莉莉',
            relationship: '新同学',
            status: 'new',
            mentionCount: 3,
            trend: 'up',
            keyQuotes: ['今天来了一个新同学叫莉莉', '莉莉说她从北京来的'],
            recentInteraction: '刚认识，主动打了招呼',
            hasNewUpdate: true,
        },
        {
            id: 'p-yeye',
            name: '爷爷',
            relationship: '家人',
            status: 'close',
            mentionCount: 4,
            trend: 'stable',
            keyQuotes: ['爷爷教我下棋了，好难啊'],
            recentInteraction: '周末一起下棋',
            hasNewUpdate: false,
        },
    ],

    // 💛 情绪档案
    emotion: {
        summary: '小明这周整体情绪不错，在学校的开心时刻明显增多。不过聊到和小强的互动时会变得安静，说话语速放慢。比上周好转的地方：愿意主动说出不开心的事。',
        weeklyTrend: [
            { day: '周一', mood: '😊', level: 4 },
            { day: '周二', mood: '😐', level: 3 },
            { day: '周三', mood: '😊', level: 4 },
            { day: '周四', mood: '😢', level: 2 },
            { day: '周五', mood: '😊', level: 5 },
            { day: '周六', mood: '😊', level: 4 },
            { day: '周日', mood: '😊', level: 4 },
        ],
        patterns: {
            happyTriggers: ['和小红一起玩', '聊恐龙', '搭积木', '被老师表扬'],
            anxietyTriggers: ['和小强互动', '被比较', '午睡时间'],
            relaxedMoments: ['睡前和小星伴聊天', '画画的时候', '和爷爷下棋'],
        },
        stability: {
            score: 4,
            trend: 'better',
            comparedTo: '上周',
        },
    },

    // 🔭 兴趣图谱
    interests: [
        {
            id: 'i-dino',
            topic: '恐龙',
            emoji: '🦕',
            heatLevel: 5,
            depthLevel: 4,
            mentionCount: 42,
            evolution: ['恐龙好酷', '恐龙的种类', '恐龙身体结构', '为什么会灭绝？'],
            questionExamples: [
                '霸王龙为什么手那么短？',
                '恐龙的牙齿比我的手还长吗？',
                '如果恐龙没有灭绝，我们能骑恐龙吗？',
            ],
            hasNewUpdate: false,
        },
        {
            id: 'i-space',
            topic: '宇宙/太空',
            emoji: '🚀',
            heatLevel: 4,
            depthLevel: 3,
            mentionCount: 23,
            evolution: ['宇航员好帅', '太空是什么样的', '黑洞会吸走地球吗？'],
            questionExamples: [
                '宇航员在太空怎么吃饭？',
                '黑洞会把地球吸进去吗？',
                '宇航员会不会想妈妈？',
            ],
            hasNewUpdate: true,
        },
        {
            id: 'i-drawing',
            topic: '画画',
            emoji: '🎨',
            heatLevel: 3,
            depthLevel: 3,
            mentionCount: 15,
            evolution: ['涂鸦', '画动物', '画太空场景', '开始关注构图和颜色'],
            questionExamples: [
                '怎么画恐龙的尾巴？',
                '蓝色和紫色混在一起是什么颜色？',
            ],
            hasNewUpdate: false,
        },
        {
            id: 'i-blocks',
            topic: '积木/建造',
            emoji: '🧱',
            heatLevel: 3,
            depthLevel: 2,
            mentionCount: 11,
            evolution: ['随意搭', '搭城堡', '开始设计"图纸"再搭'],
            questionExamples: ['怎么搭一个不会倒的桥？'],
            hasNewUpdate: false,
        },
    ],

    // 🌱 成长足迹
    growthTrack: [
        {
            id: 'g-1',
            date: '2026-02-08',
            title: '首次主动分享挫折经历',
            description: '小明主动告诉小星伴"今天我不开心"，详细描述了被抢秋千的经过。这是他第一次主动、完整地讲述一件难过的事。',
            abilityTag: '情感表达',
            psychologyNote: '主动表达负面情绪是情商发展的重要里程碑，说明孩子已建立对倾诉对象的信任感。',
            hasNewUpdate: true,
        },
        {
            id: 'g-2',
            date: '2026-02-06',
            title: '第一次用类比推理',
            description: '在讨论霸王龙为什么手短时，小明自己推测"也许它可以蹭树，或者让别的恐龙帮忙"。这是他第一次尝试用类比来回答"为什么"类问题。',
            abilityTag: '逻辑思维',
            psychologyNote: '类比推理是抽象思维的基础，通常在4-5岁开始萌芽。小明的表现符合甚至略超年龄发展。',
            hasNewUpdate: false,
        },
        {
            id: 'g-3',
            date: '2026-02-03',
            title: '开始理解规则的概念',
            description: '在被抢秋千事件中，小明反复提到"明明是我先来的"，说明他已经有了"先来后到"的公平规则概念。',
            abilityTag: '社交规则',
            psychologyNote: '对公平规则的认知是社会性发展的标志，表明孩子正在内化社会规范。',
            hasNewUpdate: false,
        },
        {
            id: 'g-4',
            date: '2026-01-28',
            title: '第一次完整讲述故事',
            description: '小明自编了一个"恐龙大冒险"的故事，有开头、经过和结尾，角色有名字和性格。',
            abilityTag: '叙事能力',
            psychologyNote: '完整叙事结构的出现是语言发展和想象力的综合体现，通常4-5岁逐步发展。',
            hasNewUpdate: false,
        },
    ],

    // ⚡ 正在经历
    challenges: [
        {
            id: 'c-1',
            title: '与小强的社交冲突',
            firstAppeared: '2026-01-20',
            currentStatus: 'active',
            trend: 'stable',
            description: '小明多次提到和小强之间的矛盾，包括被抢东西、被推搡。本周第3次提到冲突。',
            parentTips: [
                '关注是否升级为持续欺负行为',
                '教孩子用语言表达不满而非退缩',
                '与老师沟通了解在校情况',
            ],
        },
        {
            id: 'c-2',
            title: '比较心理萌芽',
            firstAppeared: '2026-02-05',
            currentStatus: 'active',
            trend: 'stable',
            description: '小明开始拿自己和同学比较——"小红画得比我好""小强跑得比我快"。',
            parentTips: [
                '关注过程而非结果，强调进步',
                '避免家长自己做横向比较',
                '帮助建立多元化的自我评价维度',
            ],
        },
    ],

    // 🌍 小小世界观
    worldview: [
        {
            id: 'w-1',
            question: '恐龙为什么灭绝了？',
            childTheory: '是不是因为它们太大了，吃不饱就死掉了？',
            context: '和小星伴聊恐龙时提出',
            understandingLevel: 'developing',
        },
        {
            id: 'w-2',
            question: '宇航员在太空会不会想妈妈？',
            childTheory: '我如果去太空肯定要带着妈妈一起去！',
            context: '聊宇宙话题时的共情表现',
            understandingLevel: 'emerging',
        },
        {
            id: 'w-3',
            question: '为什么大人不用午睡？',
            childTheory: '是不是长大了就不困了？那我也想快点长大！',
            context: '不想午睡时向小星伴抱怨',
            understandingLevel: 'emerging',
        },
        {
            id: 'w-4',
            question: '小红为什么说我画得丑？',
            childTheory: '她是不是不喜欢我了？',
            context: '社交挫折后试图理解他人行为',
            understandingLevel: 'developing',
        },
    ],

    // ✨ 新动态推送
    newUpdates: [
        {
            id: 'nu-1',
            level: 'daily',
            emoji: '👥',
            title: '小红升级为"好朋友"',
            summary: '提及 28 次，都是开心的事，关系持续亲密',
            dimension: 'people',
            timestamp: '今天 14:30',
            isNew: true,
        },
        {
            id: 'nu-2',
            level: 'achievement',
            emoji: '🌱',
            title: '成长时刻',
            summary: '首次主动分享挫折经历——"今天我不开心..."',
            dimension: 'growth',
            timestamp: '昨天 17:20',
            isNew: true,
        },
        {
            id: 'nu-3',
            level: 'weekly',
            emoji: '🔭',
            title: '新兴趣浮现',
            summary: '对宇宙/太空的提问本周增加了 3 倍',
            dimension: 'interest',
            timestamp: '本周趋势',
            isNew: true,
        },
        {
            id: 'nu-4',
            level: 'urgent',
            emoji: '⚡',
            title: '持续关注：与小强的冲突',
            summary: '本周第 3 次提到，建议与老师沟通',
            dimension: 'challenge',
            timestamp: '今天 17:20',
            isNew: true,
        },
        {
            id: 'nu-5',
            level: 'daily',
            emoji: '👥',
            title: '新面孔：莉莉',
            summary: '班上来了新同学，小明主动打了招呼',
            dimension: 'people',
            timestamp: '今天 11:00',
            isNew: true,
        },
        {
            id: 'nu-6',
            level: 'weekly',
            emoji: '💛',
            title: '情绪稳定性提升',
            summary: '本周情绪评分 4/5，比上周有进步',
            dimension: 'emotion',
            timestamp: '本周趋势',
            isNew: false,
        },
    ],

    // 红点计数
    badges: {
        people: 2,
        emotion: 0,
        interest: 1,
        growth: 1,
        challenge: 0,
        worldview: 0,
    },
};

// ============================================================
// 日报场景数据 (Report Scenarios)
// ============================================================

export const SCENARIOS: ReportScenario[] = [
    {
        id: 'dinos',
        name: '恐龙的十万个为什么',
        childName: '小明',
        mood: 'curious',
        moodText: '充满好奇',
        tags: ['恐龙', '好奇心', '科普'],

        highlights: {
            text: '今天小明对恐龙展现了极大的探索欲，问了15个关于身体结构的问题。虽然一开始因为不知道霸王龙怎么抓痒痒而困惑，但在引导下开始尝试自己寻找答案。',
            quote: '霸王龙为什么手那么短？它怎么抓痒痒？'
        },

        overview: {
            stats: {
                dialogueCount: 8,
                dialogueTrend: 'up',
                dialogueDiff: 3,
                sharedCount: 15,
                sharedTrend: 'up',
                sharedDiff: '本周平均 8',
                questionCount: 15,
                questionTrend: 'up'
            },
            moodTrend: {
                morning: '😊 开心',
                afternoon: '🤔 困惑',
                evening: '✨ 兴奋',
                weeklyStability: 5,
                weeklyTrend: 'better'
            }
        },

        timeline: [
            {
                time: '08:30',
                mood: '😊 开心',
                content: [
                    '小星伴，我昨天看的书上说霸王龙是最大的肉食恐龙！',
                    '它的牙齿是不是比我的手还长？'
                ],
                analysis: [
                    '主动分享书本知识',
                    '通过对比建立认知'
                ]
            },
            {
                time: '16:45',
                mood: '🤔 困惑',
                content: [
                    '可是霸王龙手那么短，它怎么抓痒痒呢？',
                    '如果蚊子叮它的脸怎么办？它会不会急死？'
                ],
                analysis: [
                    '观察细致，发现了身体比例的矛盾',
                    '产生了替恐龙着急的共情'
                ]
            }
        ],

        childWorld: {
            mood: {
                summary: '整体情绪高昂，充满求知欲。困惑时会有短暂的急切，但很快转化为探索的动力。',
                details: [
                    { time: '上午', mood: '兴奋', reason: '分享新知识' },
                    { time: '下午', mood: '困惑', reason: '遇到认知冲突（短手 vs 抓痒）' }
                ]
            },
            people: [],
            interests: [
                {
                    topic: '恐龙',
                    count: 15,
                    details: ['霸王龙', '三角龙', '化石'],
                    weeklyTrend: '提及 42 次 (↑)'
                }
            ]
        },

        actionPlan: {
            title: '引导孩子的科学思维',
            steps: [
                {
                    step: '第一步：肯定观察',
                    goal: '保护好奇心',
                    donts: ['直接给答案', '笑话他的问题幼稚'],
                    dos: ['赞赏他的细致观察', '表现出同样的兴趣'],
                    exampleDialogue: [
                        { speaker: 'parent', text: '哇，你也发现霸王龙手很短啦？观察真仔细！' },
                        { speaker: 'child', text: '对啊，它都摸不到自己的脸！' }
                    ]
                },
                {
                    step: '第二步：假设性提问',
                    goal: '培养逻辑推理',
                    donts: [],
                    dos: ['引导思考功能的替代方案'],
                    exampleDialogue: [
                        { speaker: 'parent', text: '那如果不抓猎物，你觉得它的手还能干什么呢？或者它怎么解决抓痒的问题？' },
                        { speaker: 'child', text: '也许它不仅蹭树？或者让别的恐龙帮忙？' }
                    ]
                }
            ]
        },

        conversationTips: [
            {
                topic: '史前生物',
                opener: '如果你能穿越回恐龙时代，你最想带什么工具去帮霸王龙抓痒？',
                resources: [
                    { type: 'book', title: '《恐龙帝国》', desc: 'P24-28 详细介绍了霸王龙的骨骼结构' },
                    { type: 'activity', title: '角色扮演', desc: '模拟"短手"霸王龙的生活挑战' }
                ]
            }
        ],

        liveConversation: [
            {
                id: 'dc-1',
                speaker: 'child',
                speakerName: '小明',
                content: '小星伴！我昨天看的书上说霸王龙是最大的肉食恐龙！',
                time: '08:30',
                timeAgo: '9小时前',
                audioDuration: '0:08'
            },
            {
                id: 'dc-2',
                speaker: 'ai',
                speakerName: '小星伴',
                content: '哇，你看了恐龙的书呀！霸王龙确实很厉害呢～它的牙齿比你的手指还长哦！',
                time: '08:30',
                timeAgo: '9小时前',
                audioDuration: '0:12'
            },
            {
                id: 'dc-3',
                speaker: 'child',
                speakerName: '小明',
                content: '那它的牙齿是不是比我的手还长？好可怕！',
                time: '08:31',
                timeAgo: '9小时前',
                audioDuration: '0:06'
            },
            {
                id: 'dc-4',
                speaker: 'child',
                speakerName: '小明',
                content: '可是霸王龙手那么短，它怎么抓痒痒呢？',
                time: '16:42',
                timeAgo: '1小时前',
                audioDuration: '0:07'
            },
            {
                id: 'dc-5',
                speaker: 'ai',
                speakerName: '小星伴',
                content: '哈哈这个问题太有趣了！你觉得它会怎么办呢？也许它会蹭树？还是找朋友帮忙？',
                time: '16:42',
                timeAgo: '1小时前',
                audioDuration: '0:14'
            },
            {
                id: 'dc-6',
                speaker: 'child',
                speakerName: '小明',
                content: '如果蚊子叮它的脸怎么办？它会不会急死？哈哈哈！',
                time: '16:45',
                timeAgo: '1小时前',
                audioDuration: '0:09'
            }
        ],

        liveMoments: [
            {
                id: 'dino-1',
                type: 'funny',
                time: '16:45',
                timeAgo: '1小时前',
                emoji: '😂',
                title: '笑点时刻',
                content: '霸王龙怎么抓痒痒？它会不会急死？',
                tag: '恐龙',
                isNew: true,
                relatedMessageIds: ['dc-4', 'dc-5', 'dc-6']
            },
            {
                id: 'dino-2',
                type: 'curiosity',
                time: '16:30',
                timeAgo: '1小时前',
                emoji: '❓',
                title: '好奇心爆发',
                content: '连续问了5个关于恐龙身体结构的问题',
                tag: '科学探索',
                isNew: true,
                relatedMessageIds: ['dc-1', 'dc-2', 'dc-3']
            },
            {
                id: 'dino-3',
                type: 'quote',
                time: '08:30',
                timeAgo: '9小时前',
                emoji: '💬',
                title: '金句时刻',
                content: '小星伴，宇航员在太空会不会想妈妈？',
                tag: '共情'
            },
            {
                id: 'dino-4',
                type: 'milestone',
                time: '16:50',
                timeAgo: '1小时前',
                emoji: '🎉',
                title: '成长里程碑',
                content: '第一次尝试自己回答"为什么"，用类比推理',
                tag: '逻辑思维',
                isNew: true,
                relatedMessageIds: ['dc-4', 'dc-5']
            }
        ],

        topicHighlights: [
            {
                id: 'th-dino-1',
                emoji: '🦕',
                topic: '恐龙大探索',
                summary: '化身恐龙百科全书！连续追问霸王龙为什么手短、怎么抓痒痒，还替恐龙操心被蚊子叮',
                keyInsight: '"也许它可以蹭树！" —— 第一次自己推理答案',
                mentionCount: 15,
                type: 'curiosity',
                isNew: true,
            },
            {
                id: 'th-dino-2',
                emoji: '🚀',
                topic: '宇宙里的温柔',
                summary: '聊到宇航员时突然变温柔，担心宇航员在太空会不会想妈妈',
                keyInsight: '"我如果去太空肯定要带着妈妈一起！"',
                mentionCount: 3,
                type: 'emotion',
                isNew: true,
            },
            {
                id: 'th-dino-3',
                emoji: '💡',
                topic: '思维小飞跃',
                summary: '第一次用类比推理回答问题——从"不知道"到"也许可以这样"的进步',
                mentionCount: 1,
                type: 'growth',
                isNew: true,
            },
        ]
    },
    {
        id: 'swing',
        name: '社交冲突：秋千',
        childName: '小明',
        mood: 'sad',
        moodText: '有些委屈',
        tags: ['社交', '规则', '挫折'],

        highlights: {
            text: '小明今天在幼儿园遇到了一些挫折，因为没抢到秋千感到很委屈。不过他回家后能主动倾诉，这是一个很好的情感宣泄和学习机会。',
            quote: '明明是我先跑过去的，但是小强挤开了我...'
        },

        overview: {
            stats: {
                dialogueCount: 5,
                dialogueTrend: 'down',
                dialogueDiff: 2,
                sharedCount: 3,
                sharedTrend: 'down',
                sharedDiff: '本周平均 8',
                questionCount: 2,
                questionTrend: 'same'
            },
            moodTrend: {
                morning: '😐 平静',
                afternoon: '😢 难过',
                evening: '🥣 恢复',
                weeklyStability: 3,
                weeklyTrend: 'worse'
            }
        },

        timeline: [
            {
                time: '17:20',
                mood: '😢 难过',
                content: [
                    '小星伴，今天我不开心...',
                    '明明是我先跑过去的，但是小强挤开了我，抢走了秋千。',
                    '老师也没看到，我只好在旁边看。'
                ],
                analysis: [
                    '遭遇不公平对待',
                    '感到无助和被忽视'
                ],
                alert: true
            }
        ],

        childWorld: {
            mood: {
                summary: '下午有明显的情绪低落，主要源于社交挫折。',
                details: [
                    { time: '傍晚', mood: '难过', reason: '玩秋千被插队' }
                ]
            },
            people: [
                {
                    name: '小强',
                    count: 2,
                    status: 'negative',
                    context: '抢秋千的同学'
                },
                {
                    name: '老师',
                    count: 1,
                    status: 'neutral',
                    context: '没虽然看到冲突'
                }
            ],
            interests: [],
            troubles: {
                title: '社交规则困扰',
                quotes: ['明明是我先跑过去的', '老师也没看到'],
                analysis: ['孩子感到规则被破坏', '渴望权威（老师）维护正义但失望']
            }
        },

        alerts: [
            {
                title: '社交受挫：玩秋千被挤',
                time: '17:20',
                quotes: ['明明是我先跑过去的...', '小强挤开了我'],
                moodAnalysis: ['委屈', '无助', '愤怒'],
                reason: '孩子遭遇了"规则无效"的情况，需要家长引导如何处理冲突。',
                goodNews: ['孩子愿意主动倾诉，说明信任关系良好', '没有发生肢体冲突']
            }
        ],

        actionPlan: {
            title: '处理社交委屈',
            steps: [
                {
                    step: '第一步：共情倾听',
                    goal: '接纳情绪',
                    donts: ['直接教训"你要让着别人"', '马上说"这点小事别哭了"'],
                    dos: ['抱抱他', '重复他的委屈'],
                    exampleDialogue: [
                        { speaker: 'parent', text: '我知道你很想玩秋千，被抢走了真的很难过对吗？（抱抱）' },
                        { speaker: 'child', text: '嗯，我都排了好久了...' }
                    ]
                },
                {
                    step: '第二步：复盘规则',
                    goal: '建立界限感',
                    donts: ['指责老师没看到'],
                    dos: ['讨论下次怎么维护自己的权利'],
                    exampleDialogue: [
                        { speaker: 'parent', text: '下次如果再发生，我们可以大声说"是我先来的"，或者去找老师帮忙。' },
                        { speaker: 'child', text: '可是老师在忙...' }
                    ]
                }
            ]
        },

        conversationTips: [
            {
                topic: '轮流与分享',
                opener: '如果森林里的动物都要玩唯一的秋千，它们会怎么排队呢？',
                resources: [
                    { type: 'book', title: '《大家一起玩》', desc: '绘本讲述如何轮流玩耍' },
                    { type: 'video', title: '丹尼尔老虎 S2E4', desc: '学会等待和轮流' }
                ]
            }
        ],

        liveConversation: [
            {
                id: 'sc-1',
                speaker: 'child',
                speakerName: '小明',
                content: '小星伴，今天我不开心...',
                time: '17:20',
                timeAgo: '30分钟前',
                audioDuration: '0:05'
            },
            {
                id: 'sc-2',
                speaker: 'ai',
                speakerName: '小星伴',
                content: '怎么啦小明？跟我说说，我在听呢～',
                time: '17:20',
                timeAgo: '30分钟前',
                audioDuration: '0:08'
            },
            {
                id: 'sc-3',
                speaker: 'child',
                speakerName: '小明',
                content: '明明是我先跑过去的，但是小强挤开了我，抢走了秋千。',
                time: '17:21',
                timeAgo: '29分钟前',
                audioDuration: '0:11'
            },
            {
                id: 'sc-4',
                speaker: 'child',
                speakerName: '小明',
                content: '老师也没看到，我只好在旁边看...',
                time: '17:22',
                timeAgo: '28分钟前',
                audioDuration: '0:07'
            },
            {
                id: 'sc-5',
                speaker: 'ai',
                speakerName: '小星伴',
                content: '听起来你很委屈呢。你先跑过去，却被挤开了，换成我也会难过的。你现在感觉好一点了吗？',
                time: '17:22',
                timeAgo: '28分钟前',
                audioDuration: '0:16'
            }
        ],

        liveMoments: [
            {
                id: 'swing-1',
                type: 'emotion',
                time: '17:20',
                timeAgo: '30分钟前',
                emoji: '🚨',
                title: '情绪提醒',
                content: '我今天好难过...明明是我先跑过去的',
                tag: '需要关注',
                isNew: true,
                relatedMessageIds: ['sc-1', 'sc-2', 'sc-3']
            },
            {
                id: 'swing-2',
                type: 'quote',
                time: '17:22',
                timeAgo: '28分钟前',
                emoji: '💬',
                title: '孩子原话',
                content: '老师也没看到，我只好在旁边看...',
                tag: '社交',
                isNew: true,
                relatedMessageIds: ['sc-4', 'sc-5']
            },
            {
                id: 'swing-3',
                type: 'milestone',
                time: '17:25',
                timeAgo: '25分钟前',
                emoji: '🎉',
                title: '成长亮点',
                content: '主动向小星伴倾诉委屈，信任关系良好',
                tag: '情感表达'
            }
        ],

        topicHighlights: [
            {
                id: 'th-swing-1',
                emoji: '😢',
                topic: '秋千风波',
                summary: '在幼儿园被小强抢了秋千，觉得"明明是我先来的"不公平，老师也没看到',
                keyInsight: '已经有了"先来后到"的公平规则意识',
                mentionCount: 3,
                type: 'social',
                isNew: true,
            },
            {
                id: 'th-swing-2',
                emoji: '💪',
                topic: '勇敢说出来',
                summary: '虽然很难过，但主动跟小星伴完整讲述了经过——这是第一次主动倾诉挫折',
                mentionCount: 1,
                type: 'growth',
                isNew: true,
            },
        ]
    }
];
