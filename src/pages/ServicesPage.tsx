import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, ShoppingCart, Search, Wrench, Check, ArrowRight, Code, Smartphone, Palette, BarChart, Lightbulb, MessageSquare, Zap, Shield } from 'lucide-react';
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
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      subServices: ['Zakelijke websites', 'Portfolio websites', 'Landing pages', 'One-page websites', 'Corporate websites']
    },
    { 
      icon: ShoppingCart, 
      ...t.services.webshop,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      subServices: ['WooCommerce', 'Shopify', 'Custom webshops', 'B2B webshops', 'Marketplace platforms']
    },
    { 
      icon: Search, 
      ...t.services.seo,
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
      subServices: ['Technische SEO', 'Lokale SEO', 'Content marketing', 'Google Ads', 'Social media marketing']
    },
    { 
      icon: Wrench, 
      ...t.services.maintenance,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      subServices: ['Website updates', 'Security monitoring', 'Backups', 'Performance optimalisatie', 'Hosting beheer']
    },
    { 
      icon: Lightbulb, 
      title: 'Advies & Strategie',
      description: 'Wij denken met u mee over welke website het beste bij uw bedrijf past en adviseren over de juiste aanpak.',
      features: ['Gratis intakegesprek', 'Website strategie', 'Concurrentie-analyse'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      subServices: ['Website advies', 'Digitale strategie', 'UX consultancy', 'Technisch advies', 'Groeistrategie']
    },
    { 
      icon: MessageSquare, 
      title: 'Content Creatie',
      description: 'Professionele teksten en visuele content die uw verhaal vertellen en bezoekers overtuigen.',
      features: ['Website teksten', 'Fotografie', 'Videoproductie'],
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80',
      subServices: ['Copywriting', 'Fotografie', 'Video content', 'Blog artikelen', 'Social media content']
    },
  ];

  const additionalServices = [
    { icon: Code, title: 'Web Applicaties', description: 'Custom web apps en dashboards' },
    { icon: Smartphone, title: 'Responsive Design', description: 'Perfect op elk apparaat' },
    { icon: Palette, title: 'Branding', description: 'Logo en huisstijl ontwerp' },
    { icon: BarChart, title: 'Analytics', description: 'Data-gedreven inzichten' },
    { icon: Zap, title: 'Performance', description: 'Snelle laadtijden gegarandeerd' },
    { icon: Shield, title: 'Beveiliging', description: 'SSL en veilige websites' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero with Background Image */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80" 
              alt="Modern office workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>
          <div className="container mx-auto container-padding relative">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">{t.pages.services.hero}</h1>
              <p className="text-lg text-muted-foreground">{t.pages.services.heroSubtitle}</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <motion.div 
            className="container mx-auto container-padding"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl h-full overflow-hidden group">
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-gradient-navy rounded-xl flex items-center justify-center shadow-lg">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {service.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary" />{f}
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-xs font-medium text-foreground mb-2">Inclusief:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {service.subServices.slice(0, 3).map((sub, i) => (
                            <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md">
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
              <h2 className="section-title text-center mb-8">Aanvullende Diensten</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
                {additionalServices.map((service, index) => (
                  <Card key={index} className="bg-card border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                    <CardContent className="p-5 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-display font-semibold text-sm text-foreground mb-1">{service.title}</h4>
                      <p className="text-xs text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* CTA Section with Image */}
            <motion.div 
              className="mt-16 relative rounded-2xl overflow-hidden"
              variants={fadeInUp}
            >
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-navy opacity-90" />
              </div>
              <div className="relative py-16 px-8 text-center">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                  Klaar om te beginnen?
                </h2>
                <p className="text-white/80 mb-6 max-w-xl mx-auto">
                  Laat ons weten wat u nodig heeft en ontvang binnen 24 uur een persoonlijke offerte
                </p>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 h-12 px-8">
                  <Link to="/quote">{t.hero.cta}<ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
