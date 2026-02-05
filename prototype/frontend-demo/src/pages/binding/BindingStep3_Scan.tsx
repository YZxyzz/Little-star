import { useState, useEffect } from 'react';
import BindingLayout from './BindingLayout';
import { RefreshCw, Wifi, Battery } from 'lucide-react';

export default function BindingStep3_Scan({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    const [scanning, setScanning] = useState(true);

    useEffect(() => {
        // Simulate scanning delay
        const timer = setTimeout(() => {
            setScanning(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const handleRescan = () => {
        setScanning(true);
        setTimeout(() => {
            setScanning(false);
        }, 2500);
    };

    return (
        <BindingLayout
            currentStep={3}
            totalSteps={5}
            title={scanning ? "正在搜索小星伴..." : "发现新设备"}
            onBack={onBack}
        >
            <div className="flex-1 flex flex-col items-center">

                {/* Radar Animation Area */}
                <div className="relative w-72 h-72 mb-8 flex items-center justify-center">
                    {scanning ? (
                        <>
                            <div className="absolute inset-0 border-4 border-sunshine-yellow/20 rounded-full animate-ping duration-1000"></div>
                            <div className="absolute inset-12 border-4 border-sunshine-yellow/40 rounded-full animate-ping duration-1000 delay-300"></div>
                            <div className="text-6xl animate-bounce z-10">🕵️‍♀️</div>
                        </>
                    ) : (
                        <div className="relative z-10 w-full animate-in zoom-in duration-500">
                            {/* Device Card */}
                            <div className="bg-white border-4 border-super-black rounded-[2.5rem] p-6 shadow-pop text-left relative overflow-hidden group hover:scale-105 transition-transform cursor-pointer" onClick={onNext}>
                                <div className="absolute top-0 right-0 w-24 h-24 bg-sunshine-yellow/20 rounded-full -mr-8 -mt-8"></div>

                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-4xl">
                                        ⭐
                                    </div>
                                    <div className="px-3 py-1 bg-fresh-green/10 text-fresh-green text-xs font-black rounded-full uppercase tracking-wider">
                                        Ready to Pair
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black text-super-black mb-1">小星伴-8291</h3>
                                <div className="flex gap-4 text-xs font-bold text-soft-gray">
                                    <span className="flex items-center gap-1"><Wifi size={14} /> 信号极佳</span>
                                    <span className="flex items-center gap-1"><Battery size={14} /> 85%</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Status Text */}
                <p className="text-soft-gray font-bold mb-10 animate-pulse">
                    {scanning ? "请保持手机靠近设备..." : "点击上方卡片进行连接"}
                </p>

                {/* Action */}
                {!scanning && (
                    <button
                        onClick={onNext}
                        className="w-full bg-super-black text-white font-black text-lg py-5 rounded-[2rem] shadow-pop active:scale-95 transition-transform"
                    >
                        连 接 此 设 备
                    </button>
                )}

                {/* Help / Rescan */}
                <div className="mt-auto pb-4">
                    {!scanning ? (
                        <button onClick={handleRescan} className="text-sm font-bold text-soft-gray flex items-center gap-2 hover:text-super-black transition-colors">
                            <RefreshCw size={14} /> 重新扫描
                        </button>
                    ) : (
                        <span className="text-sm font-bold text-soft-gray/50">正在寻找附近的蓝牙设备</span>
                    )}
                </div>

            </div>
        </BindingLayout>
    );
}
