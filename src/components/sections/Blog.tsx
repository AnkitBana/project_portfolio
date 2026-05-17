'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaClock, FaCalendar, FaArrowRight } from 'react-icons/fa'
import type { BlogPost } from '@/types'

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load blog posts data
    fetch('/data/blog.json')
      .then((res) => res.json())
      .then((data) => {
        // Show only featured posts or latest 3
        const featuredPosts = data.filter((post: BlogPost) => post.featured).slice(0, 3)
        setPosts(featuredPosts.length > 0 ? featuredPosts : data.slice(0, 3))
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error loading blog posts:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section id="blog" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center">Loading blog posts...</div>
        </div>
      </section>
    )
  }

  if (posts.length === 0) {
    return null // Don't show section if no posts
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Latest Blog Posts</h2>
          <p className="section-subtitle">
            Thoughts, tutorials, and insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="card overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Post Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100">
                    <span className="text-4xl font-bold text-primary-600">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                )}
                {post.featured && (
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Category */}
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-semibold rounded-full mb-3 capitalize">
                  {post.category}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <FaCalendar size={14} />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock size={14} />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                >
                  Read More
                  <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/blog"
            className="btn-outline inline-flex items-center gap-2"
          >
            View All Posts
            <FaArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// Made with Bob