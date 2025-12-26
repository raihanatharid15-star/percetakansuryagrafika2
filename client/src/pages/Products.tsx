import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { supabase, type Product, type Category } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Products() {
  const [location, setLocation] = useLocation();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Parse query params manually since wouter doesn't have a built-in hook for it
  const searchParams = new URLSearchParams(window.location.search);
  const activeCategorySlug = searchParams.get("category");

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, [activeCategorySlug]);

  async function fetchCategories() {
    const { data } = await supabase.from("categories").select("*").order("name");
    if (data) setCategories(data);
  }

  async function fetchProducts() {
    setLoading(true);
    let query = supabase
      .from("products")
      .select("*, categories(name, slug)")
      .order("created_at", { ascending: false });

    if (activeCategorySlug) {
      // First get category ID
      const { data: catData } = await supabase
        .from("categories")
        .select("id")
        .eq("slug", activeCategorySlug)
        .single();
      
      if (catData) {
        query = query.eq("category_id", catData.id);
      }
    }

    const { data } = await query;
    if (data) setProducts(data as Product[]);
    setLoading(false);
  }

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryChange = (slug: string | null) => {
    if (slug) {
      setLocation(`/products?category=${slug}`);
    } else {
      setLocation("/products");
    }
  };

  return (
    <div className="container py-10 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Katalog Produk</h1>
          <p className="text-muted-foreground mt-1">
            Temukan berbagai solusi cetak berkualitas untuk kebutuhan Anda
          </p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Cari produk..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Filter className="h-4 w-4" /> Kategori
            </h3>
            <div className="flex flex-wrap md:flex-col gap-2">
              <Button
                variant={!activeCategorySlug ? "default" : "ghost"}
                className="justify-start"
                onClick={() => handleCategoryChange(null)}
              >
                Semua Produk
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategorySlug === category.slug ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => handleCategoryChange(category.slug)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20 border rounded-lg bg-slate-50">
              <p className="text-muted-foreground">Tidak ada produk yang ditemukan.</p>
              {activeCategorySlug && (
                <Button variant="link" onClick={() => handleCategoryChange(null)}>
                  Lihat semua produk
                </Button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`}>
                  <a className="group h-full">
                    <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-lg border-slate-200">
                      <div className="aspect-square relative overflow-hidden bg-slate-100">
                        {product.images && product.images[0] ? (
                          <img 
                            src={product.images[0]} 
                            alt={product.name}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full text-muted-foreground">
                            No Image
                          </div>
                        )}
                        {product.is_featured && (
                          <Badge className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-600">
                            Unggulan
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-4 flex-1">
                        <div className="text-xs text-muted-foreground mb-2">
                          {product.categories?.name || "Uncategorized"}
                        </div>
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {product.description}
                        </p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button className="w-full" variant="secondary">
                          Lihat Detail
                        </Button>
                      </CardFooter>
                    </Card>
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
