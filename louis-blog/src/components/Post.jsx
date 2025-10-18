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
    <div className="post-container mx-auto max-w-4xl space-y-10 text-secondary">
      <div className="border border-soft bg-surface p-10 shadow-[16px_16px_32px_rgba(185,194,212,0.45),-16px_-16px_32px_rgba(255,255,255,0.95)]">
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose prose-lg prose-light max-w-none">
          {content}
        </ReactMarkdown>
      </div>
      <div className="border border-soft bg-surface p-8 shadow-[12px_12px_24px_rgba(185,194,212,0.45),-12px_-12px_24px_rgba(255,255,255,0.95)]">
        <h2 className="text-xl font-semibold text-primary">Continue the conversation</h2>
        <p className="mt-2 text-sm text-secondary">
          Reach out to collaborate, challenge the ideas in this article, or share your own builds.
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Post;
