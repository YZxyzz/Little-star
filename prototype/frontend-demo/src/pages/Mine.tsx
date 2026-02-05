interface MineProps {
    onNavigateToMember: () => void;
    onNavigateToDevice: () => void;
}

export default function Mine({ onNavigateToMember, onNavigateToDevice }: MineProps) {
    return (
        <div className="min-h-screen bg-soft-gray/5 text-super-black pb-32">

            {/* Header / Profile Card */}
            <div className="bg-white p-6 pb-8 rounded-b-[2.5rem] shadow-sm mb-6">
                <div className="flex items-center justify-between mb-8 pt-8">
                    <h1 className="text-3xl font-black">我的</h1>
                    <button className="w-10 h-10 rounded-full bg-soft-gray/5 flex items-center justify-center text-xl hover:bg-soft-gray/10 transition-colors">
                        ⚙️
                    </button>
                </div>

                <div className="flex items-center gap-5">
                    <div className="w-20 h-20 rounded-full bg-sunshine-yellow border-4 border-white shadow-md overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-4xl">👦</div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-black mb-1">小明</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-extra-bold bg-super-black text-white px-2 py-1 rounded-md">
                                4岁 · 男孩
                            </span>
                            <span className="text-xs font-bold text-soft-gray">
                                已陪伴 128 天
                            </span>
                        </div>
                    </div>
                </div>

                {/* Member Banner */}
                <div onClick={onNavigateToMember} className="mt-8 bg-super-black rounded-2xl p-4 flex items-center justify-between text-white relative overflow-hidden cursor-pointer group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-hot-pink to-lilac opacity-50 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500"></div>

                    <div className="relative z-10 flex flex-col">
                        <span className="text-xs font-bold text-sunshine-yellow mb-1">升级会员解锁更多功能</span>
                        <span className="text-lg font-black tracking-wide">Little Star Plus+</span>
                    </div>

                    <button className="relative z-10 bg-white text-super-black text-xs font-bold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
                        立即查看
                    </button>
                </div>
            </div>

            {/* Menu List */}
            <div className="px-6 space-y-4">
                <div className="bg-white rounded-[2rem] p-2">
                    <MenuItem icon="🧸" label="设备管理" sub="小星伴-8291" onClick={onNavigateToDevice} />
                    <MenuItem icon="👶" label="孩子档案" />
                </div>

                <div className="bg-white rounded-[2rem] p-2">
                    <MenuItem icon="📊" label="历史报告" />
                    <MenuItem icon="❤️" label="收藏建议" />
                </div>

                <div className="bg-white rounded-[2rem] p-2">
                    <MenuItem icon="📞" label="帮助与反馈" />
                    <MenuItem icon="📄" label="关于我们" />
                </div>
            </div>
        </div>
    );
}



function MenuItem({ icon, label, sub, onClick }: any) {
    return (
        <button onClick={onClick} className="w-full flex items-center justify-between p-4 hover:bg-soft-gray/5 rounded-2xl transition-colors group">
            <div className="flex items-center gap-4">
                <span className="text-xl w-8 text-center group-hover:scale-110 transition-transform">{icon}</span>
                <span className="font-bold text-lg text-super-black">{label}</span>
            </div>
            <div className="flex items-center gap-2">
                {sub && <span className="text-xs font-bold text-soft-gray">{sub}</span>}
                <span className="text-soft-gray opacity-30 text-sm font-black">ᐳ</span>
            </div>
        </button>
    );
}
