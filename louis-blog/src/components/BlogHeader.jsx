import React from 'react';

const BlogHeader = ({ title, subtitle }) => {
  return (
    <header className="bg-gray-800 text-white py-6 mb-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && <p className="text-xl mt-2">{subtitle}</p>}
      </div>
    </header>
  );
};

export default BlogHeader;
