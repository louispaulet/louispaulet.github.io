import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 border border-white/10 bg-brand-secondary/85 p-12 text-center shadow-brand-neuo">
      <div className="flex h-20 w-20 items-center justify-center bg-brand-primary text-3xl font-bold text-brand-accent shadow-brand-neuo-inset">404</div>
      <h1 className="font-display text-3xl font-semibold text-white">Page Not Found</h1>
      <p className="max-w-md text-sm text-muted">
        The page you are looking for doesn’t exist—or it may have shipped under a different URL. Let’s get you back on track.
      </p>
      <Link
        to="/"
        className="neuo-button neuo-button--accent"
      >
        Return home
      </Link>
    </div>
  );
};

export default NotFound;
