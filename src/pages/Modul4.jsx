import React from 'react';
import { Link } from 'react-router-dom';
import ModuleLayout from '../components/ModuleLayout';
import styles from '../styles/ModuleContent.module.css';

const Modul4 = () => {
  return (
    <ModuleLayout id={4} title="Containment & PPE Armor">
      <p>Dalam biosafety, perlindungan berlapis diwujudkan melalui sistem penahanan (containment) primer dan sekunder.</p>
      
      <div className={styles.grid}>
        <div className={styles.item}>
          <h3>🛡️ Primary Containment</h3>
          <p>Penghalang langsung antara personel dan agen biologis. Meliputi penggunaan BSC (Biosafety Cabinet) dan APD (PPE).</p>
        </div>
        <div className={styles.item}>
          <h3>🏢 Secondary Containment</h3>
          <p>Perlindungan lingkungan luar melalui desain fasilitas, seperti sistem filtrasi udara HEPA dan tekanan udara negatif.</p>
        </div>
      </div>

      <h3>🛡️ APD Berdasarkan Tingkat Risiko</h3>
      <ul>
        <li><strong>Level 1/2:</strong> Jas lab, sarung tangan, kacamata goggle.</li>
        <li><strong>Level 3:</strong> Respirator N95, pelindung wajah.</li>
        <li><strong>Level 4:</strong> Positive Pressure Suits (pakaian astronot bertali udara).</li>
      </ul>

      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link to="/modul/4/quiz" className={styles.startQuizBtn}>
          START MODULE ASSESSMENT →
        </Link>
      </div>
    </ModuleLayout>
  );
};

export default Modul4;
