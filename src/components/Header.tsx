import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="OptiVision Logo" className="w-20" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-emerald-600 transition-colors">Accueil</a>
            <a href="#produits" className="text-gray-700 hover:text-emerald-600 transition-colors">Produits</a>
            <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
            <a href="#apropos" className="text-gray-700 hover:text-emerald-600 transition-colors">À propos</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
          </nav>

          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#accueil" className="text-gray-700 hover:text-emerald-600 transition-colors">Accueil</a>
              <a href="#produits" className="text-gray-700 hover:text-emerald-600 transition-colors">Produits</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#apropos" className="text-gray-700 hover:text-emerald-600 transition-colors">À propos</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}