import { Star, Quote } from "lucide-react";
const TestimonialsSection = () => {
  const testimonials = [{
    name: "Marie D.",
    age: "32 ans",
    rating: 5,
    text: "Incroyable ! Pour 2€/mois au lieu de 40€, j'ai accès à toutes les salles Basic Fit. J'économise 456€ par an !",
    achievement: "Économie : 456€/an"
  }, {
    name: "Thomas M.",
    age: "28 ans",
    rating: 5,
    text: "J'étais sceptique au début, mais ça marche vraiment ! 2€ au lieu de 40€, c'est un deal incroyable.",
    achievement: "Économie : 95%"
  }, {
    name: "Sophie B.",
    age: "45 ans",
    rating: 5,
    text: "Enfin un abonnement fitness abordable ! Accès à toutes les salles Basic Fit pour le prix d'un café.",
    achievement: "Accès illimité 2€"
  }];
  return <section className="py-20 bg-accent/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4" />
            <span className="font-semibold">4.9/5 </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
            Ils économisent déjà des centaines d'euros
          </h2>
          <p className="text-xl text-muted-foreground">
            Plus de 1,247 membres économisent avec notre offre Basic Fit
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-card rounded-2xl p-6 shadow-card border border-border relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12 text-primary" />
              </div>
              
              <div className="relative space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.split(' ')[0][0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground leading-relaxed">"{testimonial.text}"</p>
                
                <div className="bg-gradient-primary/10 rounded-lg p-3 text-center">
                  <span className="font-bold text-primary">{testimonial.achievement}</span>
                </div>
              </div>
            </div>)}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-primary">1,247</div>
            <div className="text-muted-foreground">Membres actifs</div>
          </div>
          <div>
            <div className="text-3xl font-black text-primary">4.9/5</div>
            <div className="text-muted-foreground">Note Globale</div>
          </div>
          <div>
            <div className="text-3xl font-black text-primary">95%</div>
            <div className="text-muted-foreground">Recommandent</div>
          </div>
          <div>
            <div className="text-3xl font-black text-primary">24/7</div>
            <div className="text-muted-foreground">Support client</div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;