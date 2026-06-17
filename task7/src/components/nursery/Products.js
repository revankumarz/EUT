import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useSearch } from '../../context/SearchContext';

function Products() {
  const { addToCart } = useCart();
  const { searchQuery } = useSearch();
  const products = [
    { id: 'n1', img: '/images/c1.avif', title: 'Money Plant, Scindapsus (Pack of 3) - Plant', price: 758, rating: 4, reviews: 155 },
    { id: 'n2', img: '/images/c2.avif', title: 'Set of 2 Mesmerising Flower Plants', price: 598, rating: 4.5, reviews: 19 },
    { id: 'n3', img: '/images/c3.avif', title: 'Top 5 Easiest to Grow Plants', price: 1130, rating: 4, reviews: 54 },
    { id: 'n4', img: '/images/c4.avif', title: 'Top 3 Mosquito Repellent Plants', price: 980, rating: 4, reviews: 31 },
    { id: 'n5', img: '/images/c5.avif', title: 'Top 5 Plants for Decoration on Auspicious Occasion', price: 1236, rating: 4, reviews: 36 },
    { id: 'n6', img: '/images/c6.avif', title: 'Premium Flower Bulbs Collection', price: 449, rating: 4, reviews: 88 },
    { id: 'n7', img: '/images/c7.avif', title: 'Indoor Plant Starter Kit', price: 1499, rating: 5, reviews: 212 },
    { id: 'n8', img: '/images/c8.avif', title: 'Air Purifying Plants Combo', price: 899, rating: 4, reviews: 67 },
  ];

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAdd = (p) => {
    addToCart({ id: p.id, title: p.title, image: p.img, price: p.price, currency: '₹' });
  };

  const getPerSlide = () => {
    if (typeof window === 'undefined') return 4;
    const w = window.innerWidth;
    if (w < 576) return 1;
    if (w < 768) return 2;
    if (w < 992) return 3;
    return 4;
  };

  const [perSlide, setPerSlide] = useState(getPerSlide);

  useEffect(() => {
    const onResize = () => setPerSlide(getPerSlide());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const slides = [];
  for (let i = 0; i < filteredProducts.length; i += perSlide) {
    slides.push(filteredProducts.slice(i, i + perSlide));
  }

  const renderStars = (n) => {
    const full = Math.floor(n);
    const half = n - full >= 0.5;
    return Array.from({ length: 5 }, (_, i) => {
      let cls = 'bi-star';
      if (i < full) cls = 'bi-star-fill';
      else if (i === full && half) cls = 'bi-star-half';
      return <i key={i} className={`bi ${cls} text-warning`} />;
    });
  };

  return (
    <section className="container my-5 pt-4">
      <div className="text-center mb-5">
        {searchQuery ? (
          <>
            <h3 className="fw-bold mb-2">Search Results for "{searchQuery}"</h3>
            <p className="text-muted small">Found {filteredProducts.length} matching products</p>
          </>
        ) : (
          <h3 className="fw-bold">Value For Money - Upto 35% Off</h3>
        )}
      </div>
      
      {filteredProducts.length > 0 ? (
        <div
          key={`${perSlide}-${searchQuery}`}
          id="productsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {slides.map((slide, sIdx) => (
              <div key={sIdx} className={`carousel-item${sIdx === 0 ? ' active' : ''}`}>
                <div className="row g-3 px-2 px-md-4">
                  {slide.map((p, idx) => (
                    <div key={`${sIdx}-${idx}`} className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="card h-100 border">
                        <img
                          src={p.img}
                          alt={p.title}
                          className="card-img-top p-2"
                          style={{ height: '200px', objectFit: 'contain' }}
                        />
                        <div className="card-body d-flex flex-column">
                          <div className="fw-bold mb-2" style={{ color: '#ef4f5f', fontSize: '1.1rem' }}>
                            ₹{p.price.toLocaleString('en-IN')}
                          </div>
                          <p className="card-text small mb-2" style={{ minHeight: '2.5em' }}>
                            {p.title}
                          </p>
                          <div className="mb-2 small">
                            {renderStars(p.rating)}
                            <span className="text-muted ms-2">{p.reviews} reviews</span>
                          </div>
                          <button
                            className="btn btn-sm btn-outline-success mt-auto"
                            onClick={() => handleAdd(p)}
                          >
                            <i className="bi bi-cart-plus me-1"></i>Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {slides.length > 1 && (
            <>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#productsCarousel"
                data-bs-slide="prev"
                style={{ width: '4%' }}
              >
                <span
                  className="carousel-control-prev-icon bg-dark rounded-circle p-3"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#productsCarousel"
                data-bs-slide="next"
                style={{ width: '4%' }}
              >
                <span
                  className="carousel-control-next-icon bg-dark rounded-circle p-3"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="text-center py-5">
          <i className="bi bi-search fs-1 text-muted mb-3"></i>
          <h4>No products found for "{searchQuery}"</h4>
          <p className="text-muted">Try using different keywords or check your spelling.</p>
        </div>
      )}
    </section>
  );
}

export default Products;
