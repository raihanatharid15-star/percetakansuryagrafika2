import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <AuroraBackground className="h-auto min-h-screen py-16 md:py-24">
      <div className="container">
      <div className="max-w-4xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">{t('contact.title')}</h1>
            <p className="text-lg text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="space-y-6">
            <a href="https://wa.me/6285860765740" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-6 rounded-2xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="p-3 rounded-xl bg-green-100 text-green-600">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('contact.wa_label')}</h3>
                <p className="text-muted-foreground">+62 858-6076-5740</p>
              </div>
            </a>

            <a href="mailto:Suryagrafikagroup@gmail.com" className="flex items-start gap-4 p-6 rounded-2xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('contact.email_label')}</h3>
                <p className="text-muted-foreground">Suryagrafikagroup@gmail.com</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/30 border border-border/50">
              <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('contact.address_label')}</h3>
                <p className="text-muted-foreground">
                  {t('contact.address_value')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/30 border border-border/50">
              <div className="p-3 rounded-xl bg-purple-100 text-purple-600">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('contact.hours_label')}</h3>
                <p className="text-muted-foreground">{t('contact.hours_value')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </AuroraBackground>
  );
}
