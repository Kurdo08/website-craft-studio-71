import { useState } from 'react';
import { Send, Upload, X, CheckCircle, Sparkles, Clock, Shield, MessageCircle, Calendar, User, Building, MapPin, Globe, FileText, Settings, HelpCircle } from 'lucide-react';
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
import { motion } from 'framer-motion';
import { staggerContainer, slideInLeft, slideInRight } from '@/hooks/useScrollAnimation';

const QuotePage = () => {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  // Options
  const typeAanvraagOptions = [
    { value: 'nieuwe-website', label: 'Nieuwe website' },
    { value: 'website-redesign', label: 'Website redesign' },
    { value: 'nieuwe-webshop', label: 'Nieuwe webshop' },
    { value: 'webshop-redesign', label: 'Webshop redesign' },
    { value: 'onderhoud', label: 'Onderhoud' },
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
    { value: 'nieuw-ontwerp', label: 'Een nieuw ontwerp' },
    { value: 'bestaand-verbeteren', label: 'Bestaande website verbeteren' },
    { value: 'technische-hulp', label: 'Technische hulp' },
    { value: 'content-hulp', label: 'Hulp met content/teksten' },
    { value: 'seo', label: 'SEO / vindbaarheid' },
    { value: 'hosting-domein', label: 'Hosting & domeinnaam' },
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

  const currentDate = new Date().toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

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
                    Bedankt voor uw aanvraag! Wij nemen binnen 24 uur persoonlijk contact met u op.
                  </p>
                  <Button onClick={() => {
                    setIsSubmitted(false);
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero with Image */}
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
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                {language === 'nl' ? 'Offerte Aanvragen' : 'Request Quote'}
              </h1>
              <p className="text-lg text-muted-foreground">
                {language === 'nl' 
                  ? 'Vul het formulier in en ontvang binnen 24 uur een persoonlijke offerte'
                  : 'Fill in the form and receive a personal quote within 24 hours'}
              </p>
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
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Section 1: Type Aanvraag */}
                  <Card className="bg-card border-border/50 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-navy rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                        <h2 className="font-display text-xl font-bold text-foreground">Type Aanvraag</h2>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label>Type aanvraag *</Label>
                          <Select value={formData.typeAanvraag} onValueChange={(v) => setFormData(prev => ({ ...prev, typeAanvraag: v }))}>
                            <SelectTrigger className="h-12 bg-background">
                              <SelectValue placeholder="Selecteer type" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {typeAanvraagOptions.map(opt => (
                                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Aanvraag voor *</Label>
                          <Select value={formData.aanvraagVoor} onValueChange={(v) => setFormData(prev => ({ ...prev, aanvraagVoor: v }))}>
                            <SelectTrigger className="h-12 bg-background">
                              <SelectValue placeholder="Selecteer type" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {aanvraagVoorOptions.map(opt => (
                                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Section 2: Contact Gegevens */}
                  <Card className="bg-card border-border/50 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-navy rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                        <h2 className="font-display text-xl font-bold text-foreground">Contact Gegevens</h2>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-6">
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
                    </CardContent>
                  </Card>

                  {/* Section 3: Website of Webshop */}
                  <Card className="bg-card border-border/50 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-navy rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                        <h2 className="font-display text-xl font-bold text-foreground">Website of Webshop</h2>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <Label>Gaat het om een website of webshop? *</Label>
                          <RadioGroup 
                            value={formData.websiteOfWebshop} 
                            onValueChange={(v) => setFormData(prev => ({ ...prev, websiteOfWebshop: v }))}
                            className="flex flex-wrap gap-4"
                          >
                            {websiteOfWebshopOptions.map(opt => (
                              <div key={opt.value} className="flex items-center space-x-2">
                                <RadioGroupItem value={opt.value} id={opt.value} />
                                <Label htmlFor={opt.value} className="cursor-pointer">{opt.label}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        <div className="space-y-3">
                          <Label>Ik zoek een webdesigner voor:</Label>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {webdesignerVoorOptions.map(opt => (
                              <div key={opt.value} className="flex items-center space-x-2">
                                <Checkbox 
                                  id={`webdesigner-${opt.value}`}
                                  checked={formData.webdesignerVoor.includes(opt.value)}
                                  onCheckedChange={(checked) => handleCheckboxChange('webdesignerVoor', opt.value, checked as boolean)}
                                />
                                <Label htmlFor={`webdesigner-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Section 4: Functies */}
                  <Card className="bg-card border-border/50 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-navy rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                        <h2 className="font-display text-xl font-bold text-foreground">Gewenste Functies</h2>
                      </div>
                      
                      <div className="space-y-8">
                        {(formData.websiteOfWebshop === 'website' || formData.websiteOfWebshop === 'beide' || !formData.websiteOfWebshop) && (
                          <div className="space-y-3">
                            <Label className="flex items-center gap-2">
                              <Settings className="w-4 h-4" /> Wat moet je website kunnen?
                            </Label>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {websiteFunctiesOptions.map(opt => (
                                <div key={opt.value} className="flex items-center space-x-2">
                                  <Checkbox 
                                    id={`website-${opt.value}`}
                                    checked={formData.websiteFuncties.includes(opt.value)}
                                    onCheckedChange={(checked) => handleCheckboxChange('websiteFuncties', opt.value, checked as boolean)}
                                  />
                                  <Label htmlFor={`website-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {(formData.websiteOfWebshop === 'webshop' || formData.websiteOfWebshop === 'beide') && (
                          <div className="space-y-3">
                            <Label className="flex items-center gap-2">
                              <Settings className="w-4 h-4" /> Wat moet je webshop kunnen?
                            </Label>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {webshopFunctiesOptions.map(opt => (
                                <div key={opt.value} className="flex items-center space-x-2">
                                  <Checkbox 
                                    id={`webshop-${opt.value}`}
                                    checked={formData.webshopFuncties.includes(opt.value)}
                                    onCheckedChange={(checked) => handleCheckboxChange('webshopFuncties', opt.value, checked as boolean)}
                                  />
                                  <Label htmlFor={`webshop-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Section 5: Extra Vragen */}
                  <Card className="bg-card border-border/50 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-navy rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                        <h2 className="font-display text-xl font-bold text-foreground">Extra Informatie</h2>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <Label>Wil je hulp met de inhoud van de website of webshop?</Label>
                          <RadioGroup 
                            value={formData.hulpMetInhoud} 
                            onValueChange={(v) => setFormData(prev => ({ ...prev, hulpMetInhoud: v }))}
                            className="space-y-2"
                          >
                            {hulpMetInhoudOptions.map(opt => (
                              <div key={opt.value} className="flex items-center space-x-2">
                                <RadioGroupItem value={opt.value} id={`inhoud-${opt.value}`} />
                                <Label htmlFor={`inhoud-${opt.value}`} className="cursor-pointer">{opt.label}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        <div className="space-y-3">
                          <Label>Heb je al een domeinnaam en hosting geregeld?</Label>
                          <RadioGroup 
                            value={formData.domeinnaamEnHosting} 
                            onValueChange={(v) => setFormData(prev => ({ ...prev, domeinnaamEnHosting: v }))}
                            className="space-y-2"
                          >
                            {domeinnaamEnHostingOptions.map(opt => (
                              <div key={opt.value} className="flex items-center space-x-2">
                                <RadioGroupItem value={opt.value} id={`hosting-${opt.value}`} />
                                <Label htmlFor={`hosting-${opt.value}`} className="cursor-pointer">{opt.label}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        <div className="space-y-3">
                          <Label>Wil je dat de webdesigner ook na oplevering onderhoud doet?</Label>
                          <RadioGroup 
                            value={formData.onderhoudNaOplevering} 
                            onValueChange={(v) => setFormData(prev => ({ ...prev, onderhoudNaOplevering: v }))}
                            className="flex flex-wrap gap-4"
                          >
                            {onderhoudOptions.map(opt => (
                              <div key={opt.value} className="flex items-center space-x-2">
                                <RadioGroupItem value={opt.value} id={`onderhoud-${opt.value}`} />
                                <Label htmlFor={`onderhoud-${opt.value}`} className="cursor-pointer">{opt.label}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label>Hoeveel pagina's moet de website of webshop bevatten?</Label>
                          <Select value={formData.aantalPaginas} onValueChange={(v) => setFormData(prev => ({ ...prev, aantalPaginas: v }))}>
                            <SelectTrigger className="h-12 bg-background max-w-sm">
                              <SelectValue placeholder="Selecteer aantal" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {aantalPaginasOptions.map(opt => (
                                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Section 6: Controle & Details */}
                  <Card className="bg-card border-border/50 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-navy rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                        <h2 className="font-display text-xl font-bold text-foreground">Controle & Details</h2>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label>Wie doet de aanvraag?</Label>
                          <Select value={formData.wieDoetAanvraag} onValueChange={(v) => setFormData(prev => ({ ...prev, wieDoetAanvraag: v }))}>
                            <SelectTrigger className="h-12 bg-background max-w-sm">
                              <SelectValue placeholder="Selecteer rol" />
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
                            <HelpCircle className="w-4 h-4" /> Ter controle: wat is de reden van deze aanvraag?
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
                            <Globe className="w-4 h-4" /> Wat is de (gewenste) website of webshop URL?
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
                          <Label>Wanneer moet de website, webshop of app af zijn?</Label>
                          <Select value={formData.wanneerAf} onValueChange={(v) => setFormData(prev => ({ ...prev, wanneerAf: v }))}>
                            <SelectTrigger className="h-12 bg-background max-w-sm">
                              <SelectValue placeholder="Selecteer deadline" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border z-50">
                              {wanneerAfOptions.map(opt => (
                                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Section 7: Bestanden */}
                  <Card className="bg-card border-border/50 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-navy rounded-full flex items-center justify-center text-white font-bold text-sm">7</div>
                        <h2 className="font-display text-xl font-bold text-foreground">Documenten (optioneel)</h2>
                      </div>
                      
                      <div className="space-y-4">
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
                    </CardContent>
                  </Card>

                  {/* Submit */}
                  <Button type="submit" size="lg" className="w-full bg-gradient-navy hover:opacity-90 text-white shadow-xl h-14 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'Versturen...'
                    ) : (
                      <>
                        Verstuur Aanvraag
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
                      alt="Website mockup"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-sm font-medium text-foreground">Uw toekomstige website</p>
                      <p className="text-xs text-muted-foreground">Professioneel & op maat gemaakt</p>
                    </div>
                  </div>

                  {/* Trust Card */}
                  <Card className="bg-soft border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="w-6 h-6 text-primary" />
                        <h3 className="font-display font-bold text-foreground">Waarom wij?</h3>
                      </div>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          100% maatwerk, geen templates
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Transparante prijzen
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Persoonlijke begeleiding
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Snelle oplevering
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Contact Card */}
                  <Card className="bg-gradient-navy text-white">
                    <CardContent className="p-6">
                      <h3 className="font-display font-bold mb-2">Liever direct contact?</h3>
                      <p className="text-white/80 text-sm mb-4">
                        Bel of app ons voor een vrijblijvend gesprek.
                      </p>
                      <div className="space-y-2 text-sm">
                        <a href="tel:+31612345678" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          +31 6 12345678
                        </a>
                      </div>
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
