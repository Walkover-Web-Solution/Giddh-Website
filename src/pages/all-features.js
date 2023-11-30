import { useState } from "react";

const allFeatures = (path) => {
  const [popupData, setPopupData] = useState({});

  const linkPath = path.path;
  const isIndia = linkPath.isIndia;
  const isAE = linkPath.isAE;

  // All Feature Country Wise Data
  let indiaFeatures = [
    {
      name: "Invoicing",
      image: "/feature-invoicing-software.svg",
      description:
        "Efficiently Create and Send professional business invoices, track payment statuses, establish due dates, apply reverse charge as necessary, and access a range of additional functionalities to streamline financial management and enhance business operations.",
      link: "https://giddh.com/invoice-software",
      isMoreContent: true,
      popupContent: {
        heading: "Effortless Invoicing Solutions",
        contentText: `
        <ul class='custom-ul-with-right-tick mt-5'>
          <li>Effortless GST Invoicing</li>
          <li>Multi-currency Invoices</li>
          <li>Sending invoice via multi-channels</li>
          <li>Use Barcode for making invoice</li>
        </ul>`,
        videoLink:
          "https://www.youtube.com/embed/TDEl-daOySU?si=MFN14FthrEMqUdfS",
      },
    },
    {
      name: "Unlimited user access",
      image: "/feature-unlimited-user-access.svg",
      description:
        "Grant unlimited user access with customizable roles, to enhanced security and also allowing you to set restrictions based on  Date range, CIDR ranges.",
      link: "https://giddh.com/multi-user-accounting-software",
      isMoreContent: false,
    },
    {
      name: "IP Security",
      image: "/feature-ip-security.svg",
      description:
        "Implementing IP security in Giddh ensures restricted access to authorized IP addresses, and protecting sensitive financial data. It ensures compliance, reduces the risk of breaches, and enhances overall control and monitoring of system access for better security.",
      link: "https://giddh.com/security",
      isMoreContent: false,
    },
    {
      name: "GST compliance",
      image: "/feature-gst-compliance.svg",
      description:
        "Create GST invoice, view GST reports, direct filing, check filing status and reconcile transaction with the GST portal.",
      link: "https://giddh.com/gst",
      isMoreContent: true,
      popupContent: {
        heading: "Simplify Your GST Compliance",
        contentText: `
        <ul class='custom-ul-with-right-tick mt-5'>
          <li>Direct filing</li>
          <li>GST reports</li>
          <li>Manage multiple GSTIN</li>
          <li>Easy Reconciliation of transactions</li>
        </ul>`,
        videoLink:
          "https://www.youtube.com/embed/7NcUnWRlq6Q?si=XtSM-JH8tiY66p6X",
      },
    },
    {
      name: "Inventory Management",
      image: "/feature-inventory-management.svg",
      description:
        "Maintain inventory of Product, and Services in group, items and variant too, easy search with barcode, real-time inventory reports.",
      link: "https://giddh.com/inventory-management-software",
      isMoreContent: true,
      popupContent: {
        heading: "Efficiently manage your entire business inventory",
        contentText: `
        <ul class='custom-ul-with-right-tick mt-5'>
          <li>Record inventory for Product and Services</li>
          <li>Bifurcate inventory into Groups, Items, and Variants</li>
          <li>Fixed Asset Management</li>
          <li>Real-time inventory reports</li>
        </ul>`,
        videoLink:
          "https://www.youtube.com/embed/Yqy0ee3fI7Y?si=LUxFdilGY11joVvb",
      },
    },
    {
      name: "Multi-currency",
      image: "/feature-multi-currency.svg",
      description:
        "Manage invoicing and payments seamlessly across 100+ currencies, with automatic currency conversion based on real-time exchange rates.",
      link: "https://giddh.com/multi-currency-accounting-software",
      isMoreContent: false,
    },
    {
      name: "Invoice on whatsapp, Email, and SMS",
      image: "/feature-invoice-on-email-whatsapp-and-sms.svg",
      description:
        "You can efficiently send invoices through various channels like WhatsApp, email, and SMS directly from your accounting software.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Journal Entries",
      image: "/feature-journal-entries.svg",
      description:
        "GIDDH offers a Ledger-Based Journal Entry feature, allowing users to directly input entries into the company's ledger (Accounts). This feature provides real-time updates on account balances, eliminating the need to navigate to separate pages for checking balances after posting entries.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Bank reconciliation",
      image: "/feature-bank-reconciliation.svg",
      description:
        "Connect your bank account in Giddh, and with just one click, we will compare and match the transactions of your books with your bank account.",
      link: "https://giddh.com/conect-bank-reconcile",
      isMoreContent: false,
    },
    {
      name: "Shopify Integration",
      image: "/feature-share-invoice.svg",
      description:
        "Provides Shopify Integration with Giddh that streamlines sales data, automates order and payment sync for accurate financial records. It offers real-time insights into revenue, inventory, and customer data, enhancing efficiency and enabling informed decision-making for business growth.",
      link: null,
      isMoreContent: true,
      popupContent: {
        heading: "Integrate with Shopify: Simplifying Connectivity",
        contentText: `
        <ul class='custom-ul-with-right-tick mt-5'>
          <li>Automated Data Sync</li>
          <li>Efficient Order Management</li>
          <li>Inventory Management</li>
          <li>Cost and Time-Saving</li>
          <li>Real-Time Financial Updates</li>
        </ul>`,
        videoLink:
          "https://www.youtube.com/embed/XQaJt4cZPRA?si=QBFvzfGrTt62LvvT",
      },
    },
    {
      name: "Audit Trail",
      image: "/feature-audit-trail.svg",
      description:
        "An audit trail in Giddh, logs all transactions, enabling a detailed record of changes, enhancing accountability, and facilitating error detection for regulatory compliance and transparency.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Date range security",
      image: "/feature-date-range.svg",
      description:
        "Giddh's date range security feature enables setting user-specific date restrictions, ensuring confidential data access only within defined periods. This controls financial data access, maintaining privacy and limiting unauthorized entry to sensitive information.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Multiple Reports",
      image: "/feature-multiple-reports.svg",
      description:
        "We provides various types of reports, like <ol class='ps-3'><li>Trial balance</li><li>Profit & loss</li><li>Balance sheet</li><li>GST reports</li><li>Daybook</li><li>Aging report</li></ol>",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Fixed Asset Management",
      image: "/feature-asset-management.svg",
      description:
        "Giddh's Fixed Asset Management streamlines the oversight and control of fixed assets, allowing for categorization into Groups, Stock, and variants. This feature offers real-time reports, enabling efficient monitoring and strategic asset management for your business.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Branch and warehouse management",
      image: "/feature-branch-and-warehouse-management.svg",
      description:
        "Efficiently manage the company's numerous branches and warehouses, access branch- and warehouse-specific reports, facilitate branch transfers, archive the branch and warehouse and perform various related tasks.",
      link: null,
      isMoreContent: false,
    },
  ];

  let aeFeatures = [
    {
      name: "Invoicing",
      image: "/feature-invoicing-software-with-vat.svg",
      description:
        "Efficiently Create and Send professional business invoices, track payment statuses, establish due dates, and access a range of additional functionalities to streamline financial management and enhance business operations.",
      link: "https://giddh.com/ae/invoice-software",
      isMoreContent: false,
    },
    {
      name: "Unlimited user access",
      image: "/feature-unlimited-user-access.svg",
      description:
        "Grant unlimited user access with customizable roles, to enhanced security and also allowing you to set restrictions based on  Date range, CIDR ranges.",
      link: "https://giddh.com/ae/multi-user-accounting-software",
      isMoreContent: false,
    },
    {
      name: "IP Security",
      image: "/feature-ip-security.svg",
      description:
        "Implementing IP security in Giddh ensures restricted access to authorized IP addresses, and protecting sensitive financial data. It ensures compliance, reduces the risk of breaches, and enhances overall control and monitoring of system access for better security.",
      link: "https://giddh.com/ae/security",
      isMoreContent: false,
    },
    {
      name: "VAT compliance",
      image: "/feature-uae-vat-compliance.svg",
      description:
        " Effortlessly Generate VAT-Compliant Invoices and Access Comprehensive VAT Reports.",
      link: "https://giddh.com/ae/vat",
      isMoreContent: false,
    },
    {
      name: "Inventory Management",
      image: "/feature-inventory-management.svg",
      description:
        "Maintain inventory of Product, and Services in group, items and variant too, easy search with barcode, real-time inventory reports.",
      link: "https://giddh.com/ae/inventory-management-software",
      isMoreContent: false,
    },
    {
      name: "Multi-currency",
      image: "/feature-multi-currency.svg",
      description:
        "Manage invoicing and payments seamlessly across 100+ currencies, with automatic currency conversion based on real-time exchange rates.",
      link: "https://giddh.com/ae/multi-currency-accounting-software",
      isMoreContent: false,
    },
    {
      name: "Invoice on whatsapp, Email, and SMS",
      image: "/feature-invoice-on-email-whatsapp-and-sms.svg",
      description:
        "You can efficiently send invoices through various channels like WhatsApp, email, and SMS directly from your accounting software.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Journal Entries",
      image: "/feature-journal-entries.svg",
      description:
        "GIDDH offers a Ledger-Based Journal Entry feature, allowing users to directly input entries into the company's ledger (Accounts). This feature provides real-time updates on account balances, eliminating the need to navigate to separate pages for checking balances after posting entries.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Bank reconciliation",
      image: "/feature-bank-reconciliation.svg",
      description:
        "Connect your bank account in Giddh, and with just one click, we will compare and match the transactions of your books with your bank account.",
      link: "https://giddh.com/ae/conect-bank-reconcile",
      isMoreContent: false,
    },
    {
      name: "Shopify Integration",
      image: "/feature-share-invoice.svg",
      description:
        "Provides Shopify Integration with Giddh that streamlines sales data, automates order and payment sync for accurate financial records. It offers real-time insights into revenue, inventory, and customer data, enhancing efficiency and enabling informed decision-making for business growth.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Audit Trail",
      image: "/feature-audit-trail.svg",
      description:
        "An audit trail in Giddh, logs all transactions, enabling a detailed record of changes, enhancing accountability, and facilitating error detection for regulatory compliance and transparency.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Date range security",
      image: "/feature-date-range.svg",
      description:
        "Giddh's date range security feature enables setting user-specific date restrictions, ensuring confidential data access only within defined periods. This controls financial data access, maintaining privacy and limiting unauthorized entry to sensitive information.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Multiple Reports",
      image: "/feature-multiple-reports.svg",
      description:
        "We provides various types of reports, like <ol class='ps-3'><li>Trial balance</li><li>Profit & loss</li><li>Balance sheet</li><li>GST reports</li><li>Daybook</li><li>Aging report</li></ol>",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Fixed Asset Management",
      image: "/feature-asset-management.svg",
      description:
        "Giddh's Fixed Asset Management streamlines the oversight and control of fixed assets, allowing for categorization into Groups, Stock, and variants. This feature offers real-time reports, enabling efficient monitoring and strategic asset management for your business.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Branch and warehouse management",
      image: "/feature-branch-and-warehouse-management.svg",
      description:
        "Efficiently manage the company's numerous branches and warehouses, access branch- and warehouse-specific reports, facilitate branch transfers, archive the branch and warehouse and perform various related tasks.",
      link: null,
      isMoreContent: false,
    },
  ];

  let ukFeatures = [
    {
      name: "Invoicing",
      image: "/feature-invoicing-software-with-vat.svg",
      description:
        "Efficiently Create and Send professional business invoices, track payment statuses, establish due dates, apply reverse charge as necessary, and access a range of additional functionalities to streamline financial management and enhance business operations.",
      link: "https://giddh.com/uk/invoice-software",
      isMoreContent: false,
    },
    {
      name: "Unlimited user access",
      image: "/feature-unlimited-user-access.svg",
      description:
        "Grant unlimited user access with customizable roles, to enhanced security and also allowing you to set restrictions based on  Date range, CIDR ranges.",
      link: "https://giddh.com/uk/multi-user-accounting-software",
      isMoreContent: false,
    },
    {
      name: "IP Security",
      image: "/feature-ip-security.svg",
      description:
        "Implementing IP security in Giddh ensures restricted access to authorized IP addresses, and protecting sensitive financial data. It ensures compliance, reduces the risk of breaches, and enhances overall control and monitoring of system access for better security.",
      link: "https://giddh.com/uk/security",
      isMoreContent: false,
    },
    {
      name: "VAT compliance",
      image: "/feature-uk-vat-compliance.svg",
      description:
        "Generate VAT-Compliant Invoices, Access VAT Reports, Streamline Direct Filing, and Simplify Transaction Reconciliation via VAT Portal.",
      link: "https://giddh.com/uk/vat",
      isMoreContent: false,
    },
    {
      name: "Inventory Management",
      image: "/feature-inventory-management.svg",
      description:
        "Maintain inventory of Product, and Services in group, items and variant too, easy search with barcode, real-time inventory reports.",
      link: "https://giddh.com/uk/inventory-management-software",
      isMoreContent: false,
    },
    {
      name: "Multi-currency",
      image: "/feature-multi-currency.svg",
      description:
        "Manage invoicing and payments seamlessly across 100+ currencies, with automatic currency conversion based on real-time exchange rates.",
      link: "https://giddh.com/uk/multi-currency-accounting-software",
      isMoreContent: false,
    },
    {
      name: "Invoice on whatsapp, Email, and SMS",
      image: "/feature-invoice-on-email-whatsapp-and-sms.svg",
      description:
        "You can efficiently send invoices through various channels like WhatsApp, email, and SMS directly from your accounting software.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Journal Entries",
      image: "/feature-journal-entries.svg",
      description:
        "GIDDH offers a Ledger-Based Journal Entry feature, allowing users to directly input entries into the company's ledger (Accounts). This feature provides real-time updates on account balances, eliminating the need to navigate to separate pages for checking balances after posting entries.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Bank reconciliation",
      image: "/feature-bank-reconciliation.svg",
      description:
        "Connect your bank account in Giddh, and with just one click, we will compare and match the transactions of your books with your bank account.",
      link: "https://giddh.com/uk/conect-bank-reconcile",
      isMoreContent: false,
    },
    {
      name: "Shopify Integration",
      image: "/feature-share-invoice.svg",
      description:
        "Provides Shopify Integration with Giddh that streamlines sales data, automates order and payment sync for accurate financial records. It offers real-time insights into revenue, inventory, and customer data, enhancing efficiency and enabling informed decision-making for business growth.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Audit Trail",
      image: "/feature-audit-trail.svg",
      description:
        "An audit trail in Giddh, logs all transactions, enabling a detailed record of changes, enhancing accountability, and facilitating error detection for regulatory compliance and transparency.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Date range security",
      image: "/feature-date-range.svg",
      description:
        "Giddh's date range security feature enables setting user-specific date restrictions, ensuring confidential data access only within defined periods. This controls financial data access, maintaining privacy and limiting unauthorized entry to sensitive information.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Multiple Reports",
      image: "/feature-multiple-reports.svg",
      description:
        "We provides various types of reports, like <ol class='ps-3'><li>Trial balance</li><li>Profit & loss</li><li>Balance sheet</li><li>GST reports</li><li>Daybook</li><li>Aging report</li></ol>",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Fixed Asset Management",
      image: "/feature-asset-management.svg",
      description:
        "Giddh's Fixed Asset Management streamlines the oversight and control of fixed assets, allowing for categorization into Groups, Stock, and variants. This feature offers real-time reports, enabling efficient monitoring and strategic asset management for your business.",
      link: null,
      isMoreContent: false,
    },
    {
      name: "Branch and warehouse management",
      image: "/feature-branch-and-warehouse-management.svg",
      description:
        "Efficiently manage the company's numerous branches and warehouses, access branch- and warehouse-specific reports, facilitate branch transfers, archive the branch and warehouse and perform various related tasks.",
      link: null,
      isMoreContent: false,
    },
  ];

  const countryWiseData = isIndia
    ? indiaFeatures
    : isAE
    ? aeFeatures
    : ukFeatures;

  const setCurrentFeatureData = (item) => {
    setPopupData(item.popupContent);
  };

  return (
    <>
      <div className="features">
        <section className="container-fluid">
          <div className="container features__heading_container">
            <div className="row align-items-center">
              <div className="col-lg-7 order-lg-0 order-1">
                <h1 className="heading col-primary fw-bold mb-5">
                  Explore the Game-Changing Accounting features
                </h1>
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
                    src="/img/all-features-banner-image.svg"
                    alt="giddh features banner image"
                    width="90%"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="container-fluid feature-gallery all_features">
        <div className="container">
          <div className="row">
            {countryWiseData.map((item, index) => (
              <div className="col-lg-6 col-md-12 col-sm-12" key={index}>
                <div className="feature-gallery__card container">
                  <div className="row h-100 w-100 align-items-start row-gap-3  text-md-start text-sm-center text-center">
                    <div className="col-md-5 col-sm-12 text-center">
                      <figure className="pt-2">
                        <img
                          src={"/img" + item.image}
                          alt="Giddh features Icon"
                          height="auto"
                          width="160"
                        />
                      </figure>
                    </div>
                    <div className="col-md-7 col-sm-12">
                      <div className="pe-4">
                        <h3 className="c-fw-600 c-fs-4">{item.name}</h3>

                        <span
                          className="c-fs-6"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                        <br />
                        {item.isMoreContent ? (
                          <a
                            className="view-more-btn cursor-pointer"
                            data-bs-toggle="modal"
                            data-bs-target="#viewMorePopup"
                            onClick={() => {
                              setCurrentFeatureData(item);
                            }}
                          >
                            View More
                          </a>
                        ) : (
                          item.link !== null && (
                            <a href={item.link} className="view-more-btn">
                              View More
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="viewMorePopup"
        tabIndex="-1"
        aria-labelledby="viewMorePopupLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          {popupData?.heading && (
            <div className="modal-content rounded-0">
              <div className="modal-header py-4 border-0 rounded-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="custom-container">
                  <div className="row h-100">
                    <div className="col-xl-5 col-lg-12">
                      <div className="mt-2">
                        <h2 className="c-fs-1 col-primary">
                          {popupData?.heading}
                        </h2>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: popupData?.contentText,
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-12">
                      <div className="video-wrapper mt-2 mx-auto">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`${popupData?.videoLink}&rel=0&autoplay=0`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default allFeatures;
