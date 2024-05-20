import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"

const About = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])

  return (
    <>
      <section id="about" className="about">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-5 col-lg-6 video-box position-relative d-flex justify-content-center align-items-stretch aos-init aos-animate"
              data-aos="fade-right"
            >
              <a
                href="#"
                className="venobox play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
              ></a>
            </div>

            <div
              className="col-xl-7 col-lg-6 icon-boxes opacity-100  d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5 aos-init aos-animate"
              data-aos="fade-left"
            >
              <h3>Jol aralap endi uzaqqa barıw shárt emes</h3>
              <p>
                Sistemamiz arqalı Respublikamız boyınsha barlıq fermerlerimiz
                ónimlerin onlayn kórip barıń hám satıp alıń
              </p>

              <div
                className="icon-box aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon">
                  <i className="bx bxs-check-square"></i>
                </div>
                <h4 className="title">
                  <a href="">Isenimli sistema</a>
                </h4>
                <p className="description">
                  Barlıq xizmetler isenimli hám admininistaciya tárepinen
                  gúzetilip barıladı
                </p>
              </div>

              <div
                className="icon-box aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="bx bxs-car"></i>
                </div>
                <h4 className="title">
                  <a href="">Tez jetkerip beriw sisteması</a>
                </h4>
                <p className="description">
                  Call centr shólkemlestirilgen bolıp jetkerip beriwshiler qısqa
                  waqıt ishinde siz benen baylanısadı
                </p>
              </div>

              <div
                className="icon-box aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon">
                  <i className="bx bx-money-withdraw"></i>
                </div>
                <h4 className="title">
                  <a href="">Tolemler ansat hám qolay</a>
                </h4>
                <p className="description">
                  Online yaki jetkerip bergennen keyin tólen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
