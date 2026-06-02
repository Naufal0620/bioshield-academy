import React from 'react';
import { Link } from 'react-router-dom';
import ModuleLayout from '../components/ModuleLayout';
import styles from '../styles/ModuleContent.module.css';

const Modul5 = () => {
  return (
    <ModuleLayout id={5} title="Regulatory Frameworks (PP 21/2005)">
      <p>Bioregulasi di Indonesia memastikan inovasi bioteknologi (terutama GMO) tidak merusak ekosistem atau kesehatan publik.</p>
      
      <div className={styles.grid}>
        <div className={styles.item}>
          <h3>🇮🇩 PP No. 21 Tahun 2005</h3>
          <p>Regulasi utama tentang Keamanan Hayati Produk Rekayasa Genetik (PRG) di Indonesia.</p>
        </div>
        <div className={styles.item}>
          <h3>🚢 Protokol Cartagena</h3>
          <p>Kesepakatan internasional tentang pergerakan lintas batas organisme hidup hasil modifikasi (LMO).</p>
        </div>
      </div>

      <h3>🏛️ Struktur Kelembagaan (Indonesia)</h3>
      <ul>
        <li><strong>KKH PRG:</strong> Badan penasihat kajian teknis.</li>
        <li><strong>KLHK:</strong> Pengawasan keamanan lingkungan.</li>
        <li><strong>BPOM:</strong> Pengawasan keamanan pangan GMO.</li>
        <li><strong>Kementan:</strong> Pengawasan keamanan pakan GMO.</li>
      </ul>

      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link to="/modul/5/quiz" className={styles.startQuizBtn}>
          START MODULE ASSESSMENT →
        </Link>
      </div>
    </ModuleLayout>
  );
};

export default Modul5;
