// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './../components/SocialLinks';
import LatestPosts from './../components/LatestPosts';

const Home = () => {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-700 px-6 py-16 shadow-2xl shadow-blue-950/40 sm:px-10">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-400/40 blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="relative space-y-10 text-white">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-blue-100">
            Insight-driven builds
          </p>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Welcome to the studio where data science meets product craftsmanship.
            </h1>
            <p className="max-w-2xl text-lg text-blue-100 sm:text-xl">
              I design, prototype, and ship analytical experiences that feel as polished as the tech powering them. Explore
              <Link to="/projects" className="ml-1 underline decoration-blue-200/60 underline-offset-4 transition hover:text-white">
                production-ready experiments
              </Link>{' '}
              and thoughtful takes on the future of AI tooling.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-900/40 transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              Meet Louis Paulet
            </Link>
            <Link
              to="/cv"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold tracking-wide text-blue-700 shadow-lg shadow-blue-900/40 transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Access the CV
            </Link>
          </div>
          <div className="grid gap-4 text-sm text-blue-100 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
              <p className="text-3xl font-bold text-white">20+</p>
              <p>Products & experiments launched to the public.</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
              <p className="text-3xl font-bold text-white">Full-stack</p>
              <p>From insight modeling to polished front-end delivery.</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
              <p className="text-3xl font-bold text-white">Always shipping</p>
              <p>Zero to live experiences using modern AI pipelines.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-blue-950/40">
        <LatestPosts />
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl transition hover:-translate-y-1 hover:border-blue-400/40">
          <h2 className="text-lg font-semibold uppercase tracking-[0.4em] text-blue-300">AI Systems</h2>
          <p className="mt-4 text-2xl font-semibold text-white">Applied intelligence that scales.</p>
          <p className="mt-3 text-sm text-slate-300">
            From retrieval augmented generation to in-browser inference, explore experiments that bridge research and production
            rigor.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl transition hover:-translate-y-1 hover:border-blue-400/40">
          <h2 className="text-lg font-semibold uppercase tracking-[0.4em] text-blue-300">Design Language</h2>
          <p className="mt-4 text-2xl font-semibold text-white">Experiences inspired by enterprise polish.</p>
          <p className="mt-3 text-sm text-slate-300">
            Interfaces that feel at home in the biggest tech companies, crafted with intent, motion, and depth.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl transition hover:-translate-y-1 hover:border-blue-400/40">
          <h2 className="text-lg font-semibold uppercase tracking-[0.4em] text-blue-300">Open data</h2>
          <p className="mt-4 text-2xl font-semibold text-white">Transparent analytics for public good.</p>
          <p className="mt-3 text-sm text-slate-300">
            Dive into visual narratives, civic transparency tools, and open-source projects ready for collaboration.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let’s build the next data experience together.</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Whether you need a product engineer for your next launch or a data scientist to pressure-test your AI roadmap, I’d love to collaborate.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-full border border-blue-400/50 px-6 py-3 text-sm font-semibold text-blue-200 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-500/20"
            >
              Browse live builds
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
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
