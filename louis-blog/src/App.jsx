import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';
import Post from './components/Post';
import usePageAnalytics from './components/usePageAnalytics';
import ConsentBanner from './components/ConsentBanner';

// Dynamic import for CvViewer (heavy!)
const CvViewer = lazy(() => import('./pages/CvViewer'));

const App = () => {
  usePageAnalytics();
  const location = useLocation();

  const [showConsentBanner, setShowConsentBanner] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.search]);

  useEffect(() => {
    try {
      const storedConsent = window.localStorage?.getItem('ga_consent');
      if (!storedConsent) {
        setShowConsentBanner(true);
      }
    } catch (error) {
      console.warn('Consent banner fallback triggered; localStorage unavailable.', error);
      setShowConsentBanner(true);
    }
  }, []);

  return (
    <>
      <div className="flex min-h-screen min-w-0 flex-col overflow-x-clip bg-[linear-gradient(135deg,#f9fbfe_0%,#eef2f7_48%,#e3e9f2_100%)] text-primary">
        <Navbar />
        <main className="mx-auto flex w-full min-w-0 flex-grow flex-col px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:max-w-6xl lg:px-8 lg:pb-24">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cv" element={<CvViewer />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:postId" element={<Post />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        {showConsentBanner && <ConsentBanner />}
      </div>
    </>
  );
};

export default App;
