

interface QuickActionProps {
    icon: string;
    label: string;
    subLabel?: string;
    onClick?: () => void;
}

export function QuickAction({ icon, label, subLabel, onClick }: QuickActionProps) {
    return (
        <button
            onClick={onClick}
            className="flex-shrink-0 flex flex-col items-center justify-center p-4 bg-white border-2 border-super-black/5 rounded-2xl shadow-sm active:scale-95 transition-transform cursor-pointer min-w-[100px]"
        >
            <span className="text-3xl mb-2">{icon}</span>
            <span className="text-sm font-black text-super-black">{label}</span>
            {subLabel && <span className="text-xs text-soft-gray mt-1">{subLabel}</span>}
        </button>
    )
}
