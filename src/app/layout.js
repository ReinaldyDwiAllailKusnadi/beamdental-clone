import './globals.css'

export const metadata = {
  title: 'Beam Dental Clinic - Kids & Family | Klinik Gigi Bintaro',
  description: 'Beam Dental Clinic adalah klinik gigi keluarga dan pusat dokter gigi spesialis di Bintaro. Perawatan gigi anak, behel, implan, saluran akar, dan bedah mulut oleh tim dokter berpengalaman.',
  keywords: 'klinik gigi bintaro, dokter gigi anak, perawatan gigi keluarga, beam dental, behel gigi, implan gigi, dokter gigi spesialis',
  openGraph: {
    title: 'Beam Dental Clinic - Kids & Family',
    description: 'Klinik gigi keluarga dan spesialis di Bintaro. Ramah anak, teknologi modern, tim dokter berpengalaman.',
    type: 'website',
    locale: 'id_ID',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
