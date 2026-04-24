import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import postData from './../PostData';
import PostTile from './PostTile';

const LatestPosts = ({ compact = false }) => {
  const featuredPosts = postData.slice(0, 6);

  return (
    <div className="space-y-6 text-secondary">
      {!compact && (
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="section-kicker">Latest notes</p>
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Recent build notes
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-secondary sm:text-base">
            Recent notes from experiments, benchmarks, and shipped tools.
          </p>
        </div>
        <Link
          to="/posts"
          className="neumorphic-button inline-flex items-center justify-center gap-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary hover:text-accent"
        >
          Archive
          <FaArrowRight />
        </Link>
      </div>
      )}

      <div className={compact ? 'grid gap-4' : 'grid gap-5 sm:grid-cols-2 lg:grid-cols-3'}>
        {featuredPosts.map((post) => (
          <div key={post.id}>
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
