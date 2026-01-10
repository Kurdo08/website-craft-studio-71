import { Phone, Mail, MessageCircle, MapPin, ExternalLink } from 'lucide-react';
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
      color: 'bg-success/10 text-success',
    },
    {
      icon: MessageCircle,
      title: t.contact.whatsapp,
      value: phoneNumber,
      action: t.contact.openWhatsapp,
      href: `https://wa.me/${whatsappNumber}`,
      color: 'bg-success/10 text-success',
      external: true,
    },
    {
      icon: Mail,
      title: t.contact.email,
      value: emailAddress,
      action: t.contact.emailUs,
      href: `mailto:${emailAddress}`,
      color: 'bg-primary/10 text-primary',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-border/50">
              <CardContent className="p-6 text-center">
                <div className={`w-14 h-14 rounded-xl ${method.color} flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {method.value}
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                  >
                    {method.action}
                    {method.external && <ExternalLink className="ml-2 w-3 h-3" />}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Address */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>Amsterdam, Nederland</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;