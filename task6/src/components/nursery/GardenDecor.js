function GardenDecor() {
  const items = [
    {
      title: 'Planters - Starting ₹129',
      desc: 'Add color to your garden. 400+ pots of different colors, shapes, and materials.',
      img: '/images/c5.avif',
      bg: 'linear-gradient(135deg, #ddd6f3 0%, #f8d6c4 100%)',
      textColor: '#333',
    },
    {
      title: 'Soil & Fertilizers - Starting ₹100',
      desc: 'Healthy food is a key for healthy plants. Choose from a wide range of soil and fertilizers.',
      img: '/images/c3.avif',
      bg: '#f5c842',
      textColor: '#222',
    },
    {
      title: 'Pebbles - Starting ₹79',
      desc: 'Add visual and textural features to your garden with a wide range of natural pebbles.',
      img: '/images/c2.avif',
      bg: 'linear-gradient(135deg, #a8c8e0 0%, #fce0cf 100%)',
      textColor: '#222',
    },
    {
      title: 'Tools - Starting ₹129',
      desc: 'Get a tool for every gardening activity and make it a fun experience.',
      img: '/images/gardening.webp',
      bg: '#c4724f',
      textColor: '#fff',
    },
  ];

  return (
    <section className="container my-5">
      <h3 className="text-center mb-4">Garden Decor &amp; Care</h3>
      <div className="row g-4">
        {items.map((it) => (
          <div key={it.title} className="col-12 col-md-6">
            <div
              className="d-flex align-items-center overflow-hidden rounded-3 decor-card"
              style={{
                background: it.bg,
                minHeight: '260px',
                color: it.textColor,
              }}
            >
              <div className="p-4" style={{ flex: 1 }}>
                <h4 className="fw-bold mb-3">{it.title}</h4>
                <p className="mb-3 small">{it.desc}</p>
                <button
                  className="btn text-white fw-semibold px-3"
                  style={{ backgroundColor: '#ef4f5f' }}
                >
                  Shop Now
                </button>
              </div>
              <img
                src={it.img}
                alt={it.title}
                style={{
                  width: '45%',
                  height: '260px',
                  objectFit: 'cover',
                  flexShrink: 0,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GardenDecor;
