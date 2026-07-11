import { useEffect } from 'react';
import postData from './../PostData';
import PostTile from '../components/PostTile';

const postTagsById = {
  post13: ['AI images', 'OpenAI', 'Cloudflare'],
  post12: ['AI workspace', 'Groq', 'Cloudflare'],
  post11: ['Recommendation', 'GPT', 'Product'],
  post9: ['Benchmark', 'Three.js', 'LLM'],
  post8: ['Browser ML', 'TensorFlow.js', 'Demo'],
  post6: ['Evaluation', 'MMLU', 'Analysis'],
  post7: ['Benchmark', 'Arithmetic', 'LLM'],
  post4: ['Open data', 'Civic tech', 'Dashboard'],
  post5: ['RAG', 'Search', 'Open data'],
  post1: ['TTS', 'GPT-4', 'Prototype'],
  post2: ['Computer vision', 'Keras', 'Flask'],
  post3: ['CLIP', 'Search', 'Embeddings'],
};

const Posts = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-w-0 space-y-9 text-secondary sm:space-y-10">
      <header className="grid min-w-0 gap-5 border-b border-soft pb-7 sm:gap-6 sm:pb-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div className="min-w-0">
          <p className="section-kicker">Writing</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            Writing from the builds.
          </h1>
        </div>
        <p className="max-w-3xl text-sm leading-7 text-secondary lg:justify-self-end">
          Notes on AI tools, benchmarks, datasets, and product experiments, written from the workbench rather than the sidelines.
        </p>
      </header>

      <section className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {postData.map((post) => (
          <div key={post.id}>
            <PostTile
              id={post.id}
              title={post.title}
              summary={post.summary}
              postDate={post.postDate}
              image={post.heroImage}
              imageAlt={post.heroAlt}
              tags={postTagsById[post.id] || ['Build note']}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Posts;
