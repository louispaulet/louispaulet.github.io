import { snapshotProjects } from '../ProjectData';
// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import {
  FaArrowUpRightFromSquare,
  FaArrowRight,
  FaChartLine,
  FaCodeBranch,
  FaLayerGroup,
} from 'react-icons/fa6';
import SocialLinks from './../components/SocialLinks';
import LatestPosts from './../components/LatestPosts';
import FeaturedProjectSpotlight from './../components/FeaturedProjectSpotlight';

const Home = () => {
  const metrics = [
    ['20+', 'public builds and experiments'],
    ['Full-stack', 'from data modeling to usable interfaces'],
    ['AI systems', 'retrieval, browser ML, agents, and workflow tools'],
  ];

  const focusAreas = [
    {
      icon: <FaLayerGroup />,
      title: 'AI tools with an interface',
      copy: 'Assistants, retrieval workflows, browser inference, and applied ML demos built for real users.',
    },
    {
      icon: <FaChartLine />,
      title: 'Data interfaces that make the point',
      copy: 'Dashboards and analytical tools that make patterns easier to inspect, question, and share.',
    },
    {
      icon: <FaCodeBranch />,
      title: 'Prototype, then ship',
      copy: 'Fast experiments turned into React, Vite, Cloudflare, and open-source deployments.',
    },
  ];

  return (
    <div className="section-stack min-w-0 text-secondary">
      <section className="surface relative overflow-hidden">
        <div className="grid gap-0">
          <div className="relative min-w-0 px-6 py-8 sm:px-8 sm:py-10">
            <div className="absolute left-0 top-0 h-full w-[3px] bg-[var(--color-accent)]" />
            <div className="relative min-w-0 max-w-4xl space-y-6">
              <p className="section-kicker">
                AI tools · data interfaces · build logs
              </p>
              <div className="min-w-0 space-y-5 sm:space-y-6">
                <h1 className="max-w-4xl text-[clamp(2.25rem,4vw,3rem)] font-semibold leading-[1.08] text-primary">
                  I turn data and AI ideas into working tools people can try.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
                  I prototype, test, and ship web experiences where the model,
                  data, and interface all have to earn their place.
                </p>
              </div>
              <div className="grid min-w-0 gap-3 sm:flex sm:flex-wrap sm:items-center">
                <Link
                  to="/projects"
                  className="cta cta-primary w-full sm:w-auto"
                >
                  Explore projects
                  <FaArrowRight />
                </Link>
                <Link
                  to="/about"
                  className="cta cta-secondary w-full sm:w-auto"
                >
                  About me
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="project-snapshot-grid border-t border-soft bg-white/45">
          {snapshotProjects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-snapshot-tile"
            >
              <img
                src={project.image}
                alt={project.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <span>
                {project.title}
                <FaArrowUpRightFromSquare aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
          ))}
        </div>
        <aside className="grid min-w-0 border-t border-soft bg-surface sm:grid-cols-3 sm:divide-x sm:divide-[var(--color-border)]">
          {metrics.map(([value, label]) => (
            <div
              key={value}
              className="grid min-w-0 grid-cols-[6rem_1fr] items-baseline gap-x-3 px-6 py-3 sm:block sm:py-4"
            >
              <p className="text-xl font-semibold text-primary">{value}</p>
              <p className="mt-1 text-sm leading-6 text-secondary">{label}</p>
            </div>
          ))}
        </aside>
      </section>

      <FeaturedProjectSpotlight />

      <section className="content-grid">
        {focusAreas.map((area) => (
          <div key={area.title} className="tile-static min-w-0 p-5 sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center border border-soft bg-surface text-lg text-accent">
              {area.icon}
            </div>
            <h2 className="card-title mt-5">{area.title}</h2>
            <p className="mt-4 text-base leading-7 text-secondary">
              {area.copy}
            </p>
          </div>
        ))}
      </section>

      <section className="grid min-w-0 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="min-w-0 space-y-4">
          <p className="section-kicker">Writing</p>
          <h2 className="section-title text-primary">
            Build notes, benchmark writeups, and project logs.
          </h2>
          <p className="text-base leading-7 text-secondary">
            A running archive of what I tested, what broke, and what shipped.
          </p>
        </div>
        <div className="min-w-0">
          <LatestPosts compact />
        </div>
      </section>

      <section className="surface min-w-0 p-5 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="section-kicker">Collaboration</p>
            <h2 className="mt-3 section-title text-primary">
              Have a data or AI tool to build?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-secondary">
              I am interested in practical, testable products: prototypes that
              teach us something, systems that can ship, and interfaces people
              can actually use.
            </p>
          </div>
          <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center lg:justify-end">
            <Link to="/projects" className="cta cta-primary w-full sm:w-auto">
              See projects
              <FaArrowRight />
            </Link>
            <Link to="/about" className="cta cta-secondary w-full sm:w-auto">
              About me
              <FaArrowRight />
            </Link>
          </div>
        </div>
        <SocialLinks />
      </section>
    </div>
  );
};

export default Home;
