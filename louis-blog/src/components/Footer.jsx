import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 p-4 text-white mt-auto">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-left sm:w-1/3 w-full">
          <a 
            href="https://github.com/louispaulet/louispaulet.github.io" 
            className="underline hover:text-gray-300">
            This website is also one of my projects, check it out!
          </a>
        </div>
        <div className="text-center sm:w-1/3 w-full mt-2 sm:mt-0">
          &copy; {new Date().getFullYear()} Louis Paulet Blog. All rights reserved.
        </div>
        <div className="sm:w-1/3 w-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
