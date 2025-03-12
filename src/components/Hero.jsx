import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="bg-humble-light pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 lg:mb-0"
          >
            <h1 className="text-5xl font-bold text-humble-dark mb-6">
              Persoonlijke begeleiding<br />
              <span className="text-humble-accent">voor jouw doelen</span>
            </h1>
            <p className="text-xl text-humble-text mb-8">
              Ontdek hoe persoonlijke training en voedingsadvies jou kunnen helpen om je doelen te bereiken.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-humble-primary text-white px-8 py-3 rounded-full flex items-center hover:bg-humble-accent transition-colors">
                Plan je intake gesprek
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80"
              alt="Personal Training"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}