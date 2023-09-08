import { useEffect, useState } from "react";

const zohoVsGiddh = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);  

  useEffect(() => {    
    setCountry();
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
                  <h1 className="banner-content__title">Zoho Books <span className="col-dark">vs</span> GIDDH</h1>
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
                    src="/img/zoho-vs-giddh-compare-image.png"
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
                          src="/img/zoho-book-logo.svg"
                          className="product-logo"
                          alt="zoho-books-logo"
                          width={50}
                          height={50}
                        />
                      </td>
                      <td width="35%" className="position-relative">
                        <img
                          src="/img/giddh-short-logo.svg"
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
                      <th width="30%"> </th>
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
                        Offers free plan, and paid plans are 749/mo, 1499/mo,
                        2999/mo, 4999/mo, 7999/mo
                      </td>
                      <td>
                        Offers free plan, and paid plans are Rs 1500/year,
                        4000/year, 10000/year, and 15000/year
                      </td>
                    </tr>
                    <tr>
                      <th>Features</th>
                      <td>
                        Upgrading to a higher plan unlocks additional features.
                      </td>
                      <td>Every paid plan unlocks all available features.</td>
                    </tr>
                    <tr>
                      <th>Easy search</th>
                      <td>Not available</td>
                      <td>Provides Universal Search feature (Ctrl G/Cmmd G)</td>
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
                        Company sharing is limited based on the plan you choose.
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
                      <th>{ true ? "GSTIN" : "VAT" } Support</th>
                      <td>Limited as per the plan</td>
                      <td>
                        Multiple GSTIN support in single branch in all plan
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
                      <td>Easy to manage inventory in single software</td>
                    </tr>
                    <tr>
                      <th>Customer & Vendor creation</th>
                      <td>Limited</td>
                      <td>Unlimited</td>
                    </tr>
                    <tr>
                      <th>Year Locking </th>
                      <td>Doesn't provides year locking</td>
                      <td>
                        Provides year locking feature, user can lock previous
                        financial year
                      </td>
                    </tr>
                    <tr>
                      <th>Adjustment feature</th>
                      <td>
                        Provides an adjustment feature, but it is limited to
                        certain vouchers.
                      </td>
                      <td>
                        Provides an adjustment feature that can be used with all
                        types of vouchers.
                      </td>
                    </tr>
                    <tr>
                      <th>Entry System</th>
                      <td>Only Voucher based entry system</td>
                      <td>Ledger & Voucher based entry system</td>
                    </tr>
                    <tr>
                      <th>Auto Paid feature</th>
                      <td>Not available</td>
                      <td>Auto adjustment of voucher with only one setting.</td>
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
                      <td>
                        Offers free plan, and paid plans are 749/mo, 1499/mo,
                        2999/mo, 4999/mo, 7999/mo
                      </td>
                      <td>
                        Offers free plan, and paid plans are Rs 1500/year,
                        4000/year, 10000/year, and 15000/year
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Features
                      </th>
                    </tr>
                    <tr>
                      <td>
                        Upgrading to a higher plan unlocks additional features.
                      </td>
                      <td>Every paid plan unlocks all available features.</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Easy search
                      </th>
                    </tr>
                    <tr>
                      <td>Not available</td>
                      <td>Provides Universal Search feature (Ctrl G/Cmmd G)</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Multiple companies support
                      </th>
                    </tr>
                    <tr>
                      <td>Need to purchase plan separately for each company</td>
                      <td>
                        Provides multiple companies support in one subscription
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Company sharing
                      </th>
                    </tr>
                    <tr>
                      <td>
                        Company sharing is limited based on the plan you choose.
                      </td>
                      <td>
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
                      <td>Limited branch creation</td>
                      <td>Unlimited branch creation</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        GSTIN Support
                      </th>
                    </tr>
                    <tr>
                      <td>Limited as per the plan</td>
                      <td>
                        Multiple GSTIN support in single branch in all plan
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Warehouse Support
                      </th>
                    </tr>
                    <tr>
                      <td>Limited warehouse creation</td>
                      <td>Unlimited warehouse creation</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Inventory Management
                      </th>
                    </tr>
                    <tr>
                      <td>
                        Need to purchase Zoho books and Zoho inventory
                        separately to manage the inventory
                      </td>
                      <td>Easy to manage inventory in single software</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Customer & Vendor creation
                      </th>
                    </tr>
                    <tr>
                      <td>Limited</td>
                      <td>Unlimited</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Year Locking{" "}
                      </th>
                    </tr>
                    <tr>
                      <td>Doesn't provides year locking</td>
                      <td>
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
                      <td>
                        Provides an adjustment feature, but it is limited to
                        certain vouchers.
                      </td>
                      <td>
                        Provides an adjustment feature that can be used with all
                        types of vouchers.
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Entry System
                      </th>
                    </tr>
                    <tr>
                      <td>Only Voucher based entry system</td>
                      <td>Ledger & Voucher based entry system</td>
                    </tr>
                    <tr>
                      <th colspan="2" className="text-center bg-light c-fs-4">
                        Auto Paid feature
                      </th>
                    </tr>
                    <tr>
                      <td>Not available</td>
                      <td>Auto adjustment of voucher with only one setting.</td>
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
