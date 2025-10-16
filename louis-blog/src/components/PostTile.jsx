import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const PostTile = ({ id, title, summary, postDate }) => {
  return (
    <Link to={`/posts/${id}`} className="group flex h-full w-full">
      <article className="relative flex h-full w-full flex-col overflow-hidden border border-white/10 bg-brand-secondary/90 p-6 shadow-brand-neuo-soft transition duration-300 hover:-translate-y-1 hover:shadow-brand-neuo">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-accent/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-megawide text-muted">
            <span>{postDate}</span>
            <FaArrowUpRightFromSquare className="text-sm text-brand-accent transition group-hover:text-white" />
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold text-white transition-colors duration-300 group-hover:text-brand-accent">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {summary}
          </p>
          <div className="mt-auto pt-6 text-xs font-semibold uppercase tracking-megawide text-brand-accent/90">
            Open article
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostTile;
