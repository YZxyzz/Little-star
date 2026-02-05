import BindingLayout from './BindingLayout';
import { Check } from 'lucide-react';

export default function BindingStep5_Activation({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    return (
        <BindingLayout
            currentStep={5}
            totalSteps={5}
            title="即将完成！"
            onBack={onBack}
        >
            <div className="flex-1 flex flex-col justify-start pt-4">

                {/* Device Card */}
                <div className="bg-soft-gray/5 border-2 border-black/5 rounded-[2rem] p-6 mb-8 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-3xl shadow-md">
                        ⭐
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-super-black">小星伴-8291</h3>
                        <div className="flex gap-2 text-xs font-bold text-fresh-green mt-1">
                            <span className="flex items-center gap-1"><Check size={12} strokeWidth={4} /> 设备已连接</span>
                            <span className="flex items-center gap-1"><Check size={12} strokeWidth={4} /> 信息已同步</span>
                        </div>
                    </div>
                </div>

                {/* Capability List */}
                <h2 className="text-lg font-black text-super-black mb-4 px-2">
                    激活后，小星伴将开始：
                </h2>
                <div className="space-y-4 mb-8">
                    <FeatureItem
                        icon="🎧"
                        title="全天候陪伴对话"
                        desc="随时响应孩子的奇思妙想，不仅是玩具，更是伙伴。"
                    />
                    <FeatureItem
                        icon="📝"
                        title="自动记录成长点滴"
                        desc="无需手动录入，AI 自动生成每日成长日报。"
                    />
                    <FeatureItem
                        icon="💡"
                        title="生成科学育儿建议"
                        desc="通过专业分析，给您可执行的亲子互动锦囊。"
                    />
                </div>

                {/* Action */}
                <div className="mt-auto pt-6">
                    <button
                        onClick={onNext}
                        className="w-full bg-super-black text-white font-black text-lg py-5 rounded-[2rem] shadow-pop active:scale-95 transition-transform"
                    >
                        激 活 小 星 伴
                    </button>
                    <p className="text-center text-xs font-bold text-soft-gray mt-4 opacity-70">
                        点击即代表同意《设备使用协议》
                    </p>
                </div>

            </div>
        </BindingLayout>
    );
}

function FeatureItem({ icon, title, desc }: { icon: string, title: string, desc: string }) {
    return (
        <div className="flex gap-4 p-4 rounded-[1.5rem] bg-white border border-black/5 shadow-sm">
            <div className="text-2xl mt-1">{icon}</div>
            <div>
                <h3 className="font-bold text-super-black mb-1">{title}</h3>
                <p className="text-xs font-bold text-soft-gray leading-relaxed w-5/6">
                    {desc}
                </p>
            </div>
        </div>
    );
}
