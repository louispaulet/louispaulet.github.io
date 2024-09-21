import React from 'react';
import ProjectPreview from './../components/ProjectPreview';

const projects = [
  {
    image: "./post_images/hatvp-rag-assistant-capture.gif", 
    title: "HATVP RAG Assistant",
    description: "An assistant to help discover french representative data using RAG to prevent hallucinations",
    link: "https://hatvp-rag.thefrenchartist.dev/"
  },
  {
    image: "./post_images/dataviz_homepage.webp", 
    title: "HATVP DATAVIZ",
    description: "A website to see plots about french representative data to act on open data possibilities",
    link: "https://hatvp-dataviz.thefrenchartist.dev/"
  },
    {
    image: "./post_images/timeline_generator.webp", 
    title: "Timeline Generator",
    description: "Send your prompt and get a beautiful timeline of any event.",
    link: "https://timeline.thefrenchartist.dev/#/timeline"
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
