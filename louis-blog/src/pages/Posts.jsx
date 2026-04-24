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
            Writing from the builds.
          </h1>
        </div>
        <p className="max-w-3xl text-sm leading-7 text-secondary lg:justify-self-end">
          Notes on AI tools, benchmarks, datasets, and product experiments, written from the workbench rather than the sidelines.
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
              image={post.heroImage}
              imageAlt={post.heroAlt}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Posts;
