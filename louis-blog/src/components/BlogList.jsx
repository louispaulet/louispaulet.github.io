// src/components/BlogList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const context = import.meta.glob('../posts/*.jsx');
      const postsData = await Promise.all(
        Object.keys(context).map(async (key) => {
          const module = await context[key]();
          return module.meta;
        })
      );
      setPosts(postsData);
    };

    loadPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.path} className="mb-2">
            <Link to={post.path} className="text-blue-500 hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-600">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
