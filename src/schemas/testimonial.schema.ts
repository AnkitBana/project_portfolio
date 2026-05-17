import { z } from 'zod'

export const testimonialSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  role: z.string().min(1, 'Role is required').max(100, 'Role too long'),
  company: z.string().min(1, 'Company is required').max(100, 'Company too long'),
  content: z.string().min(10, 'Content must be at least 10 characters').max(500, 'Content too long'),
  rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating cannot exceed 5'),
  image: z.string().url('Invalid image URL').optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
})

export const testimonialsArraySchema = z.array(testimonialSchema)

export type TestimonialSchema = z.infer<typeof testimonialSchema>

// Made with Bob
