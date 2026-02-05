import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Welcome({ onStart }: { onStart: () => void }) {
    const [step, setStep] = useState(0);

    const slides = [
        {
            icon: "🎧",
            title: "听懂孩子的心声",
            desc: "AI 深度分析每一次对话，捕捉孩子的情绪变化与兴趣萌芽。",
            color: "bg-sky-blue"
        },
        {
            icon: "💡",
            title: "科学育儿建议",
            desc: "不再不知所措。基于儿童心理学的互动策略，教你如何高质量陪伴。",
            color: "bg-sunshine-yellow"
        },
        {
            icon: "📝",
            title: "记录成长轨迹",
            desc: "自动生成成长报告与精彩瞬间，留住每一个珍贵的童年回忆。",
            color: "bg-hot-pink"
        }
    ];

    const nextStep = () => {
        if (step < slides.length - 1) {
            setStep(step + 1);
        } else {
            onStart();
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-between p-8 pt-20 pb-12 relative overflow-hidden">
            {/* Background Blob */}
            <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 transition-colors duration-500 ${slides[step].color}`}></div>

            {/* Content */}
            <div className="z-10 flex-1 flex flex-col justify-center items-center text-center">
                <div className="mb-10 text-8xl filter drop-shadow-md transition-transform duration-500 hover:scale-110">
                    {slides[step].icon}
                </div>

                <h2 className="text-3xl font-black text-super-black mb-6 leading-tight">
                    {slides[step].title}
                </h2>

                <p className="text-super-black/70 font-bold leading-relaxed max-w-xs">
                    {slides[step].desc}
                </p>
            </div>

            {/* Controls */}
            <div className="z-10 w-full">
                {/* Indicators */}
                <div className="flex justify-center gap-2 mb-8">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-super-black' : 'w-2 bg-black/10'}`}
                        ></div>
                    ))}
                </div>

                {/* Button */}
                <button
                    onClick={nextStep}
                    className="w-full bg-super-black text-white font-black text-lg py-5 rounded-[2rem] shadow-pop active:scale-95 transition-transform flex items-center justify-center gap-2 group"
                >
                    {step === slides.length - 1 ? '开始使用' : '下一步'}
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}
