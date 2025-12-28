import { FlowButton } from "@/components/ui/flow-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Logos3 } from "@/components/ui/logos3";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileText, Printer, FileSpreadsheet, Flag, CreditCard, Mail, Wallet, MessageCircle, Zap, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: FileText,
      title: t('home.service_form'),
      desc: t('home.service_form_desc'),
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Printer,
      title: t('home.service_a3'),
      desc: t('home.service_a3_desc'),
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      icon: FileSpreadsheet,
      title: t('home.service_nota'),
      desc: t('home.service_nota_desc'),
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      icon: Flag,
      title: t('home.service_banner'),
      desc: t('home.service_banner_desc'),
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      icon: CreditCard,
      title: t('home.service_card'),
      desc: t('home.service_card_desc'),
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
    {
      icon: Mail,
      title: t('home.service_invitation'),
      desc: t('home.service_invitation_desc'),
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
  ];

  const features = [
    {
      title: t('home.why_price'),
      desc: t('home.why_price_desc'),
    },
    {
      title: t('home.why_communicative'),
      desc: t('home.why_communicative_desc'),
    },
    {
      title: t('home.why_urgent'),
      desc: t('home.why_urgent_desc'),
    },
    {
      title: t('home.why_speed'),
      desc: t('home.why_speed_desc'),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Aurora Background */}
      <BackgroundBeamsWithCollision className="h-[90vh]">
      <AuroraBackground className="h-[90vh]">
        <div className="relative flex flex-col gap-8 items-center justify-center px-4 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Professional Printing Service
          </motion.div>
          
          <HeroHighlight containerClassName="h-auto bg-transparent">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
            >
              <Highlight className="text-black dark:text-white">
                {t('home.hero_title')}
              </Highlight>
            </motion.h1>
          </HeroHighlight>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            {t('home.hero_subtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Link href="/contact">
              <FlowButton text={t('home.cta_order')} />
            </Link>
            <Link href="/gallery">
              <button className="px-8 py-3 rounded-full border border-border hover:bg-accent transition-colors font-medium">
                {t('home.cta_gallery')}
              </button>
            </Link>
          </motion.div>
        </div>
      </AuroraBackground>
      </BackgroundBeamsWithCollision>

      {/* Services Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('home.services_title')}</h2>
            <p className="text-muted-foreground text-lg">
              {t('home.services_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3"
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                        {service.title}
                      </h3>
                      <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <div className="bg-muted/30">
        <Logos3 
          heading={t('home.partners_title')}
          logos={[
            { id: 'partner-1', description: 'PT Doosan Jaya Sukabumi', image: '/partner-doosan-jaya-sukabumi.png', className: 'h-16 w-auto object-contain' },
            { id: 'partner-2', description: 'PT Young Hyun Star', image: '/partner-young-hyun-star.png', className: 'h-16 w-auto object-contain' },
            { id: 'partner-3', description: 'PT Busana Indah Global', image: '/partner-busana-indah-global.png', className: 'h-16 w-auto object-contain' },
            { id: 'partner-4', description: 'PT Sengsil Indonesia', image: '/partner-sengsil-indonesia.png', className: 'h-16 w-auto object-contain' },
            { id: 'partner-5', description: 'PT Doosan Dunia Busana', image: '/partner-doosan-dunia-busana.png', className: 'h-16 w-auto object-contain' },
          ]}
        />
      </div>

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
                    <Wallet className="w-10 h-10 text-green-500 mb-4" />
                    <h4 className="font-bold text-lg">{t('home.why_price')}</h4>
                    <p className="text-sm text-muted-foreground">{t('home.why_price_desc')}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                    <MessageCircle className="w-10 h-10 text-blue-500 mb-4" />
                    <h4 className="font-bold text-lg">{t('home.why_communicative')}</h4>
                    <p className="text-sm text-muted-foreground">{t('home.why_communicative_desc')}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                    <Zap className="w-10 h-10 text-orange-500 mb-4" />
                    <h4 className="font-bold text-lg">{t('home.why_urgent')}</h4>
                    <p className="text-sm text-muted-foreground">{t('home.why_urgent_desc')}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                    <Clock className="w-10 h-10 text-purple-500 mb-4" />
                    <h4 className="font-bold text-lg">{t('home.why_speed')}</h4>
                    <p className="text-sm text-muted-foreground">{t('home.why_speed_desc')}</p>
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
