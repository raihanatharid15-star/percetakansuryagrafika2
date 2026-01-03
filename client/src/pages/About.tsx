import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function About() {
  const { t } = useLanguage();

  return (
    <AuroraBackground className="h-auto min-h-screen py-16 md:py-24">
      <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/10 rounded-3xl blur-3xl -z-10" />
          <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-xl">
            <img 
              src="/about.webp" 
              alt="Surya Grafika Workshop" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary">
              {t('about.title')}
            </h1>
            <p className="text-lg text-foreground/80 font-semibold">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="space-y-4 text-foreground/90 leading-relaxed text-base md:text-lg">
            <p className="font-medium">{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
            <p>{t('about.p4')}</p>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 mt-6">
              <p className="font-medium text-primary italic">
                "{t('about.p5')}"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </AuroraBackground>
  );
}
