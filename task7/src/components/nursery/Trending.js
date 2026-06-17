import { useSearch } from '../../context/SearchContext';

function Trending() {
  const { searchQuery } = useSearch();
  const items = [
    { img: '/images/c1.avif', label: 'Bonsai Plants - Upto 25% Off' },
    { img: '/images/c2.avif', label: 'Ceramic Planters - Starting ₹299' },
    { img: '/images/c3.avif', label: 'Kokedama - Starting ₹249' },
    { img: '/images/c4.avif', label: 'Month Wise Gardening - Upto 65% Off' },
  ];

  const filteredItems = items.filter(it => 
    it.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="container my-5">
      <h3 className="text-center mb-4">Trending</h3>
      {filteredItems.length > 0 ? (
        <div className="row g-4 justify-content-center">
          {filteredItems.map((it) => (
            <div key={it.label} className="col-6 col-md-3 text-center trending-card">
              <div
                className="mx-auto rounded-circle overflow-hidden shadow-sm trending-img-wrap"
                style={{ width: 'min(220px, 40vw)', height: 'min(220px, 40vw)' }}
              >
                <img
                  src={it.img}
                  alt={it.label}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="mt-3 fw-semibold" style={{ color: '#ef4f5f' }}>
                {it.label}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-4">
          <p className="text-muted">No trending items match your search.</p>
        </div>
      )}
    </section>
  );
}

export default Trending;
