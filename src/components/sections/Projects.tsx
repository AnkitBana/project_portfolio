'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaDocker, FaAws } from 'react-icons/fa'
import { SiKubernetes, SiTerraform, SiSap, SiTricentis, SiJenkins, SiPrometheus } from 'react-icons/si'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'SAP S/4HANA Cloud Migration',
      description: 'Led the migration of legacy SAP ECC system to S/4HANA Cloud, implementing modern DevOps practices and automated testing frameworks.',
      image: '/images/projects/sap-migration.jpg',
      category: 'sap',
      tags: ['SAP S/4HANA', 'Cloud Migration', 'ABAP', 'Fiori'],
      github: 'https://github.com/AnkitBana',
      demo: null,
      highlights: [
        'Reduced deployment time by 60%',
        'Implemented CI/CD pipeline',
        'Zero-downtime migration strategy',
      ],
      icon: <SiSap size={24} />,
    },
    {
      id: 2,
      title: 'Kubernetes Multi-Cluster Management',
      description: 'Designed and implemented a multi-cluster Kubernetes infrastructure with automated scaling, monitoring, and disaster recovery capabilities.',
      image: '/images/projects/k8s-cluster.jpg',
      category: 'devops',
      tags: ['Kubernetes', 'Docker', 'Helm', 'Prometheus', 'Grafana'],
      github: 'https://github.com/AnkitBana',
      demo: null,
      highlights: [
        'Managed 50+ microservices',
        '99.9% uptime achieved',
        'Auto-scaling implementation',
      ],
      icon: <SiKubernetes size={24} />,
    },
    {
      id: 3,
      title: 'TOSCA Test Automation Framework',
      description: 'Developed comprehensive test automation framework using TOSCA for SAP applications, reducing manual testing efforts by 80%.',
      image: '/images/projects/tosca-framework.jpg',
      category: 'automation',
      tags: ['TOSCA', 'CBTA', 'SAP Testing', 'API Testing'],
      github: 'https://github.com/AnkitBana',
      demo: null,
      highlights: [
        '500+ automated test cases',
        '80% reduction in testing time',
        'Integrated with CI/CD pipeline',
      ],
      icon: <SiTricentis size={24} />,
    },
    {
      id: 4,
      title: 'AWS Infrastructure as Code',
      description: 'Built scalable AWS infrastructure using Terraform and Ansible, implementing best practices for security, cost optimization, and high availability.',
      image: '/images/projects/aws-terraform.jpg',
      category: 'devops',
      tags: ['AWS', 'Terraform', 'Ansible', 'CloudFormation'],
      github: 'https://github.com/AnkitBana',
      demo: null,
      highlights: [
        'Multi-region deployment',
        '40% cost reduction',
        'Automated disaster recovery',
      ],
      icon: <FaAws size={24} />,
    },
    {
      id: 5,
      title: 'CI/CD Pipeline Optimization',
      description: 'Optimized Jenkins-based CI/CD pipelines for SAP and cloud applications, implementing parallel execution and intelligent caching strategies.',
      image: '/images/projects/cicd-pipeline.jpg',
      category: 'devops',
      tags: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes'],
      github: 'https://github.com/AnkitBana',
      demo: null,
      highlights: [
        '70% faster build times',
        'Parallel test execution',
        'Automated rollback mechanism',
      ],
      icon: <SiJenkins size={24} />,
    },
    {
      id: 6,
      title: 'Observability Platform',
      description: 'Implemented comprehensive monitoring and observability platform using Prometheus, Grafana, and ELK stack for distributed systems.',
      image: '/images/projects/monitoring.jpg',
      category: 'devops',
      tags: ['Prometheus', 'Grafana', 'ELK', 'Monitoring'],
      github: 'https://github.com/AnkitBana',
      demo: null,
      highlights: [
        'Real-time alerting system',
        'Custom dashboards',
        'Log aggregation and analysis',
      ],
      icon: <SiPrometheus size={24} />,
    },
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'sap', label: 'SAP' },
    { id: 'devops', label: 'DevOps' },
    { id: 'automation', label: 'Automation' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my work in SAP, DevOps, and Test Automation
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 flex items-center justify-center overflow-hidden">
                <div className="text-primary-600 dark:text-primary-400 transform group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <FaGithub size={20} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more? Check out my GitHub profile for additional projects and contributions.
          </p>
          <a
            href="https://github.com/AnkitBana"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FaGithub size={20} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// Made with Bob