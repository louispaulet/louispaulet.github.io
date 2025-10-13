import React from 'react';
import { FaLinkedin, FaGithub, FaArtstation } from 'react-icons/fa';

function SocialLinks() {
  const linkBaseClasses =
    'inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-100 shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10';

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-6">
      <a href="https://www.linkedin.com/in/louispaulet/" className={`${linkBaseClasses} bg-gradient-to-r from-blue-500/40 to-indigo-500/40`}>
        <FaLinkedin className="text-lg" />
        LinkedIn
      </a>

      <a href="https://github.com/louispaulet/" className={linkBaseClasses}>
        <FaGithub className="text-lg" />
        GitHub
      </a>

      <a href="https://the_french_artist.artstation.com/" className={linkBaseClasses}>
        <FaArtstation className="text-lg" />
        ArtStation
      </a>
    </div>
  );
}

export default SocialLinks;
