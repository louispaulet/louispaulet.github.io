import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProjectSpotlight = () => {
  return (
    <section className="relative overflow-hidden neumorphic-surface px-6 py-12 text-secondary sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/15 via-transparent to-[#f4f7ff]" />
      <div className="relative grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 border border-soft bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-accent">
            Spotlight launch
          </span>
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Groq AllIn Studio is now live with 12 assistants in one shell.
          </h2>
          <p className="max-w-2xl text-sm text-secondary sm:text-base">
            The new AllIn workspace unifies Flux image labs, schema-driven `/obj` flows, real-time news analysis, and playful remixes
            behind a single React + Vite experience. A Cloudflare Worker keeps Groq and Together keys secure while powering chat, news,
            and image APIs.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            <span className="tile-indicator tile-indicator--interactive">Flux gallery</span>
            <span className="tile-indicator tile-indicator--interactive">/obj schemas</span>
            <span className="tile-indicator tile-indicator--interactive">Cloudflare Worker</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://groq-allin.thefrenchartist.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="neumorphic-button inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-primary transition hover:text-accent"
            >
              Launch the workspace
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <Link
              to="/posts/post12"
              className="neumorphic-button inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-primary transition hover:text-accent"
            >
              Read the build log
            </Link>
          </div>
        </div>
        <div className="relative h-64 overflow-hidden rounded-3xl border border-soft bg-surface shadow-[16px_16px_32px_rgba(185,194,212,0.35),-16px_-16px_32px_rgba(255,255,255,0.85)] sm:h-72">
          <img
            src="/post_images/groqallin_landing_page.webp"
            alt="Groq AllIn Studio illustration"
            className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#f1f3fb] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4 rounded-2xl border border-soft bg-surface/90 px-5 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary shadow-[8px_8px_18px_rgba(185,194,212,0.35)]">
            <span>Live on Groq Cloud</span>
            <span>Optimized for demos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectSpotlight;
