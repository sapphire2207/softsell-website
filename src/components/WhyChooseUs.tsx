import { motion } from "framer-motion";
import { Clock, Shield, Sliders, Zap } from "lucide-react";

// Using Lucide icons instead of SVG for consistency with the HowItWorks component
const features = [
  {
    icon: <Clock className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Fast Valuation",
    description: "Get an instant quote within minutes of submitting your license details.",
    accentColor: "from-blue-500 to-cyan-400",
    darkAccentColor: "from-blue-600 to-cyan-500",
  },
  {
    icon: <Shield className="h-10 w-10 text-green-600 dark:text-green-400" />,
    title: "Secure Process",
    description: "We ensure complete data privacy and secure transactions for all license transfers.",
    accentColor: "from-green-500 to-emerald-400",
    darkAccentColor: "from-green-600 to-emerald-500",
  },
  {
    icon: <Sliders className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Flexible Options",
    description: "Multiple payment methods and support for various software license types.",
    accentColor: "from-purple-500 to-violet-400",
    darkAccentColor: "from-purple-600 to-violet-500",
  },
  {
    icon: <Zap className="h-10 w-10 text-red-600 dark:text-red-400" />,
    title: "Maximum Value",
    description: "We guarantee the best market rates for your unused software licenses.",
    accentColor: "from-red-500 to-orange-400",
    darkAccentColor: "from-red-600 to-orange-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-16 text-center">
          <motion.div 
            className="inline-block mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 rounded-full">
              Our Advantages
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Us</span>
          </motion.h2>
          
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
          </div>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover why thousands of businesses trust our platform for monetizing their unused software licenses.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={cardVariants}
            >
              <div className={`absolute inset-x-0 -bottom-1.5 h-1.5 bg-gradient-to-r ${feature.accentColor} dark:${feature.darkAccentColor} rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              <div className="h-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${feature.accentColor} dark:${feature.darkAccentColor} bg-opacity-10 dark:bg-opacity-20`}>
                      <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    {feature.description}
                  </p>
                  
                  <div className="mt-auto">
                    <span className={`inline-block text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${feature.accentColor} dark:${feature.darkAccentColor} group-hover:underline cursor-pointer`}>
                      Learn more
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Ready to maximize the value of your unused licenses?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Join thousands of satisfied customers who have successfully monetized their software assets.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;