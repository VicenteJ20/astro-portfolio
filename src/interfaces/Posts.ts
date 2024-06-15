export interface PostBasicProps {
  id: string;
  data: {
    title: string;
    description: string;
    tags: string[];
    pubDate: string;
    slug: string;
  }
}