// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChartLine, FaCodeBranch, FaLayerGroup } from 'react-icons/fa6';
import SocialLinks from './../components/SocialLinks';
import LatestPosts from './../components/LatestPosts';
import FeaturedProjectSpotlight from './../components/FeaturedProjectSpotlight';

const Home = () => {
  const metrics = [
    ['20+', 'public products and experiments shipped'],
    ['Full-stack', 'from analytical modeling to production interface'],
    ['AI systems', 'retrieval, inference, agents, and product workflows'],
  ];

  const focusAreas = [
    {
      icon: <FaLayerGroup />,
      title: 'AI systems with product shape',
      copy: 'Assistants, retrieval workflows, browser inference, and applied ML demos that can survive real users.',
    },
    {
      icon: <FaChartLine />,
      title: 'Data interfaces that explain themselves',
      copy: 'Dashboards and analytical products where structure, contrast, and interaction carry the meaning.',
    },
    {
      icon: <FaCodeBranch />,
      title: 'Prototype to public launch',
      copy: 'Fast experiments hardened into deployed React, Vite, Cloudflare, and open-source experiences.',
    },
  ];

  return (
    <div className="space-y-14 text-secondary sm:space-y-20">
      <section className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch">
        <div className="neumorphic-surface relative overflow-hidden px-6 py-14 sm:px-10 sm:py-16">
          <div className="absolute left-0 top-0 h-full w-[3px] bg-[var(--color-accent)]" />
          <div className="relative max-w-4xl space-y-8">
            <p className="section-kicker">AI products · data systems · production craft</p>
            <div className="space-y-6">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-primary sm:text-5xl md:text-6xl">
                I build sharp data products and AI systems that move from prototype to public launch.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-secondary">
                I design, prototype, and ship analytical experiences with the engineering depth of a data scientist and the finish of a product builder.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="neumorphic-button inline-flex items-center gap-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary hover:text-accent"
              >
                Browse live builds
                <FaArrowRight />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 border border-strong bg-white/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary transition hover:border-[var(--color-accent)] hover:text-accent"
              >
                Meet Louis
                <FaArrowRight />
              </Link>
              <Link
                to="/cv"
                className="inline-flex items-center gap-3 px-2 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary transition hover:text-accent"
              >
                CV
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <aside className="grid gap-3">
          {metrics.map(([value, label]) => (
            <div key={value} className="tile-static px-5 py-6">
              <p className="text-3xl font-semibold text-primary">{value}</p>
              <p className="mt-3 text-sm leading-6 text-secondary">{label}</p>
            </div>
          ))}
        </aside>
      </section>

      <FeaturedProjectSpotlight />

      <section className="grid gap-5 lg:grid-cols-3">
        {focusAreas.map((area) => (
          <div key={area.title} className="tile-static p-6 sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center border border-soft bg-surface text-lg text-accent shadow-[inset_3px_3px_8px_rgba(89,108,135,0.1),inset_-3px_-3px_8px_rgba(255,255,255,0.82)]">
              {area.icon}
            </div>
            <h2 className="mt-7 text-2xl font-semibold text-primary">{area.title}</h2>
            <p className="mt-4 text-sm leading-7 text-secondary">{area.copy}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="space-y-4">
          <p className="section-kicker">Writing</p>
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">Notes from builds, benchmarks, and product experiments.</h2>
          <p className="text-sm leading-7 text-secondary">
            The archive is shaped for scanning first: recent work, technical context, and a direct path into the full article.
          </p>
          <Link
            to="/posts"
            className="neumorphic-button inline-flex items-center gap-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary hover:text-accent"
          >
            View all writing
            <FaArrowRight />
          </Link>
        </div>
        <div className="neumorphic-surface p-5 sm:p-6">
          <LatestPosts compact />
        </div>
      </section>

      <section className="neumorphic-surface p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="section-kicker">Collaboration</p>
            <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">Let’s build the next data experience together.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-secondary">
              Whether you need a product engineer for your next launch or a data scientist to pressure-test your AI roadmap, I’d love to collaborate.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <Link
              to="/projects"
              className="neumorphic-button inline-flex items-center gap-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary hover:text-accent"
            >
              Live builds
              <FaArrowRight />
            </Link>
            <Link
              to="/about"
              className="neumorphic-button inline-flex items-center gap-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary hover:text-accent"
            >
              About Louis
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
