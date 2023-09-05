import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const featureGallery = () => {
  // To get active route
  const pathname = usePathname();
  const startPath = pathname.split("/");
  let isIndia = startPath[1] !== "ae" && startPath[1] !== "uk";
  let isAE = startPath[1] === "ae";
  let link = isIndia ? "" : isAE ? "/ae" : "/uk";

  const [currentData, setCurrentData] = useState(null);
  const [modalStatus, setModalStatus] = useState(false);

  // JSON for Modal
  let indiaModalData = [
    {
      heading: "INVENTORY",
      subHeading:
        "Create inventory easily and track inventory expenses. Managing inventory is no more a hassle!",
      paragraph:
        "Reduce wastage and increase profits by staying on top of inventory information. With Giddh, you can get a clear view of the status of inventory. See centralised sales and purchase information from multiple branches. Never run out of merchandise by pacing orders in the right quantity at the right time. Get the inventory updates automatically integrated with related reports.",
      link: "inventory-management-software",
    },
    {
      heading: "INVOICES",
      subHeading:
        "Get paid faster by creating professional looking invoices and send them automatically.",
      paragraph:
        "Create VAT compliant invoices and documents whether you are buying stocks for your inventory or selling your product or services to customers. Now create custom invoices and transact in multiple currencies. You don’t have to bother about the nuances of taxation as once set, the numbers are taken care of by Giddh.",
      link: "invoice-software",
    },
    {
      heading: "ANYWHERE ANYTIME",
      subHeading:
        "Jump on the cloud and manage your accounting whenever and wherever you want.",
      paragraph: "",
      link: "cloud-accounting-software",
    },
    {
      heading: "BANK RECONCILIATION",
      subHeading:
        "Giddh makes the confusing work of bank reconciliation easy & simple. Know your cash position anytime.",
      paragraph: "",
      link: "conect-bank-reconcile",
    },
    {
      heading: "MULTI CURRENCY",
      subHeading:
        "Serve your international clients by using Giddh’s multi currency solution.",
      paragraph: "",
      link: "multi-currency-accounting-software",
    },
    {
      heading: "IMPORT DATA",
      subHeading:
        "Bring in and add your financial data from different excel files easily in Giddh.",
      paragraph: "",
      link: "import-data",
    },
    {
      heading: "GST COMPLIANCES",
      subHeading:
        "Compliance is no more a challenge! Create GST compliant invoices & file GST returns.",
      paragraph: "",
      link: "gst",
    },
    {
      heading: "REPORTS & ANALYSIS",
      subHeading:
        "Analyse your business’s health using Giddh’s finance reporting tools such as daybook and audit log.",
      paragraph: "",
      link: "financial-reporting",
    },
    {
      heading: "SHARE DATA",
      subHeading:
        "Collaborate with your colleagues by easily sharing all your financial data.",
      paragraph: "",
      link: "multi-user-accounting-software",
    },
    {
      heading: "DASHBOARD",
      subHeading:
        "Get a bird’s eye view of revenue, net-worth of your business, all on one screen.",
      paragraph: "",
      link: "accounting-dashboard",
    },
    {
      heading: "AUDIT TRAIL",
      subHeading:
        "Now track, monitor, detect and prevent fraud, and get accurate records for reference.",
      paragraph: "",
      link: "",
    },
  ];
  let ukModalData = [
    {
      heading: "INVENTORY",
      subHeading:
        "Create inventory easily and track inventory expenses. Managing inventory is no more a hassle!",
      paragraph:
        "Reduce wastage and increase profits by staying on top of inventory information. With Giddh, you can get a clear view of the status of inventory. See centralised sales and purchase information from multiple branches. Never run out of merchandise by pacing orders in the right quantity at the right time. Get the inventory updates automatically integrated with related reports.",
      link: "inventory-management-software",
    },
    {
      heading: "INVOICES",
      subHeading:
        "Get paid faster by creating professional looking invoices and send them automatically.",
      paragraph:
        "Create VAT compliant invoices and documents whether you are buying stocks for your inventory or selling your product or services to customers. Now create custom invoices and transact in multiple currencies. You don’t have to bother about the nuances of taxation as once set, the numbers are taken care of by Giddh.",
      link: "invoice-software",
    },
    {
      heading: "ANYWHERE ANYTIME",
      subHeading:
        "Jump on the cloud and manage your accounting whenever and wherever you want.",
      paragraph: "",
      link: "cloud-accounting-software",
    },
    {
      heading: "EXPENSE MANAGEMENT",
      subHeading:
        "Giddh makes the confusing work of bank reconciliation easy & simple. Know your cash position anytime.",
      paragraph:
        "Track your business expenses on one click with Giddh’s smart expense management feature. A simple mobile application meant to keep you updated with all your business expenses",
      link: "conect-bank-reconcile",
    },
    {
      heading: "MULTI CURRENCY",
      subHeading:
        "Serve your international clients by using Giddh’s multi currency solution.",
      paragraph:
        "Work with international clients, deal with them in the currency of their choice and get paid in the currency of your choice. Convert currency automatically or set your own conversion rate. You can Manage your accounting in over 100 currencies. Sell or buy in any country without bothering about currency nuances.",
      link: "multi-currency-accounting-software",
    },
    {
      heading: "IMPORT DATA",
      subHeading:
        "Bring in and add your financial data from different excel files easily in Giddh..",
      paragraph:
        "Migrate your current and past accounting information to Giddh from your computer or cloud. Bring your Excel data into Giddh in a few easy steps. Use sample templates given on Giddh to create import-ready data. Customize the templates to add sub-groups or categories as required. Get going with your accounting on Giddh in a matter of minutes.",
      link: "import-data",
    },
    {
      heading: "VAT FILING",
      subHeading: "Invoices according to VAT registration status",
      paragraph:
        "Generate invoices according to the VAT registration status of your customers and vendors. While generating invoices or creating debit or credit notes, simply choose from a dropdown the VAT registration status of the entity you are dealing with and the rest of the calculations are taken care of by Giddh.",
      link: "vat",
    },
    {
      heading: "ACTIVITY LOGS",
      subHeading: "Quick Error Identifier",
      paragraph:
        "Now identify accounting errors instantly by checking your Activity Logs. Just go into the History to see who did what. Rectifying errors couldn’t have been easier.",
      link: "financial-reporting",
    },
    {
      heading: "SHARE DATA",
      subHeading: "Share your Ledgers with Giddh’s Magic Link",
      paragraph:
        "Collaborate with your partners, stakeholders and accountants by sharing magic links provided by Giddh. Keep your team members informed about accounting updates. Give key information to managers so that they can focus on priorities. Maintain transparency by sharing information.",
      link: "multi-user-accounting-software",
    },
    {
      heading: "SIMPLE UI",
      subHeading: "Insightful Dashboards",
      paragraph:
        "Go beyond the complexity of accounting by viewing the key details in simple graphs and charts. The dashboard converts raw data into actionable and relevant information. See critical information and make course-correction if needed. Stay on top of key financial information on assets and liabilities. Track where your revenue comes from and where the money goes. Observe trends and predict what happens next.",
      link: "accounting-dashboard",
    },
    {
      heading: "AUDIT TRAIL",
      subHeading:
        "Now track, monitor, detect and prevent fraud, and get accurate records for reference.",
      paragraph: "",
      link: "financial-reporting",
    },
  ];
  let aeModalData = [
    {
      heading: "INVENTORY",
      subHeading:
        "Create inventory easily and track inventory expenses. Managing inventory is no more a hassle!",
      paragraph:
        "Reduce wastage and increase profits by staying on top of inventory information. With Giddh, you can get a clear view of the status of inventory. See centralised sales and purchase information from multiple branches. Never run out of merchandise by pacing orders in the right quantity at the right time. Get the inventory updates automatically integrated with related reports.",
      link: "inventory-management-software",
    },
    {
      heading: "INVOICES",
      subHeading:
        "Get paid faster by creating professional looking invoices and send them automatically.",
      paragraph:
        "Create VAT compliant invoices and documents whether you are buying stocks for your inventory or selling your product or services to customers. Now create custom invoices and transact in multiple currencies. You don’t have to bother about the nuances of taxation as once set, the numbers are taken care of by Giddh.",
      link: "invoice-software",
    },
    {
      heading: "ANYWHERE ANYTIME",
      subHeading:
        "Jump on the cloud and manage your accounting whenever and wherever you want.",
      paragraph: "",
      link: "cloud-accounting-software",
    },
    {
      heading: "EXPENSE MANAGEMENT",
      subHeading:
        "Giddh makes the confusing work of bank reconciliation easy & simple. Know your cash position anytime.",
      paragraph:
        "Track your business expenses on one click with Giddh’s smart expense management feature. A simple mobile application meant to keep you updated with all your business expenses",
      link: "conect-bank-reconcile",
    },
    {
      heading: "MULTI CURRENCY",
      subHeading:
        "Serve your international clients by using Giddh’s multi currency solution.",
      paragraph:
        "Work with international clients, deal with them in the currency of their choice and get paid in the currency of your choice. Convert currency automatically or set your own conversion rate. You can Manage your accounting in over 100 currencies. Sell or buy in any country without bothering about currency nuances.",
      link: "multi-currency-accounting-software",
    },
    {
      heading: "IMPORT DATA",
      subHeading:
        "Bring in and add your financial data from different excel files easily in Giddh..",
      paragraph:
        "Migrate your current and past accounting information to Giddh from your computer or cloud. Bring your Excel data into Giddh in a few easy steps. Use sample templates given on Giddh to create import-ready data. Customize the templates to add sub-groups or categories as required. Get going with your accounting on Giddh in a matter of minutes.",
      link: "import-data",
    },
    {
      heading: "VAT FILING",
      subHeading: "Invoices according to VAT registration status",
      paragraph:
        "Generate invoices according to the VAT registration status of your customers and vendors. While generating invoices or creating debit or credit notes, simply choose from a dropdown the VAT registration status of the entity you are dealing with and the rest of the calculations are taken care of by Giddh.",
      link: "vat",
    },
    {
      heading: "AUDIT TRAIL",
      subHeading:
        "Now track, monitor, detect and prevent fraud, and get accurate records for reference.",
      paragraph:
        "Now identify accounting errors instantly by checking your Activity Logs. Just go into the History to see who did what. Rectifying errors couldn’t have been easier.",
      link: "financial-reporting",
    },
    {
      heading: "SHARE DATA",
      subHeading: "Share your Ledgers with Giddh’s Magic Link",
      paragraph:
        "Collaborate with your partners, stakeholders and accountants by sharing magic links provided by Giddh. Keep your team members informed about accounting updates. Give key information to managers so that they can focus on priorities. Maintain transparency by sharing information.",
      link: "multi-user-accounting-software",
    },
    {
      heading: "SIMPLE UI",
      subHeading: "Insightful Dashboards",
      paragraph:
        "Go beyond the complexity of accounting by viewing the key details in simple graphs and charts. The dashboard converts raw data into actionable and relevant information. See critical information and make course-correction if needed. Stay on top of key financial information on assets and liabilities. Track where your revenue comes from and where the money goes. Observe trends and predict what happens next.",
      link: "accounting-dashboard",
    },
    {
      heading: "SUPPORT",
      subHeading:
        "The power of automated accounting in your hands now with Giddh’s robust mobile application.",
      paragraph: "",
      link: "",
    },
  ];

  // JSON for Cards

  //  India
  let indiaCardData = [
    {
      name: "Inventory",
      image: "/feature-inventory.svg",
    },
    {
      name: "Invoices",
      image: "/feature-invoice.svg",
    },
    {
      name: "Anywhere Anytime",
      image: "/feature-anywhere.svg",
    },
    {
      name: "Bank Reconciliation",
      image: "/feature-reconcile.svg",
    },
    {
      name: "Multi Currency",
      image: "/multi-currency-banner.svg",
    },
    {
      name: "Import Data",
      image: "/feature-excel.svg",
    },
    {
      name: "GST Compliances",
      image: "/feature-tax.svg",
    },
    {
      name: "Reports & Analysis",
      image: "/feature-report.svg",
    },
    {
      name: "Share Data",
      image: "/feature-share-data.svg",
    },
    {
      name: "Dashboard",
      image: "/feature-dashboard.svg",
    },
    {
      name: "Audit Trail",
      image: "/feature-app.svg",
    },
  ];

  let aeCardData = [
    {
      name: "Inventory",
      image: "/feature-inventory.svg",
    },
    {
      name: "Invoices",
      image: "/feature-invoice.svg",
    },
    {
      name: "Anywhere Anytime",
      image: "/feature-anywhere.svg",
    },
    {
      name: "Expense Management",
      image: "/feature-reconcile.svg",
    },
    {
      name: "Multi Currency",
      image: "/multi-currency-banner.svg",
    },

    {
      name: "Import Data",
      image: "/feature-excel.svg",
    },
    {
      name: "VAT Filing",
      image: "/feature-tax.svg",
    },
    {
      name: "Audit Trail",
      image: "/feature-app.svg",
    },
    {
      name: "Share Data",
      image: "/feature-share-data.svg",
    },

    {
      name: "Simple UI",
      image: "/feature-dashboard.svg",
    },
    {
      name: "Support",
      image: "/feature-support.svg",
    },
  ];

  let ukCardData = [
    {
      name: "Inventory",
      image: "/feature-inventory.svg",
    },
    {
      name: "Invoices",
      image: "/feature-invoice.svg",
    },
    {
      name: "Anywhere Anytime",
      image: "/feature-anywhere.svg",
    },
    {
      name: "Expense Management",
      image: "/feature-reconcile.svg",
    },
    {
      name: "Multi Currency",
      image: "/multi-currency-banner.svg",
    },

    {
      name: "Import Data",
      image: "/feature-excel.svg",
    },
    {
      name: "VAT Filing",
      image: "/feature-tax.svg",
    },
    {
      name: "Activity Logs",
      image: "/feature-report.svg",
    },
    {
      name: "Share Data",
      image: "/feature-share-data.svg",
    },

    {
      name: "Simple UI",
      image: "/feature-dashboard.svg",
    },
    {
      name: "Audit Trail",
      image: "/feature-app.svg",
    },
  ];

  const countryWiseModalData = isIndia
    ? indiaModalData
    : isAE
    ? aeModalData
    : ukModalData;
  const countryWiseCardData = isIndia
    ? indiaCardData
    : isAE
    ? aeCardData
    : ukCardData;

  // Function to get modal data
  const setCurrent = (value) => {
    setCurrentData([]);
    let matchedObject;
    for (let i = 0; i < countryWiseModalData.length; i++) {
      if (
        countryWiseModalData[i]["heading"].toUpperCase() === value.toUpperCase()
      ) {
        matchedObject = countryWiseModalData[i];
      }
    }
    setCurrentData(matchedObject);
  };
  return (
    <>
      <section className="container-fluid feature-gallery">
        <div className="container">
          <div className="row">
            <div className="feature-gallery__title text-center mb-3">
              <h2>Features that empower your business</h2>
              <p className="c-fs-4">
                Friendly with all other departments Sales, Support, Management
                etc…
              </p>
            </div>
          </div>
          <div className="row">
            {countryWiseCardData.map((data, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div
                  className="feature-gallery__card"
                  data-bs-target="#featureModal"
                  data-bs-toggle="modal"
                  onClick={() => { setCurrent(data.name); setModalStatus(true); }}
                >
                  <figure>
                    <img
                      src={"/img" + data.image}
                      alt="Giddh features Icon"
                      height="50"
                      width="100"
                    />
                    <figcaption className="c-fw-400">{data.name}</figcaption>
                  </figure>
                </div>
              </div>
            ))}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <a
                className="feature-gallery__card"
                href={link + "/all-features"}
              >
                <span className="c-fs-3 col-primary">See More</span>
              </a>
            </div>
          </div>
        </div>
      </section>
     
      <div
        className="modal fade"
        id="featureModal"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered feature_gallery_modal">
          <div className="modal-content">
            <div className="modal-header position-relative">
              <button
                onClick={ setModalStatus(false) }
                type="button"
                className="btn col-blue ms-auto p-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <MdClose />
              </button>
            </div>
            <div className="modal-body">
              <h4 className="c-fs-1 c-fw-600 col-blue mb-4">
                {currentData?.heading}
              </h4>
              <h5 className="c-fs-3 c-fw-600 col-primary">
                {currentData?.subHeading}
              </h5>
              {currentData?.paragraph !== "" ? (
                <>
                  <p className="col-grey-deep mt-4">{currentData?.paragraph}</p>
                </>
              ) : null}
              {currentData?.link !== "" ? (
                <>
                  <a
                    href={ link + "/" + currentData?.link}
                    className="col-blue d-inline-block mt-1"
                  >
                    More details
                  </a>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default featureGallery;
