import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

function capitalize(s: string) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}


export async function GET(context: any) {
  const posts = await getCollection('posts')
  const projects = await getCollection('projects')

  const items = [...posts, ...projects].map((item: any) => ({
    title: `${item.data.title} | ${capitalize(item.data.type)}`,
    description: item.data.description,
    pubDate: item.data.pubDate,
    link: `/${item.data.type === 'proyectos' ? item.data.type : 'blog'}/${item.data.slug}`,
    customData: `
      <language>es</language>
      <author>${item.data.author.name}</author>
    `
  }))

  return rss({
    stylesheet: '/rss/styles.xsl',
    title: 'Vicente Jorquera',
    description: 'Blog & portfolio de Vicente Jorquera',
    site: context.site,
    items: items
  })
}