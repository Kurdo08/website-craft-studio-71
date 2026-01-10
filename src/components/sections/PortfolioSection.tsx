import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';

const PortfolioSection = () => {
  const { t, language } = useLanguage();

  // Show only first 4 projects on homepage
  const displayProjects = projects.slice(0, 4);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {displayProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group block"
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl h-full">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover overlay content */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2 text-white">
                      <span className="font-medium">{t.portfolio.viewProject}</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-primary text-sm font-medium">
                      {project.category[language]}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description[language]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button asChild size="lg" variant="outline" className="h-14 px-8 border-primary/30 hover:bg-primary/5">
            <Link to="/portfolio">
              {t.portfolio.allProjects}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;