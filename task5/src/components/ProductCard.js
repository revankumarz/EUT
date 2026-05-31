import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const bullets = product.description.split('. ').filter(Boolean).slice(0, 5);

  return (
    <div className="row g-3 py-4 px-3 border-bottom mx-0">
      <div className="col-12 col-md-3 text-center">
        <img
          src={product.image}
          alt={product.title}
          style={{ maxHeight: '200px', maxWidth: '100%', objectFit: 'contain' }}
        />
      </div>

      <div className="col-12 col-md-6">
        <h6 className="fw-semibold mb-2" style={{ color: '#2874F0' }}>
          {product.title}
        </h6>
        {product.rating && (
          <div className="d-flex align-items-center mb-2">
            <span
              className="badge me-2 text-white"
              style={{ backgroundColor: '#388E3C', fontSize: '0.8rem' }}
            >
              {product.rating.rate} ★
            </span>
            <small className="text-muted fw-semibold">
              {product.rating.count.toLocaleString()} Ratings &amp; Reviews
            </small>
          </div>
        )}
        <div className="text-muted small text-capitalize mb-2">{product.category}</div>
        <ul className="small text-secondary mb-0 ps-3">
          {bullets.map((s, i) => (
            <li key={i}>{s.replace(/\.$/, '')}</li>
          ))}
        </ul>
      </div>

      <div className="col-12 col-md-3 text-md-end">
        <div className="fw-bold fs-4 mb-3" style={{ color: '#212121' }}>
          ${product.price.toFixed(2)}
        </div>
        <button
          className="btn text-white fw-semibold"
          style={{ backgroundColor: '#FB641B' }}
          onClick={() => addToCart(product)}
        >
          <i className="bi bi-cart-plus me-1"></i>Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
