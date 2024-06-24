import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 p-4 text-white mt-auto">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Blog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
