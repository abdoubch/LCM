import { Shield, Zap, Wrench, Award } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: "Traitements de Verres",
    description: "Protection optimale et confort visuel avec nos traitements spécialisés",
    details: ["Anti-reflets multicouches", "Anti-rayures renforcé", "Hydrophobe et oléophobe", "Filtre lumière bleue"]
  },
  {
    icon: Zap,
    title: "Service Express",
    description: "Réparations et ajustements rapides pour votre confort quotidien",
    details: ["Réparations urgentes", "Ajustements gratuits", "Nettoyage professionnel", "Conseil personnalisé"]
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Entretien professionnel pour prolonger la durée de vie de vos lunettes",
    details: ["Révision complète", "Changement de plaquettes", "Resserrage visserie", "Contrôle monture"]
  },
  {
    icon: Award,
    title: "Garantie Premium",
    description: "Tranquillité d'esprit avec notre garantie étendue et notre service après-vente",
    details: ["Garantie 1 mois","SAV dédié"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Services Professionnels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un service complet et personnalisé pour vous accompagner dans tous vos besoins optiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group text-center">
                <div className="bg-emerald-50 w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                  <Icon className="h-10 w-10 text-emerald-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-1 text-sm text-gray-500">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}