import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const FeaturedProjectSpotlight = () => {
  return (
    <section className="relative min-w-0 overflow-hidden border-y border-soft py-10 text-secondary sm:py-14">
      <div className="grid min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="min-w-0 space-y-6 lg:pr-4">
          <p className="section-kicker">Featured build</p>
          <h2 className="text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            Groq AllIn Studio bundles 12 AI assistants into one workspace.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-secondary sm:text-base">
            The AllIn workspace brings Flux image labs, structured output flows, real-time news analysis, and playful remixes into a
            single React + Vite app. A Cloudflare Worker keeps the API keys off the client while powering chat, news, and image routes.
          </p>
          <div className="grid min-w-0 gap-3 text-sm text-primary sm:grid-cols-3">
            <div className="neumorphic-press border border-soft bg-surface p-3">Flux image labs</div>
            <div className="neumorphic-press border border-soft bg-surface p-3">Structured output flows</div>
            <div className="neumorphic-press border border-soft bg-surface p-3">Worker-backed APIs</div>
          </div>
          <div className="grid gap-3 pt-2 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="https://groq-allin.thefrenchartist.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta-primary w-full sm:w-auto"
            >
              Open workspace
              <FaArrowRight />
            </a>
            <Link
              to="/posts/post12"
              className="cta cta-secondary w-full sm:w-auto"
            >
              Read build log
              <FaArrowRight />
            </Link>
          </div>
        </div>
        <a
          href="https://groq-allin.thefrenchartist.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="neumorphic-surface relative block aspect-[4/3] min-w-0 overflow-hidden bg-surface transition hover:-translate-y-1 sm:aspect-[16/10] lg:aspect-auto lg:h-96"
        >
          <img
            src="/post_images/groqallin_landing_page.webp"
            alt="Groq AllIn Studio screenshot"
            className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
          />
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjectSpotlight;
