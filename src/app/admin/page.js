'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './admin.css';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [toast, setToast] = useState(null);

  // Data states
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [articles, setArticles] = useState([]);
  const [heroSlides, setHeroSlides] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [settings, setSettings] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    address: '',
    operatingHours: ''
  });

  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [modalType, setModalType] = useState(null); // 'add-doc', 'edit-doc', 'add-svc', 'edit-svc', 'add-art', 'edit-art', 'add-hero', 'edit-hero', 'confirm-delete'
  const [currentEditItem, setCurrentEditItem] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null); // { type, id, name }

  // Form states
  const [docForm, setDocForm] = useState({ name: '', specialty: 'General Dentist', schedule: 'Sesuai janji temu', image: '/downloaded/Blank-Docter_13.png', status: 'Aktif' });
  const [svcForm, setSvcForm] = useState({ title: '', category: 'General Treatment', description: '', image: '/downloaded/General-treatment_22.png', order: 1 });
  const [artForm, setArtForm] = useState({ title: '', category: 'Kesehatan Gigi', date: '', excerpt: '', image: '/downloaded/Gemini_Generated_Image_q1fdecq1fdecq1fd_41.png' });
  const [heroForm, setHeroForm] = useState({ title: '', subtitle: '', badge: '', image: '/downloaded/1_5.png', imageMobile: '/downloaded/1-1_6.png', order: 1, active: true });

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const [resDocs, resSvcs, resArts, resHero, resApt, resSet] = await Promise.all([
        fetch('/api/doctors').then(r => r.json()),
        fetch('/api/services').then(r => r.json()),
        fetch('/api/articles').then(r => r.json()),
        fetch('/api/hero').then(r => r.json()),
        fetch('/api/appointments').then(r => r.json()),
        fetch('/api/settings').then(r => r.json())
      ]);

      if (resDocs.success) setDoctors(resDocs.data);
      if (resSvcs.success) setServices(resSvcs.data);
      if (resArts.success) setArticles(resArts.data);
      if (resHero.success) setHeroSlides(resHero.data);
      if (resApt.success) setAppointments(resApt.data);
      if (resSet.success) setSettings(resSet.data);
    } catch (err) {
      showToast('Gagal memuat data: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // CRUD Handlers for Doctors
  const handleSaveDoctor = async (e) => {
    e.preventDefault();
    const isEdit = modalType === 'edit-doc';
    const method = isEdit ? 'PUT' : 'POST';
    const payload = isEdit ? { ...docForm, id: currentEditItem.id } : docForm;

    try {
      const res = await fetch('/api/doctors', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(r => r.json());

      if (res.success) {
        showToast(isEdit ? 'Dokter berhasil diperbarui!' : 'Dokter baru berhasil ditambahkan!');
        setModalType(null);
        fetchData();
      } else {
        alert(res.error);
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  // CRUD Handlers for Services
  const handleSaveService = async (e) => {
    e.preventDefault();
    const isEdit = modalType === 'edit-svc';
    const method = isEdit ? 'PUT' : 'POST';
    const payload = isEdit ? { ...svcForm, id: currentEditItem.id } : svcForm;

    try {
      const res = await fetch('/api/services', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(r => r.json());

      if (res.success) {
        showToast(isEdit ? 'Layanan berhasil diperbarui!' : 'Layanan baru berhasil ditambahkan!');
        setModalType(null);
        fetchData();
      } else {
        alert(res.error);
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  // CRUD Handlers for Articles
  const handleSaveArticle = async (e) => {
    e.preventDefault();
    const isEdit = modalType === 'edit-art';
    const method = isEdit ? 'PUT' : 'POST';
    const payload = isEdit ? { ...artForm, id: currentEditItem.id } : artForm;

    try {
      const res = await fetch('/api/articles', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(r => r.json());

      if (res.success) {
        showToast(isEdit ? 'Artikel berhasil diperbarui!' : 'Artikel baru berhasil diterbitkan!');
        setModalType(null);
        fetchData();
      } else {
        alert(res.error);
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  // CRUD Handlers for Hero Slides
  const handleSaveHero = async (e) => {
    e.preventDefault();
    const isEdit = modalType === 'edit-hero';
    const method = isEdit ? 'PUT' : 'POST';
    const payload = isEdit ? { ...heroForm, id: currentEditItem.id } : heroForm;

    try {
      const res = await fetch('/api/hero', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(r => r.json());

      if (res.success) {
        showToast(isEdit ? 'Slide hero berhasil diperbarui!' : 'Slide hero berhasil ditambahkan!');
        setModalType(null);
        fetchData();
      } else {
        alert(res.error);
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  // Delete Handler
  const handleExecuteDelete = async () => {
    if (!deleteTarget) return;
    const { type, id } = deleteTarget;
    let endpoint = '';
    if (type === 'doctor') endpoint = `/api/doctors?id=${id}`;
    if (type === 'service') endpoint = `/api/services?id=${id}`;
    if (type === 'article') endpoint = `/api/articles?id=${id}`;
    if (type === 'hero') endpoint = `/api/hero?id=${id}`;
    if (type === 'appointment') endpoint = `/api/appointments?id=${id}`;

    try {
      const res = await fetch(endpoint, { method: 'DELETE' }).then(r => r.json());
      if (res.success) {
        showToast('Item berhasil dihapus.');
        setModalType(null);
        setDeleteTarget(null);
        fetchData();
      }
    } catch (err) {
      alert('Gagal menghapus: ' + err.message);
    }
  };

  // Status Change for Appointment
  const handleUpdateAptStatus = async (id, status) => {
    try {
      const res = await fetch('/api/appointments', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      }).then(r => r.json());

      if (res.success) {
        showToast(`Status pasien diubah menjadi ${status}`);
        fetchData();
      }
    } catch (err) {
      alert(err.message);
    }
  };

  // Save Settings
  const handleSaveSettings = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      }).then(r => r.json());

      if (res.success) {
        showToast('Pengaturan klinik berhasil disimpan!');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <img src="/downloaded/beam-dental-logo_4.png" alt="Beam Dental" />
          <div className="admin-sidebar-title">
            <strong>Beam Dental</strong>
            <span>Admin Portal</span>
          </div>
        </div>

        <nav className="admin-nav">
          <button
            className={`admin-nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Ringkasan
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'doctors' ? 'active' : ''}`}
            onClick={() => { setActiveTab('doctors'); setSearchQuery(''); }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Kelola Dokter
            <span className="admin-nav-badge">{doctors.length}</span>
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => { setActiveTab('services'); setSearchQuery(''); }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            Kelola Layanan
            <span className="admin-nav-badge">{services.length}</span>
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'articles' ? 'active' : ''}`}
            onClick={() => { setActiveTab('articles'); setSearchQuery(''); }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
            Kelola Artikel
            <span className="admin-nav-badge">{articles.length}</span>
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'hero' ? 'active' : ''}`}
            onClick={() => { setActiveTab('hero'); setSearchQuery(''); }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            Slider Hero
            <span className="admin-nav-badge">{heroSlides.length}</span>
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'appointments' ? 'active' : ''}`}
            onClick={() => { setActiveTab('appointments'); setSearchQuery(''); }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Permintaan Janji
            <span className="admin-nav-badge" style={{ background: '#f59e0b' }}>
              {appointments.filter(a => a.status === 'Pending').length}
            </span>
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            Pengaturan Klinik
          </button>
        </nav>

        <div className="admin-sidebar-footer">
          <Link href="/" target="_blank" className="btn-view-site">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Buka Website Live ↗
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        {/* Topbar */}
        <header className="admin-topbar">
          <div className="admin-topbar-title">
            <h1>
              {activeTab === 'overview' && 'Ringkasan Dashboard'}
              {activeTab === 'doctors' && 'Manajemen Dokter Spesialis'}
              {activeTab === 'services' && 'Manajemen Layanan & Prosedur'}
              {activeTab === 'articles' && 'Manajemen Artikel & Edukasi'}
              {activeTab === 'hero' && 'Manajemen Slider Hero Banner'}
              {activeTab === 'appointments' && 'Permintaan Konsultasi & Jadwal'}
              {activeTab === 'settings' && 'Pengaturan Kontak & Klinik'}
            </h1>
            <p>Kelola seluruh konten website Beam Dental Clinic secara mandiri dan langsung</p>
          </div>

          <div className="admin-topbar-actions">
            <div className="admin-user-pill">
              <span className="admin-user-avatar">A</span>
              <span>Admin Klinik</span>
            </div>
          </div>
        </header>

        <div className="admin-content">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div>
              <div className="admin-stats-grid">
                <div className="admin-stat-card">
                  <div className="admin-stat-icon" style={{ background: '#eef2ff', color: '#3345b5' }}>👨‍⚕️</div>
                  <div className="admin-stat-info">
                    <span>Total Dokter</span>
                    <strong>{doctors.length}</strong>
                  </div>
                </div>

                <div className="admin-stat-card">
                  <div className="admin-stat-icon" style={{ background: '#fdf2f8', color: '#db2777' }}>🦷</div>
                  <div className="admin-stat-info">
                    <span>Layanan Medis</span>
                    <strong>{services.length}</strong>
                  </div>
                </div>

                <div className="admin-stat-card">
                  <div className="admin-stat-icon" style={{ background: '#ecfdf5', color: '#059669' }}>📰</div>
                  <div className="admin-stat-info">
                    <span>Artikel Publik</span>
                    <strong>{articles.length}</strong>
                  </div>
                </div>

                <div className="admin-stat-card">
                  <div className="admin-stat-icon" style={{ background: '#fffbeb', color: '#d97706' }}>📅</div>
                  <div className="admin-stat-info">
                    <span>Janji Masuk</span>
                    <strong>{appointments.length}</strong>
                  </div>
                </div>
              </div>

              <div className="admin-panel">
                <div className="admin-panel-header">
                  <div className="admin-panel-title">
                    <h2>📅 Permintaan Jadwal & Pricelist Terbaru</h2>
                  </div>
                  <button className="btn-admin btn-admin-outline btn-sm" onClick={() => setActiveTab('appointments')}>
                    Lihat Semua
                  </button>
                </div>
                <div className="admin-table-container">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Nama Pasien</th>
                        <th>WhatsApp</th>
                        <th>Kebutuhan Perawatan</th>
                        <th>Tanggal</th>
                        <th>Status</th>
                        <th>Aksi Cepat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.slice(0, 5).map(apt => (
                        <tr key={apt.id}>
                          <td><strong>{apt.name}</strong></td>
                          <td>
                            <a
                              href={`https://wa.me/${apt.whatsapp.replace(/\D/g, '')}?text=Halo%20${encodeURIComponent(apt.name)},%20kami%20dari%20Beam%20Dental%20Clinic`}
                              target="_blank"
                              style={{ color: '#059669', fontWeight: 600 }}
                            >
                              💬 {apt.whatsapp}
                            </a>
                          </td>
                          <td>{apt.complaint}</td>
                          <td>{apt.date}</td>
                          <td>
                            <span className={`badge-status ${apt.status === 'Pending' ? 'badge-pending' : apt.status === 'Dihubungi' ? 'badge-completed' : 'badge-active'}`}>
                              {apt.status}
                            </span>
                          </td>
                          <td>
                            <button
                              className="btn-admin btn-admin-outline btn-sm"
                              onClick={() => handleUpdateAptStatus(apt.id, apt.status === 'Pending' ? 'Dihubungi' : 'Selesai')}
                            >
                              Tandai {apt.status === 'Pending' ? 'Dihubungi' : 'Selesai'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DOCTORS CRUD */}
          {activeTab === 'doctors' && (
            <div className="admin-panel">
              <div className="admin-panel-header">
                <div className="admin-panel-title">
                  <h2>Daftar Dokter Spesialis ({doctors.length})</h2>
                </div>
                <div className="admin-panel-actions">
                  <div className="search-wrap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <input
                      type="text"
                      className="admin-search-input"
                      placeholder="Cari nama atau spesialis..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <button
                    className="btn-admin btn-admin-primary"
                    onClick={() => {
                      setDocForm({ name: '', specialty: 'General Dentist', schedule: 'Sesuai janji temu', image: '/downloaded/Blank-Docter_13.png', status: 'Aktif' });
                      setModalType('add-doc');
                    }}
                  >
                    + Tambah Dokter
                  </button>
                </div>
              </div>

              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Foto</th>
                      <th>Nama Dokter</th>
                      <th>Spesialisasi</th>
                      <th>Jadwal Praktik</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors
                      .filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()) || d.specialty.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map(doc => (
                        <tr key={doc.id}>
                          <td>
                            <img src={doc.image || '/downloaded/Blank-Docter_13.png'} alt={doc.name} className="table-img" />
                          </td>
                          <td>
                            <strong>{doc.name}</strong>
                          </td>
                          <td>
                            <span className="badge-status badge-completed">{doc.specialty}</span>
                          </td>
                          <td style={{ color: '#475569', fontSize: '0.84rem' }}>{doc.schedule}</td>
                          <td>
                            <span className={`badge-status ${doc.status === 'Aktif' ? 'badge-active' : 'badge-pending'}`}>
                              {doc.status}
                            </span>
                          </td>
                          <td>
                            <div style={{ display: 'flex', gap: '6px' }}>
                              <button
                                className="btn-admin btn-admin-outline btn-sm"
                                onClick={() => {
                                  setCurrentEditItem(doc);
                                  setDocForm({ ...doc });
                                  setModalType('edit-doc');
                                }}
                              >
                                Edit
                              </button>
                              <button
                                className="btn-admin btn-admin-danger btn-sm"
                                onClick={() => {
                                  setDeleteTarget({ type: 'doctor', id: doc.id, name: doc.name });
                                  setModalType('confirm-delete');
                                }}
                              >
                                Hapus
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: SERVICES CRUD */}
          {activeTab === 'services' && (
            <div className="admin-panel">
              <div className="admin-panel-header">
                <div className="admin-panel-title">
                  <h2>Daftar Layanan Medis ({services.length})</h2>
                </div>
                <div className="admin-panel-actions">
                  <button
                    className="btn-admin btn-admin-primary"
                    onClick={() => {
                      setSvcForm({ title: '', category: 'General Treatment', description: '', image: '/downloaded/General-treatment_22.png', order: services.length + 1 });
                      setModalType('add-svc');
                    }}
                  >
                    + Tambah Layanan
                  </button>
                </div>
              </div>

              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Gambar</th>
                      <th>Nama Layanan</th>
                      <th>Kategori</th>
                      <th>Deskripsi</th>
                      <th>Urutan</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map(svc => (
                      <tr key={svc.id}>
                        <td>
                          <img src={svc.image} alt={svc.title} className="table-img" />
                        </td>
                        <td><strong>{svc.title}</strong></td>
                        <td><span className="badge-status badge-completed">{svc.category}</span></td>
                        <td style={{ maxWidth: '300px', color: '#475569', fontSize: '0.84rem' }}>{svc.description}</td>
                        <td>{svc.order}</td>
                        <td>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <button
                              className="btn-admin btn-admin-outline btn-sm"
                              onClick={() => {
                                setCurrentEditItem(svc);
                                setSvcForm({ ...svc });
                                setModalType('edit-svc');
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn-admin btn-admin-danger btn-sm"
                              onClick={() => {
                                setDeleteTarget({ type: 'service', id: svc.id, name: svc.title });
                                setModalType('confirm-delete');
                              }}
                            >
                              Hapus
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: ARTICLES CRUD */}
          {activeTab === 'articles' && (
            <div className="admin-panel">
              <div className="admin-panel-header">
                <div className="admin-panel-title">
                  <h2>Daftar Artikel & Edukasi ({articles.length})</h2>
                </div>
                <div className="admin-panel-actions">
                  <button
                    className="btn-admin btn-admin-primary"
                    onClick={() => {
                      setArtForm({ title: '', category: 'Kesehatan Gigi', date: new Date().toLocaleDateString('id-ID'), excerpt: '', image: '/downloaded/Gemini_Generated_Image_q1fdecq1fdecq1fd_41.png' });
                      setModalType('add-art');
                    }}
                  >
                    + Tulis Artikel Baru
                  </button>
                </div>
              </div>

              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Thumbnail</th>
                      <th>Judul Artikel</th>
                      <th>Kategori</th>
                      <th>Tanggal</th>
                      <th>Ringkasan</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles.map(art => (
                      <tr key={art.id}>
                        <td>
                          <img src={art.image} alt={art.title} className="table-img" />
                        </td>
                        <td><strong>{art.title}</strong></td>
                        <td><span className="badge-status badge-completed">{art.category}</span></td>
                        <td>{art.date}</td>
                        <td style={{ maxWidth: '320px', color: '#475569', fontSize: '0.84rem' }}>{art.excerpt}</td>
                        <td>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <button
                              className="btn-admin btn-admin-outline btn-sm"
                              onClick={() => {
                                setCurrentEditItem(art);
                                setArtForm({ ...art });
                                setModalType('edit-art');
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn-admin btn-admin-danger btn-sm"
                              onClick={() => {
                                setDeleteTarget({ type: 'article', id: art.id, name: art.title });
                                setModalType('confirm-delete');
                              }}
                            >
                              Hapus
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: HERO SLIDER CRUD */}
          {activeTab === 'hero' && (
            <div className="admin-panel">
              <div className="admin-panel-header">
                <div className="admin-panel-title">
                  <h2>Slider Hero Banner ({heroSlides.length} Slide)</h2>
                </div>
                <div className="admin-panel-actions">
                  <button
                    className="btn-admin btn-admin-primary"
                    onClick={() => {
                      setHeroForm({ title: '', subtitle: '', badge: '', image: '/downloaded/1_5.png', imageMobile: '/downloaded/1-1_6.png', order: heroSlides.length + 1, active: true });
                      setModalType('add-hero');
                    }}
                  >
                    + Tambah Slide
                  </button>
                </div>
              </div>

              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Preview Banner</th>
                      <th>Judul Slide</th>
                      <th>Badge Tag</th>
                      <th>Urutan</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {heroSlides.map(slide => (
                      <tr key={slide.id}>
                        <td>
                          <img src={slide.image} alt={slide.title} className="table-img-wide" />
                        </td>
                        <td>
                          <strong>{slide.title}</strong>
                          <p style={{ margin: '3px 0 0 0', fontSize: '0.78rem', color: '#64748b' }}>{slide.subtitle}</p>
                        </td>
                        <td>
                          <span className="badge-status badge-completed">{slide.badge || '-'}</span>
                        </td>
                        <td><strong>#{slide.order}</strong></td>
                        <td>
                          <span className={`badge-status ${slide.active ? 'badge-active' : 'badge-pending'}`}>
                            {slide.active ? 'Aktif' : 'Nonaktif'}
                          </span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <button
                              className="btn-admin btn-admin-outline btn-sm"
                              onClick={() => {
                                setCurrentEditItem(slide);
                                setHeroForm({ ...slide });
                                setModalType('edit-hero');
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn-admin btn-admin-danger btn-sm"
                              onClick={() => {
                                setDeleteTarget({ type: 'hero', id: slide.id, name: slide.title });
                                setModalType('confirm-delete');
                              }}
                            >
                              Hapus
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 6: APPOINTMENTS */}
          {activeTab === 'appointments' && (
            <div className="admin-panel">
              <div className="admin-panel-header">
                <div className="admin-panel-title">
                  <h2>Data Permintaan Janji & Pricelist Pasien ({appointments.length})</h2>
                </div>
              </div>

              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Nama Lengkap</th>
                      <th>Kontak WhatsApp</th>
                      <th>Email</th>
                      <th>Kebutuhan / Keluhan</th>
                      <th>Tanggal Masuk</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map(apt => (
                      <tr key={apt.id}>
                        <td><strong>{apt.name}</strong></td>
                        <td>
                          <a
                            href={`https://wa.me/${apt.whatsapp.replace(/\D/g, '')}?text=Halo%20${encodeURIComponent(apt.name)},%20kami%20dari%20Beam%20Dental%20Clinic`}
                            target="_blank"
                            style={{ color: '#059669', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                          >
                            💬 {apt.whatsapp}
                          </a>
                        </td>
                        <td>{apt.email}</td>
                        <td style={{ maxWidth: '280px', color: '#475569' }}>{apt.complaint}</td>
                        <td>{apt.date}</td>
                        <td>
                          <select
                            className="admin-form-control"
                            style={{ padding: '4px 8px', fontSize: '0.82rem' }}
                            value={apt.status}
                            onChange={(e) => handleUpdateAptStatus(apt.id, e.target.value)}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Dihubungi">Dihubungi</option>
                            <option value="Selesai">Selesai</option>
                          </select>
                        </td>
                        <td>
                          <button
                            className="btn-admin btn-admin-danger btn-sm"
                            onClick={() => {
                              setDeleteTarget({ type: 'appointment', id: apt.id, name: `Permintaan ${apt.name}` });
                              setModalType('confirm-delete');
                            }}
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 7: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="admin-panel" style={{ maxWidth: '700px' }}>
              <div className="admin-panel-header">
                <div className="admin-panel-title">
                  <h2>Pengaturan Umum Klinik</h2>
                </div>
              </div>

              <form onSubmit={handleSaveSettings} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="admin-form-group">
                  <label>Nama Klinik</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={settings.name || ''}
                    onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Tagline</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={settings.tagline || ''}
                    onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="admin-form-group">
                    <label>Nomor Telepon</label>
                    <input
                      type="text"
                      className="admin-form-control"
                      value={settings.phone || ''}
                      onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label>Nomor WhatsApp Admin</label>
                    <input
                      type="text"
                      className="admin-form-control"
                      value={settings.whatsapp || ''}
                      onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label>Email Resmi</label>
                  <input
                    type="email"
                    className="admin-form-control"
                    value={settings.email || ''}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Alamat Lengkap</label>
                  <textarea
                    className="admin-form-control"
                    value={settings.address || ''}
                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Jam Operasional</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={settings.operatingHours || ''}
                    onChange={(e) => setSettings({ ...settings, operatingHours: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-admin btn-admin-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
                  Simpan Pengaturan
                </button>
              </form>
            </div>
          )}
        </div>
      </main>

      {/* ================= MODALS ================= */}

      {/* MODAL: DOCTOR FORM */}
      {(modalType === 'add-doc' || modalType === 'edit-doc') && (
        <div className="admin-modal-backdrop" onClick={() => setModalType(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>{modalType === 'add-doc' ? 'Tambah Dokter Baru' : 'Edit Profil Dokter'}</h3>
              <button className="admin-modal-close" onClick={() => setModalType(null)}>✕</button>
            </div>
            <form onSubmit={handleSaveDoctor}>
              <div className="admin-modal-body">
                <div className="admin-form-group">
                  <label>Nama Lengkap & Gelar</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: drg. Priska Angelia, Sp.KGA"
                    className="admin-form-control"
                    value={docForm.name}
                    onChange={(e) => setDocForm({ ...docForm, name: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Spesialisasi</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Pediatric Dentist, Orthodontist"
                    className="admin-form-control"
                    value={docForm.specialty}
                    onChange={(e) => setDocForm({ ...docForm, specialty: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Jadwal Praktik</label>
                  <input
                    type="text"
                    placeholder="Contoh: Senin & Kamis : 15.30-20.00"
                    className="admin-form-control"
                    value={docForm.schedule}
                    onChange={(e) => setDocForm({ ...docForm, schedule: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>URL Foto Dokter</label>
                  <input
                    type="text"
                    placeholder="/downloaded/Drg-Priska-NEWWWWWW_15.png"
                    className="admin-form-control"
                    value={docForm.image}
                    onChange={(e) => setDocForm({ ...docForm, image: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Status Praktik</label>
                  <select
                    className="admin-form-control"
                    value={docForm.status}
                    onChange={(e) => setDocForm({ ...docForm, status: e.target.value })}
                  >
                    <option value="Aktif">Aktif</option>
                    <option value="Cuti">Cuti</option>
                  </select>
                </div>
              </div>
              <div className="admin-modal-footer">
                <button type="button" className="btn-admin btn-admin-outline" onClick={() => setModalType(null)}>Batal</button>
                <button type="submit" className="btn-admin btn-admin-primary">Simpan Dokter</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: SERVICE FORM */}
      {(modalType === 'add-svc' || modalType === 'edit-svc') && (
        <div className="admin-modal-backdrop" onClick={() => setModalType(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>{modalType === 'add-svc' ? 'Tambah Layanan Baru' : 'Edit Layanan'}</h3>
              <button className="admin-modal-close" onClick={() => setModalType(null)}>✕</button>
            </div>
            <form onSubmit={handleSaveService}>
              <div className="admin-modal-body">
                <div className="admin-form-group">
                  <label>Nama Layanan</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Teeth Whitening"
                    className="admin-form-control"
                    value={svcForm.title}
                    onChange={(e) => setSvcForm({ ...svcForm, title: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Kategori Layanan</label>
                  <input
                    type="text"
                    placeholder="Contoh: Estetika Gigi, Basic Treatment"
                    className="admin-form-control"
                    value={svcForm.category}
                    onChange={(e) => setSvcForm({ ...svcForm, category: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Deskripsi Singkat</label>
                  <textarea
                    className="admin-form-control"
                    placeholder="Penjelasan ringkas mengenai prosedur tindakan..."
                    value={svcForm.description}
                    onChange={(e) => setSvcForm({ ...svcForm, description: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>URL Gambar</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={svcForm.image}
                    onChange={(e) => setSvcForm({ ...svcForm, image: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Nomor Urutan</label>
                  <input
                    type="number"
                    className="admin-form-control"
                    value={svcForm.order}
                    onChange={(e) => setSvcForm({ ...svcForm, order: Number(e.target.value) })}
                  />
                </div>
              </div>
              <div className="admin-modal-footer">
                <button type="button" className="btn-admin btn-admin-outline" onClick={() => setModalType(null)}>Batal</button>
                <button type="submit" className="btn-admin btn-admin-primary">Simpan Layanan</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ARTICLE FORM */}
      {(modalType === 'add-art' || modalType === 'edit-art') && (
        <div className="admin-modal-backdrop" onClick={() => setModalType(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>{modalType === 'add-art' ? 'Tulis Artikel Baru' : 'Edit Artikel'}</h3>
              <button className="admin-modal-close" onClick={() => setModalType(null)}>✕</button>
            </div>
            <form onSubmit={handleSaveArticle}>
              <div className="admin-modal-body">
                <div className="admin-form-group">
                  <label>Judul Artikel</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Cara Menjaga Gigi Anak Tetap Sehat"
                    className="admin-form-control"
                    value={artForm.title}
                    onChange={(e) => setArtForm({ ...artForm, title: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Kategori</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={artForm.category}
                    onChange={(e) => setArtForm({ ...artForm, category: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Tanggal Publikasi</label>
                  <input
                    type="text"
                    placeholder="15 Juni 2026"
                    className="admin-form-control"
                    value={artForm.date}
                    onChange={(e) => setArtForm({ ...artForm, date: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Ringkasan Artikel</label>
                  <textarea
                    className="admin-form-control"
                    placeholder="Tulis ringkasan singkat artikel..."
                    value={artForm.excerpt}
                    onChange={(e) => setArtForm({ ...artForm, excerpt: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>URL Foto Thumbnail</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={artForm.image}
                    onChange={(e) => setArtForm({ ...artForm, image: e.target.value })}
                  />
                </div>
              </div>
              <div className="admin-modal-footer">
                <button type="button" className="btn-admin btn-admin-outline" onClick={() => setModalType(null)}>Batal</button>
                <button type="submit" className="btn-admin btn-admin-primary">Simpan Artikel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: HERO SLIDE FORM */}
      {(modalType === 'add-hero' || modalType === 'edit-hero') && (
        <div className="admin-modal-backdrop" onClick={() => setModalType(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>{modalType === 'add-hero' ? 'Tambah Slide Hero Banner' : 'Edit Slide Hero'}</h3>
              <button className="admin-modal-close" onClick={() => setModalType(null)}>✕</button>
            </div>
            <form onSubmit={handleSaveHero}>
              <div className="admin-modal-body">
                <div className="admin-form-group">
                  <label>Judul Slide</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Kembalikan Senyum Percaya Diri"
                    className="admin-form-control"
                    value={heroForm.title}
                    onChange={(e) => setHeroForm({ ...heroForm, title: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Sub-judul / Deskripsi</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={heroForm.subtitle}
                    onChange={(e) => setHeroForm({ ...heroForm, subtitle: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>Badge Highlight</label>
                  <input
                    type="text"
                    placeholder="Contoh: Dental Implant, Ortodontis"
                    className="admin-form-control"
                    value={heroForm.badge}
                    onChange={(e) => setHeroForm({ ...heroForm, badge: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>URL Gambar Desktop (1365x478)</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={heroForm.image}
                    onChange={(e) => setHeroForm({ ...heroForm, image: e.target.value })}
                  />
                </div>

                <div className="admin-form-group">
                  <label>URL Gambar Mobile</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={heroForm.imageMobile}
                    onChange={(e) => setHeroForm({ ...heroForm, imageMobile: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="admin-form-group">
                    <label>Urutan Tampil</label>
                    <input
                      type="number"
                      className="admin-form-control"
                      value={heroForm.order}
                      onChange={(e) => setHeroForm({ ...heroForm, order: Number(e.target.value) })}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label>Status Aktif</label>
                    <select
                      className="admin-form-control"
                      value={heroForm.active ? 'true' : 'false'}
                      onChange={(e) => setHeroForm({ ...heroForm, active: e.target.value === 'true' })}
                    >
                      <option value="true">Aktif (Tampil)</option>
                      <option value="false">Nonaktif</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="admin-modal-footer">
                <button type="button" className="btn-admin btn-admin-outline" onClick={() => setModalType(null)}>Batal</button>
                <button type="submit" className="btn-admin btn-admin-primary">Simpan Slide</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: DELETE CONFIRMATION */}
      {modalType === 'confirm-delete' && deleteTarget && (
        <div className="admin-modal-backdrop" onClick={() => setModalType(null)}>
          <div className="admin-modal" style={{ maxWidth: '440px' }} onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>Konfirmasi Hapus</h3>
              <button className="admin-modal-close" onClick={() => setModalType(null)}>✕</button>
            </div>
            <div className="admin-modal-body">
              <p style={{ margin: 0, color: '#334155', fontSize: '0.94rem' }}>
                Apakah Anda yakin ingin menghapus <strong>"{deleteTarget.name}"</strong>?
              </p>
              <p style={{ margin: '0.5rem 0 0 0', color: '#64748b', fontSize: '0.82rem' }}>
                Tindakan ini tidak dapat dibatalkan dan item akan langsung terhapus dari sistem.
              </p>
            </div>
            <div className="admin-modal-footer">
              <button className="btn-admin btn-admin-outline" onClick={() => setModalType(null)}>Batal</button>
              <button className="btn-admin btn-admin-danger" onClick={handleExecuteDelete}>Hapus Sekarang</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <div className="admin-toast">
          <span>✓</span>
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
