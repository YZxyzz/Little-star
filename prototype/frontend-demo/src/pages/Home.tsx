import { useState } from 'react';

interface HomeProps {
    onNavigateToReport: () => void;
}

export default function Home({ onNavigateToReport }: HomeProps) {
    return (
        <div className="px-5 pt-4 pb-32">
            {/* 1. Header (Floating) */}
            <header className="flex justify-between items-center mb-4 sticky top-0 z-30 py-2 transition-all">
                <button className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm active:scale-95 transition-all">
                    <div className="w-8 h-8 rounded-full bg-star overflow-hidden flex items-center justify-center text-sm border-2 border-white">
                        👶
                    </div>
                    <span className="font-bold text-ink">小明 ▼</span>
                </button>

                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-subtext shadow-sm border border-black/5">
                    <span className="w-2 h-2 rounded-full bg-soft-green animate-pulse"></span>
                    <span>设备在线</span>
                </div>
            </header>

            {/* 2. Hero Section (Unboxed - 直接浮在背景上) */}
            <div className="relative flex flex-col items-center text-center py-6 mb-2">
                {/* 3D Mascot - Large & Center */}
                <div className="w-48 h-48 mb-4 flex items-center justify-center animate-float drop-shadow-2xl filter brightness-110">
                    {/* Placeholder for 3D Render - Using large Emoji for now but styled differently */}
                    <span className="text-[140px] leading-none filter drop-shadow-lg transform rotate-3 hover:rotate-6 transition-transform cursor-pointer"
                        style={{ textShadow: '0 20px 30px rgba(255, 200, 0, 0.3)' }}>
                        ⭐
                    </span>
                </div>

                {/* Report Summary Card (Floating below mascot) */}
                <div className="card-soft w-full p-5 relative z-10 animate-in slide-in-from-bottom duration-500">
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-sm font-bold text-subtext">📊 今日报告总览</h2>
                        <span className="text-xs bg-star/20 text-star-dark px-2 py-0.5 rounded-full font-bold">😊 开心</span>
                    </div>

                    <h1 className="text-lg font-extrabold text-ink mb-3 text-left leading-relaxed">
                        "今天小明充满好奇心，问了很多关于恐龙的问题..."
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="tag-pill">#恐龙</span>
                        <span className="tag-pill">#积木</span>
                        <span className="tag-pill">#小红</span>
                    </div>

                    <button
                        onClick={onNavigateToReport}
                        className="btn-primary w-full py-3 text-base flex justify-center items-center gap-1"
                    >
                        查看完整报告 <span>👉</span>
                    </button>
                </div>
            </div>

            {/* 3. Interaction Tactics (Suggestion Cards) */}
            <div className="mb-6">
                <div className="flex justify-between items-end mb-3 px-2">
                    <h2 className="text-lg font-extrabold text-ink">💡 互动策略</h2>
                    <span className="text-xs font-bold text-magic-purple bg-magic-purple/10 px-2 py-1 rounded-lg">2条新建议</span>
                </div>

                <div className="space-y-3">
                    <TacticCard
                        title="关于恐龙的兴趣"
                        content="趁热打铁，问问他最喜欢哪种恐龙，为什么？"
                        icon="🦕"
                        color="bg-sky-blue/10 text-sky-blue"
                    />
                    <TacticCard
                        title="关于画画的挫折"
                        content="先倾听感受，不要急着教他画，可以说'看起来这真的很难'。"
                        icon="🎨"
                        color="bg-rose-400/10 text-rose-500"
                    />
                </div>
            </div>

            {/* 4. Today's Picks */}
            <div className="mb-4">
                <div className="flex justify-between items-end mb-3 px-2">
                    <h2 className="text-lg font-extrabold text-ink">🎯 今日精选</h2>
                    <span className="text-xs font-bold text-subtext">查看全部 &gt;</span>
                </div>
                <div className="space-y-3">
                    <HighlightItem time="14:30" text="霸王龙为什么手那么短？" tag="#好奇" />
                    <HighlightItem time="11:15" text="画画遇到困难，有点沮丧..." tag="#情绪" />
                </div>
            </div>
        </div>
    );
}

function TacticCard({ title, content, icon, color }: any) {
    return (
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-black/5 flex gap-4 active:scale-[0.98] transition-transform cursor-pointer">
            <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center text-2xl shrink-0`}>
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-ink mb-1">{title}</h3>
                <p className="text-xs text-subtext leading-relaxed line-clamp-2">{content}</p>
            </div>
        </div>
    );
}

function HighlightItem({ time, text, tag }: any) {
    return (
        <div className="bg-white/50 p-3 rounded-2xl flex items-center gap-3 border border-black/5">
            <span className="text-xs font-bold text-subtext bg-white px-2 py-1 rounded-lg shadow-sm">{time}</span>
            <span className="text-sm font-bold text-ink flex-1 line-clamp-1">{text}</span>
            <span className="text-xs font-bold text-subtext opacity-50">{tag}</span>
        </div>
    )
}

