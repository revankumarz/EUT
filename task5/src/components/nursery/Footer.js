function Footer() {
  const quickLinks = ['Track Order', 'Orders', "FAQ's", 'Offers', 'Rewards', 'Affiliate', 'Shipping Policy', 'Refund Policy'];
  const socials = [
    { icon: 'bi-facebook', href: '#' },
    { icon: 'bi-twitter-x', href: '#' },
    { icon: 'bi-pinterest', href: '#' },
    { icon: 'bi-instagram', href: '#' },
    { icon: 'bi-youtube', href: '#' },
    { icon: 'bi-linkedin', href: '#' },
  ];

  return (
    <footer style={{ backgroundColor: '#f0ece2' }} className="pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <h6 className="fw-bold mb-3" style={{ color: '#444' }}>About Nurserylive</h6>
            <p className="small text-muted mb-0">
              India's largest online plant nursery delivering happiness one plant at a time.
              Quality assured, eco-friendly packaging, and care guidance included.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <h6 className="fw-bold mb-3" style={{ color: '#444' }}>Quick Links</h6>
            <ul className="list-unstyled small">
              {quickLinks.map((l) => (
                <li key={l} className="mb-2">
                  <a href="#q" className="text-decoration-none footer-link" style={{ color: '#666' }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <h6 className="fw-bold mb-3" style={{ color: '#444' }}>Contact Details</h6>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2 d-flex">
                <i className="bi bi-geo-alt-fill me-2" style={{ color: '#ef4f5f' }}></i>
                <span>Hyderabad, India</span>
              </li>
              <li className="mb-2 d-flex">
                <i className="bi bi-telephone-fill me-2" style={{ color: '#ef4f5f' }}></i>
                <a href="tel:1234567890" className="text-decoration-none footer-link" style={{ color: '#666' }}>
                  1234567890
                </a>
              </li>
              <li className="mb-2 d-flex">
                <i className="bi bi-envelope-fill me-2" style={{ color: '#ef4f5f' }}></i>
                <a href="mailto:mail@gmail.com" className="text-decoration-none footer-link" style={{ color: '#666' }}>
                  mail@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <h6 className="fw-bold mb-3" style={{ color: '#444' }}>Follow Us</h6>
            <div className="d-flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  aria-label={s.icon.replace('bi-', '')}
                  className="rounded-circle d-inline-flex align-items-center justify-content-center social-icon"
                  style={{
                    width: '38px',
                    height: '38px',
                    backgroundColor: '#bdbab1',
                    color: '#fff',
                    fontSize: '1.1rem',
                  }}
                >
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        <hr className="my-4" />
        <div className="text-center small text-muted">
          © {new Date().getFullYear()} Nurserylive. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
