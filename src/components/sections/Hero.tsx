'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDocker, FaAws } from 'react-icons/fa'
import { SiKubernetes, SiJenkins, SiTerraform, SiAnsible } from 'react-icons/si'
import { HiArrowDown } from 'react-icons/hi'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Floating tech icons animation
  const floatingIcons = [
    { Icon: FaDocker, delay: 0, x: 100, y: 100 },
    { Icon: SiKubernetes, delay: 0.5, x: -100, y: 150 },
    { Icon: FaAws, delay: 1, x: 150, y: -50 },
    { Icon: SiJenkins, delay: 1.5, x: -150, y: -100 },
    { Icon: SiTerraform, delay: 2, x: 200, y: 50 },
    { Icon: SiAnsible, delay: 2.5, x: -200, y: 0 },
  ]

  // Typing animation for roles
  const roles = ['SAP Consultant', 'DevOps Engineer', 'CBTA Specialist']

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs with pulsing effect */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary-400 to-primary-600 dark:from-primary-900 dark:to-primary-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-secondary-400 to-secondary-600 dark:from-secondary-900 dark:to-secondary-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 dark:from-purple-900 dark:to-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 dark:opacity-15"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating tech icons */}
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute text-primary-300 dark:text-primary-700 opacity-20 dark:opacity-10"
            style={{
              left: `${20 + (index * 15)}%`,
              top: `${10 + (index * 12)}%`,
            }}
            animate={{
              x: [0, x, 0],
              y: [0, y, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + index * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
          >
            <Icon size={40} />
          </motion.div>
        ))}

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-primary-400 dark:bg-primary-600 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-semibold mb-4">
              👋 Hello, I'm
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              type: "spring",
              bounce: 0.4
            }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-primary-600 via-secondary-600 to-purple-600 dark:from-primary-400 dark:via-secondary-400 dark:to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Ankit Kumar Gautam
            </motion.span>
          </motion.h1>

          {/* Roles - below name */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              SAP Consultant | DevOps Engineer | CBTA Specialist
            </p>
            <motion.div
              className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-primary-600 via-secondary-600 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 192 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </motion.div>

          {/* Description with stagger effect */}
          <motion.p
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about <motion.span 
              className="font-semibold text-primary-600 dark:text-primary-400"
              whileHover={{ scale: 1.1 }}
              style={{ display: 'inline-block' }}
            >SAP solutions</motion.span>, <motion.span 
              className="font-semibold text-secondary-600 dark:text-secondary-400"
              whileHover={{ scale: 1.1 }}
              style={{ display: 'inline-block' }}
            >cloud infrastructure</motion.span>, and <motion.span 
              className="font-semibold text-purple-600 dark:text-purple-400"
              whileHover={{ scale: 1.1 }}
              style={{ display: 'inline-block' }}
            >test automation</motion.span>.
            <br />
            Specializing in Docker, Kubernetes, CBTA, and TOSCA with 2 years of hands-on experience.
          </motion.p>

          {/* CTA Buttons with hover effects */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="btn-primary relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="btn-outline relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
            </motion.button>
          </motion.div>

          {/* Social Links with bounce animation */}
          <motion.div
            className="flex gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { href: "https://github.com/AnkitBana", Icon: FaGithub, label: "GitHub" },
              { href: "https://linkedin.com/in/ankit-kumar-gautam", Icon: FaLinkedin, label: "LinkedIn" },
              { href: "https://twitter.com/ankitbana", Icon: FaTwitter, label: "Twitter" },
              { href: "mailto:aankit.sssingh@gmail.com", Icon: FaEnvelope, label: "Email" },
            ].map(({ href, Icon, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                aria-label={label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator with continuous bounce */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 flex flex-col items-center gap-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-label="Scroll to about section"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-sm font-medium">Scroll Down</span>
              <HiArrowDown size={32} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Made with Bob
