import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const PortfolioSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'TechFlow Solutions',
      category: 'Zakelijke Website',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      tags: ['Webdesign', 'SEO', 'Responsive'],
    },
    {
      title: 'ModaStyle Boutique',
      category: 'Webshop',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
      tags: ['E-commerce', 'Betalingen', 'Mobiel'],
    },
    {
      title: 'GreenLeaf Catering',
      category: 'Zakelijke Website',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
      tags: ['Webdesign', 'Reserveringen', 'Menu'],
    },
    {
      title: 'FitPro Gym',
      category: 'Landing Page',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
      tags: ['Landing', 'Leads', 'Conversie'],
    },
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300 border-border/50"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Button variant="secondary" size="sm" className="gap-2">
                    {t.portfolio.viewProject}
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-5">
                <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            {t.portfolio.allProjects}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;