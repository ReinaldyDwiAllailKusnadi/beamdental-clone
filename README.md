# Beam Dental Clinic - Website Clone & Admin Dashboard

Website clone berstandar pixel-accurate dari [Beam Dental Clinic](https://beamdental.id/) dilengkapi dengan **Portal Admin Dashboard CRUD** mandiri.

Dibangun dengan arsitektur modern menggunakan **Next.js (App Router)**, **Vanilla CSS**, dan sistem penyimpanan data persisten lokal.

---

## 🌟 Fitur Utama

### 1. Website Publik (Fidelity Visual Tinggi)
- **Beranda (`/`)**: 5 slide hero banner interaktif dengan autoplay (Swiper), floating doctor card, section layanan, fasilitas klinik, Google reviews, FAQ accordion, dan footer terintegrasi Google Maps.
- **Dokter Kami (`/dokter-kami`)**: 16 profil dokter spesialis dengan filter interaktif (desktop pill badge & mobile select dropdown) yang terhubung langsung ke backend API.
- **Layanan (`/layanan`)**: Katalog prosedur tindakan medis (Pediatric, Orthodontic, Oral Surgery, dsb.).
- **Artikel (`/artikel`)**: Artikel edukasi kesehatan gigi dan keluarga.
- **Kontak & Estimasi Biaya (`/kontak`)**: Formulir permohonan daftar harga & janji temu pasien yang langsung tersinkronisasi ke database admin.
- **Tombol WhatsApp Floating**: Terhubung langsung ke nomor WhatsApp resmi klinik.

### 2. Admin Dashboard Portal (`/admin`)
- **Ringkasan (Overview)**: Kartu statistik real-time (Dokter, Layanan, Artikel, Janji Masuk) & tabel permintaan masuk terbaru.
- **Kelola Dokter**: Tambah, edit jadwal/spesialisasi, cari (*live search*), dan hapus dokter spesialis.
- **Kelola Layanan**: Pengaturan urutan, deskripsi, dan kategori layanan medis.
- **Kelola Artikel**: CRUD artikel edukasi dan publikasi tips kesehatan gigi.
- **Slider Hero Banner**: CRUD 5 slide banner beranda (gambar desktop/mobile, status aktif, urutan tampil).
- **Permintaan Janji Pasien**: Menampung data formulir dari website publik dengan tombol cepat chat WhatsApp langsung ke pasien (*one-click reply*).
- **Pengaturan Klinik**: Update kontak resmi, jam operasional, alamat, dan email klinik.

---

## 🚀 Memulai (Getting Started)

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Pengembangan
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) (atau port yang aktif) di browser Anda.

- Halaman Utama: `http://localhost:3000/`
- Dokter Kami: `http://localhost:3000/dokter-kami`
- Layanan: `http://localhost:3000/layanan`
- Artikel: `http://localhost:3000/artikel`
- Kontak / Estimasi Biaya: `http://localhost:3000/kontak`
- **Admin Dashboard**: `http://localhost:3000/admin`

### 3. Build Produksi
```bash
npm run build
npm run start
```

---

## 📂 Struktur Direktori

```
├── public/
│   ├── downloaded/       # 58 asset lokal (logo, hero banners, foto dokter, ikon)
│   ├── site.js           # Script navigasi, modal kontak, filter dokter dinamis, dan slider
│   └── swiper-bundle.*   # Library slider hero autoplay
├── src/
│   ├── app/
│   │   ├── admin/        # Antarmuka Admin Dashboard & stylesheet
│   │   ├── api/          # REST API endpoints (doctors, services, articles, hero, appointments, settings)
│   │   ├── dokter-kami/  # Halaman arsip dokter spesialis
│   │   ├── layanan/      # Halaman prosedur layanan medis
│   │   ├── artikel/      # Halaman artikel edukasi
│   │   ├── kontak/       # Halaman booking & permohonan pricelist
│   │   └── page.js       # Halaman beranda
│   ├── data/             # Database lokal (doctors, services, hero_slides, appointments, settings)
│   └── lib/              # Helper manipulasi database lokal (db.js)
```

---

## 🛠️ Lisensi & Hak Cipta
Dibuat untuk keperluan demonstrasi dan implementasi pair-programming modern. Desain orisinal dan materi branding milik [Beam Dental Clinic](https://beamdental.id/).
