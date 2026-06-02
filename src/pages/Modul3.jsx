import React from 'react';
import { Link } from 'react-router-dom';
import ModuleLayout from '../components/ModuleLayout';
import styles from '../styles/ModuleContent.module.css';

const Modul3 = () => {
  return (
    <ModuleLayout id={3} title="The Microbe Monsters (BSL 1-4)">
      <p>Klasifikasi tingkat keamanan hayati (Biosafety Level) ditentukan berdasarkan karakteristik bahaya patogen dan jenis pekerjaan yang dilakukan.</p>
      
      <div className={styles.grid}>
        <div className={styles.item}>
          <h3>🟢 BSL-1</h3>
          <p>Agen tidak berbahaya bagi manusia sehat. Praktik standar cukup. Contoh: <em>Bacillus subtilis</em>.</p>
        </div>
        <div className={styles.item}>
          <h3>🟡 BSL-2</h3>
          <p>Agen dengan risiko sedang. Membutuhkan BSC dan tanda bahaya biohazard. Contoh: <em>HIV</em>, <em>Hepatitis B</em>.</p>
        </div>
        <div className={styles.item}>
          <h3>🟠 BSL-3</h3>
          <p>Agen serius/mematikan via transmisi udara. Ventilasi negatif wajib. Contoh: <em>Tuberculosis</em>.</p>
        </div>
        <div className={`${styles.item} ${styles.bsl4}`}>
          <h3>🔴 BSL-4</h3>
          <p>Agen sangat mematikan tanpa vaksin/obat. Harus di gedung terisolasi. Contoh: <em>Ebola</em>.</p>
        </div>
      </div>

      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link to="/modul/3/quiz" className={styles.startQuizBtn}>
          START MODULE ASSESSMENT →
        </Link>
      </div>
    </ModuleLayout>
  );
};

export default Modul3;
