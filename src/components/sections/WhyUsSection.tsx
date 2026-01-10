import { Link } from 'react-router-dom';
import { Award, Palette, Headphones, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/hooks/useScrollAnimation';

const WhyUsSection = () => {
  const { t } = useLanguage();
  const { ref, controls } = useScrollAnimation();

  const features = [
    { icon: Award, title: t.about.experience.title },
    { icon: Palette, title: t.about.custom.title },
    { icon: Headphones, title: t.about.support.title },
    { icon: TrendingUp, title: t.about.results.title },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div 
        ref={ref}
        className="container mx-auto container-padding"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div variants={slideInLeft}>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
              {t.about.title}
            </span>
            <h2 className="section-title text-left mb-4">{t.about.subtitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Wij helpen ambitieuze bedrijven hun digitale aanwezigheid te transformeren met vakmanschap en verfijning.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-sm text-foreground">{feature.title}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-gradient-navy hover:opacity-90 text-white shadow-lg h-12 px-6">
              <Link to="/about">
                {t.common.learnMore}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats Card */}
          <motion.div className="relative" variants={slideInRight}>
            <div className="bg-card rounded-2xl p-8 border border-primary/10 shadow-xl glow-navy">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '150+', label: 'Projecten' },
                  { value: '98%', label: 'Tevreden' },
                  { value: '5+', label: 'Jaar' },
                  { value: '24u', label: 'Response' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="text-3xl md:text-4xl font-display font-bold text-gradient-navy mb-1">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyUsSection;
