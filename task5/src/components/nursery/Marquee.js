function Marquee() {
  const items = [
    'Welcome to Nurserylive',
    'Discount Available',
    'Fresh Plants',
  ];

  return (
    <div
      className="marquee-bar"
      style={{
        backgroundColor: '#2e7d32',
        color: '#fff',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '8px 0',
        fontSize: '0.9rem',
        fontWeight: 500,
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'inline-block',
          paddingLeft: '100%',
          animation: 'marquee 30s linear infinite',
        }}
      >
        {[...items, ...items].map((t, i) => (
          <span key={i} className="mx-4">
            <i className="bi bi-flower1 me-2"></i>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
