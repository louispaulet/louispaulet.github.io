// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './../components/SocialLinks';
import LatestPosts from './../components/LatestPosts';

const Home = () => {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden p-10 sm:p-14">
        <div className="neuo-panel absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-20" />
        <div className="absolute -right-20 top-10 h-52 w-52 bg-brand-accent/20 blur-3xl" />
        <div className="absolute left-10 top-0 h-32 w-px bg-gradient-to-b from-brand-accent/60 via-transparent to-transparent" />
        <div className="relative space-y-12">
          <span className="neuo-chip">Insight-driven builds</span>
          <div className="space-y-6">
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Data products engineered with FAANG-grade polish.
            </h1>
            <p className="max-w-2xl text-lg text-muted sm:text-xl">
              I architect analytical experiences that balance rigorous infrastructure with elegant human interfaces. Explore
              <Link to="/projects" className="ml-2 text-brand-accent underline decoration-brand-accent/40 underline-offset-4">
                production launches
              </Link>{' '}
              and long-form build logs crafted for decision-makers.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/about" className="neuo-button">
              Meet Louis Paulet
            </Link>
            <Link to="/cv" className="neuo-button neuo-button--accent">
              Access the CV
            </Link>
          </div>
          <div className="grid gap-5 text-sm text-muted sm:grid-cols-3">
            <div className="neuo-panel--soft p-6">
              <p className="font-display text-3xl font-semibold text-white">20+</p>
              <p className="mt-2">Shipped experiments and product surfaces.</p>
            </div>
            <div className="neuo-panel--soft p-6">
              <p className="font-display text-3xl font-semibold text-white">Full-stack</p>
              <p className="mt-2">From modelling pipelines to enterprise-grade UI.</p>
            </div>
            <div className="neuo-panel--soft p-6">
              <p className="font-display text-3xl font-semibold text-white">In-production</p>
              <p className="mt-2">Systems relied on by teams across Europe.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="neuo-panel--soft p-10 shadow-brand-neuo">
        <LatestPosts />
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        <div className="neuo-panel--soft p-8 transition hover:shadow-brand-neuo">
          <h2 className="text-sm uppercase tracking-megawide text-brand-accent/80">AI Systems</h2>
          <p className="mt-4 font-display text-2xl font-semibold text-white">Applied intelligence that scales.</p>
          <p className="mt-3 text-sm text-muted">
            From retrieval augmented generation to in-browser inference, explore experiments that bridge research and production rigor.
          </p>
        </div>
        <div className="neuo-panel--soft p-8 transition hover:shadow-brand-neuo">
          <h2 className="text-sm uppercase tracking-megawide text-brand-accent/80">Design Language</h2>
          <p className="mt-4 font-display text-2xl font-semibold text-white">Experiences inspired by enterprise polish.</p>
          <p className="mt-3 text-sm text-muted">
            Interfaces that feel at home in leading product organisations, crafted with intent, motion, and depth.
          </p>
        </div>
        <div className="neuo-panel--soft p-8 transition hover:shadow-brand-neuo">
          <h2 className="text-sm uppercase tracking-megawide text-brand-accent/80">Open Data</h2>
          <p className="mt-4 font-display text-2xl font-semibold text-white">Transparent analytics for public good.</p>
          <p className="mt-3 text-sm text-muted">
            Dive into visual narratives, civic transparency tools, and open-source projects ready for collaboration.
          </p>
        </div>
      </section>

      <section className="neuo-panel--soft p-10 shadow-brand-neuo-soft">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Let’s build the next data experience together.</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              Whether you need a product engineer for your next launch or a data scientist to pressure-test your AI roadmap, I’d love to collaborate.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/projects" className="neuo-button">
              Browse live builds
            </Link>
            <Link to="/about" className="neuo-button neuo-button--accent">
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
