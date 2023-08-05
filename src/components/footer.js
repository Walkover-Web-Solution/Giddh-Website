import { usePathname } from 'next/navigation'
const Footer = () => {
  // To get active route
  const pathname = usePathname();
  const startPath = pathname.split('/');
  let isIndia = startPath[1] !== 'ae' && startPath[1] !== 'uk';
  let isAE = startPath[1] === 'ae';
  let isUK = startPath[1] === 'uk';

  // Holds Url Prefix country wise
  let link = isIndia ? '' : (isAE ? '/ae' : '/uk');

  // Get Current Year
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer-container py-5">
      <footer>
        <div className="top_footer">
          <div className="container">
            <div className="row row-gap-4">
              <div className="col-xl-3 col-lg-6 col-md-12">
                <div className="d-flex">
                  <div className="d-flex flex-column gap-3 text-dark">
                    <h5>Quick Links</h5>
                    <ul className="footer-list list-unstyled mb-3">
                      <li>
                        <a href={ link + "/pricing"}>Pricing</a>
                      </li>
                      <li>
                        <a href={ link + "/about" }>About</a>
                      </li>
                      <li>
                        <a href="https://giddh.com/blog/">Blog</a>
                      </li>
                      <li>
                        <a href={ link + "privacy-policy" }>Privacy Policy</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://apply.workable.com/walkover/">
                          Work With Us
                        </a>
                      </li>
                      <li>
                        <a href={ link + "/affiliate" }>Affiliate With Us</a>
                      </li>
                      <li>
                        <a href={ link +  "/terms"}>Terms of Use</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-12">
                <div className="d-flex flex-column gap-3">
                  <h5>Download</h5>
                  <div>
                    <p className="">Mobile Apps</p>
                    <ul className="list-unstyled">
                      <li>
                        <a className="download-icon" href="#">
                          <img alt="" src="/img/androide_icon.svg" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="d-flex flex-column gap-3">Desktop Apps</p>
                    <ul className="list-unstyled d-flex gap-3">
                      <li className="">
                        <a className="download-icon " href="#">
                          <img className="" src="/img/window-icon.svg" />
                        </a>
                      </li>
                      <li>
                        <a className="download-icon rounded-circle" href="#">
                          <img src="/img/mac_icon.svg" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-12">
                <h5 className="list-unstyled d-flex flex-column gap-2">
                  Contact Us
                </h5>
                <div>
                  <div className="footer-dpn mb-3">
                    <div className="dropdown btn-group w-100">
                      <button
                        type="button"
                        className="btn btn-down dropdown-toggle country-icon"
                        id="countryDropdown" data-bs-toggle="dropdown" aria-expanded="false"
                      >
                        <img src="/img/earth.svg" alt="earth-icon" /> 

                        { isIndia ? 'IN - India' : ( isAE ? 'UAE - United Arab Emirates' : 'UK - United Kingdom' )}
                      </button>
                      <ul
                        className="dropdown-menu country_dropdown__menu"
                        aria-labelledby="countryDropdown"
                      >
                        <li>
                          <a className={'dropdown-item' + ( isIndia ? ' active' : '' )} href="/">
                            IN - India
                          </a>
                        </li>
                        <li>
                          <a className={'dropdown-item' + ( isAE ? ' active' : '' )} href="/ae">
                            UAE - United Arab Emirates
                          </a>
                        </li>
                        <li>
                          <a className={'dropdown-item' + ( isUK ? ' active' : '' )} href="/uk">
                            UK - United Kingdom
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="footer-list list-unstyled class">
                    <li className="widget_text widget widget_custom_html">
                      <div className="textwidget custom-html-widget">
                        <ul className="footer-list list-unstyled class">
                          <li>
                            Sales :{" "}
                            <a href="#" className="cf_email">
                              sales@giddh.com
                            </a>
                          </li>
                          <li className="mt-3">
                            Support:{" "}
                            <a href="#" className="cf_email">
                              support@giddh.com
                            </a>
                          </li>
                        </ul>
                        <p className="contact-link mt-3">
                          <a href="contact-us" className="col-primary text-decoration-underline c-fw-500">Contact Us</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-12">
                <div className="location">
                  <h5>Locate Us</h5>
                  <div className="location__detail">
                    <h4>Indore</h4>
                    <p>
                      Walkover Web Solutions Pvt Ltd.
                      <br /> 405-406, Capt. C.S. Naidu Arcade,
                      <br /> Near Greater Kailash Hospital, 10/2 Old Palasia,
                      <br /> Indore, Madhya Pradesh, India-452018
                    </p>
                  </div>
                  <div className="location__detail">
                    <h4>USA</h4>
                    <p>
                      USA Superheroes, Inc
                      <br /> Sunset Lake Road, Suite B-2
                      <br /> DE - Delaware
                      <br /> United States of America
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex mt-4 copyright-text">
              <li className="widget_text widget widget_custom_html list-unstyled class">
                <div className="textwidget custom-html-widget ">
                  All rights are reserved {year} Walkover
                </div>
              </li>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
