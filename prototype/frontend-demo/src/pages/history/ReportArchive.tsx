import { ChevronLeft } from 'lucide-react';

export default function ReportArchive({ onBack }: { onBack: () => void }) {
    // Mock Data for Archive
    const reports = [
        { id: 1, date: '2月5日', week: '周三', mood: '😊', summary: '恐龙探索日', tags: ['恐龙', '好奇心'] },
        { id: 2, date: '2月4日', week: '周二', mood: '😐', summary: '积木搭高高', tags: ['专注力', '积木'] },
        { id: 3, date: '2月3日', week: '周一', mood: '😢', summary: '幼儿园分离焦虑', tags: ['情绪', '分离'] },
        { id: 4, date: '2月2日', week: '周日', mood: '🌟', summary: '公园大冒险', tags: ['运动', '社交'] },
        { id: 5, date: '2月1日', week: '周六', mood: '😊', summary: '家庭阅读时光', tags: ['阅读', '亲子'] },
    ];

    return (
        <div className="min-h-screen bg-white text-super-black">
            {/* Navbar */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md px-6 py-4 flex items-center justify-start gap-4 z-40 border-b border-black/5">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-soft-gray/5 flex items-center justify-center hover:bg-soft-gray/10 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <span className="text-xl font-black text-super-black">历史档案</span>
            </div>

            <div className="p-6 pb-32">
                <div className="space-y-4">
                    {reports.map((report) => (
                        <div key={report.id} className="flex items-center gap-4 p-4 bg-soft-gray/5 rounded-2xl border border-transparent hover:border-black/5 active:scale-[0.98] transition-all cursor-pointer">
                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm">
                                {report.mood}
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-black text-super-black">{report.date}</h3>
                                    <span className="text-xs font-bold text-soft-gray">{report.week}</span>
                                </div>
                                <p className="text-sm font-bold text-super-black/80">{report.summary}</p>
                                <div className="flex gap-2 mt-2">
                                    {report.tags.map(tag => (
                                        <span key={tag} className="text-[10px] bg-white px-2 py-0.5 rounded-md text-soft-gray border border-black/5">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs font-bold text-soft-gray">已显示最近 5 条记录</p>
                </div>
            </div>
        </div>
    );
}
