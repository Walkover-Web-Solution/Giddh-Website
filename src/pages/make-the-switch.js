import { usePathname } from "next/navigation";
const makeTheSwitch = () => {
    // To get active route
    const pathname = usePathname();
    const startPath = pathname.split("/");
    let isIndia = startPath[1] !== "ae" && startPath[1] !== "uk";
    let isAE = startPath[1] === "ae";
  
    let link = isIndia ? '' : (isAE ? '/ae' : '/uk');
  return (
    <>
      <div className="make_the_switch">
        <section className="container-fluid switch-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="switch-section__content">
                  <h1 className="heading col-primary c-fw-800">
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
                <img src={ isIndia || isAE ? "/img/switch-laptop-image.png" : "/img/uk-dashboard-laptop-and-pc-img.svg"} className="img-fluid" />
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
                <p className="col-dark-light">
                  We sync with Tally and almost every online accounting
                  software. It’s peanuts for us to transfer your data to Giddh.
                </p>

                <p className="col-primary c-fs-4 c-fw-600">
                  We are there for you.
                </p>
                <p className="col-dark-light">
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
                <div className="">
                  <h2 className="col-primary sub-heading c-fw-600 pb-3">
                    A Simple Accounting Solution for all your Business needs.
                  </h2>

                  <p className="col-primary c-fs-4 c-fw-600">
                    Inventory Management
                  </p>
                  <p className="col-dark-light">
                    Manufacturing and all necessary inventory solutions at your
                    rescue.
                  </p>

                  <p className="col-primary c-fs-4 c-fw-600">Invoicing</p>
                  <p className="col-dark-light">
                    Generate beautiful invoices on the tip of a button and share
                    it with your clients instantly.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 order-0">
                <figure>
                  <img src="/img/Accounting-sol-2.png" className="img-fluid" />
                </figure>
              </div>
            </div>
            <div className="row align-items-center flex-row-reverse">
              <div className="col-md-6 col-sm-12 order-1">
                <div className="">
                  <p className="col-primary c-fs-4 c-fw-600">
                    Direct Bank integration
                  </p>
                  <p className="col-dark-light">
                    No more downloading bank statements. Your mapped
                    transactions appear directly at Giddh.
                  </p>

                  <p className="col-primary c-fs-4 c-fw-600">
                    Expense Management
                  </p>
                  <p className="col-dark-light">
                    Enjoy FREE approval based expense management which comes
                    along with all other solutions.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 order-0">
                <figure>
                  <img src="/img/Accounting-sol-2.png" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid make_the_switch__sub_section container-fluid make_the_switch__sub_section--bg-white">
          <div className="container">
            <h2 className="col-primary sub-heading c-fw-600 text-center pb-4">
              Goodbye complicated software's.
              <br />
              Hello Giddh.
            </h2>
            <div className="row row-gap-4">
              <div className="col-md-3 col-sm-12">
                <div className="make_the_switch__sub_section__card">
                  <div className="make_the_switch__sub_section__card__img_wrapper">
                    <figure>
                      <img src="/img/superfast.svg" />
                    </figure>
                  </div>
                  <div className="make_the_switch__sub_section__card__content_wrapper make_the_switch__sub_section__card__content_wrapper--blue">
                    <p>Superfast, even with n number of data.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="make_the_switch__sub_section__card">
                  <div className="make_the_switch__sub_section__card__img_wrapper">
                    <figure>
                      <img src="/img/ledger.svg" />
                    </figure>
                  </div>
                  <div className="make_the_switch__sub_section__card__content_wrapper make_the_switch__sub_section__card__content_wrapper--golden">
                    <p>Ledger based shareable accounts.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="make_the_switch__sub_section__card">
                  <div className="make_the_switch__sub_section__card__img_wrapper">
                    <figure>
                      <img src="/img/multi-user.svg" />
                    </figure>
                  </div>
                  <div className="make_the_switch__sub_section__card__content_wrapper make_the_switch__sub_section__card__content_wrapper--pink">
                    <p>Unlimited  Multi-user access.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="make_the_switch__sub_section__card">
                  <div className="make_the_switch__sub_section__card__img_wrapper">
                    <figure>
                      <img src="/img/autoupdate.svg" />
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
