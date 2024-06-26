import React from 'react';

const ProjectPreview = ({ image, title, description, link }) => {
  return (
    <a 
      href={link} 
      className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div className="w-full h-64 flex items-center justify-center bg-gray-200">
        <img src={image} alt={title} className="object-cover h-full w-full" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <span className="text-blue-500 hover:underline">Learn more</span>
      </div>
    </a>
  );
};

export default ProjectPreview;
