import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark sticky-top shadow-sm" style={{ backgroundColor: '#2874F0' }}>
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          Flipkart
        </Link>
        <Link to="/cart" className="btn btn-outline-light">
          <i className="bi bi-cart3 me-1"></i>Cart
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
