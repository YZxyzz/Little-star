import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export default function Login({ onLoginSuccess }: { onLoginSuccess: () => void }) {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [countdown, setCountdown] = useState(0);

    // Format phone number
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 11);
        setPhone(value);
    };

    // Countdown timer logic
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const sendCode = () => {
        if (phone.length === 11) {
            setCountdown(60);
            // Simulate code arrival
            setTimeout(() => setCode('123456'), 1500);
        }
    };

    const handleLogin = () => {
        if (phone.length === 11 && code.length >= 4 && agreed) {
            onLoginSuccess();
        }
    };

    const isReady = phone.length === 11 && code.length >= 4 && agreed;

    return (
        <div className="min-h-screen bg-white text-super-black p-8 pt-12 flex flex-col relative overflow-hidden">
            {/* Back Button (Placeholder, maybe redundant if typical flow) */}

            {/* Header */}
            <div className="mt-10 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="text-6xl mb-4">⭐</div>
                <h1 className="text-3xl font-black mb-2">欢迎回来</h1>
                <p className="text-soft-gray font-bold">使用手机号快速登录小星伴</p>
            </div>

            {/* Form */}
            <div className="space-y-6 flex-1 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                {/* Phone Input */}
                <div className="bg-soft-gray/5 rounded-[1.5rem] p-4 flex items-center gap-3 border border-transparent focus-within:border-black/10 transition-colors">
                    <span className="font-black text-lg">+86</span>
                    <div className="w-px h-6 bg-black/10"></div>
                    <input
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="请输入手机号"
                        className="bg-transparent flex-1 font-bold text-xl outline-none placeholder:text-soft-gray/30"
                    />
                </div>

                {/* Code Input */}
                <div className="flex gap-3">
                    <div className="bg-soft-gray/5 rounded-[1.5rem] p-4 flex-1 border border-transparent focus-within:border-black/10 transition-colors">
                        <input
                            type="number"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="验证码"
                            className="bg-transparent w-full font-bold text-xl outline-none placeholder:text-soft-gray/30"
                        />
                    </div>
                    <button
                        onClick={sendCode}
                        disabled={phone.length !== 11 || countdown > 0}
                        className={`px-6 rounded-[1.5rem] font-bold text-sm whitespace-nowrap transition-colors
                            ${phone.length === 11 && countdown === 0
                                ? 'bg-black text-white shadow-pop active:scale-95'
                                : 'bg-soft-gray/10 text-soft-gray brightness-90'}`}
                    >
                        {countdown > 0 ? `${countdown}s` : '获取验证码'}
                    </button>
                </div>

                {/* Login Button */}
                <button
                    onClick={handleLogin}
                    disabled={!isReady}
                    className={`w-full py-5 rounded-[2rem] font-black text-lg shadow-pop transition-all duration-300 mt-8
                        ${isReady
                            ? 'bg-hot-pink text-white hover:brightness-110 active:scale-95'
                            : 'bg-soft-gray/20 text-soft-gray/50 cursor-not-allowed shadow-none'}`}
                >
                    登录 / 注册
                </button>

                {/* Agreement */}
                <div className="flex items-start gap-3 mt-6 px-2">
                    <button
                        onClick={() => setAgreed(!agreed)}
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors
                            ${agreed ? 'bg-black border-black text-white' : 'border-soft-gray/30 text-transparent'}`}
                    >
                        <Check size={12} strokeWidth={4} />
                    </button>
                    <p className="text-xs font-bold text-soft-gray leading-relaxed">
                        我已阅读并同意
                        <span className="text-super-black mx-1">《用户协议》</span>
                        和
                        <span className="text-super-black mx-1">《隐私政策》</span>
                    </p>
                </div>
            </div>

            {/* Social Login */}
            <div className="mt-auto pt-8">
                <div className="relative flex justify-center text-xs font-bold text-soft-gray/50 mb-6">
                    <span className="bg-white px-2 relative z-10">其他方式登录</span>
                    <div className="absolute top-1/2 left-10 right-10 h-px bg-black/5 -z-0"></div>
                </div>

                <div className="flex justify-center gap-6">
                    <button className="w-12 h-12 rounded-full border-2 border-black/5 flex items-center justify-center text-2xl hover:bg-soft-gray/5 transition-colors">
                        💬
                    </button>
                </div>
            </div>
        </div>
    );
}
