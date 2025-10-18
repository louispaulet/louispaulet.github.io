// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './../components/SocialLinks';
import LatestPosts from './../components/LatestPosts';

const Home = () => {
  return (
    <div className="space-y-20 text-secondary">
      <section className="relative overflow-hidden neumorphic-surface px-6 py-16 sm:px-10">
        <div className="absolute inset-y-0 left-0 w-1 bg-[var(--color-accent)]/60" />
        <div className="relative space-y-10">
          <p className="inline-flex items-center gap-3 px-4 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-accent">
            <span className="serif-accent text-base font-semibold">Insight-driven builds</span>
          </p>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-primary sm:text-5xl md:text-6xl">
              Welcome to the studio where data science meets product craftsmanship.
            </h1>
            <p className="max-w-2xl text-lg text-secondary sm:text-xl">
              I design, prototype, and ship analytical experiences that feel as polished as the tech powering them. Explore
              <Link
                to="/projects"
                className="ml-1 underline decoration-[var(--color-accent)] underline-offset-4 transition hover:text-accent"
              >
                production-ready experiments
              </Link>{' '}
              and thoughtful takes on the future of AI tooling.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              className="neumorphic-button inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-primary hover:text-accent"
            >
              Meet Louis Paulet
            </Link>
            <Link
              to="/cv"
              className="neumorphic-button inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-primary hover:text-accent"
            >
              Access the CV
            </Link>
          </div>
          <div className="grid gap-4 text-sm sm:grid-cols-3">
            <div className="tile-static neumorphic-surface space-y-3 p-4">
              <span className="tile-indicator tile-indicator--static">Info</span>
              <p className="text-3xl font-bold text-primary">20+</p>
              <p className="text-secondary">Products & experiments launched to the public.</p>
            </div>
            <div className="tile-static neumorphic-surface space-y-3 p-4">
              <span className="tile-indicator tile-indicator--static">Info</span>
              <p className="text-3xl font-bold text-primary">Full-stack</p>
              <p className="text-secondary">From insight modeling to polished front-end delivery.</p>
            </div>
            <div className="tile-static neumorphic-surface space-y-3 p-4">
              <span className="tile-indicator tile-indicator--static">Info</span>
              <p className="text-3xl font-bold text-primary">Always shipping</p>
              <p className="text-secondary">Zero to live experiences using modern AI pipelines.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="neumorphic-surface p-8">
        <LatestPosts />
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        <div className="tile-static neumorphic-surface space-y-4 p-8">
          <span className="tile-indicator tile-indicator--static">Info</span>
          <h2 className="text-xs font-semibold uppercase tracking-[0.5em] text-secondary">AI Systems</h2>
          <p className="mt-4 text-2xl font-semibold text-primary">Applied intelligence that scales.</p>
          <p className="mt-3 text-sm text-secondary">
            From retrieval augmented generation to in-browser inference, explore experiments that bridge research and production rigor.
          </p>
        </div>
        <div className="tile-static neumorphic-surface space-y-4 p-8">
          <span className="tile-indicator tile-indicator--static">Info</span>
          <h2 className="text-xs font-semibold uppercase tracking-[0.5em] text-secondary">Design Language</h2>
          <p className="mt-4 text-2xl font-semibold text-primary">Experiences inspired by enterprise polish.</p>
          <p className="mt-3 text-sm text-secondary">
            Interfaces that feel at home in the biggest tech companies, crafted with intent, motion, and depth.
          </p>
        </div>
        <div className="tile-static neumorphic-surface space-y-4 p-8">
          <span className="tile-indicator tile-indicator--static">Info</span>
          <h2 className="text-xs font-semibold uppercase tracking-[0.5em] text-secondary">Open Data</h2>
          <p className="mt-4 text-2xl font-semibold text-primary">Transparent analytics for public good.</p>
          <p className="mt-3 text-sm text-secondary">
            Dive into visual narratives, civic transparency tools, and open-source projects ready for collaboration.
          </p>
        </div>
      </section>

      <section className="neumorphic-surface p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl">Let’s build the next data experience together.</h2>
            <p className="mt-3 max-w-2xl text-sm text-secondary">
              Whether you need a product engineer for your next launch or a data scientist to pressure-test your AI roadmap, I’d love to collaborate.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="neumorphic-button inline-flex items-center px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary hover:text-accent"
            >
              Browse live builds
            </Link>
            <Link
              to="/about"
              className="neumorphic-button inline-flex items-center px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary hover:text-accent"
            >
              Partner with Louis
            </Link>
          </div>
        </div>
        <SocialLinks />
      </section>
    </div>
  );
};

export default Home;
