import { FaLinkedin, FaGithub, FaArtstation } from 'react-icons/fa';

function SocialLinks() {
  const linkBaseClasses =
    'neumorphic-button inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-primary';

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-6">
      <a href="https://www.linkedin.com/in/louispaulet/" className={`${linkBaseClasses} hover:text-accent`}>
        <FaLinkedin className="text-lg" />
        LinkedIn
      </a>

      <a href="https://github.com/louispaulet/" className={`${linkBaseClasses} hover:text-accent`}>
        <FaGithub className="text-lg" />
        GitHub
      </a>

      <a href="https://the_french_artist.artstation.com/" className={`${linkBaseClasses} hover:text-accent`}>
        <FaArtstation className="text-lg" />
        ArtStation
      </a>
    </div>
  );
}

export default SocialLinks;
