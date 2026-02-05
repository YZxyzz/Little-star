import { useEffect } from 'react';

export default function ActivationSuccess({ onFinish }: { onFinish: () => void }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 4000);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="min-h-screen bg-super-black text-white flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90 z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sunshine-yellow/10 rounded-full blur-[100px] animate-pulse z-0"></div>

            {/* Animation Container */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Phase 1: Star Burst (CSS Animation) */}
                <div className="text-8xl mb-8 animate-[bounce_2s_infinite]">
                    ⭐
                </div>

                {/* Phase 2: Success Text */}
                <h1 className="text-4xl font-black mb-4 animate-in fade-in zoom-in duration-700 delay-300">
                    激活成功！
                </h1>

                {/* Phase 3: Message */}
                <div className="text-center space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 opacity-0 fill-mode-forwards">
                    <p className="text-xl font-bold text-white/90">
                        小星伴已准备好陪伴 <span className="text-sunshine-yellow">小明</span>
                    </p>
                    <p className="text-white/50 font-bold text-sm">
                        开启您的亲子成长记录之旅吧～
                    </p>
                </div>

                {/* Phase 4: Button (Optional, auto redirects) */}
                <div className="mt-12 opacity-0 animate-[fadeIn_1s_ease-out_2.5s_forwards]">
                    <button
                        onClick={onFinish}
                        className="border border-white/20 bg-white/10 text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transition-colors"
                    >
                        开始探索
                    </button>
                </div>
            </div>

            {/* Falling Stars (Decor) */}
            <div className="absolute top-10 left-10 text-yellow-400 text-xl animate-pulse">✨</div>
            <div className="absolute top-40 right-20 text-yellow-400 text-lg animate-pulse delay-500">✨</div>
            <div className="absolute bottom-20 left-1/2 text-yellow-400 text-2xl animate-pulse delay-1000">✨</div>
        </div>
    );
}
