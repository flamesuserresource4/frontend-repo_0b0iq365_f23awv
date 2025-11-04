import { useEffect, useState } from 'react';

function Logo() {
  return (
    <div className="flex items-center gap-1 select-none" aria-label="PBL logo">
      {['P', 'B', 'L'].map((ch) => (
        <div
          key={ch}
          className="bg-[#434545] text-[#CCFF00] px-2 py-1 font-bold tracking-tight leading-none rounded-none"
          style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}
        >
          {ch}
        </div>
      ))}
    </div>
  );
}

export default function Header({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass =
    'text-sm md:text-base text-[#434545] hover:opacity-60 transition-opacity px-3 py-2 rounded-none';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors ${
        scrolled ? 'bg-white/80' : 'bg-white'
      } border-b border-black/5`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <a href="#home" className={linkClass} onClick={(e) => { e.preventDefault(); onNavigate('/'); }}>
            Home
          </a>
          <a href="#results" className={linkClass} onClick={(e) => { e.preventDefault(); const el = document.getElementById('results'); el?.scrollIntoView({ behavior: 'smooth' }); }}>
            Results
          </a>
          <a href="#how" className={linkClass} onClick={(e) => { e.preventDefault(); const el = document.getElementById('how'); el?.scrollIntoView({ behavior: 'smooth' }); }}>
            How It Works
          </a>
          <a href="#packages" className={linkClass} onClick={(e) => { e.preventDefault(); const el = document.getElementById('packages'); el?.scrollIntoView({ behavior: 'smooth' }); }}>
            Packages
          </a>
        </nav>
        <div className="flex items-center">
          <a
            href="/confirm"
            onClick={(e) => { e.preventDefault(); onNavigate('/confirm'); }}
            className="rounded-none bg-[#CCFF00] text-[#434545] px-4 py-2 font-medium border border-[#434545] hover:opacity-80 transition-opacity"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
