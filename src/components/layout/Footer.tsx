import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">W</span>
            </div>
            <div>
              <span className="font-display font-bold text-lg block">WebStudio</span>
              <span className="text-xs text-primary">Premium Design</span>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link to="/" className="text-background/70 hover:text-primary transition-colors">{t.nav.home}</Link>
            <Link to="/services" className="text-background/70 hover:text-primary transition-colors">{t.nav.services}</Link>
            <Link to="/portfolio" className="text-background/70 hover:text-primary transition-colors">{t.nav.portfolio}</Link>
            <Link to="/about" className="text-background/70 hover:text-primary transition-colors">{t.nav.about}</Link>
            <Link to="/quote" className="text-background/70 hover:text-primary transition-colors">{t.nav.quote}</Link>
          </nav>

          {/* Contact */}
          <div className="flex items-center gap-4 text-sm">
            <a href="tel:+31612345678" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+31 6 12345678</span>
            </a>
            <a href="mailto:info@webstudio.nl" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@webstudio.nl</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-background/50">
          <p>© {currentYear} WebStudio. {t.footer.rights}</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">{t.footer.privacy}</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
