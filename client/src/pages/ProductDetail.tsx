import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { supabase, type Product } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, ArrowLeft, CheckCircle, MessageCircle, Share2 } from "lucide-react";
import { toast } from "sonner";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:slug");
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    if (params?.slug) {
      fetchProduct(params.slug);
    }
  }, [params?.slug]);

  async function fetchProduct(slug: string) {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*, categories(name, slug)")
      .eq("slug", slug)
      .single();

    if (error) {
      console.error("Error fetching product:", error);
      toast.error("Gagal memuat produk");
    } else if (data) {
      setProduct(data as Product);
      if (data.images && data.images.length > 0) {
        setActiveImage(data.images[0]);
      }
    }
    setLoading(false);
  }

  const handleWhatsAppClick = () => {
    if (!product) return;
    
    const phoneNumber = "6281234567890"; // Ganti dengan nomor asli nanti dari company_profile
    const message = `Halo, saya tertarik dengan produk *${product.name}* yang saya lihat di website Surya Grafika. Boleh minta info lebih lanjut?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Produk Tidak Ditemukan</h2>
        <Button asChild>
          <Link href="/products">Kembali ke Katalog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <Button variant="ghost" asChild className="mb-8 pl-0 hover:pl-2 transition-all">
        <Link href="/products">
          <ArrowLeft className="h-4 w-4 mr-2" /> Kembali ke Katalog
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden border">
            {activeImage ? (
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                No Image Available
              </div>
            )}
          </div>
          {product.images && product.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                    activeImage === img ? "border-primary ring-2 ring-primary/20" : "border-transparent hover:border-slate-300"
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="text-sm">
                {product.categories?.name}
              </Badge>
              {product.is_featured && (
                <Badge className="bg-yellow-500 hover:bg-yellow-600 text-sm">
                  Unggulan
                </Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
            <Button size="lg" className="flex-1 text-lg h-12" onClick={handleWhatsAppClick}>
              <MessageCircle className="mr-2 h-5 w-5" /> Tanya via WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="flex-1 text-lg h-12">
              <Share2 className="mr-2 h-5 w-5" /> Bagikan
            </Button>
          </div>

          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger 
                value="specs" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
              >
                Spesifikasi
              </TabsTrigger>
              <TabsTrigger 
                value="shipping" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
              >
                Pengiriman & Pengerjaan
              </TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="pt-6">
              {product.specifications ? (
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm font-medium text-muted-foreground capitalize">
                        {key.replace(/_/g, " ")}
                      </dt>
                      <dd className="text-base font-medium text-slate-900 mt-1">
                        {String(value)}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="text-muted-foreground">Spesifikasi detail belum tersedia.</p>
              )}
            </TabsContent>
            <TabsContent value="shipping" className="pt-6 space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                <div>
                  <h4 className="font-medium">Estimasi Pengerjaan</h4>
                  <p className="text-sm text-muted-foreground">3-5 hari kerja setelah desain disetujui (tergantung kuantitas).</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                <div>
                  <h4 className="font-medium">Pengiriman</h4>
                  <p className="text-sm text-muted-foreground">Tersedia pengiriman via JNE, J&T, GoSend, atau ambil di tempat.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
