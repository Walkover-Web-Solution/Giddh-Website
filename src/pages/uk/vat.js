import { useState } from "react";
import { usePathname } from "next/navigation";
import { MdRemove, MdAdd } from "react-icons/md";

const ukVAT = () => {
  const [readMoreParagraphStatus1, showMoreParagraph1] = useState(false);
  const [readMoreParagraphStatus2, showMoreParagraph2] = useState(false);
  const [readMoreParagraphStatus3, showMoreParagraph3] = useState(false);

    // To get active route
    const pathname = usePathname();
    const startPath = pathname.split("/");
    let isAE = startPath[1] === "ae";
    let isUK = startPath[1] === "uk";
  return (
    <>
      <section className="container mb-5 ">
        <div className="tax-hero-container  text-center">
          <div className="row d-flex h-100 align-content-end">
            <div className=" d-flex flex-column  ">
              <span className="c-fs-3  col-dark-light fw-light m-3">
                From creating error-free VAT invoice to
              </span>
              <h1 className="heading c-fw-600  col-primary ">
                File your VAT Automatically
              </h1>
            </div>
            <div className="tax-image mt-auto">
              <img
                className="col-12"
                alt="vat"
                src="/img/tax-images/UK-VAT-Background-image.png"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className="filing-tax py-5">
        <div className="container mt-5">
          <div className="text-center">
            <p className="sub-heading c-fs-1 col-primary fw-bold mb-5">
              Advantages of filing VAT with us
            </p>
          </div>

          <div className="row">
            <div className="col">
              <div className="filing-tax-card d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/tax-images/Direct-Filing.svg" />
                <div className="caption text-center">
                  <h3 className="small-heading col-primary c-fw-600">
                    Direct Filing
                  </h3>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    We prepare your VAT return file automatically and do the
                    heavy lifting for you. Now file your Value Added Tax
                    (VAT) directly on portal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="filing-tax d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/tax-images/accurate.svg" />
                <div className="caption text-center">
                  <h3 className="small-heading col-primary c-fw-600">
                    100% Accurate
                  </h3>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    Get 10/10 on accuracy by identifying errors right before
                    submitting your VAT return online with the help of our
                    straightforward error sheet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="filing-tax d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/tax-images/get-notified.svg" />
                <div className="caption text-center">
                  <h3 className="small-heading col-primary c-fw-600">
                    Timely Notifications
                  </h3>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    Frustrated with last-minute tax return stress? With Giddh
                    VAT accounting, you will never miss another deadline or
                    suffer the penalty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {" "}
              <div className="filing-tax d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/tax-images/easy-fast.svg" />
                <div className="caption text-center">
                  <h3 className="small-heading col-primary c-fw-600">
                    Highly Collaborative
                  </h3>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    Be on the same page with your team. With our role based
                    model, you can grant your CA the access to view the relevant
                    VAT tax return data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="filing-tax d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/tax-images/secure-reliable.svg" />
                <div className="caption text-center">
                  <h3 className="small-heading col-primary c-fw-600">
                    Secure & Reliable
                  </h3>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    With 2-factor authentication, industry leading security and
                    OTP verification, your VAT return filing process is secure
                    from the beginning till the end.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="filing-tax d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/tax-images/best-support.svg" />
                <div className="caption text-center">
                  <h3 className="small-heading col-primary c-fw-600">
                    Best in Class Support
                  </h3>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    Stuck somewhere? Count on our friendly and knowledgable
                    support team for your accounting & VAT filing queries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-4 my-4 mx-2 mx-md-0 ">
        <div className="d-flex flex-column gap-4 c-fs-3 text-center ">
          <span>Take charge of your business with Giddh &</span>
          <div className="c-fs-1 col-primary c-fw-600 ">
            Make VAT Return Process Automatic.
          </div>
          <div>
            <a href="/uk/signup" className="c-fs-4 tax-hero-container__try_now_btn">Try Now</a>
          </div>
          <span className="c-fs-4 m-3">
            Cloud Based Accounting Software to File VAT Return Online
          </span>
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
                  Understanding VAT
                </h4>
                <p>
                  The full form of VAT is Value Added Tax. It’s a
                  value-added tax that is levied on many goods and services that
                  are sold for domestic consumption. The VAT is paid by the
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
            <div className="col-md-12 col-lg-6 __image-alignment text-center">
              <figure>
                <img
                  src="\img\tax-images\understanding-vat.svg"
                  className="img-fluid"
                  alt="vat logo"
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
                  and it serves as revenue for the government. VAT replaces the
                  myriad of Value Added Taxes that existed earlier and brings
                  all state and central related taxes under one umbrella. Ever
                  since the VAT bill was introduced, business owners are
                  leveraging the benefits of VAT software for their filing
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
              "row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal" +
              (readMoreParagraphStatus2 ? " --read-more" : "")
            }
          >
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h4 className="col-primary small-heading c-fw-600 mb-3">
                  { isAE ? "UAE" : ( isUK ? "UK" : "") }  VAT Software for business owners
                </h4>
                <p>
                  Presently, many businesses (small, medium, and large scale)
                  are under constant pressure to be the first. And this can only
                  happen when you start focussing on your growth strategy
                  instead of wasting time manually managing accounts and taxes.
                  VAT accounting software is suggested because it can calculate
                  your accounts, file VAT returns online, help with
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
            <div className="col-md-12 col-lg-6 __image-alignment text-center">
              <figure>
                <img
                  src="\img\tax-images\group-5654.svg"
                  className="img-fluid"
                  alt="mobile image with giddh-app"
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
                  VAT software instead of expensive offline tools. It will help
                  you run your business easily and in a better way. All service
                  enterprises, like any other business, will need to submit
                  their VAT revenue records at the end of a month or every four
                  months. VAT software can make life easier in such cases.
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
              "row mb-5 pb-5 align-items-center features__description_container--row-odd" +
              (readMoreParagraphStatus3 ? " --read-more" : "")
            }
          >
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h4 className="col-primary small-heading c-fw-600 mb-3">
                  Benefits of using VAT software:
                </h4>
                <p>
                  When using a VAT online software, it will help business owners
                  be aware of the tax rate that they need to pay, to whom, and
                  the exact dates. VAT software will also help you leverage
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
            <div className="col-md-12 col-lg-6 __image-alignment text-center">
              <figure>
                <img
                  src="\img\tax-images\betnifits.svg"
                  className="img-fluid"
                  alt="vat benifits image"
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
                    When using a VAT software ensure that the company focuses on
                    providing good service to the consumer in terms of
                    professional looking invoices and automated timely
                    reminders, which will lead to efficient VAT returns and all.
                  </p>
                  <p className="mb-3">
                    If you’re into the business of export and importing goods
                    and services then with VAT software you can enjoy the
                    convenience of multi-currency accounting that removes the
                    hassles of having to convert every time a transaction takes
                    place.
                  </p>
                  <p className="mb-3">
                    Entrepreneurs can file data easily when they install
                    accounting software. It will help take care of their
                    finances, inventories, calculation of different types of
                    taxes, bills, and invoices. VAT online software was launched
                    to make the registration and filing process easy, and allow
                    businesses to migrate complex data to an online government
                    portal. Data processing has become quite simple with VAT,
                    tax calculation, registration, and filing.
                  </p>
                  <p className="mb-3">
                    VAT software includes features like VAT return, VAT filing
                    online, and so on, thereby making it easier to calculate
                    taxes and resulting in a simple invoice. VAT online software
                    will automate your tax and other rates according to the
                    company process. Various errors and miscalculations can have
                    a negative influence on your business, it can easily be
                    avoided once you install VAT online software.
                  </p>
                  <p className="mb-3">
                    Time-saving and cost-effective are two significant
                    components that make VAT filing online and VAT return filing
                    online preferable for any goods/services company. A business
                    must keep track of all the invoices and billing information.
                    The software will help you manage payments, therefore making
                    the filing process easy. This will save you much time and
                    money, the VAT software will take on all the finance
                    operations from invoicing to tax filing.
                  </p>
                  <p>
                    VAT online software allows you to access your data, anywhere
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

      <section className="container-fluid features__accordion_container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="accordion" id="accordionAllFeatures">
                {/*============ Accordion #1 ===============*/}
                <h2 className="fw-bold col-primary ps-3">FAQs</h2>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      <span className="me-2 collapse_icon collapse_icon--open">
                        <MdAdd />
                      </span>
                      <span className="me-2 collapse_icon collapse_icon--close">
                        <MdRemove />
                      </span>
                      What is VAT?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      VAT stands for Value-Added Tax. It is a consumption tax
                      imposed on the value added to goods and services at each
                      stage of production or distribution. Unlike a sales tax,
                      which is typically collected only at the final point of
                      sale to the end consumer, VAT is collected at multiple
                      points along the supply chain.
                    </div>
                  </div>
                </div>
                {/*============ Accordion #2 ===============*/}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span className="me-2 collapse_icon collapse_icon--open">
                        <MdAdd />
                      </span>
                      <span className="me-2 collapse_icon collapse_icon--close">
                        <MdRemove />
                      </span>
                      what is the VAT Number?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      When you register for value-added tax (VAT), HMRC issue
                      you with a unique VAT number which identifies your
                      business for tax records and payment purposes. It's also
                      referred to as a VAT registration number (VRN). Your VAT
                      number is unrelated to your unique taxpayer reference or
                      your company number.
                    </div>
                  </div>
                </div>
                {/*============ Accordion #3 ===============*/}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <span className="me-2 collapse_icon collapse_icon--open">
                        <MdAdd />
                      </span>
                      <span className="me-2 collapse_icon collapse_icon--close">
                        <MdRemove />
                      </span>
                      What is VAT Return Filing?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      <p>
                        {" "}
                        VAT Returns filing is the registration of VAT Returns
                        document, which contains all details concerning VAT
                        invoices, payments, and receipts during a specific
                        period. The details that need to be filed in the VAT
                        Returns document are:{" "}
                      </p>
                      <ul>
                        <li>Total sales</li>
                        Total purchases
                        <li>Output VAT (paid by customers)</li>
                        <li>Input Tax Credit (ITC paid by businesses)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*============ Accordion #4 ===============*/}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <span className="me-2 collapse_icon collapse_icon--open">
                        <MdAdd />
                      </span>
                      <span className="me-2 collapse_icon collapse_icon--close">
                        <MdRemove />
                      </span>
                      What are the benefits of using Giddh software for VAT
                      Returns Filing?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      <p>
                        There are several benefits to using the Giddh software
                        for VAT Returns Filing:
                      </p>
                      <ul>
                        <li>
                          Prepare your VAT return file automatically on the
                          portal
                        </li>
                        <li>
                          100% accurate filing with zero chances of errors
                        </li>
                        <li>
                          Notifications of deadlines so that you don’t miss any
                          deadline
                        </li>
                        <li>
                          Collaborate with your team and allow access of VAT
                          data to your CA
                        </li>
                        <li>
                          Secure and reliable with 2-factor authentication and
                          OTP verification
                        </li>
                        <li>Complete support for all VAT-related issues</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ukVAT;
