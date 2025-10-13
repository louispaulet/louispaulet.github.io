import React from 'react';
import { Link } from 'react-router-dom';
import { FaAnglesDown } from 'react-icons/fa6';
import postData from './../PostData';
import PostTile from './PostTile';

const LatestPosts = () => {
  const featuredPosts = postData.slice(0, 6);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">
            <FaAnglesDown className="text-sm" />
            Latest Posts
          </span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Fresh signals from the build logs.
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            Two rows of what’s new—drop into the articles that trace research, experiments, and shipping notes.
          </p>
        </div>
        <Link
          to="/posts"
          className="inline-flex items-center justify-center rounded-full border border-blue-400/60 bg-blue-500/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-500/20"
        >
          More
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.map((post) => (
          <div key={post.id} className="aspect-square">
            <PostTile
              id={post.id}
              title={post.title}
              summary={post.summary}
              postDate={post.postDate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
