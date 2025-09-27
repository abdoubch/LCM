import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="bg-gradient-to-br from-emerald-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">Plus de 500 clients satisfaits</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Votre vision,
              <span className="text-emerald-600 block">notre passion</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez notre gamme complète de lunettes de vue, lunettes de soleil et 
              lunettes connectées. Des traitements de verres personnalisés pour une vision parfaite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center group">
                Prendre rendez-vous
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button> */}
              {/* <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors">
                Découvrir nos produits
              </button> */}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-emerald-100 rounded-3xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/5779096/pexels-photo-5779096.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Opticien professionnel"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-emerald-600">25+</div>
              <div className="text-gray-600">Ans d'expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}