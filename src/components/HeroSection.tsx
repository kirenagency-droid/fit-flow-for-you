import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";
const HeroSection = () => {
  const benefits = ["Accès illimité à toutes nos salles Basic-Fit 24h/24 7j/7", "Un sac de sport offert !", "Commencez maintenant et payez votre première période payante après vos semaines offertes !", "Équipements de dernière génération", "Coaching personnalisé inclus", "Application mobile premium"];
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Salle de sport moderne" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Offre Limitée
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Accès Basic Fit
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  à 2€/mois
                </span>
              </h1>
              
              
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-white text-lg">{benefit}</span>
                </div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="cta" size="lg" className="text-xl px-8 py-6 h-auto animate-glow-pulse flex items-center gap-2" onClick={() => window.location.href = "/confirmation"}>
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                S'abonner maintenant
              </Button>
              <Button variant="dark" size="lg" className="text-lg px-8 py-4 h-auto" asChild>
                
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mx-[9px] px-[4px] my-0 py-0"></div>
                <span>1,247 membres connectés</span>
              </div>
              <div>      ⭐ 4.9/5 </div>
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="lg:justify-self-end">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-intense animate-float">
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Accès Basic Fit</h3>
                  <p className="text-gray-300">Toutes les salles • Économie de 95%</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center">
                    <span className="text-6xl font-black text-white">2</span>
                    <span className="text-3xl font-bold text-primary">€</span>
                    <span className="text-gray-300 ml-2">/mois</span>
                  </div>
                  <p className="text-sm text-gray-400">Pendant 9 mois • Puis 40€/mois • Économisez 342€</p>
                </div>

                <Button variant="hero" size="lg" className="w-full text-lg py-4 h-auto flex items-center justify-center gap-2" onClick={() => window.location.href = "/confirmation"}>
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  S'abonner maintenant
                </Button>
                
                <p className="text-xs text-gray-400">*Résiliation possible à tout moment*</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;