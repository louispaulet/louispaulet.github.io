const Footer = () => {
  return (
    <footer className="mt-auto border-t border-[rgba(255,255,255,0.1)] bg-[#0f1f3d] text-white shadow-[0_-12px_28px_rgba(19,42,85,0.16)]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-8 lg:grid-cols-[1.5fr_auto_auto] lg:items-end">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,255,255,0.62)]">Shipping in public</p>
          <p className="mt-4 text-2xl font-semibold text-white">Louis Paulet &middot; AI and data builds</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-[rgba(255,255,255,0.68)]">
            Public experiments, practical AI systems, and data interfaces that can be opened, tested, and improved.
          </p>
        </div>
        <div className="lg:self-center">
          <a
            href="https://github.com/louispaulet/louispaulet.github.io"
            className="inline-flex items-center gap-2 border border-[rgba(255,255,255,0.22)] bg-[rgba(255,255,255,0.08)] px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition hover:-translate-y-[1px] hover:border-[rgba(239,103,72,0.7)] hover:bg-[rgba(255,255,255,0.12)]"
          >
            View source on GitHub
          </a>
        </div>
        <div className="text-xs uppercase tracking-[0.18em] text-[rgba(255,255,255,0.58)] lg:self-end lg:text-right">
          &copy; {new Date().getFullYear()} Louis Paulet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
