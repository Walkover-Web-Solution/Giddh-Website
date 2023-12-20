import { useState } from "react";
import { MdRemove, MdAdd } from "react-icons/md";
const invoiceSoftware = (path) => {
  const linkPath = path.path;

  const isIndia = linkPath.isIndia;
  const isAE = linkPath.isAE;
  const isUK = linkPath.isUK;
  const link = linkPath.linkPrefix;

  const [readMoreStatus, readmoreAction] = useState(false);
  return (
    <>
      <div className="features">
        <section className="container-fluid">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h1 className="heading col-primary c-fw-600 mb-4">
                  Effortless Invoicing Solutions
                </h1>
                <p className="col-grey c-fs-3 mb-5">
                  Invoicing is fun with online invoicing software.
                </p>
                <div className="features__heading_container__links">
                  <a
                    href="#"
                    className="download_free_btn me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#downloadFree"
                  >
                    Download Free
                  </a>
                  <a
                    href="#"
                    className="col-blue"
                    onClick={() =>
                      Calendly.initPopupWidget({
                        url: "https://calendly.com/sales-accounting-software/talk-to-sale",
                      })
                    }
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
              <div className="col-lg-5 order-lg-1 order-0 position-relative">
                <figure className="text-end">
                  <img
                    src="/img/feature-gallery-icons/invoice-banner.svg"
                    width="90%"
                    alt="invoice-banner-image"
                  />
                  <img
                    src="/img/all-features-cloud_icon.svg"
                    alt="cloud icons"
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
                <h1 className="sub-heading col-primary c-fw-600 mb-3">
                  Save time. Stay ahead.
                </h1>
                <p className="c-fs-4 mb-5">
                  With GIDDH, Say Goodbye to Tedious Invoicing! Boost
                  Productivity with Online Invoicing Software for Transactions,
                  Gaining a Competitive Business Edge.
                </p>
                <a href={link + "/signup"} className="btn-link-purple">
                  Start Your Trial
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid features__description_container mt-5">
          <div className="container">
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Create and Send professional invoices with cloud based
                    invoicing software
                  </h4>
                  <p>
                    Effortlessly create and send professional invoices using
                    cloud-based invoicing software, streamlining your billing
                    process and enhancing your business image with ease and
                    efficiency.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/Professional-looking-inv.svg"
                    className="img-fluid"
                    alt="invoicing banner image"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Use Barcode for making invoice
                  </h4>
                  <p>
                    Simplify the invoicing process by utilizing barcodes for
                    product identification. This eliminates the need to manually
                    search for products every time you generate an invoice,
                    streamlining your workflow.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/barcode.svg"
                    className="img-fluid"
                    alt="barcode banner image"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    {isIndia
                      ? "Effortless GST Invoicing"
                      : "Incorporate VAT into the invoices"}
                  </h4>
                  <p>
                    {isIndia
                      ? "Simplify your invoices for you and your clients by applying GST. No more need to repeatedly verify the client's state for the correct GST type – simply enter the state, and GIDDH, the GST billing software will apply the appropriate GST type automatically."
                      : ""}
                    {isAE || isUK
                      ? "Simplify your invoices for you and your clients by applying VAT.."
                      : ""}
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src={
                      isIndia
                        ? "/img/feature-gallery-icons/gst-ready.svg"
                        : isAE || isUK
                        ? "/img/feature-gallery-icons/Invoicing.png"
                        : "/img/feature-gallery-icons/Group-5618.svg"
                    }
                    className="img-fluid"
                    alt="invoicing banner image"
                  />
                </figure>
              </div>
            </div>
            {isIndia && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Other taxes
                    </h4>
                    <p>
                      Include additional taxes, such as TCS and TDS, on your
                      invoice for comprehensive taxation transparency. Moreover,
                      you have the option to manually create taxes based on your
                      specific needs.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/other-tax.svg"
                      className="img-fluid"
                      alt="barcode banner image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {isIndia && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Multi-currency Invoices
                    </h4>
                    <p>
                      Generate hassle-free invoices for international clients by
                      automatically calculating real-time exchange rates. Say
                      goodbye to the tedious task of manually looking up
                      exchange rates and converting them to your base currency
                      every time you create an invoice.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/multi-currency.svg"
                      className="img-fluid"
                      alt="invoicing banner image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {(isAE || isUK) && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Multi-currency Invoices
                    </h4>
                    <p>
                      Generate hassle-free invoices for international clients by
                      automatically calculating real-time exchange rates. Say
                      goodbye to the tedious task of manually looking up
                      exchange rates and converting them to your base currency
                      every time you create an invoice.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/gst-ready.svg"
                      className="img-fluid"
                      alt="invoicing banner image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {isIndia && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Sending invoice via multi-channels
                    </h4>
                    <p>
                      You can efficiently send invoices through various channels
                      like WhatsApp, email, and SMS directly from your
                      accounting software, leading to effective communication
                      with your clients and ensuring timely payments.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/share-invoice.svg"
                      className="img-fluid"
                      alt="sending invoice image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {(isAE || isUK) && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Sending invoice via multi-channels
                    </h4>
                    <p>
                      You can efficiently send invoices through various channels
                      like WhatsApp, email, and SMS directly from your
                      accounting software, leading to effective communication
                      with your clients and ensuring timely payments.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/lockinv.svg"
                      className="img-fluid"
                      alt="sending invoice image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {isIndia && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Lock your invoices and move on!
                    </h4>
                    <p>
                      Frustrated by unauthorized changes to your completed
                      invoices? GIDDH's invoicing software offers an invoice
                      locking feature, ensuring that once your invoices are
                      finalized, they cannot be edited or deleted without
                      authorization.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/lock-your-invoice.svg"
                      className="img-fluid"
                      alt="invoicing banner image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {(isAE || isUK) && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Lock your invoices and move on!
                    </h4>
                    <p>
                      Frustrated by unauthorized changes to your completed
                      invoices? GIDDH's invoicing software offers an invoice
                      locking feature, ensuring that once your invoices are
                      finalized, they cannot be edited or deleted without
                      authorization.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/lockinv.svg"
                      className="img-fluid"
                      alt="invoicing banner image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {isIndia && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Add due date to invoices
                    </h4>
                    <p>
                      Enhance your invoicing process by including due dates on
                      each invoice, relieving you from the burden of having to
                      recall payment collection dates for every individual
                      invoice.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/invoice-due-dates.svg"
                      className="img-fluid"
                      alt="invoice-due-dates-logo"
                    />
                  </figure>
                </div>
              </div>
            )}
            {(isAE || isUK) && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Add due date to invoices
                    </h4>
                    <p>
                      Enhance your invoicing process by including due dates on
                      each invoice, relieving you from the burden of having to
                      recall payment collection dates for every individual
                      invoice.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/invoice-due-dates.svg"
                      className="img-fluid"
                      alt="invoice-due-dates-logo"
                    />
                  </figure>
                </div>
              </div>
            )}

            {isIndia && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Customize the invoice number
                    </h4>
                    <p>
                      In the billing software, you have the flexibility to
                      personalize your invoice numbers to suit your preferences,
                      without being limited to the sequential format (1, 2, 3,
                      etc).
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/invoice-customize.svg"
                      className="img-fluid"
                      alt="custom invoice number image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {(isAE || isUK) && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Customize the invoice number
                    </h4>
                    <p>
                      In the billing software, you have the flexibility to
                      personalize your invoice numbers to suit your preferences,
                      without being limited to the sequential format (1, 2, 3,
                      etc).
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/gst-ready.svg"
                      className="img-fluid"
                      alt="custom invoice number image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {!isAE && (!isUK || isIndia) && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      {" "}
                      Reverse charge
                    </h4>
                    <p>
                      {" "}
                      You have the option to implement the Reverse Charge
                      mechanism on your invoices as well.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/reverse-charge.svg"
                      className="img-fluid"
                      alt="reverse charge image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {isUK && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      {" "}
                      Reverse charge
                    </h4>
                    <p>
                      {" "}
                      You have the option to implement the Reverse Charge
                      mechanism on your invoices as well.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/gst-ready.svg"
                      className="img-fluid"
                      alt="reverse charge image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {(isIndia || isAE) && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Bulk Invoice update
                    </h4>
                    <p>
                      Effortlessly manage your invoices by making bulk updates
                      and deletions as needed.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/bulk-update.svg"
                      className="img-fluid"
                      alt="bulk invoice image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {isUK && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Bulk Invoice update
                    </h4>
                    <p>
                      Effortlessly manage your invoices by making bulk updates
                      and deletions as needed.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/Professional-looking-inv.svg"
                      className="img-fluid"
                      alt="bulk invoice image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {(isIndia || isAE) && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Copy from previous invoice
                    </h4>
                    <p>
                      Streamline your workflow by duplicating invoice data from
                      a previous invoice, eliminating the need to manually input
                      the same information each time when it remains unchanged.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/copy-from-invoice.svg"
                      className="img-fluid"
                      alt="copy from invoice image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {isUK && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Copy from previous invoice
                    </h4>
                    <p>
                      Streamline your workflow by duplicating invoice data from
                      a previous invoice, eliminating the need to manually input
                      the same information each time when it remains unchanged.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/gst-ready.svg"
                      className="img-fluid"
                      alt="copy from invoice image"
                    />
                  </figure>
                </div>
              </div>
            )}

            {(isIndia || isAE) && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Import and Export the invoice
                    </h4>
                    <p>
                      No need to stress about recreating all your previous
                      invoices when you have data in an Excel file. Just import
                      the file, and you're good to go. Additionally, you can
                      efficiently export the necessary invoices in bulk as per
                      your requirements.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/Invoice.svg"
                      className="img-fluid"
                      alt="import export image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {isUK && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Import and Export the invoice
                    </h4>
                    <p>
                      No need to stress about recreating all your previous
                      invoices when you have data in an Excel file. Just import
                      the file, and you're good to go. Additionally, you can
                      efficiently export the necessary invoices in bulk as per
                      your requirements.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/Professional-looking-inv.svg"
                      className="img-fluid"
                      alt="import export image"
                    />
                  </figure>
                </div>
              </div>
            )}

            {(isIndia || isAE) && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Generate multiple and compound invoices
                    </h4>
                    <p>
                      Effortlessly create multiple invoices at once by
                      leveraging your entries, also benefiting from the
                      convenience of generating composite invoices using these
                      recorded entries.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/invoice-auto-update.svg"
                      className="img-fluid"
                      alt="multiple compound image"
                    />
                  </figure>
                </div>
              </div>
            )}
            {isUK && (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h4 className="col-primary small-heading c-fw-600 mb-3">
                      Generate multiple and compound invoices
                    </h4>
                    <p>
                      Effortlessly create multiple invoices at once by
                      leveraging your entries, also benefiting from the
                      convenience of generating composite invoices using these
                      recorded entries.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 __image-alignment">
                  <figure>
                    <img
                      src="/img/feature-gallery-icons/gst-ready.svg"
                      className="img-fluid"
                      alt="multiple compound image"
                    />
                  </figure>
                </div>
              </div>
            )}

            <div className="row mb-5 align-items-center features__description_container--row-even">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Run your business with automation!
                  </h4>
                  <p>
                    From setting payment reminders to sending{" "}
                    <a
                      href="https://giddh.com/blog/benefits-of-online-invoicing-for-small-business/"
                      className="text-decoration-underline"
                    >
                      online invoices
                    </a>{" "}
                    to clients on a recurring basis, you can utilize the
                    complete potential of automation with Giddh! So let Giddh
                    follow-up with customers and focus on your core business
                    activities.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/automation.svg"
                    className="img-fluid"
                    alt="invoicing banner image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid bg-transparent">
          <div className="container features__e-invoice_page">
            <div className="row mt-5">
              <div className="col-12">
                <div className="text-center">
                  <a href={link + "/signup"} className="btn-link-purple">
                    Try Now
                  </a>
                </div>

                <p className="c-fw-600">The importance of invoices</p>
                <p>
                  An invoice is a prerequisite, be it any size or type of
                  business. An invoice is a document that lists down the
                  products and services, along with the required prices for the
                  same, offered to the client.
                </p>
                <p>
                  Invoices are an indispensable tool for small businesses since
                  they are official proofs of products offered and services
                  rendered and help the businesses get paid. With the present
                  form of innovations, most businesses use invoice templates to
                  avoid creating invoices from scratch. They not only help you
                  save time but also repopulate the same information instead of
                  having to fill it from scratch again and again. In case you
                  want an invoicing software with more advanced software, you
                  can try out Giddh. You can perform all your finance functions
                  such as generate invoices online in a matter of minutes.
                </p>

                <div style={{ display: readMoreStatus ? "block" : "none" }}>
                  <p className="c-fw-600">Purpose of invoicing</p>
                  <p>
                    Invoicing is done for a number of reasons. Apart from
                    recording sales transactions, they perform a number of
                    functions such as:
                  </p>
                  <p>– Requesting timely payment from clients</p>
                  <p>– Monitoring sales</p>
                  <p>– Keeping a track of inventory</p>
                  <p>– Forecasting future sales</p>
                  <p>– Recording business revenue for tax filing</p>

                  <p className="c-fw-600">
                    Importance of Professional Looking Online Invoices
                  </p>
                  <p>
                    With more and more businesses moving towards e-invoicing,
                    there has been a rise of invoice software for creating
                    professional-looking invoices. It’s a fast and easy process
                    of sending and tracking invoices and can help reduce costs
                    and save time.
                  </p>
                  <p className="c-fw-600">
                    Let’s look at some of the benefits of creating online
                    invoices:
                  </p>
                  <p>
                    <span className="c-fw-600">Speed –</span> With online
                    invoice software, you can create online invoices at
                    lightning speed. If you send out your invoices fast, you can
                    get paid fast as well. When you’re sending out multiple
                    invoices, it may seem like a lengthy and monotonous process
                    of filling out the same details again and again. Since
                    online invoices are cloud-based, you can repopulate the
                    information in as many invoices as required. You can also
                    reduce your hassles by scheduling your invoices at specific
                    dates and times so that they can be sent automatically. It
                    can also reduce your dependency on your accounting personnel
                    as you can directly send the invoice online. Finally, you
                    can access the invoices from anywhere, even if you’re not in
                    the office. Thus, the online invoice software can make your
                    entire invoicing function a great deal faster.
                  </p>
                  <p>
                    <span className="c-fw-600">Monitoring –</span> It doesn’t
                    just end with sending fast invoices. Following up and
                    checking whether the payment has come in can take up a lot
                    of time as well. This can help you in avoiding missing any
                    due dates. The invoice software can help you check the
                    status of your payments, find out which ones are due and
                    which ones have been resolved to get an overview of the
                    total outstanding payments. Moreover, you can also get
                    personalised reminders for individual clients and invoices
                    so that you’re always up to date. There are also ample
                    reports to choose from to get a clearer understanding of
                    your clients and make payment adjustments for each client
                    accordingly. Finally, you can leave a precise and
                    transparent audit trail so that you can track individual
                    transactions in case of any queries.
                  </p>
                  <p>
                    <span className="c-fw-600">Time and cost saving –</span>{" "}
                    Irrespective of whether the invoices are being handled by
                    accountants or by you, the cost incurred from the time spent
                    in doing the task is still there. Using an invoicing
                    software to create invoice online can help you save a lot of
                    time and be good for your pocket as well. It can help you
                    maintain your company cash flow effectively and send
                    invoices to your client, ensuring seamless cash flow
                    management. You can also effectively do away with all the
                    messy paperwork, rather use the templates, customise, and
                    send them within minutes.
                  </p>
                  <p>
                    <span className="c-fw-600">
                      Automate your invoicing process –
                    </span>{" "}
                    One of the best advantages of online invoice software is
                    that you can automate your entire processes. It also means
                    you can actually set up recurring payments for your
                    long-term clients in the form of a subscription-based model.
                    There can be automatic reminders and follow-ups for both
                    past and future invoices.
                  </p>
                  <p>
                    <span className="c-fw-600">Brand Identity –</span> A
                    cloud-based online invoicing software from India like Giddh
                    can help you reinforce your brand presence. Since you can
                    customise your logo, colours, and scheme, it can help you
                    create a feeling of trust and transparency. Research shows
                    that using your logo on invoices can help to increase the
                    chance of payments by 3%.
                  </p>
                  <p>
                    <span className="c-fw-600">Security –</span> It goes without
                    saying that many people are hesitant to generate invoice
                    online since they feel it might not be secure. It’s true,
                    security protocols matter a lot, especially, when it comes
                    to finances. That’s why it’s best to choose an online
                    invoice software that adheres to all security standards such
                    as the PCI security standards. Environment-friendly –
                    Statistics have discovered that the invoices generated by
                    online invoice software are more environmentally-friendly
                    than traditional paper invoices. It saves energy, water, and
                    paper resources as well as reduces pollution. So, by
                    adopting an e-invoicing system, you may reduce your carbon
                    footprints.
                  </p>
                </div>

                <span
                  className="text-decoration-underline c-fw-600 cursor-pointer"
                  onClick={() =>
                    readmoreAction((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  {readMoreStatus ? "Read Less" : "Read More..."}
                </span>
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
                    alt="people interested in Connect Bank Reconcile also looked at image"
                    className="features__sub_heading_container--banner_img"
                  />
                </figure>
                <h2 className="c-fs-3 col-grey-deep c-fw-400 mb-3 mt-4">
                  People interested in
                  <span className="col-blue"> Invoicing Software </span> also
                  looked at
                </h2>

                <div className="features__suggestion_container__links">
                  <a href={link + "/all-features"} className="col-blue">
                    All features
                  </a>
                  <a
                    href={link + "/multi-user-accounting-software"}
                    className="border-vertical col-blue"
                  >
                    Share Data
                  </a>
                  <a
                    href={link + "/multi-currency-accounting-software"}
                    className="border-vertical col-blue"
                  >
                    Multi-Currency
                  </a>
                  <a
                    href={link + "/invoice-software"}
                    className="border-vertical col-blue"
                  >
                    Invoicing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid features__accordion_container">
          <div className="container">
            <div className="row">
              <div className="col-12 px-0">
                <div className="accordion" id="accordionAllFeatures">
                  {/*============ Accordion #1 ===============*/}
                  <h2 className="fw-bold col-primary ps-3">FAQs</h2>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <span className="me-2 collapse-icon collapse-icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse-icon collapse-icon--close">
                          <MdRemove />
                        </span>
                        Does Giddh software support recurring invoicing?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        Yes. Giddh automatically generates invoices for a set
                        interval of time as mentioned by the user.
                      </div>
                    </div>
                  </div>
                  {/*============ Accordion #2 ===============*/}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <span className="me-2 collapse-icon collapse-icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse-icon collapse-icon--close">
                          <MdRemove />
                        </span>
                        Are my invoices secure in the Giddh Cloud Invoicing
                        Software?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        We take various measures to ensure that your invoices
                        are safe on our software. Your data is encrypted with
                        SSL encryption which is stored on our AWS servers, known
                        for offering the highest level of security. The data is
                        further recorded in a Javascript object and secured by
                        our robust firewall system.
                      </div>
                    </div>
                  </div>
                  {/*============ Accordion #3 ===============*/}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <span className="me-2 collapse-icon collapse-icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse-icon collapse-icon--close">
                          <MdRemove />
                        </span>
                        Are there different template options for the invoices?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        You can select professional looking invoices from our
                        wide range of templates and customisations. All
                        templates are well-thought out and designed to meet a
                        variety of needs and create a lasting impression on your
                        client.
                      </div>
                    </div>
                  </div>
                  {/*============ Accordion #4 ===============*/}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <span className="me-2 collapse-icon collapse-icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse-icon collapse-icon--close">
                          <MdRemove />
                        </span>
                        Will my invoices look professional?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        The invoices you make on the Giddh software can be made
                        to look extremely professional and on-brand. You can
                        also insert logos and icons in the invoices as well as
                        customise the colour schemes and designs as per your
                        brand guidelines.
                      </div>
                    </div>
                  </div>
                  {/*============ Accordion #5 ===============*/}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <span className="me-2 collapse-icon collapse-icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse-icon collapse-icon--close">
                          <MdRemove />
                        </span>
                        How can I create estimates / proformas and convert them
                        to invoices in Giddh?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        Press Ctrl/cmd+G, search for and select the voucher
                        type. Fill in the necessary details and save it. Now, go
                        to the list of estimate/proforma, select the one you
                        want to convert to invoice and convert them to invoices
                        from their settings.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default invoiceSoftware;
