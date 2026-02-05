import { useState } from 'react';

interface HomeProps {
    onNavigateToReport: () => void;
}

export default function Home({ onNavigateToReport }: HomeProps) {
    const [isRecording, setIsRecording] = useState(false);

    return (
        <div className="px-5 pt-4 pb-20">
            {/* 1. Header */}
            <header className="flex justify-between items-center mb-6">
                <button className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-soft active:scale-95 transition-all">
                    <div className="w-8 h-8 rounded-full bg-star overflow-hidden flex items-center justify-center text-sm border-2 border-white shadow-sm">
                        👶
                    </div>
                    <span className="font-bold text-ink">小明 ▼</span>
                </button>

                <div className="flex items-center gap-3">
                    {/* Device Status Pill */}
                    <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full text-xs font-bold text-subtext shadow-sm border border-black/5">
                        <span className="w-2 h-2 rounded-full bg-soft-green animate-pulse"></span>
                        <span>80%</span>
                    </div>
                </div>
            </header>

            {/* 2. Hero Card (Soft 3D) */}
            <div className="card-soft p-6 mb-8 relative overflow-visible group hover:-translate-y-2 transition-transform duration-500 ease-out">
                {/* Background Decoration */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-star/20 rounded-full blur-3xl opacity-60"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Mascot */}
                    <div className="w-32 h-32 mb-4 text-7xl flex items-center justify-center animate-float cursor-pointer drop-shadow-lg">
                        ⭐️
                    </div>

                    <h1 className="text-xl font-extrabold text-ink mb-2 leading-tight">
                        今天小明也是<br />充满好奇心的一天！
                    </h1>
                    <p className="text-subtext text-sm mb-6">
                        和朋友们聊了很多关于恐龙的话题。
                    </p>

                    <button
                        onClick={onNavigateToReport}
                        className="btn-primary w-full py-4 text-lg"
                    >
                        查看今日报告
                    </button>
                </div>
            </div>

            {/* 3. Timeline Title */}
            <div className="flex justify-between items-end mb-4 px-2">
                <h2 className="text-lg font-extrabold text-ink">今日动态</h2>
                <span className="text-xs font-bold text-sky-blue bg-sky-blue/10 px-2 py-1 rounded-lg">查看全部 &gt;</span>
            </div>

            {/* 4. Timeline List */}
            <div className="space-y-4">
                <TimelineItem
                    time="14:30"
                    location="幼儿园"
                    content="和小红讨论霸王龙的牙齿..."
                    tags={['#恐龙', '#好奇宝宝']}
                    icon="🦕"
                    color="bg-magic-purple/20 text-magic-purple"
                />
                <TimelineItem
                    time="11:15"
                    location="画室"
                    content="画画时遇到困难，有点沮丧..."
                    tags={['#挫折教育']}
                    icon="🎨"
                    color="bg-rose-400/20 text-rose-500"
                />
            </div>

            {/* 5. FAB (Floating Action Button) */}
            <button
                className="fixed bottom-24 right-5 w-16 h-16 bg-sky-blue hover:brightness-110 text-white rounded-2xl flex items-center justify-center text-3xl shadow-[0_6px_0_0_#4DABF7] active:translate-y-2 active:shadow-none transition-all z-40"
                onClick={() => setIsRecording(!isRecording)}
            >
                🎙️
            </button>

            {/* Basic Recording Overlay */}
            {isRecording && (
                <div className="fixed inset-0 bg-ink/20 backdrop-blur-sm z-50 flex items-end justify-center animate-in fade-in duration-200">
                    <div className="bg-white w-full rounded-t-[2.5rem] p-8 pb-12 animate-in slide-in-from-bottom duration-300 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                        <h3 className="text-center font-extrabold text-2xl mb-8 text-ink">正在聆听...</h3>
                        <div className="flex justify-center gap-6">
                            <button
                                onClick={() => setIsRecording(false)}
                                className="btn-secondary w-32 py-3"
                            >
                                取消
                            </button>
                            <button
                                onClick={() => setIsRecording(false)}
                                className="btn-primary w-32 py-3"
                            >
                                完成
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function TimelineItem({ time, location, content, tags, icon, color }: any) {
    return (
        <div className="card-soft p-5 flex gap-4 items-start active:scale-[0.98] transition-transform cursor-pointer hover:shadow-lg">
            <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center text-2xl shrink-0 shadow-inner`}>
                {icon}
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-subtext flex items-center gap-1 bg-black/5 px-2 py-0.5 rounded-md">
                        {time} · {location}
                    </span>
                </div>
                <p className="text-ink font-bold text-base mb-3 line-clamp-2 leading-relaxed">
                    {content}
                </p>
                <div className="flex gap-2">
                    {tags.map((tag: string) => (
                        <span key={tag} className="px-2 py-1 bg-cream border border-black/5 text-subtext text-xs font-bold rounded-lg dash-border">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
