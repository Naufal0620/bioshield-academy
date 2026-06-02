import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ModuleLayout from '../components/ModuleLayout';
import Quiz from '../components/Quiz';
import { useProgress } from '../context/ProgressContext';

const quizData = {
  1: [
    {
      question: "Apa yang dimaksud dengan bioregulasi dalam dimensi internal?",
      options: ["Hukum negara", "Mekanisme homeostatik alami sel", "Perdagangan internasional", "Aturan kementerian"],
      answer: "Mekanisme homeostatik alami sel"
    },
    {
      question: "Peristiwa apa yang menandai lahirnya kesadaran pengawasan riset genetik pada tahun 1975?",
      options: ["Konferensi Jenewa", "Protokol Kyoto", "Konferensi Asilomar", "Perjanjian Paris"],
      answer: "Konferensi Asilomar"
    }
  ],
  2: [
    {
      question: "Fokus utama dari Biosecurity adalah melindungi dari...",
      options: ["Kecelakaan kerja", "Tumpahan bahan", "Penyalahgunaan sengaja (terorisme)", "Kesalahan prosedur"],
      answer: "Penyalahgunaan sengaja (terorisme)"
    },
    {
      question: "Manakah yang merupakan salah satu dari 4 pilar biosafety?",
      options: ["Penjualan bebas", "Minimisasi Paparan", "Pengurangan biaya", "Kebebasan riset"],
      answer: "Minimisasi Paparan"
    }
  ],
  3: [
    {
      question: "Tingkat BSL yang wajib memiliki ventilasi tekanan udara negatif adalah...",
      options: ["BSL-1", "BSL-2", "BSL-3 dan BSL-4", "Hanya BSL-1"],
      answer: "BSL-3 dan BSL-4"
    },
    {
      question: "Contoh agen biologis untuk laboratorium BSL-1 adalah...",
      options: ["Virus Ebola", "M. tuberculosis", "Bacillus subtilis", "Virus HIV"],
      answer: "Bacillus subtilis"
    }
  ],
  4: [
    {
      question: "Penggunaan filter HEPA dalam desain fasilitas termasuk ke dalam...",
      options: ["Primary Containment", "Secondary Containment", "Tertiary Containment", "Personal Containment"],
      answer: "Secondary Containment"
    },
    {
      question: "Positive Pressure Suits wajib digunakan pada tingkat...",
      options: ["BSL-1", "BSL-2", "BSL-3", "BSL-4"],
      answer: "BSL-4"
    }
  ],
  5: [
    {
      question: "Regulasi utama keamanan hayati GMO di Indonesia diatur dalam...",
      options: ["PP No. 21 Tahun 2005", "UU No. 11 Tahun 2008", "PP No. 5 Tahun 1994", "UUD 1945"],
      answer: "PP No. 21 Tahun 2005"
    },
    {
      question: "Lembaga di Indonesia yang bertugas mengawasi keamanan pangan GMO adalah...",
      options: ["KLHK", "Kementan", "BPOM", "KKH"],
      answer: "BPOM"
    }
  ],
  6: [
    {
      question: "Apa risiko utama penggunaan teknologi CRISPR-Cas9?",
      options: ["Biaya murah", "Off-target effects (mutasi tidak disengaja)", "Pertumbuhan lambat", "Kurangnya data"],
      answer: "Off-target effects (mutasi tidak disengaja)"
    },
    {
      question: "Konsep yang mengintegrasikan kesehatan manusia, hewan, dan ekosistem disebut...",
      options: ["Green Peace", "One Health", "Cyberbiosecurity", "Safety First"],
      answer: "One Health"
    }
  ]
};

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { completeLevel } = useProgress();
  
  const moduleId = parseInt(id);
  const questions = quizData[moduleId];

  if (!questions) {
    return <div className="container fadeIn"><h1>Quiz Not Found</h1></div>;
  }

  return (
    <ModuleLayout id={moduleId} title={`Final Assessment - Module 0${moduleId}`}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link 
            to={`/modul/${moduleId}`} 
            style={{ 
              color: 'var(--neon-yellow)', 
              textDecoration: 'none', 
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              border: '1px solid var(--neon-yellow)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }}
          >
            ← REVIEW MATERIAL
          </Link>
        </div>
        <Quiz 
          questions={questions} 
          onComplete={() => {
            completeLevel(moduleId);
            navigate('/');
          }} 
        />
      </div>
    </ModuleLayout>
  );
};

export default QuizPage;
