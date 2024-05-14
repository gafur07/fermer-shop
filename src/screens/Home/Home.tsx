import heroWaves from "../../images/hero-waves.svg";
import homehero from "../../images/hero-img1.png";

export const Home = () => {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="row justify-content-between z-[99999]">
            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center z-[99999]">
              <div data-aos="zoom-out" className="aos-init aos-animate z-[999999]">
                <h1 className="">Kerekli ónimińizdi Fermler jetkerip beredi</h1>
                <h2>Awıl xojalıq ónimlerin jetkerip beriw sisteması</h2>
                <div className="text-center text-lg-start">
                  <a href="#about" className="btn-get-started scrollto">
                    Satıp alıw
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 order-1 order-lg-2 hero-img aos-init aos-animate"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <img src={homehero} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>

        <svg
          className="hero-waves"
          xmlns="http://www.w3.org/2000/svg"
          href="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28 "
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
          </defs>
          <g className="wave1">
            <use
              href="#wave-path"
              x="50"
              y="3"
              fill="rgba(255,255,255, .1)"
            ></use>
          </g>
          <g className="wave2">
            <use
              href="#wave-path"
              x="50"
              y="0"
              fill="rgba(255,255,255, .2)"
            ></use>
          </g>
          <g className="wave3">
            <use href="#wave-path" x="50" y="9" fill="#fff"></use>
          </g>
        </svg>
      </section>
    </>
  );
};
