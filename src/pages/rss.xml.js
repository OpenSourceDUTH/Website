import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '@/config/site';

export async function GET(context) {
	const posts = await getCollection('blog');
	
	// Filter for English posts only:
	// - Exclude files with language extensions (like .el.md, .fr.md, etc.)
	// - Include only posts with 'en' locale or no locale specified
	const englishPosts = posts.filter(post => {
		const hasLanguageExtension = /\.[a-z]{2}\.md$/.test(post.id);
		const isEnglishLocale = post.data.locale === 'en' || !post.data.locale;
		return !hasLanguageExtension && isEnglishLocale;
	});
	
	return rss({
		title: siteConfig.name,
		description: siteConfig.description,
		site: context.site,
		items: englishPosts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
