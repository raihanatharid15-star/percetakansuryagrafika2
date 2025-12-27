import { FlowButton } from "@/components/ui/flow-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers, Palette, Printer, Zap, ShieldCheck, Clock, Wallet, Award } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Palette,
      title: t('home.service_invitation'),
      desc: t('home.service_invitation_desc'),
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
    {
      icon: Layers,
      title: t('home.service_business'),
      desc: t('home.service_business_desc'),
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Printer,
      title: t('home.service_banner'),
      desc: t('home.service_banner_desc'),
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      icon: Zap,
      title: t('home.service_sticker'),
      desc: t('home.service_sticker_desc'),
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  const features = [
    {
      title: t('home.why_quality'),
      desc: t('home.why_quality_desc'),
    },
    {
      title: t('home.why_speed'),
      desc: t('home.why_speed_desc'),
    },
    {
      title: t('home.why_price'),
      desc: t('home.why_price_desc'),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Aurora Background */}
      <AuroraBackground className="h-[90vh]">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-8 items-center justify-center px-4 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Professional Printing Service
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            {t('home.hero_title')}
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            {t('home.hero_subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/contact">
              <FlowButton text={t('home.cta_order')} />
            </Link>
            <Link href="/gallery">
              <button className="px-8 py-3 rounded-full border border-border hover:bg-accent transition-colors font-medium">
                {t('home.cta_gallery')}
              </button>
            </Link>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* Services Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('home.services_title')}</h2>
            <p className="text-muted-foreground text-lg">
              {t('home.services_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-transparent border-y border-border/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {t('home.why_us_title')}
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="pt-4">
                <Link href="/contact">
                  <FlowButton text={t('home.cta_order')} icon={ArrowRight} />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl blur-3xl -z-10" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                    <ShieldCheck className="w-10 h-10 text-green-500 mb-4" />
                    <h4 className="font-bold text-lg">Quality</h4>
                    <p className="text-sm text-muted-foreground">Premium materials</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                    <Clock className="w-10 h-10 text-blue-500 mb-4" />
                    <h4 className="font-bold text-lg">Fast</h4>
                    <p className="text-sm text-muted-foreground">On-time delivery</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                    <Wallet className="w-10 h-10 text-orange-500 mb-4" />
                    <h4 className="font-bold text-lg">Affordable</h4>
                    <p className="text-sm text-muted-foreground">Best value</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                    <Award className="w-10 h-10 text-purple-500 mb-4" />
                    <h4 className="font-bold text-lg">Expert</h4>
                    <p className="text-sm text-muted-foreground">Skilled team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
