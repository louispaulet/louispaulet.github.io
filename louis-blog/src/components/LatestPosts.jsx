import React from 'react';
import PostPreview from './PostPreview';
import { FaAnglesDown } from "react-icons/fa6";
import postData from './../PostData';

const LatestPosts = () => {
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
        {postData.map((post) => (
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
  );
};

export default LatestPosts;
