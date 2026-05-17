'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaCalendar, FaClock, FaArrowRight, FaTag } from 'react-icons/fa'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'Mastering Kubernetes: A Complete Guide to Container Orchestration',
      excerpt: 'Deep dive into Kubernetes architecture, best practices, and real-world deployment strategies for production environments.',
      category: 'devops',
      date: '2024-03-15',
      readTime: '12 min read',
      image: '/images/blog/kubernetes-guide.jpg',
      tags: ['Kubernetes', 'Docker', 'DevOps', 'Cloud'],
      featured: true,
    },
    {
      id: 2,
      title: 'SAP S/4HANA Migration: Lessons Learned from the Trenches',
      excerpt: 'Practical insights and strategies for successful SAP S/4HANA migration projects, including common pitfalls and how to avoid them.',
      category: 'sap',
      date: '2024-03-10',
      readTime: '10 min read',
      image: '/images/blog/sap-migration.jpg',
      tags: ['SAP', 'S/4HANA', 'Migration', 'ERP'],
      featured: true,
    },
    {
      id: 3,
      title: 'Building Robust CI/CD Pipelines with Jenkins and Docker',
      excerpt: 'Step-by-step guide to creating efficient, scalable CI/CD pipelines that reduce deployment time and increase reliability.',
      category: 'devops',
      date: '2024-03-05',
      readTime: '15 min read',
      image: '/images/blog/cicd-pipeline.jpg',
      tags: ['Jenkins', 'Docker', 'CI/CD', 'Automation'],
      featured: false,
    },
    {
      id: 4,
      title: 'Test Automation with TOSCA: Best Practices and Tips',
      excerpt: 'Comprehensive guide to implementing effective test automation strategies using TOSCA for enterprise applications.',
      category: 'automation',
      date: '2024-02-28',
      readTime: '8 min read',
      image: '/images/blog/tosca-automation.jpg',
      tags: ['TOSCA', 'Testing', 'Automation', 'QA'],
      featured: false,
    },
    {
      id: 5,
      title: 'Infrastructure as Code: Terraform vs CloudFormation',
      excerpt: 'Detailed comparison of Terraform and AWS CloudFormation, helping you choose the right IaC tool for your projects.',
      category: 'devops',
      date: '2024-02-20',
      readTime: '11 min read',
      image: '/images/blog/iac-comparison.jpg',
      tags: ['Terraform', 'AWS', 'IaC', 'Cloud'],
      featured: false,
    },
    {
      id: 6,
      title: 'Monitoring Microservices: Prometheus and Grafana Setup',
      excerpt: 'Learn how to set up comprehensive monitoring for microservices architecture using Prometheus and Grafana.',
      category: 'devops',
      date: '2024-02-15',
      readTime: '9 min read',
      image: '/images/blog/monitoring-setup.jpg',
      tags: ['Prometheus', 'Grafana', 'Monitoring', 'Observability'],
      featured: false,
    },
    {
      id: 7,
      title: 'SAP Fiori Development: Modern UI/UX Best Practices',
      excerpt: 'Explore modern approaches to SAP Fiori development, including responsive design patterns and performance optimization.',
      category: 'sap',
      date: '2024-02-10',
      readTime: '10 min read',
      image: '/images/blog/fiori-development.jpg',
      tags: ['SAP Fiori', 'UI5', 'UX', 'Development'],
      featured: false,
    },
    {
      id: 8,
      title: 'Docker Security: Hardening Your Containers',
      excerpt: 'Essential security practices for Docker containers, from image scanning to runtime protection and network policies.',
      category: 'devops',
      date: '2024-02-05',
      readTime: '13 min read',
      image: '/images/blog/docker-security.jpg',
      tags: ['Docker', 'Security', 'DevSecOps', 'Containers'],
      featured: false,
    },
    {
      id: 9,
      title: 'API Testing Strategies for Modern Applications',
      excerpt: 'Comprehensive guide to API testing methodologies, tools, and automation frameworks for reliable software delivery.',
      category: 'automation',
      date: '2024-01-30',
      readTime: '12 min read',
      image: '/images/blog/api-testing.jpg',
      tags: ['API Testing', 'Automation', 'REST', 'Testing'],
      featured: false,
    },
  ]

  const categories = [
    { id: 'all', label: 'All Posts', count: blogPosts.length },
    { id: 'devops', label: 'DevOps', count: blogPosts.filter(p => p.category === 'devops').length },
    { id: 'sap', label: 'SAP', count: blogPosts.filter(p => p.category === 'sap').length },
    { id: 'automation', label: 'Automation', count: blogPosts.filter(p => p.category === 'automation').length },
  ]

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory)

  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <section id="blog" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Latest Blog Posts</h2>
          <p className="section-subtitle">
            Insights, tutorials, and thoughts on technology
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            className="mt-12 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Featured Image */}
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-full">
                    Featured
                  </span>
                </div>

                {/* Featured Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-2">
                      <FaCalendar />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaClock />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="btn-primary inline-flex items-center gap-2 w-fit">
                    Read More
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(0, 6).map((post, index) => (
            <motion.article
              key={post.id}
              className="card overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Post Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendar />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Read Article
                  <FaArrowRight />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="btn-outline">
            View All Posts
          </button>
        </motion.div>
      </div>
    </section>
  )
}

// Made with Bob