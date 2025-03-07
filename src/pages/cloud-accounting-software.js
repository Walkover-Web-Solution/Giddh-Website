import { useState, useEffect } from "react";
import Faqs from "@/components/faq";
import faqs from '../data/faqs.json';

const anywhereAnytime = (path) => {
  const [readMoreStatus, readmoreAction] = useState(false);
  const [readMoreParagraphStatus1, showMoreParagraph1] = useState(false);
  const [readMoreParagraphStatus2, showMoreParagraph2] = useState(false);
  const [faq, setFaq]= useState([]);

  const linkPath = path.path;
  const isGlobal = linkPath.isGlobal;
  const isIndia = linkPath.isIndia;
  const isAE = linkPath.isAE;
  const isUK = linkPath.isUK;
  const link = linkPath.linkPrefix;

  useEffect(() => {
    setFaq(faqs['cloud-accounting-software'])
  }, []);

  return (
    <>
      <div className="features">
        <section className="container-fluid" aria-labelledby="features-heading">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h1 id="features-heading" className="heading col-primary c-fw-600 mb-4">
                    { isIndia && "GST-Compliant Cloud Accounting for India" }
                    { isAE && "VAT-Compliant Cloud Accounting in the UAE" }
                    { (isUK || isGlobal) && "Cloud Accounting Software" }
                </h1>
                <span className="col-grey c-fs-3 mb-5 d-inline-block">
                  Generate invoices, view reports & manage your books wherever
                  you are
                  { isIndia && <>, and <h2 className="col-grey c-fs-3 mb-5 d-inline">Simplify GST Filing and Compliance</h2></> }
                  { isAE && <>, and <h2 className="col-grey c-fs-3 mb-5 d-inline">Effortless VAT Management and Reporting</h2></> }
                </span>
                <div className="features__heading_container__links">
                  <a
                    href="#"
                    className="download_free_btn me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#downloadFree"
                    aria-label="Download the free version of the software"
                  >
                    Download Free
                  </a>
                  <a
                    href="#"
                    className="col-blue"
                    onClick={() => openCalendly()}
                    aria-label="Schedule a demo with our sales team"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
              <div className="col-lg-5 order-lg-1 order-0 position-relative">
                <figure className="text-end">
                  <img
                    src="/img/feature-gallery-icons/cloud-banner.svg"
                    alt="Illustration of cloud accounting software"
                    width="400"
                    height="auto"
                  />
                  <img
                    src="/img/all-features-cloud_icon.svg"
                    alt="Icons representing various features of cloud accounting"
                    className="features__heading_container__right_banner_img"
                    width="90%"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid features__sub_heading_container" aria-labelledby="business-heading">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center features__sub_heading_container--pull-top">
                <h2 id="business-heading" className="sub-heading col-primary c-fw-600 mb-3">
                  Run your business from any corner of the world!
                </h2>
                <p className="c-fs-4 mb-5" role="note">
                  {isIndia
                    ? `All you ever need to be on top of your accounting is just an
                  active internet connection. Conduct your business from
                  anywhere with our online cloud accounting software. Manage
                  inventory, file GST returns, or reconcile your books; the
                  possibilities are truly limitless with Giddh’s cloud
                  accounting software.`
                    : null}
                  {isAE || isUK || isGlobal
                    ? `All you ever need to be on top of your accounting is just an 
                    active internet connection. Conduct your business from
                     anywhere with our online cloud accounting software. Manage 
                     inventory, file Tax returns, or reconcile your books; the possibilities 
                     are truly limitless with Giddh’s cloud accounting software.`
                    : null}
                </p>

                <a href={link + "/signup"} className="btn-link-purple" aria-label="Start your trial for cloud accounting software">
                  Start Your Trial
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid features__description_container mt-5" aria-labelledby="features-description-heading">
          <div className="container">
            <h2 id="features-description-heading" className="visually-hidden">Features Description</h2>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    Turn your browser into your office
                  </h4>
                  <p>
                    {isIndia
                      ? `Crunch numbers, reconcile books or send an urgent invoice to
                    customers. With Giddh’s accounting software on cloud, turn
                    your browser into your office and access all your financial
                    data sitting at your local coffee shop or while you’re on a
                    commute.`
                      : null}

                    {isAE || isUK || isGlobal
                      ? `Crunch numbers, reconcile books or send an urgent invoice to customers. 
                    With Giddh, turn your browser into your office and access all your financial data 
                    sitting at your local coffee shop or while you’re on a commute.`
                      : null}
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={
                      isAE || isUK || isGlobal
                        ? "/img/feature-gallery-icons/cloud-welcome.svg"
                        : "/img/feature-gallery-icons/Group-5628-1.svg"
                    }
                    className="img-fluid"
                    alt="connect bank image"
                    width="400"
                    height="auto"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    Stay ahead with automatic updates
                  </h4>
                  {isIndia ? (
                    <p>
                      With Giddh’s{" "}
                      <a href="https://giddh.com/blog/benefits-of-cloud-based-accounting-software/" aria-label="Learn more about cloud based accounting software benefits">
                        cloud based accounting software
                      </a>
                      , you will automatically receive OTA (on the air) updates
                      of the greatest and newest features that are added to
                      Giddh. That means less effort on your part—which we all
                      love. Now isn’t that awesome?
                    </p>
                  ) : (
                    ""
                  )}
                  {isAE || isUK || isGlobal ? (
                    <p>
                      With cloud based accounting platform you will
                      automatically receive OTA(on the air) updates of the
                      greatest and newest features that are added to Giddh. That
                      means less effort on your part—which we all love. Now
                      isn’t that awesome!
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={
                      isAE || isUK || isGlobal
                        ? "/img/feature-gallery-icons/cloud-update.svg"
                        : "/img/feature-gallery-icons/Group-5650.svg"
                    }
                    className="img-fluid"
                    alt="bank reconcile image"
                    width="400"
                    height="auto"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    Save more on all fronts
                  </h4>
                  {isIndia ? (
                    <p>
                      No matter what your business is all about, making money
                      must be your number one priority. By using our online
                      cloud accounting software, you can save money as you would
                      no longer need to worry about expensive version upgrades,
                      maintenance costs & even the cost of hiring an entire
                      accounting department
                    </p>
                  ) : (
                    ""
                  )}

                  {isAE || isUK || isGlobal ? (
                    <p>
                      No matter what your business is all about, making money
                      must be your number one priority. By using cloud
                      accounting software, you can save money as you would no
                      longer need to worry about expensive version upgrades,
                      maintenance costs & even the cost of hiring an entire
                      accounting department.
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={
                      isAE || isUK || isGlobal
                        ? "/img/feature-gallery-icons/save-more.svg"
                        : "/img/feature-gallery-icons/Group-5641.svg"
                    }
                    className="img-fluid"
                    alt="bank account image"
                    width="400"
                    height="auto"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    Work smarter, grow faster!
                  </h4>
                  <p>
                    With{" "}
                    <a
                      href="https://giddh.com/blog/10-new-awesome-features-on-the-giddh-software-2020/"
                      className="text-decoration-underline"
                    >
                      cloud based accounting software
                    </a>
                    , your team-members don’t need to be all at the same time to
                    collaborate or make major decisions. Thanks to easily
                    shareable online reports, decision makers and accountants
                    can be on the same page, even when they are not at the same
                    place.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/Group-5642.svg"
                    className="img-fluid"
                    alt="bank overview image"
                    width="400"
                    height="auto"
                  />
                </figure>
              </div>
            </div>
            {isIndia ? (
              <>
                <div
                  className={
                    "row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom" +
                    (readMoreParagraphStatus1 ? " --read-more" : "")
                  }
                >
                  <div className="col-md-12 col-lg-6">
                    <div className="features__description_container__content">
                      <h4 className="col-primary c-fw-600 mb-3">
                        Online Vs. Offline Accounting Software
                      </h4>
                      <p>
                        <a
                          href="https://giddh.com/blog/desktop-accounting-software-and-its-limitations/"
                          className="text-decoration-underline"
                        >
                          Online cloud accounting software
                        </a>{" "}
                        has become the new norm for carrying out finance
                        operations in the present day. In view of its rising
                        popularity, let’s look at the major differences between
                        a traditional desktop accounting software and a cloud
                        accounting software:
                      </p>
                      <span
                        className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                        style={{
                          display: readMoreParagraphStatus1 ? "none" : "block",
                        }}
                        onClick={() =>
                          showMoreParagraph1(
                            (readmoreDisplay) => !readmoreDisplay
                          )
                        }
                      >
                        Read More...
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 image-alignment">
                    <figure>
                      <img
                        src="/img/feature-gallery-icons/Group-5651.svg"
                        className="img-fluid"
                        alt="bank account image"
                        width="400"
                        height="auto"
                      />
                    </figure>
                  </div>
                  <div className="col-12">
                    <div className="features__description_container__content">
                      <table
                        style={{
                          display: readMoreParagraphStatus1 ? "block" : "none",
                        }}
                        className="table table-bordered table-responsive"
                      >
                        <thead>
                          <tr>
                            <th>Parameters</th>
                            <th>Cloud Accounting Software </th>
                            <th>Offline Accounting Software</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Access to Data</td>
                            <td>Can be accessed from any device anywhere</td>
                            <td>Can be only accessed via a specific PC</td>
                          </tr>
                          <tr>
                            <td>Software Updates</td>
                            <td>Automatic updates available</td>
                            <td>Manual updates required</td>
                          </tr>
                          <tr>
                            <td>Data Loss</td>
                            <td>
                              Data stored securely on servers with regular data
                              backing
                            </td>
                            <td>
                              Data stored on PC with risk of data loss from disk
                              crash or hardware problems
                            </td>
                          </tr>
                          <tr>
                            <td>Security Risks</td>
                            <td>
                              Servers and OSs maintained by experts, protected
                              from virus risks
                            </td>
                            <td>
                              High risk of data loss and corruption. Anti-virus
                              software acts only after virus has affected data
                            </td>
                          </tr>
                          <tr>
                            <td>Configurations</td>
                            <td>Email and SMS can be configured seamlessly</td>
                            <td>
                              Email and SMS may not be integrated with PC
                              software
                            </td>
                          </tr>
                          <tr>
                            <td>OS Upgrades</td>
                            <td>
                              Doesn’t impact OS software since it’s not
                              installed
                            </td>
                            <td>
                              Software may be required to be reinstalled and
                              license key retrieved
                            </td>
                          </tr>
                          <tr>
                            <td>Pricing</td>
                            <td>Monthly or yearly subscription charges</td>
                            <td>
                              One-time cost plus annual maintenance charges
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <span
                        className="pt-3 text-decoration-underline c-fw-600"
                        style={{
                          display: readMoreParagraphStatus1 ? "block" : "none",
                        }}
                        onClick={() =>
                          showMoreParagraph1(
                            (readmoreDisplay) => !readmoreDisplay
                          )
                        }
                      >
                        Read Less
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "row mb-5 pb-5 align-items-center features__description_container--row-even" +
                    (readMoreParagraphStatus2 ? " --read-more" : "")
                  }
                >
                  <div className="col-md-12 col-lg-6">
                    <div className="features__description_container__content">
                      <h4 className="col-primary c-fw-600 mb-3">
                        Advantages of Cloud Accounting Software
                      </h4>
                      <p>
                        Most businesses are switching over to online cloud
                        accounting software since they make business operations
                        and financial information management easier. If you
                        haven’t yet switched over to accounting software on
                        cloud, then you might want to look at the benefits you
                        may be missing out on:
                      </p>
                      <span
                        className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                        style={{
                          display: readMoreParagraphStatus2 ? "none" : "block",
                        }}
                        onClick={() =>
                          showMoreParagraph2(
                            (readmoreDisplay) => !readmoreDisplay
                          )
                        }
                      >
                        Read More...
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 image-alignment">
                    <figure>
                      <img
                        src="/img/feature-gallery-icons/Group-5649.svg"
                        className="img-fluid"
                        alt="bank overview image"
                        width="400"
                        height="auto"
                      />
                    </figure>
                  </div>
                  <div className="col-12">
                    <div className="features__description_container__content">
                      <ul
                        className="custom-ul-with-right-tick text-start"
                        style={{
                          display: readMoreParagraphStatus2 ? "block" : "none",
                        }}
                      >
                        <li>
                          <span className="c-fw-600">Speed -</span> All your
                          normal daily operations can be completed at lightning
                          speed. The automation can bring in a welcome change in
                          your functioning and help your employees get more work
                          done and process more data. No more wasting time
                          posting or chasing invoices. With the{" "}
                          <span className="c-fw-600">
                            accounting cloud based software
                          </span>
                          , you can generate automatic invoices. It can also
                          help you to keep track of all your debtors and provide
                          timely reminders to make payments. The software can
                          also help avoid any unnecessary duplications as well
                          as other human errors. Since they are regularly
                          updated automatically, you can expect fast and
                          accurate financial operations without any
                          intervention.
                        </li>
                        <li>
                          <span className="c-fw-600">Security -</span> One of
                          the common concerns for CFOs and other financial
                          personnel can be the security of software. Vulnerable
                          software can not only result in loss of data but also
                          lead to leak of confidential information. Using backup
                          systems doesn’t help much since they end up creating
                          duplicate versions of files, plus storage costs can be
                          quite cumbersome. With{" "}
                          <span className="c-fw-600">
                            cloud accounting software
                          </span>
                          , the data can be backed up and stored on an offline
                          server. This can immune businesses to losses from
                          virus, theft, or accidents and still help you retain
                          your data.
                        </li>
                        <li>
                          <span className="c-fw-600">Centralised access -</span>{" "}
                          Cloud-based accounting helps in centralised access to
                          all data as well as offers collaborative
                          opportunities. This reduces clutter since different
                          departments and employees can work on a single file
                          without creating multiple versions of it. It also
                          makes user access and login permissions easy so that
                          everyone can access the file without difficulties.
                          It’s also possible to access the data from anywhere
                          and on any device.
                        </li>
                        <li>
                          <span className="c-fw-600">Scalability -</span> One of
                          the best advantages of cloud-based accounting software
                          is that they can be customised to meet the needs of
                          small as well as large businesses. Because of this
                          scalability, you can easily expand the functions of
                          the software to meet the needs of your growing
                          business. It can be adapted to include all the
                          necessary integrations and features you may need along
                          the way.
                        </li>
                        <li>
                          <span className="c-fw-600">Simple to use -</span>{" "}
                          Maybe one of the best catches for the software is that
                          it can be easily used by people who are not from
                          accounting backgrounds. So those who may not have
                          experience of handling financial accounts have a lot
                          of guides and resources and an intuitive system to
                          help them.
                        </li>
                        <li>
                          <span className="c-fw-600">Updated data -</span> One
                          of the benefits that must be highlighted are
                          automatically updated data that can reflect in the
                          business balance sheets in real time. There are also
                          several regularly updated reports that can give you an
                          overview of your finances. It also helps you make
                          better financial decisions.
                        </li>
                        <li>
                          <span className="c-fw-600">Accuracy -</span> Since
                          most of the functions are automated, human errors are
                          reduced to a great extent. This increases the
                          efficiency and accuracy of your business operations.
                          For example, working repeatedly on the same invoices
                          can create human errors sometimes which automated
                          accounting can omit.
                        </li>
                        <li>
                          <span className="c-fw-600">Efficiency -</span> Online
                          cloud accounting software can also help you streamline
                          your finance processes and boost the overall
                          efficiency of your employees. It can also help
                          increase productivity and help employees make the best
                          use of their time and schedules.
                        </li>
                        <li>
                          <span className="c-fw-600">Integrations -</span> Cloud
                          accounting software can also be integrated with other
                          apps and tools such as CRMs and payroll software. This
                          can help you expand your operations and cover all
                          aspects with just one software.
                        </li>
                        <li>
                          <span className="c-fw-600">Pricing -</span> You can
                          also save a fortune by doing away with the hefty one
                          time fee for accounting software along with the yearly
                          maintenance costs. Paying the monthly subscription
                          fees may be better suits for your pocket. There are
                          also several discounts that come with the
                          subscription.
                        </li>
                      </ul>
                      <span
                        className="pt-3 text-decoration-underline c-fw-600"
                        style={{
                          display: readMoreParagraphStatus2 ? "block" : "none",
                        }}
                        onClick={() =>
                          showMoreParagraph2(
                            (readmoreDisplay) => !readmoreDisplay
                          )
                        }
                      >
                        Read Less
                      </span>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>

          <section className="container-fluid">
            <div
              className="container text-center "
              style={{ maxHeight: readMoreStatus ? "100%" : "max-content" }}
            >
              <h3 className="col-primary c-fs-3 c-fw-600">
                Why Giddh is Better Than Conventional Accounting Software
              </h3>
            
            { isIndia && 
              <div className="d-flex column-gap-2 justify-content-center align-items-center">
                <span>The two major advantages are </span>
                <h2 className="c-fs-5 c-fw-600 mb-0">Access Your Accounting Anywhere, Anytime</h2>
                 <span>and</span>
                <h2 className="c-fs-5 c-fw-600 mb-0">Secure Cloud Storage for Financial Data</h2>
             </div>
            }
            { isAE && 
              <div className="d-flex column-gap-2 justify-content-center align-items-center">
                <span>The two major advantages are </span>
                <h2 className="c-fs-5 c-fw-600 mb-0">Streamlined Accounting for UAE Businesses</h2>
                 <span>and</span>
                <h2 className="c-fs-5 c-fw-600 mb-0">Cloud-Based Financial Insights on Demand</h2>
             </div>
            }

              <p className="my-3">
                Although there exist some of the oldest tallying and accounting
                software players in the market, with more emerging choices
                people are opting for modern and advanced software. There are
                several ways in which Giddh as a cloud accounting software can
                make a better option:
              </p>

              <div
                className="py-4"
                style={{ display: readMoreStatus ? "block" : "none" }}
              >
                <ul className="custom-ul-with-right-tick text-start">
                  <li>
                    <span className="c-fw-600">Setup – </span>Firstly, the
                    entire ergonomics is designed to make any layman use it
                    efficiently. The dashboard is customised so that people from
                    a non-accounting background can also use it effectively.
                    Also, it’s as simple as signing up and using it. Offline,
                    conventional, on the other hand, needs to be installed on
                    every computer.
                  </li>
                  <li>
                    <span className="c-fw-600">Accessibility – </span>As
                    mentioned above, Non-cloud based software can only be
                    accessed from the computer or desktop it’s installed in.
                    Giddh’s cloud software, on the other hand, can be accessed
                    from anywhere and on any device.
                  </li>
                  <li>
                    <span className="c-fw-600">Invoices – </span>
                    {isIndia
                      ? `Since invoicing
                      is a core part of accounting processes, so a software such
                      as Giddh which helps you customise invoices is better than
                      one which just creates the same ones repetitively. You can
                      also stop worrying about GSTs in your invoices since they’ll
                      be calculated automatically.`
                      : null}
                    {isAE || isUK || isGlobal
                      ? `Since invoicing is a core part of accounting processes,
                       so a software such as Giddh which helps you customise
                        invoices is better than one which just creates the same 
                        ones repetitively. You can also stop worrying about VATs 
                        in your invoices since they’ll be calculated automatically.`
                      : null}
                  </li>
                  <li>
                    <span className="c-fw-600">Customer support - </span>You
                    also get the benefit of 24*7 customer support through chat
                    or phone calls for resolving any of your problems. All your
                    doubts are easily solved by experts.
                  </li>
                  <li>
                    <span className=" c-fw-600">Cost-expensive – </span>
                    {isIndia
                      ? `Instead of
                    the hefty one-one time fee, you can choose the smart-priced
                    plans of Giddh designed for your convenience. You can choose
                    from the basic free plan, the moderate Rs. 800 per
                    organisation per year plan or the premium Rs. 4000 per
                    organisation per year plan. Here are the details: `
                      : null}
                    {isAE || isUK || isGlobal
                      ? `Instead of the hefty one-one time fee, you can choose the 
                    smart-priced plans of Giddh designed for your convenience. 
                    You can choose the basic free plan for checking the trial and after that `
                      : null}

                    <a href={link + "/pricing"}> click here</a>
                  </li>
                </ul>
              </div>
              <span
                className="text-decoration-underline c-fw-600 text-center col-dark read-more-text cursor-pointer"
                onClick={() =>
                  readmoreAction((readmoreDisplay) => !readmoreDisplay)
                }
              >
                {readMoreStatus ? "Read Less" : "Read More..."}
              </span>
            </div>
          </section>
        </section>
        <section className="container-fluid features__suggestion_container" aria-labelledby="suggestion-heading">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center features__sub_heading_container--pull-top">
                <figure>
                  <img
                    src="/img/suggestion.svg"
                    alt="Illustration representing suggestions for Cloud Accounting Software"
                    className="features__sub_heading_container--banner_img"
                    width="200"
                    height="auto"
                  />
                </figure>
                <h2 id="suggestion-heading" className="c-fs-3 col-grey-deep c-fw-400 mb-3 mt-4">
                  People interested in{" "}
                  <span className="col-blue">Cloud Accounting Software</span>{" "}
                  also looked at
                </h2>
                <div className="features__suggestion_container__links">
                  <a href={link + "/all-features"} className="col-blue" aria-label="View all features of Cloud Accounting Software">
                    All features
                  </a>
                  <a
                    href={link + "/multi-user-accounting-software"}
                    className="border-left col-blue"
                    aria-label="Learn about multi-user accounting software"
                  >
                    Share Data
                  </a>
                  <a
                    href={link + "/multi-currency-accounting-software"}
                    className="border-left col-blue"
                    aria-label="Learn about multi-currency accounting software"
                  >
                    Multi-Currency
                  </a>
                  <a
                    href={link + "/invoice-software"}
                    className="border-left col-blue"
                    aria-label="Learn about invoicing software"
                  >
                    Invoicing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Faqs faq={faq} />
      </div>
    </>
  );
};
export default anywhereAnytime;
