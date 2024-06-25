import React, { useEffect, useState } from 'react';
import SocialLinks from './../components/SocialLinks';
import PostPreview from './../components/PostPreview';
import { Link } from 'react-router-dom';

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
      <div className="container mx-auto py-10 px-4 max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-4 mb-6 lg:mb-0">
            <h1 className="text-9xl font-bold mb-4">Welcome&nbsp;to Louis&nbsp;Paulet blog</h1>
            <p className="text-xl mb-4 py-8">Random projects and AI insights</p>
      <Link to='/about'>
        <button className="bg-white border-2 border-blue-500 text-black py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          Who is Louis Paulet ?
        </button>
      </Link>
          </div>
          <div className="lg:w-1/2 lg:pl-4 flex">
            {/* Black bar */}
            <div className="w-10 bg-black mx-4"></div>
            <div>
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
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Home;
