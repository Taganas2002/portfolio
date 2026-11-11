import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';
import asset from '../lib/asset';

function projectMark(name) {
  const base = name.split('—')[0].trim();
  const parts = base.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

const ProjectCard = ({ project }) => {
  const image = project.image ? asset(project.image) : '';
  const hasLinks = project.source_code || project.demo || project.scholar || project.pypi;
  return (
    <div className={styles.card}>
      {image ? (
        <Image src={image}
          height={300}
          width={600}
          sizes="(max-width: 600px) 100vw, 600px"
          alt={project.name} />
      ) : (
        <div className={styles.placeholder} aria-hidden="true">{projectMark(project.name)}</div>
      )}
      <div className={styles.content}>
        <h3>{project.name}</h3>
        {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        {hasLinks && <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Demo
            </a>
          )}
          {project.scholar && (
            <a
              href={project.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Paper
            </a>
          )}
          {project.pypi && (
            <a
              href={project.pypi}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              PyPi
            </a>
          )}
        </div>}
      </div>
    </div>
  );
};

export default ProjectCard;
