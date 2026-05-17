'use client'

import { motion } from 'framer-motion'
import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa'

export default function About() {
  const highlights = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.',
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: 'Problem Solver',
      description: 'I love tackling complex challenges and finding elegant solutions.',
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Fast Learner',
      description: 'Always staying up-to-date with the latest technologies and best practices.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate full-stack developer with a strong foundation in modern web technologies.
              With several years of experience, I've worked on diverse projects ranging from small business
              websites to large-scale enterprise applications.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My journey in software development started with a curiosity about how things work on the web.
              Today, I specialize in building responsive, user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing my knowledge through blog posts and mentoring.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="card p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary-600 flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Made with Bob