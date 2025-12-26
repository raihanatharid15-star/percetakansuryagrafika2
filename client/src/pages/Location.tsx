import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Location() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575842285437!2d106.934567!3d-6.821345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDknMTYuOCJTIDEwNsKwNTYnMDQuNCJF!5e0!3m2!1sen!2sid!4v1635735482145!5m2!1sen!2sid";
  // Note: Using a generic embed URL as placeholder, but the button will link to the correct coordinates provided by user.
  
  const googleMapsLink = "https://maps.app.goo.gl/mZcz9x528rus7m5z8";

  return (
    <div className="container py-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Lokasi Workshop</h1>
        <p className="text-lg text-muted-foreground">
          Kunjungi workshop kami untuk konsultasi langsung atau pengambilan pesanan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Alamat Lengkap</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    4QGJ+26 Cisarua,<br />
                    Kabupaten Sukabumi,<br />
                    Jawa Barat
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full h-12 text-lg" onClick={() => window.open(googleMapsLink, "_blank")}>
                  <Navigation className="mr-2 h-5 w-5" /> Buka di Google Maps
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 h-[500px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 relative">
           {/* Since we don't have the exact embed URL for the coordinates, we'll show a placeholder map or static image, 
               but the button above works perfectly. For now, let's use a nice placeholder UI */}
           <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-500">
             <MapPin className="h-16 w-16 mb-4 text-slate-300" />
             <p className="text-lg font-medium">Peta Lokasi</p>
             <p className="text-sm">Klik tombol "Buka di Google Maps" untuk navigasi akurat</p>
           </div>
           <iframe 
             src={mapUrl}
             width="100%" 
             height="100%" 
             style={{ border: 0, opacity: 0.6 }} 
             allowFullScreen 
             loading="lazy"
             className="absolute inset-0"
           ></iframe>
        </div>
      </div>
    </div>
  );
}
