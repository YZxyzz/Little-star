import { ChevronLeft, TrendingUp, Calendar, Hash } from 'lucide-react';

export default function TopicDetail({ onBack }: { onBack: () => void }) {
    return (
        <div className="min-h-screen bg-white text-super-black">
            {/* Navbar */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md px-6 py-4 flex items-center gap-4 z-40">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-soft-gray/5 flex items-center justify-center hover:bg-soft-gray/10 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <span className="text-xl font-black text-super-black">#恐龙</span>
            </div>

            <div className="px-6 pb-32 animate-in fade-in slide-in-from-bottom-8 duration-500">

                {/* 1. Stats Cards (Moimoi Style) */}
                <section className="mb-8 grid grid-cols-2 gap-4">
                    <div className="bg-soft-gray/5 p-5 rounded-[2rem] aspect-[4/3] flex flex-col justify-between hover:bg-hot-pink/10 transition-colors group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/40 rounded-full -mr-6 -mt-6 group-hover:scale-110 transition-transform"></div>
                        <Hash size={24} className="text-hot-pink mb-2" />
                        <div>
                            <div className="text-3xl font-black text-super-black">12<span className="text-sm ml-1 opacity-50">次</span></div>
                            <div className="text-xs font-bold text-soft-gray">本周提及</div>
                        </div>
                    </div>

                    <div className="bg-soft-gray/5 p-5 rounded-[2rem] aspect-[4/3] flex flex-col justify-between hover:bg-fresh-green/10 transition-colors group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/40 rounded-full -mr-6 -mt-6 group-hover:scale-110 transition-transform"></div>
                        <TrendingUp size={24} className="text-fresh-green mb-2" />
                        <div>
                            <div className="text-sm font-black text-super-black flex items-center gap-1">📈 上升中</div>
                            <div className="text-xs font-bold text-soft-gray">热度趋势</div>
                        </div>
                    </div>
                </section>

                {/* 2. AI Insight */}
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">💡</span>
                        <h2 className="font-black text-xl">AI 洞察</h2>
                    </div>

                    <div className="bg-sunshine-yellow/10 border-2 border-sunshine-yellow/20 p-6 rounded-[2rem]">
                        <p className="font-bold text-super-black leading-relaxed mb-4">
                            小明最近对<span className="text-hot-pink">“恐龙身体结构”</span>表现出极强的好奇心。这说明他正在建立物体<span className="bg-white px-1 rounded-sm">功能与形态</span>的逻辑联系。
                        </p>
                        <div className="bg-white/60 p-4 rounded-xl text-sm font-bold text-soft-gray border-l-4 border-sunshine-yellow">
                            👉 建议：周末可以带他去自然博物馆，重点引导观察化石骨架。
                        </div>
                    </div>
                </section>

                {/* 3. Related Conversations */}
                <section>
                    <h2 className="font-black text-xl mb-6">相关对话</h2>
                    <div className="space-y-4">
                        <div className="p-5 rounded-[2rem] bg-soft-gray/5 border border-black/5">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-bold text-soft-gray flex items-center gap-1">
                                    <Calendar size={12} /> 昨天 14:30
                                </span>
                                <span className="text-xs font-bold text-hot-pink bg-hot-pink/5 px-2 py-0.5 rounded-full">好奇心</span>
                            </div>
                            <p className="text-super-black font-bold text-lg">
                                "霸王龙为什么手那么短？它怎么吃东西呀？"
                            </p>
                        </div>

                        <div className="p-5 rounded-[2rem] bg-soft-gray/5 border border-black/5 opacity-80">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-bold text-soft-gray flex items-center gap-1">
                                    <Calendar size={12} /> 2月1日
                                </span>
                            </div>
                            <p className="text-super-black font-bold text-lg">
                                "我想画一只恐龙，但是它的尾巴太难画了..."
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
