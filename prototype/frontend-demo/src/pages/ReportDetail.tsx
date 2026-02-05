import { useState } from 'react';
import { ChevronLeft, Share2, ChevronDown, Clock, Lightbulb } from 'lucide-react';
import { SCENARIOS } from '../data/scenarios';

export default function ReportDetail({ onBack, scenarioId }: { onBack: () => void, scenarioId: string }) {
    const scenario = SCENARIOS.find(s => s.id === scenarioId) || SCENARIOS[0];

    return (
        <div className="min-h-screen bg-white text-super-black">
            {/* Navbar */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md px-6 py-4 flex items-center justify-between z-40">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-soft-gray/5 flex items-center justify-center hover:bg-soft-gray/10 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <span className="text-lg font-black text-super-black">今日报告</span>
                <button className="w-10 h-10 rounded-full bg-soft-gray/5 flex items-center justify-center hover:bg-soft-gray/10 transition-colors">
                    <Share2 size={20} />
                </button>
            </div>

            <div className="px-6 pb-32 animate-in fade-in slide-in-from-bottom-8 duration-500">
                {/* 1. Summary Module (Dynamic) */}
                <section className="mb-8 relative">
                    {/* Decor */}
                    <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl pointer-events-none
                        ${scenario.mood === 'happy' ? 'bg-sunshine-yellow/20' :
                            scenario.mood === 'sad' ? 'bg-ocean-blue/20' :
                                scenario.mood === 'anxious' ? 'bg-hot-pink/20' : 'bg-fresh-green/20'}`}></div>

                    <div className="flex gap-2 mb-3 relative z-10">
                        <Tag label={`🌤️ ${scenario.moodText}`} />
                        <Tag label="⏱️ 记录 45分钟" />
                    </div>

                    <div className="bg-soft-gray/5 p-6 rounded-[2rem] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-sunshine-yellow"></div>
                        <h2 className="font-black text-xl mb-3 flex items-center gap-2">
                            <span>📝</span> 观察日记 (Observer)
                        </h2>
                        <p className="text-super-black leading-relaxed text-lg">
                            {scenario.innerWorld.observation}
                        </p>
                        <div className="mt-4 pt-4 border-t border-black/5">
                            <h4 className="flex items-center gap-2 text-xs font-black text-soft-gray uppercase tracking-wider mb-2">
                                <Lightbulb size={14} className="text-sunshine-yellow" />
                                深度解读 (Inner World)
                            </h4>
                            <p className="text-super-black font-bold opacity-80">
                                {scenario.innerWorld.psychologicalAnalysis}
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. Insight Tags */}
                <section className="mb-8 flex gap-2 flex-wrap">
                    {scenario.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-black text-white rounded-full text-xs font-bold">#{tag}</span>
                    ))}
                </section>

                {/* 3. Interactive Advice Module (Coach - Dynamic) */}
                <section>
                    <div className="flex justify-between items-end mb-5">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">💡</span>
                            <h2 className="font-black text-xl">互动锦囊 (Coach)</h2>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <AdviceCard
                            title="今日建议"
                            category="核心策略"
                            time="Now"
                            quote={scenario.name}
                            whyItMatters={scenario.innerWorld.psychologicalAnalysis}
                            strategy="基于上述分析的互动建议。"
                            scriptQ={scenario.coachAdvice.empathyOpener}
                            scriptA={scenario.coachAdvice.script}
                            color="bg-fresh-green"
                            icon="🧩"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

function Tag({ label }: { label: string }) {
    return (
        <span className="px-3 py-1 rounded-full border border-black/5 text-xs font-bold text-soft-gray bg-white">
            {label}
        </span>
    );
}

function AdviceCard({ title, category, time, quote, whyItMatters, scriptQ, scriptA, color }: any) {
    const [expanded, setExpanded] = useState(true); // Default open for highlight

    return (
        <div className={`rounded-[2rem] overflow-hidden shadow-sm border-2 transition-all duration-300 ${expanded ? 'border-super-black bg-white ring-4 ring-black/5' : 'border-transparent bg-soft-gray/5'}`}>
            {/* Header / Trigger */}
            <div
                className="p-5 cursor-pointer relative"
                onClick={() => setExpanded(!expanded)}
            >
                <div className="flex justify-between items-start mb-3">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg text-white ${color.replace('bg-', 'bg-opacity-100 bg-')}`}>
                        {category}
                    </span>
                    <span className="text-xs font-bold text-soft-gray flex items-center gap-1">
                        <Clock size={12} /> {time}
                    </span>
                </div>

                <h3 className="text-xl font-black text-super-black mb-3">{title}</h3>

                <div className="bg-white p-4 rounded-2xl border border-black/5 relative">
                    <div className="absolute -left-1 top-4 w-1 h-8 bg-super-black rounded-r-full"></div>
                    <p className="text-super-black font-bold italic opacity-90">
                        {quote}
                    </p>
                </div>

                <div className="flex justify-center mt-3">
                    <ChevronDown size={20} className={`text-soft-gray transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
                </div>
            </div>

            {/* Expanded Deep Content */}
            {expanded && (
                <div className="px-5 pb-6 animate-in slide-in-from-top-4 duration-300">
                    <div className="h-px w-full bg-black/5 mb-6"></div>

                    {/* Section 1: Why it matters */}
                    <div className="mb-6">
                        <h4 className="flex items-center gap-2 text-xs font-black text-soft-gray uppercase tracking-wider mb-2">
                            <Lightbulb size={14} className="text-sunshine-yellow" />
                            家长须知
                        </h4>
                        <p className="text-sm text-super-black font-bold leading-relaxed opacity-80">
                            {whyItMatters}
                        </p>
                    </div>

                    {/* Section 2: Actionable Script */}
                    <div className={`${color} bg-opacity-10 p-5 rounded-[1.5rem]`}>
                        <h4 className="text-xs font-black text-super-black uppercase tracking-wider mb-4 opacity-50">
                            试着这样聊 💬
                        </h4>

                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs shrink-0">
                                    爸妈
                                </div>
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm font-bold text-super-black">
                                    {scriptQ}
                                </div>
                            </div>
                            <div className="flex gap-3 flex-row-reverse">
                                <div className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-xs shrink-0">
                                    娃
                                </div>
                                <div className="bg-black/5 p-3 rounded-2xl rounded-tr-none text-sm font-bold text-super-black/70">
                                    {scriptA}
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-4 bg-white border border-black/5 py-3 rounded-xl text-xs font-black text-super-black hover:bg-white/80 transition-colors active:scale-[0.98]">
                            复制这段对话话术
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
