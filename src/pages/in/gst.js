import { useState, useEffect } from "react";
import Faqs from "@/components/faq";
import faqs from '../../data/faqs.json';

const gst = (path) => {
  const [readMoreParagraphStatus1, showMoreParagraph1] = useState(false);
  const [readMoreParagraphStatus2, showMoreParagraph2] = useState(false);
  const [readMoreParagraphStatus3, showMoreParagraph3] = useState(false);
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    setFaq(faqs['gst']);
  }, []);

  const link = path.path.linkPrefix;
  return (
    <>
      <section className="container mb-5 ">
        <div className="tax-hero-container text-center" role="banner">
          <div className="row d-flex h-100 align-content-end">
            <div className="d-flex flex-column">
              <h2 className="c-fs-3 col-dark-light fw-light m-3" id="gst-reporting-heading">
                Error-Free GST Reporting for Your Business
              </h2>
              <h1 className="heading c-fw-600  col-primary">GST Software for Filing & Accounting in India</h1>
              <h2 className="c-fs-3">Seamless Integration with Accounting Systems</h2>
            </div>
            <div className="tax-image mt-auto" role="img" aria-label="GST banner image">
              <img
                className="col-12"
                alt="A banner representing GST services with a professional theme"
                src="/img/tax-images/tax-image.webp"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="filing-tax py-5">
        <div className="container mt-5">
          <div className="text-center">
            <p className="sub-heading c-fs-1 col-primary fw-bold mb-5" id="advantages-heading">
              Advantages of filing GSTR with us
            </p>
          </div>

          <div className="row">
            <div className="col">
              <div className="filing-tax-card d-flex flex-column align-items-center gap-4 p-3" role="article">
                <img src="/img/tax-images/Direct-Filing.svg" alt="Icon representing Direct Filing in Giddh Accounting Software" />
                <div className="caption text-center">
                  <h2 className="small-heading col-primary c-fw-600">
                    Direct Filing
                  </h2>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    We prepare your GST return file automatically and do the
                    heavy lifting for you. Now file your Goods and Services Tax
                    (GST) directly on portal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="filing-tax d-flex flex-column align-items-center gap-4 p-3" role="article">
                <img src="/img/tax-images/accurate.svg" alt="Icon representing 100% Accurate results" />
                <div className="caption text-center">
                  <h2 className="small-heading col-primary c-fw-600">
                    100% Accurate
                  </h2>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    Get 10/10 on accuracy by identifying errors right before
                    submitting your GST return online with the help of our
                    straightforward error sheet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="filing-tax d-flex flex-column align-items-center gap-4 p-3" role="article">
                <img src="/img/tax-images/get-notified.svg" alt="Icon representing Timely Notifications" />
                <div className="caption text-center">
                  <h2 className="small-heading col-primary c-fw-600">
                    Timely Notifications
                  </h2>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    Frustrated with last-minute tax return stress? With Giddh
                    GST accounting, you will never miss another deadline or
                    suffer the penalty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {" "}
              <div className="filing-tax d-flex flex-column align-items-center gap-4 p-3" role="article">
                <img src="/img/tax-images/easy-fast.svg" alt="Icon representing Highly Collaborative features" />
                <div className="caption text-center">
                  <h2 className="small-heading col-primary c-fw-600">
                    Highly Collaborative
                  </h2>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    Be on the same page with your team. With our role based
                    model, you can grant your CA the access to view the relevant
                    GST tax return data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="filing-tax d-flex flex-column align-items-center gap-4 p-3" role="article">
                <img src="/img/tax-images/secure-reliable.svg" alt="Icon representing Secure & Reliable services" />
                <div className="caption text-center">
                  <h2 className="small-heading col-primary c-fw-600">
                    Secure & Reliable
                  </h2>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    With 2-factor authentication, industry leading security and
                    OTP verification, your GST return filing process is secure
                    from the beginning till the end.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="filing-tax d-flex flex-column align-items-center gap-4 p-3" role="article">
                <img src="/img/tax-images/best-support.svg" alt="Icon representing Best in Class Support" />
                <div className="caption text-center">
                  <h2 className="small-heading col-primary c-fw-600">
                    Best in Class Support
                  </h2>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    Stuck somewhere? Count on our friendly and knowledgeable
                    support team for your accounting & GST filing queries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 my-4 mx-2 mx-md-0 " aria-labelledby="business-charge-heading">
        <div className="d-flex flex-column gap-4 c-fs-3 text-center ">
          <span id="business-charge-heading">Take charge of your business with Giddh &</span>
          <div className="c-fs-1 col-primary c-fw-600 ">
            Make GST Return Process Automatic.
          </div>
          <div>
            <a href={link + "/signup"} className="c-fs-4 tax-hero-container__try_now_btn" aria-label="Sign up for Giddh GST services">Try Now</a>
          </div>
          <span className="c-fs-4 m-3">
            Cloud Based Accounting Software to File GST Return Online
          </span>
        </div>
      </section>
      <section className="container-fluid tax-return" aria-labelledby="gst-return-collaborators-heading">
        <div className="container">
          <div className="row">
            <div className="tax-return__wrapper d-flex flex-wrap align-items-center">
              <div className="col">
                <h3 id="gst-return-collaborators-heading">GST Return Collaborators</h3>
              </div>
              <div className="col text-center">
                <img width="200" height="70" src="/img/Jio-GST.webp" alt="JIO GST Icon representing collaboration" />
              </div>
              <div className="col">
                <img
                  width="400"
                  height="70"
                  className="tax-return__wrapper__large_img"
                  src="/img/GST.webp" alt="GST Icon representing GST services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid features__description_container mt-5" aria-labelledby="automated-gst-heading">
        <div className="container">
          <h2 id="automated-gst-heading" className="col-primary c-fs-1 c-fw-600 mb-5 pb-4 text-center">Automated GST Calculations and Submissions</h2>
          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom" +
              (readMoreParagraphStatus1 ? " --read-more" : "")
            }
          >
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h4 className="col-primary small-heading c-fw-600 mb-3" id="understanding-gst-heading">
                  Understanding GST
                </h4>
                <p>
                  The full form of GST is Goods and Services tax. It’s a
                  value-added tax that is levied on many goods and services that
                  are sold for domestic consumption. The GST is paid by the
                  customers and it’s simultaneously remitted to the government
                  by the business that is selling the services and goods. This
                  means that the money is generated by the consumers
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
            <div className="col-md-12 col-lg-6 image-alignment text-center">
              <figure>
                <img
                  src="/img/tax-images/understanding-gst.svg"
                  className="img-fluid"
                  alt="Illustration explaining GST"
                  width="auto"
                  height="400"
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
                  and it serves as revenue for the government. GST replaces the
                  myriad of Value Added Taxes that existed earlier and brings
                  all state and central related taxes under one umbrella. Ever
                  since the GST bill was introduced, business owners are
                  leveraging the benefits of GST software for their filing
                  needs.
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
              "row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom" +
              (readMoreParagraphStatus2 ? " --read-more" : "")
            }
          >
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h4 className="col-primary small-heading c-fw-600 mb-3" id="indian-gst-software-heading">
                  Indian GST Software for business owners
                </h4>
                <p>
                  Presently, many businesses (small, medium, and large scale)
                  are under constant pressure to be the first. And this can only
                  happen when you start focussing on your growth strategy
                  instead of wasting time manually managing accounts and taxes.
                  GST accounting software is suggested because it can calculate
                  your accounts, file GST returns online, help with
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
                  Read More...
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 image-alignment text-center">
              <figure>
                <img
                  src="/img/tax-images/group-5654.svg"
                  className="img-fluid"
                  alt="Mobile image with Giddh app"
                  width="auto"
                  height="400"
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
                  financial accounting, ledgers, and so on. If you are running a
                  company, it’s suggested that you use affordable cloud based
                  GST software instead of expensive offline tools. It will help
                  you run your business easily and in a better way. All service
                  enterprises, like any other business, will need to submit
                  their GST revenue records at the end of a month or every four
                  months. GST software can make life easier in such cases.
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
              "row pb-5 align-items-center features__description_container--row-odd" +
              (readMoreParagraphStatus3 ? " --read-more" : "")
            }
          >
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h4 className="col-primary small-heading c-fw-600 mb-3" id="benefits-gst-software-heading">
                  Benefits of using GST software:
                </h4>
                <p>
                  When using a GST online software, it will help business owners
                  be aware of the tax rate that they need to pay, to whom, and
                  the exact dates. GST software will also help you leverage
                  significant advantages like accuracy, speed, cost-saving
                  techniques, as well as providing up-to-date information.
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
                  Read More...
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 image-alignment text-center">
              <figure>
                <img
                  src="/img/tax-images/betnifits.svg"
                  className="img-fluid"
                  alt="Illustration of GST benefits"
                  width="auto"
                  height="400"
                />
              </figure>
            </div>
            <div className="col-12">
              <div className="features__description_container__content">
                <div
                  style={{
                    display: readMoreParagraphStatus3 ? "block" : "none",
                  }}
                >
                  <p className="mb-3">
                    When using a GST software ensure that the company focuses on
                    providing good service to the consumer in terms of
                    professional looking invoices and automated timely
                    reminders, which will lead to efficient GST returns and all.
                  </p>
                  <p className="mb-3">
                    If you’re into the business of export and importing goods
                    and services then with GST software you can enjoy the
                    convenience of multi-currency accounting that removes the
                    hassles of having to convert every time a transaction takes
                    place.
                  </p>
                  <p className="mb-3">
                    Entrepreneurs can file data easily when they install
                    accounting software. It will help take care of their
                    finances, inventories, calculation of different types of
                    taxes, bills, and invoices. GST online software was launched
                    to make the registration and filing process easy, and allow
                    businesses to migrate complex data to an online government
                    portal. Data processing has become quite simple with GST,
                    tax calculation, registration, and filing.
                  </p>
                  <p className="mb-3">
                    GST software includes features like GST return, GST filing
                    online, and so on, thereby making it easier to calculate
                    taxes and resulting in a simple invoice. GST online software
                    will automate your tax and other rates according to the
                    company process. The user can customize the GST based on the
                    SGST and CGST Once the billing and invoicing processes are
                    automated, there is no room for mistakes. Various errors and
                    miscalculations can have a negative influence on your
                    business, it can easily be avoided once you install GST
                    online software.
                  </p>
                  <p className="mb-3">
                    Time-saving and cost-effective are two significant
                    components that make GST filing online and GST return filing
                    online preferable for any goods/services company. A business
                    must keep track of all the invoices and billing information.
                    The software will help you manage payments, therefore making
                    the filing process easy. This will save you much time and
                    money, the GST software will take on all the finance
                    operations from invoicing to tax filing.
                  </p>
                  <p>
                    GST online software allows you to access your data, anywhere
                    and at any time. This is because all your documents are
                    stored in one place, which is easily accessible at any
                    location and at any time. The accessibility feature is an
                    advantage because it allows you to check and verify data,
                    keep track of cash flow, and have a real-time analysis of
                    payments.
                  </p>
                </div>
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
        </div>
      </section>

      <Faqs faq={faq} />
    </>
  );
};
export default gst;
