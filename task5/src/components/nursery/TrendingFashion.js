import { useEffect, useState } from 'react';

function TrendingFashion() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const USD_TO_INR = 83;
  const toInr = (usd) => Math.round(usd * USD_TO_INR);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then((r) => r.json())
      .then((data) => setItems(data.slice(0, 4)))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="container my-5 text-center">
        <h3 className="mb-4">Trending</h3>
        <div className="spinner-border text-success" role="status" />
      </section>
    );
  }

  return (
    <section className="container my-5">
      <h3 className="text-center mb-4">Trending</h3>
      <div className="row g-4 justify-content-center">
        {items.map((it) => (
          <div key={it.id} className="col-6 col-md-3 text-center trending-card">
            <div
              className="mx-auto rounded-circle overflow-hidden shadow-sm trending-img-wrap bg-white d-flex align-items-center justify-content-center"
              style={{ width: '220px', height: '220px' }}
            >
              <img
                src={it.image}
                alt={it.title}
                style={{ maxWidth: '70%', maxHeight: '70%', objectFit: 'contain' }}
              />
            </div>
            <p
              className="mt-3 fw-semibold px-2"
              style={{
                color: '#ef4f5f',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {it.title} - ₹{toInr(it.price).toLocaleString('en-IN')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingFashion;
