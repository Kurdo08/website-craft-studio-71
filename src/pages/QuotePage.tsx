import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteSection from '@/components/sections/QuoteSection';
import { useLanguage } from '@/contexts/LanguageContext';

const QuotePage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main className="pt-24">
        <section className="py-16 bg-gradient-luxury relative">
          <div className="absolute inset-0 opacity-20 bg-noise mix-blend-overlay" />
          <div className="container mx-auto container-padding relative text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">{t.pages.quote.hero}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.pages.quote.heroSubtitle}</p>
          </div>
        </section>
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
};

export default QuotePage;