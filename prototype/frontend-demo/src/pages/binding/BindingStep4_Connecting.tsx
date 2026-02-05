import { useState, useEffect } from 'react';
import BindingLayout from './BindingLayout';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function BindingStep4_Connecting({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    const [status, setStatus] = useState(0);
    // 0: Establishing, 1: Verifying, 2: Syncing, 3: Success

    useEffect(() => {
        const timelines = [1000, 2500, 4000, 5000];

        const t1 = setTimeout(() => setStatus(1), timelines[0]);
        const t2 = setTimeout(() => setStatus(2), timelines[1]);
        const t3 = setTimeout(() => setStatus(3), timelines[2]);
        const t4 = setTimeout(() => onNext(), timelines[3]);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, [onNext]);

    return (
        <BindingLayout
            currentStep={4}
            totalSteps={5}
            title="正在连接..."
            onBack={onBack}
            showBack={false} // Prevent back during connection
        >
            <div className="flex-1 flex flex-col items-center pt-8">

                {/* Connection Visual */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-black text-white flex items-center justify-center text-3xl shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                        📱
                    </div>

                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-super-black animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-super-black animate-bounce delay-100"></div>
                        <div className="w-2 h-2 rounded-full bg-super-black animate-bounce delay-200"></div>
                    </div>

                    <div className="w-20 h-20 rounded-[1.5rem] bg-sunshine-yellow text-white flex items-center justify-center text-3xl shadow-lg animate-bounce duration-1000">
                        ⭐
                    </div>
                </div>

                {/* Progress Steps */}
                <div className="w-full max-w-xs space-y-6">
                    <StatusItem label="正在建立蓝牙连接" state={status >= 0 ? (status > 0 ? 'done' : 'active') : 'pending'} />
                    <StatusItem label="正在验证设备信息" state={status >= 1 ? (status > 1 ? 'done' : 'active') : 'pending'} />
                    <StatusItem label="正在同步个性化配置" state={status >= 2 ? (status > 2 ? 'done' : 'active') : 'pending'} />
                </div>

                <p className="mt-auto text-sm font-bold text-soft-gray pb-4">
                    请不要关闭屏幕或退出应用
                </p>
            </div>
        </BindingLayout>
    );
}

function StatusItem({ label, state }: { label: string, state: 'pending' | 'active' | 'done' }) {
    return (
        <div className={`flex items-center gap-4 transition-all duration-500 ${state === 'pending' ? 'opacity-30' : 'opacity-100'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all
                ${state === 'done' ? 'bg-fresh-green border-fresh-green text-white' :
                    state === 'active' ? 'border-super-black text-super-black' : 'border-soft-gray text-soft-gray'}`}>
                {state === 'done' ? <CheckCircle2 size={16} strokeWidth={4} /> :
                    state === 'active' ? <Loader2 size={16} className="animate-spin" /> :
                        <div className="w-2 h-2 rounded-full bg-current"></div>}
            </div>
            <span className={`font-bold ${state === 'active' ? 'text-super-black scale-105' : 'text-super-black/80'}`}>
                {label}
            </span>
        </div>
    );
}
