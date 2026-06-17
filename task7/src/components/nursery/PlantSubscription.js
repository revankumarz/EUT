import React from 'react';
import { useSearch } from '../../context/SearchContext';

function PlantSubscription() {
  const { searchQuery } = useSearch();
  const items = [
    {
      id: 'sub1',
      title: 'Plant Subscriptions',
      desc: 'Receive a curated box of handpicked plants, packaged with care, every month.',
      img: '/images/subscription.png',
      btnText: 'Start Saving',
      btnClass: 'btn-success',
      titleColor: '#064439'
    },
    {
      id: 'sub2',
      title: 'Join our Plant Parent Rewards Club',
      desc: 'Earn coins and redeem them for exclusive discounts.',
      img: '/images/rewards.png',
      btnText: 'Refer a Friend',
      btnClass: 'btn-success',
      titleColor: '#064439'
    }
  ];

  const filteredItems = items.filter(it => 
    it.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    it.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="container my-5 py-2">
      {filteredItems.length > 0 ? (
        <div className="row g-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-12 col-md-6">
              <div 
                className="card h-100 border-0 rounded-4 p-4 d-flex flex-column flex-sm-row align-items-center bg-white shadow-sm text-center text-sm-start"
                style={{ minHeight: '280px' }}
              >
                <div className="flex-shrink-0 mb-3 mb-sm-0" style={{ width: 'min(40%, 200px)' }}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="img-fluid rounded-3"
                    style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                  />
                </div>
                <div className="ms-sm-4 flex-grow-1">
                  <h3 className="fw-bold mb-3" style={{ color: item.titleColor, fontSize: '1.5rem' }}>{item.title}</h3>
                  <p className="text-muted mb-4" style={{ fontSize: '1rem', lineHeight: '1.4' }}>
                    {item.desc}
                  </p>
                  <button className={`btn ${item.btnClass} fw-bold px-4 py-2 rounded-2`} style={{ backgroundColor: '#198754' }}>
                    {item.btnText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-4">
          <p className="text-muted">No offers or subscriptions match your search.</p>
        </div>
      )}
    </section>
  );
}

export default PlantSubscription;
