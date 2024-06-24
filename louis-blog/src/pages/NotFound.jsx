import React from 'react';

const NotFound = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-700">Sorry, the page you are looking for does not exist.</p>
      <a href="#/" className="text-blue-500 mt-4 inline-block">Go back to Home</a>
    </div>
  );
};

export default NotFound;
