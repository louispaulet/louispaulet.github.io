import React from 'react';
import { FaLinkedin, FaGithub, FaArtstation } from 'react-icons/fa';

function SocialLinks() {
  return (
  <div>
    <div className="flex space-x-4 py-4 px-2 flex items-center justify-center">
      <a href="https://www.linkedin.com/in/louispaulet/"
         className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <FaLinkedin className="mr-2" />
        LinkedIn
      </a>

      <a href="https://github.com/louispaulet/"
         className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
        <FaGithub className="mr-2" />
        GitHub
      </a>

      <a href="https://the_french_artist.artstation.com/"
         className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
        <FaArtstation className="mr-2" />
        ArtStation
      </a>
    </div>
    </div>
  );
}

export default SocialLinks;
