import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Clock } from "lucide-react";
const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);
  const handleClose = () => {
    setIsVisible(false);
  };
  const handleSubscribe = () => {
    window.open("https://flownetwork.g2afse.com/click?pid=4784&offer_id=10232", "_blank");
    setIsVisible(false);
  };
  if (!isVisible) return null;
  return <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl p-8 max-w-md w-full shadow-2xl border border-border relative animate-scale-in">
        <button onClick={handleClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X className="h-6 w-6" />
        </button>

        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-[100px] py-0">
            <Clock className="h-8 w-8 text-white" />
          </div>

          

          <div className="bg-gradient-primary/10 rounded-xl p-6 space-y-4">
            <div className="space-y-1">
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-black text-foreground">2</span>
                <span className="text-2xl font-bold text-primary">€</span>
                <span className="text-muted-foreground ml-2">/mois</span>
              </div>
              <p className="text-sm text-muted-foreground">Seulement 2 €/mois pendant 9 mois, puis 34,99€ ensuite</p>
            </div>

            <Button variant="cta" size="lg" onClick={handleSubscribe} className="w-full text-lg py-6 h-auto mx-0">Profiter de l'offre </Button>

            <p className="text-xs text-muted-foreground">
              Sans engagement • Résiliation possible à tout moment
            </p>
          </div>

          
        </div>
      </div>
    </div>;
};
export default ExitIntentPopup;