import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";
const Header = () => {
  return <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-black text-white">FitClub</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-white hover:text-primary transition-smooth">
              Accueil
            </a>
            <a href="#tarifs" className="text-white hover:text-primary transition-smooth">
              Tarifs
            </a>
            <a href="#avantages" className="text-white hover:text-primary transition-smooth">
              Avantages
            </a>
            <a href="#contact" className="text-white hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-primary hidden sm:inline-flex">
              Connexion
            </Button>
            <Button variant="hero" size="sm" onClick={() => window.open("https://flownetwork.g2afse.com/click?pid=4784&offer_id=10232", "_blank")}>
              S'abonner
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;