'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const pageHtml = `<header class="site-header">
        <div class="site-container site-header__inner">
            <a class="brand-mark" href="/" rel="home" aria-label="Beam Dental Clinic">
                <img width="1590" height="795" src="/downloaded/beam-dental-logo_3.png" class="brand-mark__image" alt="" loading="eager" decoding="async" fetchpriority="high" srcset="/downloaded/beam-dental-logo_4.png 1590w, /downloaded/beam-dental-logo_4.png?resize=300%2C150&amp;ssl=1 300w, /downloaded/beam-dental-logo_4.png?resize=1024%2C512&amp;ssl=1 1024w, /downloaded/beam-dental-logo_4.png?resize=768%2C384&amp;ssl=1 768w, /downloaded/beam-dental-logo_4.png?resize=1536%2C768&amp;ssl=1 1536w" sizes="(max-width: 1590px) 100vw, 1590px" data-attachment-id="51" data-permalink="/beam-dental-logo/" data-orig-file="/downloaded/beam-dental-logo_3.png" data-orig-size="1590,795" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="beam dental logo" data-image-description="" data-image-caption="" data-large-file="/downloaded/beam-dental-logo_4.png?fit=1024%2C512&amp;ssl=1" />                <!-- <span>Beam Dental Clinic</span> -->
            </a>
            <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Buka menu">
                <span class="nav-toggle__icon nav-toggle__icon--menu" aria-hidden="true"><svg class="icon icon--menu-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg></span>
                <span class="nav-toggle__icon nav-toggle__icon--close" aria-hidden="true"><svg class="icon icon--x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 6l12 12"/><path d="m6 18 12-12"/></svg></span>
                <span class="screen-reader-text">Menu navigasi</span>
            </button>
            <div class="header-actions">
                <nav id="primary-navigation" class="primary-nav" aria-label="Primary menu">
                    <ul id="menu-primary-menu" class="menu"><li id="menu-item-18" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-18"><a href="/">Beranda</a></li>
<li id="menu-item-19" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-19"><a href="/dokter-kami/">Dokter Kami</a></li>
<li id="menu-item-20" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20"><a href="/layanan/">Layanan</a></li>
<li id="menu-item-21" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-17 current_page_item menu-item-21"><a href="/artikel/" aria-current="page">Artikel</a></li>
</ul>                </nav>
                <a class="button" href="/kontak/">
                    Jadwalkan Perawatan                </a>
            </div>
        </div>
    </header>
<main id="content">
    <section class="article-archive-hero">
        <div class="site-container article-archive-hero__inner">
                                            <article class="article-archive-hero__feature">
                    <a class="article-archive-hero__media" href="/jangan-langsung-dicabut-gigi-nyeri-mungkin-masih-bisa-diselamatkan/">
                                                    <img width="1200" height="1400" src="/downloaded/Gemini_Generated_Image_q1fdecq1fdecq1fd_41.png?resize=1200%2C1400&amp;ssl=1" class="attachment-newbeamdental-hero size-newbeamdental-hero wp-post-image" alt="" loading="eager" decoding="async" srcset="/downloaded/Gemini_Generated_Image_q1fdecq1fdecq1fd_41.png?resize=1200%2C1400&amp;ssl=1 1200w, /downloaded/Gemini_Generated_Image_q1fdecq1fdecq1fd_41.png?zoom=2&amp;resize=1200%2C1400&amp;ssl=1 2400w" sizes="(max-width: 1200px) 100vw, 1200px" data-attachment-id="253" data-permalink="/jangan-langsung-dicabut-gigi-nyeri-mungkin-masih-bisa-diselamatkan/gemini_generated_image_q1fdecq1fdecq1fd/" data-orig-file="/downloaded/Gemini_Generated_Image_q1fdecq1fdecq1fd_41.png?fit=2816%2C1536&amp;ssl=1" data-orig-size="2816,1536" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Gemini_Generated_Image_q1fdecq1fdecq1fd" data-image-description="" data-image-caption="" data-large-file="/downloaded/Gemini_Generated_Image_q1fdecq1fdecq1fd_41.png?fit=1024%2C559&amp;ssl=1" />                                            </a>
                    <div class="article-archive-hero__copy">
                        <div class="article-archive__eyebrow">Artikel</div>
                        <div class="article-archive__category">Category : Semua</div>
                        <h1>Jangan Langsung Dicabut, Gigi Nyeri Mungkin Masih Bisa Diselamatkan</h1>
                        <p>Saat mengalami sakit gigi yang hebat, banyak orang langsung berpikir bahwa pencabutan adalah satu-satunya solusi. Padahal dalam banyak kasus, gigi yang mengalami infeksi atau kerusakan pada saraf masih&hellip;</p>
                        <div class="article-archive__meta-row">
                            <span>Endodontic</span>
                            <span>&middot;</span>
                            <span>10 June 2026</span>
                        </div>
                        <a class="button button--ghost" href="/jangan-langsung-dicabut-gigi-nyeri-mungkin-masih-bisa-diselamatkan/">Selengkapnya</a>
                    </div>
                </article>
                    </div>
    </section>

    <section class="content-wrap">
        <div class="site-container">
            <div class="article-archive__bar">
                <div>
                    <div class="article-archive__bar-label">Category</div>
                    <p>Filter artikel kesehatan, perawatan, dan edukasi klinis.</p>
                </div>
                <form class="article-archive__filter" method="get" action="/artikel/" data-article-filter>
                    <label class="screen-reader-text" for="article-category-select">Filter artikel berdasarkan kategori</label>
                    <select id="article-category-select" name="category" data-article-category>
                        <option value="">Semua</option>
                                                    <option value="basic-treatment" >Basic Treatment</option>
                                                    <option value="endodontic" >Endodontic</option>
                                                    <option value="pediatric-dentistry" >Pediatric Dentistry</option>
                                            </select>
                </form>
            </div>

            <div class="article-archive__list" data-article-grid data-per-page="7" data-current-page="1" data-max-pages="1" data-category="">
                                                                                    <article class="article-archive-card">
                            <a class="article-archive-card__media" href="/kehilangan-gigi-kenali-pilihan-perawatan-implan-gigi/">
                                                                    <img width="920" height="690" src="/downloaded/Gemini_Generated_Image_7zp2om7zp2om7zp2_42.png" class="attachment-newbeamdental-card size-newbeamdental-card wp-post-image" alt="" loading="lazy" decoding="async" srcset="/downloaded/Gemini_Generated_Image_7zp2om7zp2om7zp2_42.png 920w, /downloaded/Gemini_Generated_Image_7zp2om7zp2om7zp2_42.png?zoom=2&amp;resize=920%2C690&amp;ssl=1 1840w, /downloaded/Gemini_Generated_Image_7zp2om7zp2om7zp2_42.png?zoom=3&amp;resize=920%2C690&amp;ssl=1 2760w" sizes="auto, (max-width: 920px) 100vw, 920px" data-attachment-id="248" data-permalink="/kehilangan-gigi-kenali-pilihan-perawatan-implan-gigi/gemini_generated_image_7zp2om7zp2om7zp2/" data-orig-file="/downloaded/Gemini_Generated_Image_7zp2om7zp2om7zp2_42.png?fit=2816%2C1536&amp;ssl=1" data-orig-size="2816,1536" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Gemini_Generated_Image_7zp2om7zp2om7zp2" data-image-description="" data-image-caption="" data-large-file="/downloaded/Gemini_Generated_Image_7zp2om7zp2om7zp2_42.png?fit=1024%2C559&amp;ssl=1" />                                                                <span class="article-archive-card__badge">Basic Treatment</span>
                            </a>
                            <div class="article-archive-card__content">
                                <div class="article-archive-card__meta">10 June 2026</div>
                                <h2><a href="/kehilangan-gigi-kenali-pilihan-perawatan-implan-gigi/">Kehilangan Gigi? Kenali Pilihan Perawatan Implan Gigi</a></h2>
                                <p>Kehilangan gigi bukan hanya memengaruhi penampilan, tetapi juga dapat berdampak pada fungsi mengunyah, kemampuan berbicara, hingga rasa percaya diri. Salah satu solusi modern yang banyak dipilih untuk menggantikan&hellip;</p>
                                <a class="button button--ghost article-archive-card__cta" href="/kehilangan-gigi-kenali-pilihan-perawatan-implan-gigi/">Selengkapnya</a>
                            </div>
                        </article>
                                                                    <article class="article-archive-card">
                            <a class="article-archive-card__media" href="/kapan-waktu-yang-tepat-membawa-anak-ke-dokter-gigi/">
                                                                    <img width="920" height="690" src="/downloaded/Gemini_Generated_Image_hhtiychhtiychhti_43.png" class="attachment-newbeamdental-card size-newbeamdental-card wp-post-image" alt="" loading="lazy" decoding="async" srcset="/downloaded/Gemini_Generated_Image_hhtiychhtiychhti_43.png 920w, /downloaded/Gemini_Generated_Image_hhtiychhtiychhti_43.png?zoom=2&amp;resize=920%2C690&amp;ssl=1 1840w, /downloaded/Gemini_Generated_Image_hhtiychhtiychhti_43.png?zoom=3&amp;resize=920%2C690&amp;ssl=1 2760w" sizes="auto, (max-width: 920px) 100vw, 920px" data-attachment-id="241" data-permalink="/kapan-waktu-yang-tepat-membawa-anak-ke-dokter-gigi/gemini_generated_image_hhtiychhtiychhti/" data-orig-file="/downloaded/Gemini_Generated_Image_hhtiychhtiychhti_43.png?fit=2816%2C1536&amp;ssl=1" data-orig-size="2816,1536" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Gemini_Generated_Image_hhtiychhtiychhti" data-image-description="" data-image-caption="" data-large-file="/downloaded/Gemini_Generated_Image_hhtiychhtiychhti_43.png?fit=1024%2C559&amp;ssl=1" />                                                                <span class="article-archive-card__badge">Pediatric Dentistry</span>
                            </a>
                            <div class="article-archive-card__content">
                                <div class="article-archive-card__meta">10 June 2026</div>
                                <h2><a href="/kapan-waktu-yang-tepat-membawa-anak-ke-dokter-gigi/">Kapan Waktu yang Tepat Membawa Anak ke Dokter Gigi?</a></h2>
                                <p>Banyak orang tua menganggap kunjungan ke dokter gigi baru diperlukan ketika anak mengeluh sakit gigi. Padahal, pemeriksaan gigi sejak dini merupakan salah satu langkah penting untuk menjaga kesehatan&hellip;</p>
                                <a class="button button--ghost article-archive-card__cta" href="/kapan-waktu-yang-tepat-membawa-anak-ke-dokter-gigi/">Selengkapnya</a>
                            </div>
                        </article>
                                                </div>

            <div class="pagination">
                            </div>
        </div>
    </section>
</main>
<footer class="site-footer">
    <div class="site-container">
        <div class="footer-grid">
            <div class="footer-col footer-col--brand">
                <a class="footer-brand-mark" href="/" rel="home">
                    <img width="1590" height="795" src="/downloaded/beam-dental-logo_3.png" class="brand-mark__image" alt="" loading="eager" decoding="async" srcset="/downloaded/beam-dental-logo_4.png 1590w, /downloaded/beam-dental-logo_4.png?resize=300%2C150&amp;ssl=1 300w, /downloaded/beam-dental-logo_4.png?resize=1024%2C512&amp;ssl=1 1024w, /downloaded/beam-dental-logo_4.png?resize=768%2C384&amp;ssl=1 768w, /downloaded/beam-dental-logo_4.png?resize=1536%2C768&amp;ssl=1 1536w" sizes="(max-width: 1590px) 100vw, 1590px" data-attachment-id="51" data-permalink="/beam-dental-logo/" data-orig-file="/downloaded/beam-dental-logo_3.png" data-orig-size="1590,795" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="beam dental logo" data-image-description="" data-image-caption="" data-large-file="/downloaded/beam-dental-logo_4.png?fit=1024%2C512&amp;ssl=1" />                </a>

                <div class="footer-social">
                                            <a class="social-btn" href="https://www.instagram.com/beamdentalofficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg class="icon icon--brand-instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="3.2"/><path d="M17.5 6.5h.01"/></svg>                            <span class="screen-reader-text">Instagram</span>
                        </a>
                                            <a class="social-btn" href="https://www.tiktok.com/@beamdentalofficial" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917" /> </svg>                            <span class="screen-reader-text">Tiktok</span>
                        </a>
                                            <a class="social-btn" href="https://www.youtube.com/@BeamDentalClinic" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                            <svg class="icon icon--brand-youtube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 8c0-1.1-.9-2-2-2C17.6 6 12 6 12 6s-5.6 0-8 .0C3 6 2 6.9 2 8v8c0 1.1.9 2 2 2 2.4 0 8 0 8 0s5.6 0 8 0c1.1 0 2-.9 2-2V8z"/><path d="M10 15l5-3-5-3v6z"/></svg>                            <span class="screen-reader-text">Youtube</span>
                        </a>
                                    </div>
            </div>

            <div class="footer-col footer-col--info">
                <p class="footer-heading"></p>

                                    <div class="footer-contact-block">
                        <h4>Beam Dental Clinic Bintaro</h4>
                        
                                                    <p class="footer-branch-address">
                                Jl. Bintaro Utama I No.22, Bintaro, Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12330.                            </p>
                                                
                                                    <p class="footer-branch-phone">
                                <a href="tel:+62813-8888-6085">
                                    +62 813-8888-6085                                </a>
                            </p>
                                                
                                                    <p class="footer-branch-hours">
                                Senin - Minggu : 10.00 - 20.00 WIB                            </p>
                                                
                                                    <a href="https://wa.me/6281388886085" target="_blank" rel="noopener noreferrer" class="footer-whatsapp-link">
                                Hubungi via WhatsApp →
                            </a>
                                            </div>
                            </div>

            <div class="footer-col footer-col--map">
                                    <div class="footer-map__shell">
                        <iframe
                            src="https://maps.google.com/maps?q=-6.271988178328411%2C106.7529832059691&#038;z=15&#038;output=embed"
                            width="100%"
                            height="100%"
                            class="footer-map__iframe"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                            </div>
        </div>
        <div class="site-footer__bottom">
            <span>&copy; 2026 Beam Dental Clinic.</span>
        </div>
    </div>
</footer>

<a class="whatsapp-fab" href="https://wa.me/6281388886085" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Admin">
  <span class="whatsapp-fab__icon" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  </span>
  <span class="screen-reader-text">WhatsApp Admin</span>
</a>
`;

export default function Page() {
  useEffect(() => {
    let attempts = 0;
    const timer = setInterval(() => {
      attempts++;
      if (typeof window !== 'undefined' && window.initBeamSite) {
        window.initBeamSite();
        clearInterval(timer);
      }
      if (attempts > 30) clearInterval(timer);
    }, 200);

    return () => clearInterval(timer);
  }, []);

  const handleScriptLoad = () => {
    if (typeof window !== 'undefined' && window.initBeamSite) {
      window.initBeamSite();
    }
  };

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
      <Script 
        src="/swiper-bundle.min.js" 
        strategy="afterInteractive" 
        onLoad={handleScriptLoad} 
      />
      <Script 
        src="/site.js" 
        strategy="afterInteractive" 
        onLoad={handleScriptLoad} 
      />
    </>
  );
}
