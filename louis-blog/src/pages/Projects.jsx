import React from 'react';
import ProjectPreview from './../components/ProjectPreview';

const projects = [
  
  {
    image: "./post_images/dataviz_homepage.webp", 
    title: "HATVP DATAVIZ",
    description: "A website to see plots about french representative data to act on open data possibilities",
    link: "https://hatvp-dataviz.thefrenchartist.dev/"
  },
  {
    image: "./post_images/exquisite_menus.webp", 
    title: "Exquisite Menus",
    description: "Exquisite menus at fictional restaurants. Menus created by GPT4, and images of the dishes generated using FLUX-DEV-1.",
    link: "https://exquisite-menus.thefrenchartist.dev/"
  },
    {
    image: "./post_images/mnist-website.webp", 
    title: "MNIST in the browser",
    description: "Handwritten digit inference in the browser using Tensorflow.js",
    link: "https://mnist.thefrenchartist.dev/"
  },
    {
    image: "./post_images/maze_benchmark.png", 
    title: "The maze benchmark",
    description: "Benchmarking LLMs by generating 3d interactive mazes in JS.",
    link: "https://louispaulet.github.io/maze_benchmark/"
  },
  {
    image: "./post_images/timeline_generator.webp", 
    title: "Timeline Generator",
    description: "Send your prompt and get a beautiful timeline of any event.",
    link: "https://timeline.thefrenchartist.dev/#/timeline"
  },
  {
    image: "./post_images/hatvp-rag-assistant-capture.gif",
    title: "HATVP RAG Assistant",
    description: "An assistant to help discover french representative data using RAG to prevent hallucinations",
    link: "https://hatvp-rag.thefrenchartist.dev/"
  },
  {
    image: "data:image/webp;base64,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",
    title: "GPT YouTube Recommender",
    description: "Get personalized YouTube channel suggestions powered by GPT-4.1-nano",
    link: "https://gpt-reco.thefrenchartist.dev/"
  },
  {
    image: "./project_placeholder.webp",
    title: "New project coming soon!",
    description: "If you click you'll go back home.",
    link: ""
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto p-4">
    <div className="mb-8" >
      <h1 className="text-6xl font-bold text-center mb-4">Live projects</h1>
      <p className="text-center mb-4"> All projects shown below are accessible <b>right now!</b> </p>
    </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectPreview
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
