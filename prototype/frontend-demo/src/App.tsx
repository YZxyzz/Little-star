import { useState } from 'react';
import Home from './pages/Home';
import ReportDetail from './pages/ReportDetail';

type ViewState = 'tab-view' | 'report-detail';
type TabState = 'home' | 'report' | 'message' | 'mine';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('tab-view');
  const [activeTab, setActiveTab] = useState<TabState>('home');

  const navigateToReport = () => setCurrentView('report-detail');
  const backToHome = () => setCurrentView('tab-view');

  if (currentView === 'report-detail') {
    return <ReportDetail onBack={backToHome} />;
  }

  return (
    <div className="min-h-screen bg-cream pb-[80px] text-ink selection:bg-star selection:text-ink">
      {/* Content Area */}
      <main className="max-w-md mx-auto min-h-screen bg-cream relative">
        {activeTab === 'home' && <Home onNavigateToReport={navigateToReport} />}
        {activeTab === 'report' && <div className="p-8 text-center text-subtext mt-20">📊 报告历史列表开发中...</div>}
        {activeTab === 'message' && <div className="p-8 text-center text-subtext mt-20">💬 消息列表开发中...</div>}
        {activeTab === 'mine' && <div className="p-8 text-center text-subtext mt-20">👤 个人中心开发中...</div>}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.02)] pb-safe pt-2 px-6 z-50 rounded-t-3xl">
        <div className="max-w-md mx-auto flex justify-between items-center h-[60px]">
          <TabButton
            active={activeTab === 'home'}
            onClick={() => setActiveTab('home')}
            icon="🏠"
            label="首页"
          />
          <TabButton
            active={activeTab === 'report'}
            onClick={() => setActiveTab('report')}
            icon="📊"
            label="报告"
          />
          <TabButton
            active={activeTab === 'message'}
            onClick={() => setActiveTab('message')}
            icon="💬"
            label="消息"
            badge={2}
          />
          <TabButton
            active={activeTab === 'mine'}
            onClick={() => setActiveTab('mine')}
            icon="👤"
            label="我的"
          />
        </div>
      </nav>
    </div>
  );
}

function TabButton({ active, onClick, icon, label, badge }: { active: boolean, onClick: () => void, icon: string, label: string, badge?: number }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-16 transition-all duration-300 ${active ? 'scale-110 -translate-y-1' : 'opacity-50 hover:opacity-100'}`}
    >
      <div className={`text-2xl mb-1 relative ${active ? 'filter drop-shadow-md' : ''}`}>
        {icon}
        {badge && (
          <span className="absolute -top-1 -right-2 bg-rose-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
            {badge}
          </span>
        )}
      </div>
      <span className={`text-xs font-bold ${active ? 'text-ink' : 'text-subtext'}`}>
        {label}
      </span>
    </button>
  );
}

export default App;
