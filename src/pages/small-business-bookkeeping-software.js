import { useEffect, useState } from "react";
import Faqs from "@/components/faq";
import faqs from '../data/faqs.json';

const smallBusinessBookkeepingSoftware = (path) => {
  const linkPath = path.path;
  const isGlobal = linkPath.isGlobal;
  const isIndia = linkPath.isIndia
  const isAE = linkPath.isAE;
  const isUK = linkPath.isUK;
  const link = linkPath.linkPrefix;
  const [faq, setFaq] = useState([])
  const [readMoreParagraphStatus1, showMoreParagraph1] = useState(false);
  const [readMoreParagraphStatus2, showMoreParagraph2] = useState(false);
  const [readMoreParagraphStatus3, showMoreParagraph3] = useState(false);
  const [readMoreParagraphStatus4, showMoreParagraph4] = useState(false);
  const [readMoreParagraphStatus5, showMoreParagraph5] = useState(false);

  useEffect(() => {
    appendScript("https://assets.calendly.com/assets/external/widget.js", true);
    appendLink("https://assets.calendly.com/assets/external/widget.css");
    setFaq(faqs['small-business-bookkeeping-software'])
  }, []);
  return (
    <>
      <div className="features">
        <section className="container-fluid" aria-labelledby="dashboard-heading">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h1 id="dashboard-heading" className="heading col-primary c-fw-600 mb-4">
                  {(isGlobal || isIndia) && "Small business bookkeeping software"}
                  {(isUK || isAE) && "Free small business bookkeeping software"}
                </h1>
                <p className="col-grey c-fs-5 mb-5">
                  {isGlobal && "Giddh Online Bookkeeping Software is your go-to solution for managing business finances with ease. Track transactions, stay tax-compliant in your region, and save time with an intuitive, cloud-based bookkeeping app. Plus, with a free basic version available, it’s an excellent choice for small businesses everywhere."}
                  {isIndia && "Giddh Online Bookkeeping Software is the ultimate solution for simplifying your business finances. Manage accounts, stay GST-compliant, and save time with the best bookkeeping app. Plus, it offers a basic version for free, making it an ideal choice for small businesses."}
                  {isUK && "Giddh Online Bookkeeping Software is the perfect solution for UK businesses looking to simplify their finances. Easily manage accounts, stay HMRC VAT-compliant with real-time VAT filing, and save time with an intuitive bookkeeping app. Plus, our basic version is free, making it the ideal choice for small businesses and startups."}
                  {isAE && "Giddh Online Bookkeeping Software helps you manage your finances effortlessly. Track income and expenses, and streamline your accounting—all in one powerful app. Best of all, our basic version is free, making it perfect for small businesses and startups in the UAE."}
                </p>
                <div className="features__heading_container__links">
                  <a
                    href="#"
                    className="download_free_btn me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#downloadFree"
                    aria-label="Download the free version of Giddh Dashboard"
                  >
                    Download Free
                  </a>
                  <a
                    href="#"
                    className="col-blue"
                    onClick={() => Calendly.initPopupWidget({ url: 'https://calendly.com/sales-accounting-software/talk-to-sale' })}
                    aria-label="Schedule a demo with Giddh"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
              <div className="col-lg-5 order-lg-1 order-0 position-relative">
                <figure className="text-end">
                  <img
                    src="/img/feature-gallery-icons/dashboard-banner.svg"
                    alt="Giddh Dashboard Banner Image showcasing the dashboard interface"
                    width="400"
                    height="300"
                  />
                  <img
                    src="/img/all-features-cloud_icon.svg"
                    alt="Illustration of cloud features related to Giddh Dashboard"
                    className="features__heading_container__right_banner_img"
                    width="90%"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid features__sub_heading_container">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center features__sub_heading_container--pull-top">
                <h3 className="sub-heading col-primary c-fw-600 mb-3" role="heading" aria-level="2">
                  {isGlobal && "Key Bookkeeping Software Features Every Small Business Needs"}
                  {isIndia && "Top Features of Bookkeeping Software for Small Businesses"}
                  {isUK && "Essential Bookkeeping Software Features for Small Businesses"}
                  {isAE && "Must-Have Features in Bookkeeping Software for Small Businesses"}
                </h3>
                <p className="c-fs-4 mb-5">
                  {isGlobal && "A smart bookkeeping solution should be tax-compliant, mobile-friendly, and support e-invoicing and WhatsApp invoicing for seamless payments. It should handle unlimited users and include tools for inventory, project, branch, and warehouse management. With essential reports like trial balance, profit & loss, and bank statements, businesses can manage finances effortlessly."}
                  {isIndia && "A good bookkeeping software should be GST-compliant, offer a mobile app, and support e-invoicing and WhatsApp invoicing for easy billing. It should allow unlimited users and include inventory, project, branch, and warehouse management. Key financial reports like trial balance, profit & loss, bank statements, and day book ensure clear records, making bookkeeping simple and efficient for small businesses."}
                  {isUK && "A reliable bookkeeping software should be VAT-compliant, provide a mobile app, and support e-invoicing and WhatsApp invoicing for hassle-free billing. It should allow unlimited users and include features like inventory, project, branch, and warehouse management. With essential reports like trial balance, profit & loss, bank statements, and day book, businesses can keep their finances organized effortlessly."}
                  {isAE && "The best bookkeeping software ensures VAT compliance, offers a mobile app, and enables e-invoicing and WhatsApp invoicing for quick transactions. It supports unlimited users and comes with inventory, project, branch, and warehouse management features. With key financial reports like trial balance, profit & loss, and bank statements, businesses can simplify their bookkeeping with ease."}
                </p>
                <a href={link + '/signup'} className="btn-link-purple" aria-label="Start your trial for the accounting dashboard">
                  Start Your Trial
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid features__description_container mt-5" role="region" aria-labelledby="features-description">
          <h2 id="features-description" className="visually-hidden">Features Description</h2>
          <div className="container">
            <div className="row mb-5 pb-5 align-items-start features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    {isGlobal && "Custom Tax Reports Tailored to Your Country's Regulations"}
                    {isIndia && "GST compliant"}
                    {isUK && "HMRC VAT compliant"}
                    {isAE && "VAT-Support Bookkeeping Software for UAE Businesses"}
                  </h4>
                  {isGlobal && (
                    <>
                      <div>
                        <p>Giddh offers customizable tax reports to match the tax regulations of any country. Whether you need VAT, GST, or other tax reports, Giddh adapts to your local requirements, ensuring accurate compliance.</p>
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
                        <p
                          style={{
                            display: readMoreParagraphStatus1 ? "block" : "none",
                          }}
                        >
                          With flexible tax settings, businesses can customize reports as per their country’s rules and stay tax-ready effortlessly.
                        </p>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                  {isIndia && (
                    <>
                      <div>
                        <p>Managing GST compliance is easy with Giddh, a free bookkeeping software designed for small businesses. It helps businesses track and view GSTR reports effortlessly and ensures accurate tax calculations.</p>
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
                        <p
                          style={{
                            display: readMoreParagraphStatus1 ? "block" : "none",
                          }}
                        >
                           With direct GST filing from Giddh, businesses can save time and stay compliant without any hassle.
                        </p>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                  {isUK && (
                    <>
                      <div>
                        <p>Stay on top of your VAT obligations with Giddh, an HMRC-compliant bookkeeping software designed for UK businesses. It allows you to track VAT payments, monitor delays, generate VAT reports, and file VAT returns in real-time directly to HMRC.</p>
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
                        <p
                          style={{
                            display: readMoreParagraphStatus1 ? "block" : "none",
                          }}
                        >
                          With Giddh, VAT compliance becomes effortless, helping businesses avoid penalties and stay financially organized.
                        </p>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                  {isAE && (
                    <>
                      <div>
                        <p>A UAE VAT-Supportbookkeeping software designed to help businesses stay tax-ready. It allows you to view VAT reports as per UAE FTA regulations.</p>
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
                        <p
                          style={{
                            display: readMoreParagraphStatus1 ? "block" : "none",
                          }}
                        >
                          With real-time insights and automated calculations, Giddh simplifies VAT reporting and ensures accuracy.
                        </p>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                  {/* {isIndia && "Managing GST compliance is easy with Giddh, a free bookkeeping software designed for small businesses. It helps businesses track and view GSTR reports effortlessly and ensures accurate tax calculations. With direct GST filing from Giddh, businesses can save time and stay compliant without any hassle."} */}
                  {/* {isUK && "Stay on top of your VAT obligations with Giddh, an HMRC-compliant bookkeeping software designed for UK businesses. It allows you to track VAT payments, monitor delays, generate VAT reports, and file VAT returns in real-time directly to HMRC. With Giddh, VAT compliance becomes effortless, helping businesses avoid penalties and stay financially organized."} */}
                  {/* {isAE && "A UAE VAT-Supportbookkeeping software designed to help businesses stay tax-ready. It allows you to view VAT reports as per UAE FTA regulations. With real-time insights and automated calculations, Giddh simplifies VAT reporting and ensures accuracy."} */}

                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={isIndia ? '/img/feature-gallery-icons/networth.svg' : (isAE ? '/img/feature-gallery-icons/networth-ae.webp' : '/img/feature-gallery-icons/networth-uk.svg')}
                    className="img-fluid"
                    alt="Net worth representation for accounting dashboard"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-start features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    {isGlobal && "Finance Management On Mobile"}
                    {isIndia && "Smart Mobile Accounting App"}
                    {isUK && "Mobile Access to Finances"}
                    {isAE && "Accounting at Your Fingertips"}
                  </h4>
                  {isGlobal && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus2 ? " --read-more" : "")
                        }
                      >
                        <p>
                          GIDDH mobile ensures you always have access to your business finances, no matter where you are.
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

                        <div
                          style={{
                            display: readMoreParagraphStatus2 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <li>Mobile Access – View and manage accounts on any device.</li>
                            <li>Live Updates – Get real-time reports and insights.</li>
                            <li>Seamless Invoicing – Send and track invoices effortlessly.</li>
                            <li>Expense Tracking – Record and categorize expenses instantly.</li>
                            <li>Financial Management – Monitor payments and improve cash flow.</li>
                            <li>Cloud Security – Keep your data safe and encrypted.</li>
                            <li>Smart Insights – Make better business decisions.</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                  {isIndia && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus2 ? " --read-more" : "")
                        }
                      >
                        <p>
                          GIDDH mobile makes accounting effortless, giving you full control of your finances wherever you are.
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

                        <div
                          style={{
                            display: readMoreParagraphStatus2 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <li>Access Anywhere – Stay connected without needing a desktop</li>
                            <li>Real-Time Updates – Get instant financial data and reports</li>
                            <li>Fast Invoicing – Create, send, and track invoices on the go</li>
                            <li>Expense Management – Capture and log expenses in real time</li>
                            <li>Cash Flow Tracking – Monitor payments and dues easily</li>
                            <li>Secure Cloud Storage – Protect your financial data with encryption</li>
                            <li>Business Insights – Make smarter financial decisions instantly</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                  {isUK && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus2 ? " --read-more" : "")
                        }
                      >
                        <p>With GIDDH mobile, you can track and manage your business finances from anywhere with ease.</p>
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

                        <div
                          style={{
                            display: readMoreParagraphStatus2 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <li>Anywhere Access – No need for a desktop, manage accounts on the move</li>
                            <li>Live Financial Data – Stay updated with real-time reports</li>
                            <li>Instant Invoicing – Send invoices and track payments anytime</li>
                            <li>Expense Logging – Record and organize expenses instantly</li>
                            <li>Better Cash Flow Control – Stay on top of dues and payments</li>
                            <li>Cloud Security – Keep financial records safe and backed up</li>
                            <li>Data-Driven Decisions – Gain insights to grow your business</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                  {isAE && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus2 ? " --read-more" : "")
                        }
                      >
                        <p>GIDDH mobile puts your business finances at your fingertips, making accounting simpler and faster.</p>
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

                        <div
                          style={{
                            display: readMoreParagraphStatus2 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <li>Manage Finances Anywhere – No need for a desktop</li>
                            <li>Live Financial Reports – Access real-time data anytime</li>
                            <li>Instant Invoicing – Send and track invoices on the go</li>
                            <li>Quick Expense Logging – Capture and organize expenses effortlessly</li>
                            <li>Improved Cash Flow Tracking – Stay ahead of payments and dues</li>
                            <li>Secure Cloud Storage – Keep your data protected and backed up</li>
                            <li>Smarter Business Insights – Make informed financial decisions</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/totaloverdue.svg"
                    className="img-fluid"
                    alt="Summary of monthly overdues in accounting dashboard"
                  />
                </figure>
              </div>
            </div>

            <div className="row mb-5 pb-5 align-items-start features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    {isGlobal && "Seamless Inventory Management for Small Businesses"}
                    {isIndia && "Simplify Stock Control with Smart Inventory Management"}
                    {isUK && "Track, Manage, and Optimize Your Inventory Effortlessly"}
                    {isAE && "Efficient Inventory Tracking for Better Business Growth"}
                  </h4>
                  {isGlobal && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus3 ? " --read-more" : "")
                        }
                      >
                        <p>A complete solution for tracking inventory, managing warehouses, and handling financial reports in one place. Stay organized and make data-driven decisions with ease.</p>
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

                        <div
                          style={{
                            display: readMoreParagraphStatus3 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <li>Smart Inventory Tracking – Get real-time stock visibility across all branches.</li>
                            <li>Multi-Warehouse Management – Easily track stock movement between warehouses.</li>
                            <li>Inventory Adjustments – Fix stock errors, manage returns, and update damages effortlessly.</li>
                            <li>Real-Time Financial Reports – Generate instant reports for stock, sales, and accounts.</li>
                            <li>Tax & Pricing Customization – Apply different tax rules and pricing for each branch.</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                  {isIndia && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus3 ? " --read-more" : "")
                        }
                      >
                        <p>Manage your inventory, warehouses, and branches seamlessly with advanced bookkeeping features. Stay updated with real-time stock tracking, easy adjustments, and instant financial reports.</p>
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

                        <div
                          style={{
                            display: readMoreParagraphStatus3 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <li>Real-Time Inventory Tracking – Monitor stock levels, purchases, and sales with live updates.</li>
                            <li>Warehouse Management – Easily manage multiple warehouses and transfer stock seamlessly.</li>
                            <li>Stock Adjustments – Update inventory records for returns, damages, and corrections.</li>
                            <li>Instant Reports – Generate real-time reports on inventory, sales, and financials.</li>
                            <li>Custom Tax & Pricing – Configure tax and pricing structures based on branch locations.</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                  {isUK && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus3 ? " --read-more" : "")
                        }
                      >
                        <p>Take full control of your business inventory with a bookkeeping system that tracks stock, manages warehouses, and customizes pricing for multiple locations.</p>
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

                        <div
                          style={{
                            display: readMoreParagraphStatus3 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <li>Track Inventory in Real Time – Monitor stock, sales, and purchases with up-to-date records.</li>
                            <li>Multi-Warehouse Support – Manage multiple warehouses and move stock effortlessly.</li>
                            <li>Stock Corrections – Adjust inventory for damaged, returned, or misplaced items.</li>
                            <li>Detailed Reporting – Access real-time reports on inventory, sales, and finances.</li>
                            <li>Branch-Wise Tax & Pricing – Customize tax rates and pricing for different branches.</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                  {isAE && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus3 ? " --read-more" : "")
                        }
                      >
                        <p>Improve efficiency with a bookkeeping software that integrates inventory, warehouse, and branch management. Gain better visibility and control over stock movements and tax compliance.</p>
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

                        <div
                          style={{
                            display: readMoreParagraphStatus3 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <li>Live Inventory Monitoring – Stay updated on stock movement, purchases, and sales in real time.</li>
                            <li>Warehouse Stock Control – Manage stock transfers and warehouse inventory with ease.</li>
                            <li>Stock Modification – Adjust inventory records for discrepancies, returns, or damages.</li>
                            <li>Comprehensive Reports – Get instant insights into inventory and sales performance.</li>
                            <li>Branch-Specific Tax & Pricing – Set up tax structures and pricing variations per location.</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/expense-report.svg"
                    className="img-fluid"
                    alt="Expense tracking in accounting dashboard"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-start features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    {isGlobal && "Comprehensive Reports for Smarter Business Management"}
                    {isIndia && "Get Accurate Financial Reports Instantly"}
                    {isUK && "Instant Business Reports for Smarter Decision-Making"}
                    {isAE && "Rack Your Finances with Advanced Reporting Tools"}
                  </h4>
                  {isGlobal && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus4 ? " --read-more" : "")
                        }
                      >
                        <p>GIDDH provides free bookkeeping software designed to help small businesses stay on top of their financial records with in-depth reporting tools.</p>
                        <span
                          className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                          style={{
                            display: readMoreParagraphStatus4 ? "none" : "block",
                          }}
                          onClick={() =>
                            showMoreParagraph4((readmoreDisplay) => !readmoreDisplay)
                          }
                        >
                          Read More...
                        </span>

                        <div
                          style={{
                            display: readMoreParagraphStatus4 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <li>Trial Balance Report – Ensures accurate financial balancing.</li>
                            <li>Balance Sheet Report – Gives a clear picture of assets and liabilities.</li>
                            <li>Profit & Loss Report – Helps measure business profitability.</li>
                            <li>Day Book Report – Records all daily transactions.</li>
                            <li>Columnar Report – Presents structured financial data for better insights.</li>
                            <li>Customer & Vendor Reports – Monitors business transactions efficiently.</li>
                            <li>Sales Register – Tracks every sales entry systematically.</li>
                            <li>Purchase Register – Keeps records of all purchases for financial accuracy.</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                  {isIndia && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus4 ? " --read-more" : "")
                        }
                      >
                        <p>GIDDH offers free bookkeeping software designed for small businesses, providing essential financial reports to track and manage business performance efficiently.</p>
                        <span
                          className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                          style={{
                            display: readMoreParagraphStatus4 ? "none" : "block",
                          }}
                          onClick={() =>
                            showMoreParagraph4((readmoreDisplay) => !readmoreDisplay)
                          }
                        >
                          Read More...
                        </span>

                        <div
                          style={{
                            display: readMoreParagraphStatus4 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <p>Key Reporting Features:</p>
                            <li>Trial Balance Report – View all account balances for financial accuracy.</li>
                            <li>Balance Sheet Report – Get a snapshot of assets, liabilities, and equity.</li>
                            <li>Profit & Loss Report – Analyze revenue and expenses to track profitability.</li>
                            <li>Day Book Report – Record daily transactions for better financial tracking.</li>
                            <li>Columnar Report – View categorized financial data in a structured format.</li>
                            <li>Customer & Vendor Reports – Monitor transactions with customers and suppliers.</li>
                            <li>Sales Register – Keep track of all sales transactions efficiently.</li>
                            <li>Purchase Register – Maintain records of all purchases for accurate accounting.</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                  {isUK && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus4 ? " --read-more" : "")
                        }
                      >
                        <p>GIDDH’s free bookkeeping software is built for small businesses, offering key financial reports to help monitor and manage business performance.</p>
                        <span
                          className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                          style={{
                            display: readMoreParagraphStatus4 ? "none" : "block",
                          }}
                          onClick={() =>
                            showMoreParagraph4((readmoreDisplay) => !readmoreDisplay)
                          }
                        >
                          Read More...
                        </span>

                        <div
                          style={{
                            display: readMoreParagraphStatus4 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <li>Trial Balance Report – Ensures all accounts are balanced.</li>
                            <li>Balance Sheet Report – Provides a financial overview of assets and liabilities.</li>
                            <li>Profit & Loss Report – Tracks business revenue and expenses.</li>
                            <li>Day Book Report – Records daily financial transactions.</li>
                            <li>Columnar Report – Presents financial data in a structured format.</li>
                            <li>Customer & Vendor Reports – Helps track supplier and client transactions.</li>
                            <li>Sales Register – Logs all sales for accurate financial tracking.</li>
                            <li>Purchase Register – Keeps a detailed record of all business purchases.</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                  {isAE && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus4 ? " --read-more" : "")
                        }
                      >
                        <p>GIDDH offers free bookkeeping software with powerful financial reports, making business accounting simple and efficient for small businesses.</p>
                        <span
                          className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                          style={{
                            display: readMoreParagraphStatus4 ? "none" : "block",
                          }}
                          onClick={() =>
                            showMoreParagraph4((readmoreDisplay) => !readmoreDisplay)
                          }
                        >
                          Read More...
                        </span>

                        <div
                          style={{
                            display: readMoreParagraphStatus4 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <li>Trial Balance Report – Ensures financial data accuracy.</li>
                            <li>Balance Sheet Report – Displays the financial position of your business.</li>
                            <li>Profit & Loss Report – Helps track profitability and business performance.</li>
                            <li>Day Book Report – Keeps a log of daily transactions.</li>
                            <li>Columnar Report – Organizes financial data for easy analysis.</li>
                            <li>Customer & Vendor Reports – Tracks payments and transactions.</li>
                            <li>Sales Register – Monitors all sales records efficiently.</li>
                            <li>Purchase Register – Maintains records of purchases for accurate accounting.</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={isIndia ? '/img/feature-gallery-icons/revenue.svg' : (isAE ? '/img/feature-gallery-icons/revenue-ae.webp' : '/img/feature-gallery-icons/revenue-uk.svg')}
                    className="img-fluid"
                    alt="Revenue prediction in accounting dashboard"
                  />
                </figure>
              </div>
            </div>

            <div className="row mb-5 pb-5 align-items-start features__description_container--row-odd ">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    {isGlobal && "Customer Portal – Empower Clients with Real-Time Access"}
                    {isIndia && "Customer Portal – Simplify Client Interactions & Billing"}
                    {isUK && "Self-Service Customer Portal for Easy Access & Management"}
                    {isAE && "Seamless Customer Portal for Invoices, Payments & Reports"}
                  </h4>
                  {isGlobal && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus5 ? " --read-more" : "")
                        }
                      >
                        <p>mpower your business with bookkeeping software that features a customer portal for real-time financial tracking, ensuring better transparency and control.</p>
                        <span
                          className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                          style={{
                            display: readMoreParagraphStatus5 ? "none" : "block",
                          }}
                          onClick={() =>
                            showMoreParagraph5((readmoreDisplay) => !readmoreDisplay)
                          }
                        >
                          Read More...
                        </span>

                        <div
                          style={{
                            display: readMoreParagraphStatus5 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <li>Real-Time Statements – Instantly track financial statements and reports.</li>
                            <li>Invoice Handling – View, manage, and download invoices effortlessly.</li>
                            <li>Payment Monitoring – Track payments and outstanding dues in seconds.</li>
                            <li>Multi-User Access – Grant access to customers and accountants securely.</li>
                            <li>Intuitive Dashboard – Manage financial data in a single, streamlined portal.</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
                          style={{
                            display: readMoreParagraphStatus5 ? "block" : "none",
                          }}
                          onClick={() =>
                            showMoreParagraph4((readmoreDisplay) => !readmoreDisplay)
                          }
                        >
                          Read Less
                        </span>
                      </div>
                    </>
                  )}
                  {isIndia && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus5 ? " --read-more" : "")
                        }
                      >
                        <p>Easily manage your business finances with bookkeeping software that includes a customer portal for real-time financial tracking and seamless access to essential data.</p>
                        <span
                          className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                          style={{
                            display: readMoreParagraphStatus5 ? "none" : "block",
                          }}
                          onClick={() =>
                            showMoreParagraph5((readmoreDisplay) => !readmoreDisplay)
                          }
                        >
                          Read More...
                        </span>

                        <div
                          style={{
                            display: readMoreParagraphStatus5 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <li>Real-Time Statements – Instantly view and track financial reports.</li>
                            <li>Invoice Management – Access, download, and manage invoices effortlessly.</li>
                            <li>Payment Tracking – Monitor payments and pending dues with ease.</li>
                            <li>Multi-Member Access – Allow customers, accountants, and team members to collaborate.</li>
                            <li>One-Click Dashboard – View all financial data in a user-friendly portal.</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                  {isUK && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus5 ? " --read-more" : "")
                        }
                      >
                        <p>Small businesses can simplify financial management with bookkeeping software that offers a customer portal for easy access to real-time statements, invoices, and payments.</p>
                        <span
                          className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                          style={{
                            display: readMoreParagraphStatus5 ? "none" : "block",
                          }}
                          onClick={() =>
                            showMoreParagraph5((readmoreDisplay) => !readmoreDisplay)
                          }
                        >
                          Read More...
                        </span>

                        <div
                          style={{
                            display: readMoreParagraphStatus5 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <li>Live Financial Statements – Get instant updates on financial reports.</li>
                            <li>Invoice Access – View, download, and manage invoices in one place.</li>
                            <li>Payment Insights – Keep track of payments and outstanding balances.</li>
                            <li>Multi-User Support – Enable controlled access for customers and accountants.</li>
                            <li>All-in-One Dashboard – Manage everything from a single, intuitive interface.</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                  {isAE && (
                    <>
                      <div
                        className={
                          "row pb-5 align-items-center features__description_container--row-odd" +
                          (readMoreParagraphStatus5 ? " --read-more" : "")
                        }
                      >
                        <p>Keep your finances organized with bookkeeping software that offers a customer portal for real-time insights into invoices, payments, and financial reports.</p>
                        <span
                          className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                          style={{
                            display: readMoreParagraphStatus5 ? "none" : "block",
                          }}
                          onClick={() =>
                            showMoreParagraph5((readmoreDisplay) => !readmoreDisplay)
                          }
                        >
                          Read More...
                        </span>

                        <div
                          style={{
                            display: readMoreParagraphStatus5 ? "block" : "none",
                          }}
                        >
                          <ul className="custom-ul-with-right-tick" role="list">
                            <li>Instant Financial Reports – Get real-time access to financial statements.</li>
                            <li>Invoice Management – View and handle invoices without hassle.</li>
                            <li>Payment Tracking – Easily monitor transactions and outstanding balances.</li>
                            <li>Collaborative Access – Share financial data with customers, accountants, or team members.</li>
                            <li>User-Friendly Dashboard – Access everything in one simple interface.</li>
                          </ul>
                        </div>
                        <span
                          className="pt-3 text-decoration-underline cursor-pointer c-fw-600"
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
                    </>
                  )}
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/financial-ratio.svg"
                    className="img-fluid"
                    alt="Financial ratio analysis in accounting dashboard"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid features__suggestion_container">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center features__sub_heading_container--pull-top">
                <figure>
                  <img
                    src="/img/suggestion.svg"
                    alt="Illustration of people interested in accounting dashboard features"
                    className="features__sub_heading_container--banner_img"
                  />
                </figure>
                <h2 className="c-fs-3 col-grey-deep c-fw-400 mb-3 mt-4">
                  People interested in{" "}
                  <span className="col-blue">Accounting Dashboard </span> also
                  looked at
                </h2>

                <div className="features__suggestion_container__links">
                  <a href={link + "/all-features"} className="col-blue" aria-label="View all features of the accounting dashboard">
                    All features
                  </a>
                  <a href={link + "/multi-user-accounting-software"} className="border-vertical col-blue" aria-label="Learn about multi-user accounting software">
                    Share Data
                  </a>
                  <a href={link + "/multi-currency-accounting-software"} className="border-vertical col-blue">
                    Multi-Currency
                  </a>
                  <a href={link + "/invoice-software"} className="border-vertical col-blue" aria-label="Discover invoicing features">
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

export default smallBusinessBookkeepingSoftware;
