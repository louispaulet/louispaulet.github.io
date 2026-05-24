import { Link, NavLink, useLocation } from 'react-router-dom';
import website_logo from './../cached_images/logo_favicon_white_blue.webp';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navItems = [
    ['/', 'Home'],
    ['/posts', 'Writing'],
    ['/projects', 'Projects'],
    ['/about', 'About'],
  ];
  const navLinkClasses = ({ isActive }) =>
    [
      'relative border-b-2 px-1 pb-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors',
      isActive
        ? 'border-[var(--color-accent)] text-primary'
        : 'border-transparent text-secondary hover:border-[rgba(239,103,72,0.45)] hover:text-primary',
    ].join(' ');
  const mobileLinkClasses = ({ isActive }) =>
    [
      'border px-3 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.14em] transition',
      isActive
        ? 'border-[var(--color-accent)] bg-white text-primary'
        : 'border-soft bg-white/55 text-secondary hover:border-[rgba(239,103,72,0.45)] hover:text-primary',
    ].join(' ');

  const handleLogoClick = (event) => {
    if (!isHomePage || typeof window === 'undefined') {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-soft bg-[rgba(249,251,254,0.92)] shadow-[0_8px_22px_rgba(89,108,135,0.08)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-2 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-6 md:py-3">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex min-w-0 items-center gap-4 transition hover:opacity-90"
        >
          <img
            src={website_logo}
            alt="Louis Paulet"
            className="h-12 w-12 flex-shrink-0 object-contain sm:h-14 sm:w-14"
          />
          <div className="flex min-w-0 flex-col">
            <span className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">Louis Paulet</span>
            <span className="truncate text-base font-semibold leading-tight text-primary sm:text-lg">AI, data, shipped tools</span>
          </div>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} className={navLinkClasses}>
              {label}
            </NavLink>
          ))}
        </div>
        <div className="grid w-full grid-cols-5 gap-2 md:hidden">
          {[...navItems, ['/cv', 'CV']].map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} className={mobileLinkClasses}>
              {label}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:block">
          <NavLink
            to="/cv"
            className={({ isActive }) =>
              [
                'cta px-5 py-2 text-xs',
                isActive ? 'cta-primary' : 'cta-secondary',
              ].join(' ')
            }
          >
            CV
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
