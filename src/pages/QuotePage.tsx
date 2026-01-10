import { useState } from 'react';
import { Send, Upload, X, CheckCircle, Sparkles, Clock, Shield, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/hooks/useScrollAnimation';

const QuotePage = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]);

  const websiteTypes = [
    { value: 'business', label: t.quote.form.websiteTypes.business, icon: '🏢' },
    { value: 'webshop', label: t.quote.form.websiteTypes.webshop, icon: '🛒' },
    { value: 'portfolio', label: t.quote.form.websiteTypes.portfolio, icon: '🎨' },
    { value: 'landing', label: t.quote.form.websiteTypes.landing, icon: '🚀' },
    { value: 'other', label: t.quote.form.websiteTypes.other, icon: '✨' },
  ];

  const styles = [
    { value: 'minimal', label: t.quote.form.styles.minimal, color: 'bg-slate-100' },
    { value: 'colorful', label: t.quote.form.styles.colorful, color: 'bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200' },
    { value: 'modern', label: t.quote.form.styles.modern, color: 'bg-gradient-to-r from-gray-900 to-gray-700' },
    { value: 'classic', label: t.quote.form.styles.classic, color: 'bg-gradient-to-r from-amber-100 to-yellow-100' },
    { value: 'custom', label: t.quote.form.styles.custom, color: 'bg-gradient-to-r from-primary/20 to-accent/20' },
  ];

  const budgets = [
    { value: 'starter', label: t.quote.form.budgets.starter },
    { value: 'medium', label: t.quote.form.budgets.medium },
    { value: 'premium', label: t.quote.form.budgets.premium },
    { value: 'enterprise', label: t.quote.form.budgets.enterprise },
    { value: 'unknown', label: t.quote.form.budgets.unknown },
  ];

  const benefits = [
    { icon: Clock, title: 'Binnen 24 uur reactie', description: 'Snelle persoonlijke respons' },
    { icon: MessageCircle, title: 'Gratis adviesgesprek', description: 'Vrijblijvend overleggen' },
    { icon: Sparkles, title: 'Maatwerk oplossingen', description: 'Geen standaard templates' },
    { icon: Shield, title: '100% tevredenheid', description: 'Garantie op resultaat' },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 section-padding">
          <div className="container mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                  alt="Team celebration"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-navy opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="font-display text-3xl font-bold mb-2">Bedankt!</h2>
                    <p className="text-white/80">Uw aanvraag is succesvol verzonden</p>
                  </div>
                </div>
              </div>
              <Card className="bg-card border-primary/20">
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6">
                    {t.quote.form.success}
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-primary/30">
                    Nieuwe aanvraag
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80" 
              alt="Creative workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>
          <div className="container mx-auto container-padding relative">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  Gratis offerte aanvragen
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Laten we iets <span className="text-gradient-navy">bijzonders</span> creëren
                </h1>
                <p className="text-lg text-muted-foreground">
                  Vertel ons over uw project en ontvang binnen 24 uur een persoonlijke offerte. 
                  Geen verplichtingen, alleen mogelijkheden.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Bar */}
        <section className="py-8 bg-soft border-y border-border/50">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">{benefit.title}</p>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <section className="section-padding">
          <motion.div 
            className="container mx-auto container-padding"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <motion.div className="lg:col-span-2" variants={slideInLeft}>
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Step 1: Contact Info */}
                  <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-navy rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                      <h2 className="font-display text-xl font-bold text-foreground">Uw gegevens</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.quote.form.name} *</Label>
                        <Input id="name" required placeholder="Jan Jansen" className="h-12 bg-background border-border focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">{t.quote.form.company}</Label>
                        <Input id="company" placeholder="Bedrijfsnaam B.V." className="h-12 bg-background border-border focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.quote.form.email} *</Label>
                        <Input id="email" type="email" required placeholder="jan@bedrijf.nl" className="h-12 bg-background border-border focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.quote.form.phone}</Label>
                        <Input id="phone" type="tel" placeholder="+31 6 12345678" className="h-12 bg-background border-border focus:border-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Website Type */}
                  <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-navy rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                      <h2 className="font-display text-xl font-bold text-foreground">Wat voor website?</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {websiteTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setSelectedType(type.value)}
                          className={cn(
                            'p-4 rounded-xl border-2 text-center transition-all',
                            selectedType === type.value
                              ? 'border-primary bg-primary/5 shadow-lg'
                              : 'border-border bg-background hover:border-primary/50'
                          )}
                        >
                          <div className="text-2xl mb-2">{type.icon}</div>
                          <div className="text-sm font-medium text-foreground">{type.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Style */}
                  <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-navy rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                      <h2 className="font-display text-xl font-bold text-foreground">Welke stijl past bij u?</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {styles.map((style) => (
                        <button
                          key={style.value}
                          type="button"
                          onClick={() => setSelectedStyle(style.value)}
                          className={cn(
                            'p-4 rounded-xl border-2 transition-all overflow-hidden',
                            selectedStyle === style.value
                              ? 'border-primary shadow-lg ring-2 ring-primary/20'
                              : 'border-border hover:border-primary/50'
                          )}
                        >
                          <div className={cn('w-full h-12 rounded-lg mb-2', style.color)} />
                          <div className="text-sm font-medium text-foreground">{style.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Budget & Details */}
                  <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-navy rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                      <h2 className="font-display text-xl font-bold text-foreground">Budget & Details</h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label>{t.quote.form.budget}</Label>
                        <div className="flex flex-wrap gap-2">
                          {budgets.map((budget) => (
                            <button
                              key={budget.value}
                              type="button"
                              onClick={() => setSelectedBudget(budget.value)}
                              className={cn(
                                'px-4 py-2 rounded-full border-2 text-sm font-medium transition-all',
                                selectedBudget === budget.value
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-border bg-background hover:border-primary/50 text-foreground'
                              )}
                            >
                              {budget.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="deadline">{t.quote.form.deadline}</Label>
                        <Input id="deadline" type="date" className="h-12 bg-background border-border focus:border-primary max-w-xs" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">{t.quote.form.description}</Label>
                        <Textarea
                          id="description"
                          rows={5}
                          placeholder={t.quote.form.descriptionPlaceholder}
                          className="bg-background border-border focus:border-primary resize-none"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label>{t.quote.form.files}</Label>
                        <p className="text-sm text-muted-foreground">{t.quote.form.filesDescription}</p>
                        
                        <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors bg-background/50">
                          <input
                            type="file"
                            id="files"
                            multiple
                            accept="image/*,.pdf,.doc,.docx"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                          <label htmlFor="files" className="cursor-pointer">
                            <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                            <span className="text-muted-foreground">
                              Klik of sleep bestanden (max 5)
                            </span>
                          </label>
                        </div>

                        {files.length > 0 && (
                          <div className="space-y-2">
                            {files.map((file, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between bg-background rounded-lg px-4 py-3 border border-border"
                              >
                                <span className="text-sm truncate text-foreground">{file.name}</span>
                                <button
                                  type="button"
                                  onClick={() => removeFile(index)}
                                  className="text-muted-foreground hover:text-destructive transition-colors"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <Button type="submit" size="lg" className="w-full bg-gradient-navy hover:opacity-90 text-white shadow-xl h-14 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      t.quote.form.submitting
                    ) : (
                      <>
                        {t.quote.form.submit}
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Sidebar */}
              <motion.div className="lg:col-span-1" variants={slideInRight}>
                <div className="sticky top-32 space-y-6">
                  {/* Preview Card */}
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" 
                      alt="Website preview"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="font-display font-bold">Uw nieuwe website</p>
                      <p className="text-white/80 text-sm">Ontworpen met passie</p>
                    </div>
                  </div>

                  {/* Trust Card */}
                  <Card className="bg-soft border-0">
                    <CardContent className="p-6">
                      <h3 className="font-display font-bold text-foreground mb-4">Waarom WebStudio?</h3>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>150+ succesvolle projecten afgerond</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Persoonlijke aanpak, geen standaardwerk</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Transparante prijzen, geen verrassingen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Gratis advies en nazorg inbegrepen</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Contact Card */}
                  <Card className="bg-gradient-navy text-white border-0">
                    <CardContent className="p-6">
                      <h3 className="font-display font-bold mb-2">Liever persoonlijk contact?</h3>
                      <p className="text-white/80 text-sm mb-4">Bel of WhatsApp ons direct</p>
                      <a 
                        href="tel:+31612345678" 
                        className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        <MessageCircle className="w-4 h-4" />
                        +31 6 12345678
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuotePage;
