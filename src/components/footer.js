import { useEffect, useState } from "react";
import { getBucketName, getS3BaseUrl, getAppVersion } from "../utils/s3Config";

const Footer = (path) => {
  const link = path.path;
  const isUK = link.isUK;

  // Get Current Year
  const date = new Date();
  const year = date.getFullYear();

  const [windowsApp, setWindowsApp] = useState("");
  const [macApp, setMacApp] = useState("");

  useEffect(() => {
    getAppVersion("win", setWindowsApp, setMacApp);
    getAppVersion("mac", setWindowsApp, setMacApp);
  }, []);

  return (
    <div className="footer py-5">
      <footer>
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-xl-auto col-lg-4 col-md-6 col-12 flex-grow-1">
              <div className="d-flex">
                <div className="d-flex flex-column gap-3 text-dark">
                  <h3 className="c-fs-4 c-fw-600">Quick Links</h3>
                  <ul className="footer-list list-unstyled mb-3">
                    <li>
                      <a href={link.linkPrefix + "/pricing"}>Pricing</a>
                    </li>
                    <li>
                      <a href={link.linkPrefix + "/about"}>About</a>
                    </li>
                    <li>
                      <a href="https://giddh.com/blog">Blog</a>
                    </li>
                    <li>
                      <a href="https://giddh.com/api">API Documentation</a>
                    </li>
                    <li>
                      <a href={link.linkPrefix + "/privacy-policy"}>
                        Privacy Policy
                      </a>
                    </li>
                    {/* <li>
                      <a
                        target="_blank"
                        href="https://apply.workable.com/walkover/"
                      >
                        Work With Us
                      </a>
                    </li> */}
                    <li>
                      <a href={link.linkPrefix + "/affiliate"}>
                        Affiliate With Us
                      </a>
                    </li>
                    <li>
                      <a href={link.linkPrefix + "/terms"}>Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-auto col-lg-4 col-md-6 col-12 flex-grow-1">
              <div className="d-flex flex-column gap-3">
                <h3 className="c-fs-4 c-fw-600">Features</h3>
                <ul className="footer-list list-unstyled mb-3">
                  <li>
                    <a href={link.linkPrefix + "/cloud-accounting-software"}>
                      Cloud Accounting Software
                    </a>
                  </li>
                  <li>
                    <a href={link.linkPrefix + "/security"}>
                      Security
                    </a>
                  </li>
                  <li>
                    <a href={link.linkPrefix + "/contacts"}>
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a href={link.linkPrefix + "/small-business-bookkeeping-software"}>
                      Bookkeeping Software
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-auto col-lg-4 col-md-6 col-12 flex-grow-1">
              <div className="d-flex flex-column gap-3">
                <h3 className="c-fs-4 c-fw-600">Download</h3>
                <div>
                  <p>Mobile Apps</p>
                  <ul className="list-unstyled d-flex gap-3">
                    <li>
                      <a
                        className="download-icon"
                        href="https://play.google.com/store/apps/details?id=com.app.Giddh"
                        target="_blank"
                      >
                        <img alt="android icon" src="/img/androide_icon.svg" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="download-icon"
                        href="https://apps.apple.com/in/app/giddh-books-that-make-sense/id1491003438"
                        target="_blank"
                      >
                        <img alt="ios icon" src="/img/mac_icon.svg" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p>Desktop Apps</p>
                  <ul className="list-unstyled d-flex gap-3">
                    <li>
                      <a
                        className="download-icon "
                        href={`${getS3BaseUrl()}/${getBucketName()}/giddh Setup ${windowsApp}.exe`}
                      >
                        <img
                          src="/img/window-icon.svg"
                          alt="Download Windows Giddh App icon"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className="download-icon rounded-circle"
                        href={`${getS3BaseUrl()}/${getBucketName()}/giddh-${macApp}.dmg`}
                      >
                        <img
                          src="/img/mac_icon.svg"
                          alt="Download Mac Giddh App icon"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-auto col-lg-4 col-md-6 col-12 flex-grow-1">
              <div className="d-flex flex-column gap-3">
                <h3 className="c-fs-4 c-fw-600">Compare</h3>
                <ul className="footer-list list-unstyled mb-3">
                  <li>
                    <a href={link.linkPrefix + "/zoho-vs-giddh"}>
                      Giddh vs Zoho
                    </a>
                  </li>
                  <li>
                    <a href={link.linkPrefix + "/tally-vs-giddh"}>
                      Giddh vs Tally
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-auto col-lg-4 col-md-6 col-12 flex-grow-1">
              <h3
                className="list-unstyled d-flex flex-column gap-2 c-fs-4 c-fw-600"
                id="footer-contact"
              >
                Contact Us
              </h3>
              <div>
                <div className="footer-dpn mb-3"></div>
                <ul className="footer-list list-unstyled class">
                  <li className="widget_text widget widget_custom_html">
                    <div className="textwidget custom-html-widget">
                      <ul className="footer-list list-unstyled class">
                        <li>
                          { isUK ? "Sales/Support: " : "Sales: " }
                          <a href={isUK ? "mailto:hello@giddh.com" : "mailto:sales@giddh.com"} className="cf_email">
                            { isUK ? "hello@giddh.com" : "sales@giddh.com" }
                          </a>
                        </li>
                        {
                          !isUK && (
                          <li className="mt-3">
                            Support:{" "}
                            <a
                              href="mailto:hello@giddh.com"
                              className="cf_email"
                            >
                              hello@giddh.com
                            </a>
                          </li>
                          )
                        }
                      </ul>
                      <p className="contact-link mt-3">
                        <a
                          href={link.linkPrefix + "/contact-us"}
                          className="col-primary text-decoration-underline"
                        >
                          Contact Us
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="mt-3 mb-1">Address</p>
              <address className="m-0">
                  5th Floor, Wing B, LIC Tower, <br></br>
                  28-29-30, PU - 03, Scheme No. 54, <br></br>
                  Indore, Madhya Pradesh, 452011.
              </address>
            </div>
          </div>
          <div className="d-flex mt-4 copyright-text ps-0">
            <div className="widget_text widget widget_custom_html list-unstyled class">
              <div className="textwidget custom-html-widget">
                Copyright 2008-{year}, Walkover Technologies Pvt Ltd | All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
