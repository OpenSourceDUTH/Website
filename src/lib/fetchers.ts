import { getCollection } from "astro:content";

export async function getCategories(locale: string = 'en') {
  const posts = await getPosts(locale);
  const categories = [
    ...new Set(posts.map((post) => post.data.category).flat()),
  ];

  return categories;
}

export async function getPosts(locale: string = 'en') {
  const posts = (await getCollection("blog"))
    .filter((post) => {
      // Check for locale-specific files (e.g., filename.el.md)
      const isLocaleFile = post.id.includes(`.${locale}.md`);
      // Check for locale in frontmatter
      const hasLocaleInFrontmatter = post.data.locale === locale;
      // Default files (no locale suffix) are considered English
      const isDefaultFile = !post.id.includes('.el.md') && locale === 'en';
      
      return isLocaleFile || hasLocaleInFrontmatter || isDefaultFile;
    })
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}

export async function getPostsByCategory(category: string, locale: string = 'en') {
  const posts = (await getCollection("blog"))
    .filter((post) => {
      const localeMatch = post.data.locale === locale || 
        (locale === 'en' && !post.data.locale) ||
        post.id.includes(`.${locale}.md`);
      return post.data.category.includes(category) && localeMatch;
    })
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}

export async function getGuides(locale: string = 'en') {
  const guides = (await getCollection("guides"))
    .filter((guide) => {
      // Check for locale-specific files (e.g., filename.el.mdx)
      const isLocaleFile = guide.id.includes(`.${locale}.mdx`) || guide.id.includes(`.${locale}.md`);
      // Check for locale in frontmatter
      const hasLocaleInFrontmatter = guide.data.locale === locale;
      // Default files (no locale suffix) are considered English
      const isDefaultFile = !guide.id.includes('.el.mdx') && !guide.id.includes('.el.md') && locale === 'en';
      
      return (isLocaleFile || hasLocaleInFrontmatter || isDefaultFile) && guide.data.published;
    })
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return guides;
}

export async function getDocs(locale: string = 'en') {
  const docs = (await getCollection("docs"))
    .filter((doc) => {
      // Check for locale-specific files (e.g., filename.el.mdx)
      const isLocaleFile = doc.id.includes(`.${locale}.mdx`) || doc.id.includes(`.${locale}.md`);
      // Check for locale in frontmatter
      const hasLocaleInFrontmatter = doc.data.locale === locale;
      // Default files (no locale suffix) are considered English
      const isDefaultFile = !doc.id.includes('.el.mdx') && !doc.id.includes('.el.md') && locale === 'en';
      
      return isLocaleFile || hasLocaleInFrontmatter || isDefaultFile;
    });

  return docs;
}

