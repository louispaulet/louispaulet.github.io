import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import postData from './../PostData';
import PostTile from './PostTile';

const LatestPosts = ({ compact = false }) => {
  const featuredPosts = postData.slice(0, 6);

  return (
    <div className="min-w-0 space-y-6 text-secondary">
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
          className="cta cta-secondary"
        >
          Archive
          <FaArrowRight />
        </Link>
      </div>
      )}

      <div className={compact ? 'grid min-w-0 gap-4' : 'grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3'}>
        {featuredPosts.map((post) => (
          <div key={post.id} className="min-w-0">
            <PostTile
              id={post.id}
              title={post.title}
              summary={post.summary}
              postDate={post.postDate}
              tags={['Latest', 'Build note']}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
