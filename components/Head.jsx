import Head from 'next/head';
import asset from '../lib/asset';

const SITE_TITLE = 'Anas Tag | Full-Stack & Backend Software Engineer';
const SITE_DESCRIPTION = 'Portfolio of Anas Tag, a Full-Stack and Backend Software Engineer specializing in Java, Spring Boot, React, TypeScript, Node.js, cloud delivery, and business applications.';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href={asset('/vscode_icon.svg?v=2')} />
      <link rel="alternate icon" type="image/png" href={asset('/vscode_icon.png?v=2')} />
      <link rel="apple-touch-icon" href={asset('/vscode_icon.png?v=2')} />
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta
        name="keywords"
        content="Anas Tag, full-stack software engineer, backend software engineer, Java, Spring Boot, React, TypeScript, Node.js, PostgreSQL, MongoDB, AWS, Docker, Kubernetes, CI/CD, REST APIs, Longueuil, Québec, Canada, portfolio"
      />
      <meta property="og:title" content={SITE_TITLE} />
      <meta property="og:description" content={SITE_DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://taganas2002.github.io/portfolio/" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={SITE_TITLE} />
      <meta name="twitter:description" content={SITE_DESCRIPTION} />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: SITE_TITLE,
};
