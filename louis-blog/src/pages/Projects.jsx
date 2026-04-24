import ProjectPreview from './../components/ProjectPreview';

const projects = [
  {
    image: "./post_images/groqallin_landing_page.webp",
    title: "Groq AllIn Studio",
    category: "AI workspace",
    description: "A unified React + Vite workspace that bundles twelve Groq-powered assistants, Flux image labs, and structured `/obj` flows behind a single polished shell.",
    link: "https://groq-allin.thefrenchartist.dev/"
  },
  
  {
    image: "./post_images/dataviz_homepage.webp", 
    title: "HATVP Dataviz",
    category: "Data visualization",
    description: "Interactive charts for exploring French public representative data and the possibilities of open civic datasets.",
    link: "https://hatvp-dataviz.thefrenchartist.dev/"
  },
  {
    image: "./post_images/exquisite_menus.webp", 
    title: "Exquisite Menus",
    category: "Generative media",
    description: "Fictional restaurant menus generated with GPT-4, paired with dish images created using FLUX.",
    link: "https://exquisite-menus.thefrenchartist.dev/"
  },
    {
    image: "./post_images/mnist-website.webp", 
    title: "MNIST in the browser",
    category: "Browser ML",
    description: "Handwritten digit recognition running directly in the browser with TensorFlow.js.",
    link: "https://mnist.thefrenchartist.dev/"
  },
    {
    image: "./post_images/maze_benchmark.png", 
    title: "Maze Benchmark",
    category: "LLM benchmark",
    description: "A benchmark that asks LLMs to generate interactive 3D mazes in JavaScript and Three.js.",
    link: "https://louispaulet.github.io/maze_benchmark/"
  },
  {
    image: "./post_images/timeline_generator.webp", 
    title: "Timeline Generator",
    category: "AI interface",
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
    description: "Personalized YouTube channel suggestions powered by GPT-4.1-nano.",
    link: "https://gpt-reco.thefrenchartist.dev/"
  }
];

const Projects = () => {
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

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectPreview
            key={index}
            image={project.image}
            title={project.title}
            category={project.category}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
