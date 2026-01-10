import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, ShoppingCart, Search, Wrench, Check, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Globe, ...t.services.webdesign },
    { icon: ShoppingCart, ...t.services.webshop },
    { icon: Search, ...t.services.seo },
    { icon: Wrench, ...t.services.maintenance },
  ];

  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main className="pt-24">
        <section className="section-padding bg-gradient-luxury relative">
          <div className="absolute inset-0 opacity-20 bg-noise mix-blend-overlay" />
          <div className="container mx-auto container-padding relative text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">{t.pages.services.hero}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.pages.services.heroSubtitle}</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                  <CardContent className="p-10">
                    <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary" />{f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-16">
              <Button asChild size="lg" className="bg-gradient-gold text-white h-14 px-8">
                <Link to="/quote">{t.hero.cta}<ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;