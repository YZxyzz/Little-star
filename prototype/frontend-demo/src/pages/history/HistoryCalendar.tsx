import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HistoryCalendar({ onBack, onNavigateToReport }: { onBack: () => void, onNavigateToReport: () => void }) {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Mock Data for Calendar
    const moodHistory: Record<string, string> = {
        '2026-02-01': '😊',
        '2026-02-02': '🥰',
        '2026-02-03': '😢',
        '2026-02-04': '🌤️',
        '2026-02-05': '🌟', // Today
    };

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const totalDays = daysInMonth(year, month);
    const startDay = firstDayOfMonth(year, month);

    const days = Array.from({ length: totalDays }, (_, i) => i + 1);
    const blanks = Array.from({ length: startDay }, (_, i) => i);

    const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    return (
        <div className="min-h-screen bg-white text-super-black">
            {/* Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md px-6 py-4 flex items-center justify-between z-40">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-soft-gray/5 flex items-center justify-center hover:bg-soft-gray/10 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <div className="flex items-center gap-2">
                    <span className="text-xl font-black">{year}年 {month + 1}月</span>
                </div>
                <div className="w-10"></div> {/* Spacer */}
            </div>

            {/* Calendar Controls */}
            <div className="px-6 mb-4 flex justify-between items-center">
                <button onClick={prevMonth} className="p-2 rounded-full hover:bg-black/5"><ChevronLeft /></button>
                <span className="font-bold text-soft-gray">成长足迹</span>
                <button onClick={nextMonth} className="p-2 rounded-full hover:bg-black/5"><ChevronRight /></button>
            </div>

            {/* Calendar Grid */}
            <div className="px-6 pb-12">
                {/* Weekday Headers */}
                <div className="grid grid-cols-7 mb-4">
                    {['日', '一', '二', '三', '四', '五', '六'].map(d => (
                        <div key={d} className="text-center text-xs font-bold text-soft-gray/50">{d}</div>
                    ))}
                </div>

                {/* Days */}
                <div className="grid grid-cols-7 gap-y-6 gap-x-2">
                    {blanks.map((_, i) => <div key={`blank-${i}`} />)}

                    {days.map(day => {
                        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                        const mood = moodHistory[dateStr];
                        const isToday = day === 5 && month === 1; // Simulation for Feb 5th

                        return (
                            <button
                                key={day}
                                onClick={mood ? onNavigateToReport : undefined}
                                className={`flex flex-col items-center gap-1 relative group ${!mood ? 'opacity-30 cursor-default' : 'cursor-pointer'}`}
                            >
                                {/* Date Number */}
                                <span className={`text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full ${isToday ? 'bg-super-black text-white' : 'text-super-black'}`}>
                                    {day}
                                </span>

                                {/* Mood Bubble */}
                                {mood ? (
                                    <div className="w-10 h-10 rounded-2xl bg-soft-gray/10 flex items-center justify-center text-xl shadow-sm border-2 border-transparent group-hover:border-hot-pink transition-all">
                                        {mood}
                                    </div>
                                ) : (
                                    <div className="w-10 h-10 rounded-2xl border-2 border-dashed border-soft-gray/20"></div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Stats Summary */}
            <div className="px-6">
                <div className="bg-gradient-to-br from-soft-gray/5 to-soft-gray/10 rounded-[2rem] p-6 flex justify-between items-center">
                    <div>
                        <div className="text-xs font-bold text-soft-gray mb-1 uppercase tracking-wider">本月陪伴</div>
                        <div className="text-3xl font-black text-super-black">128 <span className="text-sm font-bold">小时</span></div>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm">
                        🏆
                    </div>
                </div>
            </div>
        </div>
    );
}
