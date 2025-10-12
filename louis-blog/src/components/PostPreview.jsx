import React from 'react';
import { Link } from 'react-router-dom';
import { FaNewspaper } from "react-icons/fa";
import { FcReading } from "react-icons/fc";




const PostPreview = ({ id, title, summary, postDate }) => {
  return (
    <li>
      <Link
        to={`/posts/${id}`}
        className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-blue-950/20 transition transform hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-blue-900/40"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200 transition group-hover:bg-blue-500/30">
            <FaNewspaper className="text-3xl" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-white transition group-hover:text-blue-100">{title}</h3>
            <p className="mt-2 text-sm text-slate-300">{summary}</p>
            <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>Posted {postDate}</span>
              <span className="flex items-center gap-2 font-semibold text-blue-200">
                Read more
                <FcReading className="text-xl" />
              </span>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 transition group-hover:opacity-100" />
      </Link>
    </li>
  );
};

export default PostPreview;
