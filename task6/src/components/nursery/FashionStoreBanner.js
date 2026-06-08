import { Link } from 'react-router-dom';

function FashionStoreBanner() {
  return (
    <Link
      to="/fashion-store"
      className="d-block text-decoration-none my-4"
    >
      <div
        className="text-center text-white fw-bold py-3 px-3"
        style={{
          backgroundColor: '#c0392b',
          letterSpacing: '0.5px',
          fontSize: '1.05rem',
          transition: 'background-color 0.2s ease',
        }}
      >
        Visit Our Fashion Store <i className="bi bi-shop ms-2"></i>
      </div>
    </Link>
  );
}

export default FashionStoreBanner;
