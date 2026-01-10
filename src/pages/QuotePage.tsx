import { useState } from 'react';
import { Send, Upload, X, CheckCircle } from 'lucide-react';
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
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const QuotePage = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]);

  const websiteTypes = [
    { value: 'business', label: t.quote.form.websiteTypes.business },
    { value: 'webshop', label: t.quote.form.websiteTypes.webshop },
    { value: 'portfolio', label: t.quote.form.websiteTypes.portfolio },
    { value: 'landing', label: t.quote.form.websiteTypes.landing },
    { value: 'other', label: t.quote.form.websiteTypes.other },
  ];

  const styles = [
    { value: 'minimal', label: t.quote.form.styles.minimal },
    { value: 'colorful', label: t.quote.form.styles.colorful },
    { value: 'modern', label: t.quote.form.styles.modern },
    { value: 'classic', label: t.quote.form.styles.classic },
    { value: 'custom', label: t.quote.form.styles.custom },
  ];

  const budgets = [
    { value: 'starter', label: t.quote.form.budgets.starter },
    { value: 'medium', label: t.quote.form.budgets.medium },
    { value: 'premium', label: t.quote.form.budgets.premium },
    { value: 'enterprise', label: t.quote.form.budgets.enterprise },
    { value: 'unknown', label: t.quote.form.budgets.unknown },
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
            <Card className="max-w-2xl mx-auto bg-card border-primary/20">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-gradient-navy rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {t.quote.form.success}
                </h3>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4 border-primary/30">
                  Nieuwe aanvraag
                </Button>
              </CardContent>
            </Card>
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
        {/* Hero */}
        <section className="py-12 bg-gradient-luxury relative">
          <div className="container mx-auto container-padding text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t.pages.quote.hero}</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">{t.pages.quote.heroSubtitle}</p>
          </div>
        </section>

        {/* Form */}
        <section className="section-padding">
          <motion.div 
            className="container mx-auto container-padding"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <Card className="max-w-3xl mx-auto bg-card border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Info */}
                  <motion.div className="grid sm:grid-cols-2 gap-4" variants={fadeInUp}>
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.quote.form.name} *</Label>
                      <Input id="name" required placeholder="Jan Jansen" className="h-11 bg-background border-border focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">{t.quote.form.company}</Label>
                      <Input id="company" placeholder="Bedrijfsnaam B.V." className="h-11 bg-background border-border focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.quote.form.email} *</Label>
                      <Input id="email" type="email" required placeholder="jan@bedrijf.nl" className="h-11 bg-background border-border focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.quote.form.phone}</Label>
                      <Input id="phone" type="tel" placeholder="+31 6 12345678" className="h-11 bg-background border-border focus:border-primary" />
                    </div>
                  </motion.div>

                  {/* Website Type */}
                  <motion.div className="space-y-3" variants={fadeInUp}>
                    <Label>{t.quote.form.websiteType} *</Label>
                    <div className="flex flex-wrap gap-2">
                      {websiteTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setSelectedType(type.value)}
                          className={cn(
                            'px-4 py-2 rounded-lg border text-sm font-medium transition-all',
                            selectedType === type.value
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border bg-background hover:border-primary/50 text-foreground'
                          )}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Style Preference */}
                  <motion.div className="space-y-3" variants={fadeInUp}>
                    <Label>{t.quote.form.style} *</Label>
                    <div className="flex flex-wrap gap-2">
                      {styles.map((style) => (
                        <button
                          key={style.value}
                          type="button"
                          onClick={() => setSelectedStyle(style.value)}
                          className={cn(
                            'px-4 py-2 rounded-lg border text-sm font-medium transition-all',
                            selectedStyle === style.value
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border bg-background hover:border-primary/50 text-foreground'
                          )}
                        >
                          {style.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Budget */}
                  <motion.div className="space-y-3" variants={fadeInUp}>
                    <Label>{t.quote.form.budget}</Label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((budget) => (
                        <button
                          key={budget.value}
                          type="button"
                          onClick={() => setSelectedBudget(budget.value)}
                          className={cn(
                            'px-4 py-2 rounded-lg border text-sm font-medium transition-all',
                            selectedBudget === budget.value
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border bg-background hover:border-primary/50 text-foreground'
                          )}
                        >
                          {budget.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Deadline */}
                  <motion.div className="space-y-2" variants={fadeInUp}>
                    <Label htmlFor="deadline">{t.quote.form.deadline}</Label>
                    <Input id="deadline" type="date" className="h-11 bg-background border-border focus:border-primary max-w-xs" />
                  </motion.div>

                  {/* Description */}
                  <motion.div className="space-y-2" variants={fadeInUp}>
                    <Label htmlFor="description">{t.quote.form.description}</Label>
                    <Textarea
                      id="description"
                      rows={4}
                      placeholder={t.quote.form.descriptionPlaceholder}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </motion.div>

                  {/* File Upload */}
                  <motion.div className="space-y-3" variants={fadeInUp}>
                    <Label>{t.quote.form.files}</Label>
                    <p className="text-sm text-muted-foreground">{t.quote.form.filesDescription}</p>
                    
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors bg-background/50">
                      <input
                        type="file"
                        id="files"
                        multiple
                        accept="image/*,.pdf,.doc,.docx"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="files" className="cursor-pointer">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <span className="text-muted-foreground text-sm">
                          Klik om bestanden te selecteren (max 5)
                        </span>
                      </label>
                    </div>

                    {files.length > 0 && (
                      <div className="space-y-2">
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-background rounded-lg px-4 py-2 border border-border"
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
                  </motion.div>

                  {/* Submit */}
                  <motion.div variants={fadeInUp}>
                    <Button type="submit" size="lg" className="w-full bg-gradient-navy hover:opacity-90 text-white shadow-lg h-12" disabled={isSubmitting}>
                      {isSubmitting ? (
                        t.quote.form.submitting
                      ) : (
                        <>
                          {t.quote.form.submit}
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuotePage;
