import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import { LocationMap } from "@/components/ui/expand-map";

export default function Location() {
  const mapUrl = "https://maps.app.goo.gl/mZcz9x528rus7m5z8";

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Header Section */}
      <section className="bg-slate-950 py-16 px-4 md:px-6 text-center">
        <div className="container mx-auto max-w-3xl space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Lokasi Workshop
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Kunjungi workshop kami untuk konsultasi langsung atau melihat sampel bahan cetakan.
          </p>
        </div>
      </section>

      {/* Map & Address Section */}
      <section className="flex-1 py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-12">
            
            {/* Interactive Map Component */}
            <div className="w-full flex justify-center">
              <LocationMap 
                location="Cisarua, Sukabumi" 
                coordinates="4QGJ+26 Cisarua, Kab. Sukabumi, Jawa Barat"
                className="scale-125 md:scale-150 my-10" 
              />
            </div>

            {/* Address Details Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border max-w-2xl w-full text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">Alamat Lengkap</h3>
                <p className="text-slate-600 leading-relaxed">
                  4QGJ+26 Cisarua, Kabupaten Sukabumi, Jawa Barat
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-lg mx-auto pt-4">
                <div className="space-y-1">
                  <h4 className="font-medium text-slate-900">Jam Operasional</h4>
                  <p className="text-sm text-slate-500">Senin - Sabtu: 08.00 - 17.00</p>
                  <p className="text-sm text-slate-500">Minggu: Tutup</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium text-slate-900">Kontak Langsung</h4>
                  <p className="text-sm text-slate-500">WhatsApp: +62 858-6076-5740</p>
                  <p className="text-sm text-slate-500">Email: info@suryagrafika.com</p>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild size="lg" className="w-full md:w-auto gap-2">
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="h-4 w-4" />
                    Buka di Google Maps
                  </a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
