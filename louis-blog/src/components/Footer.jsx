import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950/80 py-10 text-slate-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-blue-200">Always shipping</p>
          <p className="mt-3 text-lg text-white">Louis Paulet • Data Experiences</p>
        </div>
        <div className="text-sm text-slate-400">
          <a
            href="https://github.com/louispaulet/louispaulet.github.io"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-slate-200 transition hover:border-white/40 hover:bg-white/10"
          >
            View this site on GitHub
          </a>
        </div>
        <div className="text-xs uppercase tracking-[0.35em] text-slate-500">
          &copy; {new Date().getFullYear()} Louis Paulet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
