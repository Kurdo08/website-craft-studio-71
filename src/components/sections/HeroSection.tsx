import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto container-padding relative">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              variants={fadeInUp}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.hero.badge}</span>
            </motion.div>

            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-8"
              variants={fadeInUp}
            >
              {t.hero.title}{' '}
              <span className="text-gradient-navy">{t.hero.titleHighlight}</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0"
              variants={fadeInUp}
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap gap-8 justify-center lg:justify-start mb-10"
              variants={fadeInUp}
            >
              {[
                { value: '150+', label: 'Projecten' },
                { value: '98%', label: 'Tevreden' },
                { value: '5+', label: 'Jaar' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <Button size="lg" asChild className="bg-gradient-navy hover:opacity-90 text-white shadow-lg group h-14 px-8 text-base">
                <Link to="/quote">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base border-primary/30 hover:bg-primary/5">
                <Link to="/portfolio">{t.hero.ctaSecondary}</Link>
              </Button>
            </motion.div>
          </div>

          {/* Visual - Interactive Mockup with Homepage Screenshots */}
          <motion.div 
            className="relative hidden lg:block"
            variants={fadeInUp}
          >
            <div className="relative">
              {/* Main Mockup - Front */}
              <div className="relative bg-card backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-primary/10 glow-navy group z-10">
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-primary/10">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">webstudio.nl</span>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <iframe 
                    src="/"
                    title="Homepage Preview"
                    className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none"
                  />
                </div>
              </div>

              {/* Second Mockup - Behind */}
              <div className="absolute top-8 -right-8 w-full bg-card backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/10 -z-10 opacity-60">
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-primary/10">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">webstudio.nl</span>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <iframe 
                    src="/"
                    title="Homepage Preview 2"
                    className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-card rounded-xl px-5 py-3 shadow-xl border border-primary/20 animate-float z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-navy rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-foreground block">+200%</span>
                    <span className="text-xs text-muted-foreground">Conversie</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-8 bg-card rounded-xl px-5 py-3 shadow-xl border border-primary/20 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-navy border-2 border-card" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">150+ Tevreden klanten</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
