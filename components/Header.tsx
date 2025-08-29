'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [text, setText] = useState('');
  const fullText = 'ABRAHAM_GUERRERO';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header">
      <div className="typing-container">
        <h1 className="typing-text">{text}</h1>
      </div>
      <p className="subtitle">// Mobile Developer & Full-Stack Engineer</p>
      <div className="status-bar">
        <div className="status-item">
          <span className="status-indicator"></span>
          <span>SYSTEM: ONLINE</span>
        </div>
        <div className="status-item">
          <span className="status-indicator" style={{color: 'var(--accent)'}}></span>
          <span>STATUS: AVAILABLE</span>
        </div>
        <div className="status-item">
          <span className="status-indicator" style={{color: 'var(--secondary)'}}></span>
          <span>MODE: CREATE</span>
        </div>
      </div>
    </header>
  );
}