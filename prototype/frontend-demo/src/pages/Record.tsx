interface RecordProps {
    onOpenChat: () => void;
}

export default function Record({ onOpenChat }: RecordProps) {
    return (
        <div className="px-5 pt-8 pb-32">
            <div className="flex justify-between items-center mb-6 px-2">
                <h1 className="text-2xl font-extrabold text-ink">记录</h1>
                <button className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-lg active:scale-95 transition-transform">
                    🔍
                </button>
            </div>

            {/* Topic Cloud */}
            <div className="card-soft p-5 mb-8">
                <h3 className="text-sm font-bold text-subtext mb-3">📂 话题总览</h3>
                <div className="flex flex-wrap gap-2">
                    <TopicTag label="#恐龙" count={12} highlight />
                    <TopicTag label="#幼儿园" count={8} />
                    <TopicTag label="#积木" count={6} />
                    <TopicTag label="#小红" count={5} />
                    <TopicTag label="#画画" count={4} />
                    <TopicTag label="..." />
                </div>
            </div>

            {/* Feed */}
            <div className="flex justify-between items-center mb-4 px-2">
                <h3 className="font-bold text-ink">对话信息流</h3>
                <span className="text-xs font-bold text-subtext">筛选 ▼</span>
            </div>

            <div className="space-y-4">
                <FeedItem
                    time="14:30"
                    location="幼儿园"
                    content="霸王龙为什么手那么短？它怎么吃东西呀？"
                    tags={['#恐龙', '#好奇']}
                    insight="💡 AI洞察：孩子对恐龙身体结构产生好奇，体现了观察力的提升。"
                />
                <FeedItem
                    time="11:15"
                    location="画室"
                    content="我画不好...小红画得比我好..."
                    tags={['#情绪', '#挫折']}
                    insight="💡 AI洞察：孩子在比较中感到挫败，需要建立自信。"
                />
            </div>

            {/* Floating AI Chat Entry (Fixed Bottom) */}
            <div className="fixed bottom-24 left-5 right-5 z-40">
                <button
                    onClick={onOpenChat}
                    className="w-full bg-star text-ink font-extrabold rounded-full py-4 px-6 shadow-3d-star flex items-center justify-between active:translate-y-1 active:shadow-none transition-all"
                >
                    <span className="flex items-center gap-2">
                        <span className="text-2xl">💬</span>
                        <span>和小星伴聊聊...</span>
                    </span>
                    <span className="bg-white/20 p-2 rounded-full">
                        🎙️
                    </span>
                </button>
            </div>
        </div>
    );
}

function TopicTag({ label, count, highlight }: any) {
    return (
        <span className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 ${highlight ? 'bg-star text-ink' : 'bg-cream text-subtext border border-black/5'
            }`}>
            {label}
            {count && <span className="opacity-60 text-[10px]">{count}</span>}
        </span>
    );
}

function FeedItem({ time, location, content, tags, insight }: any) {
    return (
        <div className="card-soft p-5 group active:scale-[0.99] transition-transform">
            <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-star"></span>
                <span className="text-xs font-bold text-subtext">{time} · {location}</span>
            </div>

            <div className="bg-cream rounded-t-2xl rounded-br-2xl rounded-bl-sm p-4 mb-3 relative">
                <p className="text-ink font-bold leading-relaxed">
                    "{content}"
                </p>
                <div className="absolute -left-1 bottom-0 w-3 h-3 bg-cream transform rotate-45"></div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((t: string) => (
                    <span key={t} className="text-xs font-bold text-sky-blue bg-sky-blue/10 px-2 py-0.5 rounded-md">
                        {t}
                    </span>
                ))}
            </div>

            <div className="text-xs text-subtext bg-black/5 p-3 rounded-xl leading-relaxed">
                {insight}
            </div>
        </div>
    );
}
