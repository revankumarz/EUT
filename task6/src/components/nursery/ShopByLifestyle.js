import React from 'react';

const lifestyles = [
  { id: 1, title: 'Pet-Friendly', img: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=800', desc: 'Safe for your furry friends.' },
  { id: 2, title: 'Low Light', img: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=800', desc: 'Perfect for darker corners.' },
  { id: 3, title: 'Air Purifying', img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800', desc: 'Breath fresher, cleaner air.' },
];

function ShopByLifestyle() {
  return (
    <section className="container my-5 py-4">
      <h3 className="text-center mb-5 fw-bold">Shop by Lifestyle</h3>
      <div className="row g-4">
        {lifestyles.map((item) => (
          <div key={item.id} className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm overflow-hidden text-center lifestyle-card">
              <div className="overflow-hidden" style={{ height: '250px' }}>
                <img
                  src={item.img}
                  className="card-img-top h-100 w-100 object-fit-cover transition-transform"
                  alt={item.title}
                  style={{ transition: 'transform 0.5s ease' }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">{item.title}</h5>
                <p className="card-text text-muted">{item.desc}</p>
                <button className="btn btn-outline-success btn-sm px-4">Shop Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .lifestyle-card:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}

export default ShopByLifestyle;
