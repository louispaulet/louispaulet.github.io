import React from 'react';
import PostPreview from './PostPreview';
import { FaAnglesDown } from "react-icons/fa6";
import postData from './../PostData';

const LatestPosts = () => {
  return (
    <div className="w-full">
      <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-slate-200">
        <FaAnglesDown className="text-lg" />
        Latest Posts
      </div>
      <ul className="space-y-4">
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
