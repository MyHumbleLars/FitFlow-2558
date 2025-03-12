import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="My Humble" className="h-8" />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/trainingen"
              className={`text-black hover:text-humble-primary ${
                location.pathname === '/trainingen' ? 'text-humble-primary' : ''
              }`}
            >
              Trainingen
            </Link>
            <Link
              to="/coaching"
              className={`text-black hover:text-humble-primary ${
                location.pathname === '/coaching' ? 'text-humble-primary' : ''
              }`}
            >
              Coaching
            </Link>
            <Link
              to="/over-mij"
              className={`text-black hover:text-humble-primary ${
                location.pathname === '/over-mij' ? 'text-humble-primary' : ''
              }`}
            >
              Over mij
            </Link>
            <button className="bg-humble-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
              Gratis Intake
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}