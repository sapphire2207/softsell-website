'use client'

import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon, Info, Star, ArrowRight } from 'lucide-react'
import { ThemeContext } from './theme-provider'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const { theme, toggleTheme } = useContext(ThemeContext)

  const navItems = [
    { 
      href: "#how-it-works", 
      label: "How It Works", 
      icon: <Info className="mr-2" size={18} />,
      className: "text-gray-200"
    },
    { 
      href: "#why-choose-us", 
      label: "Why Choose Us", 
      icon: <Star className="mr-2" size={18} />,
      className: "text-gray-200"
    },
    { 
      href: "#contact", 
      label: "Get Started", 
      icon: <ArrowRight className="mr-2" size={18} />,
      className: "bg-blue-600 hover:bg-blue-700 text-white"
    }
  ]

  return (
    <div className="relative">
      <motion.nav 
        className="sticky top-0 z-50 bg-black backdrop-blur-lg shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-extrabold text-blue-400">
              SoftSell
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.href === "#contact" ? (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <Link 
                      to={item.href} 
                      className={`${item.className} flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium shadow-md`}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                    <motion.div
                      className="absolute inset-0 -z-10 rounded-full bg-blue-500/20 blur-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                ) : (
                  <div className="relative py-2">
                    <Link 
                      to={item.href} 
                      className={`${item.className} flex items-center px-1 py-1 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200`}
                      onMouseEnter={() => setHoveredItem(item.label)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                    
                    {/* Animated underline */}
                    <motion.div 
                      className="absolute -bottom-1 left-0 h-0.5 bg-blue-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: hoveredItem === item.label ? '100%' : 0,
                        opacity: hoveredItem === item.label ? 1 : 0
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Theme Toggle Button with animation */}
            <motion.button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-800 focus:outline-none transition-colors duration-200"
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-yellow-400" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-white hover:bg-gray-800 focus:outline-none"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Curved divider */}
      <div className="absolute top-full left-0 right-0 w-full overflow-hidden z-10 -mt-px">
        <svg 
          className="relative block w-full h-12 sm:h-16 fill-gray-900"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
          />
        </svg>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            className="absolute top-0 right-0 w-3/4 h-full bg-gray-900 shadow-xl p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-8">
              <motion.button
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-white hover:bg-gray-800 focus:outline-none"
                whileTap={{ scale: 0.95 }}
              >
                <X size={24} />
              </motion.button>
            </div>
            
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.href === "#contact" ? (
                    <Link 
                      to={item.href} 
                      className={`${item.className} flex items-center justify-center px-6 py-3 rounded-full text-base font-medium`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ) : (
                    <div className="relative">
                      <Link 
                        to={item.href} 
                        className={`${item.className} flex items-center px-4 py-2 text-base font-medium hover:text-blue-400 transition-colors duration-200`}
                        onClick={() => setIsOpen(false)}
                        onMouseEnter={() => setHoveredItem(item.label)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                      
                      {/* Mobile underline animation */}
                      <motion.div 
                        className="absolute -bottom-1 left-0 h-0.5 bg-blue-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: hoveredItem === item.label ? '100%' : 0,
                          opacity: hoveredItem === item.label ? 1 : 0
                        }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-10 left-0 right-0 px-6"
            >
              <div className="flex justify-between items-center p-4 bg-gray-800 rounded-xl">
                <span className="text-sm font-medium text-gray-300">
                  Switch Theme
                </span>
                <motion.button
                  aria-label="Toggle theme"
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-700 shadow-md focus:outline-none"
                  whileHover={{ rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {theme === 'dark' ? (
                    <Sun size={20} className="text-yellow-400" />
                  ) : (
                    <Moon size={20} className="text-yellow-400" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}