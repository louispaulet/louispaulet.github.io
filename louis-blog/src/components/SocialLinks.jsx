import { FaLinkedin, FaGithub, FaArtstation } from 'react-icons/fa';

function SocialLinks() {
  const linkBaseClasses = 'cta cta-secondary';

  return (
    <div className="grid w-full min-w-0 gap-3 py-6 min-[420px]:flex min-[420px]:flex-wrap min-[420px]:items-center min-[420px]:justify-start sm:gap-4">
      <a
        href="https://www.linkedin.com/in/louispaulet/"
        className={`${linkBaseClasses} hover:text-accent`}
      >
        <FaLinkedin className="text-lg" />
        LinkedIn
      </a>

      <a
        href="https://github.com/louispaulet/"
        className={`${linkBaseClasses} hover:text-accent`}
      >
        <FaGithub className="text-lg" />
        GitHub
      </a>

      <a
        href="https://the_french_artist.artstation.com/"
        className={`${linkBaseClasses} hover:text-accent`}
      >
        <FaArtstation className="text-lg" />
        ArtStation
      </a>
    </div>
  );
}

export default SocialLinks;
