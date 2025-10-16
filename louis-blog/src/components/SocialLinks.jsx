import React from 'react';
import { FaLinkedin, FaGithub, FaArtstation } from 'react-icons/fa';

function SocialLinks() {
  const linkBaseClasses = 'neuo-button';

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-6">
      <a href="https://www.linkedin.com/in/louispaulet/" className={`${linkBaseClasses} neuo-button--accent`}>
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
