import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 border border-soft bg-surface p-12 text-center text-secondary shadow-[14px_14px_28px_rgba(185,194,212,0.45),-14px_-14px_28px_rgba(255,255,255,0.95)]">
      <div className="flex h-20 w-20 items-center justify-center border border-soft bg-surface text-3xl font-bold text-accent">404</div>
      <h1 className="text-3xl font-semibold text-primary">Page Not Found</h1>
      <p className="max-w-md text-sm text-secondary">
        The page you are looking for doesn’t exist—or it may have shipped under a different URL. Let’s get you back on track.
      </p>
      <Link
        to="/"
        className="neumorphic-button inline-flex items-center px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary hover:text-accent"
      >
        Return home
      </Link>
    </div>
  );
};

export default NotFound;
