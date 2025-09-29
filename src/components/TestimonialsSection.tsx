import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dupont",
      age: "32 ans",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b665?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Incroyable ! J'ai perdu 8kg en 3 mois. L'app mobile est parfaite pour suivre mes progrès.",
      achievement: "- 8kg en 3 mois"
    },
    {
      name: "Thomas Martin",
      age: "28 ans", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Accès 24h/24 génial pour mes horaires de travail décalés. Équipements toujours en parfait état.",
      achievement: "+15kg de muscle"
    },
    {
      name: "Sophie Bernard",
      age: "45 ans",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", 
      rating: 5,
      text: "Le coaching personnalisé a changé ma vie. Plus motivée que jamais à 45 ans !",
      achievement: "Forme olympique"
    }
  ];

  return (
    <section className="py-20 bg-accent/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4" />
            <span className="font-semibold">4.9/5 sur Google</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
            Ils ont transformé leur corps
          </h2>
          <p className="text-xl text-muted-foreground">
            Plus de 1,247 membres actifs nous font confiance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-card border border-border relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12 text-primary" />
              </div>
              
              <div className="relative space-y-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground leading-relaxed">"{testimonial.text}"</p>
                
                <div className="bg-gradient-primary/10 rounded-lg p-3 text-center">
                  <span className="font-bold text-primary">{testimonial.achievement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-primary">1,247</div>
            <div className="text-muted-foreground">Membres actifs</div>
          </div>
          <div>
            <div className="text-3xl font-black text-primary">4.9/5</div>
            <div className="text-muted-foreground">Note Google</div>
          </div>
          <div>
            <div className="text-3xl font-black text-primary">89%</div>
            <div className="text-muted-foreground">Recommandent</div>
          </div>
          <div>
            <div className="text-3xl font-black text-primary">24/7</div>
            <div className="text-muted-foreground">Support client</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;