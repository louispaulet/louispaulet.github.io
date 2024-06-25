import React, { useEffect, useState } from 'react';
import SocialLinks from './../components/SocialLinks';
import PostPreview from './../components/PostPreview';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts.json')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="bg-white">
      <div className="py-4 text-center">
        <h1 className="text-5xl font-bold">Welcome to Louis Paulet blog</h1>
      </div>
      <SocialLinks />
      <div className="container mx-auto py-10 px-4 max-w-screen-md">
        <h2 className="text-3xl font-semibold mb-6">Recent Posts</h2>
        <ul>
          {posts.map((post) => (
            <PostPreview
              key={post.id}
              id={post.id}
              title={post.title}
              summary={post.summary}
              postDate={post.postDate}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
