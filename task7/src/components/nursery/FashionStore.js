import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useSearch } from '../../context/SearchContext';

function FashionStore() {
  const { addToCart } = useCart();
  const { searchQuery } = useSearch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const USD_TO_INR = 83;
  const toInr = (usd) => Math.round(usd * USD_TO_INR);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => setProducts(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status" />
        <div className="mt-2 text-muted">Loading products…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">Failed to load products: {error}</div>
      </div>
    );
  }

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container py-4 no-hover">
      <h2 className="mb-4">Fashion Store</h2>
      {filteredProducts.length > 0 ? (
        <div>
          {filteredProducts.map((p) => {
            const inr = toInr(p.price);
            const bullets = p.description.split('. ').filter(Boolean).slice(0, 5);
            return (
              <div key={p.id} className="row g-3 py-4 px-3 border-bottom mx-0 bg-white">
                <div className="col-12 col-md-3 text-center">
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ maxHeight: '200px', maxWidth: '100%', objectFit: 'contain' }}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <h6 className="fw-semibold mb-2" style={{ color: '#2874F0' }}>
                    {p.title}
                  </h6>
                  {p.rating && (
                    <div className="d-flex align-items-center mb-2">
                      <span
                        className="badge me-2 text-white"
                        style={{ backgroundColor: '#388E3C', fontSize: '0.8rem' }}
                      >
                        {p.rating.rate} ★
                      </span>
                      <small className="text-muted fw-semibold">
                        {p.rating.count.toLocaleString()} Ratings &amp; Reviews
                      </small>
                    </div>
                  )}
                  <div className="text-muted small text-capitalize mb-2">{p.category}</div>
                  <ul className="small text-secondary mb-0 ps-3">
                    {bullets.map((s, i) => (
                      <li key={i}>{s.replace(/\.$/, '')}</li>
                    ))}
                  </ul>
                </div>

                <div className="col-12 col-md-3 text-md-end">
                  <div className="fw-bold fs-4 mb-3" style={{ color: '#212121' }}>
                    ₹{inr.toLocaleString('en-IN')}
                  </div>
                  <button
                    className="btn text-white fw-semibold"
                    style={{ backgroundColor: '#FB641B' }}
                    onClick={() =>
                      addToCart({
                        id: p.id,
                        title: p.title,
                        image: p.image,
                        price: inr,
                        currency: '₹',
                      })
                    }
                  >
                    <i className="bi bi-cart-plus me-1"></i>Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-5">
          <i className="bi bi-search fs-1 text-muted mb-3"></i>
          <h4>No items found for "{searchQuery}"</h4>
          <p className="text-muted">Try a different search term.</p>
        </div>
      )}
    </div>
  );
}

export default FashionStore;
