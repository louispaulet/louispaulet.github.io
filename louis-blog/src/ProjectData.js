const projects = [
  {
    image: "./post_images/my-nitter-instance.svg",
    title: "My Nitter Instance",
    category: "Privacy frontend",
    filters: ["Data"],
    badges: ["Nitter", "Cloud Run", "Open web"],
    description: "Read public X/Twitter posts through a small, self-hosted Nitter deployment built around upstream Nitter and running on Google Cloud.",
    link: "https://x.thefrenchartist.dev/"
  },
  {
    image: "./post_images/project-yahatvp-dashboard.png",
    title: "YAHATVP",
    category: "Civic data pipeline",
    filters: ["Data"],
    badges: ["HATVP", "Open data", "Auditable pipeline"],
    description: "Browse current HATVP declarations, snapshot counts, and standout records through a source-linked dashboard backed by an auditable weekly ingestion pipeline.",
    link: "https://yahatvp.thefrenchartist.dev/"
  },
  {
    image: "./post_images/truthcheck-ai-claim-assessment.jpg",
    title: "TruthCheck",
    category: "AI fact-checking",
    filters: ["AI"],
    badges: ["Claim assessment", "Evidence reasoning", "Public links"],
    description: "Paste a claim, article, or public link to get a quick AI-assisted assessment with transparent reasoning and prompts for deeper verification.",
    link: "https://louispaulet.github.io/debunk-fake-news/"
  },
  {
    image: "./post_images/quick-ocr-document-extraction.png",
    title: "Quick OCR",
    category: "Document OCR",
    filters: ["AI"],
    badges: ["OCR", "Translation", "Multi-page"],
    description: "Upload up to five document images, arrange them in reading order, and extract or translate a clean editable transcript while preserving the document structure.",
    link: "https://quick-ocr.thefrenchartist.dev/#/"
  },
  {
    image: "./post_images/project-deepseek-solver-live.webp",
    title: "DeepSeek Maze Solver",
    category: "Pathfinding lab",
    filters: ["AI", "Benchmark"],
    badges: ["3 generators", "4 solvers", "Seeded replay"],
    description: "Generate reproducible mazes, compare BFS, DFS, Dijkstra, and A* side by side, and scrub through each solver’s exploration step by step.",
    link: "https://maze-solver.thefrenchartist.dev/#/maze-solver"
  },
  {
    image: "./post_images/jetlag-billionaire.png",
    title: "Jetlag Billionaire",
    category: "Climate satire",
    filters: ["Game"],
    badges: ["Idle game", "Phaser", "Fictional benchmarks"],
    description: "A private-jet climate-satire clicker where tiny taps scale into absurd emissions, upgrades, achievements, and a static public-estimate-style leaderboard.",
    link: "https://cookie-clicker.thefrenchartist.dev/#/"
  },
  {
    image: "./post_images/project-empty-room-before-after.webp",
    title: "Empty Room Studio",
    category: "AI image editor",
    filters: ["AI"],
    badges: ["OpenAI Images", "Before/after", "Cloudflare Worker"],
    description: "Upload a furnished room photo, tune the image-edit request, and generate an empty-room before/after while the API key stays behind a Cloudflare Worker.",
    link: "https://louispaulet.github.io/empty-room-demo/#/"
  },
  {
    image: "./post_images/project-michelin-paris-map.webp",
    title: "Michelin Restaurants",
    category: "Open data map",
    filters: ["Data"],
    badges: ["Wikidata", "OpenStreetMap", "No inferred data"],
    description: "Explore Michelin-star award records from a fail-closed Wikidata snapshot, with explicit missing fields, country/city filters, and a mapped accessible list.",
    link: "https://michelin.thefrenchartist.dev/#/map?country=france&city=paris"
  },
  {
    image: "./post_images/project-self-investigation-average-hour.webp",
    title: "Self Investigation",
    category: "Activity study",
    filters: ["Data"],
    badges: ["GitHub", "Deployments", "Work cadence"],
    description: "A five-year study of GitHub commits and Pages deployments across repositories, message themes, daily rhythms, shipping streaks, and an “average hour.”",
    link: "https://selfinvest.thefrenchartist.dev/#/average-hour"
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
    image: "./post_images/project-face-classifier-about.webp",
    title: "Facial Expression Detection",
    category: "On-device vision",
    filters: ["AI", "Browser ML"],
    badges: ["FaceAPI", "Human", "Browser-only"],
    description: "Compare FaceAPI and Human for visible facial-expression labels using webcam frames processed entirely in the browser, with no backend or cloud expression API.",
    link: "https://face-classifier.thefrenchartist.dev/#/about"
  },
  {
    image: "./post_images/project-wunderwiki-graph.webp",
    title: "Strange Wikipedia Atlas",
    category: "Editorial atlas",
    filters: ["AI", "Data"],
    badges: ["Wikipedia", "Semantic graph", "Curated trails"],
    description: "A curated cabinet of strange Wikipedia records, themed editorial shelves, source-backed summaries, and graph-linked rabbit-hole trails.",
    link: "https://wunderwiki.thefrenchartist.dev/#/graph"
  },
  {
    image: "./post_images/project-ponzi-madoff-collapse.webp",
    title: "Ponzi Simulator",
    category: "Educational simulation",
    filters: ["Data"],
    badges: ["Sourced cases", "Ponzi", "Pyramid / MLM"],
    description: "Model investment Ponzis and recruitment pyramids, replay sourced cases, and watch cash, claims, payouts, participant loss, and collapse risk diverge.",
    link: "https://ponzi.thefrenchartist.dev/simulator?scenario=madoff"
  },
  {
    image: "./post_images/simple-city-builder.webp",
    title: "Simple City Builder",
    category: "3D city builder",
    filters: ["Game"],
    badges: ["Babylon.js", "Economy", "Pathfinding"],
    description: "Build a connected 3D city with roads, bridges, homes, jobs, services, and parks while citizens commute and the economy tracks upkeep, debt, capacity, and wellbeing.",
    link: "https://city-builder.thefrenchartist.dev/"
  },
  {
    image: "./post_images/project-groq-dalle-flux.webp",
    title: "Groq AllIn Studio",
    category: "AI lab collection",
    filters: ["AI"],
    badges: ["Groq", "Model comparison", "15 workspaces"],
    description: "A Groq-powered collection of 15 assistants and labs spanning structured outputs, diagrams, image generation, model comparisons, research, and playful experiments.",
    link: "https://groq-allin.thefrenchartist.dev/dalle-vs-flux"
  },
  
  {
    image: "./post_images/project-hatvp-gender-equality.webp",
    title: "HATVP Dataviz",
    category: "Civic dashboards",
    filters: ["Data"],
    badges: ["HATVP", "Gender equality", "Open data"],
    description: "Interactive dashboards for exploring HATVP declarations through gender balance, publication rates, reported revenue, and individual declaration records.",
    link: "https://hatvp-dataviz.thefrenchartist.dev/#/gender_equality"
  },
  {
    image: "./post_images/project-exquisite-menu-studio.webp",
    title: "Exquisite Menus",
    category: "AI dining studio",
    filters: ["AI"],
    badges: ["Menu extraction", "Structured JSON", "Dining atlas"],
    description: "An AI dining atlas and menu studio that turns photographed menus into polished text and structured JSON alongside imagined tasting menus, wines, and hot sauces.",
    link: "https://exquisite-menus.thefrenchartist.dev/#/menu-studio"
  },
    {
    image: "./post_images/mnist-website.webp", 
    title: "MNIST in the browser",
    category: "Browser ML",
    filters: ["AI", "Browser ML"],
    badges: ["TensorFlow.js", "Canvas", "No backend"],
    description: "Draw a digit on the canvas and watch a TensorFlow.js model recognize it in real time, entirely in the browser.",
    link: "https://mnist.thefrenchartist.dev/#/"
  },
    {
    image: "./post_images/maze_benchmark.png", 
    title: "Maze Benchmark",
    category: "LLM code benchmark",
    filters: ["AI", "Benchmark"],
    badges: ["Same prompt", "Three.js", "Interactive ranking"],
    description: "A ranked comparison of LLM-generated Three.js mazes produced from the same prompt, with each interactive output available to rotate, pan, and inspect.",
    link: "https://louispaulet.github.io/maze_benchmark/index.html"
  },
  {
    image: "./post_images/timeline_generator.webp", 
    title: "Timeline Generator",
    category: "AI timeline tool",
    filters: ["AI"],
    badges: ["Groq", "Structured JSON", "Interactive timeline"],
    description: "Turn a topic—history, recipes, biographies, or anything else—into a structured JSON chronology rendered as an interactive visual timeline.",
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

export default projects;

export const snapshotProjects = [
  "Groq AllIn Studio", "Strange Wikipedia Atlas", "Maze Benchmark", "HATVP Dataviz",
].map((title) => projects.find((project) => project.title === title));
