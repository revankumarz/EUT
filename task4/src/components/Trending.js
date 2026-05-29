function Trending() {
  const items = [
    { img: '/images/c1.avif', label: 'Bonsai Plants - Upto 25% Off' },
    { img: '/images/c2.avif', label: 'Ceramic Planters - Starting ₹299' },
    { img: '/images/c3.avif', label: 'Kokedama - Starting ₹249' },
    { img: '/images/c4.avif', label: 'Month Wise Gardening - Upto 65% Off' },
  ];

  return (
    <section className="container my-5">
      <h3 className="text-center mb-4">Trending</h3>
      <div className="row g-4 justify-content-center">
        {items.map((it) => (
          <div key={it.label} className="col-6 col-md-3 text-center trending-card">
            <div
              className="mx-auto rounded-circle overflow-hidden shadow-sm trending-img-wrap"
              style={{ width: '220px', height: '220px' }}
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
    </section>
  );
}

export default Trending;
