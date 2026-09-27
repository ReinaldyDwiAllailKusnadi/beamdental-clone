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
<li id="menu-item-20" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-20"><a href="/layanan/" aria-current="page">Layanan</a></li>
<li id="menu-item-21" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21"><a href="/artikel/">Artikel</a></li>
</ul>                </nav>
                <a class="button" href="/kontak/">
                    Jadwalkan Perawatan                </a>
            </div>
        </div>
    </header>
<main id="content">
    <section class="service-archive-hero">
        <div class="site-container service-archive-hero__inner">
            <div class="service-archive-hero__copy">
                <div class="section__eyebrow">LAYANAN PROFESSIONAL</div>
                <h1>Perawatan Gigi Lengkap dalam Satu Tempat</h1>
                <p class="hero__lead">Mulai dari perawatan gigi anak, behel, saluran akar, implan, hingga bedah mulut, Beam Dental Clinic menyediakan berbagai layanan dokter gigi umum dan spesialis untuk seluruh keluarga.</p>
            </div>

            <aside class="service-archive-hero__visual" aria-label="Visual layanan Beam Dental" style="--hero-visual-bg-image: url(/downloaded/tooth-blue_20.png);">
                <div class="service-archive-hero__visual-card">
                    <div class="service-archive-hero__visual-media">
                                                    <img width="1024" height="1024" src="/downloaded/General-treatment_22.png?fit=1024%2C1024&amp;ssl=1" class="attachment-large size-large wp-post-image" alt="" loading="lazy" decoding="async" srcset="/downloaded/General-treatment_22.png?w=1254&amp;ssl=1 1254w, /downloaded/General-treatment_22.png?resize=300%2C300&amp;ssl=1 300w, /downloaded/General-treatment_22.png?resize=1024%2C1024&amp;ssl=1 1024w, /downloaded/General-treatment_22.png?resize=150%2C150&amp;ssl=1 150w, /downloaded/General-treatment_22.png?resize=768%2C768&amp;ssl=1 768w" sizes="auto, (max-width: 1024px) 100vw, 1024px" data-attachment-id="152" data-permalink="/layanan/basic-treatment/general-treatment/" data-orig-file="/downloaded/General-treatment_22.png?fit=1254%2C1254&amp;ssl=1" data-orig-size="1254,1254" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="General treatment" data-image-description="" data-image-caption="" data-large-file="/downloaded/General-treatment_22.png?fit=1024%2C1024&amp;ssl=1" />                                            </div>
                    <div class="service-archive-hero__visual-copy">
                        <!-- <div class="service-card__label">Sorotan layanan</div> -->
                        <!-- <h2>Basic Treatment</h2> -->
                        <!-- <p>Pemeriksaan dan perawatan gigi sehari-hari</p> -->
                    </div>
                </div>
            </aside>
        </div>

                    <div class="site-container service-archive__chips-wrap">
                <nav class="service-archive__chips" aria-label="Filter parent layanan">
                    <button class="badge is-active" type="button" data-service-filter="">Semua</button>
                                            <button class="badge" type="button" data-service-filter="149">Basic Treatment</button>
                                            <button class="badge" type="button" data-service-filter="146">Endodontic</button>
                                            <button class="badge" type="button" data-service-filter="143">Pediatric Dentistry</button>
                                            <button class="badge" type="button" data-service-filter="140">Oral Medicine</button>
                                            <button class="badge" type="button" data-service-filter="137">Orthodontics</button>
                                            <button class="badge" type="button" data-service-filter="134">Oral &amp; Maxillofacial Surgery</button>
                                            <button class="badge" type="button" data-service-filter="130">Prosthodontic</button>
                                    </nav>
                <div class="service-archive__select-wrap">
                    <label for="service-select" class="screen-reader-text">Filter parent layanan</label>
                    <select id="service-select" class="service-archive__select" aria-label="Filter parent layanan">
                        <option value="">Semua</option>
                                                    <option value="149">Basic Treatment</option>
                                                    <option value="146">Endodontic</option>
                                                    <option value="143">Pediatric Dentistry</option>
                                                    <option value="140">Oral Medicine</option>
                                                    <option value="137">Orthodontics</option>
                                                    <option value="134">Oral &amp; Maxillofacial Surgery</option>
                                                    <option value="130">Prosthodontic</option>
                                            </select>
                </div>
            </div>
            </section>

    <section class="content-wrap">
        <div class="site-container">
                            <div class="card-grid card-grid--4 service-archive-grid" data-service-grid>
                                            <article class="service-card service-archive-card" data-service-parent="149">
                            <a class="service-card__media" href="/layanan/basic-treatment/" aria-label="Basic Treatment">
                                                                    <img class="service-card__image" src="/downloaded/General-treatment_22.png?resize=920%2C690&#038;ssl=1" alt="Basic Treatment" loading="lazy" decoding="async">
                                                            </a>
                            <div class="service-card__content">
                                <div class="service-card__label">Basic Treatment</div>
                                <h3><a href="/layanan/basic-treatment/">Basic Treatment</a></h3>
                                <p>Pemeriksaan dan perawatan gigi sehari-hari</p>
                            </div>
                        </article>
                                            <article class="service-card service-archive-card" data-service-parent="146">
                            <a class="service-card__media" href="/layanan/endodontic/" aria-label="Endodontic">
                                                                    <img class="service-card__image" src="/downloaded/Endodontics_23.png?resize=920%2C690&#038;ssl=1" alt="Endodontic" loading="lazy" decoding="async">
                                                            </a>
                            <div class="service-card__content">
                                <div class="service-card__label">Endodontic</div>
                                <h3><a href="/layanan/endodontic/">Endodontic</a></h3>
                                <p>Solusi untuk infeksi dan saraf gigi</p>
                            </div>
                        </article>
                                            <article class="service-card service-archive-card" data-service-parent="143">
                            <a class="service-card__media" href="/layanan/pediatric-dentistry/" aria-label="Pediatric Dentistry">
                                                                    <img class="service-card__image" src="/downloaded/gigi-anak_24.png?resize=920%2C690&#038;ssl=1" alt="Pediatric Dentistry" loading="lazy" decoding="async">
                                                            </a>
                            <div class="service-card__content">
                                <div class="service-card__label">Pediatric Dentistry</div>
                                <h3><a href="/layanan/pediatric-dentistry/">Pediatric Dentistry</a></h3>
                                <p>Perawatan gigi nyaman untuk anak-anak</p>
                            </div>
                        </article>
                                            <article class="service-card service-archive-card" data-service-parent="140">
                            <a class="service-card__media" href="/layanan/oral-medicine/" aria-label="Oral Medicine">
                                                                    <img class="service-card__image" src="/downloaded/Oral-medicine_25.png?resize=920%2C690&#038;ssl=1" alt="Oral Medicine" loading="lazy" decoding="async">
                                                            </a>
                            <div class="service-card__content">
                                <div class="service-card__label">Oral Medicine</div>
                                <h3><a href="/layanan/oral-medicine/">Oral Medicine</a></h3>
                                <p>Diagnosis dan penanganan kelainan rongga mulut</p>
                            </div>
                        </article>
                                            <article class="service-card service-archive-card" data-service-parent="137">
                            <a class="service-card__media" href="/layanan/orthodontics/" aria-label="Orthodontics">
                                                                    <img class="service-card__image" src="/downloaded/ortodontis_26.png?resize=920%2C690&#038;ssl=1" alt="Orthodontics" loading="lazy" decoding="async">
                                                            </a>
                            <div class="service-card__content">
                                <div class="service-card__label">Orthodontics</div>
                                <h3><a href="/layanan/orthodontics/">Orthodontics</a></h3>
                                <p>Merapikan susunan gigi untuk senyum ideal</p>
                            </div>
                        </article>
                                            <article class="service-card service-archive-card" data-service-parent="134">
                            <a class="service-card__media" href="/layanan/oral-maxillofacial-surgery/" aria-label="Oral &amp; Maxillofacial Surgery">
                                                                    <img class="service-card__image" src="/downloaded/Maxilofacial-surgery_27.png?resize=920%2C690&#038;ssl=1" alt="Oral &amp; Maxillofacial Surgery" loading="lazy" decoding="async">
                                                            </a>
                            <div class="service-card__content">
                                <div class="service-card__label">Oral &amp; Maxillofacial Surgery</div>
                                <h3><a href="/layanan/oral-maxillofacial-surgery/">Oral &amp; Maxillofacial Surgery</a></h3>
                                <p>Penanganan bedah gigi dan rahang</p>
                            </div>
                        </article>
                                            <article class="service-card service-archive-card" data-service-parent="130">
                            <a class="service-card__media" href="/layanan/prosthodontic/" aria-label="Prosthodontic">
                                                                    <img class="service-card__image" src="/downloaded/Prosthodontics_28.png?resize=920%2C690&#038;ssl=1" alt="Prosthodontic" loading="lazy" decoding="async">
                                                            </a>
                            <div class="service-card__content">
                                <div class="service-card__label">Prosthodontic</div>
                                <h3><a href="/layanan/prosthodontic/">Prosthodontic</a></h3>
                                <p>Mengembalikan fungsi dan estetika gigi</p>
                            </div>
                        </article>
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
