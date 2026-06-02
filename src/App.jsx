import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import Lobby from './pages/Lobby';
import Modul1 from './pages/Modul1';
import Modul2 from './pages/Modul2';
import Modul3 from './pages/Modul3';
import Modul4 from './pages/Modul4';
import Modul5 from './pages/Modul5';
import Modul6 from './pages/Modul6';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <ProgressProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/modul/1" element={<Modul1 />} />
          <Route path="/modul/2" element={<Modul2 />} />
          <Route path="/modul/3" element={<Modul3 />} />
          <Route path="/modul/4" element={<Modul4 />} />
          <Route path="/modul/5" element={<Modul5 />} />
          <Route path="/modul/6" element={<Modul6 />} />
          <Route path="/modul/:id/quiz" element={<QuizPage />} />
        </Routes>
      </Router>
    </ProgressProvider>
  );
}

export default App;
