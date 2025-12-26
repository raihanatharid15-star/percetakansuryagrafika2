import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  const phoneNumber = "6285860765740";
  const displayPhone = "+62 858-6076-5740";
  const email = "info@suryagrafika.com";

  return (
    <div className="container py-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Hubungi Kami</h1>
        <p className="text-lg text-muted-foreground">
          Siap mendiskusikan kebutuhan cetak Anda? Hubungi kami melalui WhatsApp atau Email.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="grid gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <p className="text-muted-foreground mb-2">Respon Cepat (08:00 - 17:00)</p>
                  <Button 
                    variant="outline" 
                    className="text-green-600 border-green-200 hover:bg-green-50"
                    onClick={() => window.open(`https://wa.me/${phoneNumber}`, "_blank")}
                  >
                    Chat Sekarang
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telepon</h3>
                  <p className="text-muted-foreground mb-1">{displayPhone}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground mb-1">{email}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-slate-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Jam Operasional</h3>
                  <p className="text-muted-foreground">Senin - Sabtu: 08:00 - 17:00 WIB</p>
                  <p className="text-muted-foreground">Minggu: Libur</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium">Nama Lengkap</label>
              <Input placeholder="Nama Anda" className="bg-white" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email / WhatsApp</label>
              <Input placeholder="Kontak yang bisa dihubungi" className="bg-white" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subjek</label>
              <Input placeholder="Perihal pesan Anda" className="bg-white" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Pesan</label>
              <Textarea placeholder="Tulis pesan Anda di sini..." className="min-h-[150px] bg-white" />
            </div>
            <Button type="submit" className="w-full h-12 text-lg">Kirim Pesan</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
