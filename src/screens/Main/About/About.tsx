import about from "../../../images/about.png"

const About = () => {
  return (
    <>
      <section id="about" className="about w-[100%]">
        <div className="container">
          <div className="flex flex-col items-center justify-between">
            <div
              className={`video-box  h-auto relative aos-init aos-animate`}
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
              className="icon-boxes d-flex flex-col items-stretch justify-center py-5 px-lg-5 aos-init aos-animate"
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
