'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import type { Testimonial } from '@/types'

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load testimonials data
    fetch('/data/testimonials.json')
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error loading testimonials:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section id="testimonials" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">Loading testimonials...</div>
        </div>
      </section>
    )
  }

  if (testimonials.length === 0) {
    return null // Don't show section if no testimonials
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long'
    })
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
        size={18}
      />
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">
            What people say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="card p-6 hover:shadow-xl transition-shadow duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-100">
                <FaQuoteLeft size={40} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 relative z-10">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 relative z-10 line-clamp-4">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 relative z-10">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDate(testimonial.date)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Made with Bob