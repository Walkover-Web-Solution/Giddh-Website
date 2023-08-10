import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdDone, MdClose } from "react-icons/md";
const pricing = () => {
  const [readMoreStatus, readmoreAction] = useState(false);
  const [readMoreParagraphStatus1, showMoreParagraph1] = useState(false);
  const [readMoreParagraphStatus2, showMoreParagraph2] = useState(false);
  const [readMoreParagraphStatus3, showMoreParagraph3] = useState(false);
  const [readMoreParagraphStatus4, showMoreParagraph4] = useState(false);
  const [readMoreParagraphStatus5, showMoreParagraph5] = useState(false);

  const pathname = usePathname();
  const startPath = pathname.split("/");
  let isIndia = startPath[1] !== "ae" && startPath[1] !== "uk";
  let isAE = startPath[1] === "ae";

  // Holds Url Prefix country wise
  let link = isIndia ? "" : isAE ? "/ae" : "/uk";

  return (
    <>
      <section className="container-fluid pricing_top_section">
        <div className="row align-items-center mt-auto pricing_top_section__column-reverse">
          <div className="col-lg-6 col-md-12">
            <h3 className=" heading col-primary c-fw-600 ms-4">
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
                <a href="#" className="benefits-link" onClick={() => Calendly.initPopupWidget({url: 'https://calendly.com/sales-accounting-software/talk-to-sale'})}>
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
                <a href={ link + "/all-features" }>Check all features</a>
              </div>
              <div className="pricing_main_section__grid__extra_charges">
                <p className="c-fs-6 c-fw-400">
                  Extra Add ons: <span className="c-fw-600">₹0.10</span> per
                  transaction | <span className="c-fw-600">₹2000</span> per
                  branch/year |<span className="c-fw-600">₹1000</span> per
                  warehouse/year
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h3 className="c-fs-3 c-fw-600">Big Enterprises?</h3>

            <a href="#" className="benefits-link" onClick={() => Calendly.initPopupWidget({url: 'https://calendly.com/sales-accounting-software/talk-to-sale'})}>
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
            <p className="c-fs-4 c-fw-600">
              Are you still entering your financial data manually into
              spreadsheets to manage your finances?
              <br />
              If yes, it’s time to Make the Switch and purchase a dedicated
              online accounting software like GIDDH.
            </p>
            <a href={ link + "/signup" }>Start your trial</a>
          </div>
        </div>
      </section>

      <section className="container-fluid features__description_container mt-5">
        <div className="container">
          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal" +
              (readMoreParagraphStatus1 ? " --read-more" : "")
            }
          >
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
                <span
                  className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                  style={{
                    display: readMoreParagraphStatus1 ? "none" : "block",
                  }}
                  onClick={() =>
                    showMoreParagraph1((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read More...
                </span>
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

            <div className="col-12">
              <div className="features__description_container__content">
                <p
                  style={{
                    display: readMoreParagraphStatus1 ? "block" : "none",
                  }}
                >
                  That being said, GIDDH is a perfect web-based solution for
                  SMEs that caters to all your accounting needs at affordable
                  prices. Incorporating multiple modules within itself, GIDDH
                  allows you to update your books of account effortlessly making
                  it easier for you to track your cash flow and the overall
                  financial health of the business.
                </p>
                <p
                  style={{
                    display: readMoreParagraphStatus1 ? "block" : "none",
                  }}
                >
                  The time has gone by when accounting was considered “an
                  activity only for the accountants”. Today, all professions,
                  business owners, etc. rely on the different accounting
                  software to make better business decisions. The following
                  segment bifurcates different professions and helps you
                  understand how they are making optimal use of accounting
                  software.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600"
                  style={{
                    display: readMoreParagraphStatus1 ? "block" : "none",
                  }}
                  onClick={() =>
                    showMoreParagraph1((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read Less
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal" +
              (readMoreParagraphStatus2 ? " --read-more" : "")
            }
          >
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

                <span
                  className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                  style={{
                    display: readMoreParagraphStatus2 ? "none" : "block",
                  }}
                  onClick={() =>
                    showMoreParagraph2((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read More
                </span>
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

            <div className="col-12">
              <div className="features__description_container__content">
                <p
                  style={{
                    display: readMoreParagraphStatus2 ? "block" : "none",
                  }}
                >
                  Being a part of a growing business, it’s evident to understand
                  that you’re already running on a shoestring budget, and thus
                  paying a professional accountant to manage your books isn’t a
                  wise choice.
                </p>
                <p
                  style={{
                    display: readMoreParagraphStatus2 ? "block" : "none",
                  }}
                >
                  In such circumstances, having proper accounting software like
                  GIDDH by your side can be a boon for your business. It allows
                  you to utilize all available firm’s resources optimally
                  reducing the hassles of your bookkeeping and accounting tasks.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600"
                  style={{
                    display: readMoreParagraphStatus2 ? "block" : "none",
                  }}
                  onClick={() =>
                    showMoreParagraph2((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read Less
                </span>
              </div>
            </div>
          </div>

          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal" +
              (readMoreParagraphStatus3 ? " --read-more" : "")
            }
          >
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
                <span
                  className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                  style={{
                    display: readMoreParagraphStatus3 ? "none" : "block",
                  }}
                  onClick={() =>
                    showMoreParagraph3((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read More
                </span>
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
            <div className="col-12">
              <div className="features__description_container__content">
                <p
                  style={{
                    display: readMoreParagraphStatus3 ? "block" : "none",
                  }}
                >
                  cloud-based accounting software. It acts as a company’s
                  valuable asset that improves the efficiency of your finance
                  department. Since, financial data security is a major concern
                  for most startups, having a reliable cloud-based accounting
                  software like GIDDH within your business operations cycle can
                  help. It keeps your financial information secured on an AWS
                  cloud (a Linux server) strengthening its layers of protection
                  and discarding any chances of an unethical data breach.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600"
                  style={{
                    display: readMoreParagraphStatus3 ? "block" : "none",
                  }}
                  onClick={() =>
                    showMoreParagraph3((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read Less
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal" +
              (readMoreParagraphStatus4 ? " --read-more" : "")
            }
          >
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

                <span
                  className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                  style={{
                    display: readMoreParagraphStatus4 ? "none" : "block",
                  }}
                  onClick={() =>
                    showMoreParagraph4((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read More
                </span>
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
            <div className="col-12">
              <div className="features__description_container__content">
                <p
                  style={{
                    display: readMoreParagraphStatus4 ? "block" : "none",
                  }}
                >
                  The accounting software pricing stands at just INR 800/- per
                  organization/year with a capacity to handle 10,000
                  transactions and unlimited users. GIDDH prepares your GST
                  return filing automatically, identifies potential errors,
                  never lets you miss out deadlines, and streamlines the entire
                  process. Another significant benefit of trusting GIDDH is that
                  it allows you to grant your CA view access to the relevant GST
                  tax return data and create GST invoices ensuring that
                  compliance is no more a challenge.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600"
                  style={{
                    display: readMoreParagraphStatus4 ? "block" : "none",
                  }}
                  onClick={() =>
                    showMoreParagraph4((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read Less
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal" +
              (readMoreParagraphStatus5 ? " --read-more" : "")
            }
          >
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
                <span
                  className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                  style={{
                    display: readMoreParagraphStatus5 ? "none" : "block",
                  }}
                  onClick={() =>
                    showMoreParagraph5((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read More
                </span>
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
            <div className="col-12">
              <div className="features__description_container__content">
                <p
                  style={{
                    display: readMoreParagraphStatus5 ? "block" : "none",
                  }}
                >
                  With this free alternative, teachers and students will be able
                  to get hands-on experience about accounting terms and
                  practices using Giddh. This free option also extends to
                  institutes and coaching centers in order to enable instructors
                  to explain commerce and accounting concepts using a real-world
                  tool.We hope that this will better equip the younger
                  generation to take a confident step into the world of
                  accounting.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600"
                  style={{
                    display: readMoreParagraphStatus5 ? "block" : "none",
                  }}
                  onClick={() =>
                    showMoreParagraph5((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read Less
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container-fluid readmore_section"
        style={{ maxHeight: readMoreStatus ? "100%" : "max-content" }}
      >
        <div className="container">
          <div className="col-12 pricing_description text-center">
            <h4 className="col-primary c-fs-3 fw-bold mb-3">
              Traditional Vs Cloud Accounting Software: A Comparison
            </h4>
            <p className="c-fs-4 my-4">
              Not long ago, traditional accounting software like Tally was quite
              a rage and was considered an integral part of both small to
              medium-sized businesses. However, as tech improvements came to the
              fore with concepts of cloud, AI, ML emerging, organizations
              started looking for better options and started incorporating
              cloud-based software.
            </p>
            <div style={{ display: readMoreStatus ? "block" : "none" }}>
              <p className="c-fs-4 text-start">
                Apart from tech improvements, other factors that led to this
                tremendous shift include:
              </p>

              <ul className="custom-ul-with-right-tick text-start">
                <li className="c-fs-4">
                  <span className="c-fw-600">Hardware Costs:</span> Traditional
                  accounting software demanded physical setup of hardware which
                  meant additional expense as it involved purchasing cost,
                  insurance, installation charges, along with its maintenance
                  costs. However, you don’t have to worry about cloud{" "}
                  <span className="c-fw-600">account software price</span>{" "}
                  fluctuations as you don’t require any specialized hardware for
                  operating it. Your entire financial data is encrypted and
                  stored offsite in the cloud and you pay quite a nominal charge
                  for constant usage.
                </li>
                <li className="c-fs-4">
                  <span className="c-fw-600">Accessibility is a Concern:</span>{" "}
                  Traditional accounting software demanded physical setup of
                  hardware which meant additional expense as it involved
                  purchasing cost, insurance, installation charges, along with
                  its maintenance costs. However, you don’t have to worry about
                  cloud account software price fluctuations as you don’t require
                  any specialized hardware for operating it. Your entire
                  financial data is encrypted and stored offsite in the cloud
                  and you pay quite a nominal charge for constant usage.
                </li>
              </ul>
            </div>

            <span
              className="text-decoration-underline c-fw-600 cursor-pointer"
              onClick={() =>
                readmoreAction((readmoreDisplay) => !readmoreDisplay)
              }
            >
              {readMoreStatus ? "Read Less" : "Read More..."}
            </span>
          </div>
        </div>
      </section>

      <section className="container-fluid pricing_grid_section">
        <div className="container">
          <div className="row flex-wrap row-gap-5">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img className="img-fluid" src="/img/feature-invoice.svg" alt="Invoicing-logo" />
                  <figcaption>Invoicing</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img className="img-fluid"
                    src="/img/feature-inventory.svg"
                    alt="Inventory-Management-logo"
                  />
                  <figcaption>Inventory Management</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img className="img-fluid"
                    src="/img/feature-reconcile.svg"
                    alt="Bank-Reconciliation-logo"
                  />
                  <figcaption>Bank Reconciliation</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img className="img-fluid"
                    src="/img/multi-currency-banner.svg"
                    alt="Multi-Currency-logo"
                  />
                  <figcaption>Multi Currency</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img className="img-fluid" src="/img/feature-gst.svg" alt="Tax-Compliant-logo" />
                  <figcaption>Tax Compliant</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img className="img-fluid"
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
export default pricing;
