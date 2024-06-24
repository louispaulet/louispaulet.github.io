// src/App.jsx
import React, { Suspense, useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  const [postRoutes, setPostRoutes] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const context = import.meta.glob('./posts/*.jsx');
      const routes = await Promise.all(
        Object.keys(context).map(async (key) => {
          const module = await context[key]();
          const Component = module.default;
          const meta = module.meta;
          return (
            <Route key={meta.path} path={meta.path} element={<Suspense fallback={<div>Loading...</div>}><Component /></Suspense>} />
          );
        })
      );
      setPostRoutes(routes);
    };

    loadPosts();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {postRoutes}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
