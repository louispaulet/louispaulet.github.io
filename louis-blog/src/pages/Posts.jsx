import PageIntro from '../components/PageIntro';
import postData from './../PostData';
import PostTile from '../components/PostTile';

const postTagsById = {
  post14: ['Open data', 'Civic tech', 'Data pipeline'],
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
  return (
    <div className="page-stack text-secondary">
      <PageIntro kicker="Writing" title="Writing from the builds.">
        <p>
          Notes on AI tools, benchmarks, datasets, and product experiments,
          written from the workbench rather than the sidelines.
        </p>
      </PageIntro>

      <section className="content-grid">
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
