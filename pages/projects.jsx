import ProjectCard from '../components/ProjectCard';
import featuredProjects from '../data/featured-projects.json';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ sections }) => {
  return (
    <>
      <div className={styles.header}>
        <h3>Projects</h3>
      </div>

      {sections.map((section) => (
        <div key={section.title}>
          <div className={styles.categoryHeader}>
            <h4>{section.title}</h4>
          </div>
          <div className={styles.container}>
            {section.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export async function getStaticProps() {
  const sections = [
    { title: 'Selected Products', projects: featuredProjects },
  ];

  return {
    props: { title: 'Projects', sections },
  };
}

export default ProjectsPage;
