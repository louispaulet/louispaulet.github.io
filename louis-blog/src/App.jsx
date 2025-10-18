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
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#f8f9fc] via-[#eef1f6] to-[#e6e9f2] text-primary">
        <Navbar />
        <main className="mx-auto flex w-full flex-grow flex-col px-4 pb-24 pt-12 sm:px-6 lg:max-w-6xl lg:px-8">
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
