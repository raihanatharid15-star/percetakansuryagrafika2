import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Printer, Phone, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ui/theme-toggle";
import { LanguageToggle } from "./ui/language-toggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedGradientBackground } from "./ui/animated-gradient-background";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.gallery'), href: "/gallery" },
    { label: t('nav.contact'), href: "/contact" },
    { label: t('nav.location'), href: "/location" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 relative">
      <AnimatedGradientBackground />
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 font-bold text-xl text-primary cursor-pointer">
              <img src="/logo.webp" alt="Surya Grafika Logo" className="h-8 w-auto object-contain" />
              <span className="hidden sm:inline-block">Surya Grafika</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                    location === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </div>
              </Link>
            ))}
            
            <div className="flex items-center gap-2 ml-2 border-l pl-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t p-4 bg-background">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary block py-2 cursor-pointer",
                      location === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl text-primary">
                <img src="/logo.webp" alt="Surya Grafika Logo" className="h-8 w-auto object-contain" />
                <span>Surya Grafika</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('footer.about_desc')}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t('footer.quick_links')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}><span className="hover:text-primary cursor-pointer">{item.label}</span></Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t('home.services_title')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{t('home.service_invitation')}</li>
                <li>{t('home.service_business')}</li>
                <li>{t('home.service_banner')}</li>
                <li>{t('home.service_sticker')}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{t('contact.address_value')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+62 858-6076-5740</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>info@suryagrafika.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Percetakan Surya Grafika. {t('footer.rights')}
          </div>
        </div>
      </footer>
    </div>
  );
}
