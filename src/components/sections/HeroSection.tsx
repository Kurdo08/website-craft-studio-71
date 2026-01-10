import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const highlights = [
    'Gratis offerte binnen 24 uur',
    '100% maatwerk design',
    'Persoonlijke begeleiding',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              {t.hero.title}{' '}
              <span className="text-gradient">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>

            {/* Highlights */}
            <ul className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="group">
                <a href="#quote">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#portfolio">{t.hero.ctaSecondary}</a>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-2xl shadow-2xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <div className="w-3 h-3 rounded-full bg-success" />
                </div>
                <div className="space-y-3">
                  <div className="h-8 bg-primary/10 rounded-lg w-3/4" />
                  <div className="h-4 bg-muted rounded w-full" />
                  <div className="h-4 bg-muted rounded w-5/6" />
                  <div className="h-4 bg-muted rounded w-4/6" />
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="h-24 bg-primary/20 rounded-lg" />
                    <div className="h-24 bg-accent/20 rounded-lg" />
                    <div className="h-24 bg-success/20 rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-success text-success-foreground rounded-xl px-4 py-2 shadow-lg animate-fade-in">
                <span className="text-sm font-medium">+150% conversie</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl px-4 py-3 shadow-lg border border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">SEO Geoptimaliseerd</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;