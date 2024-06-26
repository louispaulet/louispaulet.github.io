import React from 'react';
import { Link } from 'react-router-dom';
import website_logo from './../cached_images/logo_favicon.webp'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={website_logo} alt="Louis Paulet" className="w-10 h-10 border-2 border-white" />
          </Link>
          <Link to="/" className="text-2xl font-bold">Louis Paulet Blog</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
