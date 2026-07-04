import { useMemo, useState } from 'react';
import ProjectPreview from './../components/ProjectPreview';

const projects = [
  {
    image: "./post_images/jetlag-billionaire.png",
    title: "Jetlag Billionaire",
    category: "Idle game",
    filters: ["Game"],
    badges: ["Satire", "Phaser", "Clicker"],
    description: "A satirical idle clicker that turns private-jet excess into a playable carbon-cookie loop with emitters, upgrades, and fictional benchmarks.",
    link: "https://cookie-clicker.thefrenchartist.dev/"
  },
  {
    image: "./post_images/empty-room-studio.png",
    title: "Empty Room Studio",
    category: "AI image tool",
    filters: ["AI"],
    badges: ["OpenAI", "Images", "Cloudflare"],
    description: "A browser demo for uploading furnished room photos and using OpenAI image models to clear them down to walls, floors, and windows.",
    link: "https://louispaulet.github.io/empty-room-demo/"
  },
  {
    image: "./post_images/michelin-restaurants.webp",
    title: "Michelin Restaurants",
    category: "Data map",
    filters: ["Data"],
    badges: ["Wikidata", "Map", "Dining"],
    description: "A searchable list and map for exploring Michelin-starred restaurants from Wikidata with cuisines, star tiers, and addresses.",
    link: "https://michelin.thefrenchartist.dev/#/"
  },
  {
    image: "./post_images/self-investigation.webp",
    title: "Self Investigation",
    category: "Activity dashboard",
    filters: ["Data"],
    badges: ["GitHub", "Analytics", "Data"],
    description: "A personal dashboard for exploring five years of GitHub commit rhythms, repository focus, message themes, and work cadence.",
    link: "https://selfinvest.thefrenchartist.dev/#/"
  },
  {
    image: "./post_images/repetitive-sums-hero-wide.png",
    title: "Repetitive Sums Benchmark",
    category: "LLM benchmark",
    filters: ["AI", "Benchmark"],
    badges: ["Benchmark", "LLM", "Arithmetic"],
    description: "A live leaderboard and dot-matrix explorer for comparing how language models handle repetitive sums from 2 through 100.",
    link: "https://repsums.thefrenchartist.dev/#/"
  },
  {
    image: "./post_images/facial-expression-detection.webp",
    title: "Facial Expression Detection",
    category: "Browser ML",
    filters: ["AI", "Browser ML"],
    badges: ["Browser-only", "AI", "Privacy"],
    description: "A local-only webcam demo that compares FaceAPI and Human for browser-based facial expression detection while keeping frames on device.",
    link: "https://face-classifier.thefrenchartist.dev/#/"
  },
  {
    image: "./post_images/strange-wikipedia-atlas-preview.webp",
    title: "Strange Wikipedia Atlas",
    category: "Knowledge graph",
    filters: ["AI", "Data"],
    badges: ["Knowledge", "Data", "Graph"],
    description: "A curated atlas of unusual Wikipedia pages with editorial collections, semantic graph exploration, and generated rabbit-hole trails.",
    link: "https://wunderwiki.thefrenchartist.dev/"
  },
  {
    image: "./post_images/ponzi-simulator.jpg",
    title: "Ponzi Simulator",
    category: "Simulation",
    filters: ["Data"],
    badges: ["Simulation", "Education", "Data"],
    description: "An educational simulator for tuning recruitment-driven fraud scenarios and watching reserves, liabilities, payouts, and collapse risk evolve month by month.",
    link: "https://ponzi.thefrenchartist.dev/"
  },
  {
    image: "./post_images/simple-city-builder.webp",
    title: "Simple City Builder",
    category: "Browser game",
    filters: ["Game"],
    badges: ["3D", "Game", "Simulation"],
    description: "A 3D city builder for placing homes, roads, bridges, and services while managing citizens, funds, happiness, fitness, and the city economy.",
    link: "https://city-builder.thefrenchartist.dev/"
  },
  {
    image: "./post_images/groqallin_landing_page.webp",
    title: "Groq AllIn Studio",
    category: "AI workspace",
    filters: ["AI"],
    badges: ["AI", "Cloudflare", "Workspace"],
    description: "A unified React + Vite workspace that bundles twelve Groq-powered assistants, Flux image labs, and structured `/obj` flows behind a single polished shell.",
    link: "https://groq-allin.thefrenchartist.dev/"
  },
  
  {
    image: "./post_images/dataviz_homepage.webp", 
    title: "HATVP Dataviz",
    category: "Data visualization",
    filters: ["Data"],
    badges: ["Civic data", "Charts", "Open data"],
    description: "Interactive charts for exploring French public representative data and the possibilities of open civic datasets.",
    link: "https://hatvp-dataviz.thefrenchartist.dev/"
  },
  {
    image: "./post_images/exquisite_menus.webp", 
    title: "Exquisite Menus",
    category: "Generative media",
    filters: ["AI"],
    badges: ["Generative", "Images", "AI"],
    description: "An AI dining atlas where OpenAI Image Generator v2.0 visualizes fictional cuisine, restaurants, hot sauces, and menu worlds.",
    link: "https://exquisite-menus.thefrenchartist.dev/"
  },
    {
    image: "./post_images/mnist-website.webp", 
    title: "MNIST in the browser",
    category: "Browser ML",
    filters: ["AI", "Browser ML"],
    badges: ["TensorFlow.js", "Browser ML", "Demo"],
    description: "Handwritten digit recognition running directly in the browser with TensorFlow.js.",
    link: "https://mnist.thefrenchartist.dev/"
  },
    {
    image: "./post_images/maze_benchmark.png", 
    title: "Maze Benchmark",
    category: "LLM benchmark",
    filters: ["AI", "Benchmark"],
    badges: ["Benchmark", "Three.js", "LLM"],
    description: "A benchmark that asks LLMs to generate interactive 3D mazes in JavaScript and Three.js.",
    link: "https://louispaulet.github.io/maze_benchmark/"
  },
  {
    image: "./post_images/timeline_generator.webp", 
    title: "Timeline Generator",
    category: "AI interface",
    filters: ["AI"],
    badges: ["AI", "Interface", "Timeline"],
    description: "Turn a prompt into a clean visual timeline for an event, topic, or story.",
    link: "https://timeline.thefrenchartist.dev/#/timeline"
  },
  // {
  //   image: "./post_images/hatvp-rag-assistant-capture.gif",
  //   title: "HATVP RAG Assistant",
  //   description: "An assistant to help discover french representative data using RAG to prevent hallucinations",
  //   link: "https://hatvp-rag.thefrenchartist.dev/"
  // },
  {
    image: "./post_images/youtube_recomender_project_thumbnail.webp",
    title: "GPT YouTube Recommender",
    category: "Recommendation system",
    filters: ["AI"],
    badges: ["Recommendation", "GPT", "Discovery"],
    description: "Personalized YouTube channel suggestions powered by GPT-4.1-nano.",
    link: "https://gpt-reco.thefrenchartist.dev/"
  }
];

const filters = ['All', 'AI', 'Data', 'Browser ML', 'Benchmark', 'Game'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.filters.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="space-y-10 text-secondary">
      <header className="grid gap-6 border-b border-soft pb-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="section-kicker">Shipped projects</p>
          <h1 className="mt-3 text-4xl font-semibold text-primary sm:text-5xl">Projects you can open</h1>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-secondary lg:justify-self-end">
          Working builds across AI tooling, open data, browser inference, and playful product experiments. Each card points to something live, inspectable, or ready to try.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={[
              'border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition',
              activeFilter === filter
                ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                : 'border-soft bg-white/70 text-secondary hover:border-[var(--color-accent)] hover:text-primary',
            ].join(' ')}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectPreview
            key={project.title}
            image={project.image}
            title={project.title}
            category={project.category}
            description={project.description}
            link={project.link}
            badges={project.badges}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
