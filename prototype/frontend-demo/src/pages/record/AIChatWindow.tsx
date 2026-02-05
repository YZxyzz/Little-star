import { useState } from 'react';
import { ChevronLeft, Send, Mic, Sparkles } from 'lucide-react';

export default function AIChatWindow({ onBack }: { onBack: () => void }) {
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'ai',
            content: '🌟 嗨！我是小星伴，小明的专属AI助手！\n\n我了解小明的所有对话记录，你可以问我：\n• 他最近对什么感兴趣？\n• 他和谁玩得最好？\n• 我该怎么和他聊某个话题？'
        }
    ]);
    const [inputValue, setInputValue] = useState('');

    const suggestions = [
        "小明最近对什么最感兴趣？",
        "他和小红关系怎么样？",
        "如何引导他分享幼儿园的事？"
    ];

    const handleSend = () => {
        if (!inputValue.trim()) return;

        // Add user message
        const userMsg = { id: Date.now(), type: 'user', content: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');

        // Simulate AI Response (Mock)
        setTimeout(() => {
            const aiMsg = {
                id: Date.now() + 1,
                type: 'ai',
                content: '🤖 收到你的问题啦！这只是一个演示回复。\n\n在真实版本中，我会根据小明的数据库来深度分析并回答你哦！'
            };
            setMessages(prev => [...prev, aiMsg]);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans text-super-black">
            {/* Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md px-4 py-3 flex items-center gap-3 border-b border-black/5 z-40">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-soft-gray/5 flex items-center justify-center active:bg-soft-gray/10"
                >
                    <ChevronLeft size={24} />
                </button>
                <div className="flex flex-col">
                    <span className="font-black text-lg leading-none">小星伴 AI</span>
                    <span className="text-xs font-bold text-hot-pink flex items-center gap-1">
                        <Sparkles size={10} /> 在线 · 懂你的育儿助手
                    </span>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-32">
                {messages.map(msg => (
                    <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex gap-3 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            {/* Avatar */}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-black/5
                                ${msg.type === 'user' ? 'bg-black text-white' : 'bg-hot-pink text-white'}`}>
                                {msg.type === 'user' ? '我' : '🌟'}
                            </div>

                            {/* Bubble */}
                            <div className={`p-4 rounded-[1.5rem] text-sm font-bold leading-relaxed shadow-sm
                                ${msg.type === 'user'
                                    ? 'bg-black text-white rounded-tr-none'
                                    : 'bg-white border-2 border-black/5 text-super-black rounded-tl-none'
                                }`}>
                                <div className="whitespace-pre-line">{msg.content}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area (Fixed Bottom) */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/5 p-4 pb-8 safe-area-pb z-50">
                {/* Suggestions */}
                <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar pb-1">
                    {suggestions.map((s, i) => (
                        <button
                            key={i}
                            onClick={() => setInputValue(s)}
                            className="whitespace-nowrap px-4 py-2 bg-sunshine-yellow/10 text-super-black text-xs font-bold rounded-full border border-sunshine-yellow/30 active:scale-95 transition-transform"
                        >
                            {s}
                        </button>
                    ))}
                </div>

                {/* Input Bar */}
                <div className="flex items-center gap-3">
                    <button className="w-12 h-12 rounded-full bg-soft-gray/5 flex items-center justify-center text-super-black active:bg-soft-gray/10 transition-colors">
                        <Mic size={24} />
                    </button>
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="问问小星伴..."
                            className="w-full h-12 bg-soft-gray/5 rounded-full px-6 font-bold text-super-black placeholder:text-soft-gray/50 focus:outline-none focus:ring-2 focus:ring-hot-pink/20 transition-all"
                        />
                    </div>
                    <button
                        onClick={handleSend}
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-pop transition-all ${inputValue.trim() ? 'bg-black scale-100' : 'bg-soft-gray scale-90 opacity-50'}`}
                        disabled={!inputValue.trim()}
                    >
                        <Send size={20} className={inputValue.trim() ? "translate-x-0.5 translate-y-0.5" : ""} />
                    </button>
                </div>
            </div>
        </div>
    );
}
