import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="neumorphic-surface flex min-w-0 flex-col items-center justify-center gap-6 p-6 text-center text-secondary sm:p-12">
      <div className="flex h-20 w-20 items-center justify-center border border-soft bg-surface text-3xl font-bold text-accent">
        404
      </div>
      <h1 className="page-title">Page not found</h1>
      <p className="max-w-md text-base text-secondary">
        This URL does not exist, or the thing moved while the site kept
        shipping.
      </p>
      <Link to="/" className="cta cta-primary">
        Return home
      </Link>
    </div>
  );
};

export default NotFound;
