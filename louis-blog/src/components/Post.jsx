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
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-10 shadow-2xl">
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose prose-lg prose-invert max-w-none">
          {content}
        </ReactMarkdown>
      </div>
      <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl">
        <h2 className="text-xl font-semibold text-white">Continue the conversation</h2>
        <p className="mt-2 text-sm text-slate-300">
          Reach out to collaborate, challenge the ideas in this article, or share your own builds.
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Post;
