// Prefix a file from /public with the site's basePath.
// next/link and the router add basePath automatically, but plain <img>,
// <link> tags and next/image (v12, unoptimized) do not.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function asset(path) {
  return `${BASE_PATH}${path}`;
}
