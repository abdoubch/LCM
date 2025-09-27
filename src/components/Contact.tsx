import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact & Galerie
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez nos informations de contact et notre galerie d'images
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Informations de contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Adresse</div>
                  <div className="text-gray-600">54 bd Mohamed Belouizdad<br />Belcourt,Alger,Algérie</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Téléphone</div>
                  <div className="text-gray-600">+213 5 59 31 89 15</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">doun1427@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Horaires d'ouverture</div>
                  <div className="text-gray-600">
                    Lun-Ven: 9h00 - 19h00<br />
                    Sam: 9h00 - 18h00<br />
                    Dim: Fermé
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Galerie d'images</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="aspect-square bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">Image 1</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">Image 2</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">Image 3</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">Image 4</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">Image 5</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">Image 6</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}