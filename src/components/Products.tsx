import { Glasses, Sun, Smartphone, Eye } from 'lucide-react';

const products = [
  {
    icon: Glasses,
    title: "Lunettes de Vue",
    description: "Collection complète de montures tendance avec verres correcteurs personnalisés selon votre prescription.",
    features: ["Verres anti-reflets", "Traitement anti-rayures", "Verres progressifs", "Montures design"],
    image: "https://images.pexels.com/photos/4226875/pexels-photo-4226875.jpeg"
  },
  {
    icon: Sun,
    title: "Lunettes de Soleil",
    description: "Protection UV maximale avec style. Découvrez nos collections de marques prestigieuses.",
    features: ["Protection UV 100%", "Verres polarisés", "Montures premium", "Étuis inclus"],
    image: "https://media.istockphoto.com/id/1417602445/fr/photo/lunettes-de-soleil-de-couleur-dor%C3%A9e-brillante-en-plastique-transparent-lunettes-vue-de-dessus.jpg?b=1&s=612x612&w=0&k=20&c=suJSqphi2wwCJiDiqBquw-I2B-WFUrxxSrb8VeFol8c="
  },
  {
    icon: Smartphone,
    title: "Lunettes Connectées",
    description: "L'avenir de la vision avec nos lunettes intelligentes intégrant les dernières technologies.",
    features: ["Réalité augmentée", "Appels mains libres", "Navigation GPS", "Contrôle vocal"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRwzRrdzUXFhr35I--vc9rXyTK57xhMvbqxjqp7IahzrY7nJnTPGhEndjSaoE1c0UXxnlsA0CXMIXSFLxBWARXcMmfHl7sBzHf-sh3rLV"
  },
  {
    icon: Eye,
    title: "Conseils Visuels",
    description: "Conseils visuels complets réalisés par nos optométristes qualifiés.",
    features: ["Examen complet", "Dépistage maladies", "Conseils personnalisés", "Suivi régulier"],
    image: "https://images.pexels.com/photos/34007056/pexels-photo-34007056.jpeg"
  }
];

export default function Products() {
  return (
    <section id="produits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Produits & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète pour répondre à tous vos besoins visuels, 
            des lunettes classiques aux technologies les plus avancées.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 p-3 rounded-full">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                    En savoir plus →
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}