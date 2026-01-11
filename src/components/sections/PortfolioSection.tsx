import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const PortfolioSection = () => {
  const { t, language } = useLanguage();
  const { ref, controls } = useScrollAnimation();

  // Show only recent featured projects
  const recentProjectIds = ['rijscholenadvies-bureau', 'phone-recovery', 'promotioncars', 'luxe-vastgoed'];
  const displayProjects = projects.filter(p => recentProjectIds.includes(p.id));

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <motion.div 
        ref={ref}
        className="container mx-auto container-padding"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        {/* Header with Image */}
        <motion.div className="section-header relative" variants={fadeInUp}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div className="lg:max-w-xl">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
                Portfolio
              </span>
              <div className="flex items-center gap-4">
                <h2 className="section-title mb-0">{t.portfolio.title}</h2>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&q=80" 
                  alt="Portfolio" 
                  className="hidden md:block w-16 h-16 object-cover rounded-xl border-2 border-primary/20 shadow-lg"
                />
              </div>
              <p className="text-muted-foreground mt-4 text-lg">
                Ontdek hoe wij merken transformeren met onze recente projecten
              </p>
            </div>
            <div className="hidden lg:flex gap-3">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&q=80" 
                alt="Work" 
                className="w-24 h-24 object-cover rounded-xl border border-primary/10 shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&q=80" 
                alt="Design" 
                className="w-24 h-24 object-cover rounded-xl border border-primary/10 shadow-md -mt-4"
              />
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayProjects.map((project, index) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Link to={`/portfolio/${project.id}`} className="group block">
                <Card className="overflow-hidden bg-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl h-full">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-2 text-white">
                        <span className="font-medium">{t.portfolio.viewProject}</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <span className="text-primary text-sm font-medium mb-2 block">
                      {project.category[language]}
                    </span>
                    <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div className="text-center mt-10" variants={fadeInUp}>
          <Button asChild size="lg" variant="outline" className="h-12 px-6 border-primary/30 hover:bg-primary/5">
            <Link to="/portfolio">
              {t.portfolio.allProjects}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PortfolioSection;
