import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, ShoppingCart, Search, Wrench, Check, ArrowRight, Code, Smartphone, Palette, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const ServicesPage = () => {
  const { t } = useLanguage();

  const mainServices = [
    { 
      icon: Globe, 
      ...t.services.webdesign,
      subServices: ['Zakelijke websites', 'Portfolio websites', 'Landing pages', 'One-page websites', 'Corporate websites']
    },
    { 
      icon: ShoppingCart, 
      ...t.services.webshop,
      subServices: ['WooCommerce', 'Shopify', 'Custom webshops', 'B2B webshops', 'Marketplace platforms']
    },
    { 
      icon: Search, 
      ...t.services.seo,
      subServices: ['Technische SEO', 'Lokale SEO', 'Content marketing', 'Google Ads', 'Social media marketing']
    },
    { 
      icon: Wrench, 
      ...t.services.maintenance,
      subServices: ['Website updates', 'Security monitoring', 'Backups', 'Performance optimalisatie', 'Hosting beheer']
    },
  ];

  const additionalServices = [
    { icon: Code, title: 'Web Applicaties', description: 'Custom web apps en dashboards' },
    { icon: Smartphone, title: 'Responsive Design', description: 'Perfect op elk apparaat' },
    { icon: Palette, title: 'Branding', description: 'Logo en huisstijl ontwerp' },
    { icon: BarChart, title: 'Analytics', description: 'Data-gedreven inzichten' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-12 bg-gradient-luxury relative">
          <div className="container mx-auto container-padding text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t.pages.services.hero}</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">{t.pages.services.heroSubtitle}</p>
          </div>
        </section>

        <section className="section-padding">
          <motion.div 
            className="container mx-auto container-padding"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {mainServices.map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl h-full">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-gradient-navy rounded-xl flex items-center justify-center mb-6 shadow-lg">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary" />{f}
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-sm font-medium text-foreground mb-3">Inclusief:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.subServices.map((sub, i) => (
                            <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Services */}
            <motion.div className="mt-16" variants={fadeInUp}>
              <h2 className="section-title text-center mb-10">Aanvullende Diensten</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {additionalServices.map((service, index) => (
                  <Card key={index} className="bg-card border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-display font-semibold text-foreground mb-2">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div className="text-center mt-12" variants={fadeInUp}>
              <Button asChild size="lg" className="bg-gradient-navy text-white h-12 px-6">
                <Link to="/quote">{t.hero.cta}<ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
