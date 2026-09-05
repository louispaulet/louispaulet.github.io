import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
const ProjectPreview = ({
  image,
  title,
  description,
  link,
  category,
  badges = [],
}) => (
  <a
    href={link}
    className="tile-interactive"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={image}
      alt={title}
      loading="lazy"
      decoding="async"
      className="card-media"
    />
    <div className="card-body">
      <p className="section-kicker">{category}</p>
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span key={badge} className="meta-chip">
            {badge}
          </span>
        ))}
      </div>
      <span className="card-action">
        Open live build <FaArrowUpRightFromSquare aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </span>
    </div>
  </a>
);
export default ProjectPreview;
