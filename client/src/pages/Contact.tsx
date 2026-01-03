import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AuroraBackground } from "@/components/ui/aurora-background";ntext";

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
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/30 border border-border/50">
              <div className="p-3 rounded-xl bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('contact.wa_label')}</h3>
                <p className="text-muted-foreground">+62 858-6076-5740</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/30 border border-border/50">
              <div className="p-3 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('contact.email_label')}</h3>
                <p className="text-muted-foreground">Suryagrafikagroup@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/30 border border-border/50">
              <div className="p-3 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
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
              <div className="p-3 rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
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
