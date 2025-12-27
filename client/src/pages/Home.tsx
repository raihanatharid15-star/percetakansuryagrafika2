import { Link } from "wouter";
import { Printer, Award, Clock, DollarSign, ArrowRight } from "lucide-react";
import { FlowButton } from "@/components/ui/flow-button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('home.service_invitation'),
      description: t('home.service_invitation_desc'),
      icon: <Printer className="h-8 w-8 text-primary" />,
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: t('home.service_business'),
      description: t('home.service_business_desc'),
      icon: <Award className="h-8 w-8 text-primary" />,
      color: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      title: t('home.service_banner'),
      description: t('home.service_banner_desc'),
      icon: <ArrowRight className="h-8 w-8 text-primary" />,
      color: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      title: t('home.service_sticker'),
      description: t('home.service_sticker_desc'),
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      color: "bg-green-50 dark:bg-green-900/20"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-background">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/5 blur-[120px]" />
          
          {/* CMYK Decorative Dots */}
          <div className="absolute top-20 right-20 flex gap-2 opacity-20">
            <div className="w-4 h-4 rounded-full bg-cyan-500" />
            <div className="w-4 h-4 rounded-full bg-magenta-500" />
            <div className="w-4 h-4 rounded-full bg-yellow-500" />
            <div className="w-4 h-4 rounded-full bg-black" />
          </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Printer className="w-4 h-4" />
              <span>Digital Printing & Offset</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
              {t('home.hero_title')}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('home.hero_subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact">
                <FlowButton text={t('home.cta_order')} />
              </Link>
              <Link href="/gallery">
                <FlowButton text={t('home.cta_gallery')} className="border-muted-foreground/20 hover:border-primary/50" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('home.services_title')}</h2>
            <p className="text-muted-foreground">
              {t('home.services_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${service.color}`}
              >
                <div className="mb-6 bg-background w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {t('home.why_us_title')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('home.why_quality')}</h3>
                    <p className="text-muted-foreground">{t('home.why_quality_desc')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('home.why_speed')}</h3>
                    <p className="text-muted-foreground">{t('home.why_speed_desc')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('home.why_price')}</h3>
                    <p className="text-muted-foreground">{t('home.why_price_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-muted relative z-10 border border-border">
                {/* Graphic Pattern Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-8 opacity-20">
                    <div className="w-32 h-32 rounded-full border-4 border-primary" />
                    <div className="w-32 h-32 rounded-lg bg-primary" />
                    <div className="w-32 h-32 rounded-lg bg-primary" />
                    <div className="w-32 h-32 rounded-full border-4 border-primary" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
