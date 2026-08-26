// GitHub Pages serves this site from a sub-path (/mtnpi-website-new).
// Next.js's `basePath` config rewrites its own router/asset URLs, but it does
// NOT rewrite plain string paths used in hand-written <img src="/images/..."> tags.
// Every local asset path must go through withBasePath() so it resolves correctly
// both in local dev (empty base path) and on the deployed GitHub Pages site.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
