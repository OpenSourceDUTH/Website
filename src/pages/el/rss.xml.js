import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '@/config/site';

export async function GET(context) {
    const posts = await getCollection('blog');
    const greekPosts = posts.filter(post => 
        post.id.includes('.el.md') || post.data.locale === 'el'
    );
    
    return rss({
        title: siteConfig.name,
        description: siteConfig.description,
        site: context.site,
        items: greekPosts.map((post) => {
            let slug = post.slug;
            // Remove "el" suffix from slug if present
            slug = slug.replace(/el$/, '');
            
            return {
                ...post.data,
                link: `/el/blog/${slug}/`,
            };
        }),
    });
}
