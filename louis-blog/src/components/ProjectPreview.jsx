const ProjectPreview = ({ image, title, description, link }) => {
  return (
    <a
      href={link || '/'}
      className="group relative flex h-full flex-col border border-soft bg-surface text-secondary shadow-[14px_14px_28px_rgba(185,194,212,0.45),-14px_-14px_28px_rgba(255,255,255,0.95)] transition hover:-translate-y-1 hover:shadow-[18px_18px_36px_rgba(185,194,212,0.55),-18px_-18px_36px_rgba(255,255,255,0.98)]"
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#f0f2f8] via-transparent to-transparent opacity-80" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Featured build</span>
        <h2 className="text-2xl font-semibold text-primary transition group-hover:text-accent">{title}</h2>
        <p className="flex-1 text-sm text-secondary">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:translate-x-1 group-hover:text-accent">
          Explore the project
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </span>
      </div>
    </a>
  );
};

export default ProjectPreview;
