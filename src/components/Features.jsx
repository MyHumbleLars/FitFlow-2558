import { motion } from 'framer-motion';
import { FaDumbbell, FaHeartbeat, FaApple, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: <FaDumbbell className="h-6 w-6" />,
    title: "Custom Workouts",
    description: "Get personalized workout plans tailored to your goals and fitness level"
  },
  {
    icon: <FaHeartbeat className="h-6 w-6" />,
    title: "Progress Tracking",
    description: "Monitor your improvements with detailed analytics and insights"
  },
  {
    icon: <FaApple className="h-6 w-6" />,
    title: "Nutrition Plans",
    description: "Receive customized meal plans and nutrition advice from experts"
  },
  {
    icon: <FaUsers className="h-6 w-6" />,
    title: "Community Support",
    description: "Join a community of like-minded individuals on their fitness journey"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-humble-dark mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-humble-text">
            Powerful features to help you achieve your fitness goals
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-humble-light p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-humble-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-humble-dark mb-2">{feature.title}</h3>
              <p className="text-humble-text">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}