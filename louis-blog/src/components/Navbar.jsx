import React from 'react';
import { Link } from 'react-router-dom';
import website_logo from './../cached_images/logo_favicon_white_blue.webp'

const Navbar = () => {
  const navLinkClasses =
    'relative text-sm font-semibold tracking-[0.28em] uppercase text-secondary transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-accent)] after:transition-all hover:text-primary hover:after:w-full';
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <nav className="sticky top-0 z-50 border-b border-soft bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-0 py-5 sm:px-8">
        <Link
          to="/"
          className="flex flex-col items-start gap-2 transition hover:opacity-90 sm:flex-row sm:items-center sm:gap-4"
          onClick={scrollToTop}
        >
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-soft bg-surface shadow-[8px_8px_16px_rgba(185,194,212,0.45),-8px_-8px_16px_rgba(255,255,255,0.95)]">
            <img src={website_logo} alt="Louis Paulet" className="h-8 w-8 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-[0.7rem] uppercase tracking-[0.35em] text-secondary sm:text-xs">Louis Paulet</span>
            <span className="text-lg font-semibold leading-tight text-primary sm:text-xl">Data & AI Insights</span>
          </div>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className={navLinkClasses} onClick={scrollToTop}>
            Home
          </Link>
          <Link to="/projects" className={navLinkClasses} onClick={scrollToTop}>
            Projects
          </Link>
          <Link to="/about" className={navLinkClasses} onClick={scrollToTop}>
            About
          </Link>
        </div>
        <div className="flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-secondary md:hidden">
          <Link to="/" className="text-secondary transition hover:text-primary" onClick={scrollToTop}>
            Home
          </Link>
          <Link to="/projects" className="text-secondary transition hover:text-primary" onClick={scrollToTop}>
            Projects
          </Link>
          <Link to="/about" className="text-secondary transition hover:text-primary" onClick={scrollToTop}>
            About
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            to="/cv"
            className="neumorphic-button inline-flex items-center px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary"
            onClick={scrollToTop}
          >
            View CV
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
