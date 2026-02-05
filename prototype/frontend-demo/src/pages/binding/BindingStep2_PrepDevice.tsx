import BindingLayout from './BindingLayout';

export default function BindingStep2_PrepDevice({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    return (
        <BindingLayout
            currentStep={2}
            totalSteps={5}
            title="准备您的小星伴"
            onBack={onBack}
        >
            <div className="flex-1 flex flex-col items-center">

                {/* Device Animation */}
                <div className="relative w-64 h-64 mb-8 flex items-center justify-center">
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 bg-sky-blue/10 rounded-full animate-ping opacity-75 duration-3000"></div>
                    <div className="absolute inset-4 bg-sky-blue/5 rounded-full animate-ping opacity-50 delay-700 duration-3000"></div>

                    {/* Device Mockup */}
                    <div className="relative z-10 w-40 h-56 bg-white border-4 border-black/5 rounded-[3rem] shadow-xl flex flex-col items-center pt-8 overflow-hidden">
                        <div className="text-5xl mb-4">⭐</div>
                        {/* Power Button Indicator */}
                        <div className="absolute bottom-6 w-8 h-8 rounded-full border-2 border-dashed border-sky-blue animate-pulse flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-sky-blue"></div>
                        </div>
                    </div>

                    {/* Finger Hint */}
                    <div className="absolute bottom-10 right-16 text-4xl animate-bounce" style={{ animationDuration: '2s' }}>
                        👆
                    </div>
                </div>

                {/* Instructions */}
                <div className="w-full space-y-6 px-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                    <InstructionItem
                        step="1"
                        text="找到设备底部的电源开关"
                    />
                    <InstructionItem
                        step="2"
                        text="长按开关 3 秒，直到指示灯亮起"
                        highlight
                    />
                    <InstructionItem
                        step="3"
                        text="确保设备在蓝色灯光闪烁状态"
                    />
                </div>

                {/* Footer Action */}
                <div className="mt-auto w-full pt-8">
                    <button
                        onClick={onNext}
                        className="w-full bg-super-black text-white font-black text-lg py-5 rounded-[2rem] shadow-pop active:scale-95 transition-transform"
                    >
                        设备已就绪，开始扫描
                    </button>
                    <div className="text-center mt-4">
                        <button className="text-xs font-bold text-soft-gray underline">
                            设备无法开机？查看帮助
                        </button>
                    </div>
                </div>
            </div>
        </BindingLayout>
    );
}

function InstructionItem({ step, text, highlight }: { step: string, text: string, highlight?: boolean }) {
    return (
        <div className={`flex items-start gap-4 p-4 rounded-[1.5rem] transition-colors ${highlight ? 'bg-sky-blue/10 border border-sky-blue/20' : 'bg-transparent'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm shrink-0
                ${highlight ? 'bg-sky-blue text-white' : 'bg-soft-gray/10 text-soft-gray'}`}>
                {step}
            </div>
            <p className={`font-bold text-lg pt-0.5 ${highlight ? 'text-super-black' : 'text-super-black/80'}`}>
                {text}
            </p>
        </div>
    );
}
