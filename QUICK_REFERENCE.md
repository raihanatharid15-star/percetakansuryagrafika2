# 🚀 Quick Reference - Edit Website

## 📁 File Penting untuk Edit

### Halaman Utama
```
client/src/pages/
├── Home.tsx       → Halaman beranda
├── About.tsx      → Halaman tentang kami
├── Gallery.tsx    → Halaman galeri produk
├── Contact.tsx    → Halaman kontak
└── Location.tsx   → Halaman lokasi
```

### Terjemahan
```
client/src/lib/translations.ts  → Edit teks Indonesia & English
```

### Gambar & Assets
```
client/public/  → Semua gambar, logo, favicon
```

### Styling
```
client/src/index.css  → Warna, font, style global
```

### Komponen UI
```
client/src/components/ui/  → Button, Card, Dialog, dll
```

---

## ⚡ Command Cepat

### Development
```bash
cd /home/ubuntu/percetakan-surya-grafika
pnpm dev          # Jalankan dev server
pnpm build        # Build production
pnpm check        # Cek error TypeScript
```

### Git & Deploy
```bash
git add .
git commit -m "Pesan commit"
git push origin main    # Auto-deploy ke Vercel!
```

---

## 🔗 Links Penting

- **GitHub**: https://github.com/raihanatharid15-star/percetakansuryagrafika2
- **Vercel**: https://percetakansuryagrafika2-raihans-projects-bb783d4f.vercel.app
- **Local Dev**: http://localhost:5173

---

## 🎨 Edit Cepat

### Ubah Judul Website
`client/index.html` → `<title>Judul Baru</title>`

### Ubah Logo
Replace: `client/public/logo.webp`

### Ubah Warna Tema
`client/src/index.css` → Edit variabel `--primary`, `--secondary`

### Tambah Gambar Produk
1. Upload ke `client/public/`
2. Edit `client/src/pages/Gallery.tsx`

### Ubah Kontak
`client/src/pages/Contact.tsx` → Edit email, phone, address

---

## 🆘 Quick Fix

### Error saat dev
```bash
rm -rf node_modules && pnpm install && pnpm dev
```

### Gambar tidak muncul
Gunakan path: `/nama-file.png` (dengan slash di depan)

### Deploy gagal
```bash
pnpm build  # Test build local
# Fix error yang muncul
git push origin main  # Deploy ulang
```

---

**Dokumentasi Lengkap**: Lihat `PANDUAN_EDIT.md`
