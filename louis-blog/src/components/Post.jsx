import { useEffect, useState } from 'react';
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
    <div className="-mx-4 space-y-10 px-0 text-secondary sm:mx-auto sm:max-w-4xl sm:px-0">
      <div className="border border-soft bg-surface p-6 shadow-[16px_16px_32px_rgba(185,194,212,0.45),-16px_-16px_32px_rgba(255,255,255,0.95)] sm:p-10">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="prose prose-base prose-light max-w-none leading-relaxed prose-img:mx-auto prose-img:w-full sm:prose-lg sm:leading-relaxed sm:prose-h1:text-4xl sm:prose-h2:text-3xl sm:prose-h3:text-2xl prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl"
        >
          {content}
        </ReactMarkdown>
      </div>
      <div className="border border-soft bg-surface p-6 shadow-[12px_12px_24px_rgba(185,194,212,0.45),-12px_-12px_24px_rgba(255,255,255,0.95)] sm:p-8">
        <h2 className="text-xl font-semibold text-primary">Continue the thread</h2>
        <p className="mt-2 text-sm text-secondary">
          Reach out to compare notes, challenge the article, or share what you are building.
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Post;
