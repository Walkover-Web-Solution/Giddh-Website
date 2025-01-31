import { useEffect, useState } from "react";
import Faqs from "@/components/faq";
import faqs from '../../data/faqs.json';

const eInvoice = () => {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    appendScript("https://assets.calendly.com/assets/external/widget.js", true);
    appendLink("https://assets.calendly.com/assets/external/widget.css");
    setFaq(faqs['e-invoice']);
  }, []);

  return (
    <div className="e-invoice">
      <section className="container-fluid">
        <div className="container features__heading_container">
          <div className="row">
            <div className="col-lg-7 order-lg-0 order-1">
              <h1 className="heading col-primary c-fw-600 mb-4">
                Make Your Business E-Invoice Ready
              </h1>
              <p className="col-grey c-fs-3 mb-5">
              Now E-Invoice is mandatory from 1st August 2023 for the business whose turnover is INR 5 crore+. GIDDH is supporting e-invoice from 1st April 2021 
              </p>
              <div className="features__heading_container__links">
                <a
                  href="#"
                  className="download_free_btn me-4"
                  data-bs-toggle="modal"
                  data-bs-target="#downloadFree"
                  role="button"
                >
                  Download Free
                </a>
                <a href="#" className="col-blue" onClick={() => Calendly.initPopupWidget({url: 'https://calendly.com/sales-accounting-software/talk-to-sale'})} role="button">
                  Schedule Demo
                </a>
              </div>
            </div>
            <div className="col-lg-5 order-lg-1 order-0 position-relative">
              <figure className="text-end">
                <img
                  src="/img/feature-gallery-icons/e-invoice-banner.svg"
                  width="400"
                  height="300"
                  alt="E-invoice banner promoting e-invoicing services"
                />
                <img
                  src="/img/all-features-cloud_icon.svg"
                  alt="Illustration of cloud features related to e-invoicing"
                  className="features__heading_container__right_banner_img"
                  width="90%"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid  e-invoice__first_section" aria-labelledby="eInvoiceHeading">
        <div className="container">
          <h2 id="eInvoiceHeading" className="col-primary sub-heading text-center c-fw-600">
            Why Giddh is the most reliable and smartest e-invoicing solution
            for your business?
          </h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="e-invoice__first_section__card text-center" role="article">
                <figure>
                  <img src="/img/support-1.svg" alt="Icon representing support services" />
                </figure>
                <h3 className="col-primary c-fs-4 c-fw-600">
                  Fast & Reliable
                </h3>
                <p>Less than 3s response time with 99.9% uptime</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="e-invoice__first_section__card text-center" role="article">
                <figure>
                  <img
                    src="/img/smart-secure-1.svg"
                    alt="Icon representing customer support"
                  />
                </figure>
                <h3 className="col-primary c-fs-4 c-fw-600">
                  24*7 Customer Support
                </h3>
                <p>Round-the-clock technical & advisory assistance</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="e-invoice__first_section__card text-center" role="article">
                <figure>
                  <img
                    src="/img/auto-invoice-1.svg"
                    alt="Icon representing a secure platform"
                  />
                </figure>
                <h3 className="col-primary c-fs-4 c-fw-600">
                  Smart & Secured Platform
                </h3>
                <p>Smart user interface. High-grade encryption</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="e-invoice__first_section__card text-center" role="article">
                <figure>
                  <img
                    src="/img/reconciliation-1.svg"
                    alt="Icon representing auto-push of e-invoice"
                  />
                </figure>
                <h3 className="col-primary c-fs-4 c-fw-600">
                  Auto-push of e-invoice
                </h3>
                <p>Push e-invoice automatically at e-invoice portal</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="e-invoice__first_section__card text-center" role="article">
                <figure>
                  <img
                    src="/img/invoice-status-1.svg"
                    alt="Icon representing auto reconciliation"
                  />
                </figure>
                <h3 className="col-primary c-fs-4 c-fw-600">
                  Auto Reconciliation
                </h3>
                <p>
                  One-click reconciliation with e-way bills and e-invoice
                  register
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="e-invoice__first_section__card text-center" role="article">
                <figure>
                  <img
                    src="/img/fast-reliable-1.svg"
                    alt="Icon representing tracking e-invoice status"
                  />
                </figure>
                <h3 className="col-primary c-fs-4 c-fw-600">
                  Track e-invoice Status
                </h3>
                <p>
                  The e-invoice enables real-time tracking of invoices
                  prepared by the supplier
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid e-invoice__second_section" aria-labelledby="benefitsHeading">
        <div className="container">
          <h2 id="benefitsHeading" className="col-primary sub-heading text-center c-fw-600">
            Benefits of e-invoicing with Giddh
          </h2>
          <div className="e-invoice__second_section__benefits_custom_view mt-5" role="list">
            <div className="e-invoice__second_section__benefits_custom_view__row" role="listitem">
              <div className="e-invoice__second_section__benefits_custom_view__row__item" role="listitem">
                Increased Accuracy
              </div>
              <div className="e-invoice__second_section__benefits_custom_view__row__item" role="listitem">
                Real-Time Tracking
              </div>
              <div className="e-invoice__second_section__benefits_custom_view__row__item" role="listitem">
                Reduced Risk of Tax Evasion
              </div>
            </div>
            <div className="e-invoice__second_section__benefits_custom_view__row" role="listitem">
              <div className="e-invoice__second_section__benefits_custom_view__row__item" role="listitem">
                Uniqueness with IRN and QR Code for B2B
              </div>
            </div>
            <div className="e-invoice__second_section__benefits_custom_view__row" role="listitem">
              <div className="e-invoice__second_section__benefits_custom_view__row__item" role="listitem">
                Better Visibility and Transparency
              </div>
              <div className="e-invoice__second_section__benefits_custom_view__row__item" role="listitem">
                Uniqueness with QR Code for B2C
              </div>
              <div className="e-invoice__second_section__benefits_custom_view__row__item" role="listitem">
                Auto-Populated Data in GST
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid  e-invoice__third_section" aria-labelledby="stepsToStartHeading">
        <div className="container">
          <h2 id="stepsToStartHeading" className="col-primary sub-heading text-center c-fw-600 pb-3">
            3 simple steps to start e-invoicing now
          </h2>
          <div className="row align-items-center my-5" role="group" aria-labelledby="stepsList">
            <div className="col-lg-6">
              <ul id="stepsList" aria-label="Steps to start e-invoicing">
                <li className="text-black">Register your business in the e-invoice portal</li>
                <li className="text-black">
                  Create API credentials for GST Suvidha Provider (GSP) for
                  Giddh & login
                </li>
                <li className="text-black">
                  Push your invoices to IRP to get validated, signed
                  e-invoices with IRNs
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <figure>
                <img
                  src="/img/gst-e-invoice-graphic.svg"
                  alt="Illustration showing the process of e-invoicing"
                  className="img-fluid"
                  width="400"
                  height="300"
                />
              </figure>
            </div>
          </div>
          <h2 className="col-primary sub-heading text-center c-fw-600">
            They will be automatically pushed to the e-invoice portal
          </h2>
        </div>
      </section>

      <section className="container-fluid  e-invoice__fourth_section">
        <div className="container px-0">
          <h2 className="col-primary sub-heading c-fw-600 pb-4">
            Make your business ready for the e-invoicing system
          </h2>
          <div className="row">
            <div className="col-12">
              <div className="features__heading_container__links">
                <a
                  href="/signup"
                  className="download_free_btn me-4"
                  aria-label="Sign up for free e-invoicing service"
                >
                  Sign up for free
                </a>
                <a 
                  href="#" 
                  className="col-blue" 
                  onClick={() => Calendly.initPopupWidget({url: 'https://calendly.com/sales-accounting-software/talk-to-sale'})}
                  aria-label="Schedule a demo for e-invoicing"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faqs faq={faq} />
    </div>
  );
};
export default eInvoice;
