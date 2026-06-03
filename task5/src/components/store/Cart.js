import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Cart() {
  const { items, removeFromCart, updateQty } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-5 text-center no-hover">
        <i className="bi bi-cart-x display-1 text-muted"></i>
        <h3 className="mt-3">Your cart is empty</h3>
        <Link to="/" className="btn mt-3 text-white fw-semibold" style={{ backgroundColor: '#2874F0' }}>
          <i className="bi bi-arrow-left me-1"></i>Continue Shopping
        </Link>
      </div>
    );
  }

  const totalsByCurrency = items.reduce((acc, it) => {
    const cur = it.currency || '$';
    acc[cur] = (acc[cur] || 0) + it.price * it.qty;
    return acc;
  }, {});

  return (
    <div className="container py-4 no-hover">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Your Cart</h2>
        <Link to="/" className="btn btn-outline-secondary">
          <i className="bi bi-arrow-left me-1"></i>Continue Shopping
        </Link>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          {items.map((it) => {
            const cur = it.currency || '$';
            return (
              <div key={it.id} className="card mb-3 border-0 bg-transparent">
                <div className="row g-0 align-items-center">
                  <div className="col-4 col-md-2 p-3 text-center">
                    <img
                      src={it.image}
                      alt={it.title}
                      style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="col-8 col-md-5">
                    <div className="card-body py-2">
                      <h6 className="mb-0">{it.title}</h6>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 px-3">
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-semibold">{it.qty}</span>
                      <div className="d-flex flex-column">
                        <button
                          className="btn btn-sm btn-outline-secondary py-0 px-2"
                          onClick={() => updateQty(it.id, it.qty + 1)}
                        >
                          <i className="bi bi-caret-up-fill"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary py-0 px-2"
                          onClick={() => updateQty(it.id, it.qty - 1)}
                          disabled={it.qty <= 1}
                        >
                          <i className="bi bi-caret-down-fill"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-2 text-end pe-3">
                    <div className="fw-bold mb-1" style={{ color: '#388E3C' }}>
                      {cur}{(it.price * it.qty).toFixed(2)}
                    </div>
                    <button
                      className="btn btn-sm btn-link text-danger p-0"
                      onClick={() => removeFromCart(it.id)}
                    >
                      <i className="bi bi-trash"></i> Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-lg-4">
          <div className="card border-0 bg-transparent sticky-top" style={{ top: '20px' }}>
            <div className="card-body">
              <h5 className="card-title mb-3">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Items</span>
                <span>{items.reduce((s, it) => s + it.qty, 0)}</span>
              </div>
              <hr />
              {Object.entries(totalsByCurrency).map(([cur, sum]) => (
                <div key={cur} className="d-flex justify-content-between mb-2 fs-5 fw-bold">
                  <span>Total ({cur})</span>
                  <span style={{ color: '#388E3C' }}>{cur}{sum.toFixed(2)}</span>
                </div>
              ))}
              <Link to="/" className="btn btn-outline-secondary w-100 mt-3">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
