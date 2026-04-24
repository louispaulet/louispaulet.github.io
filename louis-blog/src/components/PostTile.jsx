import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const PostTile = ({ id, title, summary, postDate }) => {
  return (
    <Link to={`/posts/${id}`} className="group flex h-full w-full">
      <article className="tile-interactive flex h-full w-full flex-col p-5 text-secondary sm:p-6">
        <div className="flex items-start justify-between gap-6">
          <time className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{postDate}</time>
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-soft bg-surface text-accent transition group-hover:border-[var(--color-accent)] group-hover:text-primary">
            <FaArrowUpRightFromSquare className="text-sm" />
          </div>
        </div>
        <h3 className="mt-5 text-xl font-semibold leading-snug text-primary transition-colors duration-300 group-hover:text-accent">
          {title}
        </h3>
        <p className="post-preview-summary mt-3 text-sm leading-7 text-secondary">
          {summary}
        </p>
      </article>
    </Link>
  );
};

export default PostTile;
