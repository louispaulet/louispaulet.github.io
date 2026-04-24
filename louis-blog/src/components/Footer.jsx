const Footer = () => {
  return (
    <footer className="relative mt-auto isolate overflow-hidden border-t border-[rgba(255,255,255,0.14)] bg-[#07120d] text-[#f4f7f1] shadow-[0_-16px_36px_rgba(5,16,10,0.18)]">
      <img
        src="/images/jungle-footer.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,8,0.22)_0%,rgba(7,18,13,0.72)_56%,rgba(7,18,13,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_42%)]" />
      <div className="absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)]" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-8 lg:grid-cols-[1.5fr_auto_auto] lg:items-end lg:py-16">
        <div className="max-w-xl">
          <p className="serif-accent text-xs uppercase tracking-[0.26em] text-[#dbe7d5]">Shipping in public</p>
          <p className="mt-4 text-2xl font-semibold text-[#f6f8f2]">Louis Paulet &middot; AI and data builds</p>
        </div>
        <div className="lg:self-center">
          <a
            href="https://github.com/louispaulet/louispaulet.github.io"
            className="inline-flex items-center gap-2 border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.08)] px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#f6f8f2] shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition hover:-translate-y-[1px] hover:border-[rgba(255,255,255,0.32)] hover:bg-[rgba(255,255,255,0.12)] hover:text-white"
          >
            View source on GitHub
          </a>
        </div>
        <div className="text-xs uppercase tracking-[0.18em] text-[#d0dccc] lg:self-end lg:text-right">
          &copy; {new Date().getFullYear()} Louis Paulet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
