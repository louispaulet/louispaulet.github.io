import React from 'react';
import { Link } from 'react-router-dom';
import website_logo from './../cached_images/logo_favicon_white_blue.webp'

const Navbar = () => {
  const navLinkClasses =
    'relative px-2 py-1 text-sm font-semibold tracking-[0.18em] uppercase text-white/70 transition after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-brand-accent after:transition-all hover:text-white hover:after:w-full';

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-brand-primary/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-8">
        <Link to="/" className="flex items-center gap-5 transition hover:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center bg-brand-secondary/90 shadow-brand-neuo-inset">
            <img src={website_logo} alt="Louis Paulet" className="h-9 w-9" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-[0.65rem] uppercase tracking-megawide text-muted">Louis Paulet</span>
            <span className="font-display text-xl font-semibold text-white">Data &amp; AI Signals</span>
          </div>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className={navLinkClasses}>
            Home
          </Link>
          <Link to="/projects" className={navLinkClasses}>
            Projects
          </Link>
          <Link to="/about" className={navLinkClasses}>
            About
          </Link>
        </div>
        <div className="flex items-center gap-6 text-[0.65rem] font-semibold uppercase tracking-[0.28em] md:hidden">
          <Link to="/" className="text-white/70 transition hover:text-white">Home</Link>
          <Link to="/projects" className="text-white/70 transition hover:text-white">Projects</Link>
          <Link to="/about" className="text-white/70 transition hover:text-white">About</Link>
        </div>
        <Link to="/cv" className="neuo-button neuo-button--accent hidden md:inline-flex">
          View CV
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
