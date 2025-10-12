import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Post from './components/Post';
import { PageTracking } from './components/pageTracking';
import ConsentBanner from './components/ConsentBanner';

// Dynamic import for CvViewer (heavy!)
const CvViewer = lazy(() => import('./pages/CvViewer'));

const App = () => {
  PageTracking();

  const [showConsentBanner, setShowConsentBanner] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem('ga_consent');
    if (!storedConsent) {
      setShowConsentBanner(true);
    }
  }, []);

  return (
    <>
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-slate-100">
        <Navbar />
        <main className="container mx-auto w-full flex-grow px-4 pb-24 pt-12 sm:px-8 lg:max-w-6xl">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cv" element={<CvViewer />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
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
