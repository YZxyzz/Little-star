import { ChevronLeft, Battery, Wifi, Trash2 } from 'lucide-react';

export default function DeviceManager({ onBack }: { onBack: () => void }) {
    return (
        <div className="min-h-screen bg-white text-super-black">
            {/* Navbar */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md px-6 py-4 flex items-center gap-4 z-40 border-b border-black/5">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-soft-gray/5 flex items-center justify-center hover:bg-soft-gray/10 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <span className="text-lg font-black text-super-black">设备管理</span>
            </div>

            <div className="px-6 pt-6 pb-20">

                {/* Device Status Card */}
                <div className="bg-super-black text-white rounded-[2rem] p-6 mb-8 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

                    <div className="flex justify-between items-start mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl">
                            ⭐
                        </div>
                        <div className="px-3 py-1 bg-fresh-green text-super-black text-xs font-black rounded-full">
                            在线 Active
                        </div>
                    </div>

                    <h2 className="text-2xl font-black mb-4">小星伴-8291</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <StatusPill icon={<Battery size={16} />} label="85% 电量" />
                        <StatusPill icon={<Wifi size={16} />} label="信号极佳" />
                    </div>
                </div>

                {/* Settings List */}
                <h3 className="text-sm font-bold text-soft-gray uppercase mb-4 tracking-wider">设置</h3>
                <div className="bg-soft-gray/5 rounded-[2rem] overflow-hidden mb-8">
                    <SettingItem label="音量调节" value="50%" />
                    <SettingItem label="夜间模式" value="自动" />
                    <SettingItem label="自动休眠" value="10分钟无操作" />
                    <SettingItem label="固件版本" value="v2.1.0 (最新)" />
                </div>

                {/* Danger Zone */}
                <button className="w-full py-4 rounded-[1.5rem] bg-red-50 text-red-500 font-bold flex items-center justify-center gap-2 hover:bg-red-100 transition-colors">
                    <Trash2 size={18} /> 解除绑定
                </button>

            </div>
        </div>
    );
}

function StatusPill({ icon, label }: any) {
    return (
        <div className="bg-white/10 rounded-xl p-3 flex items-center gap-2 font-bold text-sm">
            {icon}
            {label}
        </div>
    );
}

function SettingItem({ label, value }: any) {
    return (
        <div className="flex justify-between items-center p-5 border-b border-black/5 last:border-0 hover:bg-black/5 transition-colors cursor-pointer">
            <span className="font-bold text-super-black">{label}</span>
            <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-soft-gray">{value}</span>
                <ChevronLeft size={16} className="rotate-180 text-soft-gray/50" />
            </div>
        </div>
    );
}
