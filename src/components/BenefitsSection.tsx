import { Clock, Smartphone, Users, Zap, Trophy, Heart } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Accès 24h/24 7j/7",
      description: "Entraînez-vous quand vous le souhaitez, même pendant les jours fériés"
    },
    {
      icon: Smartphone,
      title: "App mobile premium",
      description: "Programmes personnalisés, suivi de progression et coaching virtuel"
    },
    {
      icon: Users,
      title: "Communauté active", 
      description: "Rejoignez une communauté motivante de plus de 50,000 membres"
    },
    {
      icon: Zap,
      title: "Équipements premium",
      description: "Machines de dernière génération entretenues quotidiennement"
    },
    {
      icon: Trophy,
      title: "Coaching inclus",
      description: "Programmes d'entraînement conçus par des professionnels certifiés"
    },
    {
      icon: Heart,
      title: "Suivi santé",
      description: "Monitoring cardiaque et analyses de performance avancées"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground">
            Pourquoi choisir 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Ultimate</span> ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un abonnement complet qui vous donne accès à tous les outils nécessaires 
            pour atteindre vos objectifs fitness, à un prix imbattable.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 border border-transparent hover:border-primary/20"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-primary rounded-2xl p-8 shadow-intense">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Prêt à transformer votre corps ?
              </h3>
              <p className="text-white/90">
                Rejoignez-nous dès aujourd'hui et commencez votre transformation
              </p>
              <div className="pt-2">
                <button className="bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-white/90 transition-smooth hover:scale-105">
                  Commencer maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;