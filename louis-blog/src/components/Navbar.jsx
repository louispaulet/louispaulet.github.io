import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaArrowRight, FaBars, FaXmark } from 'react-icons/fa6';
import website_logo from './../cached_images/logo_favicon_white_blue.webp';

const Navbar = () => {
  const location = useLocation();
  const menuButton = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';
  const navItems = [
    ['/', 'Home'],
    ['/projects', 'Projects'],
    ['/posts', 'Writing'],
    ['/about', 'About'],
  ];
  const navLinkClasses = ({ isActive }) =>
    [
      'relative inline-flex min-h-11 items-center border-b-2 px-1 pt-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors',
      isActive
        ? 'border-[var(--color-accent)] text-primary'
        : 'border-transparent text-secondary hover:border-[rgba(239,103,72,0.45)] hover:text-primary',
    ].join(' ');
  const mobileLinkClasses = ({ isActive }) =>
    [
      'flex min-h-11 min-w-0 items-center justify-between border px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition-colors',
      isActive
        ? 'border-[var(--color-accent)] bg-white text-primary shadow-[inset_3px_0_0_var(--color-accent)]'
        : 'border-soft bg-white/55 text-secondary hover:border-[rgba(239,103,72,0.45)] hover:bg-white hover:text-primary',
    ].join(' ');

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        menuButton.current?.focus();
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px)');
    const handleDesktopChange = (event) => {
      if (event.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    desktopQuery.addEventListener('change', handleDesktopChange);
    return () =>
      desktopQuery.removeEventListener('change', handleDesktopChange);
  }, []);

  const handleLogoClick = (event) => {
    setIsMobileMenuOpen(false);

    if (!isHomePage || typeof window === 'undefined') {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Primary navigation"
      className="sticky top-0 z-50 border-b border-soft bg-[rgba(249,251,254,0.94)] backdrop-blur-md"
    >
      <div className="site-container">
        <div className="flex min-h-[4.5rem] items-center justify-between gap-3 md:min-h-0 md:gap-6 md:py-3">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex min-w-0 flex-1 items-center gap-3 transition-opacity hover:opacity-90 md:flex-none md:gap-4"
          >
            <img
              src={website_logo}
              alt="Louis Paulet"
              width="56"
              height="56"
              className="h-11 w-11 flex-shrink-0 object-contain sm:h-12 sm:w-12 md:h-14 md:w-14"
            />
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-xs uppercase tracking-[0.12em] text-muted">
                Louis Paulet
              </span>
              <span className="truncate text-sm font-semibold leading-tight text-primary sm:text-base md:text-lg">
                AI, data, shipped tools
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={navLinkClasses}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <button
            ref={menuButton}
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-primary-navigation"
            aria-label={
              isMobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            className="neumorphic-button flex h-11 w-11 flex-shrink-0 items-center justify-center text-lg text-primary md:hidden"
          >
            {isMobileMenuOpen ? (
              <FaXmark aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-primary-navigation" className="grid pb-4 md:hidden">
            <div className="grid gap-2 border-t border-soft pt-3">
              {navItems.map(([to, label]) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={mobileLinkClasses}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="min-w-0">{label}</span>
                  <FaArrowRight
                    aria-hidden="true"
                    className="flex-shrink-0 text-accent"
                  />
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
