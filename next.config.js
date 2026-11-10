// The site is served from https://taganas2002.github.io/portfolio/ in production.
// In development it stays at http://localhost:3000/.
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

/** @type {import('next').NextConfig} */
module.exports = {
  basePath,
  trailingSlash: true, // export each page as /page/index.html so refreshes work on GitHub Pages
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true, // image optimization needs a server; GitHub Pages is static
  },
};
