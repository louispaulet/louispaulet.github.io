import React from 'react';
import { Link } from 'react-router-dom';
import website_logo from './../cached_images/logo_favicon_white_blue.webp'

const Navbar = () => {
  const navLinkClasses =
    'relative font-medium text-sm tracking-wide text-slate-100 transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full';

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/60 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
        <Link to="/" className="flex items-center space-x-3 transition hover:opacity-90">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#246BFF] shadow-lg shadow-blue-900/50">
            <img src={website_logo} alt="Louis Paulet" className="h-8 w-8" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-300">Louis Paulet</span>
            <span className="text-lg font-semibold text-white">Data & AI Insights</span>
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
        <div className="flex items-center gap-5 text-xs font-semibold uppercase tracking-widest md:hidden">
          <Link to="/" className="text-slate-200 hover:text-white">
            Home
          </Link>
          <Link to="/projects" className="text-slate-200 hover:text-white">
            Projects
          </Link>
          <Link to="/about" className="text-slate-200 hover:text-white">
            About
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            to="/cv"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            View CV
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
