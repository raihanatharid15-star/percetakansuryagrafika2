# 💡 Contoh-Contoh Edit Website

Berikut adalah contoh konkret bagaimana mengedit berbagai bagian website.

---

## 1. Mengedit Layanan di Halaman Home

**File**: `client/src/pages/Home.tsx`

**Lokasi**: Sekitar baris 16-60

### Contoh: Menambah Layanan Baru

**Sebelum:**
```typescript
const services = [
  {
    icon: FileText,
    title: t('home.service_form'),
    desc: t('home.service_form_desc'),
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  // ... layanan lainnya
];
```

**Sesudah (menambah layanan baru):**
```typescript
const services = [
  {
    icon: FileText,
    title: t('home.service_form'),
    desc: t('home.service_form_desc'),
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  // ... layanan lainnya
  {
    icon: BookOpen,  // Import dari lucide-react
    title: "Cetak Buku",
    desc: "Cetak buku berkualitas tinggi dengan harga terjangkau",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
];
```

**Jangan lupa import icon:**
```typescript
// Di bagian atas file, tambahkan BookOpen
import { ArrowRight, CheckCircle2, FileText, Printer, FileSpreadsheet, Flag, CreditCard, Mail, Wallet, MessageCircle, Zap, Clock, BookOpen } from "lucide-react";
```

---

## 2. Mengedit Teks di Translations

**File**: `client/src/lib/translations.ts`

### Contoh: Mengubah Teks Menu

**Sebelum:**
```typescript
export const translations = {
  id: {
    home: "Beranda",
    about: "Tentang Kami",
    gallery: "Galeri",
    contact: "Kontak",
    location: "Lokasi",
  },
  en: {
    home: "Home",
    about: "About Us",
    gallery: "Gallery",
    contact: "Contact",
    location: "Location",
  }
}
```

**Sesudah (menambah menu baru):**
```typescript
export const translations = {
  id: {
    home: "Beranda",
    about: "Tentang Kami",
    gallery: "Galeri",
    contact: "Kontak",
    location: "Lokasi",
    services: "Layanan",  // ← Tambahan baru
  },
  en: {
    home: "Home",
    about: "About Us",
    gallery: "Gallery",
    contact: "Contact",
    location: "Location",
    services: "Services",  // ← Tambahan baru
  }
}
```

---

## 3. Mengganti Logo

### Cara 1: Replace File Langsung
1. Siapkan logo baru dengan nama `logo.webp`
2. Replace file di `client/public/logo.webp`
3. Done!

### Cara 2: Gunakan Nama File Berbeda
1. Upload logo baru ke `client/public/`, misal `logo-baru.png`
2. Cari file yang menggunakan logo (biasanya di Layout.tsx atau Header)
3. Ubah path:

**Sebelum:**
```typescript
<img src="/logo.webp" alt="Logo" />
```

**Sesudah:**
```typescript
<img src="/logo-baru.png" alt="Logo" />
```

---

## 4. Menambah Gambar Produk di Gallery

**File**: `client/src/pages/Gallery.tsx`

### Langkah-langkah:

1. **Upload gambar** ke `client/public/`, misal `produk-brosur.png`

2. **Edit Gallery.tsx**, cari array products:

**Sebelum:**
```typescript
const products = [
  {
    name: "Cetak Form",
    image: "/cetak-form.png",
    category: "Form"
  },
  {
    name: "Cetak A3",
    image: "/cetak-a3.png",
    category: "Large Format"
  },
  // ... produk lainnya
];
```

**Sesudah:**
```typescript
const products = [
  {
    name: "Cetak Form",
    image: "/cetak-form.png",
    category: "Form"
  },
  {
    name: "Cetak A3",
    image: "/cetak-a3.png",
    category: "Large Format"
  },
  // ... produk lainnya
  {
    name: "Cetak Brosur",
    image: "/produk-brosur.png",
    category: "Marketing"
  },
];
```

---

## 5. Mengubah Warna Tema

**File**: `client/src/index.css`

### Contoh: Ubah Warna Primary (Utama)

**Sebelum:**
```css
:root {
  --primary: 220 90% 56%;  /* Biru */
  --primary-foreground: 210 40% 98%;
}
```

**Sesudah (ubah ke hijau):**
```css
:root {
  --primary: 142 76% 36%;  /* Hijau */
  --primary-foreground: 210 40% 98%;
}
```

**Tips**: Gunakan tool seperti https://uicolors.app/create untuk generate warna HSL

---

## 6. Mengedit Informasi Kontak

**File**: `client/src/pages/Contact.tsx`

### Contoh: Ubah Email dan Telepon

Cari bagian yang menampilkan kontak:

**Sebelum:**
```typescript
const contactInfo = {
  email: "Suryagrafikagroup@gmail.com",
  phone: "+62 812-3456-7890",
  whatsapp: "+62 812-3456-7890",
  address: "Jl. Contoh No. 123, Jakarta"
}
```

**Sesudah:**
```typescript
const contactInfo = {
  email: "info@suryagrafika.com",
  phone: "+62 821-9999-8888",
  whatsapp: "+62 821-9999-8888",
  address: "Jl. Raya Sukabumi No. 456, Sukabumi"
}
```

---

## 7. Menambah Section Baru di Home

**File**: `client/src/pages/Home.tsx`

### Contoh: Tambah Section "Mengapa Memilih Kami"

Tambahkan di dalam return statement, setelah section services:

```typescript
{/* Section Mengapa Memilih Kami */}
<section className="py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Mengapa Memilih Kami?
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="text-center">
        <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-green-500" />
        <h3 className="text-xl font-semibold mb-2">Kualitas Terjamin</h3>
        <p className="text-muted-foreground">
          Menggunakan mesin dan bahan berkualitas tinggi
        </p>
      </div>
      <div className="text-center">
        <Clock className="w-12 h-12 mx-auto mb-4 text-blue-500" />
        <h3 className="text-xl font-semibold mb-2">Pengerjaan Cepat</h3>
        <p className="text-muted-foreground">
          Proses cepat tanpa mengurangi kualitas
        </p>
      </div>
      <div className="text-center">
        <Wallet className="w-12 h-12 mx-auto mb-4 text-purple-500" />
        <h3 className="text-xl font-semibold mb-2">Harga Bersaing</h3>
        <p className="text-muted-foreground">
          Harga terjangkau dengan kualitas premium
        </p>
      </div>
    </div>
  </div>
</section>
```

---

## 8. Mengubah Judul dan Meta Description (SEO)

**File**: `client/index.html`

**Sebelum:**
```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Percetakan Surya Grafika</title>
  <meta name="description" content="Percetakan profesional di Sukabumi" />
</head>
```

**Sesudah:**
```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Percetakan Surya Grafika - Cetak Cepat & Berkualitas</title>
  <meta name="description" content="Jasa percetakan profesional di Sukabumi. Cetak form, nota, spanduk, kartu nama, undangan dengan harga terjangkau dan kualitas terbaik." />
  <meta name="keywords" content="percetakan sukabumi, cetak form, cetak nota, cetak spanduk, cetak kartu nama" />
</head>
```

---

## 9. Menambah Link Social Media

**File**: `client/src/components/Layout.tsx` (atau Footer component)

### Contoh: Tambah Icon Instagram & Facebook

```typescript
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

// Di bagian footer:
<div className="flex gap-4">
  <a href="https://instagram.com/suryagrafika" target="_blank" rel="noopener noreferrer">
    <Instagram className="w-6 h-6 hover:text-primary transition" />
  </a>
  <a href="https://facebook.com/suryagrafika" target="_blank" rel="noopener noreferrer">
    <Facebook className="w-6 h-6 hover:text-primary transition" />
  </a>
  <a href="mailto:info@suryagrafika.com">
    <Mail className="w-6 h-6 hover:text-primary transition" />
  </a>
  <a href="tel:+628123456789">
    <Phone className="w-6 h-6 hover:text-primary transition" />
  </a>
</div>
```

---

## 10. Mengubah Font

**File**: `client/src/index.css`

### Contoh: Ganti ke Font Google (Poppins)

1. **Import font di bagian atas file:**
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
```

2. **Ubah font family:**
```css
body {
  font-family: 'Poppins', sans-serif;
}
```

---

## 📝 Workflow Edit Lengkap

### Contoh Kasus: "Saya ingin mengubah warna tema dari biru ke hijau dan menambah produk baru"

#### Step 1: Ubah Warna Tema
Edit file `client/src/index.css` dan ubah `--primary` dari `220 90% 56%` ke `142 76% 36%`

#### Step 2: Tambah Gambar Produk
Upload gambar ke `client/public/produk-baru.png`

#### Step 3: Edit Gallery
Edit `client/src/pages/Gallery.tsx` dan tambah produk baru di array products

#### Step 4: Test
```bash
pnpm dev
# Buka http://localhost:5173
# Cek apakah perubahan sudah benar
```

#### Step 5: Deploy
```bash
git add .
git commit -m "Ubah warna tema ke hijau dan tambah produk baru"
git push origin main
# Tunggu Vercel auto-deploy (2-3 menit)
```

---

## 🎯 Tips Pro

### 1. Edit Bertahap
Jangan edit terlalu banyak sekaligus. Edit satu bagian, test, commit, baru edit bagian lain.

### 2. Gunakan Git Branches (Advanced)
```bash
git checkout -b fitur-baru
# Edit...
git commit -m "Tambah fitur baru"
git push origin fitur-baru
# Merge via GitHub Pull Request
```

### 3. Backup Sebelum Edit Besar
Simpan copy file penting sebelum edit besar-besaran.

### 4. Test di Browser Berbeda
Cek tampilan di Chrome, Firefox, Safari, dan mobile browser.

---

**Semoga contoh-contoh ini membantu! 🚀**

*Untuk pertanyaan lebih lanjut, tanya di chat!*
