'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'SAP Project Manager',
      company: 'Tech Solutions India',
      image: '/images/testimonials/client1.jpg',
      rating: 5,
      text: 'Ankit\'s expertise in SAP S/4HANA migration was instrumental in our project success. His deep understanding of both technical and business aspects helped us achieve a seamless transition with zero downtime.',
      project: 'SAP S/4HANA Migration',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'DevOps Lead',
      company: 'CloudTech Solutions',
      image: '/images/testimonials/client2.jpg',
      rating: 5,
      text: 'Working with Ankit on our Kubernetes infrastructure was a game-changer. His innovative approach to container orchestration and monitoring helped us achieve 99.9% uptime and significantly reduced our operational costs.',
      project: 'Kubernetes Infrastructure',
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'QA Director',
      company: 'Enterprise Systems Corp',
      image: '/images/testimonials/client3.jpg',
      rating: 5,
      text: 'Ankit\'s TOSCA automation framework transformed our testing process. We reduced manual testing efforts by 80% and improved our release cycle time dramatically. His attention to detail and best practices are exceptional.',
      project: 'Test Automation Framework',
    },
    {
      id: 4,
      name: 'Priya Sharma',
      role: 'IT Director',
      company: 'Global Enterprises Ltd',
      image: '/images/testimonials/client4.jpg',
      rating: 5,
      text: 'The CI/CD pipeline optimization that Ankit implemented has been a tremendous success. Our deployment time decreased by 70%, and the automated rollback mechanism has saved us countless hours of troubleshooting.',
      project: 'CI/CD Pipeline',
    },
    {
      id: 5,
      name: 'David Martinez',
      role: 'Cloud Architect',
      company: 'Innovation Labs',
      image: '/images/testimonials/client5.jpg',
      rating: 5,
      text: 'Ankit\'s Infrastructure as Code implementation using Terraform was outstanding. His multi-region deployment strategy and cost optimization techniques resulted in a 40% reduction in our AWS spending.',
      project: 'AWS Infrastructure',
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      role: 'VP of Engineering',
      company: 'Digital Dynamics',
      image: '/images/testimonials/client6.jpg',
      rating: 5,
      text: 'The observability platform Ankit built for our microservices architecture has been invaluable. Real-time monitoring and alerting have significantly improved our incident response time and system reliability.',
      project: 'Monitoring Platform',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="mt-12 max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="card p-8 md:p-12 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-primary-200">
              <FaQuoteLeft size={48} />
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-6 h-6" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl text-gray-700 text-center mb-8 leading-relaxed relative z-10">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Project Badge */}
            <div className="flex justify-center mb-6">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                Project: {testimonials[currentIndex].project}
              </span>
            </div>

            {/* Client Info */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-primary-600 font-medium mb-1">
                {testimonials[currentIndex].role}
              </p>
              <p className="text-gray-600 text-sm">
                {testimonials[currentIndex].company}
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>

              {/* Dots Navigation */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Testimonial Grid - All Testimonials */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`card p-6 cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-2 ring-primary-600 shadow-xl'
                  : 'hover:shadow-lg'
              }`}
              onClick={() => goToTestimonial(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Mini Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                ))}
              </div>

              {/* Mini Text */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                "{testimonial.text}"
              </p>

              {/* Mini Client Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h5>
                  <p className="text-xs text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">2+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Made with Bob