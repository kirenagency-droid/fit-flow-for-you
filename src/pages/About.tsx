import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Trophy, Heart, Shield } from "lucide-react";
import Header from "@/components/Header";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";

const About = () => {
  const redirectToSubscription = () => {
    window.open("https://flownetwork.g2afse.com/click?pid=4784&offer_id=10232", "_blank");
  };

  const features = [
    {
      icon: Clock,
      title: "Accès 24h/24 7j/7",
      description: "Entraînez-vous quand vous voulez, où vous voulez. Nos salles sont ouvertes en permanence pour s'adapter à votre emploi du temps."
    },
    {
      icon: Users,
      title: "Coaching personnalisé",
      description: "Bénéficiez d'un accompagnement sur mesure avec nos coachs certifiés. Programme d'entraînement adapté à vos objectifs."
    },
    {
      icon: Trophy,
      title: "Équipements premium",
      description: "Machines de dernière génération, poids libres professionnels et espaces dédiés à tous types d'entraînements."
    },
    {
      icon: Heart,
      title: "Suivi de progression",
      description: "Application mobile avec suivi détaillé de vos performances, statistiques et conseils nutritionnels personnalisés."
    },
    {
      icon: Shield,
      title: "Environnement sécurisé",
      description: "Salles surveillées, équipements régulièrement entretenus et protocoles d'hygiène stricts pour votre sécurité."
    },
    {
      icon: Users,
      title: "Communauté active",
      description: "Rejoignez une communauté motivante avec événements, challenges et cours collectifs pour rester motivé."
    }
  ];

  const benefits = [
    "Plus de 500 équipements disponibles",
    "Cours collectifs illimités",
    "Vestiaires premium avec casiers sécurisés",
    "Parking gratuit",
    "WiFi haut débit dans toute la salle",
    "Distributeurs de boissons et collations",
    "Espace détente et récupération",
    "Support client 7j/7"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Découvrez l'abonnement
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Ultimate
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              L'abonnement le plus complet du marché fitness. Tout ce dont vous avez besoin 
              pour atteindre vos objectifs, à un prix révolutionnaire.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="cta" 
                size="lg"
                className="text-xl px-8 py-6 h-auto animate-glow-pulse"
                onClick={redirectToSubscription}
              >
                🎁 Essai gratuit 7 jours
              </Button>
            </div>

            {/* Trust Badges */}
            <TrustBadges />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
                Pourquoi choisir FitUltimate ?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Une expérience fitness complète pensée pour maximiser vos résultats
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-card border border-border">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-accent/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-8">
                  Tout inclus dans votre abonnement
                </h2>
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-foreground text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <div className="text-center space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Abonnement Ultimate</h3>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-6xl font-black text-foreground">5</span>
                      <span className="text-3xl font-bold text-primary">€</span>
                      <span className="text-muted-foreground ml-2 text-xl">/mois</span>
                    </div>
                    <p className="text-muted-foreground">🎁 7 jours gratuits puis 5€/mois • Sans engagement</p>
                  </div>
                  <Button 
                    variant="cta" 
                    size="lg"
                    className="w-full text-lg py-6 h-auto animate-glow-pulse"
                    onClick={redirectToSubscription}
                  >
                    🚀 Commencer l&apos;essai gratuit
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    ✅ 7 jours 100% gratuits • Activé immédiatement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
                Questions fréquentes
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Puis-je annuler mon abonnement à tout moment ?
                </h3>
                <p className="text-muted-foreground">
                  Oui, absolument ! Votre abonnement est sans engagement. Vous pouvez l'annuler 
                  à tout moment directement depuis votre espace membre ou en nous contactant.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Y a-t-il des frais cachés ?
                </h3>
                <p className="text-muted-foreground">
                  Non, aucun frais caché ! Le prix affiché de 5€/mois est tout inclus. 
                  Aucun frais d'inscription, aucun coût supplémentaire.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Comment fonctionne la période d'essai gratuite ?
                </h3>
                <p className="text-muted-foreground">
                  Profitez de 7 jours gratuits pour tester tous nos services. Si vous n'êtes pas 
                  satisfait, annulez avant la fin de la période d'essai sans aucun frais.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;