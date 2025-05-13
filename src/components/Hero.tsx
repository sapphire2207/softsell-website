import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 1 
      }
    }
  };

  const ctaVariants = {
    normal: { 
      scale: 1,
      boxShadow: "0px 4px 10px rgba(37, 99, 235, 0.2)"
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(37, 99, 235, 0.3)"
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-6 sm:px-10">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute -bottom-40 -left-20 w-80 h-80 bg-indigo-300 dark:bg-indigo-800 rounded-full opacity-20 blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16"
        >
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div variants={item} className="mb-2">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-sm font-medium mb-2">
                Software License Marketplace
              </span>
            </motion.div>
            <motion.h1 
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight"
            >
              Unlock the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Value</span> of Your Software Licenses
            </motion.h1>
            <motion.p 
              variants={item}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
            >
              Transform unused software licenses into instant cash with <span className="font-semibold text-blue-600 dark:text-blue-400">SoftSell</span>.
              Quick, secure, and hassle-free license resale.
            </motion.p>
            <motion.div 
              variants={item}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
            >
              <motion.div
                variants={ctaVariants}
                initial="normal"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <a 
                  href="#contact"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition duration-300 inline-block"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Get a Quote Now
                </a>
                {isHovered && (
                  <motion.div 
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400 to-indigo-400 blur-lg opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>
              <a 
                href="#howitworks"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium flex items-center transition duration-300"
              >
                Learn More 
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={item}
              className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Trusted by <span className="text-blue-600 dark:text-blue-400">companies worldwide </span></p>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start items-center">
                {['Microsoft', 'Adobe', 'Oracle', 'IBM', 'SAP'].map((company, index) => (
                  <div key={index} className="text-gray-400 dark:text-gray-500 font-medium">
                    {company}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Card */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-md"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mr-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 text-blue-600 dark:text-blue-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Instant Valuation</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Get your license value in minutes</p>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-6"></div>

                <motion.div 
                  variants={statsVariants}
                  initial="hidden"
                  animate={animationComplete ? "show" : "hidden"}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-4 rounded-xl mb-6"
                >
                  <div className="flex justify-between items-center">
                    {[
                      { label: "Value Recovered", value: "$500K+" },
                      { label: "Client Rating", value: "4.9/5" },
                      { label: "Avg. Turnaround", value: "24h" }
                    ].map((stat, i) => (
                      <div className="text-center" key={i}>
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <div className="space-y-4">
                  {[
                    "Submit your license details",
                    "Get your instant valuation",
                    "Receive payment within 24 hours"
                  ].map((text, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + (index * 0.2) }}
                      className="flex items-center"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-3">
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{index + 1}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-200 dark:bg-blue-800/30 rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-indigo-200 dark:bg-indigo-800/30 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
