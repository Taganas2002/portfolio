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

const SUMMARY = 'Full-Stack & Backend Software Engineer with 4+ years of experience building business applications, backend APIs, and user-facing products. I work primarily with Java, Spring Boot, React, TypeScript, Node.js, SQL and cloud delivery tools. I enjoy turning complex business workflows into secure, maintainable software.';

const AVAILABILITY = 'Available for Full-Stack, Java Backend, Application Support, and Software Engineering roles across Canada. Canadian citizen — no sponsorship required.';

const SKILL_GROUPS = [
  {
    label: 'Backend',
    items: ['Java 17/21', 'Spring Boot', 'REST APIs', 'Spring Security', 'JWT', 'JPA/Hibernate', 'Node.js', 'Express.js'],
  },
  {
    label: 'Frontend & Mobile',
    items: ['React', 'TypeScript', 'JavaScript', 'React Native', 'Electron', 'HTML', 'CSS'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'SQL'],
  },
  {
    label: 'Cloud & Delivery',
    items: ['AWS EC2', 'Docker', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Kubernetes', 'Git', 'Linux'],
  },
  {
    label: 'Quality',
    items: ['Unit Testing', 'Integration Testing', 'Playwright E2E Testing', 'Debugging', 'Agile'],
  },
];

const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    period: 'Issued February 2026 · Expires February 2029',
  },
  {
    title: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco',
    period: 'Issued January 2025',
  },
  {
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco',
    period: 'Issued January 2025',
  },
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    period: 'Issued June 2024',
  },
];

const education = [
  {
    org: 'University of Larbi Tebessi',
    role: 'Master’s in Network and Information Security · 2023–2025',
    badge: 'MSc',
    logo: '/larbi-tebessi.png',
  },
  {
    org: 'University of Larbi Tebessi',
    role: 'Bachelor’s in Information Systems and Software Engineering · 2020–2023',
    badge: 'BSc',
    logo: '/larbi-tebessi.png',
  },
  {
    org: 'Ben Tababal Slimane Vocational Institute, Tebessa, Algeria',
    role: 'Higher Technician Diploma in Information Systems · Web & Media · August 2024 · Very Good',
    badge: 'DTS',
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
            <p className={styles.availability}>{AVAILABILITY}</p>

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
                  src={asset('/anas-tag.png')}
                  width={280}
                  height={280}
                  alt="Anas Tag"
                  onError={() => setPhotoAvailable(false)}
                />
              ) : (
                <div className={styles.profilePlaceholder} aria-label="Anas Tag">AT</div>
              )}
            </div>

          </div>
        </div>
      </div>

      <div className={styles.experience}>
        <h2 className={styles.sectionTitle}>Experience & Selected Projects</h2>

        <div className={styles.timeline}>
          {experience.map((item) => (
            <div key={item.id} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div className={styles.timelineHeading}>
                    <h3 className={styles.jobTitle}>{item.title}</h3>
                    <p className={styles.company}>{item.subtitle}</p>
                  </div>
                  {item.period && <span className={styles.period}>{item.period}</span>}
                </div>
                <ul className={styles.jobList}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                  {item.source && (
                    <li>
                      Source code:{' '}
                      <a href={item.source} target="_blank" rel="noopener noreferrer">
                        {item.source}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className={styles.certifications}>
        <h2 className={styles.sectionTitle}>Certifications</h2>
        <div className={styles.timeline}>
          {certifications.map((item) => (
            <div key={item.title} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={`${styles.timelineContent} ${styles.compactPanel}`}>
                <div className={styles.timelineHeader}>
                  <div className={styles.timelineHeading}>
                    <h3 className={styles.jobTitle}>{item.title}</h3>
                    <p className={styles.company}>{item.issuer}</p>
                  </div>
                  <span className={styles.period}>{item.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.educationSection}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.educationList}>
          {education.map((item) => (
            <div
              key={item.role}
              className={`${styles.affiliationCard} ${styles.educationCard}`}
              aria-label={`${item.org} — ${item.role}`}
            >
              {item.logo ? (
                <div className={styles.educationLogo}>
                  <Image
                    src={asset(item.logo)}
                    alt=""
                    width={48}
                    height={48}
                  />
                </div>
              ) : (
                <div className={styles.affiliationBadge}>{item.badge}</div>
              )}
              <div className={styles.affiliationInfo}>
                <span className={styles.affiliationOrg}>{item.org}</span>
                <span className={styles.affiliationRole}>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.skills}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillGroups}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className={styles.skillGroup}>
              <p className={styles.skillLabel}>{group.label}</p>
              <div className={styles.expertiseGrid}>
                {group.items.map((item) => (
                  <span key={item} className={styles.expertiseTag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
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
