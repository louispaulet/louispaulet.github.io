import PageIntro from '../components/PageIntro';
import { useMemo, useState } from 'react';
import ProjectPreview from './../components/ProjectPreview';

import projects from '../ProjectData';

const filters = ['All', 'AI', 'Data', 'Browser ML', 'Benchmark', 'Game'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.filters.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="page-stack text-secondary">
      <PageIntro kicker="Shipped projects" title="Projects you can open">
        <p>
          Working builds across AI tooling, open data, browser inference, and
          playful product experiments. Each card points to something live,
          inspectable, or ready to try.
        </p>
      </PageIntro>

      <div
        className="flex min-w-0 flex-wrap gap-2"
        aria-label="Project filters"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={[
              'min-h-11 border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors',
              activeFilter === filter
                ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                : 'border-soft bg-white/70 text-secondary hover:border-[var(--color-accent)] hover:text-primary',
            ].join(' ')}
          >
            {filter}
          </button>
        ))}
      </div>

      <p role="status" className="metadata">
        {visibleProjects.length}{' '}
        {visibleProjects.length === 1 ? 'project' : 'projects'}
        {activeFilter !== 'All' ? ` · ${activeFilter}` : ''}
      </p>
      <div className="content-grid">
        {visibleProjects.map((project) => (
          <ProjectPreview
            key={project.title}
            image={project.image}
            title={project.title}
            category={project.category}
            description={project.description}
            link={project.link}
            badges={project.badges}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
