
import { SCENARIOS } from '../data/scenarios';
import { QuickAction } from '../components/QuickAction';
import { Zap } from 'lucide-react';

interface HomeProps {
    onNavigateToReport: () => void;
    onNavigateToHistory: () => void;
    onNavigateToArchive: () => void;
    currentScenarioId: string;
    onScenarioChange: (id: string) => void;
}

export default function Home({ onNavigateToReport, onNavigateToHistory, onNavigateToArchive, currentScenarioId, onScenarioChange }: HomeProps) {
    // Demo State: Current Scenario
    const scenario = SCENARIOS.find(s => s.id === currentScenarioId) || SCENARIOS[0];

    return (
        <div className="min-h-screen bg-white relative overflow-hidden px-6 pt-12 pb-32">
            {/* Background Blobs (Decoration) */}
            <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl animate-blob opacity-60 pointer-events-none transition-colors duration-1000
                ${scenario.mood === 'happy' ? 'bg-sunshine-yellow/20' :
                    scenario.mood === 'sad' ? 'bg-ocean-blue/20' :
                        scenario.mood === 'anxious' ? 'bg-hot-pink/20' : 'bg-fresh-green/20'}`}></div>

            {/* 1. Header */}
            <header className="relative z-10 flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-soft-gray/10 flex items-center justify-center text-2xl border-2 border-white shadow-sm">
                        👶
                    </div>
                    <div>
                        <h1 className="text-sm font-bold text-soft-gray uppercase tracking-wider">Good Afternoon</h1>
                        <h2 className="text-xl font-black text-super-black">{scenario.childName}</h2>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-fresh-green bg-fresh-green/10 px-2 py-1 rounded-full">🟢 80%</span>
                </div>
            </header>

            {/* NEW: Parent Battery Check-in */}
            <div className="relative z-10 mb-6 flex items-center justify-between bg-white border border-black/5 rounded-2xl p-3 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-hot-pink/10 flex items-center justify-center text-hot-pink">
                        <Zap size={16} fill="currentColor" />
                    </div>
                    <div>
                        <div className="text-xs text-soft-gray font-bold">Parent Battery</div>
                        <div className="text-sm font-black text-super-black">你今天感觉怎么样？</div>
                    </div>
                </div>
                <button className="text-xs font-bold bg-black text-white px-3 py-1.5 rounded-lg active:scale-95 transition-transform">
                    充个电 ⚡️
                </button>
            </div>

            {/* 2. Hero Status (Mood Scene) */}
            <div className="relative z-10 mb-8 flex flex-col items-center">
                {/* Mood Scene */}
                <div className="relative w-full h-56 mb-6 flex items-center justify-center bg-white border-4 border-super-black rounded-3xl shadow-pop overflow-hidden">
                    <div className="text-8xl animate-float">{scenario.moodSceneImage}</div>
                    <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold border-2 border-super-black">
                        {scenario.moodText}
                    </div>
                </div>

                <h1 className="text-2xl font-black text-center text-super-black leading-tight mb-2 px-4 transition-all duration-500">
                    {scenario.summary}
                </h1>

                <button
                    onClick={onNavigateToReport}
                    className="mt-4 btn-pop w-full flex items-center justify-center gap-2 group bg-super-black text-white hover:bg-super-black/90"
                >
                    查看今日深度解读
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>

            {/* 3. Real-time / Quick Access Area */}
            <div className="relative z-10 mb-8">
                {scenario.realTimeStatus === 'chatting' && (
                    <div className="mb-6 bg-super-black/5 rounded-2xl p-4 border-2 border-super-black/10 animate-pulse-slow">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-fresh-green animate-ping"></span>
                                <span className="text-xs font-black uppercase text-fresh-green">Live Now</span>
                            </div>
                            <button className="text-xs font-bold text-super-black bg-white px-2 py-1 rounded-md border border-super-black/10">🎧 Listen In</button>
                        </div>
                        <p className="text-super-black font-medium font-mono text-sm">
                            "{scenario.currentTranscript}"
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                    <QuickAction
                        icon="📅"
                        label="成长日历"
                        subLabel="已陪伴 128h"
                        onClick={onNavigateToHistory}
                    />
                    <QuickAction
                        icon="📂"
                        label="历史档案"
                        subLabel="查看往期报告"
                        onClick={onNavigateToArchive}
                    />
                </div>
            </div>

            {/* NEW: Flashback / Golden Moment */}
            <div className="relative z-10 mb-8">
                <div className="flex justify-between items-end mb-4">
                    <h2 className="text-xl font-black text-super-black">🎞️ 那年今日</h2>
                </div>
                <div className="bg-ocean-blue/10 p-4 rounded-3xl border border-ocean-blue/20 relative overflow-hidden">
                    {/* Tape decoration */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-white/30 skew-x-12 backdrop-blur-sm"></div>

                    <div className="flex gap-4 items-center">
                        <div className="w-16 h-16 bg-white rounded-xl rotate-3 shadow-sm flex items-center justify-center text-2xl">
                            🎂
                        </div>
                        <div>
                            <div className="text-xs font-bold text-ocean-blue uppercase tracking-wider mb-1">1 Year Ago</div>
                            <p className="text-super-black font-bold text-sm leading-tight">
                                "小明第一次尝试自己吹蜡烛，虽然吹了满脸..."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Coach's Corner (Brief) */}
            <div className="relative z-10">
                <div className="flex justify-between items-end mb-4">
                    <h2 className="text-xl font-black text-super-black">💡 互动锦囊</h2>
                </div>

                <div className="bg-sunshine-yellow/20 p-5 rounded-3xl border-2 border-sunshine-yellow transition-all duration-500">
                    <div className="flex gap-3 mb-3">
                        <div className="text-2xl">🪄</div>
                        <div>
                            <h3 className="font-black text-super-black text-sm">Advice for Today</h3>
                            <p className="text-xs text-super-black/60">Based on: {scenario.name}</p>
                        </div>
                    </div>
                    <p className="text-super-black font-bold text-lg mb-3 leading-relaxed">
                        "{scenario.coachAdvice.empathyOpener}"
                    </p>
                    <div className="bg-white/50 rounded-xl p-3 text-sm text-super-black/80 font-medium">
                        👉 试着说：{scenario.coachAdvice.script}
                    </div>
                </div>
            </div>

            {/* DEBUG: Scenario Switcher */}
            <div className="fixed bottom-32 right-4 z-50 opacity-80 hover:opacity-100 transition-opacity bg-black/80 p-2 rounded-xl backdrop-blur-md border border-white/20">
                <div className="text-[10px] text-white/50 font-bold mb-1 uppercase tracking-wider">Demo Scenario</div>
                <select
                    value={currentScenarioId}
                    onChange={(e) => onScenarioChange(e.target.value)}
                    className="bg-transparent text-white text-xs font-bold outline-none cursor-pointer w-full"
                >
                    {SCENARIOS.map(s => (
                        <option key={s.id} value={s.id} className="text-black">{s.name}</option>
                    ))}
                </select>
            </div>
            {/* Share Global State Hack for Demo (so Report Detail knows what to show) */}
            <div className="hidden" id="demo-state" data-scenario={currentScenarioId}></div>
        </div>
    );
}
