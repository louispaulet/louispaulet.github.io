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
    <div className="post-container mx-auto max-w-4xl space-y-10">
      <div className="border border-white/10 bg-brand-secondary/90 p-10 shadow-brand-neuo">
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose prose-lg prose-invert max-w-none">
          {content}
        </ReactMarkdown>
      </div>
      <div className="border border-white/10 bg-brand-secondary/85 p-8 shadow-brand-neuo-soft">
        <h2 className="font-display text-xl font-semibold text-white">Continue the conversation</h2>
        <p className="mt-2 text-sm text-muted">
          Reach out to collaborate, challenge the ideas in this article, or share your own builds.
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Post;
