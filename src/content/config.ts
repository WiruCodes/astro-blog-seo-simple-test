import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date().default(new Date()),
    updatedDate: z.date().optional(),
    author: z.string().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection
};