import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProjectById, getNextProject, getPrevProject } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const project = getProjectById(id || '');
  const nextProject = getNextProject(id || '');
  const prevProject = getPrevProject(id || '');

  if (!project) {
    return <div className="min-h-screen bg-background flex items-center justify-center"><p>Project niet gevonden</p></div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="section-padding bg-gradient-luxury relative">
          <div className="absolute inset-0 opacity-20 bg-noise mix-blend-overlay" />
          <div className="container mx-auto container-padding relative">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
              <ArrowLeft className="w-4 h-4" />{t.portfolio.backToPortfolio}
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.category[language]}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto container-padding">
            <img src={project.gallery[0]} alt={project.title} className="w-full rounded-2xl shadow-2xl mb-16" />
            
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.portfolio.challenge}</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.challenge[language]}</p>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.portfolio.solution}</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.solution[language]}</p>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.portfolio.results}</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.results[language]}</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">{t.portfolio.technologies}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} className="bg-primary/10 text-primary border-none">{tech}</Badge>
                    ))}
                  </div>
                </div>
                {project.websiteUrl && (
                  <Button asChild className="w-full bg-gradient-navy text-white">
                    <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                      {t.portfolio.visitWebsite}<ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="flex justify-between mt-16 pt-8 border-t border-border/50">
              <Link to={`/portfolio/${prevProject?.id}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <ArrowLeft className="w-4 h-4" />{t.portfolio.prevProject}
              </Link>
              <Link to={`/portfolio/${nextProject?.id}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                {t.portfolio.nextProject}<ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;