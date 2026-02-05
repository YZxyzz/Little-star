import { useState } from 'react';
import Home from './pages/Home';
import Record from './pages/Record'; // New
import Mine from './pages/Mine'; // New
import ReportDetail from './pages/ReportDetail';

type ViewState = 'tab-view' | 'report-detail' | 'ai-chat';
type TabState = 'home' | 'record' | 'mine';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('tab-view');
  const [activeTab, setActiveTab] = useState<TabState>('home');

  const navigateToReport = () => setCurrentView('report-detail');
  const navigateToChat = () => setCurrentView('ai-chat');
  const backToHome = () => setCurrentView('tab-view');

  if (currentView === 'report-detail') {
    return <ReportDetail onBack={backToHome} />;
  }

  // Placeholder for AI Chat View
  if (currentView === 'ai-chat') {
    return (
      <div className="fixed inset-0 bg-cream z-50 flex flex-col">
        <button onClick={backToHome} className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-sm z-10">⬅️</button>
        <div className="flex-1 flex items-center justify-center font-bold text-ink">AI Chat Interface (Coming Soon)</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pb-[90px] text-ink selection:bg-star selection:text-ink">
      {/* Content Area */}
      <main className="max-w-md mx-auto min-h-screen bg-cream relative">
        {activeTab === 'home' && <Home onNavigateToReport={navigateToReport} />}
        {activeTab === 'record' && <Record onOpenChat={navigateToChat} />}
        {activeTab === 'mine' && <Mine />}
      </main>

      {/* Bottom Navigation (3 Tabs) */}
      <nav className="fixed bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl shadow-soft rounded-full py-4 px-8 z-50 flex justify-between items-center border border-white/50">
        <TabButton
          active={activeTab === 'home'}
          onClick={() => setActiveTab('home')}
          icon="🏠"
          label="首页"
        />
        <TabButton
          active={activeTab === 'record'}
          onClick={() => setActiveTab('record')}
          icon="💬"
          label="记录"
        />
        <TabButton
          active={activeTab === 'mine'}
          onClick={() => setActiveTab('mine')}
          icon="👤"
          label="我的"
        />
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
