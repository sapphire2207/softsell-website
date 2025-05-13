import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechGrow Solutions",
      quote: "SoftSell transformed our unused licenses into valuable capital. The process was seamless and professional. Their team's expertise saved us months of internal effort.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "CloudScale Innovations",
      quote: "We recovered significant funds through SoftSell that we thought were lost. Their transparent approach and quick turnaround time exceeded our expectations.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Finance Director",
      company: "Global Tech Corp",
      quote: "Outstanding service! SoftSell helped us optimize our software portfolio and turned dormant assets into working capital. A game-changer for our IT budget.",
      avatar: "https://randomuser.me/api/portraits/women/27.jpg",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Operations Manager",
      company: "NextGen Systems",
      quote: "Professional, efficient, and trustworthy. SoftSell made the entire process of selling our surplus licenses effortless. Highly recommend their services.",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by leading companies worldwide to maximize their software license value
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 h-full">
                {/* Quote icon background */}
                <div className="absolute right-8 top-8 opacity-5 dark:opacity-10">
                  <Quote className="w-24 h-24 text-gray-900 dark:text-white transform rotate-180" />
                </div>

                <div className="flex items-start mb-6 relative z-10">
                  <div className="relative">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover ring-4 ring-white dark:ring-gray-800 shadow-lg"
                    />

                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {t.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {t.role}
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {t.company}
                    </p>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="relative z-10">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </blockquote>

                {/* Hover effect gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 dark:group-hover:from-blue-500/10 dark:group-hover:to-purple-500/10 rounded-3xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of satisfied clients who've maximized their software assets
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;