'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-24 right-8 w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-800 dark:text-yellow-400 hover:scale-110 transition-all duration-300 z-50 border-2 border-gray-200 dark:border-gray-700"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <FaMoon size={24} className="text-gray-700" />
        ) : (
          <FaSun size={24} className="text-yellow-400" />
        )}
      </motion.div>
    </motion.button>
  )
}

// Made with Bob