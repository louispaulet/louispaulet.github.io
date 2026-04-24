import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import postData from './../PostData';
import SocialLinks from './../components/SocialLinks'
import NotFound from '../pages/NotFound'

const stripLeadingHeading = (markdown) =>
  markdown.replace(/^\s{0,3}#{1,6}\s+.*(?:\r?\n)+/, '');

const Post = () => {
  const { postId } = useParams();
  const [content, setContent] = useState('');
  const [loadError, setLoadError] = useState(false);
  const postMeta = postData.find((post) => post.id === postId);

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

  const renderedContent = stripLeadingHeading(content);

  return (
    <div className="-mx-4 space-y-10 px-0 text-secondary sm:mx-auto sm:max-w-4xl sm:px-0">
      <div className="border border-soft bg-surface shadow-[16px_16px_32px_rgba(185,194,212,0.45),-16px_-16px_32px_rgba(255,255,255,0.95)] overflow-hidden">
        {postMeta?.heroImage ? (
          <div className="relative isolate aspect-[16/8] border-b border-soft bg-[linear-gradient(135deg,rgba(232,237,244,0.96)_0%,rgba(248,250,253,0.9)_55%,rgba(255,255,255,0.98)_100%)]">
            <img
              src={postMeta.heroImage}
              alt={postMeta.heroAlt || postMeta.title || ''}
              loading="eager"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.88]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(239,243,248,0.08)_0%,rgba(249,251,254,0.12)_38%,rgba(249,251,254,0.78)_78%,rgba(249,251,254,0.98)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-24 sm:px-10 sm:pb-8">
              <p className="section-kicker mb-3">Blog post</p>
              <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-primary sm:text-5xl">
                {postMeta.title}
              </h1>
            </div>
          </div>
        ) : (
          <div className="border-b border-soft bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-6 py-8 sm:px-10">
            <p className="section-kicker">Blog post</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-primary sm:text-5xl">
              {postMeta?.title || postId}
            </h1>
          </div>
        )}
        <div className="p-6 sm:p-10">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="prose prose-base prose-light max-w-none leading-relaxed prose-img:mx-auto prose-img:w-full sm:prose-lg sm:leading-relaxed sm:prose-h1:text-4xl sm:prose-h2:text-3xl sm:prose-h3:text-2xl prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl"
          >
            {renderedContent}
          </ReactMarkdown>
        </div>
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
