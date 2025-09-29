import { Shield, CreditCard, Clock, Award } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Paiement 100% sécurisé",
      description: "SSL & cryptage bancaire"
    },
    {
      icon: CreditCard,
      title: "Sans engagement",
      description: "Résiliation en 1 clic"
    },
    {
      icon: Clock,
      title: "7 jours gratuits",
      description: "Satisfait ou remboursé"
    },
    {
      icon: Award,
      title: "Certifié qualité",
      description: "Standards européens"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
      {badges.map((badge, index) => (
        <div key={index} className="flex flex-col items-center text-center space-y-2 p-4 bg-card/50 rounded-lg border border-border/50">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <badge.icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="font-semibold text-foreground text-sm">{badge.title}</div>
            <div className="text-xs text-muted-foreground">{badge.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;