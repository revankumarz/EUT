function Reviews() {
  const breakdown = [
    { stars: 5, count: 272884, pct: 88 },
    { stars: 4, count: 214274, pct: 70 },
    { stars: 3, count: 177931, pct: 30 },
    { stars: 2, count: 2485, pct: 5 },
    { stars: 1, count: 4358, pct: 7 },
  ];

  const badges = [
    { label: '15.9K Verified Reviews', color: '#1e88e5' },
    { label: 'Monthly Record 182', color: '#26a69a' },
    { label: 'Silver Transparency', color: '#9e9e9e' },
    { label: 'Top 1% Stores', color: '#f9a825' },
    { label: 'Top 5% Trending', color: '#616161' },
  ];

  const reviews = [
    { product: 'Top 5 Plants to Bring Goodluck', name: 'Kalpesh Kaneriya', location: 'Mumbai, Maharashtra, India', title: 'Good To Go Green', text: 'Best for all seasons. Just go for it.', date: '05/28/2026', rating: 5 },
    { product: 'Top 5 Plants to Bring Goodluck', name: 'Kalpesh Kaneriya', location: 'Mumbai, Maharashtra, India', title: 'Good To Go Green', text: 'Best for Summers. Just go for it.', date: '05/28/2026', rating: 5 },
    { product: 'Glorious Gladiolus - 40 Bulbs Pack', name: 'Kalpesh', location: 'Mumbai, Maharashtra, India', title: 'Good To Go Green', text: 'It is nice to see this flower and it smells good.', date: '05/28/2026', rating: 5 },
  ];

  const renderStars = (n) =>
    Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`bi ${i < n ? 'bi-star-fill' : 'bi-star'} text-warning`} />
    ));

  return (
    <section className="container my-5">
      <h3 className="text-center mb-4">Customer Reviews</h3>

      <div className="row align-items-center gy-4 mb-4">
        <div className="col-md-3 text-center">
          <div className="mb-1">{renderStars(4)}</div>
          <a href="#reviews" className="text-decoration-none fw-bold" style={{ color: '#f9a825' }}>
            4.11 out of 5
          </a>
          <div className="text-muted small">Based on 671,957 reviews</div>
        </div>

        <div className="col-md-6">
          {breakdown.map((b) => (
            <div key={b.stars} className="d-flex align-items-center mb-1">
              <div style={{ minWidth: '90px' }}>{renderStars(b.stars)}</div>
              <div className="flex-grow-1 mx-2">
                <div className="progress" style={{ height: '10px' }}>
                  <div
                    className="progress-bar"
                    style={{ width: `${b.pct}%`, backgroundColor: '#f9a825' }}
                  />
                </div>
              </div>
              <div className="text-muted small" style={{ minWidth: '70px' }}>
                {b.count.toLocaleString('en-IN')}
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-3 text-center">
          <button className="btn text-white px-4 py-2 fw-semibold" style={{ backgroundColor: '#f9a825' }}>
            Write a Store Review
          </button>
        </div>
      </div>

      <div className="row justify-content-center text-center gy-3 my-4">
        {badges.map((b) => (
          <div key={b.label} className="col-6 col-md">
            <div
              className="rounded-circle mx-auto d-flex align-items-center justify-content-center p-2"
              style={{
                width: '90px',
                height: '90px',
                border: `2px solid ${b.color}`,
                color: b.color,
              }}
            >
              <small className="fw-bold lh-sm">{b.label}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-3">
        {reviews.map((r, i) => (
          <div key={i} className="col-md-4">
            <div className="card h-100 border shadow-sm review-card">
              <div className="card-body">
                <div className="small text-muted mb-1">
                  about <span style={{ color: '#26a69a' }}>{r.product}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>{renderStars(r.rating)}</div>
                  <small className="text-muted">{r.date}</small>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center me-2"
                    style={{ width: '32px', height: '32px', backgroundColor: '#eee' }}
                  >
                    <i className="bi bi-person text-secondary"></i>
                  </div>
                  <div>
                    <div className="fw-semibold small" style={{ color: '#f9a825' }}>{r.name}</div>
                    <div className="text-muted" style={{ fontSize: '0.75rem' }}>{r.location}</div>
                  </div>
                </div>
                <div className="fw-bold mb-1">{r.title}</div>
                <p className="small mb-0">{r.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
