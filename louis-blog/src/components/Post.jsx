import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import SocialLinks from './../components/SocialLinks'
import NotFound from '../pages/NotFound'


const Post = () => {
  const { postId } = useParams();
  const [content, setContent] = useState('');
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}posts/${postId}.md`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoadError(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadError(true);
      });
  }, [postId]);

  if (loadError) {
    return <NotFound />;
  }

  return (
    <div className="post-container prose prose-lg mx-auto">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      <SocialLinks />
    </div>
  );
};

export default Post;
