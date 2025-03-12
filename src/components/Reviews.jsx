import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: "Lisa van der Berg",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    text: "Door de persoonlijke aanpak van Manon heb ik eindelijk mijn fitnessdoelen kunnen bereiken. Ze begrijpt precies wat ik nodig heb en past de trainingen daarop aan.",
    rating: 5
  },
  {
    name: "Thomas Jansen",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    text: "De combinatie van training en voedingsadvies heeft voor mij het verschil gemaakt. Manon's holistische aanpak zorgt ervoor dat je niet alleen fysiek, maar ook mentaal sterker wordt.",
    rating: 5
  },
  {
    name: "Emma de Vries",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    text: "Bij My Humble voel je je direct op je gemak. Manon geeft je het vertrouwen dat je nodig hebt om je doelen te bereiken. Haar expertise en betrokkenheid zijn geweldig.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-humble-dark mb-4">
            Wat klanten zeggen
          </h2>
          <p className="text-xl text-humble-text">
            Ervaringen van mensen die hun doelen hebben bereikt met My Humble
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-humble-light p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-humble-dark">{review.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-humble-text italic">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}