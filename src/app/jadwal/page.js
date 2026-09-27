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
<li id="menu-item-21" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21"><a href="/artikel/">Artikel</a></li>
</ul>                </nav>
                <a class="button" href="/kontak/">
                    Jadwalkan Perawatan                </a>
            </div>
        </div>
    </header>
<main id="content">
        <section class="section section--soft section--contact-hero">
        <div class="site-container">
            <div class="contact-hero">
                <div class="contact-hero__copy">
                    <h1>Cari Tahu Estimasi Biaya Sebelum Berkunjung</h1>
                    <p>Isi formulir berikut untuk mendapatkan informasi biaya perawatan, daftar layanan, serta pengecekan asuransi rekanan. Tim Beam Dental Clinic akan menghubungi Anda melalui WhatsApp.</p>
                    <div class="contact-hero__highlights">
                        <div class="contact-highlight">
                            <div class="contact-highlight__icon" aria-hidden="true"><svg class="icon icon--circle-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"/><path d="m9 12 2 2 4-4"/></svg></div>
                            <div>
                                <strong>Harga Transparan</strong>
                                <span>Tanpa biaya tambahan tersembunyi</span>
                            </div>
                        </div>
                        <div class="contact-highlight">
                            <div class="contact-highlight__icon" aria-hidden="true"><svg class="icon icon--credit-card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z"/><path d="M3 11h18"/></svg></div>
                            <div>
                                <strong>Cicilan 0%</strong>
                                <span>Tersedia untuk berbagai pilihan bank</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-hero__visual" aria-label="Visual perawatan Beam Dental">
                    <div class="contact-hero__visual-main">
                                                    <img src="/downloaded/kontak_Cover-layanan-kedokteran_5.png" alt="Visual perawatan Beam Dental" loading="lazy" decoding="async">
                                            </div>
                    <div class="contact-hero__visual-secondary">
                                                    <img src="/downloaded/kontak_gigi-anak-A_6.png" alt="Visual layanan Beam Dental" loading="lazy" decoding="async">
                                            </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section section--contact-form">
        <div class="site-container contact-form-wrap">
            <div class="contact-form-heading">
                <h2>Dapatkan Daftar Harga Lengkap</h2>
                <p>Lengkapi formulir di bawah ini untuk menerima katalog biaya perawatan Beam Dental.</p>
            </div>

            <form class="contact-form" data-contact-form>
                <div class="contact-form__honeypot" aria-hidden="true">
                    <label>
                        <span>Website</span>
                        <input type="text" name="website" tabindex="-1" autocomplete="off" value="">
                    </label>
                </div>
                <input type="hidden" name="contact_form_started_at" value="1790521337">

                <div class="contact-form__row contact-form__row--single">
                    <label class="form-field">
                        <span class="form-field__label">Nama Lengkap</span>
                        <span class="form-field__input-wrap">
                            <span class="form-field__icon" aria-hidden="true"><svg class="icon icon--user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0"/><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg></span>
                            <input type="text" name="full_name" placeholder="Budi Santoso" required>
                        </span>
                    </label>
                </div>

                <div class="contact-form__row">
                    <label class="form-field">
                        <span class="form-field__label">Nomor WhatsApp</span>
                        <span class="form-field__input-wrap">
                            <span class="form-field__icon" aria-hidden="true"><svg class="icon icon--phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 4h3l2 5-2 2c1.5 3 3.5 5 6 6l2-2 5 2v3c0 1.1-.9 2-2 2A16 16 0 0 1 3 6c0-1.1.9-2 2-2"/></svg></span>
                            <input type="tel" name="whatsapp" placeholder="0812xxxx" required>
                        </span>
                    </label>
                    <label class="form-field">
                        <span class="form-field__label">Alamat Email</span>
                        <span class="form-field__input-wrap">
                            <span class="form-field__icon" aria-hidden="true"><svg class="icon icon--mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/><path d="m3 7 9 6 9-6"/></svg></span>
                            <input type="email" name="email" placeholder="nama@email.com" required>
                        </span>
                    </label>
                </div>

                <div class="contact-form__row contact-form__row--single">
                    <label class="form-field">
                        <span class="form-field__label">Keluhan / Kebutuhan Perawatan</span>
                        <span class="form-field__input-wrap form-field__input-wrap--textarea">
                            <span class="form-field__icon" aria-hidden="true"><svg class="icon icon--message-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H9l-5 5v-5H7a3 3 0 0 1-3-3V6z"/><path d="M8 8h8"/><path d="M8 11h5"/></svg></span>
                            <textarea name="message" placeholder="Ceritakan singkat kebutuhan gigi Anda..." required></textarea>
                        </span>
                    </label>
                </div>

                <div class="contact-form__actions">
                    <button class="button contact-form__submit" type="submit">Kirim Permintaan Pricelist <svg class="icon icon--arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></button>
                    <a class="button button--ghost" href="https://wa.me/6281388886085" target="_blank" rel="noopener noreferrer">Hubungi Admin</a>
                </div>
            </form>
        </div>
    </section>

    <div class="contact-modal" data-contact-modal aria-hidden="true" hidden>
        <div class="contact-modal__backdrop" data-contact-modal-close></div>
        <div class="contact-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
            <button class="contact-modal__close" type="button" data-contact-modal-close aria-label="Tutup modal"><svg class="icon icon--x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 6l12 12"/><path d="m6 18 12-12"/></svg></button>
            <div class="contact-modal__badge" aria-hidden="true"><svg class="icon icon--check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m5 12 4 4 10-10"/></svg></div>
            <h2 id="contact-modal-title">Terima kasih</h2>
            <p>Permintaan Anda sudah kami terima. Tim kami akan segera menghubungi Anda.</p>
            <button class="button" type="button" data-contact-modal-close>Tutup</button>
        </div>
    </div>
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
