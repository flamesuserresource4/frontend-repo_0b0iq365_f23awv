import { useEffect, useState } from 'react';
import Header from './components/Header';
import HomeSections from './components/HomeSections';
import Step2 from './components/Step2';
import Step4 from './components/Step4';
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

  const RouteView = () => {
    if (path.startsWith('/step-2')) return <Step2 />;
    if (path.startsWith('/step-4')) return <Step4 />;
    return <HomeSections onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen bg-white font-[Inter,ui-sans-serif]">
      <Header onNavigate={navigate} />
      <RouteView />
      <Footer />

      {path === '/' && (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-[#434545]/15 bg-white/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <a
              href="/step-2"
              onClick={(e) => { e.preventDefault(); navigate('/step-2'); }}
              className="w-full inline-flex items-center justify-center rounded-[30px] shadow-md bg-[#CCFF00] text-[#434545] px-4 py-3 font-medium"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
