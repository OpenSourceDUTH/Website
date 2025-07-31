import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '@/config/site';

export async function GET(context) {
    const posts = await getCollection('blog');
    
    // Filter for Greek posts:
    // - Include files with .el.md extension
    // - Include .md files (no language extension) that have 'el' locale in frontmatter
    // This approach allows for future languages and doesn't block .md files with Greek locale
    const greekPosts = posts.filter(post => {
        const isGreekFile = post.id.includes('.el.md');
        const hasLanguageExtension = /\.[a-z]{2}\.md$/.test(post.id);
        const isGreekLocaleFile = !hasLanguageExtension && post.data.locale === 'el';
        return isGreekFile || isGreekLocaleFile;
    });
    
    return rss({
        title: siteConfig.name,
        description: siteConfig.description,
        site: context.site,
        items: greekPosts.map((post) => {
            let slug = post.slug;
            // Remove language suffix from slug if present (handles .el, .fr, .de, etc.)
            slug = slug.replace(/\.[a-z]{2}$/, '');
            
            return {
                ...post.data,
                link: `/el/blog/${slug}/`,
            };
        }),
    });
}
