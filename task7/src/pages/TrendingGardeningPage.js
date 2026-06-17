import { useState } from 'react';
import NurseryNavbar from '../components/nursery/Navbar';
import Footer from '../components/nursery/Footer';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';

const products = [
  { id: 'tg1', img: '/images/c1.avif', title: 'Top 4 Die Hard Succulents Pack', mrp: 1014, price: 559, rating: 4.5, reviews: 426 },
  { id: 'tg2', img: '/images/c2.avif', title: 'Money Plant, Scindapsus (Pack of 3) - Plant', mrp: 947, price: 758, rating: 4, reviews: 155 },
  { id: 'tg3', img: '/images/c3.avif', title: 'Mini Succulent Garden Pack', mrp: 829, price: 499, rating: 4, reviews: 148 },
  { id: 'tg4', img: '/images/c4.avif', title: 'Set of 2 Mesmerising Flower Plants', mrp: 748, price: 598, rating: 4.5, reviews: 19 },
  { id: 'tg5', img: '/images/c5.avif', title: 'Set of 2 Bonsai Looking Grafted Adeniums', mrp: 998, price: 759, rating: 4, reviews: 245 },
  { id: 'tg6', img: '/images/c6.avif', title: 'Top 5 Easiest to Grow Plants', mrp: 1507, price: 1130, rating: 4, reviews: 54 },
  { id: 'tg7', img: '/images/c7.avif', title: 'Pack of 3 Good Luck Jade Plants in Ceramic Pots', mrp: 897, price: 699, rating: 4, reviews: 250 },
  { id: 'tg8', img: '/images/c8.avif', title: 'Top 3 Mosquito Repellent Plants', mrp: 1225, price: 980, rating: 4, reviews: 31 },
];

function TrendingGardeningPage() {
  const { addToCart } = useCart();
  const { searchQuery } = useSearch();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const handleAdd = (p) => {
    addToCart({ id: p.id, title: p.title, image: p.img, price: p.price, currency: '₹' });
  };

  const filteredProducts = products.filter(
    (p) => 
      p.price >= minPrice && 
      p.price <= maxPrice &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-vh-100">
      <NurseryNavbar />
      
      <div className="container py-5">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item"><a href="/" className="text-decoration-none text-muted">Home</a></li>
            <li className="breadcrumb-item active text-dark fw-semibold" aria-current="page">Trending in Gardening</li>
          </ol>
        </nav>

        <div className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-4">
          <div>
            <h2 className="fw-bold mb-1" style={{ color: '#1a1a1a', letterSpacing: '-0.5px' }}>Trending in Gardening</h2>
            <p className="text-muted m-0 small">Explore our most popular plants and accessories</p>
          </div>
          <div className="d-none d-md-flex align-items-center">
            <span className="me-3 small text-secondary fw-medium">Sort by:</span>
            <select className="form-select form-select-sm border-0 bg-light fw-semibold text-dark rounded-3 px-3 py-2" style={{ width: '180px', outline: 'none', boxShadow: 'none' }}>
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>
        
        <div className="row g-5">
          {/* Sidebar Filter */}
          <div className="col-lg-3">
            <div className="sticky-top" style={{ top: '100px', zIndex: 10 }}>
              <div className="mb-5 pb-4 border-bottom">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="fw-bold m-0" style={{ fontSize: '1.1rem' }}>Filter by Price</h5>
                  <button 
                    className="btn btn-link btn-sm p-0 text-decoration-none text-success fw-bold"
                    onClick={() => { setMinPrice(0); setMaxPrice(2000); }}
                  >
                    Reset
                  </button>
                </div>
                
                <div className="mb-4">
                  <div className="range-slider-container position-relative mb-4">
                    <input 
                      type="range" 
                      className="custom-range-slider w-100" 
                      min="0" 
                      max="2000" 
                      step="10"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                  </div>
                  
                  <div className="d-flex align-items-center gap-2">
                    <div className="input-group input-group-sm">
                      <span className="input-group-text bg-white border-end-0 text-muted">₹</span>
                      <input 
                        type="number" 
                        className="form-control border-start-0 ps-0 fw-medium" 
                        value={minPrice} 
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                      />
                    </div>
                    <span className="text-muted">—</span>
                    <div className="input-group input-group-sm">
                      <span className="input-group-text bg-white border-end-0 text-muted">₹</span>
                      <input 
                        type="number" 
                        className="form-control border-start-0 ps-0 fw-medium" 
                        value={maxPrice} 
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                      />
                    </div>
                  </div>
                </div>

                <div className="price-presets d-flex flex-wrap gap-2">
                  {[500, 1000, 1500].map(p => (
                    <button 
                      key={p}
                      className={`btn btn-sm rounded-pill px-3 py-1 fw-medium transition-all ${maxPrice === p ? 'btn-success shadow-sm' : 'btn-outline-light text-dark border-secondary-subtle'}`}
                      onClick={() => setMaxPrice(p)}
                    >
                      Under ₹{p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-3" style={{ fontSize: '1.1rem' }}>Categories</h5>
                <div className="d-flex flex-column gap-2">
                  {['Indoor Plants', 'Succulents', 'Flowering Plants', 'Bonsai'].map(cat => (
                    <div key={cat} className="form-check custom-check">
                      <input className="form-check-input" type="checkbox" id={cat} />
                      <label className="form-check-label small fw-medium text-muted" htmlFor={cat}>
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-lg-9">
            <div className="mb-4 d-flex justify-content-between align-items-center">
              <p className="text-muted m-0 small fw-medium">Showing <span className="text-dark fw-bold">{filteredProducts.length}</span> results</p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="row g-4">
                {filteredProducts.map((p) => (
                  <div key={p.id} className="col-6 col-md-4">
                    <div className="card h-100 border-0 product-card-minimal">
                      <div className="position-relative overflow-hidden rounded-4 bg-light p-4 mb-3" style={{ height: '280px' }}>
                        <img
                          src={p.img}
                          alt={p.title}
                          className="w-100 h-100 object-fit-contain transition-transform duration-500"
                        />
                        <div className="product-actions position-absolute bottom-0 start-0 w-100 p-3 opacity-0 transition-all translate-y-2">
                          <button
                            onClick={() => handleAdd(p)}
                            className="btn btn-dark w-100 fw-bold rounded-pill py-2 shadow-sm"
                          >
                            Add to Cart
                          </button>
                        </div>
                        <div className="position-absolute top-0 end-0 p-3">
                          <button className="btn btn-white rounded-circle shadow-sm p-2 lh-1 border-0">
                            <i className="bi bi-heart small"></i>
                          </button>
                        </div>
                      </div>
                      <div className="text-center px-1">
                        <p className="text-muted small mb-1 text-uppercase fw-bold ls-1" style={{ fontSize: '0.65rem', letterSpacing: '1px' }}>Premium Plant</p>
                        <h6 className="fw-bold mb-2 text-dark" style={{ fontSize: '0.95rem', minHeight: '2.8rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {p.title}
                        </h6>
                        <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                           <span className="fw-bold fs-5" style={{ color: '#2e7d32' }}>₹{p.price.toLocaleString('en-IN')}</span>
                           <span className="text-muted text-decoration-line-through small">₹{p.mrp.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center gap-1 small fw-bold">
                          <span className="text-dark">{p.rating}</span>
                          <i className="bi bi-star-fill text-warning" style={{ fontSize: '0.75rem' }}></i>
                          <span className="text-muted fw-normal ms-1">({p.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5 bg-light rounded-5 my-4">
                <div className="bg-white rounded-circle d-inline-flex p-4 mb-4 shadow-sm">
                  <i className="bi bi-search text-muted" style={{ fontSize: '2.5rem' }}></i>
                </div>
                <h4 className="fw-bold text-dark mb-2">No matching plants found</h4>
                <p className="text-muted mb-4">Try adjusting your search or filters to see more results.</p>
                <button 
                  className="btn btn-success px-4 fw-bold rounded-pill"
                  onClick={() => { setMinPrice(0); setMaxPrice(2000); }}
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
      
      <style>{`
        .ls-1 { letter-spacing: 1px; }
        .transition-all { transition: all 0.3s ease; }
        .duration-500 { transition-duration: 0.5s; }
        
        .product-card-minimal:hover img {
          transform: scale(1.1);
        }
        
        .product-card-minimal:hover .product-actions {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Custom Range Slider Styling */
        .custom-range-slider {
          -webkit-appearance: none;
          height: 6px;
          background: #e9ecef;
          border-radius: 5px;
          background-image: linear-gradient(#2e7d32, #2e7d32);
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }

        .custom-range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #fff;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0,0,0,0.15);
          border: 4px solid #2e7d32;
          transition: all 0.2s ease;
        }

        .custom-range-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(46, 125, 50, 0.3);
        }

        .custom-check .form-check-input:checked {
          background-color: #2e7d32;
          border-color: #2e7d32;
        }

        .btn-white {
          background-color: #fff;
          color: #000;
        }
        
        .btn-white:hover {
          background-color: #f8f9fa;
          color: #ef4f5f;
        }

        .breadcrumb-item + .breadcrumb-item::before {
          content: "›";
          font-size: 1.2rem;
          line-height: 1;
          vertical-align: middle;
        }
      `}</style>
    </div>
  );
}

export default TrendingGardeningPage;
