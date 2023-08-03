const aePricing = () => {
  return (
    <>
      <section className="container-fluid pricing_top_section ae_pricing_top_section">
        <div className="row align-items-center mt-auto pricing_top_section__column-reverse">
          <div className="col-lg-6 col-md-12">
            <h3 className=" heading col-primary c-fw-800 ms-4">
              Powerful solution. Affordable pricing.
            </h3>
          </div>
          <div className="col-lg-6 col-md-12">
            <figure>
              <img
                className="img-fluid"
                src="/img/pricing-laptop-image-with-giddh-dashoard-screen.png"
                alt="Laptop Image"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="container-fluid ae_pricing__main">
        <div class="row g-4">
          <div class="col-lg-4 col-md-12 ps-lg-0">
            <div className="d-flex flex-column ae_pricing__main__container ae_pricing__main__container--skyblue">
              <div class="d-flex">

                <div class="pb-3">
                  <h3 class="col-primary c-fs-1 fw-bold">FREE</h3>
                  <p class="col-primary c-fw-600 mt-5 mb-0">Per Organisation/Year</p>
                </div>            
                  <figure class="ms-2">
                    <img
                      src="/img/single-baloon.svg"
                      height="96px"
                      alt="single-ballon Image"
                    />
                  </figure>
              </div>
              
              <div>
                <p class="col-primary c-fs-4 c-fw-600 mb-5">
                  <strong>
                    No. of Transactions: 500 <br />
                    Users:
                  </strong>{" "}
                  Unlimited
                </p>

                <p class="col-primary c-fs-4">
                  <strong>For</strong> Teacher, Students & Startups
                </p>
              </div>
              <a href="https://giddh.com/ae/signup" class="d-block mt-auto ae_pricing__start_free_btn"> START FREE</a>
            </div>
          </div>

          <div class="col-lg-4 col-md-12">
            <div className="d-flex flex-column ae_pricing__main__container ae_pricing__main__container--yellow">
              <div class="d-flex">

                <div class="pb-3">
                  <h3 class="col-primary c-fs-1 fw-bold">FREE/1st Year<br />
                    <s>AED 200/-</s></h3>
                  <p class="col-primary c-fw-600 mt-1 mb-0">Per Organisation/Year</p>
                </div>            
                  <figure class="ms-2">
                    <img
                      src="/img/double-baloon.svg"
                      height="96px"
                      alt="double-ballon Image"
                    />
                  </figure>
              </div>
              
              <div>
                <p class="col-primary c-fs-4 c-fw-600 mb-5">
                  <strong>
                    No. of Transactions: 10,000 <br />
                    Users:
                  </strong>{" "}
                  Unlimited
                </p>

                <p class="col-primary c-fs-4">
                  <strong>For</strong> Chartered Accountants,<br/>
                  Chartered Secretary,<br/>
                  Non-profit Organization.
                </p>
              </div>
              <a href="https://giddh.com/ae/signup" class="d-block mt-auto ae_pricing__start_free_btn"> START FREE</a>
            </div>
          </div>

          <div class="col-lg-4 col-md-12 pe-lg-0">
            <div className="d-flex flex-column ae_pricing__main__container ae_pricing__main__container--pink">
              <div class="d-flex">

                <div class="pb-3">
                  <h3 class="col-primary c-fs-1 fw-bold">AED 1000/-</h3>
                  <p class="col-primary c-fw-600 mt-5 mb-0">Per Organisation/Year</p>
                </div>            
                  <figure class="ms-2">
                    <img
                      src="/img/triple-baloon.svg"
                      height="96px"
                      alt="triple-ballon Image"
                    />
                  </figure>
              </div>
              
              <div>
                <p class="col-primary c-fs-4 c-fw-600 mb-5">
                  <strong>
                    No. of Transactions: 40,000 <br />
                    Users:
                  </strong>{" "}
                  Unlimited
                </p>

                <p class="col-primary c-fs-4">
                  <strong>For</strong> Growing Businesses</p>
              </div>
              <a href="https://giddh.com/ae/signup" class="d-block mt-auto ae_pricing__start_free_btn"> START FREE</a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid ae_pricing__enterprises">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 text-lg-end text-center">
              <figure class="mb-0">
                <img src="/img/multiple-baloons.svg" height="260px" alt="Multiple-Baloons-Image" />
              </figure>
            </div>
            <div class="col-lg-6 col-md-12 text-lg-start text-center">
              <div class="d-inline-block text-center">
                <h3 class="sub-heading col-primary pb-5">Big Enterprises?</h3>
                <a href="#" className="ae_pricing__start_free_btn">TALK TO US</a>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="container-fluid pricing_grid_section ae_pricing_feature">
        <div className="container">
          <div className="row justify-content-center flex-wrap row-gap-5">
            <div className="col-lg-4 col-md-12">
              <div className="text-center">
                <figure>
                  <img src="/img/folder_icon.svg" class="img-fluid" width="96px" alt="folder-logo" />
                  <figcaption class="col-primary c-fs-4 mt-4 c-fw-600">A/c Groups with hierarchy</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="text-center">
                <figure>
                  <img src="/img/dot-shape_icon.svg" class="img-fluid" width="96px" alt="dot-shape_icon" />
                  <figcaption class="col-primary c-fs-4 mt-4 c-fw-600">Manage bills & expenses</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="text-center">
                <figure>
                  <img src="/img/court_icon.svg" class="img-fluid" width="96px" alt="court_icon" />
                  <figcaption class="col-primary c-fs-4 mt-4 c-fw-600">Bank Reconciliation</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid pricing_support_section">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-sm-12 text-end">
              <h2 className="sub-heading col-white">18X6 Instant Support</h2>
            </div>
            <div className="col-md-6 col-sm-12">
              <a href="contact-us">CONTACT US</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default aePricing;
