import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    pubDate: z.date().default(new Date()),
    updatedDate: z.date().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional()
  }),
});

export const collections = {
  blog: blogCollection
};