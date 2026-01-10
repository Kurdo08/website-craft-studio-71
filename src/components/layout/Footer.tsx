import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">W</span>
              </div>
              <span className="font-heading font-bold text-xl">WebStudio</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/70 hover:text-background transition-colors text-sm">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-background/70 hover:text-background transition-colors text-sm">
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a href="#quote" className="text-background/70 hover:text-background transition-colors text-sm">
                  {t.nav.quote}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-background/70 text-sm">{t.services.webdesign.title}</span>
              </li>
              <li>
                <span className="text-background/70 text-sm">{t.services.webshop.title}</span>
              </li>
              <li>
                <span className="text-background/70 text-sm">{t.services.seo.title}</span>
              </li>
              <li>
                <span className="text-background/70 text-sm">{t.services.maintenance.title}</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+31 6 12345678</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@webstudio.nl</span>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Amsterdam, Nederland</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-center text-background/50 text-sm">
            © {currentYear} WebStudio. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;