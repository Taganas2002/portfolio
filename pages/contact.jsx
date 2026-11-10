import styles from '../styles/ContactPage.module.css';
import MailIcon from '../components/icons/MailIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import GithubIcon from '../components/icons/GithubIcon';

const SUMMARY = 'Full-Stack & Backend Software Engineer with 4+ years of experience building business applications, backend APIs, and user-facing products. Skilled in Java 17/21, Spring Boot, React, TypeScript, Node.js, PostgreSQL, MongoDB, AWS, Docker, Jenkins, Kubernetes, and Linux. Experienced in building reliable features, designing data flows, integrating APIs, testing applications, debugging production issues, and delivering across the full software lifecycle.';

const ContactPage = () => {
  const contactMethods = [
    {
      name: 'Email',
      value: 'taganas2002@gmail.com',
      href: 'mailto:taganas2002@gmail.com',
      icon: <MailIcon width={44} height={44} />,
      description: 'Best way to reach me'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/tag-anas',
      href: 'https://www.linkedin.com/in/tag-anas/',
      icon: <LinkedinIcon width={44} height={44} />,
      description: 'Professional profile'
    },
    {
      name: 'GitHub',
      value: 'github.com/Taganas2002',
      href: 'https://github.com/Taganas2002',
      icon: <GithubIcon width={44} height={44} />,
      description: 'Code and repositories'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>Full-Stack & Backend Software Engineer · Longueuil, Québec, Canada</p>
        </div>

        <div className={styles.bio}>
          <p>{SUMMARY}</p>
        </div>

        <div className={styles.contactGrid}>
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <div className={styles.cardIcon}>{method.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{method.name}</h3>
                <p className={styles.cardValue}>{method.value}</p>
                <p className={styles.cardDescription}>{method.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.availability}>
            <span className={styles.statusIndicator}></span>
            Open to full-stack, backend Java/Spring Boot, application support, and software engineering opportunities across Canada.
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
