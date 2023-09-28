import { useEffect, useState } from "react";

const tallyVsGiddh = (path) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const link = path.path;

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
                    Tally <span className="col-dark">vs</span> GIDDH
                  </h1>
                </div>
                <p className="col-light banner-content__description">
                  Tally and Giddh are two accounting software options with
                  powerful features that can cater to the needs of most
                  businesses. However, their design philosophy, pricing
                  structure, and supporting features are tailored towards
                  different audiences.
                </p>
              </div>
              <div className="col-lg-6 col-md-12 order-1 text-center">
                <figure>
                  <img
                    src="/img/compare-with-giddh/tally-vs-giddh-compare-image.png"
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
          <h2 className="mb-4">Comparison Summary: Tally vs GIDDH</h2>
          <p>
            <strong>Tally</strong> is an accounting software used by businesses
            to manage their financial transactions and records. Tally accounting
            software provides a solution around inventory management, stock
            management, invoicing, purchase order management, discounting, stock
            valuation methodology, etc. whereas Tally is for Windows OS only.
          </p>
          <p>
            <strong>Giddh</strong> is the one stop cloud based accounting
            solution for various sized businesses, that provides you with
            analytical tools that can help you to keep a sharp vision on your
            accounts so that you can invest your time on analyzing them. This
            user-friendly platform is easily accessible from any location and
            for any OS, and offers significant customization options, making it
            ideal for businesses looking to streamline their accounting
            processes.
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
                          src="/img/compare-with-giddh/tally-logo.svg"
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
                        Tally
                      </th>
                      <th width="35%" className="position-relative">
                        Giddh
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Entry System</th>
                      <td>Only Voucher based</td>
                      <td>Both Ledger and Voucher based</td>
                    </tr>
                    <tr>
                      <th>Easy search</th>
                      <td className="col-dark-light">Not Available</td>
                      <td>
                        Provides Universal Search feature (
                        <code className="text-nowrap col-dark">
                          Ctrl+G / Cmd+G
                        </code>
                        )
                      </td>
                    </tr>
                    <tr>
                      <th>User friendly</th>
                      <td>Required accounting knowledge and expertise</td>
                      <td>Anyone can use it easily</td>
                    </tr>
                    <tr>
                      <th>Accessibility</th>
                      <td>Only from desktop</td>
                      <td>From any device with internet connection</td>
                    </tr>
                    <tr>
                      <th>Mobile App</th>
                      <td className="col-dark-light">Not Available</td>
                      <td>For both Android and iOS</td>
                    </tr>
                    <tr>
                      <th>Company sharing</th>
                      <td className="col-dark-light">Not Available</td>
                      <td>
                        Unlimited company sharing feature is available in all
                        plan
                      </td>
                    </tr>
                    <tr>
                      <th>Customizable Permission</th>
                      <td className="col-dark-light">Not Available</td>
                      <td>Available</td>
                    </tr>
                    <tr>
                      <th>Multi-user and multiple PCs edition</th>
                      <td>Only available in Gold plan</td>
                      <td>Available in all plan</td>
                    </tr>
                    <tr>
                      <th>Branch Support</th>
                      <td>Limited as per the version</td>
                      <td>Unlimited for all plan</td>
                    </tr>
                    <tr>
                      <th>{link.isIndia ? "GSTIN" : "VAT"} Support</th>
                      <td>
                        Single {link.isIndia ? "GSTIN" : "VAT"} support in
                        single branch
                      </td>
                      <td>
                        Multiple {link.isIndia ? "GSTIN" : "VAT"} number support
                        in single branch in all plan
                      </td>
                    </tr>
                    <tr>
                      <th>Auto fetching of transactions</th>
                      <td className="col-dark-light">Not Available</td>
                      <td>Available for ICICI Bank</td>
                    </tr>
                    <tr>
                      <th>Inventory with variant</th>
                      <td>Need to purchase add-on</td>
                      <td>Available in all plan</td>
                    </tr>
                    <tr>
                      <th>Real Time dashboard</th>
                      <td className="col-dark-light">Not Available</td>
                      <td>Available</td>
                    </tr>
                    <tr>
                      <th>Single ledger sharing</th>
                      <td className="col-dark-light">Not Available</td>
                      <td>
                        User can share single ledger from Email and by creating
                        magic link
                      </td>
                    </tr>
                    <tr>
                      <th>Attachment with Bills</th>
                      <td className="col-dark-light">Not Available</td>
                      <td>User can add attachment with the invoice</td>
                    </tr>
                    <tr>
                      <th>Shopify integration</th>
                      <td>Third party provides the integration</td>
                      <td>Available</td>
                    </tr>
                    <tr>
                      <th></th>
                      <td></td>
                      <td className="text-center">
                        <a
                          href={link?.linkPrefix + "/signup"}
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
                      <th colspan="2" className="text-center">
                        Entry System
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">Only Voucher based</td>
                      <td width="50%">Both Ledger and Voucher based</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center">
                        Easy search
                      </th>
                    </tr>
                    <tr>
                      <td width="50%" className="col-dark-light">
                        Not Available
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
                      <th colspan="2" className="text-center">
                        User friendly
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">
                        Required accounting knowledge and expertise
                      </td>
                      <td width="50%">Anyone can use it easily</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center">
                        Accessibility
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">Only from desktop</td>
                      <td width="50%">
                        From any device with internet connection
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center">
                        Mobile App
                      </th>
                    </tr>
                    <tr>
                      <td width="50%" className="col-dark-light">
                        Not Available
                      </td>
                      <td width="50%">For both Android and iOS</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center">
                        Company sharing
                      </th>
                    </tr>
                    <tr>
                      <td width="50%" className="col-dark-light">
                        Not Available
                      </td>
                      <td width="50%">
                        Unlimited company sharing feature is available in all
                        plan
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center">Customizable Permission</th>
                    </tr>
                    <tr>
                      <td width="50%" className="col-dark-light">Not Available</td>
                      <td width="50%">Available</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center">
                        Multi-user and multiple PCs edition
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">Only available in Gold plan</td>
                      <td width="50%">Available in all plan</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center">
                        Branch Support
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">Limited as per the version</td>
                      <td width="50%">Unlimited for all plan</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center">
                        {link.isIndia ? "GSTIN" : "VAT"} Support
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">
                        Single {link.isIndia ? "GSTIN" : "VAT"} support in
                        single branch
                      </td>
                      <td width="50%">
                        Multiple {link.isIndia ? "GSTIN" : "VAT"} number support
                        in single branch in all plan
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center">
                        Auto fetching of transactions
                      </th>
                    </tr>
                    <tr>
                      <td width="50%" className="col-dark-light">
                        Not Available
                      </td>
                      <td width="50%">Available for ICICI Bank</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center">
                        Inventory with variant
                      </th>
                    </tr>
                    <tr>
                      <td width="50%">Need to purchase add-on</td>
                      <td width="50%">Available in all plan</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center">
                        Real Time dashboard
                      </th>
                    </tr>
                    <tr>
                      <td width="50%" className="col-dark-light">
                        Not Available
                      </td>
                      <td width="50%">Available</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center">
                        Single ledger sharing
                      </th>
                    </tr>
                    <tr>
                      <td width="50%" className="col-dark-light">
                        Not Available
                      </td>
                      <td width="50%">
                        User can share single ledger from Email and by creating
                        magic link
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center">
                      Attachment with Bills
                      </th>
                    </tr>
                    <tr>
                      <td width="50%" className="col-dark-light">
                        Not Available
                      </td>
                      <td width="50%">
                      User can add attachment with the invoice
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center">Shopify integration</th>
                    </tr>
                    <tr>
                      <td width="50%">Third party provides the integration</td>
                      <td width="50%">Available</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="text-center">
                        <a
                          href={link?.linkPrefix + "/signup"}
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
export default tallyVsGiddh;
