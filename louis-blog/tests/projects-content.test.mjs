import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import vm from 'node:vm';

const projectsSource = await readFile(new URL('../src/pages/Projects.jsx', import.meta.url), 'utf8');
const arrayStart = projectsSource.indexOf('const projects = ') + 'const projects = '.length;
const arrayEnd = projectsSource.indexOf('\n];', arrayStart) + 2;
const projects = JSON.parse(JSON.stringify(vm.runInNewContext(projectsSource.slice(arrayStart, arrayEnd))));

const expectedProjects = {
  'DeepSeek Maze Solver': {
    image: './post_images/project-deepseek-solver-live.webp',
    category: 'Pathfinding lab',
    badges: ['3 generators', '4 solvers', 'Seeded replay'],
    description: 'Generate reproducible mazes, compare BFS, DFS, Dijkstra, and A* side by side, and scrub through each solver’s exploration step by step.',
    link: 'https://maze-solver.thefrenchartist.dev/#/maze-solver',
  },
  'Jetlag Billionaire': {
    image: './post_images/jetlag-billionaire.png',
    category: 'Climate satire',
    badges: ['Idle game', 'Phaser', 'Fictional benchmarks'],
    description: 'A private-jet climate-satire clicker where tiny taps scale into absurd emissions, upgrades, achievements, and a static public-estimate-style leaderboard.',
    link: 'https://cookie-clicker.thefrenchartist.dev/#/',
  },
  'Empty Room Studio': {
    image: './post_images/project-empty-room-before-after.webp',
    category: 'AI image editor',
    badges: ['OpenAI Images', 'Before/after', 'Cloudflare Worker'],
    description: 'Upload a furnished room photo, tune the image-edit request, and generate an empty-room before/after while the API key stays behind a Cloudflare Worker.',
    link: 'https://louispaulet.github.io/empty-room-demo/#/',
  },
  'Michelin Restaurants': {
    image: './post_images/project-michelin-paris-map.webp',
    category: 'Open data map',
    badges: ['Wikidata', 'OpenStreetMap', 'No inferred data'],
    description: 'Explore Michelin-star award records from a fail-closed Wikidata snapshot, with explicit missing fields, country/city filters, and a mapped accessible list.',
    link: 'https://michelin.thefrenchartist.dev/#/map?country=france&city=paris',
  },
  'Self Investigation': {
    image: './post_images/project-self-investigation-average-hour.webp',
    category: 'Activity study',
    badges: ['GitHub', 'Deployments', 'Work cadence'],
    description: 'A five-year study of GitHub commits and Pages deployments across repositories, message themes, daily rhythms, shipping streaks, and an “average hour.”',
    link: 'https://selfinvest.thefrenchartist.dev/#/average-hour',
  },
  'Facial Expression Detection': {
    image: './post_images/project-face-classifier-about.webp',
    category: 'On-device vision',
    badges: ['FaceAPI', 'Human', 'Browser-only'],
    description: 'Compare FaceAPI and Human for visible facial-expression labels using webcam frames processed entirely in the browser, with no backend or cloud expression API.',
    link: 'https://face-classifier.thefrenchartist.dev/#/about',
  },
  'Strange Wikipedia Atlas': {
    image: './post_images/project-wunderwiki-graph.webp',
    category: 'Editorial atlas',
    badges: ['Wikipedia', 'Semantic graph', 'Curated trails'],
    description: 'A curated cabinet of strange Wikipedia records, themed editorial shelves, source-backed summaries, and graph-linked rabbit-hole trails.',
    link: 'https://wunderwiki.thefrenchartist.dev/#/graph',
  },
  'Ponzi Simulator': {
    image: './post_images/project-ponzi-madoff-collapse.webp',
    category: 'Educational simulation',
    badges: ['Sourced cases', 'Ponzi', 'Pyramid / MLM'],
    description: 'Model investment Ponzis and recruitment pyramids, replay sourced cases, and watch cash, claims, payouts, participant loss, and collapse risk diverge.',
    link: 'https://ponzi.thefrenchartist.dev/simulator?scenario=madoff',
  },
  'Simple City Builder': {
    image: './post_images/simple-city-builder.webp',
    category: '3D city builder',
    badges: ['Babylon.js', 'Economy', 'Pathfinding'],
    description: 'Build a connected 3D city with roads, bridges, homes, jobs, services, and parks while citizens commute and the economy tracks upkeep, debt, capacity, and wellbeing.',
    link: 'https://city-builder.thefrenchartist.dev/',
  },
  'Groq AllIn Studio': {
    image: './post_images/project-groq-dalle-flux.webp',
    category: 'AI lab collection',
    badges: ['Groq', 'Model comparison', '15 workspaces'],
    description: 'A Groq-powered collection of 15 assistants and labs spanning structured outputs, diagrams, image generation, model comparisons, research, and playful experiments.',
    link: 'https://groq-allin.thefrenchartist.dev/dalle-vs-flux',
  },
  'HATVP Dataviz': {
    image: './post_images/project-hatvp-gender-equality.webp',
    category: 'Civic dashboards',
    badges: ['HATVP', 'Gender equality', 'Open data'],
    description: 'Interactive dashboards for exploring HATVP declarations through gender balance, publication rates, reported revenue, and individual declaration records.',
    link: 'https://hatvp-dataviz.thefrenchartist.dev/#/gender_equality',
  },
  'Exquisite Menus': {
    image: './post_images/project-exquisite-menu-studio.webp',
    category: 'AI dining studio',
    badges: ['Menu extraction', 'Structured JSON', 'Dining atlas'],
    description: 'An AI dining atlas and menu studio that turns photographed menus into polished text and structured JSON alongside imagined tasting menus, wines, and hot sauces.',
    link: 'https://exquisite-menus.thefrenchartist.dev/#/menu-studio',
  },
  'MNIST in the browser': {
    image: './post_images/mnist-website.webp',
    category: 'Browser ML',
    badges: ['TensorFlow.js', 'Canvas', 'No backend'],
    description: 'Draw a digit on the canvas and watch a TensorFlow.js model recognize it in real time, entirely in the browser.',
    link: 'https://mnist.thefrenchartist.dev/#/',
  },
  'Maze Benchmark': {
    image: './post_images/maze_benchmark.png',
    category: 'LLM code benchmark',
    badges: ['Same prompt', 'Three.js', 'Interactive ranking'],
    description: 'A ranked comparison of LLM-generated Three.js mazes produced from the same prompt, with each interactive output available to rotate, pan, and inspect.',
    link: 'https://louispaulet.github.io/maze_benchmark/index.html',
  },
  'Timeline Generator': {
    image: './post_images/timeline_generator.webp',
    category: 'AI timeline tool',
    badges: ['Groq', 'Structured JSON', 'Interactive timeline'],
    description: 'Turn a topic—history, recipes, biographies, or anything else—into a structured JSON chronology rendered as an interactive visual timeline.',
    link: 'https://timeline.thefrenchartist.dev/#/timeline',
  },
};

const protectedProjectBlocks = {
  'Repetitive Sums Benchmark': `  {
    image: "./post_images/repetitive-sums-hero-wide.png",
    title: "Repetitive Sums Benchmark",
    category: "LLM benchmark",
    filters: ["AI", "Benchmark"],
    badges: ["Benchmark", "LLM", "Arithmetic"],
    description: "A live leaderboard and dot-matrix explorer for comparing how language models handle repetitive sums from 2 through 100.",
    link: "https://repsums.thefrenchartist.dev/#/"
  }`,
  'GPT YouTube Recommender': `  {
    image: "./post_images/youtube_recomender_project_thumbnail.webp",
    title: "GPT YouTube Recommender",
    category: "Recommendation system",
    filters: ["AI"],
    badges: ["Recommendation", "GPT", "Discovery"],
    description: "Personalized YouTube channel suggestions powered by GPT-4.1-nano.",
    link: "https://gpt-reco.thefrenchartist.dev/"
  }`,
};

const protectedAssetHashes = {
  'repetitive-sums-hero-wide.png': '8e4cdeb701de265ab6d2287e26a00b14ebf13bedd7229153697322584827260f',
  'youtube_recomender_project_thumbnail.webp': 'd7327cf2c686ff0e4db52c125b9edeefd2de57ef696279baaaba0635b227fb15',
};

const getProjectBlock = (title) => {
  const titleIndex = projectsSource.indexOf(`    title: "${title}",`);
  assert.notEqual(titleIndex, -1, `${title} should be present in Projects.jsx`);
  const blockStart = projectsSource.lastIndexOf('  {', titleIndex);
  const blockEnd = projectsSource.indexOf('\n  }', titleIndex) + 4;
  return projectsSource.slice(blockStart, blockEnd);
};

test('eligible project cards use the approved current content and featured views', () => {
  for (const [title, expected] of Object.entries(expectedProjects)) {
    const project = projects.find((item) => item.title === title);
    assert.ok(project, `${title} should be present`);
    assert.deepEqual(
      { ...project, filters: undefined, title: undefined },
      { ...expected, filters: undefined, title: undefined },
      `${title} metadata should match the approved refresh`,
    );
  }
});

test('the ten project-only screenshots exist as compact opaque 1280 by 800 WebPs', async () => {
  const screenshots = Object.values(expectedProjects)
    .map((project) => project.image)
    .filter((image) => image.startsWith('./post_images/project-'));

  assert.equal(screenshots.length, 10);

  await Promise.all(screenshots.map(async (image) => {
    const file = await readFile(new URL(`../public/${image.slice(2)}`, import.meta.url));
    assert.equal(file.toString('ascii', 0, 4), 'RIFF', `${image} should use a RIFF container`);
    assert.equal(file.toString('ascii', 8, 12), 'WEBP', `${image} should be a WebP`);
    const vp8Offset = file.indexOf(Buffer.from('VP8 '));
    assert.notEqual(vp8Offset, -1, `${image} should use opaque VP8 encoding`);
    const frameOffset = vp8Offset + 8;
    assert.deepEqual([...file.subarray(frameOffset + 3, frameOffset + 6)], [157, 1, 42], `${image} should contain a VP8 key frame`);
    assert.equal(file.readUInt16LE(frameOffset + 6) & 0x3fff, 1280, `${image} should be 1280px wide`);
    assert.equal(file.readUInt16LE(frameOffset + 8) & 0x3fff, 800, `${image} should be 800px tall`);
    assert.ok(file.length < 200 * 1024, `${image} should stay below 200 KB`);
  }));
});

test('custom-image cards and assets remain byte-for-byte protected', async () => {
  for (const [title, expectedBlock] of Object.entries(protectedProjectBlocks)) {
    assert.equal(getProjectBlock(title), expectedBlock, `${title} metadata should remain unchanged`);
  }

  for (const [filename, expectedHash] of Object.entries(protectedAssetHashes)) {
    const file = await readFile(new URL(`../public/post_images/${filename}`, import.meta.url));
    assert.equal(createHash('sha256').update(file).digest('hex'), expectedHash, `${filename} should remain unchanged`);
  }
});
