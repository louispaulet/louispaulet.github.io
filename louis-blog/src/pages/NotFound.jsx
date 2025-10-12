import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-12 text-center shadow-2xl">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-500/20 text-3xl font-bold text-blue-200">404</div>
      <h1 className="text-3xl font-semibold text-white">Page Not Found</h1>
      <p className="max-w-md text-sm text-slate-300">
        The page you are looking for doesn’t exist—or it may have shipped under a different URL. Let’s get you back on track.
      </p>
      <Link
        to="/"
        className="inline-flex items-center rounded-full border border-blue-400/50 px-6 py-3 text-sm font-semibold text-blue-200 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-500/20"
      >
        Return home
      </Link>
    </div>
  );
};

export default NotFound;
