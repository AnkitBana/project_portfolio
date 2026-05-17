import { z } from 'zod'

export const blogPostSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  excerpt: z.string().min(10, 'Excerpt must be at least 10 characters').max(300, 'Excerpt too long'),
  content: z.string().min(50, 'Content must be at least 50 characters'),
  author: z.string().min(1, 'Author is required'),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)').optional(),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  category: z.string().min(1, 'Category is required'),
  image: z.string().url('Invalid image URL'),
  readTime: z.number().min(1, 'Read time must be at least 1 minute'),
  featured: z.boolean(),
})

export const blogPostsArraySchema = z.array(blogPostSchema)

export type BlogPostSchema = z.infer<typeof blogPostSchema>

// Made with Bob
