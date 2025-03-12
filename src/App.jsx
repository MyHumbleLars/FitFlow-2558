import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PersonalSection from './components/PersonalSection';
import Trainingen from './pages/Trainingen';
import Coaching from './pages/Coaching';
import Contact from './pages/Contact';
import LeadForm from './components/LeadForm';
import './App.css';

function App() {
  const [showLeadForm, setShowLeadForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLeadForm(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/over-mij" element={<PersonalSection />} />
            <Route path="/trainingen" element={<Trainingen />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AnimatePresence>
          {showLeadForm && (
            <LeadForm onClose={() => setShowLeadForm(false)} />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;