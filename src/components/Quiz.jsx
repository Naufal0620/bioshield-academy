import React, { useState, useEffect } from 'react';
import styles from './Quiz.module.css';

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [animating, setAnimating] = useState(false);

  const handleOptionClick = (option) => {
    if (selectedOption !== null || animating) return;
    
    setSelectedOption(option);
    const correct = option === questions[currentQuestion].answer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setAnimating(true);
    
    // Smooth transition delay
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
      setAnimating(false);
    }, 400);
  };

  const isPassing = score >= Math.ceil(questions.length * 0.7);

  if (showResult) {
    return (
      <div className={`${styles.resultContainer} fadeIn`}>
        <h3 className={styles.resultTitle}>
          {isPassing ? '🟢 MISSION ACCOMPLISHED' : '🔴 MISSION FAILED'}
        </h3>
        <p className={styles.scoreText}>Accuracy: {Math.round((score / questions.length) * 100)}% ({score}/{questions.length})</p>
        
        {isPassing ? (
          <div className={styles.passActions}>
            <p className={styles.congrats}>Excellent work, Agent. You have successfully validated your knowledge.</p>
            <button onClick={onComplete} className={styles.claimBtn}>
              COMPLETE MODULE & PROCEED
            </button>
          </div>
        ) : (
          <div className={styles.failActions}>
            <p className={styles.failNote}>Neural synchronization failed. Review the data and re-attempt.</p>
            <button 
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowResult(false);
                setSelectedOption(null);
                setIsCorrect(null);
              }} 
              className={styles.retryBtn}
            >
              REBOOT ASSESSMENT
            </button>
          </div>
        )}
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className={`${styles.quizBox} ${animating ? styles.fadeOut : styles.fadeIn}`}>
      <div className={styles.header}>
        <div className={styles.progressHeader}>
          <span className={styles.progressText}>DATA POINT {currentQuestion + 1} OF {questions.length}</span>
          <span className={styles.scoreLive}>SCORE: {score}</span>
        </div>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <h3 className={styles.questionText}>{q.question}</h3>

      <div className={styles.optionsGrid}>
        {q.options.map((option, idx) => (
          <button
            key={idx}
            className={`
              ${styles.optionBtn} 
              ${selectedOption === option ? (isCorrect ? styles.correct : styles.wrong) : ''}
              ${selectedOption !== null && option === q.answer ? styles.correctHighlight : ''}
              ${selectedOption !== null && option !== selectedOption && option !== q.answer ? styles.dimmed : ''}
            `}
            onClick={() => handleOptionClick(option)}
            disabled={selectedOption !== null || animating}
          >
            <span className={styles.optionLetter}>{String.fromCharCode(65 + idx)}</span>
            <span className={styles.optionContent}>{option}</span>
          </button>
        ))}
      </div>

      <div className={styles.feedbackWrapper}>
        {selectedOption !== null && (
          <div className={`${styles.feedbackSection} fadeIn`}>
            <div className={isCorrect ? styles.correctBanner : styles.wrongBanner}>
              <span className={styles.statusIcon}>{isCorrect ? '✓' : '✗'}</span>
              <span className={styles.statusText}>
                {isCorrect ? 'SYSTEM ACCESS GRANTED: CORRECT' : 'SYSTEM BREACH DETECTED: INCORRECT'}
              </span>
            </div>
            <button onClick={handleNext} className={styles.nextBtn}>
              {currentQuestion + 1 === questions.length ? 'FINALIZE' : 'NEXT DATA POINT →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
