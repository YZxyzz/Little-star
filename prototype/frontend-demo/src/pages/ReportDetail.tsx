import { useState } from 'react';

export default function ReportDetail({ onBack }: { onBack: () => void }) {
    return (
        <div className="min-h-screen bg-polar-page">
            {/* Navbar */}
            <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-geese-white px-4 h-[50px] flex items-center justify-between z-40">
                <button onClick={onBack} className="text-2xl w-8 h-8 flex items-center justify-center rounded-full active:bg-gray-100">
                    🔙
                </button>
                <span className="font-bold text-ink-black">2月5日 星期三</span>
                <button className="text-2xl w-8 h-8 flex items-center justify-center rounded-full active:bg-gray-100">
                    📤
                </button>
            </div>

            <div className="p-5 pb-20 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* 1. Summary Module */}
                <section>
                    <div className="flex gap-2 mb-2">
                        <span className="px-2 py-1 bg-white border border-geese-white rounded-lg text-xs font-bold text-wolf-grey">🌤️ 晴天</span>
                        <span className="px-2 py-1 bg-white border border-geese-white rounded-lg text-xs font-bold text-wolf-grey">⏱️ 记录 45分钟</span>
                    </div>
                    <div className="bg-white p-5 rounded-px border-l-4 border-l-star-yellow rounded-r-2xl shadow-sm">
                        <h2 className="font-bold text-lg mb-2">📝 今日总结</h2>
                        <p className="text-ink-black leading-relaxed">
                            小明今天在幼儿园过得很充实。他对<strong>恐龙</strong>表现出了浓厚的兴趣，特别是霸王龙。午睡时稍微有点抗拒，但在老师引导下还是睡着了。
                        </p>
                    </div>
                </section>

                {/* 2. Mood Chart Module */}
                <section className="card-bouncy p-5">
                    <h2 className="font-bold text-lg mb-4">😊 情绪波动</h2>
                    <div className="h-32 flex items-end justify-between px-2 relative">
                        {/* Simple visual representation of a chart for demo */}
                        {/* Line */}
                        <div className="absolute top-1/2 left-4 right-4 h-1 bg-geese-white rounded-full -z-10"></div>

                        {/* Points */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="text-2xl mb-4 relative top-2">🙂</div>
                            <div className="w-4 h-4 rounded-full bg-star-yellow border-2 border-white shadow-sm z-10"></div>
                            <span className="text-xs font-bold text-wolf-grey">08:00</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="text-2xl mt-8">😐</div>
                            <div className="w-4 h-4 rounded-full bg-wolf-grey border-2 border-white shadow-sm z-10"></div>
                            <span className="text-xs font-bold text-wolf-grey">12:30</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="text-2xl mb-8">🤩</div>
                            <div className="w-4 h-4 rounded-full bg-star-yellow border-2 border-white shadow-sm z-10"></div>
                            <span className="text-xs font-bold text-wolf-grey">16:00</span>
                        </div>
                    </div>
                    <div className="mt-4 p-3 bg-polar-page rounded-xl text-sm text-wolf-grey">
                        整体评价：<strong>性格开朗</strong>，下午情绪达到高潮。
                    </div>
                </section>

                {/* 3. Interactive Advice Module */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl">💡</span>
                        <h2 className="font-bold text-lg text-ink-black">互动建议</h2>
                        <span className="text-xs bg-magic-purple/10 text-magic-purple px-2 py-0.5 rounded-full font-bold">2条新建议</span>
                    </div>

                    <div className="space-y-4">
                        <AdviceCard
                            title="关于恐龙的兴趣"
                            quote='"霸王龙为什么手那么短？"'
                            time="14:30"
                            advice="这是培养科学探索精神的好机会。不要直接给答案，而是引导他去观察和思考。"
                            color="border-l-magic-purple"
                        />
                        <AdviceCard
                            title="午睡时的抗拒"
                            quote='"我不想睡觉，我想玩..."'
                            time="12:15"
                            advice="孩子可能还没玩够。建议睡前约定好起床后的活动，给他一个期待。"
                            color="border-l-rose-red"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

function AdviceCard({ title, quote, time, advice, color }: any) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={`bg-white rounded-2xl shadow-solid border-2 border-geese-white overflow-hidden transition-all ${expanded ? 'ring-2 ring-star-yellow ring-offset-2' : ''}`}>
            <div
                className={`p-4 cursor-pointer flex justify-between items-start border-l-4 ${color}`}
                onClick={() => setExpanded(!expanded)}
            >
                <div>
                    <h3 className="font-bold text-ink-black mb-1">{title}</h3>
                    <p className="text-xs font-bold text-wolf-grey bg-polar-page inline-block px-2 py-1 rounded-md">
                        🕒 {time} 捕捉到的声音
                    </p>
                    <p className="text-ink-black/80 text-sm mt-3 italic font-medium bg-geese-white/30 p-2 rounded-lg border-l-2 border-wolf-grey/30">
                        {quote}
                    </p>
                </div>
                <div className={`w-8 h-8 rounded-full bg-geese-white/50 flex items-center justify-center transition-transform ${expanded ? 'rotate-180' : ''}`}>
                    ▼
                </div>
            </div>

            {/* Expanded Content */}
            {expanded && (
                <div className="px-4 pb-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="h-px w-full bg-geese-white mb-4"></div>

                    <h4 className="text-xs font-bold text-wolf-grey uppercase tracking-wider mb-2">给爸妈的建议</h4>
                    <p className="text-sm text-ink-black mb-4 leading-relaxed">
                        {advice}
                    </p>

                    <h4 className="text-xs font-bold text-magic-purple uppercase tracking-wider mb-3">💬 试着这样聊</h4>
                    <div className="space-y-3">
                        <div className="flex justify-end">
                            <div className="bg-star-yellow text-ink-black text-sm px-4 py-2 rounded-2xl rounded-tr-sm max-w-[85%] font-medium">
                                哇，你也发现霸王龙手很短啦？🦖
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className="bg-white border-2 border-geese-white border-dashed text-wolf-grey text-sm px-4 py-2 rounded-2xl rounded-tl-sm max-w-[85%] cursor-copy hover:border-magic-purple hover:text-magic-purple transition-colors">
                                你觉得如果不抓猎物，它的手还能干什么呢？(点击使用)
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
