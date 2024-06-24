import React from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <p className="text-lg mb-4">Welcome to the home page. Here are our latest blog posts:</p>
      <BlogList />
    </div>
  );
};

export default Home;
