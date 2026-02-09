
import { useState } from 'react';
import {
    ChevronLeft, Share2, ChevronDown,
    AlertTriangle, MessageCircle, Heart, Users, Star,
    TrendingUp, TrendingDown, Minus, BookOpen,
    ThumbsUp, ThumbsDown
} from 'lucide-react';
import { SCENARIOS, type ReportScenario } from '../data/scenarios';

export default function ReportDetail({ onBack, scenarioId }: { onBack: () => void, scenarioId: string }) {
    const scenario = SCENARIOS.find(s => s.id === scenarioId) || SCENARIOS[0];
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="min-h-screen bg-white text-super-black font-sans pb-20">
            {/* Navbar */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md px-4 py-3 flex items-center justify-between z-50 border-b border-black/5">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-soft-gray/10 flex items-center justify-center text-super-black active:scale-95 transition-transform"
                >
                    <ChevronLeft size={24} />
                </button>
                <div className="flex flex-col items-center">
                    <span className="text-base font-black text-super-black">每日成长报告</span>
                    <span className="text-[10px] text-soft-gray font-bold">2025年2月5日 星期三</span>
                </div>
                <button className="w-10 h-10 rounded-full bg-soft-gray/10 flex items-center justify-center text-super-black active:scale-95 transition-transform">
                    <Share2 size={20} />
                </button>
            </div>

            <main className="px-5 py-6 space-y-6 max-w-lg mx-auto">

                {/* Part 0: Highlights */}
                <Part0Highlights scenario={scenario} />

                {/* Part 1: Overview */}
                <Part1Overview scenario={scenario} />

                {/* Progressive Disclosure Trigger */}
                {!expanded && (
                    <button
                        onClick={() => setExpanded(true)}
                        className="w-full py-4 bg-super-black text-white rounded-2xl font-black text-sm flex flex-col items-center justify-center gap-1.5 active:scale-[0.98] transition-transform shadow-pop"
                    >
                        <span>查看完整报告 (3分钟)</span>
                        <ChevronDown size={16} className="opacity-60 animate-bounce" />
                    </button>
                )}

                {/* Expanded Content */}
                {expanded && (
                    <div className="space-y-8">

                        {/* Part 2: Timeline */}
                        <Part2Timeline scenario={scenario} />

                        {/* Part 3: Child's World */}
                        <Part3ChildWorld scenario={scenario} />

                        {/* Part 4: Alerts */}
                        {scenario.alerts && scenario.alerts.map((alert, idx) => (
                            <Part4Alert key={idx} alert={alert} />
                        ))}

                        {/* Part 5: Action Plan */}
                        <Part5ActionPlan plan={scenario.actionPlan} />

                        {/* Part 6: Tips */}
                        <Part6Tips tips={scenario.conversationTips} />

                        {/* Part 7: Feedback */}
                        <Part7Feedback />

                        <div className="text-center pb-8 pt-4">
                            <button
                                onClick={() => setExpanded(false)}
                                className="text-xs text-soft-gray font-bold active:opacity-60 transition-opacity"
                            >
                                收起报告
                            </button>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
}

// --- Components ---

function Part0Highlights({ scenario }: { scenario: ReportScenario }) {
    return (
        <section className="relative overflow-hidden rounded-3xl bg-super-black text-white p-6 shadow-pop">
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-black uppercase tracking-wider bg-white/15 px-2.5 py-1 rounded-full">✨ 今日亮点</span>
                </div>
                <p className="text-base font-bold leading-relaxed mb-4 text-white/90">
                    {scenario.highlights.text}
                </p>
                <div className="bg-white/10 rounded-2xl p-4">
                    <p className="text-sm font-medium text-white/80">
                        "{scenario.highlights.quote}"
                    </p>
                </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-hot-pink/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-sky-blue/20 rounded-full blur-2xl"></div>
        </section>
    );
}

function Part1Overview({ scenario }: { scenario: ReportScenario }) {
    const { stats, moodTrend } = scenario.overview;

    return (
        <section className="bg-soft-gray/[0.04] rounded-3xl p-6">
            <h3 className="text-super-black font-black text-lg mb-5 flex items-center gap-2">
                <span>📋</span> 今日概览
            </h3>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
                <StatItem
                    label="对话次数"
                    value={stats.dialogueCount}
                    trend={stats.dialogueTrend}
                    diff={stats.dialogueDiff}
                    color="text-sky-blue"
                />
                <StatItem
                    label="主动分享"
                    value={stats.sharedCount}
                    trend={stats.sharedTrend}
                    diff={stats.sharedDiff}
                    color="text-fresh-green"
                />
                <StatItem
                    label="好奇提问"
                    value={stats.questionCount}
                    trend={stats.questionTrend}
                    diff={stats.questionTrend === 'up' ? '好奇心!' : ''}
                    color="text-sunshine-yellow"
                    highlight
                />
            </div>

            {/* Mood Flow */}
            <div className="bg-white rounded-2xl p-4 border border-black/5">
                <div className="flex justify-between items-center text-xs text-soft-gray mb-4 font-bold">
                    <span>情绪流动</span>
                    <span>本周稳定度: {'⭐'.repeat(moodTrend.weeklyStability)}</span>
                </div>
                <div className="flex justify-between items-center relative">
                    <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-black/5 -z-0"></div>
                    <MoodPoint time="早" mood={moodTrend.morning} />
                    <MoodPoint time="中" mood={moodTrend.afternoon} />
                    <MoodPoint time="晚" mood={moodTrend.evening} />
                </div>
            </div>
        </section>
    );
}

function StatItem({ label, value, trend, diff, color, highlight }: { label: string; value: number; trend: string; diff: string | number; color: string; highlight?: boolean }) {
    const trendIcon = trend === 'up' ? <TrendingUp size={10} className="text-hot-pink" /> :
        trend === 'down' ? <TrendingDown size={10} className="text-sky-blue" /> :
            <Minus size={10} className="text-soft-gray" />;

    return (
        <div className="flex flex-col items-center text-center bg-white rounded-2xl p-3 border border-black/5">
            <span className="text-3xl font-black text-super-black mb-0.5 tracking-tight">{value}</span>
            <span className={`text-[11px] font-bold mb-1 ${highlight ? color : 'text-soft-gray'}`}>{label}</span>
            {diff && (
                <div className="flex items-center gap-1 text-[10px] text-soft-gray">
                    {typeof diff === 'number' ? <>{trendIcon} {diff}</> : diff}
                </div>
            )}
        </div>
    );
}

function MoodPoint({ time, mood }: { time: string, mood: string }) {
    const emoji = mood.split(' ')[0];
    const text = mood.split(' ')[1];

    return (
        <div className="relative z-10 flex flex-col items-center">
            <span className="text-2xl mb-1.5 bg-white w-11 h-11 flex items-center justify-center rounded-full shadow-sm border-2 border-black/5">{emoji}</span>
            <span className="text-xs font-black text-super-black">{text}</span>
            <span className="text-[10px] text-soft-gray font-bold mt-0.5">{time}</span>
        </div>
    );
}

function Part2Timeline({ scenario }: { scenario: ReportScenario }) {
    return (
        <section>
            <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="text-sky-blue" size={20} />
                <h3 className="font-black text-lg text-super-black">💬 今日对话</h3>
            </div>
            <p className="text-[11px] text-soft-gray font-bold mb-4 bg-sky-blue/10 px-3 py-1.5 rounded-full inline-block">数据来源：孩子实际说的话</p>

            <div className="space-y-4 relative pl-5">
                {/* Vertical Line */}
                <div className="absolute left-[9px] top-4 bottom-4 w-0.5 bg-black/5"></div>

                {scenario.timeline.map((item, idx) => (
                    <div key={idx} className="relative pl-6">
                        {/* Time Dot */}
                        <div className={`absolute left-0 top-4 w-[18px] h-[18px] rounded-full border-[3px] bg-white ${item.alert ? 'border-hot-pink' : 'border-sky-blue'}`}></div>

                        {/* Content */}
                        <div className={`rounded-3xl p-5 ${item.alert ? 'bg-hot-pink/[0.06]' : 'bg-soft-gray/[0.04]'}`}>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-[11px] font-black text-soft-gray uppercase tracking-wider">{item.time} · 小明说</span>
                                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white border border-black/5 text-super-black">
                                    {item.mood}
                                </span>
                            </div>

                            <div className="space-y-2 mb-3">
                                {item.content.map((line, i) => (
                                    <p key={i} className="text-super-black font-medium text-sm leading-relaxed">
                                        "{line}"
                                    </p>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                {item.analysis.map((tag, i) => (
                                    <span key={i} className="text-[10px] font-bold text-soft-gray bg-white px-2 py-1 rounded-full border border-black/5">💡 {tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Part3ChildWorld({ scenario }: { scenario: ReportScenario }) {
    const tabs = [
        { id: 'mood', label: '心情', icon: <Heart size={14} />, color: 'bg-hot-pink text-white' },
        { id: 'people', label: '提到的人', icon: <Users size={14} />, color: 'bg-sky-blue text-white' },
        { id: 'interests', label: '兴趣', icon: <Star size={14} />, color: 'bg-sunshine-yellow text-super-black' },
        { id: 'troubles', label: '困扰', icon: <AlertTriangle size={14} />, alert: !!scenario.childWorld.troubles, color: 'bg-hot-pink text-white' }
    ];

    const [activeTab, setActiveTab] = useState(scenario.childWorld.troubles ? 'troubles' : 'mood');

    return (
        <section>
            <h3 className="font-black text-lg text-super-black mb-4 flex items-center gap-2">
                <span>🔍</span> 孩子的世界
            </h3>

            {/* Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar mb-2">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black transition-all whitespace-nowrap active:scale-95
                            ${activeTab === tab.id
                                ? tab.color + ' shadow-sm'
                                : 'bg-soft-gray/10 text-soft-gray'}`}
                    >
                        {tab.icon}
                        {tab.label}
                        {tab.alert && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="bg-soft-gray/[0.04] rounded-3xl p-5 min-h-[180px]">
                {activeTab === 'mood' && (
                    <div>
                        <p className="text-sm text-super-black/70 leading-relaxed mb-4 font-medium border-l-3 border-hot-pink pl-3">
                            {scenario.childWorld.mood.summary}
                        </p>
                        <div className="space-y-2">
                            {scenario.childWorld.mood.details.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-black/5">
                                    <span className="text-xs font-black text-soft-gray w-10">{item.time}</span>
                                    <span className="text-sm font-black text-super-black">{item.mood}</span>
                                    <span className="text-xs text-soft-gray font-medium flex-1 text-right">{item.reason}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'people' && (
                    <div className="grid grid-cols-2 gap-3">
                        {scenario.childWorld.people.length === 0 ? (
                            <div className="col-span-2 text-center py-8 text-soft-gray text-sm font-medium">今天没有特别提到谁</div>
                        ) : (
                            scenario.childWorld.people.map((p, i) => (
                                <div key={i} className="bg-white p-3 rounded-2xl border border-black/5">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-black text-super-black">{p.name}</span>
                                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${p.status === 'positive' ? 'bg-fresh-green/20 text-fresh-green' :
                                                p.status === 'negative' ? 'bg-hot-pink/20 text-hot-pink' : 'bg-soft-gray/10 text-soft-gray'
                                            }`}>{p.count}次</span>
                                    </div>
                                    <p className="text-xs text-soft-gray font-medium">{p.context}</p>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {activeTab === 'interests' && (
                    <div className="space-y-3">
                        {scenario.childWorld.interests.map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-black/5">
                                <div className="bg-sunshine-yellow/15 p-3 flex justify-between items-center">
                                    <span className="font-black text-super-black">{item.topic}</span>
                                    <span className="text-[10px] font-bold text-soft-gray bg-white px-2 py-0.5 rounded-full">{item.weeklyTrend}</span>
                                </div>
                                <div className="p-3">
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.details.map((d, j) => (
                                            <span key={j} className="text-xs bg-soft-gray/[0.06] text-super-black/70 px-2 py-1 rounded-full font-medium">{d}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'troubles' && scenario.childWorld.troubles && (
                    <div>
                        <div className="bg-hot-pink/[0.06] rounded-2xl p-4 mb-3">
                            <h4 className="font-black text-super-black mb-2">{scenario.childWorld.troubles.title}</h4>
                            <div className="space-y-1.5 mb-3">
                                {scenario.childWorld.troubles.quotes.map((q, i) => (
                                    <p key={i} className="text-sm text-super-black/70 font-medium">"{q}"</p>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {scenario.childWorld.troubles.analysis.map((a, i) => (
                                    <span key={i} className="text-[10px] bg-white text-hot-pink px-2 py-1 rounded-full font-bold">{a}</span>
                                ))}
                            </div>
                        </div>
                        <p className="text-[10px] text-soft-gray text-center font-bold">详见下方"值得关注"模块</p>
                    </div>
                )}
            </div>
        </section>
    );
}

function Part4Alert({ alert }: { alert: { title: string; time: string; quotes: string[]; moodAnalysis: string[]; reason: string; goodNews: string[] } }) {
    return (
        <section className="bg-hot-pink/[0.06] rounded-3xl p-6 relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-hot-pink/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="text-hot-pink" size={20} />
                    <h3 className="font-black text-lg text-super-black">🚨 值得关注</h3>
                </div>

                <div className="mb-5">
                    <h4 className="font-black text-base text-super-black mb-3">{alert.title}</h4>
                    <div className="bg-white rounded-2xl p-4 border border-black/5 text-sm text-super-black/70 font-medium leading-relaxed">
                        {alert.moodAnalysis.join('、')}。
                        {alert.reason}
                    </div>
                </div>

                {alert.goodNews.length > 0 && (
                    <div className="bg-fresh-green/10 rounded-2xl p-3 mb-5">
                        <span className="text-[10px] font-black text-fresh-green block mb-1.5">✅ 好消息</span>
                        <ul className="text-xs text-super-black/70 font-medium space-y-1">
                            {alert.goodNews.map((g, i) => <li key={i}>• {g}</li>)}
                        </ul>
                    </div>
                )}

                <div className="flex gap-2">
                    <button className="flex-1 py-3 bg-super-black text-white rounded-2xl text-sm font-black active:scale-[0.98] transition-transform shadow-pop">
                        问问AI怎么处理
                    </button>
                    <button className="px-5 py-3 bg-white text-super-black rounded-2xl text-sm font-black border border-black/5 active:scale-[0.98] transition-transform">
                        标记
                    </button>
                </div>
            </div>
        </section>
    );
}

function Part5ActionPlan({ plan }: { plan: ReportScenario['actionPlan'] }) {
    return (
        <section>
            <div className="flex items-center gap-2 mb-4">
                <h3 className="font-black text-lg text-super-black">💡 今晚行动</h3>
            </div>

            <div className="space-y-4">
                {plan.steps.map((step, idx) => (
                    <div key={idx} className="bg-sunshine-yellow/[0.08] rounded-3xl p-5">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-black text-super-black bg-sunshine-yellow/30 px-3 py-1 rounded-full">{step.step}</span>
                            <span className="text-[10px] font-bold text-soft-gray">目标: {step.goal}</span>
                        </div>

                        {/* Dos and Donts */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-fresh-green/10 rounded-2xl p-3">
                                <span className="text-[10px] font-black text-fresh-green block mb-1.5">✅ 建议</span>
                                <ul className="text-xs text-super-black/70 font-medium space-y-1">
                                    {step.dos.map((d, i) => <li key={i}>• {d}</li>)}
                                </ul>
                            </div>
                            <div className="bg-hot-pink/[0.06] rounded-2xl p-3">
                                <span className="text-[10px] font-black text-hot-pink block mb-1.5">❌ 避免</span>
                                <ul className="text-xs text-super-black/70 font-medium space-y-1">
                                    {step.donts.length > 0 ? step.donts.map((d, i) => <li key={i}>• {d}</li>) : <li>无特殊禁忌</li>}
                                </ul>
                            </div>
                        </div>

                        {/* Dialogue Script */}
                        <div className="bg-white rounded-2xl p-4 border border-black/5">
                            <span className="text-[10px] font-black text-soft-gray uppercase tracking-wider block mb-3">💬 试着这样聊</span>
                            <div className="space-y-2.5">
                                {step.exampleDialogue.map((line, i) => (
                                    <div key={i} className={`flex gap-2.5 ${line.speaker === 'child' ? 'flex-row-reverse' : ''}`}>
                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${line.speaker === 'parent' ? 'bg-super-black text-white' : 'bg-sky-blue/20 text-sky-blue'}`}>
                                            {line.speaker === 'parent' ? '爸' : '娃'}
                                        </div>
                                        <div className={`text-sm p-2.5 rounded-2xl max-w-[80%] font-medium ${line.speaker === 'parent' ? 'bg-super-black/[0.04] text-super-black' : 'bg-sky-blue/10 text-super-black'}`}>
                                            {line.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Part6Tips({ tips }: { tips: ReportScenario['conversationTips'] }) {
    if (!tips || tips.length === 0) return null;
    const tip = tips[0];

    return (
        <section className="bg-fresh-green/[0.08] rounded-3xl p-6 relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-fresh-green/15 rounded-full blur-2xl"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="text-fresh-green" size={20} />
                    <h3 className="font-black text-lg text-super-black">📖 亲子话题推荐</h3>
                </div>

                <div className="bg-white/70 p-4 rounded-2xl backdrop-blur-sm border border-black/5 mb-4">
                    <span className="text-[10px] font-black text-fresh-green block mb-1.5">💡 开启话题</span>
                    <p className="text-super-black font-bold text-sm">{tip.opener}</p>
                </div>

                <div className="space-y-2">
                    {tip.resources.map((res, i) => (
                        <div key={i} className="flex gap-3 items-center bg-white p-3 rounded-2xl border border-black/5">
                            <div className="w-10 h-10 rounded-xl bg-fresh-green/15 flex items-center justify-center text-xl shrink-0">
                                {res.type === 'book' ? '📚' : res.type === 'video' ? '🎬' : '🎮'}
                            </div>
                            <div>
                                <h4 className="font-black text-sm text-super-black">{res.title}</h4>
                                <p className="text-[11px] text-soft-gray font-medium">{res.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Part7Feedback() {
    return (
        <section className="bg-soft-gray/[0.04] rounded-3xl p-6">
            <h3 className="font-black text-base text-super-black mb-4 flex justify-between items-center">
                <span>📝 今天的报告有帮助吗？</span>
                <div className="flex gap-2">
                    <button className="w-9 h-9 rounded-full bg-white border border-black/5 text-soft-gray hover:text-fresh-green hover:border-fresh-green/30 flex items-center justify-center transition-colors active:scale-95"><ThumbsUp size={16} /></button>
                    <button className="w-9 h-9 rounded-full bg-white border border-black/5 text-soft-gray hover:text-hot-pink hover:border-hot-pink/30 flex items-center justify-center transition-colors active:scale-95"><ThumbsDown size={16} /></button>
                </div>
            </h3>

            <div className="relative">
                <textarea
                    className="w-full bg-white rounded-2xl p-3 text-sm text-super-black placeholder:text-soft-gray/60 focus:outline-none focus:ring-2 focus:ring-sky-blue/20 border border-black/5 resize-none h-24 font-medium"
                    placeholder="补充一下今晚和孩子聊天的结果..."
                ></textarea>
                <button className="absolute bottom-3 right-3 text-xs font-black text-white bg-super-black px-3.5 py-1.5 rounded-xl active:scale-95 transition-transform">
                    发送反馈
                </button>
            </div>

            <div className="mt-4 pt-4 border-t border-black/5">
                <p className="text-[10px] text-soft-gray leading-relaxed text-center font-medium">
                    ℹ️ 本报告基于今天孩子和小星伴的对话内容生成。如果孩子有重要的事没告诉小星伴，报告可能无法体现。
                </p>
            </div>
        </section>
    );
}
