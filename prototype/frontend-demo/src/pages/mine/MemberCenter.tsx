import { ChevronLeft, CheckCircle2, ShieldCheck, Crown } from 'lucide-react';

export default function MemberCenter({ onBack }: { onBack: () => void }) {
    return (
        <div className="min-h-screen bg-super-black text-white selection:bg-hot-pink font-sans">
            {/* Navbar */}
            <div className="sticky top-0 bg-black/90 backdrop-blur-md px-6 py-4 flex items-center justify-between z-40">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <span className="text-lg font-black flex items-center gap-2">
                    <Crown size={20} className="text-sunshine-yellow" /> 会员中心
                </span>
                <div className="w-10" />
            </div>

            <div className="px-6 pb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">

                {/* Header ROI */}
                <div className="text-center py-8">
                    <h1 className="text-3xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-sunshine-yellow to-hot-pink">
                        解锁完整的 AI 陪伴
                    </h1>
                    <p className="text-white/60 font-bold text-sm">
                        每天不到 1 元钱，给孩子请一位“懂他”的 AI 伙伴
                    </p>
                </div>

                {/* Plans */}
                <div className="space-y-4 mb-10">
                    <PlanCard
                        title="年度会员"
                        price="298"
                        period="年"
                        badge="最超值"
                        highlight
                        description="含全年无限 4G 流量"
                    />
                    <PlanCard
                        title="月度会员"
                        price="35"
                        period="月"
                    />
                </div>

                {/* Benefits */}
                <div className="bg-white/5 rounded-[2rem] p-6 border border-white/10">
                    <BenefitItem text="无限次 AI 对话陪伴 (免流量)" />
                    <BenefitItem text="每日生成深度成长报告" />
                    <BenefitItem text="解锁全部 500+ 互动故事库" />
                    <BenefitItem text="专家级育儿指导建议" />
                </div>

                {/* Trust */}
                < div className="mt-8 flex justify-center items-center gap-2 text-white/30 text-xs font-bold">
                    <ShieldCheck size={14} /> 7天无理由退款 · 随时取消自动续费
                </div>

            </div>

            {/* Fixed CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <button className="w-full bg-sunshine-yellow text-super-black font-black text-lg py-5 rounded-[2rem] shadow-[0_0_30px_rgba(253,224,71,0.3)] active:scale-95 transition-transform">
                    立即开通
                </button>
            </div>
        </div>
    );
}

function PlanCard({ title, price, period, badge, highlight, description }: any) {
    return (
        <div className={`relative p-6 rounded-[2rem] border-2 transition-transform hover:scale-105 cursor-pointer flex justify-between items-center
            ${highlight ? 'bg-white/10 border-sunshine-yellow' : 'bg-transparent border-white/10'}`}>

            {badge && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-sunshine-yellow to-hot-pink text-super-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    {badge}
                </div>
            )}

            <div>
                <h3 className="text-lg font-bold mb-1">{title}</h3>
                {description && <div className="text-xs text-white/80 font-bold mb-1">{description}</div>}
                {highlight && <div className="text-xs text-sunshine-yellow font-bold">限时 8 折</div>}
            </div>

            <div className="flex items-end gap-1">
                <span className="text-sm font-bold opacity-60">¥</span>
                <span className="text-4xl font-black">{price}</span>
                <span className="text-sm font-bold opacity-60">/{period}</span>
            </div>
        </div>
    );
}

function BenefitItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
            <CheckCircle2 size={20} className="text-fresh-green shrink-0" />
            <span className="font-bold text-white/90">{text}</span>
        </div>
    );
}
