import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const PostTile = ({ id, title, summary, postDate }) => {
  return (
    <Link to={`/posts/${id}`} className="group flex h-full w-full">
      <article className="relative flex h-full w-full flex-col border border-soft bg-surface p-6 text-secondary shadow-[12px_12px_24px_rgba(185,194,212,0.45),-12px_-12px_24px_rgba(255,255,255,0.95)] transition duration-300 hover:-translate-y-1 hover:shadow-[16px_16px_32px_rgba(185,194,212,0.5),-16px_-16px_32px_rgba(255,255,255,0.98)]">
        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-secondary">
            <span>{postDate}</span>
            <FaArrowUpRightFromSquare className="text-sm text-accent transition group-hover:translate-x-1" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-secondary">
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
