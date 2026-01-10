import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main className="pt-24">
        <section className="section-padding bg-gradient-luxury relative">
          <div className="absolute inset-0 opacity-20 bg-noise mix-blend-overlay" />
          <div className="container mx-auto container-padding relative text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">{t.pages.testimonials.hero}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.pages.testimonials.heroSubtitle}</p>
          </div>
        </section>
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;