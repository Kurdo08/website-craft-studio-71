import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-lg transition-shadow duration-300 border-border/50"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Text */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-heading font-semibold text-foreground">
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
      </div>
    </section>
  );
};

export default TestimonialsSection;