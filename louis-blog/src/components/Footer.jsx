import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/10 bg-brand-primary/90 py-12 text-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="space-y-3">
          <div className="accent-bar" />
          <p className="font-display text-2xl font-semibold text-white">Louis Paulet</p>
          <p className="text-sm uppercase tracking-megawide text-muted">Data Platforms · AI Craft</p>
        </div>
        <a
          href="https://github.com/louispaulet/louispaulet.github.io"
          className="neuo-button"
        >
          View this site on GitHub
        </a>
        <div className="text-xs uppercase tracking-megawide text-muted">
          &copy; {new Date().getFullYear()} Louis Paulet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
