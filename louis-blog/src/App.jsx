import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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

  const [showConsentBanner, setShowConsentBanner] = useState(false);

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
      <div className="relative flex min-h-screen flex-col bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary text-white/90">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
          <div className="gridline-bg absolute inset-0" />
          <div className="absolute inset-y-0 right-[18%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>
        <Navbar />
        <main className="container mx-auto w-full flex-grow px-4 pb-24 pt-12 sm:px-8 lg:max-w-6xl">
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
