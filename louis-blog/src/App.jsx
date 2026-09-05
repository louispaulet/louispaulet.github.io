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
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.search]);

  useEffect(() => {
    try {
      const storedConsent = window.localStorage?.getItem('ga_consent');
      if (!storedConsent) {
        setShowConsentBanner(true);
      }
    } catch (error) {
      console.warn(
        'Consent banner fallback triggered; localStorage unavailable.',
        error,
      );
      setShowConsentBanner(true);
    }
  }, []);

  return (
    <>
      <div className="flex min-h-screen min-w-0 flex-col bg-canvas text-primary">
        <a
          href="#main-content"
          className="skip-link"
          onClick={(event) => {
            event.preventDefault();
            const main = document.getElementById('main-content');
            main?.focus();
            main?.scrollIntoView({ behavior: 'instant', block: 'start' });
          }}
        >
          Skip to content
        </a>
        <Navbar />
        <main
          id="main-content"
          tabIndex={-1}
          className="site-container site-main"
        >
          <Suspense
            fallback={
              <div className="surface panel-padding" role="status">
                Loading page…
              </div>
            }
          >
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
