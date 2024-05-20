import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"
const Price = () => {

	useEffect(() => {
		Aos.init({duration: 2000})
	},[])

  return (
    <>
      <section id="popular-courses" className="courses">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-title">
            <p>Satıwdaǵı ónimler</p>
          </div>

          <div
            className="row d-flex justify-content-center aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div style={{width: "20rem", margin: "20px"}} className="card">
              <img
                className="card-img-top"
                src="https://picsum.photos/300"
                alt="Card image cap"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Kegeyli Pomidor</h5>
                <p className="card-text">
                  <i className="bi bi-cash-coin"> </i>8500 kg/sum
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-terminal-plus"></i> 150 kg{" "}
                </li>
                <li className="list-group-item">
                  <i className="bi bi-geo-alt"></i> Nurabulla Kegeyli
                </li>
              </ul>
              <div className="card-body">
                <a href="/login" className="btn btn-primary">
                  Satıp alıw
                </a>
              </div>
            </div>
            <div style={{width: "20rem", margin: "20px"}} className="card">
              <img
                className="card-img-top"
                src="https://picsum.photos/200"
                alt="Card image cap"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Qiyar</h5>
                <p className="card-text">
                  <i className="bi bi-cash-coin"> </i>500 kg/sum
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-terminal-plus"></i> 100 kg{" "}
                </li>
                <li className="list-group-item">
                  <i className="bi bi-geo-alt"></i> Jamila apa Taxtakopir APJ
                </li>
              </ul>
              <div className="card-body">
                <a href="/login" className="btn btn-primary">
                  Satıp alıw
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
