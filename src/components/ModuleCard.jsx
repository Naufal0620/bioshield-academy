import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ModuleCard.module.css';

const ModuleCard = ({ id, title, description, isUnlocked, isCompleted }) => {
  return (
    <div className={`${styles.card} ${!isUnlocked ? styles.locked : ''} ${isCompleted ? styles.completed : ''}`}>
      <div className={styles.statusBadge}>
        {isCompleted ? '✓ COMPLETED' : !isUnlocked ? '🔒 LOCKED' : '🔓 AVAILABLE'}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
      {isUnlocked ? (
        <Link to={`/modul/${id}`} className={styles.btn}>
          ENTER MODULE
        </Link>
      ) : (
        <button className={styles.btnDisabled} disabled>
          LOCKED
        </button>
      )}
    </div>
  );
};

export default ModuleCard;
