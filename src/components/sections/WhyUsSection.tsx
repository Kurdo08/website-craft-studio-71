import { Link } from 'react-router-dom';
import { Award, Palette, Headphones, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyUsSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t.about.experience.title,
      description: t.about.experience.description,
    },
    {
      icon: Palette,
      title: t.about.custom.title,
      description: t.about.custom.description,
    },
    {
      icon: Headphones,
      title: t.about.support.title,
      description: t.about.support.description,
    },
    {
      icon: TrendingUp,
      title: t.about.results.title,
      description: t.about.results.description,
    },
  ];

  return (
    <section className="section-padding bg-gradient-luxury relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 bg-noise mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px]" />
      
      <div className="container mx-auto container-padding relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              {t.about.title}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t.about.subtitle}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {t.about.storyText}
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild size="lg" className="bg-gradient-gold hover:opacity-90 text-white shadow-lg h-14 px-8">
                <Link to="/about">
                  {t.common.learnMore}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-10 md:p-14 border border-primary/20 glow-gold">
              <div className="grid grid-cols-2 gap-10">
                {[
                  { value: '150+', label: 'Projecten Afgerond' },
                  { value: '98%', label: 'Tevreden Klanten' },
                  { value: '5+', label: 'Jaar Ervaring' },
                  { value: '24u', label: 'Response Tijd' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -z-10 inset-0 bg-gradient-gold opacity-10 blur-3xl rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;