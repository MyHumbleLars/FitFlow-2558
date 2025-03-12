import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function LeadForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: 'weight-loss'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-humble-light rounded-2xl p-8 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-humble-text hover:text-humble-dark"
        >
          <FaTimes />
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-humble-dark mb-2">
            Start je fitness reis
          </h2>
          <p className="text-humble-text">
            Ontvang een gratis intakegesprek en persoonlijk advies
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-humble-text mb-1">
              Naam
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-humble-secondary rounded-lg focus:ring-2 focus:ring-humble-primary focus:border-transparent bg-white"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Vul je naam in"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-humble-text mb-1">
              E-mailadres
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-humble-secondary rounded-lg focus:ring-2 focus:ring-humble-primary focus:border-transparent bg-white"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Vul je e-mailadres in"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-humble-text mb-1">
              Je belangrijkste doel
            </label>
            <select
              className="w-full px-4 py-2 border border-humble-secondary rounded-lg focus:ring-2 focus:ring-humble-primary focus:border-transparent bg-white"
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            >
              <option value="weight-loss">Afvallen</option>
              <option value="muscle-gain">Spieropbouw</option>
              <option value="fitness">Algemene conditie</option>
              <option value="strength">Krachttraining</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-humble-primary text-white py-3 rounded-lg font-semibold hover:bg-humble-accent transition-colors"
          >
            Plan je gratis intake
          </button>

          <p className="text-xs text-center text-humble-text mt-4">
            Door dit formulier in te dienen ga je akkoord met het ontvangen van e-mails over je training. Je kunt je op elk moment uitschrijven.
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}