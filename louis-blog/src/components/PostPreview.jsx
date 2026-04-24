import { Link } from 'react-router-dom';
import { FaNewspaper, FaArrowRight } from 'react-icons/fa';

const PostPreview = ({ id, title, summary, postDate }) => {
  return (
    <li>
      <Link
        to={`/posts/${id}`}
        className="group relative block border border-soft bg-surface p-6 text-secondary shadow-[12px_12px_24px_rgba(185,194,212,0.4),-12px_-12px_24px_rgba(255,255,255,0.9)] transition hover:-translate-y-1 hover:shadow-[16px_16px_32px_rgba(185,194,212,0.5),-16px_-16px_32px_rgba(255,255,255,0.95)]"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center border border-soft bg-surface text-accent transition group-hover:text-primary">
            <FaNewspaper className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-primary transition group-hover:text-accent">{title}</h3>
            <p className="post-preview-summary mt-2 text-sm text-secondary">{summary}</p>
            <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-secondary">
              <span>Posted {postDate}</span>
              <span className="flex items-center gap-2 font-semibold text-primary transition group-hover:text-accent">
                Read more
                <FaArrowRight className="text-sm" />
              </span>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-transparent via-[var(--color-accent)]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
      </Link>
    </li>
  );
};

export default PostPreview;
