import React, { useEffect, useState } from 'react';
import SocialLinks from './../components/SocialLinks';
import PostPreview from './../components/PostPreview';
import { Link } from 'react-router-dom';
import { FaNewspaper } from "react-icons/fa";
import { FcReading } from "react-icons/fc";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/posts.json')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white">
      <div className="container mx-auto py-10 px-4 max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-4 mb-6 lg:mb-0">
            <h1 className="text-9xl font-bold mb-4">Welcome&nbsp;to Louis&nbsp;Paulet blog</h1>
            <p className="text-xl mb-4 py-8">Random projects and AI insights</p>
            <div className="flex space-x-4">
              <Link to='/about'>
                <button className="bg-white border-2 border-blue-600 text-black py-2 px-4 rounded-lg hover:shadow-lg">
                  Who is Louis Paulet ?
                </button>
              </Link>
              <Link to='/cv'>
                <button className="bg-blue-600 border-2 border-blue-600 text-white py-2 px-4 rounded-lg hover:shadow-lg">
                  I want a CV!
                </button>
              </Link>
            </div>
          </div>
          <div className="w-2 bg-black mx-5"></div>
          <div className="lg:w-1/2 lg:pl-4 flex">
            <div className="w-full">
              <h2 className="text-3xl font-semibold mb-6 bg-black text-white inline-block py-1 px-1">Recent Posts</h2>
              <ul>
                {loading && (
                  <>
                    <li className="mb-4">
                      <div className="block p-6 bg-gray-100 rounded-lg shadow animate-pulse w-full">
                        <div className="flex">
                          <div className="flex-shrink-0 mr-4">
                            <FaNewspaper className="text-6xl text-gray-300" />
                          </div>
                          <div className="flex-grow">
                            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                            <div className="h-5 bg-gray-300 rounded w-1/4 mt-2 flex items-center">
                              <span className="mr-1">Read more</span>
                              <FcReading className="text-2xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="block p-6 bg-gray-100 rounded-lg shadow animate-pulse w-full">
                        <div className="flex">
                          <div className="flex-shrink-0 mr-4">
                            <FaNewspaper className="text-6xl text-gray-300" />
                          </div>
                          <div className="flex-grow">
                            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                            <div className="h-5 bg-gray-300 rounded w-1/4 mt-2 flex items-center">
                              <span className="mr-1">Read more</span>
                              <FcReading className="text-2xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="block p-6 bg-gray-100 rounded-lg shadow animate-pulse w-full">
                        <div className="flex">
                          <div className="flex-shrink-0 mr-4">
                            <FaNewspaper className="text-6xl text-gray-300" />
                          </div>
                          <div className="flex-grow">
                            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                            <div className="h-5 bg-gray-300 rounded w-1/4 mt-2 flex items-center">
                              <span className="mr-1">Read more</span>
                              <FcReading className="text-2xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </>
                )}
                {!loading && posts.map((post) => (
                  <PostPreview
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    summary={post.summary}
                    postDate={post.postDate}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Home;
