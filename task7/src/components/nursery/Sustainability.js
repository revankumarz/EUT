import React from 'react';

function Sustainability() {
  return (
    <section className="container my-5 py-5 border-top">
      <div className="row align-items-center">
        <div className="col-md-6 order-md-2 mb-4 mb-md-0 d-flex justify-content-center">
          <div className="position-relative">
            <div 
              className="rounded-circle shadow-lg bg-white p-3 d-flex align-items-center justify-content-center overflow-hidden"
              style={{ width: 'min(400px, 90vw)', height: 'min(400px, 90vw)' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=800" 
                alt="Sustainability" 
                className="rounded-circle"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div 
              className="position-absolute bg-success text-white p-3 rounded-4 shadow"
              style={{ bottom: '20px', left: '-10px', minWidth: '180px', zIndex: 2 }}
            >
              <h4 className="m-0 fw-bold">100%</h4>
              <p className="m-0 small">Eco-Friendly Packaging</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 order-md-1">
          <h6 className="text-success fw-bold text-uppercase mb-3">Our Commitment</h6>
          <h2 className="display-6 fw-bold mb-4">Growing a Greener Future, Together</h2>
          <p className="text-muted mb-4">
            At Nursery, we believe that the health of our plants is directly linked to the health of our planet. 
            That's why we've committed to sustainable practices across our entire supply chain.
          </p>
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <div className="bg-light p-3 rounded-circle me-3">
                  <i className="bi bi-recycle text-success fs-4"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Peat-Free Soil</h6>
                  <small className="text-muted">Protecting ecosystems</small>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <div className="bg-light p-3 rounded-circle me-3">
                  <i className="bi bi-droplet text-success fs-4"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Water Wise</h6>
                  <small className="text-muted">Precision irrigation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sustainability;
