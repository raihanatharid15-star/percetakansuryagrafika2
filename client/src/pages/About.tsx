import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Printer, Users, History, Target } from "lucide-react";

export default function About() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      const { data } = await supabase
        .from("company_profile")
        .select("value")
        .eq("key", "about")
        .single();
      
      if (data) {
        setContent(data.value);
      }
      setLoading(false);
    }
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Tentang Surya Grafika</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {content?.description || "Percetakan Surya Grafika adalah partner percetakan terpercaya Anda."}
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Printer className="h-8 w-8 text-primary" />,
            title: "Teknologi Modern",
            desc: "Mesin cetak terbaru untuk hasil terbaik."
          },
          {
            icon: <Users className="h-8 w-8 text-primary" />,
            title: "Tim Ahli",
            desc: "Didukung tenaga profesional berpengalaman."
          },
          {
            icon: <History className="h-8 w-8 text-primary" />,
            title: "Berpengalaman",
            desc: "Melayani ribuan pelanggan sejak 2015."
          },
          {
            icon: <Target className="h-8 w-8 text-primary" />,
            title: "Fokus Kualitas",
            desc: "Quality control ketat di setiap proses."
          }
        ].map((item, i) => (
          <Card key={i} className="bg-slate-50 border-none">
            <CardContent className="pt-6 text-center space-y-3">
              <div className="flex justify-center mb-2">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
            alt="Printing Process" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Dedikasi untuk Kualitas</h2>
          <p className="text-lg text-muted-foreground">
            Kami percaya bahwa setiap cetakan membawa pesan penting. Baik itu undangan pernikahan yang penuh kebahagiaan, kartu nama yang merepresentasikan profesionalisme, atau brosur yang membawa peluang bisnis.
          </p>
          <p className="text-lg text-muted-foreground">
            Itulah mengapa kami tidak hanya sekadar mencetak, tapi kami memastikan setiap detail, warna, dan finishing dikerjakan dengan presisi tinggi untuk menyampaikan pesan Anda dengan sempurna.
          </p>
        </div>
      </div>
    </div>
  );
}
