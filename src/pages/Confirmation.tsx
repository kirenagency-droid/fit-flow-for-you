import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Clock, Shield, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
const Confirmation = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const handleConfirmSubscription = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.open("https://flownetwork.g2afse.com/click?pid=4784&offer_id=10232", "_blank");
      setIsRedirecting(false);
    }, 2000);
  };
  const features = ["Accès illimité à toutes nos salles Basic-Fit 24h/24 7j/7", "Un sac de sport offert !", "Commencez maintenant et payez votre première période payante après vos semaines offertes !", "Cours collectifs en streaming", "Programme d'entraînement personnalisé", "Suivi de progression avancé", "Support client prioritaire", "Application mobile complète", "Vestiaires premium"];
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8 md:py-20">
        <div className="max-w-4xl mx-auto md:px-6 px-0 my-[16px]">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 px-4">Confirmez votre abonnement </h1>
            
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
            {/* Détails de l'offre */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-card border border-border rounded-2xl p-4 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Récapitulatif de votre offre</h2>
                
                <div className="space-y-4 md:space-y-6">
                  {/* Prix */}
                  <div className="bg-gradient-primary/10 rounded-xl p-4 md:p-6">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl md:text-5xl font-black text-foreground">2</span>
                      <span className="text-xl md:text-2xl font-bold text-primary">€</span>
                      <span className="text-muted-foreground ml-2">/mois</span>
                    </div>
                    <p className="text-center text-sm text-muted-foreground">Pendant 12 mois • Puis 34,99€/mois • Économisez 342€</p>
                  </div>

                  {/* Avantages */}
                  <div>
                    <h3 className="font-bold text-foreground mb-3 md:mb-4">Tout inclus :</h3>
                    <div className="space-y-2 md:space-y-3">
                      {features.map((feature, index) => <div key={index} className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-foreground text-sm md:text-base">{feature}</span>
                        </div>)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Garanties */}
              <div className="bg-card border border-border rounded-2xl p-4 md:p-6">
                <h3 className="font-bold text-foreground mb-3 md:mb-4 flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  Vos garanties
                </h3>
                <div className="space-y-2 md:space-y-3 text-sm text-muted-foreground">
                  <p>✓ Activé immédiatement après paiement</p>
                  <p>✓ Identifiants transmis par e-mail</p>
                  <p>✓ Accès à toutes les salles Basic-Fit</p>
                  <p>✓ Sans engagement de durée</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-4 md:p-8 px-[2px]">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 text-center">
                  Prêt à commencer ?
                </h2>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center justify-center space-x-1 mb-3 md:mb-4">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                    <span className="ml-2 text-sm text-muted-foreground">4.8/5 </span>
                  </div>

                  <Button variant="cta" size="lg" className="w-full text-base md:text-lg py-4 md:py-6 h-auto" onClick={handleConfirmSubscription} disabled={isRedirecting}>
                    {isRedirecting ? <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Redirection en cours...
                      </> : <>
                        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        Confirmer mon abonnement à 2€
                      </>}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground px-2">En cliquant sur ce bouton, vous serez redirigé vers la page de paiement sécurisée de notre partenaire.</p>

                  <Link to="/" className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors text-sm">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Retour à l'accueil
                  </Link>
                </div>
              </div>

              <TrustBadges />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Confirmation;