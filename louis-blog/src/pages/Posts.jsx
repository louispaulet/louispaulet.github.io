import { useEffect } from 'react';
import postData from './../PostData';
import PostTile from '../components/PostTile';

const Posts = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="space-y-10 text-secondary">
      <header className="grid gap-6 border-b border-soft pb-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="section-kicker">Writing</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            Every insight, benchmark, and build log in one place.
          </h1>
        </div>
        <p className="max-w-3xl text-sm leading-7 text-secondary lg:justify-self-end">
          Browse the complete archive of writing, from emergent AI tooling sprints to product analytics deep dives. Each entry anchors
          a project, exploration, or dataset ready for follow-through.
        </p>
      </header>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {postData.map((post) => (
          <div key={post.id}>
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
