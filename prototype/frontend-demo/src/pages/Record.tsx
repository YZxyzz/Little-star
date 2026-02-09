import { useState } from 'react';
import { MEMORY_MAP, type NewUpdate, type MemoryMapData } from '../data/scenarios';
import { Search, ChevronRight, MessageCircle, Mic } from 'lucide-react';

interface RecordProps {
    onOpenChat: () => void;
    onNavigateToTopic: () => void;
}

export default function Record({ onOpenChat }: RecordProps) {
    const data = MEMORY_MAP;

    return (
        <div className="min-h-screen bg-white text-super-black pt-12 pb-40 relative overflow-hidden">
            {/* Soft gradient background */}
            <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-lilac/8 via-sky-blue/5 to-transparent pointer-events-none" />

            <div className="relative z-10 px-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-black tracking-tight">记录</h1>
                    <button className="w-11 h-11 rounded-full bg-black/[0.03] flex items-center justify-center hover:bg-black/[0.06] transition-colors">
                        <Search size={18} className="text-soft-gray" />
                    </button>
                </div>

                {/* ✨ New Updates Section */}
                <NewUpdatesSection updates={data.newUpdates} />

                {/* 📁 Memory Map Grid */}
                <MemoryMapGrid data={data} />
            </div>

            {/* Fixed AI Chat Entry */}
            <div className="fixed bottom-28 left-5 right-5 z-40">
                <button
                    onClick={onOpenChat}
                    className="w-full bg-super-black text-white font-bold rounded-full py-4 px-6 shadow-pop flex items-center justify-between active:scale-[0.98] transition-transform"
                >
                    <span className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <MessageCircle size={16} />
                        </span>
                        <span className="text-[15px]">和小星伴聊聊...</span>
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                        <Mic size={14} />
                    </span>
                </button>
            </div>
        </div>
    );
}

// ─── New Updates Section ────────────────────────────────────────────────────

function NewUpdatesSection({ updates }: { updates: NewUpdate[] }) {
    const [showAll, setShowAll] = useState(false);
    const newUpdates = updates.filter(u => u.isNew);
    const displayUpdates = showAll ? newUpdates : newUpdates.slice(0, 3);

    if (newUpdates.length === 0) return null;

    return (
        <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-black flex items-center gap-2">
                    <span>✨</span>
                    <span>新动态</span>
                    <span className="text-xs font-bold text-white bg-hot-pink rounded-full px-2 py-0.5">
                        {newUpdates.length}
                    </span>
                </h2>
                {newUpdates.length > 3 && (
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-xs font-bold text-soft-gray flex items-center gap-0.5 hover:text-super-black transition-colors"
                    >
                        {showAll ? '收起' : '全部'}
                        <ChevronRight size={12} />
                    </button>
                )}
            </div>

            <div className="space-y-3">
                {displayUpdates.map(update => (
                    <UpdateCard key={update.id} update={update} />
                ))}
            </div>
        </section>
    );
}

function UpdateCard({ update }: { update: NewUpdate }) {
    const levelStyles: Record<NewUpdate['level'], string> = {
        urgent: 'border-l-hot-pink bg-hot-pink/[0.04]',
        daily: 'border-l-sky-blue bg-sky-blue/[0.04]',
        weekly: 'border-l-fresh-green bg-fresh-green/[0.04]',
        achievement: 'border-l-sunshine-yellow bg-sunshine-yellow/[0.06]',
    };

    const levelLabels: Record<NewUpdate['level'], { text: string; color: string }> = {
        urgent: { text: '关注', color: 'text-hot-pink bg-hot-pink/10' },
        daily: { text: '今日', color: 'text-sky-blue bg-sky-blue/10' },
        weekly: { text: '趋势', color: 'text-fresh-green bg-fresh-green/10' },
        achievement: { text: '成就', color: 'text-amber-600 bg-sunshine-yellow/20' },
    };

    const level = levelLabels[update.level];

    return (
        <div className={`p-4 rounded-2xl border-l-[3px] ${levelStyles[update.level]} transition-all hover:shadow-sm cursor-pointer active:scale-[0.99]`}>
            <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0 mt-0.5">{update.emoji}</span>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm text-super-black">{update.title}</span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${level.color}`}>
                            {level.text}
                        </span>
                    </div>
                    <p className="text-xs text-soft-gray font-medium leading-relaxed">{update.summary}</p>
                    <span className="text-[10px] text-soft-gray/60 font-medium mt-1 block">{update.timestamp}</span>
                </div>
                <ChevronRight size={14} className="text-soft-gray/30 flex-shrink-0 mt-1" />
            </div>
        </div>
    );
}

// ─── Memory Map Grid ────────────────────────────────────────────────────────

function MemoryMapGrid({ data }: { data: MemoryMapData }) {
    const dimensions: {
        key: keyof MemoryMapData['badges'];
        emoji: string;
        label: string;
        sublabel: string;
        color: string;
        bgColor: string;
    }[] = [
        {
            key: 'people',
            emoji: '👥',
            label: '人物',
            sublabel: `${data.people.length} 人`,
            color: 'text-hot-pink',
            bgColor: 'bg-hot-pink/[0.06]',
        },
        {
            key: 'emotion',
            emoji: '💛',
            label: '情绪',
            sublabel: `稳定 ${data.emotion.stability.score}/5`,
            color: 'text-amber-500',
            bgColor: 'bg-sunshine-yellow/[0.08]',
        },
        {
            key: 'interest',
            emoji: '🔭',
            label: '兴趣',
            sublabel: `${data.interests.length} 项`,
            color: 'text-sky-blue',
            bgColor: 'bg-sky-blue/[0.06]',
        },
        {
            key: 'growth',
            emoji: '🌱',
            label: '成长',
            sublabel: `${data.growthTrack.length} 里程碑`,
            color: 'text-fresh-green',
            bgColor: 'bg-fresh-green/[0.06]',
        },
        {
            key: 'challenge',
            emoji: '⚡',
            label: '挑战',
            sublabel: `${data.challenges.filter(c => c.currentStatus === 'active').length} 进行中`,
            color: 'text-orange-500',
            bgColor: 'bg-orange-500/[0.05]',
        },
        {
            key: 'worldview',
            emoji: '🌍',
            label: '世界',
            sublabel: `${data.worldview.length} 个理论`,
            color: 'text-lilac',
            bgColor: 'bg-lilac/[0.08]',
        },
    ];

    return (
        <section className="mb-8">
            <h2 className="text-lg font-black mb-4 flex items-center gap-2">
                <span>📁</span>
                <span>记忆图谱</span>
            </h2>

            <div className="grid grid-cols-3 gap-3">
                {dimensions.map(dim => (
                    <DimensionCard
                        key={dim.key}
                        emoji={dim.emoji}
                        label={dim.label}
                        sublabel={dim.sublabel}
                        bgColor={dim.bgColor}
                        badge={data.badges[dim.key]}
                    />
                ))}
            </div>
        </section>
    );
}

function DimensionCard({
    emoji,
    label,
    sublabel,
    bgColor,
    badge,
}: {
    emoji: string;
    label: string;
    sublabel: string;
    bgColor: string;
    badge: number;
}) {
    return (
        <button className={`relative ${bgColor} rounded-2xl p-4 flex flex-col items-center gap-2 transition-all hover:shadow-sm active:scale-[0.97] cursor-pointer`}>
            {/* Badge */}
            {badge > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-hot-pink text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                    {badge}
                </span>
            )}
            <span className="text-2xl">{emoji}</span>
            <span className="text-sm font-bold text-super-black">{label}</span>
            <span className="text-[10px] text-soft-gray font-medium">{sublabel}</span>
        </button>
    );
}
