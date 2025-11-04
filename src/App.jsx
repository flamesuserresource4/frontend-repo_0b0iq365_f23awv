import { useEffect, useState } from 'react';
import Header from './components/Header';
import HomeSections from './components/HomeSections';
import Confirmation from './components/Confirmation';
import Footer from './components/Footer';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to) => {
    if (to !== window.location.pathname) {
      window.history.pushState({}, '', to);
      setPath(to);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isConfirm = path.startsWith('/confirm');

  return (
    <div className="min-h-screen bg-white font-[Inter,ui-sans-serif]">
      <Header onNavigate={navigate} />
      {isConfirm ? <Confirmation /> : <HomeSections onNavigate={navigate} />}
      <Footer />

      {/* Sticky mobile CTA */}
      {!isConfirm && (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-[#434545]/15 bg-white/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <a
              href="/confirm"
              onClick={(e) => { e.preventDefault(); navigate('/confirm'); }}
              className="w-full inline-flex items-center justify-center rounded-none bg-[#CCFF00] text-[#434545] px-4 py-3 font-medium border border-[#434545]"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
