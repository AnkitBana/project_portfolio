import { z } from 'zod'

export const projectSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
  description: z.string().min(10, 'Description must be at least 10 characters').max(200, 'Description too long'),
  longDescription: z.string().min(50, 'Long description must be at least 50 characters'),
  technologies: z.array(z.string()).min(1, 'At least one technology is required'),
  image: z.string().url('Invalid image URL'),
  liveUrl: z.string().url('Invalid live URL').optional(),
  githubUrl: z.string().url('Invalid GitHub URL').optional(),
  featured: z.boolean(),
  category: z.string().min(1, 'Category is required'),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)').optional(),
})

export const projectsArraySchema = z.array(projectSchema)

export type ProjectSchema = z.infer<typeof projectSchema>

// Made with Bob
