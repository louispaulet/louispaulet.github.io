import projects from '../ProjectData';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const FeaturedProjectSpotlight = () => {
  const project = projects.find(({ title }) => title === 'YAHATVP');
  return (
    <section className="relative min-w-0 border-b border-soft pb-12 text-secondary sm:pb-16">
      <div className="grid min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="min-w-0 space-y-6 lg:pr-4">
          <p className="section-kicker">Featured build</p>
          <h2 className="section-title text-primary">
            YAHATVP makes current HATVP data easier to inspect.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-secondary sm:text-base">
            A source-linked dashboard for the latest HATVP snapshot, backed by
            an auditable weekly ingestion pipeline that keeps provenance,
            quality checks, and historical archives close to the data.
          </p>
          <div className="grid min-w-0 gap-3 text-sm text-primary sm:grid-cols-3">
            <div className="neumorphic-press border border-soft bg-surface p-3">
              Weekly snapshots
            </div>
            <div className="neumorphic-press border border-soft bg-surface p-3">
              Source-linked records
            </div>
            <div className="neumorphic-press border border-soft bg-surface p-3">
              Auditable pipeline
            </div>
          </div>
          <div className="grid gap-3 pt-2 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta-primary w-full sm:w-auto"
            >
              Open dashboard
              <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
            <Link
              to="/posts/post14"
              className="cta cta-secondary w-full sm:w-auto"
            >
              Read build log
              <FaArrowRight />
            </Link>
          </div>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="tile-interactive featured-media min-w-0 self-center"
        >
          <img
            src={project.image}
            alt="YAHATVP transparency dashboard screenshot"
            className="card-media"
          />
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjectSpotlight;
