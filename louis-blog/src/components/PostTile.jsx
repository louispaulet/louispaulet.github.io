import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const PostTile = ({ id, title, summary, postDate }) => {
  return (
    <Link to={`/posts/${id}`} className="group flex h-full w-full">
      <article className="tile-interactive relative flex h-full w-full flex-col bg-surface p-6 text-secondary transition duration-300 hover:-translate-y-1">
        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-secondary">
            <span className="inline-flex items-center gap-2">
              <span className="tile-indicator tile-indicator--interactive">Click me!</span>
              {postDate}
            </span>
            <FaArrowUpRightFromSquare className="text-sm text-accent transition group-hover:translate-x-1" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
            {title}
          </h3>
          <p className="post-preview-summary mt-3 text-sm leading-relaxed text-secondary">
            {summary}
          </p>
          <div className="mt-auto pt-6 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Open article
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostTile;
