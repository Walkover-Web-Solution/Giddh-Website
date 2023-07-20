const navbar = () => {
  return (
    <>
      <nav className="navbar navbar--theme-white navbar-expand-lg position-fixed w-100">
        <div className="container-fluid">
          <a className="navbar--navbar_brand" href="/">
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
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              width="33"
              height="20"
              viewBox="0 0 33 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                className="hamberger_icon"
                y1="18.5"
                x2="33"
                y2="18.5"
                stroke="#444444"
                strokeWidth="3"
              />
              <line
                className="hamberger_icon"
                y1="9.5"
                x2="33"
                y2="9.5"
                stroke="#444444"
                strokeWidth="3"
              />
              <line
                className="hamberger_icon"
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
                <a className="nav-link active" href="#">
                  Make the Switch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" id="featuresDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Features
                </a>
                <ul className="dropdown-menu dropdown-menu--position-left" aria-labelledby="featuresDropdown">
                  <li>
                    <ul className="dropdown-menu__wapper d-flex flex-wrap ps-0">
                      <li className="col-lg-3 col-md-4 col-sm-6">
                        <ul className="ps-0">
                          <li></li>
                          <li>
                            <a href="#">GST Compliances</a>
                          </li>
                          <li>
                            <a href="#">Bank Reconcile</a>
                          </li>
                          <li>
                            <a href="#">Multi Currency</a>
                          </li>
                          <li>
                            <a href="#">ICICI Integration</a>
                          </li>
                          <li>
                            <a href="#">API Integration</a>
                          </li>
                          <li>
                            <a href="#">E-Invoice</a>
                          </li>
                        </ul>
                      </li>
                      <li className="col-lg-3 col-md-4 col-sm-6">
                        <ul className="ps-0">
                          <li>
                            <a href="#">Invoicing</a>
                          </li>
                          <li>
                            <a href="#">Reports & Analysis</a>
                          </li>
                          <li>
                            <a href="#">Share Data</a>
                          </li>
                          <li>
                            <a href="#">Contacts</a>
                          </li>
                        </ul>
                      </li>
                      <li className="col-lg-3 col-md-4 col-sm-6">
                        <ul className="ps-0">
                          <li>
                            <a href="#">Dashboard</a>
                          </li>
                          <li>
                            <a href="#">Import Excel Files</a>
                          </li>
                          <li>
                            <a href="#">Inventory</a>
                          </li>
                          <li>
                            <a href="#">Security</a>
                          </li>
                        </ul>
                      </li>
                      <li className="col-lg-3 col-md-4 col-sm-6">
                        <ul className="ps-0">
                          <li>
                            <a href="#">Anywhere-Anytime</a>
                          </li>
                          <li>
                            <a href="#">Linked Bank Account</a>
                          </li>
                          <li>
                            <a href="#">All Features</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  GST
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Guide</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="nav_right d-flex align-items-center">
              <div className="dropdown country_dropdown">
                <a href="#" id="countryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
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
                <ul className="dropdown-menu country_dropdown__menu" aria-labelledby="countryDropdown">
                  <li><a className="dropdown-item" href="#">IN - India</a></li>
                  <li><a className="dropdown-item" href="#">UAE - United Arab Emirates</a></li>
                  <li><a className="dropdown-item" href="#">UK - United Kingdom</a></li>
                </ul>
              </div>
              <div>
                <a href="#" className="login_page_link">
                  Login
                </a>
              </div>
              <div>
                <a href="#" className="signup_page_link">
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
