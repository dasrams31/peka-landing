# Peka Landing Page — peka.ai.id

Landing page "coming soon" untuk Peka: kumpulan SaaS AI & analisis sentimen
Bahasa Indonesia. Tema gelap + kuning ala Vercel.

## Stack

- React 19 + TypeScript + Vite 8
- Tailwind CSS v4 (@tailwindcss/vite)
- Tanpa UI kit berat, styling manual per komponen

## Development

```bash
cd ~/workspace/peka-landing
npm install
npm run dev      # http://localhost:5173
```

## Production build

```bash
npm run build    # output ke dist/
```

Hasil `dist/` siap di-serve sebagai file statis (nginx, Caddy, Vercel, dsb).

## Struktur

- `src/components/` — Nav, Hero, Marquee, Products (roadmap), Demo
  (simulasi analisis sentimen interaktif), Features, Notify (form akses awal),
  Footer, Logo
- `src/index.css` — design token Tailwind v4 (@theme) + font Inter/JetBrains Mono

## Catatan

- Form "akses awal" menyimpan email ke localStorage (`peka-early`) — belum ada
  backend. Sambungkan ke API/endpoint sendiri saat backend siap.
- Demo sentimen memakai data contoh statis, bukan model asli.
