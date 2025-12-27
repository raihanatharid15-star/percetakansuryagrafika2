import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FlowButton } from "@/components/ui/flow-button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const formSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Format pesan WhatsApp
    const text = `Halo Surya Grafika, saya ${values.name}. ${values.message}`;
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/6285860765740?text=${encodedText}`;
    
    // Redirect ke WhatsApp
    window.open(waUrl, '_blank');
    setIsSubmitting(false);
  }

  return (
    <div className="container py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
                <p className="text-muted-foreground">info@suryagrafika.com</p>
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

        {/* Contact Form */}
        <div className="bg-card p-8 rounded-3xl border shadow-sm">
          <h2 className="text-2xl font-bold mb-6">{t('contact.form_title')}</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.name_label')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('contact.name_placeholder')} {...field} className="h-12 rounded-xl" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.message_label')}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t('contact.message_placeholder')}
                        className="min-h-[150px] rounded-xl resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FlowButton 
                type="submit" 
                disabled={isSubmitting}
                text={t('contact.send_wa')}
                className="w-full justify-center"
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
