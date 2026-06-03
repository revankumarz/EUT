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
      <div className="row row-cols-5 justify-content-center g-2">
        {items.map((item) => (
          <div key={item.label} className="col text-center">
            <img src={item.src} alt={item.label} className="img-fluid" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Images;
