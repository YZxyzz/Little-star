import { useState } from 'react';
import Home from './pages/Home';
import Record from './pages/Record';
import Mine from './pages/Mine';
import ReportDetail from './pages/ReportDetail';
import AIChatWindow from './pages/record/AIChatWindow';
import TopicDetail from './pages/record/TopicDetail';
import Splash from './pages/entry/Splash';
import Welcome from './pages/entry/Welcome';
import Login from './pages/entry/Login';
import BindingGuide from './pages/binding/BindingGuide';
import BindingStep1_ChildInfo from './pages/binding/BindingStep1_ChildInfo';
import BindingStep2_PrepDevice from './pages/binding/BindingStep2_PrepDevice';
import BindingStep3_Scan from './pages/binding/BindingStep3_Scan';
import BindingStep4_Connecting from './pages/binding/BindingStep4_Connecting';
import BindingStep5_Activation from './pages/binding/BindingStep5_Activation';
import ActivationSuccess from './pages/binding/ActivationSuccess';
import MemberCenter from './pages/mine/MemberCenter';
import DeviceManager from './pages/mine/DeviceManager';

import HistoryCalendar from './pages/history/HistoryCalendar';
import ReportArchive from './pages/history/ReportArchive';

type ViewState = 'splash' | 'welcome' | 'login' | 'binding-guide' | 'binding-step-1' | 'binding-step-2' | 'binding-step-3' | 'binding-step-4' | 'binding-step-5' | 'activation-success' | 'tab-view' | 'report-detail' | 'ai-chat' | 'topic-detail' | 'member-center' | 'device-manager' | 'history-calendar' | 'report-archive';
type TabState = 'home' | 'record' | 'mine';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('splash');
  const [activeTab, setActiveTab] = useState<TabState>('home');

  // Demo State: Scenario Management
  const [currentScenarioId, setCurrentScenarioId] = useState('dinos');

  const navigateToReport = () => setCurrentView('report-detail');
  const navigateToChat = () => setCurrentView('ai-chat');
  const navigateToTopic = () => setCurrentView('topic-detail');

  // Mine Navigation
  const navigateToMember = () => setCurrentView('member-center');
  const navigateToDevice = () => setCurrentView('device-manager');
  const navigateToHistory = () => setCurrentView('history-calendar');
  const navigateToArchive = () => setCurrentView('report-archive');

  const backToHome = () => setCurrentView('tab-view');

  // Entry Flow Handlers
  const handleSplashFinish = () => setCurrentView('welcome');
  const handleWelcomeFinish = () => setCurrentView('login');
  const handleLoginSuccess = () => setCurrentView('binding-guide');

  // Binding Flow Handlers
  const handleBindingGuideNext = () => setCurrentView('binding-step-1');
  const handleBindingGuideBack = () => setCurrentView('login');

  const handleStep1Next = () => setCurrentView('binding-step-2');
  const handleStep1Back = () => setCurrentView('binding-guide');

  const handleStep2Next = () => setCurrentView('binding-step-3');
  const handleStep2Back = () => setCurrentView('binding-step-1');

  const handleStep3Next = () => setCurrentView('binding-step-4');
  const handleStep3Back = () => setCurrentView('binding-step-2');

  const handleStep4Next = () => setCurrentView('binding-step-5');
  // Step 4 is auto-forward, no back

  const handleStep5Next = () => setCurrentView('activation-success');
  const handleStep5Back = () => setCurrentView('binding-step-3'); // Back to scan if needed

  const handleSuccessFinish = () => setCurrentView('tab-view');

  // 1. Splash Screen
  if (currentView === 'splash') {
    return <Splash onFinish={handleSplashFinish} />;
  }

  // 2. Welcome Screen
  if (currentView === 'welcome') {
    return <Welcome onStart={handleWelcomeFinish} />
  }

  // 3. Login Screen
  if (currentView === 'login') {
    return <Login onLoginSuccess={handleLoginSuccess} />
  }

  // 4. Binding Flow
  if (currentView === 'binding-guide') {
    return <BindingGuide onNext={handleBindingGuideNext} onBack={handleBindingGuideBack} />
  }

  if (currentView === 'binding-step-1') {
    return <BindingStep1_ChildInfo onNext={handleStep1Next} onBack={handleStep1Back} />
  }

  if (currentView === 'binding-step-2') {
    return <BindingStep2_PrepDevice onNext={handleStep2Next} onBack={handleStep2Back} />
  }

  if (currentView === 'binding-step-3') {
    return <BindingStep3_Scan onNext={handleStep3Next} onBack={handleStep3Back} />
  }

  if (currentView === 'binding-step-4') {
    return <BindingStep4_Connecting onNext={handleStep4Next} onBack={() => { }} />
  }

  if (currentView === 'binding-step-5') {
    return <BindingStep5_Activation onNext={handleStep5Next} onBack={handleStep5Back} />
  }

  if (currentView === 'activation-success') {
    return <ActivationSuccess onFinish={handleSuccessFinish} />
  }

  if (currentView === 'report-detail') {
    return <ReportDetail
      onBack={backToHome}
      scenarioId={currentScenarioId}
    />
  }

  // AI Chat View
  if (currentView === 'ai-chat') {
    return <AIChatWindow onBack={backToHome} />
  }

  // Topic Detail View
  if (currentView === 'topic-detail') {
    return <TopicDetail onBack={backToHome} />
  }

  // Mine Sub-pages
  if (currentView === 'member-center') {
    return <MemberCenter onBack={backToHome} />
  }

  if (currentView === 'device-manager') {
    return <DeviceManager onBack={backToHome} />
  }

  if (currentView === 'history-calendar') {
    return <HistoryCalendar onBack={backToHome} onNavigateToReport={navigateToReport} />
  }

  if (currentView === 'report-archive') {
    return <ReportArchive onBack={backToHome} />
  }

  return (
    <div className="min-h-screen bg-white text-super-black selection:bg-hot-pink selection:text-white font-sans">
      {/* Content Area */}
      <main className="pb-[100px]">
        {activeTab === 'home' && (
          <Home
            onNavigateToReport={navigateToReport}
            onNavigateToHistory={navigateToHistory}
            onNavigateToArchive={navigateToArchive}
            currentScenarioId={currentScenarioId}
            onScenarioChange={setCurrentScenarioId}
          />
        )}
        {activeTab === 'record' && <Record onOpenChat={navigateToChat} onNavigateToTopic={navigateToTopic} />}
        {activeTab === 'mine' && <Mine onNavigateToMember={navigateToMember} onNavigateToDevice={navigateToDevice} />}
      </main>

      {/* Bottom Navigation (Moimoi Emoji Style) */}
      <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white shadow-pop rounded-full py-2 px-3 z-50 flex items-center gap-1 border border-black/5">
        <TabButton
          active={activeTab === 'home'}
          onClick={() => setActiveTab('home')}
          icon="🏠"
          label="Home"
        />
        <TabButton
          active={activeTab === 'record'}
          onClick={() => setActiveTab('record')}
          icon="💬"
          label="Record"
        />
        <TabButton
          active={activeTab === 'mine'}
          onClick={() => setActiveTab('mine')}
          icon="👤"
          label="Mine"
        />
      </nav>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: string, label: string }) {
  return (
    <button
      onClick={onClick}
      className={`relative w-16 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${active ? 'bg-black text-white w-24' : 'bg-transparent text-soft-gray hover:bg-gray-100'
        }`}
    >
      <span className={`text-xl z-10 transition-transform ${active ? 'scale-100' : 'scale-90'}`}>{icon}</span>
      {active && (
        <span className="ml-2 text-xs font-bold animate-in fade-in slide-in-from-left-2 duration-300">{label}</span>
      )}
    </button>
  );
}

export default App;
