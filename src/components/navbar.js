import { useEffect, useCallback, useState } from "react";
import Jsondata from '../data/data.json';
const navbar = (props) => {
  const link = props.path;
  const pathname = props.browserPath;
  const baseURL = link.baseURL;
  const urlPrefix = link.linkPrefix;

  let activePath = pathname.split('/');
  activePath = activePath[activePath.length - 1];
  const [scrollStatus, setscrollStatus] = useState(false);

  function getCountryWiseData(data) {
    if (link.isGlobal) {
      if (data.global === true) {
        return data;
      }
    }
    if (link.isIndia) {
      if (data.in === true) {
        return data;
      }
    }
    if (link.isAE) {
      if (data.ae === true) {
        return data;
      }
    }
    if (link.isUK) {
      if (data.uk === true) {
        return data;
      }
    }
    return null;
  }

  // JSON data for Feature Menu
  const features = Jsondata.features;
  // List of path where navbar Background will be transparent and turn Background white on scroll
  let specificPath =
    pathname === "/" ||
    pathname === "/in" ||
    pathname === "/ae" ||
    pathname === "/uk";

  const onScroll = useCallback((event) => {
    const { scrollY } = window;
    if (scrollY >= 15) {
      if (specificPath) {
        setscrollStatus(true);
      }
    } else {
      if (specificPath) {
        setscrollStatus(false);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("load", onScroll, { passive: true });

    if (specificPath) {
      setscrollStatus(false);
    } else {
      setscrollStatus(true);
    }

    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return (
    <>
      <nav
        className={
          "navbar navbar-expand-lg position-fixed w-100 py-0 " +
          (scrollStatus ? " navbar--theme-white navbar--box-shadow" : "")
        }
      >
        <div className="container-fluid">
          <a
            className="navbar--navbar_brand"
            aria-label="Giddh Brand logo"
            href={urlPrefix == "" ? "/" : urlPrefix}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="126.833"
              height="25"
              viewBox="0 0 126.833 25"
            >
              <g
                className="logo-white"
                transform="translate(-319.076 -1919.767)"
              >
                <rect
                  className="giddh-logo-svg"
                  width="5.491"
                  height="24.999"
                  transform="translate(349.463 1919.767)"
                  fill="#1a237e"
                />
                <path
                  className="giddh-logo-svg"
                  d="M1156.769,1954.394h-8.975c-7.426,0-14.009-4.343-14.009-12.429,0-9.145,6.723-12.57,14.748-12.57h8.236v11.683h-5.491v-6.6h-3.238c-4.646,0-8.553,2.295-8.553,7.2,0,5.685,3.837,7.627,8.94,7.627h8.342Z"
                  transform="translate(-771.519 -9.628)"
                  fill="#1a237e"
                />
                <path
                  className="giddh-logo-svg"
                  d="M2174.323,1954.4h5.49v-10.8h10.665v10.8h5.491v-25h-5.491v9.322h-10.665V1929.4h-5.49Z"
                  transform="translate(-1750.06 -9.635)"
                  fill="#1a237e"
                />
                <path
                  className="giddh-logo-svg"
                  d="M1698.978,1929.4h8.975c7.427,0,14.008,4.343,14.008,12.429,0,9.146-6.723,12.57-14.748,12.57h-8.236v-11.683h5.49v6.6h3.238c4.646,0,8.553-2.295,8.553-7.2,0-5.685-3.836-7.627-8.94-7.627h-8.342Z"
                  transform="translate(-1304.837 -9.628)"
                  fill="#1a237e"
                />
                <path
                  className="giddh-logo-svg"
                  d="M341.488,1929.686h-9.278v4.838h4.254v3.865a10.206,10.206,0,0,1-4.924,1.176c-4.455,0-7.368-3.225-7.368-7.661s2.914-7.661,7.368-7.661a7.283,7.283,0,0,1,5.761,2.251l3.684-4.032c-2.378-2.218-5.694-3.058-9.445-3.058-7.4,0-12.795,4.873-12.795,12.5s5.392,12.5,12.795,12.5a21.2,21.2,0,0,0,9.948-2.285Z"
                  transform="translate(0.33 0.363)"
                  fill="#1a237e"
                />
              </g>
            </svg>
          </a>
          <button
            className="navbar-toggler ms-auto collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                className="hamberger_icon bar-top"
                y1="18.5"
                x2="33"
                y2="18.5"
                stroke="#444444"
                strokeWidth="3"
              />
              <line
                className="hamberger_icon bar-middle"
                y1="9.5"
                x2="33"
                y2="9.5"
                stroke="#444444"
                strokeWidth="3"
              />
              <line
                className="hamberger_icon bar-bottom"
                y1="1.5"
                x2="33"
                y2="1.5"
                stroke="#444444"
                strokeWidth="3"
              />
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto text-light mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={
                    "nav-link " +
                    (activePath === "make-the-switch" ? "active" : "")
                  }
                  href={urlPrefix + "/make-the-switch"}
                >
                  Make the Switch
                </a>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <a
                    className={
                      "nav-link chevron_down nav-link--feature-menu " +
                      (activePath === "all-features" ? "active" : "")
                    }
                    href="#"
                    id="allFeaturesDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Features
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu--position-left"
                    aria-labelledby="allFeaturesDropdown"
                  >
                    <li>
                      <ul className="dropdown-menu__wapper d-grid ps-0">
                        {features
                          .filter(getCountryWiseData)
                          .map((data, index) => (
                            <li key={index}>
                              {data.menuItem !== "API Integration" && (
                                <>
                                  <a href={urlPrefix + data.url}>
                                    {data.menuItem}
                                  </a>
                                </>
                              )}
                              {data.menuItem === "API Integration" && (
                                <>
                                  <a href={data.url} target="_blank">
                                    {data.menuItem}
                                  </a>
                                </>
                              )}
                            </li>
                          ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className={
                    "nav-link " + (activePath === "pricing" ? "active" : "")
                  }
                  href={urlPrefix + "/pricing"}
                >
                  Pricing
                </a>
              </li>
              {!link.isGlobal && (
                <li className="nav-item">
                  <a
                    className={
                      "nav-link " +
                      (activePath === "gst" || activePath === "vat"
                        ? "active"
                        : "")
                    }
                    href={
                      link.isIndia
                        ? urlPrefix + "/gst"
                        : link.isAE
                        ? urlPrefix + "/vat"
                        : urlPrefix + "/vat"
                    }
                  >
                    {link.isIndia ? "GST" : link.isAE || link.isUK ? "VAT" : ""}
                  </a>
                </li>
              )}
              <li className="nav-item">
                <a
                  className={
                    "nav-link " + (activePath === "about" ? "active" : "")
                  }
                  href={urlPrefix + "/about"}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <a
                    className="nav-link chevron_down nav-link--resource-menu"
                    href="#"
                    id="resouceDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resources
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="resouceDropdown"
                  >
                    <li>
                      <a href="https://giddh.com/blog">Blog</a>
                    </li>
                    <li>
                      <a href="https://giddh.com/help" target="_blank">
                        Help
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="nav_right d-flex align-items-center">
              <div className="dropdown country_dropdown">
                <a
                  href="#"
                  aria-label="Switch Country Menu"
                  id="countryDropdownFooter"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    className="website-globe-icon"
                  >
                    <g transform="translate(-1039 -41)">
                      <path
                        className="a"
                        d="M633.3,978.4a9.506,9.506,0,0,1,7.1-2.9,9.9,9.9,0,0,1,7.1,2.9,9.356,9.356,0,0,1,2.9,7.1,9.9,9.9,0,0,1-2.9,7.1,9.356,9.356,0,0,1-7.1,2.9,9.9,9.9,0,0,1-7.1-2.9,10.141,10.141,0,0,1,0-14.2Zm6,14.9v-1.9a2.051,2.051,0,0,1-2-2v-1l-4.8-4.8a5.537,5.537,0,0,0-.2,1.8,7.941,7.941,0,0,0,2,5.3A7.67,7.67,0,0,0,639.3,993.3Zm6.9-2.5a7.636,7.636,0,0,0,2.1-5.4,7.749,7.749,0,0,0-1.4-4.5,7.9,7.9,0,0,0-3.6-2.9v.4a2.051,2.051,0,0,1-2,2h-2v2a1.025,1.025,0,0,1-1,1h-2v2h6a1.025,1.025,0,0,1,1,1v3h1A1.921,1.921,0,0,1,646.2,990.8Z"
                        transform="translate(415.6 -927.5)"
                      />
                      <g className="b" transform="translate(1039 41)">
                        <circle className="c" cx="17" cy="17" r="17" />
                        <circle className="d" cx="17" cy="17" r="16.5" />
                      </g>
                    </g>
                  </svg>
                </a>
                <ul
                  className="dropdown-menu country_dropdown__menu"
                  aria-labelledby="countryDropdownFooter"
                >
                  <li>
                    <a
                      className={
                        "dropdown-item" + (link.isGlobal ? " active" : "")
                      }
                      href={baseURL+"/?"}
                    >
                      Global
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        "dropdown-item" + (link.isIndia ? " active" : "")
                      }
                      href={baseURL + "/in"}
                    >
                      IN - India
                    </a>
                  </li>
                  <li>
                    <a
                      className={"dropdown-item" + (link.isAE ? " active" : "")}
                      href={baseURL + "/ae"}
                    >
                      UAE - United Arab Emirates
                    </a>
                  </li>
                  <li>
                    <a
                      className={"dropdown-item" + (link.isUK ? " active" : "")}
                      href={baseURL + "/uk"}
                    >
                      UK - United Kingdom
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <a href={urlPrefix + "/login"} className="login_page_link">
                  Login
                </a>
              </div>
              <div>
                <a href={urlPrefix + "/signup"} className="signup_page_link">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default navbar;
