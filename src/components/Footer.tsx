import { Eye, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
             
              <span className="text-2xl font-bold">LCM</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Votre opticien de confiance depuis plus de 15 ans. 
              Nous vous accompagnons pour une vision parfaite et un style unique.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#produits" className="text-gray-400 hover:text-white transition-colors">Produits</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#apropos" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>54 bd Mohamed Belouizdad</li>
              <li>Belcourt,Alger,Algérie</li>
              <li>+213 5 59 31 89 15</li>
              <li>doun1427@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 LCM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}