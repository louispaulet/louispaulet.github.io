import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import SocialLinks from './SocialLinks';
const Footer = () => (
  <footer className="mt-auto border-t border-soft bg-surface">
    <div className="site-container py-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="section-kicker">Shipping in public</p>
          <p className="card-title mt-3">Louis Paulet · AI and data builds</p>
          <p className="mt-3 max-w-md text-secondary">
            Public experiments, practical AI systems, and data interfaces that
            can be opened, tested, and improved.
          </p>
        </div>
        <div>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {[
              ['/', 'Home'],
              ['/projects', 'Projects'],
              ['/posts', 'Writing'],
              ['/about', 'About'],
              ['/cv', 'CV'],
            ].map(([to, label]) => (
              <Link key={to} to={to} className="cta cta-tertiary">
                {label}
              </Link>
            ))}
          </nav>
          <SocialLinks />
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-soft pt-6">
        <p className="metadata">
          © {new Date().getFullYear()} Louis Paulet. All rights reserved.
        </p>
        <a
          href="https://github.com/louispaulet/louispaulet.github.io"
          className="cta cta-tertiary"
        >
          View source on GitHub <FaArrowUpRightFromSquare aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
);
export default Footer;
