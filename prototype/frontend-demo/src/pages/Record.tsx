interface RecordProps {
    onOpenChat: () => void;
    onNavigateToTopic: () => void;
}

export default function Record({ onOpenChat, onNavigateToTopic }: RecordProps) {
    return (
        <div className="min-h-screen bg-white text-super-black px-6 pt-12 pb-32 relative overflow-hidden">
            {/* Decor Blob */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-sky-blue/5 to-transparent pointer-events-none"></div>

            <div className="relative z-10 flex justify-between items-center mb-8">
                <h1 className="text-3xl font-black text-super-black tracking-tight">记录</h1>
                <button className="w-12 h-12 rounded-full bg-soft-gray/5 flex items-center justify-center text-xl hover:bg-soft-gray/10 transition-colors">
                    🔍
                </button>
            </div>

            {/* Topic Cloud (Organic) */}
            <div className="mb-10">
                <h3 className="text-sm font-bold text-soft-gray uppercase mb-4 tracking-wider">Hot Topics</h3>
                <div className="flex flex-wrap gap-3">
                    <TopicBlob label="#恐龙" count={12} color="bg-hot-pink text-white" onClick={onNavigateToTopic} />
                    <TopicBlob label="#幼儿园" count={8} color="bg-sunshine-yellow text-super-black" onClick={onNavigateToTopic} />
                    <TopicBlob label="#积木" count={6} color="bg-fresh-green text-super-black" onClick={onNavigateToTopic} />
                    <TopicBlob label="#小红" count={5} color="bg-sky-blue text-white" onClick={onNavigateToTopic} />
                    <TopicBlob label="#画画" count={4} color="bg-lilac text-white" onClick={onNavigateToTopic} />
                </div>
            </div>

            {/* Feed */}
            <div className="relative z-10">
                <div className="flex justify-between items-end mb-5">
                    <h3 className="text-2xl font-black text-super-black">对话流</h3>
                    <span className="text-sm font-bold text-soft-gray">Filter ▼</span>
                </div>

                <div className="space-y-6">
                    <FeedBlob
                        time="14:30"
                        location="幼儿园"
                        content="霸王龙为什么手那么短？它怎么吃东西呀？"
                        tags={['#恐龙', '#好奇']}
                        insight="💡 观察力提升！孩子开始思考生物结构了。"
                        bg="bg-sky-blue/10"
                    />
                    <FeedBlob
                        time="11:15"
                        location="画室"
                        content="我画不好...小红画得比我好..."
                        tags={['#情绪', '#挫折']}
                        insight="💡 挫折时刻。需要引导孩子关注过程而非结果。"
                        bg="bg-hot-pink/10"
                    />
                </div>
            </div>

            {/* Floating AI Chat Entry (Pop Style) */}
            <div className="fixed bottom-28 left-6 right-6 z-40">
                <button
                    onClick={onOpenChat}
                    className="w-full bg-super-black text-white font-extrabold rounded-full py-5 px-8 shadow-pop flex items-center justify-between active:scale-95 transition-transform group"
                >
                    <span className="flex items-center gap-3">
                        <span className="text-2xl group-hover:rotate-12 transition-transform">💬</span>
                        <span className="text-lg">和小星伴聊聊...</span>
                    </span>
                    <span className="bg-white/20 p-2 rounded-full">
                        🎙️
                    </span>
                </button>
            </div>
        </div>
    );
}

function TopicBlob({ label, count, color, onClick }: any) {
    return (
        <button onClick={onClick} className={`px-4 py-2 rounded-full text-sm font-extrabold flex items-center gap-2 shadow-sm transform hover:scale-105 transition-transform cursor-pointer ${color}`}>
            {label}
            <span className="opacity-60 text-xs">{count}</span>
        </button>
    );
}

function FeedBlob({ time, location, content, tags, insight, bg }: any) {
    return (
        <div className={`p-6 rounded-[2.5rem] ${bg} hover:shadow-md transition-all cursor-pointer`}>
            <div className="flex items-center gap-2 mb-3 opacity-60">
                <div className="w-2 h-2 rounded-full bg-super-black"></div>
                <span className="text-xs font-bold uppercase tracking-wide">{time} · {location}</span>
            </div>

            <p className="text-xl font-bold text-super-black leading-relaxed mb-4">
                "{content}"
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((t: string) => (
                    <span key={t} className="text-xs font-black bg-white/50 px-3 py-1 rounded-full text-super-black">
                        {t}
                    </span>
                ))}
            </div>

            <div className="text-sm font-bold text-soft-gray border-t border-black/5 pt-3 mt-2">
                {insight}
            </div>
        </div>
    );
}
