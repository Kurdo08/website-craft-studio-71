import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Sarah de Jong',
      company: 'TechFlow Solutions',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      text: 'Fantastische samenwerking! Het team begreep precies wat we nodig hadden en leverde een website die onze verwachtingen overtrof. Onze online leads zijn met 200% gestegen.',
      rating: 5,
    },
    {
      name: 'Mark van der Berg',
      company: 'ModaStyle Boutique',
      role: 'Eigenaar',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
      text: 'De webshop is precies wat we zochten. Professioneel, snel en gebruiksvriendelijk. De klantenservice is ook top - altijd bereikbaar voor vragen.',
      rating: 5,
    },
    {
      name: 'Lisa Bakker',
      company: 'GreenLeaf Catering',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
      text: 'Van eerste contact tot oplevering, alles verliep soepel. De website past perfect bij ons merk en we krijgen veel positieve reacties van klanten.',
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-gradient-luxury relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 bg-noise mix-blend-overlay" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container mx-auto container-padding relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 border-border/50 hover:border-primary/30 hover:shadow-2xl group"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground leading-relaxed mb-8 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button asChild size="lg" variant="outline" className="h-14 px-8 border-primary/30 hover:bg-primary/5">
            <Link to="/testimonials">
              {t.testimonials.readMore}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;