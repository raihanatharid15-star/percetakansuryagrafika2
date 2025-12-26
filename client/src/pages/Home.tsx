import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Printer, Clock, Award } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Printer className="h-10 w-10 text-primary" />,
      title: "Kualitas Cetak Premium",
      description: "Menggunakan mesin cetak terbaru untuk hasil yang tajam dan warna akurat."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Pengerjaan Cepat",
      description: "Komitmen waktu pengerjaan yang tepat sesuai deadline kebutuhan Anda."
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Harga Kompetitif",
      description: "Penawaran harga terbaik dengan kualitas yang tidak dikorbankan."
    }
  ];

  const categories = [
    {
      title: "Undangan Pernikahan",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
      slug: "undangan-pernikahan"
    },
    {
      title: "Kartu Nama & Stationery",
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800",
      slug: "kartu-nama"
    },
    {
      title: "Brosur & Marketing",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      slug: "brosur-flyer"
    },
    {
      title: "Large Format",
      image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=800",
      slug: "spanduk-banner"
    }
  ];

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=2000")' }}
        />
        <div className="container relative z-10 text-center space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Cetak Ide Anda Menjadi Nyata
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Percetakan Surya Grafika melayani segala kebutuhan cetak profesional Anda. Dari undangan elegan hingga materi promosi bisnis yang berdampak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/products">Lihat Katalog</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-none bg-slate-50">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Layanan Kami</h2>
          <Link href="/products">
            <a className="flex items-center gap-2 text-primary font-medium hover:underline">
              Lihat Semua <ArrowRight className="h-4 w-4" />
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.slug} href={`/products?category=${category.slug}`}>
              <a className="group block overflow-hidden rounded-lg relative aspect-[4/5]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <span className="inline-flex items-center text-sm font-medium opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    Lihat Produk <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="bg-primary rounded-2xl p-8 md:p-16 text-center text-primary-foreground space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Butuh Penawaran Khusus?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Kami siap membantu mewujudkan kebutuhan cetak custom Anda. Konsultasikan ide Anda dengan tim ahli kami.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-4">
            <Link href="/contact">
              <span className="flex items-center gap-2">
                Konsultasi via WhatsApp <CheckCircle className="h-5 w-5" />
              </span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
