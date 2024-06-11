import { useEffect, useState } from "react";

const zohoVsGiddh = (path) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const link = path.path
  const linkUrl = link.linkPrefix;

  useEffect(() => {
    let screenWidth = window.matchMedia("(max-width: 767px)");
    showTable(screenWidth);
    screenWidth.addListener(showTable);
  }, []);

  function showTable(screenWidth) {
    if (screenWidth.matches) {
      setIsSmallScreen(true);
    } else if (screenWidth.matches) {
      setIsSmallScreen(false);
    }
  }
  return (
    <>
      <div className="products">
        <section className="container-fluid products__banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-0 justify-content-center">
                <div className="banner-content">
                  <h1 className="banner-content__title">
                    Zoho Books <span className="col-dark">vs</span> GIDDH
                  </h1>
                </div>
                <p className="col-light banner-content__description">
                  Zoho Books and Giddh are two accounting software options with
                  powerful features that can cater to the needs of most
                  businesses. However, their design philosophy, pricing
                  structure, and supporting features are tailored towards
                  different audiences.
                </p>
              </div>
              <div className="col-lg-6 col-md-12 order-1 text-center">
                <figure>
                  <img
                    src="/img/compare-with-giddh/zoho-vs-giddh-compare-image.webp"
                    className="img-fluid banner-content__img"
                    width={540}
                    height={332}
                    alt="Zoho_books-vs-Giddh"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="container products__compare-wrapper">
          <h2 className="mb-4">Comparison Summary: Zoho Books vs GIDDH</h2>
          <p>
            <strong>Zoho Books</strong> is online accounting software designed
            for growing businesses for managing accounting tasks and organizing
            transactions. It caters to a variety of industries including medical
            too. Its integration capabilities with other Zoho products make it a
            convenient choice for those already using Zoho's suite of business
            tools.
          </p>
          <p>
            <strong>Giddh</strong> is the one stop accounting solution for
            various sized businesses, that provides you with analytical tools
            that can help you to keep a sharp vision on your accounts so that
            you can invest your time on analyzing them. This user friendly
            platform is easily accessible from any location, and offers
            significant customization options, making it ideal for businesses
            looking to streamline their accounting processes.
          </p>

          <div className="comparing-table-container">
            {!isSmallScreen && (
              <>
                <table className="w-100">
                  <thead>
                    <tr>
                      <td width="30%"></td>
                      <td width="35%" className="position-relative">
                        <img
                          src="/img/compare-with-giddh/zoho-book-logo.svg"
                          className="product-logo"
                          alt="zoho-books-logo"
                          width={50}
                          height={50}
                        />
                      </td>
                      <td width="35%" className="position-relative">
                        <img
                          src="/img/compare-with-giddh/giddh-short-logo.svg"
                          className="product-logo"
                          alt="zoho-books-logo"
                          width={50}
                          height={50}
                        />
                      </td>
                    </tr>
                  </thead>
                </table>
                <table className="table table-bordered table-custom-border">
                  <thead>
                    <tr>
                      <th width="30%"></th>
                      <th width="35%" className="position-relative">
                        Zoho Books
                      </th>
                      <th width="35%" className="position-relative">
                        Giddh
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Pricing</th>
                      <td>
                        {link.isIndia &&
                          "Plans start from INR 8988/year"}
                        {link.isAE &&
                          "Plans start from AED 720/year"}
                        {link.isUK &&
                          "Plans start from GBP 120/year"}
                        {link.isGlobal &&
                          "Plans start from USD 120/year"}
                      </td>
                      <td>
                        {link.isIndia &&
                          "Plans start from INR 1500/year"}
                        {link.isAE &&
                          "Plans start from AED 350/year"}
                        {link.isUK && 
                           "Plans start from GBP 70/year"}
                        {link.isGlobal && 
                           "Plans start from USD 50/year"}
                      </td>
                    </tr>
                    <tr>
                      <th>Multiple companies support</th>
                      <td>Need to purchase plan separately for each company</td>
                      <td>
                        Provides multiple companies support in one subscription
                      </td>
                    </tr>
                    <tr>
                      <th>Company sharing</th>
                      <td>
                        Company sharing is limited based on the plan you choose
                      </td>
                      <td>
                        Unlimited company sharing feature is available in all
                        plan
                      </td>
                    </tr>
                    <tr>
                      <th>Branch Support</th>
                      <td>Limited branch creation</td>
                      <td>Unlimited branch creation</td>
                    </tr>
                    <tr>
                      <th>{link.isIndia ? "GSTIN" : "VAT"} Support</th>
                      <td>Limited as per the plan</td>
                      <td>
                        Multiple {link.isIndia ? "GSTIN" : "VAT"} number support
                        in single branch in all plan
                      </td>
                    </tr>
                    <tr>
                      <th>Warehouse Support</th>
                      <td>Limited warehouse creation</td>
                      <td>Unlimited warehouse creation</td>
                    </tr>
                    <tr>
                      <th>Inventory Management</th>
                      <td>
                        Need to purchase Zoho books and Zoho inventory
                        separately to manage the inventory
                      </td>
                      <td>Easy to manage inventory in a single software</td>
                    </tr>
                    <tr>
                      <th>Year Locking </th>
                      <td className="col-dark-light align-middle">Not available</td>
                      <td>
                        Provides year locking feature, user can lock previous
                        financial year
                      </td>
                    </tr>
                    <tr>
                      <th>Adjustment feature</th>
                      <td>
                        Provides an adjustment feature, but it is limited to
                        certain vouchers
                      </td>
                      <td>
                        Provides an adjustment feature that can be used with all
                        types of vouchers
                      </td>
                    </tr>
                    <tr>
                      <th>Entry System</th>
                      <td>Only Voucher based entry system</td>
                      <td>Ledger & Voucher based entry system</td>
                    </tr>
                    <tr>
                      <th>Auto Paid feature</th>
                      <td className="col-dark-light align-middle">Not available</td>
                      <td>Auto adjustment of voucher with only one setting</td>
                    </tr>
                    <tr>
                      <th>Custom Permission</th>
                      <td>Limited</td>
                      <td>Highly customizable</td>
                    </tr>
                    <tr>
                      <th>Universal Date</th>
                      <td className="col-dark-light align-middle">Not available</td>
                      <td>Available</td>
                    </tr>
                    <tr>
                      <th>Chat support</th>
                      <td>Only available in higher plan</td>
                      <td>Available in all plan</td>
                    </tr>
                    <tr>
                      <th></th>
                      <td></td>
                      <td className="text-center">
                        <a
                          href={linkUrl + "/signup"}
                          className="d-inline-block sign-btn"
                        >
                          Sign up free
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
            {isSmallScreen && (
              <>
                <table className="table table-bordered table-custom-border">
                  <tbody>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Pricing
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">
                        {link.isIndia &&
                          "Plans start from INR 8988/year"}
                        {link.isAE &&
                          "Plans start from AED 720/year"}
                        {link.isUK &&
                          "Plans start from GBP 120/year"}
                        {link.isGlobal &&
                          "Plans start from USD 120/year"}
                      </td>
                      <td width="50%">
                        {link.isIndia &&
                          "Plans start from INR 1500/year"}
                        {link.isAE &&
                          "Plans start from AED 350/year"}
                        {link.isUK &&
                          "Plans start from GBP 70/year"}
                        {link.isGlobal &&
                          "Plans start from USD 50/year"}
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Easy search
                      </th>
                    </tr>
                    <tr>
                      <td width="50%" className="col-dark-light align-middle">
                        Not available
                      </td>
                      <td width="50%">
                        Provides Universal Search feature (
                        <code className="text-nowrap col-dark">
                          Ctrl+G / Cmd+G
                        </code>
                        )
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Multiple companies support
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">
                        Need to purchase plan separately for each company
                      </td>
                      <td width="50%">
                        Provides multiple companies support in one subscription
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Company sharing
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">
                        Company sharing is limited based on the plan you choose
                      </td>
                      <td width="50%">
                        Unlimited company sharing feature is available in all
                        plan
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Branch Support
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">Limited branch creation</td>
                      <td width="50%">Unlimited branch creation</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        {link.isIndia ? "GSTIN" : "VAT"} Support
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">Limited as per the plan</td>
                      <td width="50%">
                        Multiple {link.isIndia ? "GSTIN" : "VAT"} number support
                        in single branch in all plan
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Warehouse Support
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">Limited warehouse creation</td>
                      <td width="50%">Unlimited warehouse creation</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Inventory Management
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">
                        Need to purchase Zoho books and Zoho inventory
                        separately to manage the inventory
                      </td>
                      <td width="50%">
                        Easy to manage inventory in a single software
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Year Locking{" "}
                      </th>
                    </tr>
                    <tr>
                      <td width="50%" className="col-dark-light align-middle">
                        Not available
                      </td>
                      <td width="50%">
                        Provides year locking feature, user can lock previous
                        financial year
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Adjustment feature
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">
                        Provides an adjustment feature, but it is limited to
                        certain vouchers
                      </td>
                      <td width="50%">
                        Provides an adjustment feature that can be used with all
                        types of vouchers
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Entry System
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">Only Voucher based entry system</td>
                      <td width="50%">Ledger & Voucher based entry system</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Auto Paid feature
                      </th>
                    </tr>
                    <tr>
                      <td width="50%" className="col-dark-light align-middle">
                        Not available
                      </td>
                      <td width="50%">
                        Auto adjustment of voucher with only one setting
                      </td>
                    </tr>

                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Custom Permission
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">Limited</td>
                      <td width="50%">Highly customizable</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Universal Date
                      </th>
                    </tr>
                    <tr>
                      <td width="50%" className="col-dark-light align-middle">
                        Not available
                      </td>
                      <td width="50%">Available</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Chat support
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">Only available in higher plan</td>
                      <td width="50%">Available in all plan</td>
                    </tr>

                    <tr>
                      <td colSpan="2" className="text-center">
                        <a
                          href={linkUrl + "/signup"}
                          className="d-inline-block sign-btn"
                        >
                          Sign up free
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};
export default zohoVsGiddh;
