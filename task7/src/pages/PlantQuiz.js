import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NurseryNavbar from '../components/nursery/Navbar';
import Footer from '../components/nursery/Footer';

const questions = [
  {
    id: 'light',
    question: 'How much light does your space get?',
    options: [
      { label: 'Low Light', value: 'low', icon: 'bi-cloud-moon' },
      { label: 'Indirect Sunlight', value: 'indirect', icon: 'bi-sun' },
      { label: 'Bright Direct Light', value: 'bright', icon: 'bi-brightness-high' },
    ],
  },
  {
    id: 'pets',
    question: 'Do you have pets or small children?',
    options: [
      { label: 'Yes, need pet-safe plants', value: 'safe', icon: 'bi-dog' },
      { label: 'No pets/children', value: 'any', icon: 'bi-house-check' },
    ],
  },
  {
    id: 'care',
    question: 'What is your plant care experience?',
    options: [
      { label: 'Total Beginner (Unkillable only)', value: 'beginner', icon: 'bi-seedling' },
      { label: 'I know the basics', value: 'intermediate', icon: 'bi-droplet' },
      { label: 'Pro Plant Parent', value: 'pro', icon: 'bi-trophy' },
    ],
  },
];

const recommendations = [
  { id: 1, name: 'Snake Plant', img: '/images/c1.avif', tags: ['low', 'any', 'beginner'], desc: 'The ultimate unkillable plant for low light.' },
  { id: 2, name: 'Spider Plant', img: '/images/c2.avif', tags: ['indirect', 'safe', 'beginner'], desc: 'Pet-friendly and very easy to grow.' },
  { id: 3, name: 'Aloe Vera', img: '/images/c3.avif', tags: ['bright', 'any', 'intermediate'], desc: 'Thrives in sun and has healing properties.' },
  { id: 4, name: 'Calathea', img: '/images/c4.avif', tags: ['low', 'safe', 'pro'], desc: 'Beautiful leaves but needs a pro touch.' },
  { id: 5, name: 'Jade Plant', img: '/images/c5.avif', tags: ['bright', 'safe', 'beginner'], desc: 'A lucky plant that loves direct sunlight.' },
];

function PlantQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleOption = (val) => {
    const newAnswers = { ...answers, [questions[step].id]: val };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    // Basic matching logic
    const matched = recommendations.filter(p => 
      p.tags.includes(finalAnswers.light) || 
      p.tags.includes(finalAnswers.pets) || 
      p.tags.includes(finalAnswers.care)
    ).slice(0, 2);
    setResult(matched);
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <NurseryNavbar />
      
      <div className="container flex-grow-1 py-5 d-flex align-items-center justify-content-center">
        <div className="card border-0 shadow-lg p-4 p-md-5 rounded-4" style={{ maxWidth: '600px', width: '100%' }}>
          {!result ? (
            <div className="text-center">
              <div className="mb-4">
                <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-bold">
                  Step {step + 1} of {questions.length}
                </span>
              </div>
              <h2 className="fw-bold mb-4">{questions[step].question}</h2>
              <div className="d-grid gap-3">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt.value}
                    className="btn btn-outline-success py-3 px-4 rounded-3 text-start d-flex align-items-center quiz-opt-btn"
                    onClick={() => handleOption(opt.value)}
                  >
                    <i className={`bi ${opt.icon} fs-4 me-3`}></i>
                    <span className="fw-semibold">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-3">
                <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '3rem' }}></i>
              </div>
              <h2 className="fw-bold mb-2">We found your matches!</h2>
              <p className="text-muted mb-4">Based on your space and lifestyle, we recommend:</p>
              
              <div className="row g-3 mb-4">
                {result.map(p => (
                  <div key={p.id} className="col-6 text-center">
                    <div className="p-3 bg-white rounded-4 border h-100">
                      <img src={p.img} alt={p.name} className="img-fluid mb-2" style={{ maxHeight: '100px' }} />
                      <h6 className="fw-bold mb-1">{p.name}</h6>
                      <p className="small text-muted mb-0" style={{ fontSize: '0.7rem' }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="d-grid gap-2">
                <button className="btn btn-success btn-lg rounded-pill fw-bold" onClick={() => navigate('/trendinggardening')}>
                  Shop My Matches
                </button>
                <button className="btn btn-link text-muted text-decoration-none" onClick={() => { setStep(0); setResult(null); }}>
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
      <style>{`
        .quiz-opt-btn { transition: all 0.2s ease; border-width: 2px; }
        .quiz-opt-btn:hover { background-color: #f0fdf4; border-color: #198754; color: #198754; transform: translateX(5px); }
      `}</style>
    </div>
  );
}

export default PlantQuiz;
