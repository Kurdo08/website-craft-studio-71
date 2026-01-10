import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MessageCircle, MapPin, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const ContactPage = () => {
  const { t } = useLanguage();

  const whatsappNumber = '31612345678';
  const phoneNumber = '+31 6 12345678';
  const emailAddress = 'info@webstudio.nl';

  const contactMethods = [
    {
      icon: Phone,
      title: t.contact.phone,
      value: phoneNumber,
      action: t.contact.callUs,
      href: `tel:${phoneNumber.replace(/\s/g, '')}`,
    },
    {
      icon: MessageCircle,
      title: t.contact.whatsapp,
      value: phoneNumber,
      action: t.contact.openWhatsapp,
      href: `https://wa.me/${whatsappNumber}`,
      external: true,
    },
    {
      icon: Mail,
      title: t.contact.email,
      value: emailAddress,
      action: t.contact.emailUs,
      href: `mailto:${emailAddress}`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero with Image */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80" 
              alt="Contact us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>
          <div className="container mx-auto container-padding relative">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">{t.pages.contact.hero}</h1>
              <p className="text-lg text-muted-foreground">{t.pages.contact.heroSubtitle}</p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding">
          <motion.div 
            className="container mx-auto container-padding"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Methods */}
              <motion.div variants={fadeInUp}>
                <h2 className="section-title text-left mb-6">Neem contact op</h2>
                <p className="text-muted-foreground mb-8">
                  Heeft u vragen of wilt u een project bespreken? Wij staan klaar om u te helpen. Kies hieronder uw favoriete contactmethode.
                </p>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="bg-card border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-navy rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                            <method.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-display font-semibold text-foreground">{method.title}</h3>
                            <p className="text-muted-foreground text-sm">{method.value}</p>
                          </div>
                          <Button asChild variant="outline" size="sm" className="border-primary/30 hover:bg-primary/5">
                            <a
                              href={method.href}
                              target={method.external ? '_blank' : undefined}
                              rel={method.external ? 'noopener noreferrer' : undefined}
                            >
                              {method.action}
                              {method.external && <ExternalLink className="ml-2 w-3 h-3" />}
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-8 p-6 bg-soft rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">Amsterdam, Nederland</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Ma - Vr: 9:00 - 18:00</span>
                  </div>
                </div>
              </motion.div>

              {/* Image & CTA */}
              <motion.div variants={fadeInUp}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                    alt="Team meeting"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="font-display text-xl font-bold mb-2">Liever direct een offerte?</h3>
                    <p className="text-white/80 text-sm mb-4">Vul ons formulier in en ontvang binnen 24 uur een persoonlijke offerte.</p>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full bg-gradient-navy hover:opacity-90 text-white h-12">
                  <Link to="/quote">
                    Start Uw Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Map Section */}
        <section className="py-12">
          <div className="container mx-auto container-padding">
            <div className="relative rounded-2xl overflow-hidden h-80 bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80" 
                alt="Amsterdam city view"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-card/95 backdrop-blur-sm p-6 rounded-xl shadow-xl text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-display font-bold text-foreground">WebStudio HQ</p>
                  <p className="text-sm text-muted-foreground">Amsterdam, Nederland</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
