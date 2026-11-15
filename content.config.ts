import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: 'posts/*.md',
      schema: z.object({
        date: z.date(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
      }),
    }),
  },
})
