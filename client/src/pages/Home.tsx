import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Printer, Clock, Award, Palette, Layers, Zap } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Printer className="h-8 w-8 text-cyan-500" />,
      title: "High Precision Print",
      description: "Teknologi cetak terbaru untuk hasil tajam dan warna akurat."
    },
    {
      icon: <Clock className="h-8 w-8 text-magenta-500" />,
      title: "On-Time Delivery",
      description: "Komitmen waktu pengerjaan yang tepat sesuai deadline."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Best Value",
      description: "Kualitas premium dengan penawaran harga yang kompetitif."
    }
  ];

  const services = [
    {
      title: "Undangan Pernikahan",
      desc: "Desain elegan & eksklusif",
      icon: <Palette className="h-10 w-10 mb-4 text-primary" />,
      color: "bg-blue-50"
    },
    {
      title: "Kartu Nama & Stationery",
      desc: "Branding profesional bisnis",
      icon: <Layers className="h-10 w-10 mb-4 text-primary" />,
      color: "bg-slate-50"
    },
    {
      title: "Brosur & Marketing",
      desc: "Media promosi efektif",
      icon: <Zap className="h-10 w-10 mb-4 text-primary" />,
      color: "bg-indigo-50"
    },
    {
      title: "Large Format",
      desc: "Spanduk & Banner outdoor",
      icon: <Printer className="h-10 w-10 mb-4 text-primary" />,
      color: "bg-cyan-50"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Graphic Style */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        {/* Abstract CMYK Elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-magenta-500/20 blur-[100px]" />
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-sm text-slate-300 backdrop-blur-xl">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Siap Melayani Kebutuhan Cetak Anda
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Cetak Ide Menjadi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Karya Nyata
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Percetakan Surya Grafika menghadirkan solusi cetak profesional. 
              Dari kebutuhan personal hingga korporat, kami pastikan setiap detail sempurna.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full justify-center">
              <Button asChild size="lg" className="text-lg h-14 px-8 rounded-full bg-white text-slate-950 hover:bg-slate-200">
                <Link href="/gallery">Lihat Portfolio</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg h-14 px-8 rounded-full border-slate-700 text-white hover:bg-slate-800 hover:text-white bg-transparent">
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start space-y-4 p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="p-3 rounded-xl bg-slate-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 md:px-6 space-y-16">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Layanan Kami</h2>
              <p className="text-slate-600 text-lg max-w-xl">
                Berbagai solusi cetak untuk mendukung kebutuhan branding dan event Anda.
              </p>
            </div>
            <Link href="/gallery">
              <span className="inline-flex items-center gap-2 text-primary font-semibold hover:underline cursor-pointer text-lg">
                Lihat Semua Karya <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className={`p-8 h-full flex flex-col items-start ${service.color} bg-opacity-50`}>
                  {service.icon}
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 px-6 py-20 md:px-20 text-center">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            
            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Siap Mewujudkan Ide Anda?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Jangan ragu untuk berkonsultasi. Tim kami siap membantu memberikan solusi cetak terbaik sesuai budget Anda.
              </p>
              <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white mt-4">
                <Link href="/contact">
                  <span className="flex items-center gap-2 cursor-pointer">
                    Konsultasi via WhatsApp <CheckCircle className="h-5 w-5" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
