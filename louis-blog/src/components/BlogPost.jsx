import React from 'react';

const BlogPost = ({ title, date, children }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-6">{date}</p>
      <div className="prose">{children}</div>
    </div>
  );
};

export default BlogPost;
