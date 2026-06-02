import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import styles from './ModuleLayout.module.css';

const ModuleLayout = ({ id, title, children }) => {
  const navigate = useNavigate();

  return (
    <div className="container fadeIn">
      <nav className={styles.nav}>
        <Link to="/" className={styles.backBtn}>← BACK TO LOBBY</Link>
        <span className={styles.levelIndicator}>MODULE 0{id}</span>
      </nav>

      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>

      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
};

export default ModuleLayout;
