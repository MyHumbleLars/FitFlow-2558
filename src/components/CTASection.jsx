import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

export default function CTASection() {
  return (
    <section className="bg-humble-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-humble-dark mb-12 lg:mb-0"
          >
            <h2 className="text-4xl font-bold mb-6">Start Your Journey Today</h2>
            <p className="text-xl mb-8">
              Join thousands of others who have transformed their lives with My Humble.
            </p>
            <ul className="space-y-4 mb-8">
              {['14-day free trial', 'No credit card required', 'Cancel anytime'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaCheck className="mr-3 text-humble-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-white text-humble-dark px-8 py-3 rounded-full font-semibold hover:bg-humble-light transition-colors">
              Get Started Now
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80"
              alt="Fitness Results"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}