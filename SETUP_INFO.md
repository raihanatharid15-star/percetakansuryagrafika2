# Setup Information - Percetakan Surya Grafika

## 📋 Status Project

Website Percetakan Surya Grafika telah berhasil di-setup dan siap untuk diedit!

## 🔗 Koneksi

### GitHub Repository
- **Repository**: https://github.com/raihanatharid15-star/percetakansuryagrafika2
- **Branch**: main
- **Status**: ✅ Connected

### Vercel Deployment
- **Team**: raihan's projects
- **Team ID**: team_zToRknVgKX957SuXaqC2M2cA
- **Project ID**: prj_JnrcxiWxwdsr82cIVIxVMXLX2Kkb
- **Project Name**: percetakansuryagrafika2
- **Framework**: Vite
- **Node Version**: 24.x
- **Production URL**: https://percetakansuryagrafika2-raihans-projects-bb783d4f.vercel.app
- **Git URL**: https://percetakansuryagrafika2-git-main-raihans-projects-bb783d4f.vercel.app
- **Status**: ⚠️ Latest deployment ERROR (perlu diperbaiki)

## 📁 Struktur Project

```
/home/ubuntu/percetakan-surya-grafika/
├── client/                 # Frontend React application
│   ├── public/            # Static assets (images, favicon)
│   └── src/
│       ├── components/    # Reusable components
│       ├── contexts/      # React contexts (Theme, Language)
│       ├── hooks/         # Custom hooks
│       ├── lib/           # Utilities & Supabase client
│       └── pages/         # Page components
│           ├── Home.tsx
│           ├── About.tsx
│           ├── Gallery.tsx
│           ├── Contact.tsx
│           └── Location.tsx
├── server/                # Backend Express server
├── shared/                # Shared constants
└── package.json           # Dependencies
```

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: TailwindCSS 4 + Framer Motion
- **UI Components**: Radix UI + Custom Components
- **Backend**: Express.js
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel
- **Package Manager**: pnpm

## 🚀 Development Commands

### Start Development Server
```bash
cd /home/ubuntu/percetakan-surya-grafika
pnpm dev
```
Website akan berjalan di `http://localhost:5173`

### Build Production
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm preview
```

### Type Checking
```bash
pnpm check
```

### Format Code
```bash
pnpm format
```

## 📝 Workflow untuk Edit Website

### 1. Edit File
Edit file yang diinginkan di direktori `client/src/`:
- **Pages**: `client/src/pages/` (Home.tsx, About.tsx, Gallery.tsx, Contact.tsx, Location.tsx)
- **Components**: `client/src/components/`
- **Styles**: `client/src/index.css`
- **Translations**: `client/src/lib/translations.ts`

### 2. Test Locally
```bash
pnpm dev
```

### 3. Commit Changes
```bash
git add .
git commit -m "Deskripsi perubahan"
```

### 4. Push ke GitHub
```bash
git push origin main
```

### 5. Deploy ke Vercel
Vercel akan otomatis deploy setelah push ke GitHub!

## ⚙️ Environment Variables

Jika perlu menggunakan Supabase atau Google Maps, buat file `.env`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## 🎨 Fitur Website

- ✅ Multi-language support (Indonesia & English)
- ✅ Dark/Light theme toggle
- ✅ Responsive design
- ✅ Animated UI components
- ✅ Product gallery
- ✅ Contact form
- ✅ Google Maps integration
- ✅ SEO optimized

## 📄 Halaman Website

1. **Home** - Hero section dengan layanan utama
2. **About** - Tentang perusahaan
3. **Gallery** - Galeri produk dan portfolio
4. **Contact** - Form kontak dan informasi
5. **Location** - Lokasi workshop dengan peta

## 🔧 Troubleshooting

### Jika deployment Vercel error:
1. Cek build logs: Gunakan tool Vercel MCP untuk melihat logs
2. Pastikan semua dependencies terinstall
3. Pastikan tidak ada error TypeScript: `pnpm check`
4. Test build locally: `pnpm build`

### Jika ada conflict saat push:
```bash
git pull origin main --rebase
git push origin main
```

## 📞 Contact Info

- Email: Suryagrafikagroup@gmail.com
- WhatsApp: +62 812-3456-7890

---

**Ready to edit!** 🎉
