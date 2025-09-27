import { Users, Clock, MapPin, Phone } from 'lucide-react';

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              À Propos d'LCM
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Depuis plus de 25 ans, nous sommes votre partenaire de confiance pour tous vos besoins optiques. 
              Notre équipe d'opticiens qualifiés met son expertise à votre service pour vous offrir 
              une vision parfaite et un style unique.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nous croyons que chaque personne mérite une vision claire et des lunettes qui reflètent 
              sa personnalité. C'est pourquoi nous proposons un large choix de montures et des 
              technologies de pointe.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-emerald-600" />
                <div>
                  <div className="font-semibold text-gray-900">500+</div>
                  <div className="text-gray-600">Clients satisfaits</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-8 w-8 text-emerald-600" />
                <div>
                  <div className="font-semibold text-gray-900">25+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/6749729/pexels-photo-6749729.jpeg" 
              alt="Notre magasin"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <div className="absolute inset-0 bg-emerald-600 bg-opacity-10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}