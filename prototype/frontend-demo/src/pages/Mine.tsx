export default function Mine() {
    return (
        <div className="px-5 pt-8 pb-32">
            <h1 className="text-2xl font-extrabold text-ink mb-6 px-2">我的</h1>

            {/* Profile Card */}
            <div className="card-soft p-6 flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-star flex items-center justify-center text-3xl border-4 border-white shadow-sm">
                    👩
                </div>
                <div>
                    <h2 className="text-xl font-extrabold text-ink">妈妈</h2>
                    <p className="text-subtext text-sm">138****8888</p>
                </div>
            </div>

            {/* Sections */}
            <div className="space-y-6">
                <Section title="👶 孩子管理">
                    <MenuItem title="小明" subtitle="4岁 · 已绑定设备" badge="在线" />
                </Section>

                <Section title="⚙️ 设备管理">
                    <MenuItem title="小星伴-8291" subtitle="固件 v1.0.2" rightText="电量 80%" />
                    <MenuItem title="流量管理" subtitle="剩余 2.4GB" />
                </Section>

                <Section title="设置">
                    <MenuItem title="通知设置" />
                    <MenuItem title="隐私设置" />
                    <MenuItem title="帮助与反馈" />
                </Section>
            </div>
        </div>
    );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div>
            <h3 className="font-bold text-subtext text-sm mb-3 px-2">{title}</h3>
            <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
                {children}
            </div>
        </div>
    );
}

function MenuItem({ title, subtitle, rightText, badge }: any) {
    return (
        <div className="p-4 flex justify-between items-center border-b border-black/5 last:border-none active:bg-gray-50 transition-colors cursor-pointer">
            <div>
                <div className="font-bold text-ink flex items-center gap-2">
                    {title}
                    {badge && <span className="px-2 py-0.5 bg-soft-green text-white text-xs rounded-full">{badge}</span>}
                </div>
                {subtitle && <div className="text-xs text-subtext mt-0.5">{subtitle}</div>}
            </div>
            <div className="flex items-center gap-2">
                {rightText && <span className="text-sm text-subtext font-bold">{rightText}</span>}
                <span className="text-subtext/50">›</span>
            </div>
        </div>
    );
}
