import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
const PostTile = ({
  id,
  title,
  summary,
  postDate,
  image,
  imageAlt,
  tags = [],
}) => (
  <Link to={`/posts/${id}`} className="tile-interactive">
    {image && (
      <img
        src={image}
        alt={imageAlt || title}
        loading="lazy"
        decoding="async"
        className="card-media"
      />
    )}
    <article className="card-body">
      <time className="metadata">{postDate}</time>
      <h2 className="card-title">{title}</h2>
      <p>{summary}</p>
      <div className="flex flex-wrap gap-2">
        {tags.slice(0, 3).map((tag) => (
          <span key={tag} className="meta-chip">
            {tag}
          </span>
        ))}
      </div>
      <span className="card-action">
        Read build note <FaArrowRight aria-hidden="true" />
      </span>
    </article>
  </Link>
);
export default PostTile;
