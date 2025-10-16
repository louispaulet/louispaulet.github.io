import React from 'react';
import { Link } from 'react-router-dom';
import { FaNewspaper } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';




const PostPreview = ({ id, title, summary, postDate }) => {
  return (
    <li>
      <Link
        to={`/posts/${id}`}
        className="group relative block overflow-hidden border border-white/10 bg-brand-secondary/85 p-6 shadow-brand-neuo-soft transition transform hover:-translate-y-1 hover:shadow-brand-neuo"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center bg-brand-primary/80 text-brand-accent shadow-brand-neuo-inset transition group-hover:text-white">
            <FaNewspaper className="text-3xl" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-display text-xl font-semibold text-white transition group-hover:text-brand-accent">{title}</h3>
            <p className="mt-2 text-sm text-muted">{summary}</p>
            <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-megawide text-muted">
              <span>Posted {postDate}</span>
              <span className="flex items-center gap-2 font-semibold text-brand-accent">
                Read more
                <FaArrowUpRightFromSquare className="text-sm" />
              </span>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent opacity-0 transition group-hover:opacity-100" />
      </Link>
    </li>
  );
};

export default PostPreview;
