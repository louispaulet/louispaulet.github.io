import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const FeaturedProjectSpotlight = () => {
  return (
    <section className="relative min-w-0 overflow-hidden border-y border-soft py-10 text-secondary sm:py-14">
      <div className="grid min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="min-w-0 space-y-6 lg:pr-4">
          <p className="section-kicker">Featured build</p>
          <h2 className="text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            YAHATVP makes current HATVP data easier to inspect.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-secondary sm:text-base">
            A source-linked dashboard for the latest HATVP snapshot, backed by an auditable weekly ingestion pipeline that keeps
            provenance, quality checks, and historical archives close to the data.
          </p>
          <div className="grid min-w-0 gap-3 text-sm text-primary sm:grid-cols-3">
            <div className="neumorphic-press border border-soft bg-surface p-3">Weekly snapshots</div>
            <div className="neumorphic-press border border-soft bg-surface p-3">Source-linked records</div>
            <div className="neumorphic-press border border-soft bg-surface p-3">Auditable pipeline</div>
          </div>
          <div className="grid gap-3 pt-2 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="https://yahatvp.thefrenchartist.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta-primary w-full sm:w-auto"
            >
              Open dashboard
              <FaArrowRight />
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
          href="https://yahatvp.thefrenchartist.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="neumorphic-surface relative block aspect-[4/3] min-w-0 overflow-hidden bg-surface transition hover:-translate-y-1 sm:aspect-[16/10] lg:aspect-auto lg:h-96"
        >
          <img
            src="/post_images/project-yahatvp-dashboard.png"
            alt="YAHATVP transparency dashboard screenshot"
            className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
          />
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjectSpotlight;
