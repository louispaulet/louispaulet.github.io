import React, { useEffect, useState } from 'react';
import PostPreview from './PostPreview';
import { FaNewspaper } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { FaAnglesDown } from "react-icons/fa6";

import postsData from './../posts.json';

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPosts(postsData);
    // optional delay -- still not decided if placeholders are better than a blink...
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div className="w-full">
     <div className="bg-black inline-block py-1 px-1 mb-4">
       <h2 className="text-2xl lg:text-3xl font-semibold text-white flex items-center space-x-2">
         <FaAnglesDown />
         <span>Latest Posts</span>
         <FaAnglesDown />
       </h2>
     </div>
      <ul>
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <li key={index} className="mb-4">
              <div className="block p-6 bg-gray-100 rounded-lg shadow animate-pulse w-full">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <FaNewspaper className="text-6xl text-gray-300" />
                  </div>
                  <div className="flex-grow">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                    <div className="h-5 bg-gray-300 rounded w-1/4 mt-2 flex items-center">
                      <span className="mr-1">Read more</span>
                      <FcReading className="text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          posts.map((post) => (
            <PostPreview
              key={post.id}
              id={post.id}
              title={post.title}
              summary={post.summary}
              postDate={post.postDate}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default LatestPosts;
