import { useState } from 'react';
import { Send, Upload, X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const QuoteSection = () => {
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
      setFiles((prev) => [...prev, ...newFiles].slice(0, 5)); // Max 5 files
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission (will be replaced with actual API call later)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="quote" className="section-padding">
        <div className="container mx-auto container-padding">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                {t.quote.form.success}
              </h3>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Nieuwe aanvraag
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.quote.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.quote.subtitle}
          </p>
        </div>

        {/* Form */}
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.quote.form.name} *</Label>
                  <Input id="name" required placeholder="Jan Jansen" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">{t.quote.form.company}</Label>
                  <Input id="company" placeholder="Bedrijfsnaam B.V." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.quote.form.email} *</Label>
                  <Input id="email" type="email" required placeholder="jan@bedrijf.nl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.quote.form.phone}</Label>
                  <Input id="phone" type="tel" placeholder="+31 6 12345678" />
                </div>
              </div>

              {/* Website Type */}
              <div className="space-y-3">
                <Label>{t.quote.form.websiteType} *</Label>
                <div className="flex flex-wrap gap-3">
                  {websiteTypes.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setSelectedType(type.value)}
                      className={cn(
                        'px-4 py-2 rounded-lg border text-sm font-medium transition-all',
                        selectedType === type.value
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background hover:border-primary/50 text-foreground'
                      )}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Style Preference */}
              <div className="space-y-3">
                <Label>{t.quote.form.style} *</Label>
                <div className="flex flex-wrap gap-3">
                  {styles.map((style) => (
                    <button
                      key={style.value}
                      type="button"
                      onClick={() => setSelectedStyle(style.value)}
                      className={cn(
                        'px-4 py-2 rounded-lg border text-sm font-medium transition-all',
                        selectedStyle === style.value
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background hover:border-primary/50 text-foreground'
                      )}
                    >
                      {style.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="space-y-3">
                <Label>{t.quote.form.budget}</Label>
                <div className="flex flex-wrap gap-3">
                  {budgets.map((budget) => (
                    <button
                      key={budget.value}
                      type="button"
                      onClick={() => setSelectedBudget(budget.value)}
                      className={cn(
                        'px-4 py-2 rounded-lg border text-sm font-medium transition-all',
                        selectedBudget === budget.value
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background hover:border-primary/50 text-foreground'
                      )}
                    >
                      {budget.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Deadline */}
              <div className="space-y-2">
                <Label htmlFor="deadline">{t.quote.form.deadline}</Label>
                <Input id="deadline" type="date" />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">{t.quote.form.description}</Label>
                <Textarea
                  id="description"
                  rows={5}
                  placeholder={t.quote.form.descriptionPlaceholder}
                />
              </div>

              {/* File Upload */}
              <div className="space-y-3">
                <Label>{t.quote.form.files}</Label>
                <p className="text-sm text-muted-foreground">{t.quote.form.filesDescription}</p>
                
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
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
                    <span className="text-sm text-muted-foreground">
                      Klik om bestanden te selecteren (max 5)
                    </span>
                  </label>
                </div>

                {/* File List */}
                {files.length > 0 && (
                  <div className="space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-muted/50 rounded-lg px-4 py-2"
                      >
                        <span className="text-sm truncate">{file.name}</span>
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

              {/* Submit */}
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  t.quote.form.submitting
                ) : (
                  <>
                    {t.quote.form.submit}
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuoteSection;