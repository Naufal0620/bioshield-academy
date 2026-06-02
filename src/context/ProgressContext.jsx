import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [completedLevels, setCompletedLevels] = useState(() => {
    const saved = localStorage.getItem('bioshield_progress');
    return saved ? JSON.parse(saved).completedLevels : [];
  });

  useEffect(() => {
    localStorage.setItem('bioshield_progress', JSON.stringify({ completedLevels }));
  }, [completedLevels]);

  const completeLevel = (levelId) => {
    if (!completedLevels.includes(levelId)) {
      setCompletedLevels((prev) => [...prev, levelId]);
    }
  };

  const isLevelUnlocked = (levelId) => {
    if (levelId === 1) return true;
    return completedLevels.includes(levelId - 1);
  };

  const resetProgress = () => {
    setCompletedLevels([]);
  };

  const unlockAllLevels = () => {
    setCompletedLevels([1, 2, 3, 4, 5, 6]);
  };

  return (
    <ProgressContext.Provider value={{ completedLevels, completeLevel, isLevelUnlocked, resetProgress, unlockAllLevels }}>
      {children}
    </ProgressContext.Provider>
  );
};
