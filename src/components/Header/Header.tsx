import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const [menu, setMenu] = useState(false)
  const params = useParams()
  console.log(params);
  


  function changeBackground () {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
function bgRoutesNav() {
  if (params !== null) {
    setNavbar(true)
  } else {
    setNavbar(false)
  }
}

  useEffect(() => {
    changeBackground()
    bgRoutesNav()
    window.addEventListener("scroll", changeBackground)
  },[])
  return (
    <>
      <header
        id="header"
        className={`${navbar ? "header-scrolled" : "header-transparent"} fixed-top d-flex align-items-center`}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1>
              <a href="/">
                <span>Fermer Shop</span>
              </a>
            </h1>
          </div>

          <nav id="navbar" className={`navbar ${menu ? "navbar-mobile" : ""}`}>
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Bas bet
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/#about">
                  Biz haqımızda
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/#features">
                  Ónimler
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/#fermer">
                  Fermer kabineti
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/#contact">
                  Baylanıs
                </a>
              </li>
            </ul>
            <i onClick={() => {{setMenu(!menu)}}} className={`bx ${menu ? 'bx-x' : ''} bx-menu mobile-nav-toggle`}></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
