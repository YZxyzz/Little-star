import BindingLayout from './BindingLayout';
import { Battery, Bluetooth, Smartphone } from 'lucide-react';

export default function BindingGuide({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    return (
        <BindingLayout onBack={onBack} showBack={true}>
            <div className="flex-1 flex flex-col items-center pt-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Visual */}
                <div className="relative w-48 h-48 mb-8">
                    <div className="absolute inset-0 bg-sunshine-yellow/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-white border-4 border-black/5 rounded-[3rem] shadow-sm">
                        <div className="text-6xl mb-2 animate-bounce">⭐</div>
                        <span className="text-xs font-bold text-soft-gray bg-soft-gray/5 px-3 py-1 rounded-full">等待连接...</span>
                    </div>
                </div>

                <h2 className="text-2xl font-black text-super-black mb-3">
                    让我们开始吧！
                </h2>
                <p className="text-soft-gray font-bold mb-10 px-4">
                    连接小星伴，开启孩子成长记录之旅。
                </p>

                {/* Checklist */}
                <div className="w-full bg-soft-gray/5 rounded-[2rem] p-6 mb-8 text-left space-y-4 border border-transparent hover:border-black/5 transition-colors">
                    <h3 className="font-black text-super-black mb-2">准备工作</h3>

                    <CheckItem icon={<Battery size={18} />} text="确保设备已开机并有电" />
                    <CheckItem icon={<Smartphone size={18} />} text="将设备放在手机旁边" />
                    <CheckItem icon={<Bluetooth size={18} />} text="确保手机蓝牙已开启" />
                </div>

                {/* Main Action */}
                <div className="mt-auto w-full space-y-4">
                    <button
                        onClick={onNext}
                        className="w-full bg-super-black text-white font-black text-lg py-5 rounded-[2rem] shadow-pop active:scale-95 transition-transform"
                    >
                        开 始 绑 定
                    </button>
                    <button
                        onClick={() => {/* Skip logic if needed */ }}
                        className="text-sm font-bold text-soft-gray active:opacity-60"
                    >
                        暂不绑定，稍后再说
                    </button>
                </div>
            </div>
        </BindingLayout>
    );
}

function CheckItem({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <div className="flex items-center gap-3 text-sm font-bold text-super-black/80">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-super-black shadow-sm shrink-0">
                {icon}
            </div>
            {text}
        </div>
    );
}
