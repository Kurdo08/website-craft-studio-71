export type Language = 'nl' | 'en';

export const translations = {
  nl: {
    // Navigation
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      services: 'Diensten',
      about: 'Over Ons',
      testimonials: 'Reviews',
      quote: 'Offerte',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      badge: 'Premium Webdesign Bureau',
      title: 'Wij creëren',
      titleHighlight: 'digitale meesterwerken',
      subtitle: 'Exclusieve websites die uw merk naar een hoger niveau tillen. Vakmanschap, verfijning en resultaat - dat is onze belofte.',
      cta: 'Start Uw Project',
      ctaSecondary: 'Bekijk Ons Werk',
    },
    // Services
    services: {
      title: 'Onze Expertise',
      subtitle: 'Vakmanschap in elk digitaal aspect',
      webdesign: {
        title: 'Webdesign',
        description: 'Bespoke websites die uw merk perfect vertalen naar een digitale ervaring die indruk maakt.',
        features: ['Uniek maatwerk design', 'Responsive voor alle apparaten', 'Conversie-geoptimaliseerd'],
      },
      webshop: {
        title: 'E-commerce',
        description: 'Luxe webshops met naadloze checkout ervaring en geavanceerd voorraadbeheer.',
        features: ['Veilige betalingsintegratie', 'Voorraadbeheer', 'Klantportaal'],
      },
      seo: {
        title: 'SEO & Marketing',
        description: 'Strategische optimalisatie voor maximale online zichtbaarheid en bereik.',
        features: ['Technische SEO', 'Content strategie', 'Analytics & Rapportage'],
      },
      maintenance: {
        title: 'Onderhoud & Support',
        description: 'Zorgeloos onderhoud met persoonlijke ondersteuning wanneer u het nodig heeft.',
        features: ['24/7 monitoring', 'Regelmatige updates', 'Priority support'],
      },
      cta: 'Meer Informatie',
    },
    // Why Choose Us / About
    about: {
      title: 'Waarom Wij?',
      subtitle: 'Meer dan een bureau - uw digitale partner',
      experience: {
        title: 'Jarenlange Expertise',
        description: 'Met meer dan 150 succesvolle projecten weten wij precies wat werkt.',
      },
      custom: {
        title: 'Exclusief Maatwerk',
        description: 'Geen templates. Elk project is een uniek kunstwerk op maat.',
      },
      support: {
        title: 'Persoonlijke Aanpak',
        description: 'Direct contact met uw dedicated projectmanager.',
      },
      results: {
        title: 'Meetbaar Resultaat',
        description: 'Websites die niet alleen imponeren, maar ook converteren.',
      },
      story: 'Ons Verhaal',
      storyText: 'Al meer dan vijf jaar helpen wij ambitieuze bedrijven hun digitale aanwezigheid te transformeren. Wij geloven dat elke website een meesterwerk kan zijn - een perfecte balans tussen esthetiek en functionaliteit.',
    },
    // Portfolio
    portfolio: {
      title: 'Ons Portfolio',
      subtitle: 'Ontdek onze meest recente meesterwerken',
      viewProject: 'Bekijk Project',
      allProjects: 'Bekijk Alle Projecten',
      backToPortfolio: 'Terug naar Portfolio',
      projectDetails: 'Project Details',
      challenge: 'De Uitdaging',
      solution: 'Onze Oplossing',
      results: 'Het Resultaat',
      technologies: 'Gebruikte Technologieën',
      visitWebsite: 'Bezoek Website',
      nextProject: 'Volgend Project',
      prevProject: 'Vorig Project',
    },
    // Testimonials
    testimonials: {
      title: 'Wat Klanten Zeggen',
      subtitle: 'Ervaringen van tevreden opdrachtgevers',
      readMore: 'Lees Meer Reviews',
    },
    // Quote Form
    quote: {
      title: 'Start Uw Project',
      subtitle: 'Deel uw visie en ontvang binnen 24 uur een persoonlijke offerte',
      form: {
        name: 'Naam',
        company: 'Bedrijfsnaam',
        email: 'E-mailadres',
        phone: 'Telefoonnummer',
        websiteType: 'Type Website',
        websiteTypes: {
          business: 'Zakelijke Website',
          webshop: 'Webshop',
          portfolio: 'Portfolio',
          landing: 'Landing Page',
          other: 'Anders',
        },
        style: 'Gewenste Stijl',
        styles: {
          minimal: 'Strak / Minimalistisch',
          colorful: 'Vrolijk / Kleurrijk',
          modern: 'Modern / Trendy',
          classic: 'Klassiek / Premium',
          custom: 'Eigen Idee',
        },
        budget: 'Budget Indicatie',
        budgets: {
          starter: '€2.500 - €5.000',
          medium: '€5.000 - €10.000',
          premium: '€10.000 - €25.000',
          enterprise: '€25.000+',
          unknown: 'Bespreek ik graag',
        },
        deadline: 'Gewenste Opleverdatum',
        description: 'Projectomschrijving',
        descriptionPlaceholder: 'Beschrijf uw visie, doelen en eventuele inspiratie...',
        files: 'Documenten Uploaden',
        filesDescription: 'Upload uw logo, huisstijl of inspiratie materiaal',
        submit: 'Verstuur Aanvraag',
        submitting: 'Versturen...',
        success: 'Bedankt voor uw aanvraag! Wij nemen binnen 24 uur persoonlijk contact met u op.',
      },
    },
    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'Laten we kennismaken',
      phone: 'Telefoon',
      email: 'E-mail',
      whatsapp: 'WhatsApp',
      address: 'Locatie',
      openWhatsapp: 'Open WhatsApp',
      callUs: 'Bel Direct',
      emailUs: 'Stuur E-mail',
      schedule: 'Plan Gesprek',
    },
    // Footer
    footer: {
      description: 'Premium webdesign voor ambitieuze merken die willen opvallen.',
      quickLinks: 'Navigatie',
      services: 'Diensten',
      contact: 'Contact',
      rights: 'Alle rechten voorbehouden.',
      privacy: 'Privacybeleid',
      terms: 'Algemene Voorwaarden',
    },
    // Common
    common: {
      learnMore: 'Meer Info',
      getStarted: 'Aan de Slag',
      viewAll: 'Bekijk Alles',
      back: 'Terug',
    },
    // Pages
    pages: {
      services: {
        hero: 'Onze Diensten',
        heroSubtitle: 'Van concept tot lancering - wij leveren excellentie op elk niveau',
      },
      portfolio: {
        hero: 'Ons Portfolio',
        heroSubtitle: 'Ontdek hoe wij merken transformeren naar digitale meesterwerken',
      },
      about: {
        hero: 'Over WebStudio',
        heroSubtitle: 'De passie en expertise achter uw digitale succes',
      },
      testimonials: {
        hero: 'Klantervaringen',
        heroSubtitle: 'Ontdek waarom bedrijven voor ons kiezen',
      },
      quote: {
        hero: 'Start Uw Project',
        heroSubtitle: 'Deel uw visie en laten we samen iets bijzonders creëren',
      },
      contact: {
        hero: 'Contact',
        heroSubtitle: 'Wij staan klaar om uw vragen te beantwoorden',
      },
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      services: 'Services',
      about: 'About',
      testimonials: 'Reviews',
      quote: 'Quote',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      badge: 'Premium Web Design Agency',
      title: 'We create',
      titleHighlight: 'digital masterpieces',
      subtitle: 'Exclusive websites that elevate your brand to new heights. Craftsmanship, refinement and results - that is our promise.',
      cta: 'Start Your Project',
      ctaSecondary: 'View Our Work',
    },
    // Services
    services: {
      title: 'Our Expertise',
      subtitle: 'Craftsmanship in every digital aspect',
      webdesign: {
        title: 'Web Design',
        description: 'Bespoke websites that perfectly translate your brand into a digital experience that impresses.',
        features: ['Unique custom design', 'Responsive for all devices', 'Conversion-optimized'],
      },
      webshop: {
        title: 'E-commerce',
        description: 'Luxury webshops with seamless checkout experience and advanced inventory management.',
        features: ['Secure payment integration', 'Inventory management', 'Customer portal'],
      },
      seo: {
        title: 'SEO & Marketing',
        description: 'Strategic optimization for maximum online visibility and reach.',
        features: ['Technical SEO', 'Content strategy', 'Analytics & Reporting'],
      },
      maintenance: {
        title: 'Maintenance & Support',
        description: 'Worry-free maintenance with personal support when you need it.',
        features: ['24/7 monitoring', 'Regular updates', 'Priority support'],
      },
      cta: 'Learn More',
    },
    // Why Choose Us / About
    about: {
      title: 'Why Us?',
      subtitle: 'More than an agency - your digital partner',
      experience: {
        title: 'Years of Expertise',
        description: 'With over 150 successful projects, we know exactly what works.',
      },
      custom: {
        title: 'Exclusive Custom Work',
        description: 'No templates. Every project is a unique custom masterpiece.',
      },
      support: {
        title: 'Personal Approach',
        description: 'Direct contact with your dedicated project manager.',
      },
      results: {
        title: 'Measurable Results',
        description: 'Websites that not only impress, but also convert.',
      },
      story: 'Our Story',
      storyText: 'For over five years we have been helping ambitious businesses transform their digital presence. We believe every website can be a masterpiece - a perfect balance between aesthetics and functionality.',
    },
    // Portfolio
    portfolio: {
      title: 'Our Portfolio',
      subtitle: 'Discover our most recent masterpieces',
      viewProject: 'View Project',
      allProjects: 'View All Projects',
      backToPortfolio: 'Back to Portfolio',
      projectDetails: 'Project Details',
      challenge: 'The Challenge',
      solution: 'Our Solution',
      results: 'The Results',
      technologies: 'Technologies Used',
      visitWebsite: 'Visit Website',
      nextProject: 'Next Project',
      prevProject: 'Previous Project',
    },
    // Testimonials
    testimonials: {
      title: 'What Clients Say',
      subtitle: 'Experiences from satisfied clients',
      readMore: 'Read More Reviews',
    },
    // Quote Form
    quote: {
      title: 'Start Your Project',
      subtitle: 'Share your vision and receive a personal quote within 24 hours',
      form: {
        name: 'Name',
        company: 'Company Name',
        email: 'Email Address',
        phone: 'Phone Number',
        websiteType: 'Website Type',
        websiteTypes: {
          business: 'Business Website',
          webshop: 'E-commerce',
          portfolio: 'Portfolio',
          landing: 'Landing Page',
          other: 'Other',
        },
        style: 'Preferred Style',
        styles: {
          minimal: 'Clean / Minimalist',
          colorful: 'Bright / Colorful',
          modern: 'Modern / Trendy',
          classic: 'Classic / Premium',
          custom: 'Custom Idea',
        },
        budget: 'Budget Range',
        budgets: {
          starter: '€2,500 - €5,000',
          medium: '€5,000 - €10,000',
          premium: '€10,000 - €25,000',
          enterprise: '€25,000+',
          unknown: 'Prefer to discuss',
        },
        deadline: 'Desired Deadline',
        description: 'Project Description',
        descriptionPlaceholder: 'Describe your vision, goals and any inspiration...',
        files: 'Upload Documents',
        filesDescription: 'Upload your logo, brand guidelines or inspiration material',
        submit: 'Submit Request',
        submitting: 'Submitting...',
        success: 'Thank you for your request! We will personally contact you within 24 hours.',
      },
    },
    // Contact
    contact: {
      title: 'Contact',
      subtitle: "Let's connect",
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      address: 'Location',
      openWhatsapp: 'Open WhatsApp',
      callUs: 'Call Direct',
      emailUs: 'Send Email',
      schedule: 'Schedule Call',
    },
    // Footer
    footer: {
      description: 'Premium web design for ambitious brands that want to stand out.',
      quickLinks: 'Navigation',
      services: 'Services',
      contact: 'Contact',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
    },
    // Common
    common: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      viewAll: 'View All',
      back: 'Back',
    },
    // Pages
    pages: {
      services: {
        hero: 'Our Services',
        heroSubtitle: 'From concept to launch - we deliver excellence at every level',
      },
      portfolio: {
        hero: 'Our Portfolio',
        heroSubtitle: 'Discover how we transform brands into digital masterpieces',
      },
      about: {
        hero: 'About WebStudio',
        heroSubtitle: 'The passion and expertise behind your digital success',
      },
      testimonials: {
        hero: 'Client Experiences',
        heroSubtitle: 'Discover why businesses choose us',
      },
      quote: {
        hero: 'Start Your Project',
        heroSubtitle: 'Share your vision and let us create something special together',
      },
      contact: {
        hero: 'Contact',
        heroSubtitle: 'We are ready to answer your questions',
      },
    },
  },
};

export const getTranslation = (lang: Language) => translations[lang];