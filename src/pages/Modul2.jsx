import React from 'react';
import { Link } from 'react-router-dom';
import ModuleLayout from '../components/ModuleLayout';
import styles from '../styles/ModuleContent.module.css';

const Modul2 = () => {
  return (
    <ModuleLayout id={2} title="Biosafety Concepts & Philosophy">
      <p>Biosafety bukan sekadar aturan, melainkan disiplin ilmu yang fokus pada perlindungan personel dan lingkungan dari risiko paparan agen biologis berbahaya.</p>
      
      <div className={styles.grid}>
        <div className={styles.item}>
          <h3>🧪 Biosafety</h3>
          <p>Fokus pada pencegahan paparan <strong>tidak sengaja</strong> (kecelakaan kerja, tumpahan, atau kegagalan sistem penahanan).</p>
        </div>
        <div className={styles.item}>
          <h3>🔐 Biosecurity</h3>
          <p>Fokus pada perlindungan terhadap penyalahgunaan, pencurian, atau pelepasan agen biologis secara <strong>sengaja</strong> (terorisme).</p>
        </div>
      </div>

      <h3>🧠 4 Pilar Biosafety</h3>
      <ul>
        <li><strong>Penahanan (Containment):</strong> Mengurung agen berbahaya agar tidak keluar.</li>
        <li><strong>Penilaian Risiko (Risk Assessment):</strong> Evaluasi mendalam sebelum kegiatan dimulai.</li>
        <li><strong>Kewaspadaan Universal:</strong> Memperlakukan semua sampel seolah infeksius.</li>
        <li><strong>Minimisasi Paparan:</strong> Membatasi durasi dan jumlah personel di area risiko.</li>
      </ul>

      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link to="/modul/2/quiz" className={styles.startQuizBtn}>
          START MODULE ASSESSMENT →
        </Link>
      </div>
    </ModuleLayout>
  );
};

export default Modul2;
