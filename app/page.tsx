'use client';

import { useEffect, useState } from 'react';
import MatrixRain from '@/components/MatrixRain';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import MobileSection from '@/components/MobileSection';
import WebSection from '@/components/WebSection';
import ShopifySection from '@/components/ShopifySection';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState('mobile');

  return (
    <main>
      <MatrixRain />
      
      <div className="container">
        <Header />
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === 'mobile' && <MobileSection />}
        {activeTab === 'web' && <WebSection />}
        {activeTab === 'shopify' && <ShopifySection />}
        
        <div className="ascii-art">
{`╔═══════════════════════════════════════╗
║  ▄▄·       ·▄▄▄▄  ▄▄▄ .            ║
║ ▐█ ▌▪▪     ██▪ ██ ▀▄.▀·            ║
║ ██ ▄▄ ▄█▀▄ ▐█· ▐█▌▐▀▀▪▄            ║
║ ▐███▌▐█▌.▐▌██. ██ ▐█▄▄▌            ║
║ ·▀▀▀  ▀█▄▀▪▀▀▀▀▀•  ▀▀▀             ║
╚═══════════════════════════════════════╝`}
        </div>
        
        <Footer />
      </div>
    </main>
  );
}