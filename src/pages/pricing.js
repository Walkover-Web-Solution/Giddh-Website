import { MdDone, MdClose } from "react-icons/md";
const pricing = () => {
  return (
    <>
      <section className="container-fluid pricing_top_section">
        <div className="row align-items-center mt-auto">
          <div className="col-md-6 col-sm-12">
            <h3 className=" heading col-primary c-fw-800 ms-4">
              Powerful solution. Affordable pricing.
            </h3>
          </div>
          <div className="col-md-6 col-sm-12">
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

      <section className="container-fluid pricing_main_section">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="pricing_main_section__grid">
              <div className="pricing_main_section__grid__title">
                <h3>Powerful solution. Affordable pricing.</h3>
              </div>
              <div className="pricing_main_section__grid__guarantee_logo">
                <figure>
                  <img
                    src="/img/guarantee-96.png"
                    alt="90 Days guarantee logo"
                  />
                </figure>
              </div>
              <div className="pricing_main_section__grid__trial pricing__heading text-center">
                <span className="pricing__heading__name">Trial</span>
                <br />
                <span className="pricing__heading__cost">Free</span>
                <br />
                <span className="pricing__heading__period">15 days</span>
              </div>
              <div className="pricing_main_section__grid__birch pricing__heading text-center">
                <span className="pricing__heading__name">Birch</span>
                <br />
                <span className="pricing__heading__cost">
                  ₹800<span>/year</span>
                </span>
                <br />
                <span className="pricing__heading__period">
                  (Only for CA, CS & NGO)
                </span>
              </div>
              <div className="pricing_main_section__grid__oak pricing__heading text-center position-relative">
                <span className="plan_tag">
                  <img
                    src="/img/popular-plan.png"
                    width="70px"
                    alt="popular plan tag"
                  />
                </span>
                <span className="pricing__heading__name"> Oak</span>
                <br />
                <span className="pricing__heading__cost">
                  ₹4,000<span>/year</span>
                </span>
              </div>
              <div className="pricing_main_section__grid__vine pricing__heading text-center">
                <span className="pricing__heading__name"> Vine</span>
              </div>
              <div className="pricing_main_section__grid__sequoia pricing__heading text-center">
                <span className="pricing__heading__name"> Sequoia</span>
              </div>

              <div className="pricing_main_section__grid__benefits">
                <p className="c-fw-600">Benefits</p>
              </div>
              <div className="pricing_main_section__grid__b1 text-center">
                <a
                  href="https://giddh.com/signup/"
                  className="benefits-link bg-grey"
                >
                  Get Started
                </a>
              </div>
              <div className="pricing_main_section__grid__b2 text-center">
                <a href="#" className="benefits-link">
                  Talk to Us
                </a>
              </div>
              <div className="pricing_main_section__grid__b3 text-center">
                <a href="https://giddh.com/signup/" className="benefits-link">
                  Join Us
                </a>
              </div>
              <div className="pricing_main_section__grid__b4 text-center">
                <a href="https://giddh.com/signup/" className="benefits-link">
                  Join Us
                </a>
              </div>
              <div className="pricing_main_section__grid__b5 text-center">
                <a href="https://giddh.com/signup/" className="benefits-link">
                  Join Us
                </a>
              </div>

              <div className="pricing_main_section__grid__transactions">
                Transactions
              </div>
              <div className="pricing_main_section__grid__transactions_2">
                Transactions
              </div>
              <div className="pricing_main_section__grid__transactions_3">
                Transactions
              </div>
              <div className="pricing_main_section__grid__transactions_4">
                Transactions
              </div>
              <div className="pricing_main_section__grid__transactions_5">
                Transactions
              </div>
              <div className="pricing_main_section__grid__t1 text-center">
                40,000
              </div>
              <div className="pricing_main_section__grid__t2 text-center">
                10,000
              </div>
              <div className="pricing_main_section__grid__t3 text-center">
                40,000
              </div>
              <div className="pricing_main_section__grid__t4 text-center">
                40,000
              </div>
              <div className="pricing_main_section__grid__t5 text-center">
                100,000
              </div>

              <div className="pricing_main_section__grid__companies">
                Companies
              </div>
              <div className="pricing_main_section__grid__companies_2">
                Companies
              </div>
              <div className="pricing_main_section__grid__companies_3">
                Companies
              </div>
              <div className="pricing_main_section__grid__companies_4">
                Companies
              </div>
              <div className="pricing_main_section__grid__companies_5">
                Companies
              </div>
              <div className="pricing_main_section__grid__c1 text-center">
                1
              </div>
              <div className="pricing_main_section__grid__c2 text-center">
                1
              </div>
              <div className="pricing_main_section__grid__c3 text-center">
                1
              </div>
              <div className="pricing_main_section__grid__c4 text-center">
                10
              </div>
              <div className="pricing_main_section__grid__c5 text-center">
                100
              </div>

              <div className="pricing_main_section__grid__accountant_consultant">
                Accountant Consultant
              </div>
              <div className="pricing_main_section__grid__accountant_consultant_2">
                Accountant Consultant
              </div>
              <div className="pricing_main_section__grid__accountant_consultant_3">
                Accountant Consultant
              </div>
              <div className="pricing_main_section__grid__accountant_consultant_4">
                Accountant Consultant
              </div>
              <div className="pricing_main_section__grid__accountant_consultant_5">
                Accountant Consultant
              </div>

              <div className="pricing_main_section__grid__ac1 text-center">
                <MdClose />
              </div>
              <div className="pricing_main_section__grid__ac2 text-center">
                <MdClose />
              </div>
              <div className="pricing_main_section__grid__ac3 text-center">
                2 hrs
              </div>
              <div className="pricing_main_section__grid__ac4 text-center">
                4 hrs
              </div>
              <div className="pricing_main_section__grid__ac5 text-center">
                10 hrs
              </div>

              <div className="pricing_main_section__grid__unlimited_users">
                Unlimited Users
              </div>
              <div className="pricing_main_section__grid__unlimited_users_2">
                Unlimited Users
              </div>
              <div className="pricing_main_section__grid__unlimited_users_3">
                Unlimited Users
              </div>
              <div className="pricing_main_section__grid__unlimited_users_4">
                Unlimited Users
              </div>
              <div className="pricing_main_section__grid__unlimited_users_5">
                Unlimited Users
              </div>
              <div className="pricing_main_section__grid__u1 text-center">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__u2 text-center">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__u3 text-center">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__u4 text-center">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__u5 text-center">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__customers_vendors">
                Unlimited Customers/Vendors
              </div>
              <div className="pricing_main_section__grid__customers_vendors_2">
                Unlimited Customers/Vendors
              </div>
              <div className="pricing_main_section__grid__customers_vendors_3">
                Unlimited Customers/Vendors
              </div>
              <div className="pricing_main_section__grid__customers_vendors_4">
                Unlimited Customers/Vendors
              </div>
              <div className="pricing_main_section__grid__customers_vendors_5">
                Unlimited Customers/Vendors
              </div>
              <div className="pricing_main_section__grid__cv1 text-center">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__cv2 text-center">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__cv3 text-center">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__cv4 text-center">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__cv5 text-center">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__desktop_mobile_app">
                Desktop/Mobile App
              </div>
              <div className="pricing_main_section__grid__desktop_mobile_app_2">
                Desktop/Mobile App
              </div>
              <div className="pricing_main_section__grid__desktop_mobile_app_3">
                Desktop/Mobile App
              </div>
              <div className="pricing_main_section__grid__desktop_mobile_app_4">
                Desktop/Mobile App
              </div>
              <div className="pricing_main_section__grid__desktop_mobile_app_5">
                Desktop/Mobile App
              </div>
              <div className="pricing_main_section__grid__d1 text-center">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__d2 text-center">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__d3 text-center">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__d4 text-center">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__d5 text-center">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__link_all_feature">
                <a href="#">Check all features</a>
              </div>
              <div className="pricing_main_section__grid__extra_charges">
                <p className="c-fs-6 c-fw-300">
                  Extra Add ons: <span className="c-fw-800">₹0.10</span> per
                  transaction | <span className="c-fw-800">₹2000</span> per
                  branch/year |<span className="c-fw-800">₹1000</span> per
                  warehouse/year
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h3 className="c-fs-3 c-fw-800">Big Enterprises?</h3>

            <a href="#" className="benefits-link">
              TALK TO US
            </a>
          </div>
        </div>
      </section>

      <section className="container-fluid pricing_start_trail_section">
        <div className="container">
          <div className="text-center">
            <h2 className="sub-heading col-primary c-fw-600">
              GIDDH – The AIO Answer to Your Accounting Needs
            </h2>
            <p className="c-fs-4 c-fw-500">
              Are you still entering your financial data manually into
              spreadsheets to manage your finances? 
              <br/>If yes, it’s time to Make
              the Switch and purchase a dedicated online accounting software
              like GIDDH.
            </p>
            <a href="#">Start your trial</a>
          </div>
        </div>
      </section>

      <section className="container-fluid features__description_container mt-5">
        <div className="container">
          <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h4 className="col-primary small-heading c-fw-600 mb-3">
                  WHY GIDDH?
                </h4>
                <p>
                  Managing your business without understanding its financial
                  status can jeopardize your growth prospects. If you’re a small
                  business organization, the price of accounting software can
                  often put an extra burden on your expenses. So, it’s
                  imperative for you to compare different accounting software
                  prices and then make your choice.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 __image-alignment">
              <figure>
                <img
                  src="/img/giddh-login-page.svg"
                  className="img-fluid"
                  alt="giddh-login-page image"
                />
              </figure>
            </div>
          </div>
          <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h4 className="col-primary small-heading c-fw-600 mb-3">
                  Accounting Software for Growing Businesses
                </h4>
                <p>
                  The advancement and inception of technologies like Artificial
                  Intelligence (AI), Machine Learning (ML), etc. has been
                  forcing businesses to streamline & upgrade all their processes
                  inclusive of accounting. So, if you’re planning to expand your
                  business across states or boundaries, chances are you might be
                  experiencing different forms of shortcomings w.r.t handling
                  the business operations, managing accounts, etc.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 __image-alignment">
              <figure>
                <img
                  src="/img/account-giddh-feature-image.svg"
                  className="img-fluid"
                  alt="account-giddh-feature-image"
                />
              </figure>
            </div>
          </div>

          <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h4 className="col-primary small-heading c-fw-600 mb-3">
                  Accounting Software for Startups
                </h4>
                <p>
                  Entrepreneurship in any form gives you the option to wear
                  multiple caps at a time. If you’re a sole entrepreneur running
                  a startup, right from pitching to clients, to working for
                  them, to raising invoices on time and tracking your finances –
                  every little task gets done by you solely. Automating your
                  financial operation gets easier with the integration of
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 __image-alignment">
              <figure>
                <img
                  src="/img/giddh-invoice-send-success.svg"
                  className="img-fluid"
                  alt="giddh-invoice-send-success image"
                />
              </figure>
            </div>
          </div>
          <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h4 className="col-primary small-heading c-fw-600 mb-3">
                  Accounting Software for CAs and CS
                </h4>
                <p>
                  If you’re lo
                  <MdDone />
                  ing for a perfect software system to help you with business
                  operations, you’re at the right place. GIDDH – is one of the
                  best accounting software for CA and CS both as it can help you
                  manage daily workload and cater to the specific needs of your
                  clients regularly.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 __image-alignment">
              <figure>
                <img
                  src="/img/accounting-software-feature.png"
                  className="img-fluid"
                  alt="accounting-software-feature image"
                />
              </figure>
            </div>
          </div>
          <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h4 className="col-primary small-heading c-fw-600 mb-3">
                  Free Accounting Software For Students and Teachers
                </h4>
                <p>
                  Here at Giddh, we want to spread awareness about the power and
                  convenience of cloud accounting to everyone. In this regard,
                  we are offering our tool completely free of cost for students
                  and teachers to help them get acquainted with our powerful
                  features and practice using our various options.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 __image-alignment">
              <figure>
                <img
                  src="/img/education-economy-image.svg"
                  className="img-fluid"
                  alt="education-economy-image"
                />
              </figure>
            </div>
          </div>
          <div className="row mb-5 pb-5">
            <div className="col-12">
              <div className="features__description_container__content pricing_description text-center">
                <h4 className="col-primary c-fs-3 c-fw-600 mb-3">
                  Free Accounting Software For Students and Teachers
                </h4>
                <p className="c-fs-4">
                  Here at Giddh, we want to spread awareness about the power and
                  convenience of cloud accounting to everyone. In this regard,
                  we are offering our tool completely free of cost for students
                  and teachers to help them get acquainted with our powerful
                  features and practice using our various options.
                </p>
                <a href="#" className="c-fs-4">
                  Read More...
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid pricing_grid_section">
        <div className="container">
          <div className="row flex-wrap row-gap-5">
            <div className="col-4">
              <div className="pricing_grid_section__card">
                <figure>
                  <img src="/img/feature-invoice.svg" alt="Invoicing-logo" />
                  <figcaption>Invoicing</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-4">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    src="/img/feature-inventory.svg"
                    alt="Inventory-Management-logo"
                  />
                  <figcaption>Inventory Management</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-4">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    src="/img/feature-reconcile.svg"
                    alt="Bank-Reconciliation-logo"
                  />
                  <figcaption>Bank Reconciliation</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-4">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    src="/img/multi-currency-banner.svg"
                    alt="Multi-Currency-logo"
                  />
                  <figcaption>Multi Currency</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-4">
              <div className="pricing_grid_section__card">
                <figure>
                  <img src="/img/feature-gst.svg" alt="Tax-Compliant-logo" />
                  <figcaption>Tax Compliant</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-4">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    src="/img/feature-report.svg"
                    alt="Expense-Management-logo"
                  />
                  <figcaption>Expense Management</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid pricing_support_section">
        <div className="container">
          <div className="d-flex justify-content-center">
            <h2 className="sub-heading col-white">18X6 Instant Support</h2>
            <a href="contact-us">CONTACT US</a>
          </div>
        </div>
      </section>
    </>
  );
};
export default pricing;
