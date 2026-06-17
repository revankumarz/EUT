function Images() {
  const items = [
    { src: '/images/offers.avif', label: 'Offers' },
    { src: '/images/gardening.webp', label: 'Gardening' },
    { src: '/images/plants.avif', label: 'Plants' },
    { src: '/images/seeds.avif', label: 'Seeds' },
    { src: '/images/bulbs.webp', label: 'Bulbs' },
  ];

  return (
    <section className="container my-4">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 justify-content-center g-3">
        {items.map((item) => (
          <div key={item.label} className="col text-center mb-3 mb-md-0">
            <div className="p-2 border rounded-4 bg-light shadow-sm h-100 transition-hover">
              <img src={item.src} alt={item.label} className="img-fluid rounded-3 mb-2" style={{ maxHeight: '80px', objectFit: 'contain' }} />
              <p className="small fw-bold mb-0">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .transition-hover { transition: transform 0.2s; cursor: pointer; }
        .transition-hover:hover { transform: translateY(-5px); }
      `}</style>
    </section>
  );
}

export default Images;
