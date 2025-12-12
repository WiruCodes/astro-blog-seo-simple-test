import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    pubDate: z.date().default(new Date()),
    updatedDate: z.date(),
    heroImage: z.object({
      image: image(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  blog: blogCollection
};

// the keys inside the schema object are what's needed for 
// the values inside the front matter of the blog mdx files

// images are to be put under src/images with similar folder structure
// for content/blog