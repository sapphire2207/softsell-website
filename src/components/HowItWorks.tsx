import { motion } from "framer-motion";
import { Upload, DollarSign, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: <Upload className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
    title: "Upload License",
    description:
      "Easily upload details of your unused software licenses through our secure platform.",
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-green-600 dark:text-green-400" />,
    title: "Get Valuation",
    description:
      "Receive an instant, competitive valuation for your software licenses within minutes.",
  },
  {
    icon: <DollarSign className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
    title: "Get Paid",
    description:
      "Once accepted, get paid quickly through your preferred payment method.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            How It <span className="text-blue-600 dark:text-blue-400">Works</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Three simple steps to monetize your unused software licenses quickly and securely.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={cardVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300 opacity-70 blur-sm group-hover:blur-none"></div>
              <div className="relative h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 group-hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-full">
                    {step.icon}
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center w-8 h-8 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full font-bold text-lg mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">
                  {step.description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a 
                    href="#" 
                    className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center group-hover:underline"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <motion.button 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;