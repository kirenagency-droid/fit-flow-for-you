import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
const PricingSection = () => {
  const features = ["Accès illimité aux équipements", "Cours collectifs en streaming", "Programme d'entraînement personnalisé", "Suivi de progression avancé", "Support client prioritaire", "Application mobile complète", "Accès à tous les centres", "Vestiaires premium"];
  return <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              
            </div>

            <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 shadow-card relative overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
              
              <div className="relative space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">Accès Basic Fit</h3>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-6xl font-black text-foreground">2</span>
                      <span className="text-3xl font-bold text-primary">€</span>
                      <span className="text-muted-foreground ml-2 text-xl">/mois</span>
                    </div>
                    <p className="text-muted-foreground">Au lieu de 40€/mois • Économisez 456€ par an</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-bold text-foreground text-lg">Tout inclus :</h4>
                  <div className="grid gap-3">
                    {features.map((feature, index) => <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>)}
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <Button variant="cta" size="lg" className="w-full text-lg py-6 h-auto flex items-center justify-center gap-2" onClick={() => window.open("https://flownetwork.g2afse.com/click?pid=4784&offer_id=10232", "_blank")}>
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full px-0 my-0 py-0 mx-[4px]"></div>
                    </div>
                    S'abonner maintenant
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Activé immédiatement • Accès à toutes les salles Basic Fit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        
      </div>
    </section>;
};
export default PricingSection;