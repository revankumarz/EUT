import NurseryNavbar from '../components/nursery/Navbar';
import Footer from '../components/nursery/Footer';
import { useCart } from '../context/CartContext';

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

  const handleAdd = (p) => {
    addToCart({ id: p.id, title: p.title, image: p.img, price: p.price, currency: '₹' });
  };

  return (
    <>
      <NurseryNavbar />
      <section className="container my-5">
        <h3 className="text-center mb-4">Trending in Gardening</h3>
        <div className="row g-3">
          {products.map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3">
              <div className="card h-100 border bg-white">
                <img
                  src={p.img}
                  alt={p.title}
                  className="card-img-top p-3"
                  style={{ height: '220px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                  <p
                    className="fw-semibold text-center mb-3"
                    style={{
                      minHeight: '3em',
                      color: '#333',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {p.title}
                  </p>
                  <div className="text-center mb-2">
                    <span className="text-muted text-decoration-line-through me-2">
                      ₹{p.mrp.toLocaleString('en-IN')}
                    </span>
                    <span className="fw-bold" style={{ fontSize: '1.05rem' }}>
                      ₹{p.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-center mb-3">
                    <span
                      className="badge text-white me-1"
                      style={{ backgroundColor: '#2e7d32' }}
                    >
                      <i className="bi bi-star-fill me-1" style={{ fontSize: '0.7rem' }}></i>
                      {p.rating}
                    </span>
                    <span className="text-muted small">({p.reviews} reviews)</span>
                  </div>
                  <button
                    onClick={() => handleAdd(p)}
                    className="btn text-white fw-semibold mt-auto"
                    style={{ backgroundColor: '#2e7d32' }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TrendingGardeningPage;
