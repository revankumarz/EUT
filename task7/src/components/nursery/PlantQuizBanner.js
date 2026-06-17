import React from 'react';
import { Link } from 'react-router-dom';

function PlantQuizBanner() {
  return (
    <section className="container my-5">
      <div 
        className="p-5 rounded-4 text-white text-center shadow-lg"
        style={{ 
          background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h2 className="display-5 fw-bold mb-3">Not sure which plant is right?</h2>
        <p className="fs-5 mb-4 max-width-600 mx-auto">
          Take our 2-minute "Plant Parent" quiz and we'll match you with the perfect 
          green companion based on your space and lifestyle.
        </p>
        <Link to="/quiz" className="btn btn-warning btn-lg px-5 fw-bold rounded-pill hover-scale text-decoration-none">
          Find My Match <i className="bi bi-arrow-right ms-2"></i>
        </Link>
      </div>
      <style>{`
        .max-width-600 { max-width: 600px; }
        .hover-scale { transition: transform 0.2s; }
        .hover-scale:hover { transform: scale(1.05); color: inherit; }
      `}</style>
    </section>
  );
}

export default PlantQuizBanner;
