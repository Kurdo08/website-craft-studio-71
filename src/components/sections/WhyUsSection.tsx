import { Award, Palette, Headphones, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyUsSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t.whyUs.experience.title,
      description: t.whyUs.experience.description,
    },
    {
      icon: Palette,
      title: t.whyUs.custom.title,
      description: t.whyUs.custom.description,
    },
    {
      icon: Headphones,
      title: t.whyUs.support.title,
      description: t.whyUs.support.description,
    },
    {
      icon: TrendingUp,
      title: t.whyUs.results.title,
      description: t.whyUs.results.description,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.whyUs.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.whyUs.subtitle}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-primary-foreground">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
                <div className="text-primary-foreground/80 text-sm">Projecten</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-primary-foreground/80 text-sm">Tevreden klanten</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
                <div className="text-primary-foreground/80 text-sm">Jaar ervaring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">24u</div>
                <div className="text-primary-foreground/80 text-sm">Response tijd</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;