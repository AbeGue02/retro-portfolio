interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  return (
    <nav className="nav-container">
      <div 
        className={`nav-tab ${activeTab === 'mobile' ? 'active' : ''}`}
        onClick={() => setActiveTab('mobile')}
      >
        <span className="nav-tab-icon">📱</span>
        MOBILE.APP
      </div>
      <div 
        className={`nav-tab ${activeTab === 'web' ? 'active' : ''}`}
        onClick={() => setActiveTab('web')}
      >
        <span className="nav-tab-icon">🌐</span>
        WEB.DEV
      </div>
      <div 
        className={`nav-tab ${activeTab === 'shopify' ? 'active' : ''}`}
        onClick={() => setActiveTab('shopify')}
      >
        <span className="nav-tab-icon">🛍️</span>
        SHOPIFY.BUILD
      </div>
    </nav>
  );
}