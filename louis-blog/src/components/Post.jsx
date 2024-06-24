import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import SocialLinks from './../components/SocialLinks'


const Post = () => {
  const { postId } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}posts/${postId}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error(err));
  }, [postId]);

  return (
    <div className="post-container prose prose-lg mx-auto">
    <SocialLinks />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    <SocialLinks />
    </div>
  );
};

export default Post;
