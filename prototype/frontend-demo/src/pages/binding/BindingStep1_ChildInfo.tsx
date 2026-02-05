import { useState } from 'react';
import BindingLayout from './BindingLayout';
import { Camera } from 'lucide-react';

export default function BindingStep1_ChildInfo({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    const [nickname, setNickname] = useState('');
    const [gender, setGender] = useState<'boy' | 'girl' | null>(null);
    const [birthday, setBirthday] = useState('');

    const isValid = nickname.length > 0 && gender !== null && birthday.length > 0;

    return (
        <BindingLayout
            currentStep={1}
            totalSteps={5}
            title="告诉我们关于孩子的信息"
            onBack={onBack}
        >
            <p className="text-soft-gray font-bold mb-8">
                这些信息帮助 AI 更好地理解您的孩子，提供个性化的成长建议。
            </p>

            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-soft-gray/5 border-2 border-dashed border-black/10 flex flex-col items-center justify-center text-soft-gray relative overflow-hidden group hover:bg-soft-gray/10 transition-colors cursor-pointer">
                        <Camera size={24} className="mb-1" />
                        <span className="text-[10px] font-bold uppercase">Upload</span>
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                </div>

                {/* Nickname */}
                <div className="space-y-2">
                    <label className="text-sm font-black text-super-black ml-1">孩子昵称 *</label>
                    <input
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="例如：小明、宝贝"
                        className="w-full bg-soft-gray/5 rounded-[1.5rem] px-5 py-4 font-bold text-super-black outline-none focus:ring-2 focus:ring-black/5 transition-all"
                    />
                </div>

                {/* Gender */}
                <div className="space-y-2">
                    <label className="text-sm font-black text-super-black ml-1">性别 *</label>
                    <div className="flex gap-4">
                        <GenderButton
                            label="👦 男孩"
                            selected={gender === 'boy'}
                            onClick={() => setGender('boy')}
                        />
                        <GenderButton
                            label="👧 女孩"
                            selected={gender === 'girl'}
                            onClick={() => setGender('girl')}
                        />
                    </div>
                </div>

                {/* Birthday */}
                <div className="space-y-2">
                    <label className="text-sm font-black text-super-black ml-1">生日 *</label>
                    <input
                        type="date"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        className="w-full bg-soft-gray/5 rounded-[1.5rem] px-5 py-4 font-bold text-super-black outline-none focus:ring-2 focus:ring-black/5 transition-all appearance-none"
                    />
                </div>
            </div>

            {/* Footer Action */}
            <div className="mt-auto pt-8">
                <button
                    onClick={onNext}
                    disabled={!isValid}
                    className={`w-full py-5 rounded-[2rem] font-black text-lg shadow-pop transition-all duration-300
                        ${isValid
                            ? 'bg-super-black text-white active:scale-95'
                            : 'bg-soft-gray/20 text-soft-gray/50 cursor-not-allowed shadow-none'}`}
                >
                    下 一 步
                </button>
            </div>
        </BindingLayout>
    );
}

function GenderButton({ label, selected, onClick }: { label: string, selected: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`flex-1 py-4 rounded-[1.5rem] font-black transition-all duration-300 border-2
                ${selected
                    ? 'bg-black text-white border-black transform scale-105 shadow-md'
                    : 'bg-white text-soft-gray border-soft-gray/10 hover:border-black/10'}`}
        >
            {label}
        </button>
    );
}
