import React from 'react';

const ProjectPreview = ({ image, title, description, link }) => {
  return (
    <a
      href={link || '/'}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl shadow-blue-950/30 transition hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-blue-900/50"
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-300">Featured build</span>
        <h2 className="text-2xl font-semibold text-white transition group-hover:text-blue-100">{title}</h2>
        <p className="flex-1 text-sm text-slate-300">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition group-hover:translate-x-1">
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
