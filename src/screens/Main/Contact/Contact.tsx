const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-up"
          >
            <p>Baylanıs</p>
          </div>

          <div className="row">
            <div
              className="col-lg-4 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Adres:</h4>
                  <p>Nókis rayonı</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>admim@fermer-shop.uz</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Telefon:</h4>
                  <p>+99899 954 3909</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-8 mt-5 mt-lg-0 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <form method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Atıńiz"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email pochta"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Tema"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Xabar"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Usinis jiberiw</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
