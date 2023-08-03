const contactUs = () => {
  return (
    <>
      <div className="contact_us">
        <section className="container-fluid contact_us__banner">
          <div className="container">
            <div className="row">
              <div className="col-12 contact_us__banner__content">
                <h1 className="col-white mb-3">Ideas/Questions?</h1>
                <p className="col-white c-fs-1">
                  Someone will always be there to answer them!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid contact_us__form">
          <div className="container">
            <h3 className="col-primary c-fs-1 c-fw-600 text-center">Contact Us</h3>
            <p className="col-dark-light c-fs-4 text-center">
              For complete accounting solution for your business
            </p>

            <div className="row mt-5 align-items-center">
              <div className="col-lg-6 contact_us__form__left text-end">
                <div>
                  <p className="col-dark-light c-fs-4">
                    request a demo:
                    <br />{" "}
                    <a
                      className="text-decoration-underline c-fw-500 col-primary c-fs-3"
                      href="#"
                    >
                      Schedule Now
                    </a>
                  </p>
                  <p className="col-dark-light c-fs-4">
                    or visit:
                    <br />{" "}
                    <a
                      className="text-decoration-underline c-fw-500 col-primary c-fs-3"
                      href="https://giddh.com/help"
                    >
                      giddh.com/help
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 contact_us__form__right border-start">
                <form>
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <label for="name" className="pb-3">Name <span className="col-danger">*</span></label>
                        <div className="mb-3">
                          <input
                            autoComplete="name"
                            type="email"
                            className="form-control"
                            placeholder="Name"
                            id="name"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <label for="email" className="pb-3">Email <span className="col-danger">*</span></label>
                        <div className="mb-3">
                          <input
                            autoComplete="email"
                            type="email"
                            className="form-control"
                            placeholder="example@gmail.com"
                            id="email"
                          />
                        </div>
                      </div>
                      <div className="col-12 ">
                        <div className="row">
                        <label for="mobileNo" className="pb-3">Mobile Number <span className="col-danger">*</span></label>
                          <div className="col-4 pe-0">
                            <div className="mb-3">
                              <select
                                autoComplete="on"
                                className="form-select c-fs-6"
                                aria-label="Default select example"
                                id="mobileNo"
                              >
                                <option value="+91" defaultValue>
                                  +91
                                </option>
                                <option value="+652">+652</option>
                                <option value="+98">+98</option>
                                <option value="+30">+30</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-8 ">
                            <div className="mb-3">
                              <input
                                autoComplete="tel-national"
                                type="email"
                                className="form-control"
                                placeholder="Mobile Number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label for="description" className="pb-3">Description</label>
                        <div className="mt-2">
                          <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Description"
                            autoComplete="on"
                            id="description"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="submit__button mt-4 ms-3">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default contactUs;
