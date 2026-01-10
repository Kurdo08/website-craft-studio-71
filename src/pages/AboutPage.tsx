import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Palette, Headphones, TrendingUp, Users, Clock, Target, Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/hooks/useScrollAnimation';

const AboutPage = () => {
  const { t } = useLanguage();

  const values = [
    { 
      icon: Award, 
      title: t.about.experience.title, 
      description: t.about.experience.description 
    },
    { 
      icon: Palette, 
      title: t.about.custom.title, 
      description: t.about.custom.description 
    },
    { 
      icon: Headphones, 
      title: t.about.support.title, 
      description: t.about.support.description 
    },
    { 
      icon: TrendingUp, 
      title: t.about.results.title, 
      description: t.about.results.description 
    },
    { 
      icon: Users, 
      title: 'Klantgericht', 
      description: 'Uw succes staat centraal in alles wat we doen.' 
    },
    { 
      icon: Target, 
      title: 'Doelgericht', 
      description: 'Websites die uw bedrijfsdoelen bereiken.' 
    },
  ];

  const stats = [
    { value: '150+', label: 'Projecten Afgerond' },
    { value: '98%', label: 'Tevreden Klanten' },
    { value: '5+', label: 'Jaar Ervaring' },
    { value: '24u', label: 'Response Tijd' },
  ];

  const testimonials = [
    {
      name: 'Sarah de Jong',
      company: 'TechFlow Solutions',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      text: 'Fantastische samenwerking! Het team begreep precies wat we nodig hadden en leverde een website die onze verwachtingen overtrof.',
      rating: 5,
    },
    {
      name: 'Mark van der Berg',
      company: 'ModaStyle Boutique',
      role: 'Eigenaar',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
      text: 'De webshop is precies wat we zochten. Professioneel, snel en gebruiksvriendelijk. De klantenservice is ook top.',
      rating: 5,
    },
    {
      name: 'Lisa Bakker',
      company: 'GreenLeaf Catering',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
      text: 'Van eerste contact tot oplevering, alles verliep soepel. De website past perfect bij ons merk.',
      rating: 5,
    },
    {
      name: 'Peter Janssen',
      company: 'Janssen Advocaten',
      role: 'Partner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      text: 'Een professionele en betrouwbare partner. De nieuwe website straalt kwaliteit uit, precies wat we wilden.',
      rating: 5,
    },
    {
      name: 'Emma Visser',
      company: 'Fit & Gezond Studio',
      role: 'Eigenaar',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
      text: 'Dankzij de nieuwe website zijn onze boekingen met 40% gestegen. Ongelooflijk resultaat!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-12 bg-gradient-luxury relative">
          <div className="container mx-auto container-padding text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t.pages.about.hero}</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">{t.pages.about.heroSubtitle}</p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <motion.div 
            className="container mx-auto container-padding"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={slideInLeft}>
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
                  {t.about.story}
                </span>
                <h2 className="section-title text-left mb-4">Meer dan een bureau - uw digitale partner</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Al meer dan vijf jaar helpen wij ambitieuze bedrijven hun digitale aanwezigheid te transformeren. 
                    Wij geloven dat elke website een meesterwerk kan zijn - een perfecte balans tussen esthetiek en functionaliteit.
                  </p>
                  <p>
                    Ons team van gepassioneerde designers en developers werkt nauw samen met u om uw visie werkelijkheid te maken. 
                    Geen templates, geen standaard oplossingen - alleen maatwerk dat past bij uw unieke merk.
                  </p>
                  <p>
                    Van startups tot gevestigde bedrijven, wij behandelen elk project met dezelfde toewijding en aandacht voor detail. 
                    Uw succes is onze missie.
                  </p>
                </div>
              </motion.div>

              <motion.div className="relative" variants={slideInRight}>
                <div className="bg-card rounded-2xl p-8 border border-primary/10 shadow-xl glow-navy">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-4">
                        <div className="text-3xl md:text-4xl font-display font-bold text-gradient-navy mb-1">
                          {stat.value}
                        </div>
                        <div className="text-muted-foreground text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Values */}
        <section className="section-padding bg-soft">
          <motion.div 
            className="container mx-auto container-padding"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="section-header" variants={fadeInUp}>
              <h2 className="section-title">Onze Waarden</h2>
              <p className="section-subtitle">Wat ons drijft bij elk project</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-card border-border/50 hover:border-primary/30 transition-all hover:shadow-lg h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="section-padding">
          <motion.div 
            className="container mx-auto container-padding"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="section-header" variants={fadeInUp}>
              <h2 className="section-title">{t.testimonials.title}</h2>
              <p className="section-subtitle">{t.testimonials.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-card hover:bg-card transition-all duration-500 border-border/50 hover:border-primary/30 hover:shadow-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Quote className="w-5 h-5 text-primary" />
                      </div>

                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>

                      <p className="text-foreground leading-relaxed mb-6 text-sm">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
                        />
                        <div>
                          <p className="font-medium text-sm text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
