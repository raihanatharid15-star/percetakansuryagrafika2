import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Loader2, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

type GalleryItem = {
  id: string;
  title: string;
  image: string;
  category: string;
};

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  async function fetchGalleryItems() {
    setLoading(true);
    // Fetch products that have images
    const { data } = await supabase
      .from("products")
      .select("id, name, images, categories(name)")
      .not("images", "is", null);

    if (data) {
      // Flatten the data structure for gallery
      const galleryItems: GalleryItem[] = [];
      data.forEach((product: any) => {
        if (product.images && Array.isArray(product.images)) {
          product.images.forEach((img: string) => {
            galleryItems.push({
              id: product.id,
              title: product.name,
              image: img,
              category: product.categories?.name || "Umum"
            });
          });
        }
      });
      setItems(galleryItems);
    }
    setLoading(false);
  }

  // Sample products data
  const fallbackItems = [
    {
      id: "1",
      title: "Cetak Form",
      image: "/cetak-form.png",
      category: "Kebutuhan skala besar untuk kebutuhan produksi, catatan office, dll"
    },
    {
      id: "2",
      title: "Cetak A3",
      image: "/cetak-a3.png",
      category: "Cetak dokumen ukuran besar"
    },
    {
      id: "3",
      title: "Surat Jalan / Nota",
      image: "/surat-jalan-nota.png",
      category: "Dokumen pengiriman dan transaksi"
    },
    {
      id: "4",
      title: "Spanduk",
      image: "/spanduk.png",
      category: "Media promosi outdoor"
    },
    {
      id: "5",
      title: "Kartu Nama",
      image: "/kartu-nama.png",
      category: "Identitas profesional bisnis"
    },
    {
      id: "6",
      title: "Undangan",
      image: "/undangan.png",
      category: "Undangan pernikahan dan acara"
    }
  ];

  const displayItems = items.length > 0 ? items : fallbackItems;

  return (
    <div className="container py-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t('gallery.title')}</h1>
        <p className="text-lg text-muted-foreground">
          {t('gallery.subtitle')}
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {displayItems.map((item, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-zoom-in bg-slate-100 mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="text-white h-8 w-8 drop-shadow-md" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <p className="text-white/80 text-xs">{item.category}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      )}
    </div>
  );
}
