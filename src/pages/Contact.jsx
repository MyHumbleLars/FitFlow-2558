import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-humble-dark mb-4">Contact</h1>
          <p className="text-xl text-humble-text">
            Heb je vragen of wil je een afspraak maken? Neem gerust contact met me op.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-humble-dark mb-6">Contact Informatie</h2>
            
            <div className="space-y-4">
              <a href="tel:+31612345678" className="flex items-center text-humble-text hover:text-humble-primary">
                <FaPhone className="w-6 h-6 mr-4 text-humble-primary" />
                <span>+31 6 12345678</span>
              </a>
              
              <a href="mailto:info@myhumble.nl" className="flex items-center text-humble-text hover:text-humble-primary">
                <FaEnvelope className="w-6 h-6 mr-4 text-humble-primary" />
                <span>info@myhumble.nl</span>
              </a>
              
              <div className="flex items-center text-humble-text">
                <FaMapMarkerAlt className="w-6 h-6 mr-4 text-humble-primary" />
                <span>Zutphen, Nederland</span>
              </div>
              
              <a href="https://instagram.com/myhumble" target="_blank" rel="noopener noreferrer" className="flex items-center text-humble-text hover:text-humble-primary">
                <FaInstagram className="w-6 h-6 mr-4 text-humble-primary" />
                <span>@myhumble</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-humble-dark mb-6">Stuur een bericht</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-humble-text mb-2">Naam</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-humble-secondary rounded-lg focus:ring-2 focus:ring-humble-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-humble-text mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-humble-secondary rounded-lg focus:ring-2 focus:ring-humble-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-humble-text mb-2">Bericht</label>
                <textarea
                  className="w-full px-4 py-2 border border-humble-secondary rounded-lg focus:ring-2 focus:ring-humble-primary focus:border-transparent h-32"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-humble-primary text-white py-3 rounded-lg font-semibold hover:bg-humble-accent transition-colors"
              >
                Verstuur bericht
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}