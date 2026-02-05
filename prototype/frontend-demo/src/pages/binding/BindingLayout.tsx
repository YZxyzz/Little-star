import { ChevronLeft } from 'lucide-react';

interface BindingLayoutProps {
    children: React.ReactNode;
    currentStep?: number;
    totalSteps?: number;
    title?: string;
    onBack: () => void;
    showBack?: boolean;
}

export default function BindingLayout({
    children,
    currentStep = 0,
    totalSteps = 5,
    title,
    onBack,
    showBack = true
}: BindingLayoutProps) {
    return (
        <div className="min-h-screen bg-white text-super-black flex flex-col font-sans">
            {/* Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md px-6 py-4 flex items-center justify-between z-40">
                {showBack ? (
                    <button
                        onClick={onBack}
                        className="w-10 h-10 rounded-full bg-soft-gray/5 flex items-center justify-center hover:bg-soft-gray/10 transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                ) : <div className="w-10" />}

                {currentStep > 0 && (
                    <span className="text-sm font-bold text-soft-gray">
                        Step {currentStep}/{totalSteps}
                    </span>
                )}

                <div className="w-10" /> {/* Spacer */}
            </div>

            {/* Progress Bar */}
            {currentStep > 0 && (
                <div className="px-6 mb-6">
                    <div className="h-1.5 bg-soft-gray/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-hot-pink transition-all duration-500 ease-out"
                            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        ></div>
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="flex-1 px-6 pb-12 flex flex-col relative">
                {title && (
                    <h1 className="text-2xl font-black mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        {title}
                    </h1>
                )}
                {children}
            </div>
        </div>
    );
}
