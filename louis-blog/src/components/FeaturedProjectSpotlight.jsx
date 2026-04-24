import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const FeaturedProjectSpotlight = () => {
  return (
    <section className="relative overflow-hidden border-y border-soft py-12 text-secondary sm:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-6 lg:pr-4">
          <p className="section-kicker">Current flagship</p>
          <h2 className="text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            Groq AllIn Studio is now live with 12 assistants in one shell.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-secondary sm:text-base">
            The new AllIn workspace unifies Flux image labs, schema-driven `/obj` flows, real-time news analysis, and playful remixes
            behind a single React + Vite experience. A Cloudflare Worker keeps Groq and Together keys secure while powering chat, news,
            and image APIs.
          </p>
          <div className="grid gap-3 text-sm text-primary sm:grid-cols-3">
            <div className="neumorphic-press border border-soft bg-surface p-3">Flux image labs</div>
            <div className="neumorphic-press border border-soft bg-surface p-3">Structured `/obj` flows</div>
            <div className="neumorphic-press border border-soft bg-surface p-3">Cloudflare Worker APIs</div>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://groq-allin.thefrenchartist.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="neumorphic-button inline-flex items-center gap-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary transition hover:text-accent"
            >
              Launch the workspace
              <FaArrowRight />
            </a>
            <Link
              to="/posts/post12"
              className="inline-flex items-center gap-3 border border-strong bg-white/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary transition hover:border-[var(--color-accent)] hover:text-accent"
            >
              Read the build log
              <FaArrowRight />
            </Link>
          </div>
        </div>
        <a
          href="https://groq-allin.thefrenchartist.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="neumorphic-surface relative block h-72 overflow-hidden bg-surface transition hover:-translate-y-1 sm:h-96"
        >
          <img
            src="/post_images/groqallin_landing_page.webp"
            alt="Groq AllIn Studio illustration"
            className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
          />
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjectSpotlight;
