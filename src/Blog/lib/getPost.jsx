export default async function processMdxFiles() {
  // either absolute from project root (works with Vite):
  const modules = import.meta.glob('/src/markdown/*.mdx', { eager: true });
  // — OR — correctly relative:
  // const modules = import.meta.glob('../../markdown/*.mdx', { eager: true });

  const posts = Object.entries(modules).map(([path, mod]) => {
    const meta = mod.meta || {};
    const slug = meta.slug || path.match(/\/([^/]+)\.mdx$/)[1];
    return {
      slug,
      title: meta.title || 'Untitled',
      description: meta.description || 'No description',
      Content: mod.default,       // React component from your MDX
    };
  });

  return posts;
}
export async function getPostBySlug(slug) {
  const posts = await processMdxFiles();
  return posts.find(p => p.slug === slug) || null;
}
