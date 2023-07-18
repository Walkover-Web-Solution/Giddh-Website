const navbar = () => {
  return (
    <>
      <div>
        <div className="container py-3 d-flex align-items-cenetr justify-content-ceneter">
          <span className="py-3">
            <a href="/">
              <img src="/img/logo.svg" />
            </a>
          </span>
          <div className="nav-menu">
            <ul className="list-unstyled d-flex gap-5">
              <li>
                <a>
                  Make the Switch
                </a>
              </li>
              <li>
                <a>
                 Features
                </a>
              </li>
              <li>
                <a>
                  Pricing
                </a>
              </li>
              <li>
                <a>
                  GST
                </a>
              </li>
              <li>
                <a>
                  About
                </a>
              </li>
              <li>
                <a>
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default navbar;
