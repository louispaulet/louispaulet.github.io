import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-soft bg-white/70 py-10 text-secondary">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="serif-accent text-sm uppercase text-accent">Always shipping</p>
          <p className="mt-3 text-lg font-semibold text-primary">Louis Paulet • Data Experiences</p>
        </div>
        <div className="text-sm text-secondary">
          <a
            href="https://github.com/louispaulet/louispaulet.github.io"
            className="neumorphic-button inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em]"
          >
            View this site on GitHub
          </a>
        </div>
        <div className="text-xs uppercase tracking-[0.35em] text-secondary">
          &copy; {new Date().getFullYear()} Louis Paulet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
