import { Link } from 'react-router-dom';
import { Globe, ShoppingCart, Search, Wrench, ArrowRight, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t.services.webdesign.title,
      description: t.services.webdesign.description,
      features: t.services.webdesign.features,
    },
    {
      icon: ShoppingCart,
      title: t.services.webshop.title,
      description: t.services.webshop.description,
      features: t.services.webshop.features,
    },
    {
      icon: Search,
      title: t.services.seo.title,
      description: t.services.seo.description,
      features: t.services.seo.features,
    },
    {
      icon: Wrench,
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
      features: t.services.maintenance.features,
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t.services.title}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t.services.subtitle}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:shadow-2xl border-border/50 hover:border-primary/30 overflow-hidden"
            >
              <CardContent className="p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features list */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button variant="ghost" asChild className="group/btn p-0 h-auto text-primary hover:text-primary hover:bg-transparent">
                      <Link to="/services" className="flex items-center gap-2">
                        {t.services.cta}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-gradient-gold hover:opacity-90 text-white shadow-lg h-14 px-8">
            <Link to="/services">
              {t.common.viewAll}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;