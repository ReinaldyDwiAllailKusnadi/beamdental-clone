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
<li id="menu-item-19" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-19"><a href="/dokter-kami/" aria-current="page">Dokter Kami</a></li>
<li id="menu-item-20" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20"><a href="/layanan/">Layanan</a></li>
<li id="menu-item-21" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21"><a href="/artikel/">Artikel</a></li>
</ul>                </nav>
                <a class="button" href="/kontak/">
                    Jadwalkan Perawatan                </a>
            </div>
        </div>
    </header>
<main id="content">
    <section class="doctor-archive-hero">
        <div class="site-container doctor-archive-hero__inner">
            <div class="doctor-archive-hero__copy">
                <div class="section__eyebrow">TIM SPESIALIS KAMI</div>
                <h1>Dokter Gigi Umum &amp; Spesialis untuk Berbagai Kebutuhan Perawatan</h1>
                <p class="hero__lead">Beam Dental Clinic didukung oleh tim dokter gigi umum dan spesialis yang berpengalaman dalam menangani berbagai kebutuhan perawatan gigi anak maupun dewasa dengan pendekatan yang nyaman dan menyeluruh.</p>
            </div>

            <aside class="doctor-archive-hero__visual" aria-label="Visual tim dokter Beam Dental" style="--hero-visual-bg-image: url(/downloaded/tooth-blue_20.png);">
                <div class="doctor-archive-hero__visual-card">
                                                                        <a class="doctor-archive-hero__visual-link" href="/dokter-kami/kolaborasi-spesialis-di-beam/">
                                                                    <img width="683" height="1024" src="/downloaded/Hero-DokterBB_21.png?fit=683%2C1024&amp;ssl=1" class="attachment-large size-large wp-post-image" alt="" loading="lazy" decoding="async" srcset="/downloaded/Hero-DokterBB_21.png?w=2100&amp;ssl=1 2100w, /downloaded/Hero-DokterBB_21.png?resize=200%2C300&amp;ssl=1 200w, /downloaded/Hero-DokterBB_21.png?resize=683%2C1024&amp;ssl=1 683w, /downloaded/Hero-DokterBB_21.png?resize=768%2C1152&amp;ssl=1 768w, /downloaded/Hero-DokterBB_21.png?resize=1024%2C1536&amp;ssl=1 1024w, /downloaded/Hero-DokterBB_21.png?resize=1365%2C2048&amp;ssl=1 1365w, /downloaded/Hero-DokterBB_21.png?w=2000&amp;ssl=1 2000w" sizes="auto, (max-width: 683px) 100vw, 683px" data-attachment-id="301" data-permalink="/dokter-kami/kolaborasi-spesialis-di-beam/hero-dokterbb/" data-orig-file="/downloaded/Hero-DokterBB_21.png?fit=2100%2C3150&amp;ssl=1" data-orig-size="2100,3150" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Hero DokterBB" data-image-description="" data-image-caption="" data-large-file="/downloaded/Hero-DokterBB_21.png?fit=683%2C1024&amp;ssl=1" />                                                            </a>
                            <div class="doctor-archive-hero__visual-copy">
                                <!-- <div class="doctor-card__meta">Dokter unggulan</div> -->
                                <!-- <h2>Kolaborasi Spesialis di Beam</h2> -->
                                <!-- <p>Kolaborasi Spesialis di Beam</p> -->
                            </div>
                                                                                    </div>
            </aside>
        </div>
        <div class="site-container doctor-archive__filters-wrap">
            <nav class="specialty-filter" aria-label="Filter spesialis">
                <a class="badge is-active" href="#" data-slug="">Semua Dokter</a>
                <a class="badge" href="#" data-slug="__all_specialists">Semua Spesialis</a>
                                        <a class="badge" href="#" data-slug="conservative-dentistry">Conservative Dentistry</a>
                                        <a class="badge" href="#" data-slug="general-dentist">General Dentist</a>
                                        <a class="badge" href="#" data-slug="maxillofacial-surgeon">Maxillofacial Surgeon</a>
                                        <a class="badge" href="#" data-slug="oral-medicine">Oral Medicine</a>
                                        <a class="badge" href="#" data-slug="orthodontist">Orthodontist</a>
                                        <a class="badge" href="#" data-slug="pediatric-dentist">Pediatric Dentist</a>
                                        <a class="badge" href="#" data-slug="periodontist">Periodontist</a>
                                        <a class="badge" href="#" data-slug="prosthodontist">Prosthodontist</a>
                            </nav>

            <div class="specialty-select-wrap">
                <label for="specialty-select" class="screen-reader-text">Filter Spesialis</label>
                <select id="specialty-select" aria-label="Filter Spesialis">
                    <option value=""  selected='selected'>Semua Dokter</option>
                    <option value="__all_specialists" >Semua Spesialis</option>
                                                <option value="conservative-dentistry" >Conservative Dentistry</option>
                                                <option value="general-dentist" >General Dentist</option>
                                                <option value="maxillofacial-surgeon" >Maxillofacial Surgeon</option>
                                                <option value="oral-medicine" >Oral Medicine</option>
                                                <option value="orthodontist" >Orthodontist</option>
                                                <option value="pediatric-dentist" >Pediatric Dentist</option>
                                                <option value="periodontist" >Periodontist</option>
                                                <option value="prosthodontist" >Prosthodontist</option>
                                    </select>
            </div>
        </div>
    </section>

    <section class="content-wrap">
        <div class="site-container">
                                            <div class="doctor-grid" data-initial-specialty="">
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-priska-angelia-sp-kga/" class="doctor-card__media" aria-label="drg. Priska Angelia, Sp.KGA">
                    <img width="880" height="580" src="/downloaded/Drg-Priska-NEWWWWWW_15.png?resize=880%2C580&amp;ssl=1" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" srcset="/downloaded/Drg-Priska-NEWWWWWW_15.png?resize=880%2C580&amp;ssl=1 880w, /downloaded/Drg-Priska-NEWWWWWW_15.png?zoom=2&amp;resize=880%2C580&amp;ssl=1 1760w" sizes="auto, (max-width: 880px) 100vw, 880px" data-attachment-id="302" data-permalink="/dokter-kami/drg-priska-angelia-sp-kga/drg-priska-newwwwww/" data-orig-file="/downloaded/Drg-Priska-NEWWWWWW_15.png?fit=1792%2C2390&amp;ssl=1" data-orig-size="1792,2390" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Drg Priska NEWWWWWW" data-image-description="" data-image-caption="" data-large-file="/downloaded/Drg-Priska-NEWWWWWW_15.png?fit=768%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">Pediatric Dentist</div>
                <h3><a href="/dokter-kami/drg-priska-angelia-sp-kga/">drg. Priska Angelia, Sp.KGA</a></h3>
                            <div class="doctor-card__summary">
<p class="wp-block-paragraph">Sesuai janji temu</p>
</div>
            </div>
</article>
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-kelvin-suryawan-cert-implant/" class="doctor-card__media" aria-label="drg. Kelvin Suryawan, Cert. Implant">
                    <img width="880" height="580" src="/downloaded/Drg_-Kelvin-new_16.png?resize=880%2C580&amp;ssl=1" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" data-attachment-id="109" data-permalink="/dokter-kami/drg-kelvin-suryawan-cert-implant/drg-kelvin-new/" data-orig-file="/downloaded/Drg_-Kelvin-new_16.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Drg. Kelvin &amp;#8211; new" data-image-description="" data-image-caption="" data-large-file="/downloaded/Drg_-Kelvin-new_16.png?fit=768%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">Conservative Dentistry</div>
                <h3><a href="/dokter-kami/drg-kelvin-suryawan-cert-implant/">drg. Kelvin Suryawan, Cert. Implant</a></h3>
                            <div class="doctor-card__summary">
<p class="wp-block-paragraph">Sesuai janji temu</p>
</div>
            </div>
</article>
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-kharlina-syafitri-m-si-sp-ort/" class="doctor-card__media" aria-label="drg. Kharlina Syafitri M.Si., Sp.Ort">
                    <img width="880" height="580" src="/downloaded/Drg_-Karlina-new_17.png?resize=880%2C580&amp;ssl=1" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" data-attachment-id="106" data-permalink="/dokter-kami/drg-kharlina-syafitri-m-si-sp-ort/drg-karlina-new/" data-orig-file="/downloaded/Drg_-Karlina-new_17.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Drg. Karlina &amp;#8211; new" data-image-description="" data-image-caption="" data-large-file="/downloaded/Drg_-Karlina-new_17.png?fit=768%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">Orthodontist</div>
                <h3><a href="/dokter-kami/drg-kharlina-syafitri-m-si-sp-ort/">drg. Kharlina Syafitri M.Si., Sp.Ort</a></h3>
                            <div class="doctor-card__summary">
<p class="wp-block-paragraph">Sesuai janji temu</p>
</div>
            </div>
</article>
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-daisy-supandi-sp-pros/" class="doctor-card__media" aria-label="drg. Daisy Supandi, Sp. Pros">
                    <img width="880" height="580" src="/downloaded/Drg_-Disyi-new_18.png?resize=880%2C580&amp;ssl=1" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" data-attachment-id="100" data-permalink="/dokter-kami/drg-daisy-supandi-sp-pros/drg-disyi-new/" data-orig-file="/downloaded/Drg_-Disyi-new_18.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Drg. Disyi &amp;#8211; new" data-image-description="" data-image-caption="" data-large-file="/downloaded/Drg_-Disyi-new_18.png?fit=768%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">Prosthodontist</div>
                <h3><a href="/dokter-kami/drg-daisy-supandi-sp-pros/">drg. Daisy Supandi, Sp. Pros</a></h3>
                            <div class="doctor-card__summary">
<p class="wp-block-paragraph">Sesuai janji temu</p>
</div>
            </div>
</article>
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-intan-sp-kga/" class="doctor-card__media" aria-label="drg. Intan, Sp.KGA">
                    <img width="880" height="580" src="/downloaded/drg_-intan-Sp_KGA-new_19.jpg?resize=880%2C580&amp;ssl=1" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" data-attachment-id="94" data-permalink="/dokter-kami/drg-intan-sp-kga/drg-intan-sp-kga-new/" data-orig-file="/downloaded/drg_-intan-Sp_KGA-new_19.jpg?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;1&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="drg. intan, Sp.KGA &amp;#8211; new" data-image-description="" data-image-caption="" data-large-file="/downloaded/drg_-intan-Sp_KGA-new_19.jpg?fit=768%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">Pediatric Dentist</div>
                <h3><a href="/dokter-kami/drg-intan-sp-kga/">drg. Intan, Sp.KGA</a></h3>
                            <div class="doctor-card__summary">
<p class="wp-block-paragraph">Sesuai janji temu</p>
</div>
            </div>
</article>
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-djoni-kosim-sindudibroto-sp-perio/" class="doctor-card__media" aria-label="drg. Djoni Kosim Sindudibroto, Sp. Perio">
                    <img width="880" height="580" src="/downloaded/dokter-kami_Blank-Docter_13.png" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" data-attachment-id="61" data-permalink="/dokter-kami/drg-gina-suryajaya/blank-docter/" data-orig-file="/downloaded/dokter-kami_Blank-Docter_13.png?fit=1080%2C1350&amp;ssl=1" data-orig-size="1080,1350" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Blank Docter" data-image-description="" data-image-caption="" data-large-file="/downloaded/dokter-kami_Blank-Docter_13.png?fit=819%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">Periodontist</div>
                <h3><a href="/dokter-kami/drg-djoni-kosim-sindudibroto-sp-perio/">drg. Djoni Kosim Sindudibroto, Sp. Perio</a></h3>
                            <div class="doctor-card__summary">
<p class="wp-block-paragraph">Sesuai janji temu</p>
</div>
            </div>
</article>
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-muhammad-adityo-imam-sp-bmm/" class="doctor-card__media" aria-label="drg. Muhammad Adityo Imam, Sp.BMM">
                    <img width="880" height="580" src="/downloaded/dokter-kami_Blank-Docter_13.png" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" data-attachment-id="61" data-permalink="/dokter-kami/drg-gina-suryajaya/blank-docter/" data-orig-file="/downloaded/dokter-kami_Blank-Docter_13.png?fit=1080%2C1350&amp;ssl=1" data-orig-size="1080,1350" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Blank Docter" data-image-description="" data-image-caption="" data-large-file="/downloaded/dokter-kami_Blank-Docter_13.png?fit=819%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">Maxillofacial Surgeon</div>
                <h3><a href="/dokter-kami/drg-muhammad-adityo-imam-sp-bmm/">drg. Muhammad Adityo Imam, Sp.BMM</a></h3>
                            <div class="doctor-card__summary">
<p class="wp-block-paragraph">Sesuai janji temu</p>
</div>
            </div>
</article>
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-adrianus-rajasa-sp-pm/" class="doctor-card__media" aria-label="drg. Adrianus Rajasa, Sp.PM">
                    <img width="880" height="580" src="/downloaded/dokter-kami_Drg_-Adrianus-new_14.png" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" data-attachment-id="87" data-permalink="/dokter-kami/drg-adrianus-rajasa-sp-pm/drg-adrianus-new/" data-orig-file="/downloaded/dokter-kami_Drg_-Adrianus-new_14.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Drg. Adrianus &amp;#8211; new" data-image-description="" data-image-caption="" data-large-file="/downloaded/dokter-kami_Drg_-Adrianus-new_14.png?fit=768%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">Oral Medicine</div>
                <h3><a href="/dokter-kami/drg-adrianus-rajasa-sp-pm/">drg. Adrianus Rajasa, Sp.PM</a></h3>
                            <div class="doctor-card__summary">
<p class="wp-block-paragraph">Sesuai janji temu</p>
</div>
            </div>
</article>
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-stifan-jamin/" class="doctor-card__media" aria-label="drg. Stifan Jamin">
                    <img width="880" height="580" src="/downloaded/dokter-kami_Drg_-Jamin-new_15.png" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" data-attachment-id="84" data-permalink="/dokter-kami/drg-stifan-jamin/drg-jamin-new/" data-orig-file="/downloaded/dokter-kami_Drg_-Jamin-new_15.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Drg. Jamin &amp;#8211; new" data-image-description="" data-image-caption="" data-large-file="/downloaded/dokter-kami_Drg_-Jamin-new_15.png?fit=768%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">General Dentist</div>
                <h3><a href="/dokter-kami/drg-stifan-jamin/">drg. Stifan Jamin</a></h3>
                            <div class="doctor-card__summary">
<p class="wp-block-paragraph">Selasa &amp; Kamis : 15.30-20.00</p>
</div>
            </div>
</article>
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-sekar-asih-diana-putri/" class="doctor-card__media" aria-label="drg. Sekar Asih Diana Putri">
                    <img width="880" height="580" src="/downloaded/dokter-kami_Drg_-Sekar-new_16.png" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" data-attachment-id="103" data-permalink="/dokter-kami/drg-sekar-asih-diana-putri/drg-sekar-new/" data-orig-file="/downloaded/dokter-kami_Drg_-Sekar-new_16.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Drg. Sekar &amp;#8211; new" data-image-description="" data-image-caption="" data-large-file="/downloaded/dokter-kami_Drg_-Sekar-new_16.png?fit=768%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">General Dentist</div>
                <h3><a href="/dokter-kami/drg-sekar-asih-diana-putri/">drg. Sekar Asih Diana Putri</a></h3>
                            <div class="doctor-card__summary">
<p class="wp-block-paragraph">Senin : 10.00-15.30<br>Rabu : 15.30-20.00</p>
</div>
            </div>
</article>
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-nicholas-limanda/" class="doctor-card__media" aria-label="drg. Nicholas Limanda">
                    <img width="880" height="580" src="/downloaded/dokter-kami_Drg_-Nicholas-new_17.png" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" data-attachment-id="81" data-permalink="/dokter-kami/drg-nicholas-limanda/drg-nicholas-new/" data-orig-file="/downloaded/dokter-kami_Drg_-Nicholas-new_17.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Drg. Nicholas &amp;#8211; new" data-image-description="" data-image-caption="" data-large-file="/downloaded/dokter-kami_Drg_-Nicholas-new_17.png?fit=768%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">General Dentist</div>
                <h3><a href="/dokter-kami/drg-nicholas-limanda/">drg. Nicholas Limanda</a></h3>
                            <div class="doctor-card__summary">
<p class="wp-block-paragraph">Minggu : 10.00-15.30</p>
</div>
            </div>
</article>
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-shabrina/" class="doctor-card__media" aria-label="drg. Shabrina">
                    <img width="880" height="580" src="/downloaded/dokter-kami_Dr_-Shabrina-new_18.png" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" data-attachment-id="78" data-permalink="/dokter-kami/drg-shabrina/dr-shabrina-new/" data-orig-file="/downloaded/dokter-kami_Dr_-Shabrina-new_18.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Dr. Shabrina &amp;#8211; new" data-image-description="" data-image-caption="" data-large-file="/downloaded/dokter-kami_Dr_-Shabrina-new_18.png?fit=768%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">General Dentist</div>
                <h3><a href="/dokter-kami/drg-shabrina/">drg. Shabrina</a></h3>
                            <div class="doctor-card__summary">
<p class="wp-block-paragraph">Jumat &amp; Sabtu : 10.00-15.30</p>
</div>
            </div>
</article>
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-utari-nur-khairunnisa/" class="doctor-card__media" aria-label="drg. Utari Nur Khairunnisa">
                    <img width="880" height="580" src="/downloaded/dokter-kami_Drg_-Utari-new_19.png" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" data-attachment-id="75" data-permalink="/dokter-kami/drg-utari-nur-khairunnisa/drg-utari-new/" data-orig-file="/downloaded/dokter-kami_Drg_-Utari-new_19.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Drg. Utari &amp;#8211; new" data-image-description="" data-image-caption="" data-large-file="/downloaded/dokter-kami_Drg_-Utari-new_19.png?fit=768%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">General Dentist</div>
                <h3><a href="/dokter-kami/drg-utari-nur-khairunnisa/">drg. Utari Nur Khairunnisa</a></h3>
                            <div class="doctor-card__summary">
<p class="wp-block-paragraph">Senin : 15.30-20.00<br>Kamis : 10.00-15.30</p>
</div>
            </div>
</article>
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-rahma-disya/" class="doctor-card__media" aria-label="drg. Rahma Disya">
                    <img width="880" height="580" src="/downloaded/dokter-kami_Drg_-Disya-new_20.png" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" data-attachment-id="72" data-permalink="/dokter-kami/drg-rahma-disya/drg-disya-new/" data-orig-file="/downloaded/dokter-kami_Drg_-Disya-new_20.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Drg. Disya &amp;#8211; new" data-image-description="" data-image-caption="" data-large-file="/downloaded/dokter-kami_Drg_-Disya-new_20.png?fit=768%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">General Dentist</div>
                <h3><a href="/dokter-kami/drg-rahma-disya/">drg. Rahma Disya</a></h3>
                            <div class="doctor-card__summary">
<p class="wp-block-paragraph">Rabu, Kamis : 10.00-15.00<br>Jumat : 16.00-19.00</p>
</div>
            </div>
</article>
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-maria-lisa/" class="doctor-card__media" aria-label="drg. Maria Lisa">
                    <img width="880" height="580" src="/downloaded/dokter-kami_Drg_-Maria-maria_21.png" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" data-attachment-id="69" data-permalink="/dokter-kami/drg-maria-lisa/drg-maria-maria/" data-orig-file="/downloaded/dokter-kami_Drg_-Maria-maria_21.png?fit=1086%2C1448&amp;ssl=1" data-orig-size="1086,1448" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Drg. Maria &amp;#8211; maria" data-image-description="" data-image-caption="" data-large-file="/downloaded/dokter-kami_Drg_-Maria-maria_21.png?fit=768%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">General Dentist</div>
                <h3><a href="/dokter-kami/drg-maria-lisa/">drg. Maria Lisa</a></h3>
                            <div class="doctor-card__summary">
<p class="wp-block-paragraph">Senin, Selasa, Kamis : 10.00-15.30</p>
</div>
            </div>
</article>
                                                                    <article class="doctor-card">
    <a href="/dokter-kami/drg-gina-suryajaya/" class="doctor-card__media" aria-label="drg. Gina Suryajaya">
                    <img width="880" height="580" src="/downloaded/dokter-kami_Blank-Docter_13.png" class="attachment-newbeamdental-thumb size-newbeamdental-thumb wp-post-image" alt="" loading="lazy" decoding="async" data-attachment-id="61" data-permalink="/dokter-kami/drg-gina-suryajaya/blank-docter/" data-orig-file="/downloaded/dokter-kami_Blank-Docter_13.png?fit=1080%2C1350&amp;ssl=1" data-orig-size="1080,1350" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;,&quot;alt&quot;:&quot;&quot;}" data-image-title="Blank Docter" data-image-description="" data-image-caption="" data-large-file="/downloaded/dokter-kami_Blank-Docter_13.png?fit=819%2C1024&amp;ssl=1" />            </a>
    <div class="doctor-card__content">
                    <div class="doctor-card__meta">General Dentist</div>
                <h3><a href="/dokter-kami/drg-gina-suryajaya/">drg. Gina Suryajaya</a></h3>
                    </div>
</article>
                                                            </div>
                <div id="ajax-status" aria-live="polite" class="screen-reader-text"></div>
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
