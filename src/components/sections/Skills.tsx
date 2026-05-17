'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Skill } from '@/types'

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load skills data
    fetch('/data/skills.json')
      .then((res) => res.json())
      .then((data) => {
        setSkills(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error loading skills:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section id="skills" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center">Loading skills...</div>
        </div>
      </section>
    )
  }

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Tools and technologies I work with
          </p>
        </motion.div>

        <div className="mt-12 space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="card p-6 hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-center">
                      {/* Icon placeholder - you can add actual icons here */}
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                        <span className="text-2xl font-bold text-primary-600">
                          {skill.name.charAt(0)}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {skill.name}
                      </h4>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <motion.div
                          className="bg-primary-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                        />
                      </div>
                      <p className="text-sm text-gray-600">
                        {skill.proficiency}%
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Made with Bob