'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const pageHtml = `<header class="site-header">
        <div class="site-container site-header__inner">
            <a class="brand-mark" href="/" rel="home" aria-label="Beam Dental Clinic">
                <img width="1590" height="795" src="/downloaded/beam-dental-logo_3.png" class="brand-mark__image" alt="" loading="eager" decoding="async" fetchpriority="high" srcset="/downloaded/beam-dental-logo_4.png 1590w, /downloaded/beam-dental-logo_4.png?resize=300%2C150&amp;ssl=1 300w, /downloaded/beam-dental-logo_4.png?resize=1024%2C512&amp;ssl=1 1024w, /downloaded/beam-dental-logo_4.png?resize=768%2C384&amp;ssl=1 768w, /downloaded/beam-dental-logo_4.png?resize=1536%2C768&amp;ssl=1 1536w" sizes="(max-width: 1590px) 100vw, 1590px" data-attachment-id="51" data-permalink="https://beamdental.id/beam-dental-logo/" data-orig-file="/downloaded/beam-dental-logo_3.png" data-orig-size="1590,795" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="beam dental logo" data-image-description="" data-image-caption="" data-large-file="/downloaded/beam-dental-logo_4.png?fit=1024%2C512&amp;ssl=1" />                <!-- <span>Beam Dental Clinic</span> -->
            </a>
            <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Buka menu">
                <span class="nav-toggle__icon nav-toggle__icon--menu" aria-hidden="true"><svg class="icon icon--menu-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg></span>
                <span class="nav-toggle__icon nav-toggle__icon--close" aria-hidden="true"><svg class="icon icon--x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 6l12 12"/><path d="m6 18 12-12"/></svg></span>
                <span class="screen-reader-text">Menu navigasi</span>
            </button>
            <div class="header-actions">
                <nav id="primary-navigation" class="primary-nav" aria-label="Primary menu">
                    <ul id="menu-primary-menu" class="menu"><li id="menu-item-18" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-18"><a href="/" aria-current="page">Beranda</a></li>
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
    <section class="hero hero--cover" data-hero-carousel>
        <div class="hero__shell">
            <div class="hero__background" aria-hidden="true" data-hero-background style="background-image: url(/downloaded/1_5.png);">
                                    <div class="swiper hero-slider__viewport" data-hero-viewport>
                        <div class="swiper-wrapper">
                                                            <article class="swiper-slide hero-slider__slide is-active" data-hero-image="/downloaded/1_5.png" data-hero-image-mobile="/downloaded/1-1_6.png" data-hero-alt="HERO 1 &#8211; Basic Treatment">
                                                                            <picture class="hero-slider__picture">
                                                                                            <source media="(max-width: 720px)" srcset="/downloaded/1-1_6.png">
                                                                                        <img src="/downloaded/1_5.png" alt="HERO 1 &#8211; Basic Treatment" loading="eager" decoding="async">
                                        </picture>
                                                                    </article>
                                                            <article class="swiper-slide hero-slider__slide" data-hero-image="/downloaded/2_8.png" data-hero-image-mobile="/downloaded/2-1_7.png" data-hero-alt="HERO 2 – Layanan perawatan gigi anak">
                                                                            <picture class="hero-slider__picture">
                                                                                            <source media="(max-width: 720px)" srcset="/downloaded/2-1_7.png">
                                                                                        <img src="/downloaded/2_8.png" alt="HERO 2 – Layanan perawatan gigi anak" loading="lazy" decoding="async">
                                        </picture>
                                                                    </article>
                                                            <article class="swiper-slide hero-slider__slide" data-hero-image="/downloaded/3_10.png" data-hero-image-mobile="/downloaded/3-1_9.png" data-hero-alt="HERO 3 – Dental Implant">
                                                                            <picture class="hero-slider__picture">
                                                                                            <source media="(max-width: 720px)" srcset="/downloaded/3-1_9.png">
                                                                                        <img src="/downloaded/3_10.png" alt="HERO 3 – Dental Implant" loading="lazy" decoding="async">
                                        </picture>
                                                                    </article>
                                                            <article class="swiper-slide hero-slider__slide" data-hero-image="/downloaded/4_12.png" data-hero-image-mobile="/downloaded/4-1_11.png" data-hero-alt="HERO 4 – Syaraf Gigi">
                                                                            <picture class="hero-slider__picture">
                                                                                            <source media="(max-width: 720px)" srcset="/downloaded/4-1_11.png">
                                                                                        <img src="/downloaded/4_12.png" alt="HERO 4 – Syaraf Gigi" loading="lazy" decoding="async">
                                        </picture>
                                                                    </article>
                                                            <article class="swiper-slide hero-slider__slide" data-hero-image="/downloaded/5_14.png" data-hero-image-mobile="/downloaded/5-1_13.png" data-hero-alt="HERO 5 – Estetika Gigi">
                                                                            <picture class="hero-slider__picture">
                                                                                            <source media="(max-width: 720px)" srcset="/downloaded/5-1_13.png">
                                                                                        <img src="/downloaded/5_14.png" alt="HERO 5 – Estetika Gigi" loading="lazy" decoding="async">
                                        </picture>
                                                                    </article>
                                                    </div>
                    </div>
                            </div>
            <div class="hero__overlay">
                <div class="site-container hero__content">
                    <div class="hero-slider__indicators swiper-pagination" data-hero-pagination aria-label="Pilih highlight hero"></div>
                </div>
            </div>

            <div class="hero__floating">
                <aside class="hero__floating-card" aria-label="Tim dokter Beam Dental">
                    <div class="hero__avatar-group" aria-hidden="true">
                                                        <span class="hero__avatar" title="drg. Priska Angelia, Sp.KGA">
                                    <img width="150" height="150" src="/downloaded/Drg-Priska-NEWWWWWW_15.png" class="attachment-thumbnail size-thumbnail wp-post-image" alt="" loading="lazy" decoding="async" srcset="/downloaded/Drg-Priska-NEWWWWWW_15.png 150w, /downloaded/Drg-Priska-NEWWWWWW_15.png?zoom=2&amp;resize=150%2C150&amp;ssl=1 300w, /downloaded/Drg-Priska-NEWWWWWW_15.png?zoom=3&amp;resize=150%2C150&amp;ssl=1 450w" sizes="auto, (max-width: 150px) 100vw, 150px" data-attachment-id="302" data-permalink="https://beamdental.id/dokter-kami/drg-priska-angelia-sp-kga/drg-priska-newwwwww/" data-orig-file="/downloaded/Drg-Priska-NEWWWWWW_15.png?fit=1792%2C2390&amp;ssl=1" data-orig-size="1792,2390" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Drg Priska NEWWWWWW" data-image-description="" data-image-caption="" data-large-file="/downloaded/Drg-Priska-NEWWWWWW_15.png?fit=768%2C1024&amp;ssl=1" />                                </span>
                                                        <span class="hero__avatar" title="drg. Kelvin Suryawan, Cert. Implant">
                                    <img width="150" height="150" src="/downloaded/Drg_-Kelvin-new_16.png" class="attachment-thumbnail size-thumbnail wp-post-image" alt="" loading="lazy" decoding="async" srcset="/downloaded/Drg_-Kelvin-new_16.png 150w, /downloaded/Drg_-Kelvin-new_16.png?zoom=2&amp;resize=150%2C150&amp;ssl=1 300w, /downloaded/Drg_-Kelvin-new_16.png?zoom=3&amp;resize=150%2C150&amp;ssl=1 450w" sizes="auto, (max-width: 150px) 100vw, 150px" data-attachment-id="109" data-permalink="https://beamdental.id/dokter-kami/drg-kelvin-suryawan-cert-implant/drg-kelvin-new/" data-orig-file="/downloaded/Drg_-Kelvin-new_16.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Drg. Kelvin &amp;#8211; new" data-image-description="" data-image-caption="" data-large-file="/downloaded/Drg_-Kelvin-new_16.png?fit=768%2C1024&amp;ssl=1" />                                </span>
                                                        <span class="hero__avatar" title="drg. Kharlina Syafitri M.Si., Sp.Ort">
                                    <img width="150" height="150" src="/downloaded/Drg_-Karlina-new_17.png" class="attachment-thumbnail size-thumbnail wp-post-image" alt="" loading="lazy" decoding="async" srcset="/downloaded/Drg_-Karlina-new_17.png 150w, /downloaded/Drg_-Karlina-new_17.png?zoom=2&amp;resize=150%2C150&amp;ssl=1 300w, /downloaded/Drg_-Karlina-new_17.png?zoom=3&amp;resize=150%2C150&amp;ssl=1 450w" sizes="auto, (max-width: 150px) 100vw, 150px" data-attachment-id="106" data-permalink="https://beamdental.id/dokter-kami/drg-kharlina-syafitri-m-si-sp-ort/drg-karlina-new/" data-orig-file="/downloaded/Drg_-Karlina-new_17.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Drg. Karlina &amp;#8211; new" data-image-description="" data-image-caption="" data-large-file="/downloaded/Drg_-Karlina-new_17.png?fit=768%2C1024&amp;ssl=1" />                                </span>
                                                        <span class="hero__avatar" title="drg. Daisy Supandi, Sp. Pros">
                                    <img width="150" height="150" src="/downloaded/Drg_-Disyi-new_18.png" class="attachment-thumbnail size-thumbnail wp-post-image" alt="" loading="lazy" decoding="async" srcset="/downloaded/Drg_-Disyi-new_18.png 150w, /downloaded/Drg_-Disyi-new_18.png?zoom=2&amp;resize=150%2C150&amp;ssl=1 300w, /downloaded/Drg_-Disyi-new_18.png?zoom=3&amp;resize=150%2C150&amp;ssl=1 450w" sizes="auto, (max-width: 150px) 100vw, 150px" data-attachment-id="100" data-permalink="https://beamdental.id/dokter-kami/drg-daisy-supandi-sp-pros/drg-disyi-new/" data-orig-file="/downloaded/Drg_-Disyi-new_18.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Drg. Disyi &amp;#8211; new" data-image-description="" data-image-caption="" data-large-file="/downloaded/Drg_-Disyi-new_18.png?fit=768%2C1024&amp;ssl=1" />                                </span>
                                                        <span class="hero__avatar" title="drg. Intan, Sp.KGA">
                                    <img width="150" height="150" src="/downloaded/drg_-intan-Sp_KGA-new_19.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="" loading="lazy" decoding="async" srcset="/downloaded/drg_-intan-Sp_KGA-new_19.jpg 150w, /downloaded/drg_-intan-Sp_KGA-new_19.jpg?zoom=2&amp;resize=150%2C150&amp;ssl=1 300w, /downloaded/drg_-intan-Sp_KGA-new_19.jpg?zoom=3&amp;resize=150%2C150&amp;ssl=1 450w" sizes="auto, (max-width: 150px) 100vw, 150px" data-attachment-id="94" data-permalink="https://beamdental.id/dokter-kami/drg-intan-sp-kga/drg-intan-sp-kga-new/" data-orig-file="/downloaded/drg_-intan-Sp_KGA-new_19.jpg?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;1&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="drg. intan, Sp.KGA &amp;#8211; new" data-image-description="" data-image-caption="" data-large-file="/downloaded/drg_-intan-Sp_KGA-new_19.jpg?fit=768%2C1024&amp;ssl=1" />                                </span>
                                            </div>
                    <p>Berkolaborasi dengan tim dokter gigi spesialis multidisiplin untuk hasil klinis terbaik.</p>
                </aside>
            </div>
        </div>
    </section>

    <section class="section section--soft section--spotlight">
        <div class="site-container">
            <div class="spotlight-section">
                <div class="doctor-archive-hero__inner">
                    <aside class="doctor-archive-hero__visual" aria-label="Foto dokter Beam Dental" style="--hero-visual-bg-image: url(/downloaded/tooth-blue_20.png);">
                        <div class="doctor-archive-hero__visual-card">
                                                            <a class="doctor-archive-hero__visual-link" href="/dokter-kami/">
                                                                            <img src="/downloaded/Hero-DokterBB_21.png" alt="Kolaborasi Spesialis di Beam" loading="lazy" decoding="async">
                                                                    </a>
                                                    </div>
                    </aside>
                    <div class="doctor-archive-hero__copy">
                        <div class="section__eyebrow">Tentang Beam Dental Clinic</div>
                        <h2 class="section-heading-title">Perawatan Gigi Lengkap untuk Seluruh Keluarga</h2>
                        <p class="hero__lead">Beam Dental Clinic adalah klinik gigi keluarga dan pusat dokter gigi spesialis di Bintaro yang menyediakan berbagai perawatan dalam satu tempat, mulai dari pemeriksaan rutin, perawatan gigi anak, behel, saluran akar, implan, hingga bedah mulut. Didukung tim dokter yang berpengalaman, teknologi modern, dan suasana yang nyaman untuk anak maupun dewasa, kami membantu setiap pasien mendapatkan perawatan yang tepat dengan pengalaman yang lebih tenang dan menyenangkan.</p>
                        <div>
                            <a class="button button--ghost" href="/dokter-kami/">
                                <span>Kenali Tim Dokter Kami</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="spotlight-section__footer">
                    <article class="spotlight-feature-card">
                        <h3>Harga Terjangkau &amp; Transparan</h3>
                        <p>Dapatkan pilihan perawatan dengan biaya yang jelas dan sesuai kebutuhan Anda.</p>
                    </article>
                    <article class="spotlight-feature-card">
                        <h3>Nyaman untuk Anak &amp; Dewasa</h3>
                        <p>Suasana klinik yang ramah keluarga membantu anak lebih nyaman saat menjalani perawatan.</p>
                    </article>
                    <article class="spotlight-feature-card">
                        <h3>Teknologi Modern</h3>
                        <p>Didukung peralatan dan teknologi terkini untuk membantu pemeriksaan dan perawatan yang lebih akurat.</p>
                    </article>
                </div>
            </div>
        </div>
    </section>

    <section class="section section--soft section--services">
        <div class="site-container">
            <div class="service-showcase" data-service-carousel data-autoplay-delay="3800">
                <div class="service-showcase__slider">
                                        <div class="service-showcase">
                        <div class="fasilitas-showcase__copy">
                            <div class="section__eyebrow">LAYANAN</div>
                            <h2>Layanan Gigi Lengkap dalam Satu Tempat</h2>
                        </div>
                        <div class="service-carousel-nav">
                            <button class="service-control" type="button" data-service-prev aria-label="Layanan sebelumnya"><svg class="icon icon--arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M19 12H5"/><path d="m11 6-6 6 6 6"/></svg></button>
                            <button class="service-control" type="button" data-service-next aria-label="Layanan berikutnya"><svg class="icon icon--arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></button>
                        </div>
                    </div>

                    <div class="service-carousel" data-service-viewport tabindex="0" aria-label="Carousel layanan klinik">
                                                                                                                    <article class="service-carousel__slide service-card" data-service-image="/downloaded/General-treatment_22.png?resize=920%2C690&#038;ssl=1" data-service-title="Basic Treatment" data-service-desc="Pemeriksaan dan perawatan gigi sehari-hari">
                                    <div class="service-card__media">
                                                                                    <img width="920" height="690" src="/downloaded/General-treatment_22.png" class="service-card__image wp-post-image" alt="Basic Treatment" loading="lazy" decoding="async" data-attachment-id="152" data-permalink="https://beamdental.id/layanan/basic-treatment/general-treatment/" data-orig-file="/downloaded/General-treatment_22.png?fit=1254%2C1254&amp;ssl=1" data-orig-size="1254,1254" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="General treatment" data-image-description="" data-image-caption="" data-large-file="/downloaded/General-treatment_22.png?fit=1024%2C1024&amp;ssl=1" />                                                                            </div>
                                    <div class="service-card__content">
                                        <div class="service-card__label">Basic Treatment</div>
                                        <h3>Basic Treatment</h3>
                                        <p>Pemeriksaan dan perawatan gigi sehari-hari</p>
                                    </div>
                                </article>
                                                                                            <article class="service-carousel__slide service-card" data-service-image="/downloaded/Endodontics_23.png?resize=920%2C690&#038;ssl=1" data-service-title="Endodontic" data-service-desc="Solusi untuk infeksi dan saraf gigi">
                                    <div class="service-card__media">
                                                                                    <img width="920" height="690" src="/downloaded/Endodontics_23.png" class="service-card__image wp-post-image" alt="Endodontic" loading="lazy" decoding="async" data-attachment-id="148" data-permalink="https://beamdental.id/layanan/endodontic/endodontics/" data-orig-file="/downloaded/Endodontics_23.png?fit=1254%2C1254&amp;ssl=1" data-orig-size="1254,1254" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Endodontics" data-image-description="" data-image-caption="" data-large-file="/downloaded/Endodontics_23.png?fit=1024%2C1024&amp;ssl=1" />                                                                            </div>
                                    <div class="service-card__content">
                                        <div class="service-card__label">Endodontic</div>
                                        <h3>Endodontic</h3>
                                        <p>Solusi untuk infeksi dan saraf gigi</p>
                                    </div>
                                </article>
                                                                                            <article class="service-carousel__slide service-card" data-service-image="/downloaded/gigi-anak_24.png?resize=920%2C690&#038;ssl=1" data-service-title="Pediatric Dentistry" data-service-desc="Perawatan gigi nyaman untuk anak-anak">
                                    <div class="service-card__media">
                                                                                    <img width="920" height="690" src="/downloaded/gigi-anak_24.png" class="service-card__image wp-post-image" alt="Pediatric Dentistry" loading="lazy" decoding="async" data-attachment-id="145" data-permalink="https://beamdental.id/layanan/pediatric-dentistry/gigi-anak/" data-orig-file="/downloaded/gigi-anak_24.png?fit=1254%2C1254&amp;ssl=1" data-orig-size="1254,1254" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="gigi anak" data-image-description="" data-image-caption="" data-large-file="/downloaded/gigi-anak_24.png?fit=1024%2C1024&amp;ssl=1" />                                                                            </div>
                                    <div class="service-card__content">
                                        <div class="service-card__label">Pediatric Dentistry</div>
                                        <h3>Pediatric Dentistry</h3>
                                        <p>Perawatan gigi nyaman untuk anak-anak</p>
                                    </div>
                                </article>
                                                                                            <article class="service-carousel__slide service-card" data-service-image="/downloaded/Oral-medicine_25.png?resize=920%2C690&#038;ssl=1" data-service-title="Oral Medicine" data-service-desc="Diagnosis dan penanganan kelainan rongga mulut">
                                    <div class="service-card__media">
                                                                                    <img width="920" height="690" src="/downloaded/Oral-medicine_25.png" class="service-card__image wp-post-image" alt="Oral Medicine" loading="lazy" decoding="async" data-attachment-id="142" data-permalink="https://beamdental.id/layanan/oral-medicine/oral-medicine/" data-orig-file="/downloaded/Oral-medicine_25.png?fit=1254%2C1254&amp;ssl=1" data-orig-size="1254,1254" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Oral medicine" data-image-description="" data-image-caption="" data-large-file="/downloaded/Oral-medicine_25.png?fit=1024%2C1024&amp;ssl=1" />                                                                            </div>
                                    <div class="service-card__content">
                                        <div class="service-card__label">Oral Medicine</div>
                                        <h3>Oral Medicine</h3>
                                        <p>Diagnosis dan penanganan kelainan rongga mulut</p>
                                    </div>
                                </article>
                                                                                            <article class="service-carousel__slide service-card" data-service-image="/downloaded/ortodontis_26.png?resize=920%2C690&#038;ssl=1" data-service-title="Orthodontics" data-service-desc="Merapikan susunan gigi untuk senyum ideal">
                                    <div class="service-card__media">
                                                                                    <img width="920" height="690" src="/downloaded/ortodontis_26.png" class="service-card__image wp-post-image" alt="Orthodontics" loading="lazy" decoding="async" data-attachment-id="139" data-permalink="https://beamdental.id/layanan/orthodontics/ortodontis/" data-orig-file="/downloaded/ortodontis_26.png?fit=1254%2C1254&amp;ssl=1" data-orig-size="1254,1254" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="ortodontis" data-image-description="" data-image-caption="" data-large-file="/downloaded/ortodontis_26.png?fit=1024%2C1024&amp;ssl=1" />                                                                            </div>
                                    <div class="service-card__content">
                                        <div class="service-card__label">Orthodontics</div>
                                        <h3>Orthodontics</h3>
                                        <p>Merapikan susunan gigi untuk senyum ideal</p>
                                    </div>
                                </article>
                                                                                            <article class="service-carousel__slide service-card" data-service-image="/downloaded/Maxilofacial-surgery_27.png?resize=920%2C690&#038;ssl=1" data-service-title="Oral &amp; Maxillofacial Surgery" data-service-desc="Penanganan bedah gigi dan rahang">
                                    <div class="service-card__media">
                                                                                    <img width="920" height="690" src="/downloaded/Maxilofacial-surgery_27.png" class="service-card__image wp-post-image" alt="Oral &amp; Maxillofacial Surgery" loading="lazy" decoding="async" data-attachment-id="136" data-permalink="https://beamdental.id/layanan/oral-maxillofacial-surgery/maxilofacial-surgery/" data-orig-file="/downloaded/Maxilofacial-surgery_27.png?fit=1254%2C1254&amp;ssl=1" data-orig-size="1254,1254" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Maxilofacial surgery" data-image-description="" data-image-caption="" data-large-file="/downloaded/Maxilofacial-surgery_27.png?fit=1024%2C1024&amp;ssl=1" />                                                                            </div>
                                    <div class="service-card__content">
                                        <div class="service-card__label">Oral &amp; Maxillofacial Surgery</div>
                                        <h3>Oral &amp; Maxillofacial Surgery</h3>
                                        <p>Penanganan bedah gigi dan rahang</p>
                                    </div>
                                </article>
                                                                                            <article class="service-carousel__slide service-card" data-service-image="/downloaded/Prosthodontics_28.png?resize=920%2C690&#038;ssl=1" data-service-title="Prosthodontic" data-service-desc="Mengembalikan fungsi dan estetika gigi">
                                    <div class="service-card__media">
                                                                                    <img width="920" height="690" src="/downloaded/Prosthodontics_28.png" class="service-card__image wp-post-image" alt="Prosthodontic" loading="lazy" decoding="async" data-attachment-id="133" data-permalink="https://beamdental.id/layanan/prosthodontic/prosthodontics/" data-orig-file="/downloaded/Prosthodontics_28.png?fit=1254%2C1254&amp;ssl=1" data-orig-size="1254,1254" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Prosthodontics" data-image-description="" data-image-caption="" data-large-file="/downloaded/Prosthodontics_28.png?fit=1024%2C1024&amp;ssl=1" />                                                                            </div>
                                    <div class="service-card__content">
                                        <div class="service-card__label">Prosthodontic</div>
                                        <h3>Prosthodontic</h3>
                                        <p>Mengembalikan fungsi dan estetika gigi</p>
                                    </div>
                                </article>
                                                                                                    </div>

                    <div class="article-section__actions">
                        <a class="button button--ghost button--service" href="/layanan/">
                            <span>Semua Layanan</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section section--soft section--facilities">
        <div class="site-container">
            <div class="fasilitas-showcase fasilitas-showcase--simple fasilitas-showcase--wireframe" data-fasilitas-carousel data-autoplay-delay="4200">
                
                <div class="fasilitas-hero-wrap">
                    <img class="fasilitas__hero-image" src="/downloaded/Ruang-perawatan-1_29.png" alt="Ruang Perawatan 1" loading="lazy" decoding="async">
                </div>

                <div class="fasilitas-showcase__copy">
                    <div class="section__eyebrow">FASILITAS</div>
                    <h2>Fasilitas Klinis Berstandar Tinggi Untuk Anda</h2>
                </div>

                <div class="fasilitas-showcase__slider">
                    <div class="fasilitas-carousel-nav">
                        <button class="fasilitas-control" type="button" data-fasilitas-prev aria-label="Fasilitas sebelumnya"><svg class="icon icon--arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M19 12H5"/><path d="m11 6-6 6 6 6"/></svg></button>
                        <button class="fasilitas-control" type="button" data-fasilitas-next aria-label="Fasilitas berikutnya"><svg class="icon icon--arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></button>
                    </div>

                    <div class="fasilitas-carousel" data-fasilitas-viewport tabindex="0" aria-label="Carousel fasilitas klinik">
                                                                                                                    <article class="fasilitas-slide" data-fasilitas-image="/downloaded/Ruang-perawatan-1_29.png" data-fasilitas-title="Ruang Perawatan 1">
                                    <div class="fasilitas-slide__media">
                                                                                    <img width="880" height="580" src="/downloaded/Ruang-perawatan-1_30.png" class="fasilitas-slide__image wp-post-image" alt="Ruang Perawatan 1" loading="lazy" decoding="async" data-attachment-id="179" data-permalink="https://beamdental.id/?attachment_id=179" data-orig-file="/downloaded/Ruang-perawatan-1_30.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Ruang perawatan 1" data-image-description="" data-image-caption="" data-large-file="/downloaded/Ruang-perawatan-1_30.png?fit=768%2C1024&amp;ssl=1" />                                                                            </div>
                                </article>
                                                                                            <article class="fasilitas-slide" data-fasilitas-image="/downloaded/Resepsionis_31.png?resize=880%2C580&#038;ssl=1" data-fasilitas-title="Resepsionis">
                                    <div class="fasilitas-slide__media">
                                                                                    <img width="880" height="580" src="/downloaded/Resepsionis_31.png" class="fasilitas-slide__image wp-post-image" alt="Resepsionis" loading="lazy" decoding="async" data-attachment-id="176" data-permalink="https://beamdental.id/?attachment_id=176" data-orig-file="/downloaded/Resepsionis_31.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Resepsionis" data-image-description="" data-image-caption="" data-large-file="/downloaded/Resepsionis_31.png?fit=768%2C1024&amp;ssl=1" />                                                                            </div>
                                </article>
                                                                                            <article class="fasilitas-slide" data-fasilitas-image="/downloaded/Ruang-perawatan-2_32.png?resize=880%2C580&#038;ssl=1" data-fasilitas-title="Ruang Perawatan 2">
                                    <div class="fasilitas-slide__media">
                                                                                    <img width="880" height="580" src="/downloaded/Ruang-perawatan-2_32.png" class="fasilitas-slide__image wp-post-image" alt="Ruang Perawatan 2" loading="lazy" decoding="async" data-attachment-id="173" data-permalink="https://beamdental.id/?attachment_id=173" data-orig-file="/downloaded/Ruang-perawatan-2_32.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Ruang perawatan 2" data-image-description="" data-image-caption="" data-large-file="/downloaded/Ruang-perawatan-2_32.png?fit=768%2C1024&amp;ssl=1" />                                                                            </div>
                                </article>
                                                                                            <article class="fasilitas-slide" data-fasilitas-image="/downloaded/Ruang-perawatan-4_33.png?resize=880%2C580&#038;ssl=1" data-fasilitas-title="Ruang Perawatan 4">
                                    <div class="fasilitas-slide__media">
                                                                                    <img width="880" height="580" src="/downloaded/Ruang-perawatan-4_33.png" class="fasilitas-slide__image wp-post-image" alt="Ruang Perawatan 4" loading="lazy" decoding="async" data-attachment-id="170" data-permalink="https://beamdental.id/?attachment_id=170" data-orig-file="/downloaded/Ruang-perawatan-4_33.png?fit=1254%2C1254&amp;ssl=1" data-orig-size="1254,1254" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Ruang perawatan 4" data-image-description="" data-image-caption="" data-large-file="/downloaded/Ruang-perawatan-4_33.png?fit=1024%2C1024&amp;ssl=1" />                                                                            </div>
                                </article>
                                                                                            <article class="fasilitas-slide" data-fasilitas-image="/downloaded/Ruang-perawatan-3_34.png?resize=880%2C580&#038;ssl=1" data-fasilitas-title="Ruang Perawatan 3">
                                    <div class="fasilitas-slide__media">
                                                                                    <img width="880" height="580" src="/downloaded/Ruang-perawatan-3_34.png" class="fasilitas-slide__image wp-post-image" alt="Ruang Perawatan 3" loading="lazy" decoding="async" data-attachment-id="167" data-permalink="https://beamdental.id/?attachment_id=167" data-orig-file="/downloaded/Ruang-perawatan-3_34.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Ruang perawatan 3" data-image-description="" data-image-caption="" data-large-file="/downloaded/Ruang-perawatan-3_34.png?fit=768%2C1024&amp;ssl=1" />                                                                            </div>
                                </article>
                                                                                            <article class="fasilitas-slide" data-fasilitas-image="/downloaded/Playroom_35.png?resize=880%2C580&#038;ssl=1" data-fasilitas-title="Playroom">
                                    <div class="fasilitas-slide__media">
                                                                                    <img width="880" height="580" src="/downloaded/Playroom_35.png" class="fasilitas-slide__image wp-post-image" alt="Playroom" loading="lazy" decoding="async" data-attachment-id="164" data-permalink="https://beamdental.id/?attachment_id=164" data-orig-file="/downloaded/Playroom_35.png?fit=1254%2C1254&amp;ssl=1" data-orig-size="1254,1254" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Playroom" data-image-description="" data-image-caption="" data-large-file="/downloaded/Playroom_35.png?fit=1024%2C1024&amp;ssl=1" />                                                                            </div>
                                </article>
                                                                                            <article class="fasilitas-slide" data-fasilitas-image="/downloaded/Ruang-Tunggu_36.png?resize=880%2C580&#038;ssl=1" data-fasilitas-title="Ruang Tunggu">
                                    <div class="fasilitas-slide__media">
                                                                                    <img width="880" height="580" src="/downloaded/Ruang-Tunggu_36.png" class="fasilitas-slide__image wp-post-image" alt="Ruang Tunggu" loading="lazy" decoding="async" data-attachment-id="161" data-permalink="https://beamdental.id/?attachment_id=161" data-orig-file="/downloaded/Ruang-Tunggu_36.png?fit=1448%2C1086&amp;ssl=1" data-orig-size="1448,1086" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Ruang Tunggu" data-image-description="" data-image-caption="" data-large-file="/downloaded/Ruang-Tunggu_36.png?fit=1024%2C768&amp;ssl=1" />                                                                            </div>
                                </article>
                                                                                            <article class="fasilitas-slide" data-fasilitas-image="/downloaded/Mushola_37.png?resize=880%2C580&#038;ssl=1" data-fasilitas-title="Musola">
                                    <div class="fasilitas-slide__media">
                                                                                    <img width="880" height="580" src="/downloaded/Mushola_37.png" class="fasilitas-slide__image wp-post-image" alt="Musola" loading="lazy" decoding="async" data-attachment-id="158" data-permalink="https://beamdental.id/?attachment_id=158" data-orig-file="/downloaded/Mushola_37.png?fit=1448%2C1086&amp;ssl=1" data-orig-size="1448,1086" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Mushola" data-image-description="" data-image-caption="" data-large-file="/downloaded/Mushola_37.png?fit=1024%2C768&amp;ssl=1" />                                                                            </div>
                                </article>
                                                                                            <article class="fasilitas-slide" data-fasilitas-image="/downloaded/Toilet_38.png?resize=880%2C580&#038;ssl=1" data-fasilitas-title="Toilet">
                                    <div class="fasilitas-slide__media">
                                                                                    <img width="880" height="580" src="/downloaded/Toilet_38.png" class="fasilitas-slide__image wp-post-image" alt="Toilet" loading="lazy" decoding="async" data-attachment-id="155" data-permalink="https://beamdental.id/?attachment_id=155" data-orig-file="/downloaded/Toilet_38.png?fit=1254%2C1254&amp;ssl=1" data-orig-size="1254,1254" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Toilet" data-image-description="" data-image-caption="" data-large-file="/downloaded/Toilet_38.png?fit=1024%2C1024&amp;ssl=1" />                                                                            </div>
                                </article>
                                                                                                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section section--soft section--reviews">
        <div class="site-container">
            <div class="review-showcase">
                <div class="review-showcase__intro" style="--review-pattern-image: url(/downloaded/smile-pattern-blue_39.png);">
                    <div class="section__eyebrow">Dipercaya Ribuan Pasien di Bintaro</div>
                    <h2>Banyak pasien datang karena rekomendasi keluarga dan teman. Berikut pengalaman mereka setelah menjalani perawatan di Beam Dental Clinic.</h2>
                    <!-- <p>Social proof adalah elemen penting untuk landing page yang mendukung Ads dan pencarian brand.</p> -->
                </div>
                <div class="review-showcase__cards">
                    <div class="review-showcase__track">
                                                        <article class="testimonial-card">
                                    <div class="doctor-card__content">
                                        <div class="testimonial-card__rating">★★★★★</div>
                                        <h3>Oki Ramadhani</h3>
                                        <p>Dapet jadwal dengan drg. Sekar untuk pertama kali dan lega bgt ternyata drg. Sekar sangat ramah, supel, dan semua penjelasannya gak membingungkan.</p>
                                    </div>
                                </article>
                                                            <article class="testimonial-card">
                                    <div class="doctor-card__content">
                                        <div class="testimonial-card__rating">★★★★★</div>
                                        <h3>Wildan Nugroho</h3>
                                        <p>&#8230;dan unexpectedly sakit dan keluar darah saat sikat gigi jadi hilang. terima kasih buat drg. Kelvin sudah sabar dan sangat telaten saat scalling gigi saya. bintang 5 bet lah pokoknya</p>
                                    </div>
                                </article>
                                                            <article class="testimonial-card">
                                    <div class="doctor-card__content">
                                        <div class="testimonial-card__rating">★★★★★</div>
                                        <h3>Sara Deasy Wulandari</h3>
                                        <p>Sekarang ga perlu jauh2 lagi ke Drg Anak krn ada Beam Dental Bintaro Terima kasih Dokter Priska yang sudah sabar mengangani &amp; jelasin dengan detail.</p>
                                    </div>
                                </article>
                                                </div>
                    <a class="button button--ghost review-showcase__button" href="https://maps.app.goo.gl/8zxcf6jCnEEwnfEw6" target="_blank" rel="noopener noreferrer">Lihat Review di Google Maps</a>
                </div>
            </div>
        </div>
    </section>

    <section class="section section--soft section--inclusive-dental">
        <div class="site-container">
            <div class="inclusive-dental">
                <div class="inclusive-dental__media" style="--hero-visual-bg-image: url(/downloaded/tooth-blue_20.png);">
                    <div class="inclusive-dental__media-frame">
                                                                            <img src="/downloaded/Perawatan-Gigi-Anak-Berkebutuhan-Khusus_40.png" alt="Perawatan Dental Inklusif untuk Anak Istimewa" loading="lazy" decoding="async">
                                            </div>
                </div>
                <div class="inclusive-dental__copy">
                    <div class="section__eyebrow">SPECIAL NEEDS FRIENDLY</div>
                    <h2>Perawatan Gigi untuk Anak Berkebutuhan Khusus</h2>
                    <p>Setiap anak memiliki kebutuhan yang berbeda. Tim Beam Dental Clinic berupaya menciptakan pengalaman perawatan yang lebih nyaman, tenang, dan sesuai dengan kondisi masing-masing anak. Konsultasikan kebutuhan buah hati Anda dengan tim kami untuk mendapatkan pendampingan yang tepat sebelum kunjungan.</p>
                    <div>
                        <a class="button button--ghost" href="/kontak/">
                            <span>Jadwalkan Perawatan</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section section--soft">
        <div class="site-container">
            <div class="article-showcase" data-article-carousel>
                <div class="article-showcase__header">
                    <div class="section-heading">
                        <div>
                            <h2>Artikel Terbaru</h2>
                            <p>Informasi Seputar Kesehatan Gigi untuk Anda dan Keluarga</p>
                        </div>
                    </div>
                </div>
                <div class="post-grid" data-article-viewport tabindex="0" aria-label="Carousel artikel terbaru">
                                                <article class="article-card">
                                <div class="post-card__thumb">
                                                                            <img width="920" height="690" src="/downloaded/Gemini_Generated_Image_q1fdecq1fdecq1fd_41.png" class="attachment-newbeamdental-card size-newbeamdental-card wp-post-image" alt="" decoding="async" srcset="/downloaded/Gemini_Generated_Image_q1fdecq1fdecq1fd_41.png 920w, /downloaded/Gemini_Generated_Image_q1fdecq1fdecq1fd_41.png?zoom=2&amp;resize=920%2C690&amp;ssl=1 1840w, /downloaded/Gemini_Generated_Image_q1fdecq1fdecq1fd_41.png?zoom=3&amp;resize=920%2C690&amp;ssl=1 2760w" sizes="(max-width: 920px) 100vw, 920px" data-attachment-id="253" data-permalink="https://beamdental.id/jangan-langsung-dicabut-gigi-nyeri-mungkin-masih-bisa-diselamatkan/gemini_generated_image_q1fdecq1fdecq1fd/" data-orig-file="/downloaded/Gemini_Generated_Image_q1fdecq1fdecq1fd_41.png?fit=2816%2C1536&amp;ssl=1" data-orig-size="2816,1536" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Gemini_Generated_Image_q1fdecq1fdecq1fd" data-image-description="" data-image-caption="" data-large-file="/downloaded/Gemini_Generated_Image_q1fdecq1fdecq1fd_41.png?fit=1024%2C559&amp;ssl=1" />                                                                    </div>
                                <div class="article-card__content">
                                    <div class="article-card__meta">10 June 2026</div>
                                    <h3><a href="/jangan-langsung-dicabut-gigi-nyeri-mungkin-masih-bisa-diselamatkan/">Jangan Langsung Dicabut, Gigi Nyeri Mungkin Masih Bisa Diselamatkan</a></h3>
                                    <p>Saat mengalami sakit gigi yang hebat, banyak orang langsung berpikir bahwa pencabutan adalah satu-satunya solusi. Padahal dalam banyak kasus, gigi yang mengalami&hellip;</p>
                                </div>
                            </article>
                                                    <article class="article-card">
                                <div class="post-card__thumb">
                                                                            <img width="920" height="690" src="/downloaded/Gemini_Generated_Image_7zp2om7zp2om7zp2_42.png" class="attachment-newbeamdental-card size-newbeamdental-card wp-post-image" alt="" decoding="async" srcset="/downloaded/Gemini_Generated_Image_7zp2om7zp2om7zp2_42.png 920w, /downloaded/Gemini_Generated_Image_7zp2om7zp2om7zp2_42.png?zoom=2&amp;resize=920%2C690&amp;ssl=1 1840w, /downloaded/Gemini_Generated_Image_7zp2om7zp2om7zp2_42.png?zoom=3&amp;resize=920%2C690&amp;ssl=1 2760w" sizes="(max-width: 920px) 100vw, 920px" data-attachment-id="248" data-permalink="https://beamdental.id/kehilangan-gigi-kenali-pilihan-perawatan-implan-gigi/gemini_generated_image_7zp2om7zp2om7zp2/" data-orig-file="/downloaded/Gemini_Generated_Image_7zp2om7zp2om7zp2_42.png?fit=2816%2C1536&amp;ssl=1" data-orig-size="2816,1536" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Gemini_Generated_Image_7zp2om7zp2om7zp2" data-image-description="" data-image-caption="" data-large-file="/downloaded/Gemini_Generated_Image_7zp2om7zp2om7zp2_42.png?fit=1024%2C559&amp;ssl=1" />                                                                    </div>
                                <div class="article-card__content">
                                    <div class="article-card__meta">10 June 2026</div>
                                    <h3><a href="/kehilangan-gigi-kenali-pilihan-perawatan-implan-gigi/">Kehilangan Gigi? Kenali Pilihan Perawatan Implan Gigi</a></h3>
                                    <p>Kehilangan gigi bukan hanya memengaruhi penampilan, tetapi juga dapat berdampak pada fungsi mengunyah, kemampuan berbicara, hingga rasa percaya diri. Salah satu solusi&hellip;</p>
                                </div>
                            </article>
                                                    <article class="article-card">
                                <div class="post-card__thumb">
                                                                            <img width="920" height="690" src="/downloaded/Gemini_Generated_Image_hhtiychhtiychhti_43.png" class="attachment-newbeamdental-card size-newbeamdental-card wp-post-image" alt="" decoding="async" srcset="/downloaded/Gemini_Generated_Image_hhtiychhtiychhti_43.png 920w, /downloaded/Gemini_Generated_Image_hhtiychhtiychhti_43.png?zoom=2&amp;resize=920%2C690&amp;ssl=1 1840w, /downloaded/Gemini_Generated_Image_hhtiychhtiychhti_43.png?zoom=3&amp;resize=920%2C690&amp;ssl=1 2760w" sizes="(max-width: 920px) 100vw, 920px" data-attachment-id="241" data-permalink="https://beamdental.id/kapan-waktu-yang-tepat-membawa-anak-ke-dokter-gigi/gemini_generated_image_hhtiychhtiychhti/" data-orig-file="/downloaded/Gemini_Generated_Image_hhtiychhtiychhti_43.png?fit=2816%2C1536&amp;ssl=1" data-orig-size="2816,1536" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Gemini_Generated_Image_hhtiychhtiychhti" data-image-description="" data-image-caption="" data-large-file="/downloaded/Gemini_Generated_Image_hhtiychhtiychhti_43.png?fit=1024%2C559&amp;ssl=1" />                                                                    </div>
                                <div class="article-card__content">
                                    <div class="article-card__meta">10 June 2026</div>
                                    <h3><a href="/kapan-waktu-yang-tepat-membawa-anak-ke-dokter-gigi/">Kapan Waktu yang Tepat Membawa Anak ke Dokter Gigi?</a></h3>
                                    <p>Banyak orang tua menganggap kunjungan ke dokter gigi baru diperlukan ketika anak mengeluh sakit gigi. Padahal, pemeriksaan gigi sejak dini merupakan salah&hellip;</p>
                                </div>
                            </article>
                                        </div>
                <div class="article-section__actions">
                    <a class="button button--ghost" href="/artikel/">Semua Artikel</a>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="site-container cta-banner">
            <div class="cta-banner__inner">
                <div>
                    <h2>Cari Tahu Biaya Perawatan Sebelum Datang</h2>
                    <p>Ingin mengetahui estimasi biaya perawatan atau apakah asuransi Anda dapat digunakan? Isi data Anda dan tim kami akan membantu memberikan informasi yang dibutuhkan melalui WhatsApp.</p>
                </div>
                <div class="cta-banner__actions">
                    <a class="button" href="/kontak/" target="_blank" rel="noopener noreferrer">Dapatkan Detail Biaya</a>
                </div>
            </div>
        </div>
    </section>

    
            <section class="section section--insurance">
            <div class="site-container">
                <div class="insurance-showcase" data-insurance-carousel>
                    <div class="insurance-showcase__intro">
                        <p class="section__eyebrow"></p>
                        <h2>Gunakan Asuransi Rekanan untuk Perawatan yang Lebih Praktis</h2>
                    </div>

                    <div class="insurance-showcase__shell">
                        <button class="insurance-control" type="button" data-insurance-prev aria-label="Asuransi sebelumnya">
                            <svg class="icon icon--arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M19 12H5"/><path d="m11 6-6 6 6 6"/></svg>                        </button>

                        <div class="insurance-carousel" data-insurance-viewport tabindex="0" aria-label="Carousel asuransi rekanan">
                                                                                            <article class="insurance-carousel__slide insurance-card" data-insurance-name="Halodoc" data-insurance-image="/downloaded/Halodoc_44.png">
                                    <div class="insurance-card__media">
                                                                                    <img src="/downloaded/Halodoc_44.png" alt="Halodoc" loading="lazy" decoding="async">
                                                                            </div>
                                    <div class="insurance-card__content">
                                        <h3>Halodoc</h3>
                                    </div>
                                </article>
                                                                                            <article class="insurance-carousel__slide insurance-card" data-insurance-name="Admedika" data-insurance-image="/downloaded/Admedika_45.png">
                                    <div class="insurance-card__media">
                                                                                    <img src="/downloaded/Admedika_45.png" alt="Admedika" loading="lazy" decoding="async">
                                                                            </div>
                                    <div class="insurance-card__content">
                                        <h3>Admedika</h3>
                                    </div>
                                </article>
                                                                                            <article class="insurance-carousel__slide insurance-card" data-insurance-name="BCA Life" data-insurance-image="/downloaded/BCA_Life_46.png">
                                    <div class="insurance-card__media">
                                                                                    <img src="/downloaded/BCA_Life_46.png" alt="BCA Life" loading="lazy" decoding="async">
                                                                            </div>
                                    <div class="insurance-card__content">
                                        <h3>BCA Life</h3>
                                    </div>
                                </article>
                                                                                            <article class="insurance-carousel__slide insurance-card" data-insurance-name="AXA Mandiri" data-insurance-image="/downloaded/AXA_Mandiri_2016_47.png">
                                    <div class="insurance-card__media">
                                                                                    <img src="/downloaded/AXA_Mandiri_2016_47.png" alt="AXA Mandiri" loading="lazy" decoding="async">
                                                                            </div>
                                    <div class="insurance-card__content">
                                        <h3>AXA Mandiri</h3>
                                    </div>
                                </article>
                                                                                            <article class="insurance-carousel__slide insurance-card" data-insurance-name="AXA Financial Indonesia" data-insurance-image="/downloaded/AXA-Financial-Indonesia_48.png">
                                    <div class="insurance-card__media">
                                                                                    <img src="/downloaded/AXA-Financial-Indonesia_48.png" alt="AXA Financial Indonesia" loading="lazy" decoding="async">
                                                                            </div>
                                    <div class="insurance-card__content">
                                        <h3>AXA Financial Indonesia</h3>
                                    </div>
                                </article>
                                                                                            <article class="insurance-carousel__slide insurance-card" data-insurance-name="Sequis Life" data-insurance-image="/downloaded/Sequis-Life_49.jpg">
                                    <div class="insurance-card__media">
                                                                                    <img src="/downloaded/Sequis-Life_49.jpg" alt="Sequis Life" loading="lazy" decoding="async">
                                                                            </div>
                                    <div class="insurance-card__content">
                                        <h3>Sequis Life</h3>
                                    </div>
                                </article>
                                                                                            <article class="insurance-carousel__slide insurance-card" data-insurance-name="Sun Life" data-insurance-image="/downloaded/Sun-Life_50.png">
                                    <div class="insurance-card__media">
                                                                                    <img src="/downloaded/Sun-Life_50.png" alt="Sun Life" loading="lazy" decoding="async">
                                                                            </div>
                                    <div class="insurance-card__content">
                                        <h3>Sun Life</h3>
                                    </div>
                                </article>
                                                                                            <article class="insurance-carousel__slide insurance-card" data-insurance-name="Tokio Marine" data-insurance-image="/downloaded/Tokio-Marine_51.png">
                                    <div class="insurance-card__media">
                                                                                    <img src="/downloaded/Tokio-Marine_51.png" alt="Tokio Marine" loading="lazy" decoding="async">
                                                                            </div>
                                    <div class="insurance-card__content">
                                        <h3>Tokio Marine</h3>
                                    </div>
                                </article>
                                                                                            <article class="insurance-carousel__slide insurance-card" data-insurance-name="Great Eastern" data-insurance-image="/downloaded/Great-Eastern_52.png">
                                    <div class="insurance-card__media">
                                                                                    <img src="/downloaded/Great-Eastern_52.png" alt="Great Eastern" loading="lazy" decoding="async">
                                                                            </div>
                                    <div class="insurance-card__content">
                                        <h3>Great Eastern</h3>
                                    </div>
                                </article>
                                                                                            <article class="insurance-carousel__slide insurance-card" data-insurance-name="Chubb Life" data-insurance-image="/downloaded/Chubb-Life_53.png">
                                    <div class="insurance-card__media">
                                                                                    <img src="/downloaded/Chubb-Life_53.png" alt="Chubb Life" loading="lazy" decoding="async">
                                                                            </div>
                                    <div class="insurance-card__content">
                                        <h3>Chubb Life</h3>
                                    </div>
                                </article>
                                                                                            <article class="insurance-carousel__slide insurance-card" data-insurance-name="Manulife" data-insurance-image="/downloaded/Manulife_54.png">
                                    <div class="insurance-card__media">
                                                                                    <img src="/downloaded/Manulife_54.png" alt="Manulife" loading="lazy" decoding="async">
                                                                            </div>
                                    <div class="insurance-card__content">
                                        <h3>Manulife</h3>
                                    </div>
                                </article>
                                                                                            <article class="insurance-carousel__slide insurance-card" data-insurance-name="Astra Life" data-insurance-image="/downloaded/Astralife_55.webp">
                                    <div class="insurance-card__media">
                                                                                    <img src="/downloaded/Astralife_55.webp" alt="Astra Life" loading="lazy" decoding="async">
                                                                            </div>
                                    <div class="insurance-card__content">
                                        <h3>Astra Life</h3>
                                    </div>
                                </article>
                                                                                            <article class="insurance-carousel__slide insurance-card" data-insurance-name="ACA Insurance" data-insurance-image="/downloaded/ACA-Insurance_56.png">
                                    <div class="insurance-card__media">
                                                                                    <img src="/downloaded/ACA-Insurance_56.png" alt="ACA Insurance" loading="lazy" decoding="async">
                                                                            </div>
                                    <div class="insurance-card__content">
                                        <h3>ACA Insurance</h3>
                                    </div>
                                </article>
                                                                                            <article class="insurance-carousel__slide insurance-card" data-insurance-name="PertaLife Insurance" data-insurance-image="/downloaded/PertaLife-Insurance_57.jpg">
                                    <div class="insurance-card__media">
                                                                                    <img src="/downloaded/PertaLife-Insurance_57.jpg" alt="PertaLife Insurance" loading="lazy" decoding="async">
                                                                            </div>
                                    <div class="insurance-card__content">
                                        <h3>PertaLife Insurance</h3>
                                    </div>
                                </article>
                                                    </div>

                        <button class="insurance-control" type="button" data-insurance-next aria-label="Asuransi berikutnya">
                            <svg class="icon icon--arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>                        </button>
                    </div>
                </div>
            </div>
        </section>

    
    <section class="section" id="home-faq">
        <div class="site-container">
            <div class="section-heading">
                <div>
                    <h2>FAQ</h2>
                    <p>Temukan jawaban atas beberapa pertanyaan yang paling sering ditanyakan pasien sebelum berkunjung ke Beam Dental Clinic.</p>
                </div>
            </div>
                <div class="faq-accordion">
        <div class="faq-item" id="faq-222">
    <button id="faq-222-button" class="faq-question" aria-expanded="false" aria-controls="faq-222-panel">
        <span class="faq-question__text">Apakah Beam Dental Clinic memiliki dokter gigi spesialis?</span>
        <span class="faq-question__icon" aria-hidden="true">▾</span>
    </button>
    <div id="faq-222-panel" class="faq-answer" role="region" aria-labelledby="faq-222-button">
        
<p class="wp-block-paragraph">Ya. Beam Dental Clinic didukung oleh dokter gigi umum dan berbagai dokter gigi spesialis yang menangani kebutuhan perawatan mulai dari gigi anak, behel, saluran akar, implan, bedah mulut, hingga rehabilitasi gigi.</p>
    </div>
</div>
<div class="faq-item" id="faq-225">
    <button id="faq-225-button" class="faq-question" aria-expanded="false" aria-controls="faq-225-panel">
        <span class="faq-question__text">Apakah Beam Dental Clinic melayani perawatan gigi anak?</span>
        <span class="faq-question__icon" aria-hidden="true">▾</span>
    </button>
    <div id="faq-225-panel" class="faq-answer" role="region" aria-labelledby="faq-225-button">
        
<p class="wp-block-paragraph">Tentu. Kami menyediakan layanan dokter gigi anak dengan pendekatan yang ramah dan nyaman untuk membantu anak menjalani perawatan gigi dengan lebih tenang.</p>
    </div>
</div>
<div class="faq-item" id="faq-227">
    <button id="faq-227-button" class="faq-question" aria-expanded="false" aria-controls="faq-227-panel">
        <span class="faq-question__text">Berapa biaya perawatan gigi di Beam Dental Clinic?</span>
        <span class="faq-question__icon" aria-hidden="true">▾</span>
    </button>
    <div id="faq-227-panel" class="faq-answer" role="region" aria-labelledby="faq-227-button">
        
<p class="wp-block-paragraph">Biaya perawatan dapat berbeda tergantung kondisi dan jenis tindakan yang dibutuhkan. Anda dapat menghubungi tim kami untuk mendapatkan estimasi biaya sebelum melakukan kunjungan.</p>
    </div>
</div>
<div class="faq-item" id="faq-229">
    <button id="faq-229-button" class="faq-question" aria-expanded="false" aria-controls="faq-229-panel">
        <span class="faq-question__text">Apakah saya bisa menggunakan asuransi untuk perawatan?</span>
        <span class="faq-question__icon" aria-hidden="true">▾</span>
    </button>
    <div id="faq-229-panel" class="faq-answer" role="region" aria-labelledby="faq-229-button">
        
<p class="wp-block-paragraph">Beam Dental Clinic bekerja sama dengan berbagai asuransi dan corporate partner. Silakan hubungi tim kami untuk mengecek apakah asuransi yang Anda miliki dapat digunakan.</p>
    </div>
</div>
<div class="faq-item" id="faq-231">
    <button id="faq-231-button" class="faq-question" aria-expanded="false" aria-controls="faq-231-panel">
        <span class="faq-question__text">Apakah perlu membuat janji sebelum datang?</span>
        <span class="faq-question__icon" aria-hidden="true">▾</span>
    </button>
    <div id="faq-231-panel" class="faq-answer" role="region" aria-labelledby="faq-231-button">
        
<p class="wp-block-paragraph">Kami menyarankan pasien untuk melakukan reservasi terlebih dahulu agar dapat memperoleh jadwal kunjungan yang lebih nyaman dan sesuai dengan dokter yang dibutuhkan.</p>
    </div>
</div>
    </div>
            </div>
    </section>

</main>
<footer class="site-footer">
    <div class="site-container">
        <div class="footer-grid">
            <div class="footer-col footer-col--brand">
                <a class="footer-brand-mark" href="/" rel="home">
                    <img width="1590" height="795" src="/downloaded/beam-dental-logo_3.png" class="brand-mark__image" alt="" loading="eager" decoding="async" srcset="/downloaded/beam-dental-logo_4.png 1590w, /downloaded/beam-dental-logo_4.png?resize=300%2C150&amp;ssl=1 300w, /downloaded/beam-dental-logo_4.png?resize=1024%2C512&amp;ssl=1 1024w, /downloaded/beam-dental-logo_4.png?resize=768%2C384&amp;ssl=1 768w, /downloaded/beam-dental-logo_4.png?resize=1536%2C768&amp;ssl=1 1536w" sizes="(max-width: 1590px) 100vw, 1590px" data-attachment-id="51" data-permalink="https://beamdental.id/beam-dental-logo/" data-orig-file="/downloaded/beam-dental-logo_3.png" data-orig-size="1590,795" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="beam dental logo" data-image-description="" data-image-caption="" data-large-file="/downloaded/beam-dental-logo_4.png?fit=1024%2C512&amp;ssl=1" />                </a>

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

export default function Home() {
  useEffect(() => {
    let attempts = 0;
    const timer = setInterval(() => {
      attempts++;
      if (typeof window !== 'undefined' && window.initBeamSite) {
        window.initBeamSite();
        const swiperEl = document.querySelector('[data-hero-viewport]');
        if (swiperEl && swiperEl.swiper) {
          clearInterval(timer);
        }
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
