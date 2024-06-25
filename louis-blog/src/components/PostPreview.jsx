import React from 'react';
import { Link } from 'react-router-dom';
import { FaNewspaper } from "react-icons/fa";
import { FcReading } from "react-icons/fc";




const PostPreview = ({ id, title, summary, postDate }) => {
  return (
    <li className="mb-4">
      <Link to={`/posts/${id}`} className="block p-6 bg-gray-10 hover:bg-gray-100 rounded-lg shadow">
        <div className="flex">
          <div className="flex-shrink-0 mr-4">
            <FaNewspaper className="text-6xl" />
          </div>
          <div className="flex-grow">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 text-lg text-gray-700">{summary}</p>
            <p className="mt-2 text-sm text-gray-500">Posted on {postDate}</p>
            <p className="text-1xl font-semibold underline flex items-center">
              Read more <FcReading    className="ml-1 text-2xl" />
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PostPreview;
