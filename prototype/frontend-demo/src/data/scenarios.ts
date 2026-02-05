

export interface ReportScenario {
    id: string;
    name: string;
    childName: string;
    mood: 'happy' | 'calm' | 'sad' | 'mixed' | 'curious' | 'anxious';
    moodText: string;
    summary: string;
    tags: string[];

    // Hero Section
    moodSceneImage: string; // Placeholder string for emoji/illustration

    // Real-time
    realTimeStatus: 'idle' | 'chatting' | 'emotional';
    currentTranscript?: string;

    // Report Detail content
    innerWorld: {
        observation: string;
        psychologicalAnalysis: string;
    };
    coachAdvice: {
        empathyOpener: string; // 共情话术
        actionableStep: string; // 引导行动
        script: string; // 具体对话脚本
    };
}

export const SCENARIOS: ReportScenario[] = [
    {
        id: 'dinos',
        name: '恐龙的十万个为什么',
        childName: '小明',
        mood: 'curious',
        moodText: '充满好奇',
        summary: '今天小明对恐龙展现了极大的探索欲，问了15个关于身体结构的问题。',
        tags: ['恐龙', '好奇心', '科普'],
        moodSceneImage: '🦖',
        realTimeStatus: 'chatting',
        currentTranscript: '霸王龙为什么手那么短？它怎么抓痒痒？',
        innerWorld: {
            observation: '不断追问恐龙的细节，通过对比（人和恐龙）来理解世界。',
            psychologicalAnalysis: '处于"具体运算阶段"的前期，通过分类和比较来建立认知框架。好奇心是智力发展的强信号。'
        },
        coachAdvice: {
            empathyOpener: '哇，你也发现霸王龙手很短啦？观察真仔细！',
            actionableStep: '鼓励假设性思考，而不是直接给答案。',
            script: '爸爸："你觉得如果不抓猎物，它的手还能干什么呢？（引导想象）"'
        }
    },
    {
        id: 'swing',
        name: '社交冲突：秋千',
        childName: '小明',
        mood: 'sad',
        moodText: '有些委屈',
        summary: '放学时因为没抢到秋千哭了一会儿，但在老师引导下学会了等待。',
        tags: ['社交', '规则', '挫折'],
        moodSceneImage: '😢',
        realTimeStatus: 'idle',
        innerWorld: {
            observation: '在被拒绝后有了明显的情绪爆发，但能在5分钟内平复。',
            psychologicalAnalysis: '这是典型的"自我中心"到"社会规则"的过渡期冲突。他在学习"延迟满足"。'
        },
        coachAdvice: {
            empathyOpener: '我知道你很想玩秋千，没玩到真的很难过对吗？（抱抱）',
            actionableStep: '复盘规则，确认轮流玩的好处。',
            script: '妈妈："下次如果我们想玩，可以先去排队，或者跟小朋友商量数到10就换人，好吗？"'
        }
    },
    {
        id: 'bedtime',
        name: '睡前抗拒',
        childName: '小明',
        mood: 'anxious',
        moodText: '不想分开',
        summary: '晚上21:00一直找借口（喝水、尿尿）不肯睡觉。',
        tags: ['睡眠', '依恋', '习惯'],
        moodSceneImage: '🌙',
        realTimeStatus: 'idle',
        innerWorld: {
            observation: '频繁提出生理需求作为借口，实际上是寻求陪伴。',
            psychologicalAnalysis: '睡前分离焦虑。对于孩子来说，睡眠意味着与父母和世界的短暂"分离"。'
        },
        coachAdvice: {
            empathyOpener: '是不是还想和妈妈多待一会儿呀？',
            actionableStep: '温和鉴定。提供有限选择，增加掌控感。',
            script: '妈妈："现在是睡觉时间了。你可以选择读一本故事书还是两本？读完我们就关灯。"'
        }
    },
    {
        id: 'button',
        name: '成就时刻：扣纽扣',
        childName: '小明',
        mood: 'happy',
        moodText: '超级自豪',
        summary: '今天第一次自己扣上了睡衣的所有纽扣！',
        tags: ['自理', '精细动作', '成就感'],
        moodSceneImage: '✨',
        realTimeStatus: 'idle',
        innerWorld: {
            observation: '尝试了三次，并在成功后大声呼唤父母观看。',
            psychologicalAnalysis: '自我效能感（Self-Efficacy）的建立关键期。在这个阶段，"我能做到"的感觉比什么都重要。'
        },
        coachAdvice: {
            empathyOpener: '哇！你坚持试了那么多次，终于成功了！',
            actionableStep: '进行具体的表扬（Process Praise），而非空洞的夸奖。',
            script: '爸爸："我看到你刚才对准那个扣眼，轻轻一推就进去了，手指真灵活！"'
        }
    },
    {
        id: 'lie',
        name: '谎言与试探',
        childName: '小明',
        mood: 'mixed',
        moodText: '有点紧张',
        summary: '说刷完牙了，但检查发现牙刷是干的。',
        tags: ['诚实', '边界', '试探'],
        moodSceneImage: '😶',
        realTimeStatus: 'idle',
        innerWorld: {
            observation: '眼神躲闪，把手背在身后。',
            psychologicalAnalysis: '这不是道德问题，而是认知发展里程碑（心智理论）。他在测试"如果我不说真话，你会知道吗？"以及逃避不愉快的任务。'
        },
        coachAdvice: {
            empathyOpener: '我摸了一下牙刷是干的哦。是不是今天太累了不想刷牙？',
            actionableStep: '去标签化。不要称之为"撒谎"，而是"未完成的事实"。',
            script: '妈妈："我们需要牙齿健康。我们可以一起去刷，或者你帮我挤牙膏？"'
        }
    },
    {
        id: 'comparison',
        name: '同伴比较',
        childName: '小明',
        mood: 'sad',
        moodText: '羡慕',
        summary: '觉得小红的水彩笔比自己的多，不想画画了。',
        tags: ['自尊', '社交', '比较'],
        moodSceneImage: '🎨',
        realTimeStatus: 'idle',
        innerWorld: {
            observation: '盯着别人的工具看，甚至想破坏自己的画。',
            psychologicalAnalysis: '社会性比较（Social Comparison）萌芽。开始通过外物来衡量自我价值。'
        },
        coachAdvice: {
            empathyOpener: '你觉得小红的水彩笔颜色很多，很漂亮是吗？',
            actionableStep: '引导关注内在价值和过程的快乐。',
            script: '爸爸："颜色确实很多。但是画画最重要的是脑袋里的想法。你看你画的这只恐龙，表情多生动呀，这是只有你能画出来的！"'
        }
    }
];
