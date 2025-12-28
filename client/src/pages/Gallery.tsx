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

  // Fallback data if database is empty
  const fallbackItems = [
    {
      id: "1",
      title: "Undangan Rustic",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
      category: "Undangan"
    },
    {
      id: "2",
      title: "Kartu Nama Elegan",
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800",
      category: "Stationery"
    },
    {
      id: "3",
      title: "Brosur Lipat Tiga",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      category: "Marketing"
    },
    {
      id: "4",
      title: "X-Banner Event",
      image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=800",
      category: "Large Format"
    },
    {
      id: "5",
      title: "Packaging Box",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
      category: "Packaging"
    },
    {
      id: "6",
      title: "Stiker Label",
      image: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?auto=format&fit=crop&q=80&w=800",
      category: "Stiker"
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
