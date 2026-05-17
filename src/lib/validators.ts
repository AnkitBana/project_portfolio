import { projectsArraySchema } from '@/schemas/project.schema'
import { skillsArraySchema } from '@/schemas/skill.schema'
import { testimonialsArraySchema } from '@/schemas/testimonial.schema'
import { blogPostsArraySchema } from '@/schemas/blog.schema'
import type { Project, Skill, Testimonial, BlogPost } from '@/types'

// Import JSON data
import projectsData from '@/data/projects.json'
import skillsData from '@/data/skills.json'
import testimonialsData from '@/data/testimonials.json'
import blogData from '@/data/blog.json'

/**
 * Validates and returns projects data
 */
export function getProjects(): Project[] {
  try {
    const validated = projectsArraySchema.parse(projectsData)
    return validated as Project[]
  } catch (error) {
    console.error('Error validating projects data:', error)
    return []
  }
}

/**
 * Get a single project by ID
 */
export function getProjectById(id: string): Project | null {
  const projects = getProjects()
  return projects.find(project => project.id === id) || null
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  const projects = getProjects()
  return projects.filter(project => project.featured)
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  const projects = getProjects()
  return projects.filter(project => project.category === category)
}

/**
 * Validates and returns skills data
 */
export function getSkills(): Skill[] {
  try {
    const validated = skillsArraySchema.parse(skillsData)
    return validated as Skill[]
  } catch (error) {
    console.error('Error validating skills data:', error)
    return []
  }
}

/**
 * Get skills by category
 */
export function getSkillsByCategory(category: string): Skill[] {
  const skills = getSkills()
  return skills.filter(skill => skill.category === category)
}

/**
 * Get skill categories
 */
export function getSkillCategories(): string[] {
  const skills = getSkills()
  const categories = new Set(skills.map(skill => skill.category))
  return Array.from(categories)
}

/**
 * Validates and returns testimonials data
 */
export function getTestimonials(): Testimonial[] {
  try {
    const validated = testimonialsArraySchema.parse(testimonialsData)
    return validated as Testimonial[]
  } catch (error) {
    console.error('Error validating testimonials data:', error)
    return []
  }
}

/**
 * Validates and returns blog posts data
 */
export function getBlogPosts(): BlogPost[] {
  try {
    const validated = blogPostsArraySchema.parse(blogData)
    return validated as BlogPost[]
  } catch (error) {
    console.error('Error validating blog posts data:', error)
    return []
  }
}

/**
 * Get a single blog post by ID
 */
export function getBlogPostById(id: string): BlogPost | null {
  const posts = getBlogPosts()
  return posts.find(post => post.id === id) || null
}

/**
 * Get featured blog posts
 */
export function getFeaturedBlogPosts(): BlogPost[] {
  const posts = getBlogPosts()
  return posts.filter(post => post.featured)
}

/**
 * Get blog posts by category
 */
export function getBlogPostsByCategory(category: string): BlogPost[] {
  const posts = getBlogPosts()
  return posts.filter(post => post.category === category)
}

/**
 * Get blog posts by tag
 */
export function getBlogPostsByTag(tag: string): BlogPost[] {
  const posts = getBlogPosts()
  return posts.filter(post => post.tags.includes(tag))
}

/**
 * Get all unique blog categories
 */
export function getBlogCategories(): string[] {
  const posts = getBlogPosts()
  const categories = new Set(posts.map(post => post.category))
  return Array.from(categories)
}

/**
 * Get all unique blog tags
 */
export function getBlogTags(): string[] {
  const posts = getBlogPosts()
  const tags = new Set(posts.flatMap(post => post.tags))
  return Array.from(tags)
}

// Made with Bob
