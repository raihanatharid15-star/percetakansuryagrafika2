import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { MapView } from "@/components/Map";

export default function Contact() {
  const [contactInfo, setContactInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContact() {
      const { data } = await supabase
        .from("company_profile")
        .select("value")
        .eq("key", "contact")
        .single();
      
      if (data) {
        setContactInfo(data.value);
      }
      setLoading(false);
    }
    fetchContact();
  }, []);

  const handleMapReady = (map: google.maps.Map) => {
    // Koordinat contoh (Jakarta)
    const position = { lat: -6.2088, lng: 106.8456 };
    
    map.setCenter(position);
    map.setZoom(15);
    
    new google.maps.Marker({
      position: position,
      map: map,
      title: "Percetakan Surya Grafika"
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container py-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Hubungi Kami</h1>
        <p className="text-lg text-muted-foreground">
          Siap mendiskusikan kebutuhan cetak Anda? Kunjungi workshop kami atau hubungi kami secara online.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Alamat Workshop</h3>
                  <p className="text-muted-foreground">
                    {contactInfo?.address || "Jl. Contoh No. 123, Jakarta"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Telepon</h3>
                  <p className="text-muted-foreground">
                    {contactInfo?.phone || "+62 812-3456-7890"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    {contactInfo?.email || "info@suryagrafika.com"}
                  </p>
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={() => window.open(`https://wa.me/${contactInfo?.whatsapp || "6281234567890"}`, "_blank")}>
                <MessageCircle className="mr-2 h-5 w-5" /> Chat WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="lg:col-span-2 h-[400px] rounded-xl overflow-hidden border">
          <MapView onMapReady={handleMapReady} />
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-slate-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Kirim Pesan</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nama Lengkap</label>
              <Input placeholder="Nama Anda" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="email@contoh.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Subjek</label>
            <Input placeholder="Perihal pesan Anda" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Pesan</label>
            <Textarea placeholder="Tulis pesan Anda di sini..." className="min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full">Kirim Pesan</Button>
        </form>
      </div>
    </div>
  );
}
