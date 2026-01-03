import { FlowButton } from "@/components/ui/flow-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Logos3 } from "@/components/ui/logos3";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileText, Printer, FileSpreadsheet, Flag, CreditCard, Mail, Wallet, MessageCircle, Zap, Clock, Award, Users, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: FileText,
      title: t('home.service_form'),
      desc: t('home.service_form_desc'),
      color: "text-white",
      bg: "bg-primary",
    },
    {
      icon: Printer,
      title: t('home.service_a3'),
      desc: t('home.service_a3_desc'),
      color: "text-white",
      bg: "bg-primary",
    },
    {
      icon: FileSpreadsheet,
      title: t('home.service_nota'),
      desc: t('home.service_nota_desc'),
      color: "text-white",
      bg: "bg-primary",
    },
    {
      icon: Flag,
      title: t('home.service_banner'),
      desc: t('home.service_banner_desc'),
      color: "text-white",
      bg: "bg-primary",
    },
    {
      icon: CreditCard,
      title: t('home.service_card'),
      desc: t('home.service_card_desc'),
      color: "text-white",
      bg: "bg-primary",
    },
    {
      icon: Mail,
      title: t('home.service_invitation'),
      desc: t('home.service_invitation_desc'),
      color: "text-white",
      bg: "bg-primary",
    },
  ];

  const features = [
    {
      icon: Award,
      title: t('home.why_price'),
      desc: t('home.why_price_desc'),
    },
    {
      icon: Users,
      title: t('home.why_communicative'),
      desc: t('home.why_communicative_desc'),
    },
    {
      icon: Clock,
      title: t('home.why_urgent'),
      desc: t('home.why_urgent_desc'),
    },
    {
      icon: TrendingUp,
      title: t('home.why_speed'),
      desc: t('home.why_speed_desc'),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/hero-background.png)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col gap-8 items-center justify-center px-4 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-white mr-2 animate-pulse"></span>
            Professional Printing Service
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-tight"
          >
            {t('home.hero_title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
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
              <button className="px-8 py-4 rounded-lg bg-white text-primary hover:bg-white/90 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                {t('home.cta_order')}
              </button>
            </Link>
            <Link href="/gallery">
              <button className="px-8 py-4 rounded-lg border-2 border-white text-white hover:bg-white/10 transition-all font-semibold text-lg">
                {t('home.cta_gallery')}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">{t('home.services_title')}</h2>
            <p className="text-muted-foreground text-lg">
              {t('home.services_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${service.bg} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30 group cursor-pointer`}
                >
                  <div className={`${service.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-12 h-12" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${service.bg === 'bg-primary' ? 'text-white' : 'text-foreground'}`}>
                    {service.title}
                  </h3>
                  <p className={`${service.bg === 'bg-primary' ? 'text-white/80' : 'text-muted-foreground'} leading-relaxed`}>
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{t('home.why_title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">{t('home.partners_title')}</h2>
            <p className="text-muted-foreground text-lg">
              {t('home.partners_subtitle')}
            </p>
          </div>
          <Logos3 logos={[
            {
              id: "doosan-jaya-sukabumi",
              description: "PT Doosan Jaya Sukabumi",
              image: "/partner-doosan-jaya-sukabumi.png",
              className: "h-20 w-auto object-contain"
            },
            {
              id: "young-hyun-star",
              description: "PT Young Hyun Star",
              image: "/partner-young-hyun-star.png",
              className: "h-20 w-auto object-contain"
            },
            {
              id: "busana-indah-global",
              description: "PT Busana Indah Global",
              image: "/partner-busana-indah-global.png",
              className: "h-20 w-auto object-contain"
            },
            {
              id: "sengsil-indonesia",
              description: "PT Sengsil Indonesia",
              image: "/partner-sengsil-indonesia.png",
              className: "h-20 w-auto object-contain"
            },
            {
              id: "doosan-dunia-busana",
              description: "PT Doosan Dunia Busana",
              image: "/partner-doosan-dunia-busana.png",
              className: "h-20 w-auto object-contain"
            }
          ]} />
        </div>
      </section>


      <FloatingWhatsApp />
    </div>
  );
}
