import { getCollection } from "astro:content";

export async function getCollectionByDate(collectionName: any, limit?: number) {
  const collection = await getCollection(collectionName);

  if (limit) {
    return collection.map((item: any) => ({ ...item, pubDate: new Date(item.data.pubDate) }))
      .sort((a, b) => b.pubDate - a.pubDate)
      .slice(0, limit)
  }

  return collection.map((item: any) => ({ ...item, pubDate: new Date(item.data.pubDate) }))
    .sort((a, b) => b.pubDate - a.pubDate)
}