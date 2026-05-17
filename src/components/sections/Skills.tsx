'use client'

import { motion } from 'framer-motion'
import { FaDocker, FaAws, FaGitAlt, FaJenkins } from 'react-icons/fa'
import { SiKubernetes, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiSap, SiTricentis } from 'react-icons/si'
import { DiJenkins } from 'react-icons/di'

export default function Skills() {
  const skillCategories = [
    {
      title: 'SAP Technologies',
      icon: <SiSap className="w-8 h-8" />,
      skills: [
        { name: 'SAP S/4HANA', level: 85, color: 'bg-blue-500' },
        { name: 'SAP ABAP', level: 80, color: 'bg-blue-600' },
        { name: 'SAP Fiori', level: 75, color: 'bg-blue-400' },
        { name: 'SAP BTP', level: 70, color: 'bg-blue-700' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: <FaDocker className="w-8 h-8" />,
      skills: [
        { name: 'Docker', level: 90, color: 'bg-cyan-500' },
        { name: 'Kubernetes', level: 85, color: 'bg-blue-500' },
        { name: 'AWS', level: 80, color: 'bg-orange-500' },
        { name: 'Jenkins', level: 85, color: 'bg-red-500' },
        { name: 'Terraform', level: 75, color: 'bg-purple-500' },
        { name: 'Ansible', level: 70, color: 'bg-red-600' },
      ],
    },
    {
      title: 'Test Automation',
      icon: <SiTricentis className="w-8 h-8" />,
      skills: [
        { name: 'TOSCA', level: 90, color: 'bg-green-500' },
        { name: 'CBTA', level: 85, color: 'bg-green-600' },
        { name: 'Selenium', level: 80, color: 'bg-green-400' },
        { name: 'API Testing', level: 85, color: 'bg-teal-500' },
      ],
    },
    {
      title: 'Monitoring & Observability',
      icon: <SiPrometheus className="w-8 h-8" />,
      skills: [
        { name: 'Prometheus', level: 80, color: 'bg-orange-600' },
        { name: 'Grafana', level: 85, color: 'bg-orange-500' },
        { name: 'ELK Stack', level: 75, color: 'bg-yellow-500' },
        { name: 'Splunk', level: 70, color: 'bg-green-700' },
      ],
    },
  ]

  const tools = [
    { name: 'Git', icon: <FaGitAlt size={32} />, color: 'text-orange-600' },
    { name: 'Docker', icon: <FaDocker size={32} />, color: 'text-cyan-500' },
    { name: 'Kubernetes', icon: <SiKubernetes size={32} />, color: 'text-blue-600' },
    { name: 'Jenkins', icon: <FaJenkins size={32} />, color: 'text-red-600' },
    { name: 'Terraform', icon: <SiTerraform size={32} />, color: 'text-purple-600' },
    { name: 'Ansible', icon: <SiAnsible size={32} />, color: 'text-red-700' },
    { name: 'AWS', icon: <FaAws size={32} />, color: 'text-orange-500' },
    { name: 'Grafana', icon: <SiGrafana size={32} />, color: 'text-orange-600' },
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            My expertise across various technologies and tools
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary-600 dark:text-primary-400">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className={`h-full ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className={tool.color}>{tool.icon}</div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mt-16 card p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">AWS</div>
              <p className="text-gray-700 dark:text-gray-300">Certified Solutions Architect</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">TOSCA</div>
              <p className="text-gray-700 dark:text-gray-300">Certified Test Automation Specialist</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">SAP</div>
              <p className="text-gray-700 dark:text-gray-300">Certified Development Associate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Made with Bob