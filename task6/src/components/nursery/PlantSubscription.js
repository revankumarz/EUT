import React from 'react';

function PlantSubscription() {
  return (
    <section className="container my-5 py-2">
      <div className="row g-4">
        {/* Left Card: Subscriptions */}
        <div className="col-12 col-md-6">
          <div 
            className="card h-100 border-0 rounded-4 p-4 d-flex flex-column flex-sm-row align-items-center bg-white shadow-sm text-center text-sm-start"
            style={{ minHeight: '280px' }}
          >
            <div className="flex-shrink-0 mb-3 mb-sm-0" style={{ width: 'min(40%, 200px)' }}>
              <img 
                src="/images/subscription.png" 
                alt="Plant Subscriptions" 
                className="img-fluid rounded-3"
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
            </div>
            <div className="ms-sm-4 flex-grow-1">
              <h3 className="fw-bold mb-3" style={{ color: '#064439', fontSize: '1.5rem' }}>Plant Subscriptions</h3>
              <p className="text-muted mb-4" style={{ fontSize: '1rem', lineHeight: '1.4' }}>
                Receive a curated box of handpicked plants, packaged with care, every month.
              </p>
              <button className="btn btn-success fw-bold px-4 py-2 rounded-2" style={{ backgroundColor: '#198754' }}>
                Start Saving
              </button>
            </div>
          </div>
        </div>

        {/* Right Card: Rewards Club */}
        <div className="col-12 col-md-6">
          <div 
            className="card h-100 border-0 rounded-4 p-4 d-flex flex-column flex-sm-row align-items-center bg-white shadow-sm text-center text-sm-start"
            style={{ minHeight: '280px' }}
          >
            <div className="flex-shrink-0 mb-3 mb-sm-0" style={{ width: 'min(40%, 200px)' }}>
              <img 
                src="/images/rewards.png" 
                alt="Plant Parent Rewards Club" 
                className="img-fluid rounded-3"
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
            </div>
            <div className="ms-sm-4 flex-grow-1">
              <h3 className="fw-bold mb-3" style={{ color: '#064439', fontSize: '1.5rem' }}>Join our Plant Parent Rewards Club</h3>
              <p className="text-muted mb-4" style={{ fontSize: '1rem', lineHeight: '1.4' }}>
                Earn coins and redeem them for exclusive discounts.
              </p>
              <button className="btn btn-success fw-bold px-4 py-2 rounded-2" style={{ backgroundColor: '#198754' }}>
                Refer a Friend
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlantSubscription;
