import { z } from 'zod'

export const skillSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  name: z.string().min(1, 'Name is required').max(50, 'Name too long'),
  category: z.enum(['frontend', 'backend', 'database', 'tools', 'other'], {
    errorMap: () => ({ message: 'Invalid category' }),
  }),
  proficiency: z.number().min(1, 'Proficiency must be at least 1').max(100, 'Proficiency cannot exceed 100'),
  icon: z.string().min(1, 'Icon is required'),
  yearsOfExperience: z.number().min(0, 'Years of experience cannot be negative'),
})

export const skillsArraySchema = z.array(skillSchema)

export type SkillSchema = z.infer<typeof skillSchema>

// Made with Bob
