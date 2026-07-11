// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChartLine, FaCodeBranch, FaLayerGroup } from 'react-icons/fa6';
import SocialLinks from './../components/SocialLinks';
import LatestPosts from './../components/LatestPosts';
import FeaturedProjectSpotlight from './../components/FeaturedProjectSpotlight';

const Home = () => {
  const metrics = [
    ['20+', 'public builds and experiments'],
    ['Full-stack', 'from data modeling to usable interfaces'],
    ['AI systems', 'retrieval, browser ML, agents, and workflow tools'],
  ];
  const projectSnapshots = [
    ['/post_images/groqallin_landing_page.webp', 'Groq AllIn Studio'],
    ['/post_images/strange-wikipedia-atlas-preview.webp', 'Strange Wikipedia Atlas'],
    ['/post_images/maze_benchmark.png', 'Maze Benchmark'],
    ['/post_images/dataviz_homepage.webp', 'HATVP Dataviz'],
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
    <div className="min-w-0 space-y-12 text-secondary sm:space-y-16 lg:space-y-20">
      <section className="neumorphic-surface relative overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative min-w-0 px-5 py-9 sm:px-10 sm:py-14 lg:py-16">
            <div className="absolute left-0 top-0 h-full w-[3px] bg-[var(--color-accent)]" />
            <div className="relative min-w-0 max-w-4xl space-y-7 sm:space-y-8">
              <p className="section-kicker">AI tools · data interfaces · build logs</p>
              <div className="min-w-0 space-y-5 sm:space-y-6">
                <h1 className="max-w-4xl text-[clamp(2.25rem,9vw,3.75rem)] font-semibold leading-[1.08] text-primary">
                  I turn data and AI ideas into working tools people can try.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
                  I prototype, test, and ship web experiences where the model, data, and interface all have to earn their place.
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
                <Link
                  to="/cv"
                  className="cta cta-tertiary w-full sm:w-auto"
                >
                  CV
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>

          <aside className="grid min-w-0 divide-y divide-[var(--color-border)] border-t border-soft bg-surface/70 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:grid-cols-1 lg:divide-x-0 lg:divide-y lg:border-l lg:border-t-0">
            {metrics.map(([value, label]) => (
              <div key={value} className="min-w-0 px-5 py-5 sm:px-4 sm:py-6 lg:px-6">
                <p className="text-2xl font-semibold text-primary sm:text-3xl">{value}</p>
                <p className="mt-2 text-sm leading-6 text-secondary sm:mt-3">{label}</p>
              </div>
            ))}
          </aside>
        </div>
        <div className="project-snapshot-grid border-t border-soft bg-white/45">
          {projectSnapshots.map(([src, alt], index) => (
            <Link
              key={alt}
              to="/projects"
              className="project-snapshot-tile group"
            >
              <img
                src={src}
                alt={alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="h-full w-full object-cover object-center opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <span className="absolute inset-x-0 bottom-0 line-clamp-2 bg-[rgba(19,42,85,0.84)] px-2 py-2 text-[0.56rem] font-semibold uppercase leading-4 tracking-[0.1em] text-white sm:px-3 sm:text-[0.62rem] sm:tracking-[0.12em]">
                {alt}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <FeaturedProjectSpotlight />

      <section className="grid min-w-0 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {focusAreas.map((area) => (
          <div key={area.title} className="tile-static min-w-0 p-5 sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center border border-soft bg-surface text-lg text-accent shadow-[inset_3px_3px_8px_rgba(89,108,135,0.1),inset_-3px_-3px_8px_rgba(255,255,255,0.82)]">
              {area.icon}
            </div>
            <h2 className="mt-7 text-2xl font-semibold text-primary">{area.title}</h2>
            <p className="mt-4 text-sm leading-7 text-secondary">{area.copy}</p>
          </div>
        ))}
      </section>

      <section className="grid min-w-0 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="min-w-0 space-y-4">
          <p className="section-kicker">Writing</p>
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">Build notes, benchmark writeups, and project logs.</h2>
          <p className="text-sm leading-7 text-secondary">
            A running archive of what I tested, what broke, and what shipped.
          </p>
          <Link
            to="/posts"
            className="cta cta-secondary"
          >
            Read the archive
            <FaArrowRight />
          </Link>
        </div>
        <div className="neumorphic-surface min-w-0 p-4 sm:p-6">
          <LatestPosts compact />
        </div>
      </section>

      <section className="neumorphic-surface min-w-0 p-5 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="section-kicker">Collaboration</p>
            <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">Have a data or AI tool to build?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-secondary">
              I am interested in practical, testable products: prototypes that teach us something, systems that can ship, and interfaces people can actually use.
            </p>
          </div>
          <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center lg:justify-end">
            <Link
              to="/projects"
              className="cta cta-primary w-full sm:w-auto"
            >
              See projects
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
        <SocialLinks />
      </section>
    </div>
  );
};

export default Home;
