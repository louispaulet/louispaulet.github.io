import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import postData from '../PostData';
import PostTile from './PostTile';
const LatestPosts = ({ compact = false }) => (
  <div className="min-w-0">
    {compact ? (
      postData.slice(0, 3).map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`} className="compact-post">
          <time className="metadata col-span-2">{post.postDate}</time>
          <h3 className="card-title">{post.title}</h3>
          <FaArrowRight aria-hidden="true" className="mt-2" />
          <p className="col-span-2 text-secondary">{post.summary}</p>
        </Link>
      ))
    ) : (
      <div className="content-grid">
        {postData.slice(0, 6).map((post) => (
          <PostTile
            key={post.id}
            {...post}
            image={post.heroImage}
            imageAlt={post.heroAlt}
          />
        ))}
      </div>
    )}
    <Link to="/posts" className="cta cta-tertiary mt-4">
      Read the archive <FaArrowRight aria-hidden="true" />
    </Link>
  </div>
);
export default LatestPosts;
