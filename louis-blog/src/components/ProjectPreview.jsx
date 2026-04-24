import { FaArrowRight } from 'react-icons/fa6';

const ProjectPreview = ({ image, title, description, link, category }) => {
  return (
    <a
      href={link || '/'}
      className="group tile-interactive flex h-full flex-col text-secondary"
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
    >
      <div className="relative h-56 w-full overflow-hidden border-b border-soft bg-surface">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_45%,rgba(249,251,254,0.82)_100%)]" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{category}</p>
          <FaArrowRight className="mt-1 flex-shrink-0 text-sm text-accent transition group-hover:translate-x-1" />
        </div>
        <h2 className="mt-4 text-2xl font-semibold leading-tight text-primary transition group-hover:text-accent">{title}</h2>
        <p className="mt-3 flex-1 text-sm leading-7 text-secondary">{description}</p>
      </div>
    </a>
  );
};

export default ProjectPreview;
