import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const PostTile = ({ id, title, summary, postDate }) => {
  return (
    <Link to={`/posts/${id}`} className="group flex h-full w-full">
      <article className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-blue-950/30 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-blue-900/40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-indigo-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-slate-400">
            <span>{postDate}</span>
            <FaArrowUpRightFromSquare className="text-sm text-blue-200 transition group-hover:text-blue-100" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-100">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {summary}
          </p>
          <div className="mt-auto pt-6 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
            Open article
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostTile;
