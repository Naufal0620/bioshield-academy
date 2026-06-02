import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useProgress } from '../context/ProgressContext';
import ModuleCard from '../components/ModuleCard';
import styles from './Lobby.module.css';

const modules = [
  { id: 1, title: "Foundations of Bioregulation", description: "Memahami dimensi internal (homeostatik) dan eksternal (kerangka hukum) dari bioregulasi." },
  { id: 2, title: "Biosafety Concepts & Philosophy", description: "Perbedaan Biosafety vs Biosecurity dan prinsip pengelolaan risiko biologis modern." },
  { id: 3, title: "The Microbe Monsters (BSL 1-4)", description: "Klasifikasi laboratorium berdasarkan tingkat risiko patogen dari standar WHO & CDC." },
  { id: 4, title: "Containment & PPE Armor", description: "Mempelajari Primary & Secondary Containment serta alat pelindung diri tingkat tinggi." },
  { id: 5, title: "Regulatory Frameworks (PP 21/2005)", description: "Menjelajah aturan main GMO di Indonesia, Protokol Cartagena, dan peran KKH PRG." },
  { id: 6, title: "The Future: AI & CRISPR Risks", description: "Tantangan masa depan: Gene Editing, Biologi Sintetik, dan konvergensi AI." }
];

const Lobby = () => {
  const { completedLevels, isLevelUnlocked, resetProgress, unlockAllLevels } = useProgress();
  const [cheatCode, setCheatCode] = useState('');

  // Handle Cheat Code with SweetAlert2
  useEffect(() => {
    const handleKeyDown = (e) => {
      const newCode = (cheatCode + e.key.toLowerCase()).slice(-9);
      setCheatCode(newCode);
      
      if (newCode === 'unlockall') {
        unlockAllLevels();
        setCheatCode('');
        Swal.fire({
          title: '🔓 ACCESS GRANTED',
          text: 'ALL MODULES DECRYPTED // BYPASS SUCCESS',
          icon: 'success',
          background: '#0a0a0a',
          color: '#39FF14',
          iconColor: '#39FF14',
          confirmButtonColor: '#39FF14',
          timer: 3000,
          timerProgressBar: true,
          customClass: {
            popup: styles.cyberSwalPopup,
            title: styles.cyberSwalTitle
          }
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cheatCode, unlockAllLevels]);

  // Handle Reset with SweetAlert2
  const handleResetRequest = () => {
    Swal.fire({
      title: 'CRITICAL_SYSTEM_WARNING',
      text: '[LOG]: Inisialisasi prosedur penghapusan data. Seluruh progres latihan akan dihapus secara permanen.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'CONFIRM_PURGE',
      cancelButtonText: 'ABORT_ACTION',
      background: '#0a0a0a',
      color: '#ff3131',
      iconColor: '#ff3131',
      confirmButtonColor: '#ff3131',
      cancelButtonColor: '#333',
      backdrop: `rgba(255,49,49,0.1) blur(4px)`,
      customClass: {
        popup: styles.cyberSwalPopup,
        title: styles.cyberSwalTitle
      }
    }).then((result) => {
      if (result.isConfirmed) {
        resetProgress();
        Swal.fire({
          title: 'PURGE COMPLETE',
          text: 'Memory banks cleared.',
          icon: 'success',
          background: '#0a0a0a',
          color: '#39FF14',
          confirmButtonColor: '#39FF14'
        });
      }
    });
  };

  return (
    <div className="container fadeIn">
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>BioShield Academy</h1>
        <p className={styles.subtitle}>Advanced Training System for Bioregulation & Biosafety</p>
      </header>

      <div className={styles.progressInfo}>
        <span>TRAINING_PROGRESS: {completedLevels.length} / {modules.length}</span>
        {completedLevels.length > 0 && (
          <button onClick={handleResetRequest} className={styles.resetBtn}>PURGE_DATA</button>
        )}
      </div>

      <div className={styles.grid}>
        {modules.map((m) => (
          <ModuleCard
            key={m.id}
            id={m.id}
            title={m.title}
            description={m.description}
            isUnlocked={isLevelUnlocked(m.id)}
            isCompleted={completedLevels.includes(m.id)}
          />
        ))}
      </div>

      <footer className={styles.footer}>
        <p>© 2026 BiosafetyHub - Terminal v2.0.4 - Secure Connection Established</p>
      </footer>
    </div>
  );
};

export default Lobby;
