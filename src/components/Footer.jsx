import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <p>Email: info@myhumble.nl</p>
              <p>Tel: +31 6 12345678</p>
              <p>Locatie: Zutphen, Nederland</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Volg Ons</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/myhumble" target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-[#2872FA] transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://facebook.com/myhumble" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-[#2872FA] transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://wa.me/+31612345678" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-[#2872FA] transition-colors">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Snelle Links</h3>
            <div className="space-y-2">
              <button className="block text-white hover:text-[#2872FA] transition-colors">
                Trainingen
              </button>
              <button className="block text-white hover:text-[#2872FA] transition-colors">
                Coaching
              </button>
              <button className="block text-white hover:text-[#2872FA] transition-colors">
                Over mij
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© 2024 My Humble. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}