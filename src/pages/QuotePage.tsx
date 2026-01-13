import { useState } from 'react';
import { Send, Upload, X, CheckCircle, Sparkles, Clock, Shield, MessageCircle, Calendar, User, MapPin, Globe, Settings, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const QuotePage = () => {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  
  // Form state
  const [formData, setFormData] = useState({
    typeAanvraag: '',
    aanvraagVoor: '',
    naam: '',
    plaats: '',
    gewensteReactietermijn: '',
    websiteOfWebshop: '',
    webdesignerVoor: [] as string[],
    websiteFuncties: [] as string[],
    webshopFuncties: [] as string[],
    hulpMetInhoud: '',
    domeinnaamEnHosting: '',
    onderhoudNaOplevering: '',
    aantalPaginas: '',
    wieDoetAanvraag: '',
    redenAanvraag: '',
    gewensteUrl: '',
    wanneerAf: '',
  });

  const totalSteps = 8;

  // Options
  const typeAanvraagOptions = [
    { value: 'nieuwe-website', label: 'Nieuwe website' },
    { value: 'website-redesign', label: 'Website redesign' },
    { value: 'nieuwe-webshop', label: 'Nieuwe webshop' },
    { value: 'webshop-redesign', label: 'Webshop redesign' },
    { value: 'onderhoud', label: 'Onderhoud & updates' },
    { value: 'seo-optimalisatie', label: 'SEO optimalisatie' },
    { value: 'anders', label: 'Anders' },
  ];

  const aanvraagVoorOptions = [
    { value: 'particulier', label: 'Particulier' },
    { value: 'zzp', label: 'ZZP\'er / Freelancer' },
    { value: 'mkb', label: 'MKB / Bedrijf' },
    { value: 'stichting', label: 'Stichting / Vereniging' },
    { value: 'overheid', label: 'Overheid / Gemeente' },
  ];

  const reactietermijnOptions = [
    { value: 'binnen-24-uur', label: 'Binnen 24 uur' },
    { value: 'binnen-3-dagen', label: 'Binnen 3 dagen' },
    { value: 'binnen-week', label: 'Binnen een week' },
    { value: 'geen-haast', label: 'Geen haast' },
  ];

  const websiteOfWebshopOptions = [
    { value: 'website', label: 'Website' },
    { value: 'webshop', label: 'Webshop' },
    { value: 'beide', label: 'Beide' },
  ];

  const webdesignerVoorOptions = [
    { value: 'volledig-ontwerp', label: 'Volledig nieuw ontwerp & ontwikkeling' },
    { value: 'redesign', label: 'Bestaande website vernieuwen' },
    { value: 'technische-aanpassingen', label: 'Technische aanpassingen' },
    { value: 'content-creatie', label: 'Content & copywriting' },
    { value: 'seo-marketing', label: 'SEO & online marketing' },
    { value: 'hosting-beheer', label: 'Hosting & domeinbeheer' },
  ];

  const websiteFunctiesOptions = [
    { value: 'contactformulier', label: 'Contactformulier' },
    { value: 'blog', label: 'Blog / Nieuws sectie' },
    { value: 'portfolio', label: 'Portfolio / Gallerij' },
    { value: 'reserveringen', label: 'Reserveringen / Boekingen' },
    { value: 'reviews', label: 'Klantreviews' },
    { value: 'social-media', label: 'Social media integratie' },
    { value: 'nieuwsbrief', label: 'Nieuwsbrief aanmelding' },
    { value: 'meertalig', label: 'Meertalig (NL/EN)' },
    { value: 'google-maps', label: 'Google Maps' },
    { value: 'chat', label: 'Live chat' },
  ];

  const webshopFunctiesOptions = [
    { value: 'ideal', label: 'iDEAL betaling' },
    { value: 'creditcard', label: 'Creditcard betaling' },
    { value: 'afterpay', label: 'Afterpay / Klarna' },
    { value: 'voorraad', label: 'Voorraadbeheer' },
    { value: 'kortingscodes', label: 'Kortingscodes' },
    { value: 'klantaccounts', label: 'Klantaccounts' },
    { value: 'track-trace', label: 'Track & Trace' },
    { value: 'reviews', label: 'Productreviews' },
    { value: 'filters', label: 'Productfilters' },
    { value: 'wenslijst', label: 'Wenslijst' },
  ];

  const hulpMetInhoudOptions = [
    { value: 'ja-volledig', label: 'Ja, volledig (teksten + afbeeldingen)' },
    { value: 'ja-teksten', label: 'Ja, alleen teksten' },
    { value: 'ja-afbeeldingen', label: 'Ja, alleen afbeeldingen' },
    { value: 'nee', label: 'Nee, ik lever alles zelf aan' },
  ];

  const domeinnaamEnHostingOptions = [
    { value: 'ja-beide', label: 'Ja, beide geregeld' },
    { value: 'alleen-domein', label: 'Alleen domeinnaam' },
    { value: 'alleen-hosting', label: 'Alleen hosting' },
    { value: 'nee', label: 'Nee, nog niet' },
    { value: 'hulp-nodig', label: 'Ik heb hulp nodig hierbij' },
  ];

  const onderhoudOptions = [
    { value: 'ja', label: 'Ja, graag' },
    { value: 'nee', label: 'Nee, niet nodig' },
    { value: 'misschien', label: 'Misschien, afhankelijk van kosten' },
  ];

  const aantalPaginasOptions = [
    { value: '1-5', label: '1 - 5 pagina\'s' },
    { value: '5-10', label: '5 - 10 pagina\'s' },
    { value: '10-20', label: '10 - 20 pagina\'s' },
    { value: '20-plus', label: 'Meer dan 20 pagina\'s' },
    { value: 'weet-niet', label: 'Weet ik nog niet' },
  ];

  const wieDoetAanvraagOptions = [
    { value: 'eigenaar', label: 'Eigenaar / Directeur' },
    { value: 'marketing', label: 'Marketing medewerker' },
    { value: 'it', label: 'IT medewerker' },
    { value: 'particulier', label: 'Particulier persoon' },
    { value: 'anders', label: 'Anders' },
  ];

  const wanneerAfOptions = [
    { value: 'zo-snel-mogelijk', label: 'Zo snel mogelijk' },
    { value: 'binnen-2-weken', label: 'Binnen 2 weken' },
    { value: 'binnen-maand', label: 'Binnen 1 maand' },
    { value: 'binnen-3-maanden', label: 'Binnen 3 maanden' },
    { value: 'binnen-6-maanden', label: 'Binnen 6 maanden' },
    { value: 'geen-deadline', label: 'Geen specifieke deadline' },
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

  const handleCheckboxChange = (field: 'webdesignerVoor' | 'websiteFuncties' | 'webshopFuncties', value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(v => v !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const currentDate = new Date().toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const stepTitles = [
    'Type Aanvraag',
    'Uw Gegevens',
    'Website of Webshop',
    'Waar kan ik u mee helpen?',
    'Gewenste Functies',
    'Extra Wensen',
    'Project Details',
    'Bestanden & Versturen',
  ];

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
                    Bedankt voor uw aanvraag! Ik neem binnen 24 uur persoonlijk contact met u op om uw project te bespreken.
                  </p>
                  <Button onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(0);
                    setFormData({
                      typeAanvraag: '',
                      aanvraagVoor: '',
                      naam: '',
                      plaats: '',
                      gewensteReactietermijn: '',
                      websiteOfWebshop: '',
                      webdesignerVoor: [],
                      websiteFuncties: [],
                      webshopFuncties: [],
                      hulpMetInhoud: '',
                      domeinnaamEnHosting: '',
                      onderhoudNaOplevering: '',
                      aantalPaginas: '',
                      wieDoetAanvraag: '',
                      redenAanvraag: '',
                      gewensteUrl: '',
                      wanneerAf: '',
                    });
                    setFiles([]);
                  }} variant="outline" className="border-primary/30">
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

  const renderStep = () => {
    const stepVariants = {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 }
    };

    switch (currentStep) {
      case 0:
        return (
          <motion.div key="step-0" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Wat voor aanvraag is dit?</h2>
              <p className="text-muted-foreground">Selecteer het type project waarvoor u contact opneemt</p>
            </div>
            
            <div className="grid gap-3">
              {typeAanvraagOptions.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, typeAanvraag: opt.value }))}
                  className={cn(
                    'w-full p-4 rounded-xl border-2 text-left transition-all',
                    formData.typeAanvraag === opt.value
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-border bg-background hover:border-primary/50'
                  )}
                >
                  <span className="font-medium text-foreground">{opt.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-4">
              <Label className="text-muted-foreground mb-3 block">Voor wie is deze aanvraag?</Label>
              <div className="grid sm:grid-cols-2 gap-3">
                {aanvraagVoorOptions.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, aanvraagVoor: opt.value }))}
                    className={cn(
                      'p-3 rounded-xl border-2 text-center transition-all',
                      formData.aanvraagVoor === opt.value
                        ? 'border-primary bg-primary/5'
                        : 'border-border bg-background hover:border-primary/50'
                    )}
                  >
                    <span className="text-sm font-medium text-foreground">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div key="step-1" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Uw Gegevens</h2>
              <p className="text-muted-foreground">Zodat ik contact met u kan opnemen</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="naam" className="flex items-center gap-2">
                  <User className="w-4 h-4" /> Naam *
                </Label>
                <Input 
                  id="naam" 
                  required 
                  value={formData.naam}
                  onChange={(e) => setFormData(prev => ({ ...prev, naam: e.target.value }))}
                  placeholder="Uw volledige naam" 
                  className="h-12 bg-background" 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="plaats" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Plaats *
                </Label>
                <Input 
                  id="plaats" 
                  required 
                  value={formData.plaats}
                  onChange={(e) => setFormData(prev => ({ ...prev, plaats: e.target.value }))}
                  placeholder="Uw woonplaats" 
                  className="h-12 bg-background" 
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Gewenste reactietermijn
                </Label>
                <Select value={formData.gewensteReactietermijn} onValueChange={(v) => setFormData(prev => ({ ...prev, gewensteReactietermijn: v }))}>
                  <SelectTrigger className="h-12 bg-background">
                    <SelectValue placeholder="Selecteer termijn" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border z-50">
                    {reactietermijnOptions.map(opt => (
                      <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Aangevraagd op
                </Label>
                <Input 
                  value={currentDate}
                  readOnly
                  disabled
                  className="h-12 bg-muted text-muted-foreground" 
                />
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div key="step-2" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Website of Webshop?</h2>
              <p className="text-muted-foreground">Wat voor type project heeft u in gedachten?</p>
            </div>
            
            <div className="grid gap-4">
              {websiteOfWebshopOptions.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, websiteOfWebshop: opt.value }))}
                  className={cn(
                    'p-6 rounded-xl border-2 text-center transition-all',
                    formData.websiteOfWebshop === opt.value
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-border bg-background hover:border-primary/50'
                  )}
                >
                  <div className="text-3xl mb-2">
                    {opt.value === 'website' && '🌐'}
                    {opt.value === 'webshop' && '🛒'}
                    {opt.value === 'beide' && '✨'}
                  </div>
                  <span className="font-medium text-foreground text-lg">{opt.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div key="step-3" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Waar kan ik u mee helpen?</h2>
              <p className="text-muted-foreground">Selecteer alle opties die van toepassing zijn</p>
            </div>
            
            <div className="grid gap-3">
              {webdesignerVoorOptions.map(opt => (
                <label
                  key={opt.value}
                  className={cn(
                    'flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all',
                    formData.webdesignerVoor.includes(opt.value)
                      ? 'border-primary bg-primary/5'
                      : 'border-border bg-background hover:border-primary/50'
                  )}
                >
                  <Checkbox 
                    checked={formData.webdesignerVoor.includes(opt.value)}
                    onCheckedChange={(checked) => handleCheckboxChange('webdesignerVoor', opt.value, checked as boolean)}
                  />
                  <span className="font-medium text-foreground">{opt.label}</span>
                </label>
              ))}
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div key="step-4" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Gewenste Functies</h2>
              <p className="text-muted-foreground">Welke functionaliteiten wilt u op uw {formData.websiteOfWebshop === 'webshop' ? 'webshop' : 'website'}?</p>
            </div>
            
            {(formData.websiteOfWebshop === 'website' || formData.websiteOfWebshop === 'beide' || !formData.websiteOfWebshop) && (
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-lg font-semibold">
                  <Settings className="w-5 h-5" /> Website functies
                </Label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {websiteFunctiesOptions.map(opt => (
                    <label
                      key={opt.value}
                      className={cn(
                        'flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all',
                        formData.websiteFuncties.includes(opt.value)
                          ? 'border-primary bg-primary/5'
                          : 'border-border bg-background hover:border-primary/50'
                      )}
                    >
                      <Checkbox 
                        checked={formData.websiteFuncties.includes(opt.value)}
                        onCheckedChange={(checked) => handleCheckboxChange('websiteFuncties', opt.value, checked as boolean)}
                      />
                      <span className="text-sm font-medium text-foreground">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {(formData.websiteOfWebshop === 'webshop' || formData.websiteOfWebshop === 'beide') && (
              <div className="space-y-3 pt-4">
                <Label className="flex items-center gap-2 text-lg font-semibold">
                  <Settings className="w-5 h-5" /> Webshop functies
                </Label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {webshopFunctiesOptions.map(opt => (
                    <label
                      key={opt.value}
                      className={cn(
                        'flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all',
                        formData.webshopFuncties.includes(opt.value)
                          ? 'border-primary bg-primary/5'
                          : 'border-border bg-background hover:border-primary/50'
                      )}
                    >
                      <Checkbox 
                        checked={formData.webshopFuncties.includes(opt.value)}
                        onCheckedChange={(checked) => handleCheckboxChange('webshopFuncties', opt.value, checked as boolean)}
                      />
                      <span className="text-sm font-medium text-foreground">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        );

      case 5:
        return (
          <motion.div key="step-5" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Extra Wensen</h2>
              <p className="text-muted-foreground">Een paar aanvullende vragen</p>
            </div>
            
            <div className="space-y-3">
              <Label className="font-semibold">Wilt u hulp met de inhoud (teksten & afbeeldingen)?</Label>
              <div className="grid gap-2">
                {hulpMetInhoudOptions.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, hulpMetInhoud: opt.value }))}
                    className={cn(
                      'p-3 rounded-xl border-2 text-left transition-all',
                      formData.hulpMetInhoud === opt.value
                        ? 'border-primary bg-primary/5'
                        : 'border-border bg-background hover:border-primary/50'
                    )}
                  >
                    <span className="text-sm font-medium text-foreground">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label className="font-semibold">Heeft u al een domeinnaam en hosting?</Label>
              <div className="grid gap-2">
                {domeinnaamEnHostingOptions.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, domeinnaamEnHosting: opt.value }))}
                    className={cn(
                      'p-3 rounded-xl border-2 text-left transition-all',
                      formData.domeinnaamEnHosting === opt.value
                        ? 'border-primary bg-primary/5'
                        : 'border-border bg-background hover:border-primary/50'
                    )}
                  >
                    <span className="text-sm font-medium text-foreground">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label className="font-semibold">Wilt u na oplevering ook onderhoud?</Label>
              <div className="grid grid-cols-3 gap-3">
                {onderhoudOptions.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, onderhoudNaOplevering: opt.value }))}
                    className={cn(
                      'p-3 rounded-xl border-2 text-center transition-all',
                      formData.onderhoudNaOplevering === opt.value
                        ? 'border-primary bg-primary/5'
                        : 'border-border bg-background hover:border-primary/50'
                    )}
                  >
                    <span className="text-sm font-medium text-foreground">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div key="step-6" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Project Details</h2>
              <p className="text-muted-foreground">Nog een paar laatste vragen</p>
            </div>
            
            <div className="space-y-2">
              <Label>Hoeveel pagina's moet uw project bevatten?</Label>
              <Select value={formData.aantalPaginas} onValueChange={(v) => setFormData(prev => ({ ...prev, aantalPaginas: v }))}>
                <SelectTrigger className="h-12 bg-background">
                  <SelectValue placeholder="Selecteer aantal" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  {aantalPaginasOptions.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Wie doet de aanvraag?</Label>
              <Select value={formData.wieDoetAanvraag} onValueChange={(v) => setFormData(prev => ({ ...prev, wieDoetAanvraag: v }))}>
                <SelectTrigger className="h-12 bg-background">
                  <SelectValue placeholder="Selecteer uw rol" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  {wieDoetAanvraagOptions.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reden" className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" /> Wat is de reden van deze aanvraag?
              </Label>
              <Textarea
                id="reden"
                value={formData.redenAanvraag}
                onChange={(e) => setFormData(prev => ({ ...prev, redenAanvraag: e.target.value }))}
                placeholder="Beschrijf kort waarom u een nieuwe website of webshop wilt..."
                rows={3}
                className="bg-background resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="url" className="flex items-center gap-2">
                <Globe className="w-4 h-4" /> Gewenste website URL
              </Label>
              <Input 
                id="url" 
                value={formData.gewensteUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, gewensteUrl: e.target.value }))}
                placeholder="bijv. www.mijnbedrijf.nl" 
                className="h-12 bg-background" 
              />
            </div>

            <div className="space-y-2">
              <Label>Wanneer moet het project af zijn?</Label>
              <Select value={formData.wanneerAf} onValueChange={(v) => setFormData(prev => ({ ...prev, wanneerAf: v }))}>
                <SelectTrigger className="h-12 bg-background">
                  <SelectValue placeholder="Selecteer deadline" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  {wanneerAfOptions.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        );

      case 7:
        return (
          <motion.div key="step-7" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Bijna Klaar!</h2>
              <p className="text-muted-foreground">Upload eventueel relevante bestanden en verstuur uw aanvraag</p>
            </div>
            
            <div className="space-y-4">
              <Label className="font-semibold">Documenten uploaden (optioneel)</Label>
              <p className="text-sm text-muted-foreground">
                Upload uw logo, huisstijl, inspiratie of andere relevante documenten.
              </p>
              
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

            {/* Summary */}
            <Card className="bg-soft border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Samenvatting</h3>
                <div className="space-y-2 text-sm">
                  {formData.naam && <p><span className="text-muted-foreground">Naam:</span> {formData.naam}</p>}
                  {formData.plaats && <p><span className="text-muted-foreground">Plaats:</span> {formData.plaats}</p>}
                  {formData.typeAanvraag && <p><span className="text-muted-foreground">Type:</span> {typeAanvraagOptions.find(o => o.value === formData.typeAanvraag)?.label}</p>}
                  {formData.websiteOfWebshop && <p><span className="text-muted-foreground">Project:</span> {websiteOfWebshopOptions.find(o => o.value === formData.websiteOfWebshop)?.label}</p>}
                  {formData.wanneerAf && <p><span className="text-muted-foreground">Deadline:</span> {wanneerAfOptions.find(o => o.value === formData.wanneerAf)?.label}</p>}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero with Image */}
        <section className="py-12 relative overflow-hidden">
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
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                {language === 'nl' ? 'Offerte Aanvragen' : 'Request Quote'}
              </h1>
              <p className="text-muted-foreground">
                {language === 'nl' 
                  ? 'Vul het formulier in en ontvang binnen 24 uur een persoonlijke offerte'
                  : 'Fill in the form and receive a personal quote within 24 hours'}
              </p>
            </div>
          </div>
        </section>

        {/* Progress Bar */}
        <section className="py-4 bg-soft border-y border-border/50">
          <div className="container mx-auto container-padding">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Stap {currentStep + 1} van {totalSteps}</span>
              <span className="text-sm text-muted-foreground">{stepTitles[currentStep]}</span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div 
                className="bg-gradient-navy h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit}>
                <Card className="bg-card border-border/50 shadow-lg">
                  <CardContent className="p-8">
                    <AnimatePresence mode="wait">
                      {renderStep()}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-border">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className="gap-2"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Vorige
                      </Button>

                      {currentStep === totalSteps - 1 ? (
                        <Button 
                          type="submit" 
                          className="bg-gradient-navy hover:opacity-90 text-white gap-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Versturen...' : (
                            <>
                              Verstuur Aanvraag
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-gradient-navy hover:opacity-90 text-white gap-2"
                        >
                          Volgende
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Step Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentStep(i)}
                      className={cn(
                        'w-3 h-3 rounded-full transition-all',
                        i === currentStep
                          ? 'bg-primary w-8'
                          : i < currentStep
                          ? 'bg-primary/50'
                          : 'bg-border'
                      )}
                    />
                  ))}
                </div>
              </form>

              {/* Trust indicators */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Clock, text: 'Reactie binnen 24 uur' },
                  { icon: Shield, text: 'Gratis & vrijblijvend' },
                  { icon: Sparkles, text: '100% maatwerk' },
                  { icon: MessageCircle, text: 'Persoonlijk contact' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuotePage;