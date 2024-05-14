const Header = () => {
  return (
    <>
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent"
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1>
              <a href="#">
                <span>Fermer Shop</span>
              </a>
            </h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Bas bet
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  Biz haqımızda
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#features">
                  Ónimler
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="fermer/">
                  Fermer kabineti
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Baylanıs
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
