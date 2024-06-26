// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './../components/SocialLinks';
import LatestPosts from './../components/LatestPosts';

const Home = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-10 px-4 max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-4 mb-6 lg:mb-0">
            <h1 className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-8xl text-6xl font-bold mb-4 text-center lg:text-left">Welcome&nbsp;to Louis&nbsp;Paulet blog</h1>
            <p className="text-lg lg:text-xl py-8 text-center lg:text-left">Random projects and AI insights</p>
            <div className="flex justify-center lg:justify-start space-x-4 items-center">
              <div>
                <Link to='/about'>
                  <button className="bg-white border-2 border-blue-600 text-black py-2 px-4 rounded-lg hover:shadow-lg">
                    Who is Louis Paulet?
                  </button>
                </Link>
              </div>
              <div>
                <Link to='/cv'>
                  <button className="bg-blue-600 border-2 border-blue-600 text-white py-2 px-4 rounded-lg hover:shadow-lg">
                    I want a CV!
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-2 bg-black mx-5"></div>
          <div className="lg:w-1/2 lg:pl-4 flex">
            <LatestPosts />
          </div>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Home;
