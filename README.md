# Percetakan Surya Grafika - Website

Website modern untuk Percetakan Surya Grafika yang menyediakan berbagai layanan percetakan profesional.

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: TailwindCSS 4 + Framer Motion
- **UI Components**: Radix UI + Custom Components
- **Backend**: Express.js
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel
- **Package Manager**: pnpm

## 📁 Struktur Proyek

```
percetakan-surya-grafika/
├── client/                 # Frontend React application
│   ├── public/            # Static assets (images, favicon)
│   └── src/
│       ├── components/    # Reusable components
│       ├── contexts/      # React contexts (Theme, Language)
│       ├── hooks/         # Custom hooks
│       ├── lib/           # Utilities & Supabase client
│       └── pages/         # Page components
├── server/                # Backend Express server
├── shared/                # Shared constants
└── init-db.mjs           # Database initialization script

```

## 🎨 Fitur

- ✅ Multi-language support (Indonesia & English)
- ✅ Dark/Light theme toggle
- ✅ Responsive design
- ✅ Animated UI components
- ✅ Product gallery
- ✅ Contact form
- ✅ Google Maps integration
- ✅ SEO optimized

## 📄 Halaman

1. **Home** - Hero section dengan layanan utama
2. **About** - Tentang perusahaan
3. **Gallery** - Galeri produk dan portfolio
4. **Contact** - Form kontak dan informasi
5. **Location** - Lokasi workshop dengan peta

## 🛠️ Setup Development

### Prerequisites

- Node.js 22+
- pnpm 10+
- Supabase account
- Vercel account (untuk deployment)

### Installation

1. Clone repository:
```bash
git clone https://github.com/raihanatharid15-star/percetakansuryagrafika2.git
cd percetakan-surya-grafika
```

2. Install dependencies:
```bash
pnpm install
```

3. Setup environment variables:
```bash
cp .env.example .env
```

Edit `.env` dan isi dengan credentials Supabase Anda:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key (optional)
```

4. Initialize database (jika belum):
```bash
node init-db.mjs
```

5. Run development server:
```bash
pnpm dev
```

Website akan berjalan di `http://localhost:5173`

## 🗄️ Database Schema

### Tables

**categories**
- id (UUID, PK)
- name (TEXT)
- slug (TEXT, UNIQUE)
- created_at (TIMESTAMP)

**products**
- id (UUID, PK)
- category_id (UUID, FK)
- name (TEXT)
- slug (TEXT, UNIQUE)
- description (TEXT)
- specifications (JSONB)
- images (TEXT[])
- is_featured (BOOLEAN)
- created_at (TIMESTAMP)

**company_profile**
- id (UUID, PK)
- key (TEXT, UNIQUE)
- value (JSONB)
- created_at (TIMESTAMP)

## 🚀 Deployment

### Vercel

Proyek ini sudah terkonfigurasi untuk deployment di Vercel:

1. Push code ke GitHub
2. Connect repository ke Vercel
3. Set environment variables di Vercel dashboard
4. Deploy!

### Build Production

```bash
pnpm build
```

Output akan ada di folder `dist/`

## 🔧 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Type checking
- `pnpm format` - Format code with Prettier

## 📝 Todo List

Lihat [todo.md](./todo.md) untuk daftar tugas yang sedang dikerjakan.

## 🎨 Design Ideas

Lihat [ideas.md](./ideas.md) untuk konsep desain yang dipertimbangkan.

## 📞 Contact

- Email: Suryagrafikagroup@gmail.com
- WhatsApp: +62 812-3456-7890

## 📄 License

MIT License
