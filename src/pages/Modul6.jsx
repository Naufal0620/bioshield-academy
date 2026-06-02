import React from 'react';
import { Link } from 'react-router-dom';
import ModuleLayout from '../components/ModuleLayout';
import styles from '../styles/ModuleContent.module.css';

const Modul6 = () => {
  return (
    <ModuleLayout id={6} title="The Future: AI & CRISPR Risks">
      <p>Kita memasuki era baru di mana bioteknologi bertemu dengan kecerdasan buatan, membawa tantangan yang melampaui paradigma tradisional.</p>
      
      <div className={styles.grid}>
        <div className={styles.item}>
          <h3>✂️ CRISPR-Cas9</h3>
          <p>Teknologi penyuntingan gen yang presisi namun berisiko adanya <em>off-target effects</em> (mutasi tidak disengaja).</p>
        </div>
        <div className={styles.item}>
          <h3>🤖 Konvergensi AI</h3>
          <p>Algoritma AI dapat merancang protein atau virus baru yang lebih mematikan, menuntut adanya konsep <strong>Cyberbiosecurity</strong>.</p>
        </div>
      </div>

      <div className={styles.infoBox}>
        <h4>🌍 Pendekatan One Health</h4>
        <p>Masa depan keamanan hayati menuntut integrasi kesehatan manusia, hewan, dan ekosistem sebagai satu kesatuan yang tidak terpisahkan.</p>
      </div>

      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link to="/modul/6/quiz" className={styles.startQuizBtn}>
          START MODULE ASSESSMENT →
        </Link>
      </div>
    </ModuleLayout>
  );
};

export default Modul6;
