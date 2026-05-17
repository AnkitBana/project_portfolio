// Project Types
export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  category: string
  startDate: string
  endDate?: string
}

// Skill Types
export interface Skill {
  id: string
  name: string
  category: string
  proficiency: number // 1-100
  icon: string
  yearsOfExperience: number
}

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools' | 'other'

// Testimonial Types
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number // 1-5
  image?: string
  date: string
}

// Blog Types
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt?: string
  tags: string[]
  category: string
  image: string
  readTime: number // in minutes
  featured: boolean
}

// Contact Form Types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Social Links Types
export interface SocialLink {
  platform: string
  url: string
  icon: string
}

// SEO Types
export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonical?: string
}

// Navigation Types
export interface NavItem {
  label: string
  href: string
  icon?: string
}

// API Response Types (for Phase 2)
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Pagination Types
export interface PaginationData {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: PaginationData
}

// Made with Bob
