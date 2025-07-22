import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '@/config/site';

export async function GET(context) {
    const posts = await getCollection('blog');
    return rss({
        title: siteConfig.name,
        description: siteConfig.description,
        site: context.site,
        items: posts
            .filter(post => post.data.locale !== 'en') // Filter out posts with locale 'en'
            .map((post) => ({
                ...post.data,
                link: `/el/blog/${post.slug}/`,
            })),
    });
}
