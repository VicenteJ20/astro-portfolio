import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context: any) {
  const posts = await getCollection('posts')
  return rss({
    title: 'Vicente Jorquera',
    description: 'Blog & portfolio de Vicente Jorquera',
    site: context.site,
    items: posts.map((post: any) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      link: `/posts/${post.slug}`,
      date: post.data.date,
    })),
    customData: `<language>es</language>`
  })
}