import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <a href="#/" className="text-white text-lg">My Blog</a>
        <div>
          <a href="#/" className="text-gray-300 hover:text-white mx-2">Home</a>
          <a href="#/about" className="text-gray-300 hover:text-white mx-2">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
