import React from 'react';
import postData from './../PostData';
import PostTile from '../components/PostTile';

const Posts = () => {
  return (
    <div className="space-y-14">
      <header className="space-y-5">
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-200">
          Article index
        </span>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          Every insight, benchmark, and build log in one place.
        </h1>
        <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
          Browse the complete archive of writing—from emergent AI tooling sprints to product analytics deep dives. Each square
          anchors a project, exploration, or dataset ready for follow-through.
        </p>
      </header>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {postData.map((post) => (
          <div key={post.id} className="aspect-square">
            <PostTile
              id={post.id}
              title={post.title}
              summary={post.summary}
              postDate={post.postDate}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Posts;
