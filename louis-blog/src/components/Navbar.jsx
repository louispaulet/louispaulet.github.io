import { Link } from 'react-router-dom';
import website_logo from './../cached_images/logo_favicon_white_blue.webp';

const Navbar = () => {
  const navLinkClasses =
    'relative text-xs font-semibold uppercase tracking-[0.18em] text-secondary transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-accent)] after:transition-all hover:text-primary hover:after:w-full';

  return (
    <nav className="sticky top-0 z-50 border-b border-soft bg-[rgba(249,251,254,0.88)] shadow-[0_8px_26px_rgba(89,108,135,0.1)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-8">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3 transition hover:opacity-90"
        >
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-soft bg-surface shadow-[5px_6px_14px_rgba(89,108,135,0.16),-5px_-5px_12px_rgba(255,255,255,0.82)]">
            <img src={website_logo} alt="Louis Paulet" className="h-8 w-8 object-contain" />
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">Louis Paulet</span>
            <span className="truncate text-base font-semibold leading-tight text-primary sm:text-lg">AI, data, shipped tools</span>
          </div>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          <Link to="/" className={navLinkClasses}>
            Home
          </Link>
          <Link to="/posts" className={navLinkClasses}>
            Writing
          </Link>
          <Link to="/projects" className={navLinkClasses}>
            Projects
          </Link>
          <Link to="/about" className={navLinkClasses}>
            About
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-secondary md:hidden">
          <Link to="/posts" className="text-secondary transition hover:text-primary">
            Writing
          </Link>
          <Link to="/projects" className="text-secondary transition hover:text-primary">
            Projects
          </Link>
          <Link to="/about" className="text-secondary transition hover:text-primary">
            About
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            to="/cv"
            className="neumorphic-button inline-flex items-center px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
          >
            CV
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
