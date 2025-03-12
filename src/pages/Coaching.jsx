import { motion } from 'framer-motion';
import { FaDumbbell, FaApple, FaBrain, FaHeart } from 'react-icons/fa';

const coachingAreas = [
  {
    icon: <FaDumbbell className="w-8 h-8" />,
    title: "Fitness Coaching",
    description: "Persoonlijke begeleiding bij het behalen van je fitnessdoelen, of je nu wilt afvallen, spieren wilt opbouwen of je conditie wilt verbeteren."
  },
  {
    icon: <FaApple className="w-8 h-8" />,
    title: "Voedingsadvies",
    description: "Praktische voedingstips en een persoonlijk voedingsplan dat past bij jouw levensstijl en doelen."
  },
  {
    icon: <FaBrain className="w-8 h-8" />,
    title: "Mindset Coaching",
    description: "Werk aan je mentale kracht en ontwikkel een sterke mindset die je helpt je doelen te bereiken."
  },
  {
    icon: <FaHeart className="w-8 h-8" />,
    title: "Lifestyle Coaching",
    description: "Vind de perfecte balans tussen training, voeding en rust voor een duurzame gezonde levensstijl."
  }
];

export default function Coaching() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-humble-dark mb-4">Coaching</h1>
          <p className="text-xl text-humble-text max-w-2xl mx-auto">
            Bij My Humble kijken we verder dan alleen training. We focussen op alle aspecten die belangrijk zijn voor een gezonde levensstijl.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {coachingAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-humble-primary mb-4">{area.icon}</div>
              <h3 className="text-2xl font-bold text-humble-dark mb-3">{area.title}</h3>
              <p className="text-humble-text">{area.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-humble-primary text-white px-8 py-3 rounded-full hover:bg-humble-accent transition-colors">
            Plan een gratis intake gesprek
          </button>
        </motion.div>
      </div>
    </div>
  );
}