function Navbar() {
  return (
    <header>
      <div className="border-bottom">
        <div className="container-fluid px-4 py-2 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <span className="badge bg-danger fs-6 fw-normal">Rewards</span>
            <a href="#" className="text-decoration-none text-dark">Help</a>
            <a href="#" className="text-decoration-none text-dark">My Orders</a>
            <a href="#" className="text-decoration-none text-dark">Offers</a>
          </div>
        </div>
      </div>

      <div className="container-fluid px-4 py-3">
        <div className="d-flex align-items-center gap-3 flex-wrap flex-lg-nowrap">
          <button className="btn border d-lg-none order-1" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list fs-3"></i>
          </button>

          <a href="#" className="navbar-brand fs-2 fw-bold mb-0 order-2 order-lg-1">
            <span className="text-success">nursery</span><span className="text-dark">live</span>
          </a>

          <div className="input-group flex-grow-1 order-3 order-lg-2 mt-2 mt-lg-0">
            <input type="text" className="form-control form-control-lg" placeholder="What are you looking for?" />
            <button className="btn btn-danger px-4" type="button"><i className="bi bi-search"></i></button>
          </div>

          <button className="btn btn-outline-secondary rounded-pill d-none d-lg-inline-flex align-items-center order-lg-3">
            <i className="bi bi-geo-alt-fill text-danger me-1"></i> Select Delivery Location
          </button>

          <a href="#" className="text-decoration-none text-dark d-none d-lg-inline-flex align-items-center order-lg-4">
            <i className="bi bi-lightning-charge-fill text-warning fs-4 me-1"></i> Login
          </a>

          <a href="#" className="text-dark order-2 order-lg-5 ms-auto ms-lg-0"><i className="bi bi-bag fs-3"></i></a>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg border-bottom py-0">
        <div className="container-fluid px-4">
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Gardening</a>
                <ul className="dropdown-menu"><li><a className="dropdown-item" href="#">Tools</a></li></ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Plants</a>
                <ul className="dropdown-menu"><li><a className="dropdown-item" href="#">Indoor</a></li></ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Seeds</a>
                <ul className="dropdown-menu"><li><a className="dropdown-item" href="#">Vegetable</a></li></ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Bulbs</a>
                <ul className="dropdown-menu"><li><a className="dropdown-item" href="#">Flower bulbs</a></li></ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Planters</a>
                <ul className="dropdown-menu"><li><a className="dropdown-item" href="#">Pots</a></li></ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Soil & Fertilizer</a>
                <ul className="dropdown-menu"><li><a className="dropdown-item" href="#">Manure</a></li></ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Gifts</a>
                <ul className="dropdown-menu"><li><a className="dropdown-item" href="#">For Her</a></li></ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pebbles</a>
                <ul className="dropdown-menu"><li><a className="dropdown-item" href="#">Decorative</a></li></ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Accessories</a>
                <ul className="dropdown-menu"><li><a className="dropdown-item" href="#">Watering Cans</a></li></ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium" href="#">Corporate Gifting</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
