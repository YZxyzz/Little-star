import { useEffect } from 'react';

export default function Splash({ onFinish }: { onFinish: () => void }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 2000);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-sunshine-yellow/10 to-hot-pink/10 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/4 -left-10 w-64 h-64 bg-sunshine-yellow/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-10 w-64 h-64 bg-hot-pink/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="z-10 flex flex-col items-center animate-in fade-in zoom-in duration-1000">
                <div className="text-8xl mb-6 filter drop-shadow-lg animate-bounce">
                    ⭐
                </div>
                <h1 className="text-4xl font-black text-super-black tracking-tighter mb-2">
                    小 星 伴
                </h1>
                <p className="text-sm font-bold text-soft-gray tracking-widest uppercase">
                    Little Star Companion
                </p>
            </div>

            <div className="absolute bottom-10 text-xs font-bold text-soft-gray/50">
                Design for Parents & Kids
            </div>
        </div>
    );
}
