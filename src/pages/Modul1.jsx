import React from 'react';
import { Link } from 'react-router-dom';
import ModuleLayout from '../components/ModuleLayout';
import styles from '../styles/ModuleContent.module.css';

const Modul1 = () => {
  return (
    <ModuleLayout id={1} title="Foundations of Bioregulation">
      <p>Bioregulasi adalah hibrida dua konsep: "bio" (kehidupan) dan "regulasi" (tata kelola). Berdasarkan makalah Said Muhammad Naufal, terdapat dua dimensi utama:</p>
      
      <div className={styles.grid}>
        <div className={styles.item}>
          <h3>🧬 Dimensi Internal</h3>
          <p>Mekanisme homeostatik alami organisme (seperti regulasi ekspresi gen dan umpan balik hormonal) yang memungkinkan adaptasi terhadap lingkungan.</p>
        </div>
        <div className={styles.item}>
          <h3>⚖️ Dimensi Eksternal</h3>
          <p>Infrastruktur hukum, standar teknis, dan kebijakan publik yang mengatur interaksi manusia dengan organisme hidup dan produk biologis.</p>
        </div>
      </div>

      <div className={styles.infoBox}>
        <h4>📜 Sejarah Penting</h4>
        <p>Tonggak bioregulasi modern dimulai pada <strong>Konferensi Asilomar 1975</strong>, di mana para ilmuwan secara sukarela menghentikan riset DNA rekombinan untuk menyusun panduan keselamatan.</p>
      </div>

      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link to="/modul/1/quiz" className={styles.startQuizBtn}>
          START MODULE ASSESSMENT →
        </Link>
      </div>
    </ModuleLayout>
  );
};

export default Modul1;
