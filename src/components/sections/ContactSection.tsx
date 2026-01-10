import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
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
    <section className="section-padding bg-gradient-luxury relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 bg-noise mix-blend-overlay" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto container-padding relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 border-border/50 hover:border-primary/30 hover:shadow-2xl group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {method.value}
                </p>
                <Button asChild variant="outline" className="w-full border-primary/30 hover:bg-primary/5">
                  <a
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                  >
                    {method.action}
                    {method.external && <ExternalLink className="ml-2 w-4 h-4" />}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Address */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 border border-border/50">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">Amsterdam, Nederland</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-gradient-gold hover:opacity-90 text-white shadow-lg h-14 px-8">
            <Link to="/contact">
              {t.common.learnMore}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;