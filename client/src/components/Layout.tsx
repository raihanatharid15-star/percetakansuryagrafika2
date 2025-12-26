import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Printer, Phone, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Galeri", href: "/gallery" },
    { label: "Kontak", href: "/contact" },
    { label: "Lokasi", href: "/location" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 font-bold text-xl text-primary cursor-pointer">
              <Printer className="h-6 w-6" />
              <span>Surya Grafika</span>
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
            <Button asChild size="sm">
              <Link href="/contact">Minta Penawaran</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
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
              <Button asChild className="w-full">
                <Link href="/contact">Minta Penawaran</Link>
              </Button>
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
                <Printer className="h-6 w-6" />
                <span>Surya Grafika</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Solusi percetakan terpercaya untuk segala kebutuhan bisnis dan personal Anda. Kualitas terbaik dengan harga kompetitif.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Menu</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/"><span className="hover:text-primary cursor-pointer">Beranda</span></Link></li>
                <li><Link href="/gallery"><span className="hover:text-primary cursor-pointer">Galeri</span></Link></li>
                <li><Link href="/contact"><span className="hover:text-primary cursor-pointer">Kontak</span></Link></li>
                <li><Link href="/location"><span className="hover:text-primary cursor-pointer">Lokasi</span></Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Undangan Pernikahan</li>
                <li>Kartu Nama</li>
                <li>Brosur & Flyer</li>
                <li>Spanduk & Banner</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Hubungi Kami</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>4QGJ+26 Cisarua, Kabupaten Sukabumi, Jawa Barat</span>
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
            &copy; {new Date().getFullYear()} Percetakan Surya Grafika. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
