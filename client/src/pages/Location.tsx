import { LocationMap } from "@/components/ui/expand-map";
import { FlowButton } from "@/components/ui/flow-button";
import { MapPin, Navigation } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Location() {
  const { t } = useLanguage();
  const googleMapsUrl = "https://maps.app.goo.gl/mZcz9x528rus7m5z8";

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Header Section */}
      <section className="bg-slate-950 py-16 px-4 md:px-6 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="container mx-auto max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 backdrop-blur-sm border border-white/10">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {t('location.title')}
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {t('location.subtitle')}
          </p>
        </div>
      </section>

      {/* Map & Address Section */}
      <section className="flex-1 py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-12">
            
            {/* Interactive Map Component */}
            <div className="w-full flex justify-center">
              <LocationMap 
                location="Cisarua, Sukabumi" 
                coordinates={t('contact.address_value')}
                className="scale-125 md:scale-150 my-10" 
              />
            </div>

            {/* Address Details Card */}
            <div className="bg-card p-8 rounded-2xl shadow-sm border max-w-2xl w-full text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{t('location.address_label')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('contact.address_value')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-lg mx-auto pt-4">
                <div className="space-y-1">
                  <h4 className="font-medium text-foreground">{t('contact.hours_label')}</h4>
                  <p className="text-sm text-muted-foreground">{t('contact.hours_value')}</p>
                  <p className="text-sm text-muted-foreground">{t('contact.sunday_closed')}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium text-foreground">{t('footer.contact')}</h4>
                  <p className="text-sm text-muted-foreground">WhatsApp: +62 858-6076-5740</p>
                  <p className="text-sm text-muted-foreground">Email: info@suryagrafika.com</p>
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <FlowButton 
                    text={t('location.open_maps')}
                    icon={Navigation}
                  />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
