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
    <section className="section-padding relative overflow-hidden section-divider">
      
      <motion.div 
        ref={ref}
        className="container mx-auto container-padding"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        {/* Header */}
        <motion.div className="section-header text-center mb-12" variants={fadeInUp}>
          <h2 className="section-title">{t.portfolio.title}</h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayProjects.map((project, index) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Link to={`/portfolio/${project.id}`} className="group block">
                <Card className="overflow-hidden bg-card border-border/50 hover:border-primary/30 transition-all duration-500 card-shadow hover:card-shadow-xl h-full">
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
