const makeTheSwitch = (path) => {
  const linkPath = path.path;    
  const isGlobal = linkPath.isGlobal;
  const isIndia = linkPath.isIndia
  const isAE = linkPath.isAE;
  return (
    <>
      <div className="make_the_switch">
        <section className="container-fluid switch-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="switch-section__content">
                  <h1 className="heading col-primary c-fw-600">
                    Make the switch
                  </h1>
                  <p className="col-dark-light c-fs-2">
                    The Right Accounting Software can change the shape of your
                    Business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid make_the_switch__sub_section">
          <div className="row ">
            <div className="col-md-6 col-sm-12">
              <figure>
                <img src={ isIndia || isAE ? "/img/switch-laptop-image.png" : "/img/uk-dashboard-laptop-and-pc-img.svg"} alt="Giddh Accounting Software Dashboard Image" className="img-fluid" />
              </figure>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="make_the_switch__sub_section__content_wrapper">
                <h2 className="col-primary sub-heading c-fw-600 pb-3">
                  Switch from any Offline/Online Software.{" "}
                </h2>

                <p className="col-primary c-fs-4 c-fw-600">
                  Transfer customers and vendors seamlessly
                </p>
                <p>
                  We sync with Tally and almost every online accounting
                  software. It’s peanuts for us to transfer your data to Giddh.
                </p>

                <p className="col-primary c-fs-4 c-fw-600">
                  We are there for you.
                </p>
                <p>
                  If you still need help, our experts will guide you to the
                  quick transfer process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid make_the_switch__sub_section">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-md-6 col-sm-12 order-1">
                <div >
                  <h2 className="col-primary sub-heading c-fw-600 pb-3">
                    A Simple Accounting Solution for all your Business needs.
                  </h2>

                  <p className="col-primary c-fs-4 c-fw-600">
                    Inventory Management
                  </p>
                  <p>
                    Manufacturing and all necessary inventory solutions at your
                    rescue.
                  </p>

                  <p className="col-primary c-fs-4 c-fw-600">Invoicing</p>
                  <p>
                    Generate beautiful invoices on the tip of a button and share
                    it with your clients instantly.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 order-0">
                <figure>
                  <img src="/img/Accounting-sol-2.png" alt="make the switch to giddh banner image" className="img-fluid" />
                </figure>
              </div>
            </div>
            <div className="row align-items-center flex-row-reverse">
              <div className="col-md-6 col-sm-12 order-1">
                <div >
                  <p className="col-primary c-fs-4 c-fw-600">
                    Direct Bank integration
                  </p>
                  <p>
                    No more downloading bank statements. Your mapped
                    transactions appear directly at Giddh.
                  </p>

                  <p className="col-primary c-fs-4 c-fw-600">
                    Expense Management
                  </p>
                  <p>
                    Enjoy FREE approval based expense management which comes
                    along with all other solutions.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 order-0">
                <figure>
                  <img src="/img/Accounting-sol-1.png" alt="make the switch to giddh banner image" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid make_the_switch__sub_section container-fluid make_the_switch__sub_section--bg-white">
          <div className="container">
            <h2 className="col-primary sub-heading c-fw-600 text-center pb-4">
              Goodbye, complicated softwares.
              <br />
              Hello Giddh
            </h2>
            <div className="row row-gap-4">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="make_the_switch__sub_section__card">
                  <div className="make_the_switch__sub_section__card__img_wrapper">
                    <figure>
                      <img src="/img/superfast.svg" alt="superfast giddh icon" />
                    </figure>
                  </div>
                  <div className="make_the_switch__sub_section__card__content_wrapper make_the_switch__sub_section__card__content_wrapper--blue">
                    <p>Superfast, even with n number of data.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="make_the_switch__sub_section__card">
                  <div className="make_the_switch__sub_section__card__img_wrapper">
                    <figure>
                      <img src="/img/ledger.svg" alt="giddh ledger icon" />
                    </figure>
                  </div>
                  <div className="make_the_switch__sub_section__card__content_wrapper make_the_switch__sub_section__card__content_wrapper--golden">
                    <p>Ledger based shareable accounts.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="make_the_switch__sub_section__card">
                  <div className="make_the_switch__sub_section__card__img_wrapper">
                    <figure>
                      <img src="/img/multi-user.svg" alt="multiuser giddh app icons " />
                    </figure>
                  </div>
                  <div className="make_the_switch__sub_section__card__content_wrapper make_the_switch__sub_section__card__content_wrapper--pink">
                    <p>Unlimited  Multi-user access.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="make_the_switch__sub_section__card">
                  <div className="make_the_switch__sub_section__card__img_wrapper">
                    <figure>
                      <img src="/img/autoupdate.svg" alt="autoupdate icon" />
                    </figure>
                  </div>
                  <div className="make_the_switch__sub_section__card__content_wrapper make_the_switch__sub_section__card__content_wrapper--dark-green">
                    <p>Auto updations. Always getting faster.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default makeTheSwitch;
