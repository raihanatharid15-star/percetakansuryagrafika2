# 📝 Panduan Lengkap Edit Website Percetakan Surya Grafika

## 🎯 Cara Mengedit Website

Website Anda sudah siap untuk diedit! Berikut adalah panduan lengkap untuk melakukan perubahan.

---

## 1️⃣ Mengedit Konten Halaman

### 📄 Halaman Home (Beranda)
**File**: `client/src/pages/Home.tsx`

Halaman ini berisi:
- Hero section (bagian utama dengan judul besar)
- Layanan yang ditawarkan
- Produk unggulan
- Testimoni pelanggan
- Call-to-action

**Contoh edit teks judul:**
```typescript
// Cari baris seperti ini:
<h1>Percetakan Surya Grafika</h1>

// Ubah menjadi:
<h1>Judul Baru Anda</h1>
```

### 📄 Halaman About (Tentang Kami)
**File**: `client/src/pages/About.tsx`

Berisi informasi tentang perusahaan, sejarah, visi misi, dan tim.

### 📄 Halaman Gallery (Galeri)
**File**: `client/src/pages/Gallery.tsx`

Menampilkan portfolio produk dan hasil cetakan.

**Cara menambah gambar:**
1. Upload gambar ke folder `client/public/`
2. Edit file Gallery.tsx dan tambahkan path gambar

### 📄 Halaman Contact (Kontak)
**File**: `client/src/pages/Contact.tsx`

Berisi form kontak dan informasi kontak perusahaan.

**Edit informasi kontak:**
```typescript
// Cari bagian seperti ini:
const email = "Suryagrafikagroup@gmail.com"
const phone = "+62 812-3456-7890"

// Ubah sesuai kebutuhan
```

### 📄 Halaman Location (Lokasi)
**File**: `client/src/pages/Location.tsx`

Menampilkan peta lokasi workshop.

---

## 2️⃣ Mengedit Terjemahan (Indonesia & English)

**File**: `client/src/lib/translations.ts`

Website mendukung 2 bahasa. Edit file ini untuk mengubah teks dalam kedua bahasa:

```typescript
export const translations = {
  id: {
    home: "Beranda",
    about: "Tentang Kami",
    // ... tambahkan atau edit teks Indonesia
  },
  en: {
    home: "Home",
    about: "About Us",
    // ... tambahkan atau edit teks English
  }
}
```

---

## 3️⃣ Mengedit Gambar & Logo

### Upload Gambar Baru
1. Simpan gambar di folder `client/public/`
2. Gunakan nama file yang jelas, contoh: `produk-baru.png`

### Mengganti Logo
**File logo**: `client/public/logo.webp`
- Ganti file ini dengan logo baru Anda
- Atau upload logo baru dengan nama berbeda dan edit referensinya di kode

### Gambar yang Ada
```
client/public/
├── logo.webp                          # Logo perusahaan
├── about.webp                         # Gambar halaman About
├── cetak-a3.png                       # Produk cetak A3
├── cetak-form.png                     # Produk cetak form
├── kartu-nama.png                     # Produk kartu nama
├── spanduk.png                        # Produk spanduk
├── surat-jalan-nota.png              # Produk surat jalan
├── undangan.png                       # Produk undangan
├── partner-busana-indah-global.png   # Logo partner
├── partner-doosan-dunia-busana.png   # Logo partner
├── partner-doosan-jaya-sukabumi.png  # Logo partner
├── partner-sengsil-indonesia.png     # Logo partner
└── partner-young-hyun-star.png       # Logo partner
```

---

## 4️⃣ Mengedit Warna & Styling

### Warna Utama
**File**: `client/src/index.css`

Edit variabel CSS untuk mengubah warna tema:

```css
:root {
  --primary: 220 90% 56%;      /* Warna utama */
  --secondary: 210 40% 96%;    /* Warna sekunder */
  --accent: 220 90% 56%;       /* Warna aksen */
  /* ... dan lainnya */
}
```

### Custom Styling
Tambahkan CSS custom di file yang sama atau di komponen spesifik.

---

## 5️⃣ Menambah Halaman Baru

### Langkah-langkah:

1. **Buat file halaman baru**
   ```bash
   # Contoh: client/src/pages/Services.tsx
   ```

2. **Isi dengan template React:**
   ```typescript
   export default function Services() {
     return (
       <div className="container mx-auto px-4 py-8">
         <h1>Layanan Kami</h1>
         <p>Konten halaman layanan...</p>
       </div>
     );
   }
   ```

3. **Tambahkan routing di App.tsx:**
   ```typescript
   import Services from './pages/Services';
   
   // Di dalam routing:
   <Route path="/services" component={Services} />
   ```

4. **Tambahkan link di navigasi:**
   Edit `client/src/components/Layout.tsx` untuk menambah menu baru.

---

## 6️⃣ Testing Perubahan

### Test di Local (Komputer Anda)
```bash
cd /home/ubuntu/percetakan-surya-grafika
pnpm dev
```
Buka browser: `http://localhost:5173`

### Cek Error TypeScript
```bash
pnpm check
```

### Build Production (Test Build)
```bash
pnpm build
```

---

## 7️⃣ Deploy Perubahan ke Internet

### Workflow Lengkap:

#### Step 1: Simpan Perubahan
```bash
cd /home/ubuntu/percetakan-surya-grafika
git add .
git commit -m "Deskripsi perubahan yang Anda buat"
```

#### Step 2: Push ke GitHub
```bash
git push origin main
```

#### Step 3: Vercel Auto-Deploy
Vercel akan otomatis mendeteksi perubahan di GitHub dan deploy website baru!

**Cek status deployment:**
- Buka dashboard Vercel: https://vercel.com/
- Atau gunakan tool MCP di sini untuk cek status

---

## 8️⃣ Struktur Komponen Penting

### Layout (Template Halaman)
**File**: `client/src/components/Layout.tsx`
- Header/Navigation
- Footer
- Wrapper untuk semua halaman

### UI Components
**Folder**: `client/src/components/ui/`

Komponen reusable seperti:
- `button.tsx` - Tombol
- `card.tsx` - Kartu
- `dialog.tsx` - Modal/Dialog
- `carousel.tsx` - Slider gambar
- `theme-toggle.tsx` - Toggle dark/light mode
- `language-toggle.tsx` - Toggle bahasa
- Dan banyak lagi...

---

## 9️⃣ Tips & Best Practices

### ✅ DO (Lakukan):
1. **Selalu test di local** sebelum push ke GitHub
2. **Commit dengan pesan jelas**: "Ubah judul halaman home" bukan "update"
3. **Backup file** sebelum edit besar-besaran
4. **Gunakan format gambar modern**: WebP untuk ukuran lebih kecil
5. **Optimasi gambar** sebelum upload (kompres ukuran file)

### ❌ DON'T (Jangan):
1. **Jangan edit file di `node_modules/`** - akan hilang saat install ulang
2. **Jangan push file besar** (>10MB) ke GitHub
3. **Jangan hapus file config** seperti `package.json`, `tsconfig.json`
4. **Jangan edit tanpa backup** jika tidak yakin
5. **Jangan lupa test** sebelum deploy

---

## 🔟 Contoh Edit Umum

### Mengubah Judul Website
**File**: `client/index.html`
```html
<title>Percetakan Surya Grafika</title>
<!-- Ubah menjadi: -->
<title>Judul Baru Anda</title>
```

### Mengubah Nomor WhatsApp
**File**: `client/src/pages/Contact.tsx`
Cari komponen WhatsApp dan ubah nomornya.

### Menambah Produk di Gallery
**File**: `client/src/pages/Gallery.tsx`
```typescript
const products = [
  { name: "Produk 1", image: "/produk1.png" },
  { name: "Produk 2", image: "/produk2.png" },
  // Tambahkan produk baru di sini:
  { name: "Produk Baru", image: "/produk-baru.png" },
]
```

### Mengubah Warna Tombol
**File**: `client/src/components/ui/button.tsx`
Edit className atau style untuk mengubah warna.

---

## 🆘 Troubleshooting

### Error saat `pnpm dev`
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules
pnpm install
pnpm dev
```

### Error TypeScript
```bash
# Cek error detail
pnpm check

# Biasanya error di import atau tipe data
```

### Deployment Vercel Gagal
1. Cek build logs di Vercel dashboard
2. Test build local: `pnpm build`
3. Fix error yang muncul
4. Push ulang ke GitHub

### Gambar Tidak Muncul
1. Pastikan gambar ada di `client/public/`
2. Gunakan path relatif: `/nama-gambar.png` bukan `./nama-gambar.png`
3. Cek case-sensitive: `Logo.png` ≠ `logo.png`

---

## 📚 Resources Tambahan

### Dokumentasi Framework
- **React**: https://react.dev/
- **TypeScript**: https://www.typescriptlang.org/
- **TailwindCSS**: https://tailwindcss.com/
- **Vite**: https://vitejs.dev/

### Belajar Lebih Lanjut
- **React Tutorial**: https://react.dev/learn
- **TailwindCSS Tutorial**: https://tailwindcss.com/docs
- **Git & GitHub**: https://docs.github.com/

---

## 📞 Butuh Bantuan?

Jika ada pertanyaan atau kesulitan, Anda bisa:
1. Tanya di sini (chat dengan saya)
2. Cek dokumentasi di file README.md
3. Lihat contoh kode di file yang sudah ada

---

**Selamat mengedit website! 🎉**

*Dibuat dengan ❤️ untuk Percetakan Surya Grafika*
