import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

const PortfolioPage = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="section-padding bg-gradient-luxury relative">
          <div className="absolute inset-0 opacity-20 bg-noise mix-blend-overlay" />
          <div className="container mx-auto container-padding relative text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">{t.pages.portfolio.hero}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.pages.portfolio.heroSubtitle}</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link key={project.id} to={`/portfolio/${project.id}`} className="group block">
                  <Card className="overflow-hidden bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl h-full">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <span className="flex items-center gap-2 text-white font-medium">{t.portfolio.viewProject}<ArrowUpRight className="w-5 h-5" /></span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <span className="text-primary text-sm font-medium">{project.category[language]}</span>
                      <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-none">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;