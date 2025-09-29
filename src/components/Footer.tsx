import { Dumbbell, Instagram, Facebook, Twitter } from "lucide-react";
const Footer = () => {
  return <footer className="bg-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-black">FitUltimate</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              La solution fitness complète qui transforme votre routine d'entraînement. 
              Rejoignez notre communauté de passionnés.
            </p>
            <div className="flex space-x-4">
              
              
              
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Services</h4>
            <div className="space-y-3 text-white/80">
              <a href="#" className="block hover:text-primary transition-smooth">Abonnement Ultimate</a>
              <a href="#" className="block hover:text-primary transition-smooth">Coaching personnel</a>
              <a href="#" className="block hover:text-primary transition-smooth">Programmes nutrition</a>
              <a href="#" className="block hover:text-primary transition-smooth">Cours collectifs</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Support</h4>
            <div className="space-y-3 text-white/80">
              <a href="#" className="block hover:text-primary transition-smooth">Centre d'aide</a>
              <a href="#" className="block hover:text-primary transition-smooth">Contact</a>
              <a href="#" className="block hover:text-primary transition-smooth">FAQ</a>
              <a href="#" className="block hover:text-primary transition-smooth">Gérer mon abonnement</a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Légal</h4>
            <div className="space-y-3 text-white/80">
              <a href="#" className="block hover:text-primary transition-smooth">Conditions d'utilisation</a>
              <a href="#" className="block hover:text-primary transition-smooth">Politique de confidentialité</a>
              <a href="#" className="block hover:text-primary transition-smooth">Mentions légales</a>
              <a href="#" className="block hover:text-primary transition-smooth">Cookies</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">© 2024 FitClub. Tous droits réservés.</p>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>Paiement sécurisé</span>
              <span>•</span>
              <span>Support 24/7</span>
              <span>•</span>
              <span>Résiliation facile</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;