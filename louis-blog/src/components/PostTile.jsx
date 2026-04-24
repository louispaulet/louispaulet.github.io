import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const PostTile = ({ id, title, summary, postDate, image, imageAlt }) => {
  return (
    <Link to={`/posts/${id}`} className="group flex h-full w-full">
      <article className="tile-interactive flex h-full w-full flex-col p-5 text-secondary sm:p-6">
        {image ? (
          <div className="relative mb-5 aspect-[16/9] overflow-hidden border border-soft bg-[linear-gradient(135deg,#eef2f7_0%,#f9fbfe_60%,#ffffff_100%)]">
            <img
              src={image}
              alt={imageAlt || title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.9] transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_55%,rgba(249,251,254,0.82)_100%)]" />
          </div>
        ) : null}
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
