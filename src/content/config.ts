import { z, defineCollection } from  'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      image: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
})

export const collection = {
  posts: postCollection
}