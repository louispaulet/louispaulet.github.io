import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import postData from './../PostData';
import { FaArrowLeft } from 'react-icons/fa6';
import SocialLinks from './../components/SocialLinks';
import NotFound from '../pages/NotFound';
import { loadPostContent, preparePostContent } from './postContent';

const Post = () => {
  const { postId } = useParams();
  const [content, setContent] = useState('');
  const [loadError, setLoadError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const postMeta = postData.find((post) => post.id === postId);

  useEffect(() => {
    if (!postMeta) {
      setIsLoading(false);
      return undefined;
    }
    const controller = new AbortController();
    let isCurrentRequest = true;

    setContent('');
    setLoadError(false);
    setIsLoading(true);

    loadPostContent({
      baseUrl: import.meta.env.BASE_URL,
      postId,
      signal: controller.signal,
    })
      .then((text) => {
        if (!isCurrentRequest) {
          return;
        }

        setContent(text);
      })
      .catch((err) => {
        if (!isCurrentRequest || err.name === 'AbortError') {
          return;
        }

        console.error(err);
        setLoadError(true);
      })
      .finally(() => {
        if (isCurrentRequest) {
          setIsLoading(false);
        }
      });

    return () => {
      isCurrentRequest = false;
      controller.abort();
    };
  }, [postId, postMeta]);

  if (!postMeta || loadError) {
    return <NotFound />;
  }

  const renderedContent = preparePostContent(content, postMeta?.heroImage);

  return (
    <div className="article-layout page-stack min-w-0 w-full text-secondary">
      <Link to="/posts" className="cta cta-tertiary">
        <FaArrowLeft aria-hidden="true" /> Back to writing
      </Link>
      <article className="surface min-w-0">
        <header className="panel-padding border-b border-soft">
          <p className="section-kicker">Build note</p>
          <h1 className="page-title mt-3">{postMeta?.title || postId}</h1>
          {postMeta?.postDate && (
            <time className="metadata mt-4 block">{postMeta.postDate}</time>
          )}
        </header>
        {postMeta?.heroImage && (
          <img
            src={postMeta.heroImage}
            alt={postMeta.heroAlt || postMeta.title}
            decoding="async"
            className="h-auto w-full border-b border-soft"
          />
        )}
        <div className="panel-padding min-w-0">
          {isLoading ? (
            <p role="status">Loading post…</p>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className="prose prose-light article-prose min-w-0 prose-img:mx-auto"
            >
              {renderedContent}
            </ReactMarkdown>
          )}
        </div>
      </article>
      <section className="surface panel-padding">
        <h2 className="section-title text-primary">Continue the thread</h2>
        <p className="mt-3">
          Reach out to compare notes, challenge the article, or share what you
          are building.
        </p>
        <SocialLinks />
      </section>
    </div>
  );
};
export default Post;
