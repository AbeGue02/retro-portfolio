export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/AbeGue02" className="social-link">
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/abrahamdguerrero/" className="social-link">
          <span>LinkedIn</span>
        </a>
        <a href="https://twitter.com" className="social-link">
          <span>Twitter</span>
        </a>
        <a href="mailto:email@example.com" className="social-link">
          <span>Email</span>
        </a>
      </div>
      <p>© 2025 ABRAHAM.GUERRERO // CRAFTED WITH <span style={{color: 'var(--primary)'}}>♥</span> AND CODE</p>
    </footer>
  );
}