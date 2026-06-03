import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function TopNav() {
  const { totalCount } = useCart();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/signin');
  };

  const linkClass = ({ isActive }) =>
    'nav-link px-3' + (isActive ? ' fw-bold text-white' : ' text-white-50');

  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ backgroundColor: '#0f172a' }}>
      <div className="container-fluid px-4">
        <Link to="/" className="navbar-brand fw-bold text-white">
          <i className="bi bi-grid-fill me-2" style={{ color: '#22c55e' }}></i>
          P1 Suite
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topNav"
          aria-controls="topNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="topNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/" end className={linkClass}>
                <i className="bi bi-flower1 me-1"></i>Nursery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/store" className={linkClass}>
                <i className="bi bi-shop me-1"></i>Fake Store
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className={linkClass}>
                <i className="bi bi-cart3 me-1"></i>Cart
                {totalCount > 0 && (
                  <span className="badge bg-success ms-1">{totalCount}</span>
                )}
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav">
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <NavLink to="/dashboard" className={linkClass}>
                    <i className="bi bi-speedometer2 me-1"></i>Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="btn btn-sm btn-outline-light ms-2 mt-1">
                    <i className="bi bi-box-arrow-right me-1"></i>Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/signin" className={linkClass}>Sign In</NavLink>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="btn btn-sm btn-success ms-2 mt-1">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
