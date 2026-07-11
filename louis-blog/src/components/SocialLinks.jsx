import { FaLinkedin, FaGithub, FaArtstation } from 'react-icons/fa';

function SocialLinks() {
  const linkBaseClasses =
    'neumorphic-button inline-flex min-h-11 min-w-0 items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary sm:px-5 sm:text-sm sm:tracking-[0.16em]';

  return (
    <div className="grid w-full min-w-0 gap-3 py-6 min-[420px]:flex min-[420px]:flex-wrap min-[420px]:items-center min-[420px]:justify-center sm:gap-4">
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
