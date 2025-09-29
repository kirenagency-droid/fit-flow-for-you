import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const HeroSection = () => {
  const benefits = [
    "Accès illimité 24h/24 7j/7",
    "Équipements de dernière génération", 
    "Coaching personnalisé inclus",
    "Application mobile premium"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Salle de sport moderne" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                  Offre Limitée
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Abonnement
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Ultimate
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Transformez votre corps avec l'abonnement le plus complet du marché. 
                Accès premium à tous nos équipements et services.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-white text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                variant="cta" 
                size="lg"
                className="text-xl px-8 py-6 h-auto animate-glow-pulse"
                onClick={() => window.open("https://flownetwork.g2afse.com/click?pid=4784&offer_id=10232", "_blank")}
              >
                🎁 Essai gratuit 7 jours
              </Button>
              <Button 
                variant="dark" 
                size="lg"
                className="text-lg px-8 py-4 h-auto"
                asChild
              >
                <a href="/en-savoir-plus">En savoir plus</a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>1,247 membres connectés</span>
              </div>
              <div>⭐ 4.9/5 (Google Reviews)</div>
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="lg:justify-self-end">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-intense animate-float">
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Abonnement Ultimate</h3>
                  <p className="text-gray-300">✅ 7 jours gratuits • Tout inclus</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center">
                    <span className="text-6xl font-black text-white">5</span>
                    <span className="text-3xl font-bold text-primary">€</span>
                    <span className="text-gray-300 ml-2">/mois</span>
                  </div>
                  <p className="text-sm text-gray-400">7 jours gratuits puis 5€/mois</p>
                </div>

                <Button 
                  variant="hero" 
                  size="lg"
                  className="w-full text-lg py-4 h-auto"
                  onClick={() => window.open("https://flownetwork.g2afse.com/click?pid=4784&offer_id=10232", "_blank")}
                >
                  🚀 Commencer l&apos;essai gratuit
                </Button>
                
                <p className="text-xs text-gray-400">
                  Résiliation possible à tout moment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;