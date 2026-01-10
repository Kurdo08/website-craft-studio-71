import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto container-padding section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-2xl">W</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl block">WebStudio</span>
                <span className="text-xs text-primary font-medium tracking-wider uppercase">Premium Design</span>
              </div>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: t.nav.home },
                { to: '/portfolio', label: t.nav.portfolio },
                { to: '/services', label: t.nav.services },
                { to: '/about', label: t.nav.about },
                { to: '/quote', label: t.nav.quote },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-background/60 hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">{t.footer.services}</h4>
            <ul className="space-y-3">
              {[
                t.services.webdesign.title,
                t.services.webshop.title,
                t.services.seo.title,
                t.services.maintenance.title,
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-background/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-background/60 text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>+31 6 12345678</span>
              </li>
              <li className="flex items-center gap-3 text-background/60 text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>info@webstudio.nl</span>
              </li>
              <li className="flex items-start gap-3 text-background/60 text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>Amsterdam, Nederland</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {currentYear} WebStudio. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-background/40 hover:text-primary text-sm transition-colors">
              {t.footer.privacy}
            </Link>
            <Link to="/terms" className="text-background/40 hover:text-primary text-sm transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;