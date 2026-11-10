import { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from "next/image";
import dynamic from 'next/dynamic'
import styles from '../styles/HomePage.module.css';
import experience from '../data/experience.json';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import asset from '../lib/asset';

const ParticlesBackground = dynamic(
  () => import('../components/ParticlesBackground'),
  { ssr: false }
)

const SUMMARY = 'Full-Stack & Backend Software Engineer with 4+ years of experience building business applications, backend APIs, and user-facing products. Skilled in Java 17/21, Spring Boot, React, TypeScript, Node.js, PostgreSQL, MongoDB, AWS, Docker, Jenkins, Kubernetes, and Linux. Experienced in building reliable features, designing data flows, integrating APIs, testing applications, debugging production issues, and delivering across the full software lifecycle.';

const SKILLS = [
  'Java',
  'Spring Boot',
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Docker',
  'Kubernetes',
  'CI/CD',
  'REST APIs',
];

const education = [
  {
    org: 'University of Larbi Tebessi',
    role: 'Master’s in Network and Information Security · 2023–2025',
    badge: 'MSc',
  },
  {
    org: 'University of Larbi Tebessi',
    role: 'Bachelor’s in Information Systems and Software Engineering · 2020–2023',
    badge: 'BSc',
  },
];

export default function HomePage({ experience }) {
  const [isMounted, setIsMounted] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [photoAvailable, setPhotoAvailable] = useState(true)

  useEffect(() => {
    setIsMounted(true)
    setIsDesktop(window.innerWidth >= 768)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        {isMounted && isDesktop && <ParticlesBackground />}
        <div className={styles.heroContent}>
          <div className={styles.textSection}>
            <h1 className={styles.name}>Anas Tag</h1>
            <h2 className={styles.title}>Full-Stack & Backend Software Engineer</h2>

            <p className={styles.description}>{SUMMARY}</p>

            <div className={styles.expertise}>
              <div className={styles.expertiseTitle}>Specialization</div>
              <div className={styles.expertiseGrid}>
                {SKILLS.map((skill) => (
                  <span key={skill} className={styles.expertiseTag}>{skill}</span>
                ))}
              </div>
            </div>

            <div className={styles.actions}>
              <Link href="/resume">
                <button className={styles.primaryButton}>View résumé</button>
              </Link>
              <a
                href="https://www.linkedin.com/in/tag-anas/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinButton}
                aria-label="Connect on LinkedIn"
              >
                <LinkedinIcon width={16} height={16} />
                <span>Connect on LinkedIn</span>
              </a>
              <Link href="/contact">
                <button className={styles.secondaryButton}>Contact me</button>
              </Link>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              {photoAvailable ? (
                <Image
                  className={styles.profileImage}
                  src={asset('/anas-tag.jpg')}
                  width={280}
                  height={280}
                  alt="Anas Tag"
                  onError={() => setPhotoAvailable(false)}
                />
              ) : (
                <div className={styles.profilePlaceholder} aria-label="Anas Tag">AT</div>
              )}
            </div>

            <section className={styles.affiliations}>
              <p className={styles.affiliationsLabel}>Education</p>
              <div className={styles.affiliationsGrid}>
                {education.map((item) => (
                  <div
                    key={item.role}
                    className={`${styles.affiliationCard} ${styles.educationCard}`}
                    aria-label={`${item.org} — ${item.role}`}
                  >
                    <div className={styles.affiliationBadge}>{item.badge}</div>
                    <div className={styles.affiliationInfo}>
                      <span className={styles.affiliationOrg}>{item.org}</span>
                      <span className={styles.affiliationRole}>{item.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className={styles.experience}>
        <h2 className={styles.sectionTitle}>Experience</h2>

        <div className={styles.timeline}>
          {experience.map((job) => (
            <div key={job.id} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <Link href="/resume">
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>{job.title}</h3>
                      <p className={styles.company}>{job.company} - {job.location}</p>
                    </div>
                    {job.period && <span className={styles.period}>{job.period}</span>}
                  </div>
                  <p className={styles.jobDescription}>{job.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Full-Stack & Backend Software Engineer',
      experience
    },
  };
}
