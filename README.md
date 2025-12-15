# Maritim Cerdas - Portal Edukasi BMKG

Portal edukasi interaktif tentang Meteorologi, Klimatologi, dan Geofisika untuk siswa dan masyarakat umum.

## 🌊 Tentang Proyek

Maritim Cerdas adalah platform pembelajaran digital yang dikembangkan oleh Stasiun Meteorologi Merak BMKG. Portal ini menyediakan konten edukasi interaktif tentang:

- **Meteorologi** - Ilmu tentang fenomena atmosfer dan cuaca
- **Klimatologi** - Ilmu tentang pola iklim jangka panjang
- **Geofisika** - Ilmu tentang struktur dan dinamika bumi

## ✨ Fitur Utama

- 🎓 **Konten Edukatif** - Materi pembelajaran interaktif dengan visualisasi menarik
- 💬 **Cera Assistant** - Asisten virtual yang siap membantu navigasi portal
- 🎥 **Video Pembelajaran** - Konten video edukatif tentang fenomena maritim
- 📚 **E-Flipbook** - Buku interaktif dengan konten mendalam
- 🎯 **Quiz Interaktif** - Kuis untuk mengecek pemahaman materi
- 📱 **Responsive Design** - Dioptimalkan untuk desktop, tablet, dan mobile
- 🌈 **Animasi Menarik** - Animasi dan transisi yang menambah pengalaman pengguna

## 🚀 Cara Menjalankan Lokal

1. Clone atau download repository ini
2. Buka file `Bmkg.html` di browser web Anda
3. Atau jalankan dengan local server:
   ```bash
   # Menggunakan Python
   python -m http.server 8000
   
   # Menggunakan Node.js (dengan http-server)
   npx http-server
   ```
4. Akses di `http://localhost:8000` atau `http://localhost:3000`

## 📁 Struktur File

```
BMKG/
├── Bmkg.html              # File HTML utama (aplikasi lengkap)
├── package.json           # Konfigurasi proyek
├── vercel.json           # Konfigurasi Vercel
├── .gitignore            # File yang diabaikan git
├── README.md             # Dokumentasi ini
├── BMKG.png              # Logo BMKG
├── CERAHORE.png          # Avatar karakter Cera
├── bmkg-web-app/         # Folder struktur alternatif
│   └── src/
│       ├── index.html
│       ├── scripts/
│       └── styles/
├── videos/               # File video pembelajaran
├── images/               # Aset gambar
└── [file gambar lainnya]
```

## 🎨 Teknologi yang Digunakan

- **HTML5** - Struktur markup
- **CSS3** - Styling dan animasi dengan media queries responsif
- **Vanilla JavaScript** - Interaktivitas tanpa framework eksternal
- **Heyzine** - Integrasi flipbook untuk konten interaktif

## 📱 Kompatibilitas Browser

- ✅ Chrome (versi terbaru)
- ✅ Firefox (versi terbaru)
- ✅ Safari (versi terbaru)
- ✅ Edge (versi terbaru)
- ✅ Mobile browsers

## 🔧 Hosting di Vercel

### Langkah-langkah:

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Maritim Cerdas portal"
   git remote add origin https://github.com/username/maritim-cerdas.git
   git push -u origin main
   ```

2. **Deploy ke Vercel**
   - Kunjungi [Vercel.com](https://vercel.com)
   - Login dengan GitHub account
   - Klik "New Project"
   - Pilih repository `maritim-cerdas`
   - Vercel akan otomatis mendeteksi dan deploy
   - Akses aplikasi di domain yang diberikan Vercel

## 📧 Kontak

**Stasiun Meteorologi Merak - BMKG**
- 📍 Jln Raya Taktakan No.27 Serang Banten 42162
- 📞 0254 200185
- 📧 stamet_serang@yahoo.co.id

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi MIT.

---

**Dibuat dengan ❤️ untuk pendidikan maritim Indonesia**
