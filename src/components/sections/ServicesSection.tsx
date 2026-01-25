import { Link } from 'react-router-dom';
import { Globe, ShoppingCart, Search, Wrench, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const ServicesSection = () => {
  const { t } = useLanguage();
  const { ref, controls } = useScrollAnimation();

  const services = [
    { icon: Globe, title: t.services.webdesign.title, description: t.services.webdesign.description },
    { icon: ShoppingCart, title: t.services.webshop.title, description: t.services.webshop.description },
    { icon: Search, title: t.services.seo.title, description: t.services.seo.description },
    { icon: Wrench, title: t.services.maintenance.title, description: t.services.maintenance.description },
  ];

  return (
    <section className="section-padding relative overflow-hidden section-divider">
      <motion.div 
        ref={ref}
        className="container mx-auto container-padding"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        {/* Header */}
        <motion.div className="section-header" variants={fadeInUp}>
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
            {t.services.title}
          </span>
          <h2 className="section-title">{t.services.subtitle}</h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="group bg-card hover:bg-card transition-all duration-500 card-shadow hover:card-shadow-xl border-border/50 hover:border-primary/30 h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-navy rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="text-center mt-10" variants={fadeInUp}>
          <Button asChild size="lg" className="bg-gradient-navy hover:opacity-90 text-white shadow-lg h-12 px-6">
            <Link to="/services">
              {t.common.learnMore}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
