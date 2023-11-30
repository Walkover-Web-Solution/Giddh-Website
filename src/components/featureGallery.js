const featureGallery = (path) => {
  const link = path.path;

  // JSON for Cards
  //  India
  let indiaCardData = [
    {
      name: "Invoices",
      image: "/feature-invoicing-software.svg",
      description:
        "Efficiently Create and Send professional business invoices, track payment statuses, establish due dates, apply reverse charge as necessary, and access a range of additional functionalities to streamline financial management and enhance business operations.",
      link: "invoice-software",
    },
    {
      name: "Unlimited user access",
      image: "/feature-unlimited-user-access.svg",
      description:
        "Grant unlimited user access with customizable roles, to enhanced security and also allowing you to set restrictions based on  Date range, CIDR ranges.",
      link: "multi-user-accounting-software",
    },
    {
      name: "GST Compliances",
      image: "/feature-gst-compliance.svg",
      description:
        "Create GST invoice, view GST reports, direct filing, check filing status and reconcile transactions with the GST portal.",
      link: "gst",
    },
    {
      name: "Inventory Management",
      image: "/feature-inventory-management.svg",
      description:
        "Maintain inventory of Product, and Services in group, items and variant too, easy search with barcode, and real-time inventory reports.",
      link: "inventory-management-software",
    },
    {
      name: "IP Security",
      image: "/feature-ip-security.svg",
      description:
        "Implementing IP security in Giddh ensures restricted access to authorized IP addresses, and protecting sensitive financial data. It ensures compliance, reduces the risk of breaches, and enhances overall control and monitoring of system access for better security.",
      link: "security",
    },
  ];

  let aeCardData = [
    {
      name: "Invoices",
      image: "/feature-invoicing-software-with-vat.svg",
      description:
        "Efficiently Create and Send professional business invoices, track payment statuses, establish due dates, and access a range of additional functionalities to streamline financial management and enhance business operations.",
      link: "invoice-software",
    },
    {
      name: "Unlimited user access",
      image: "/feature-unlimited-user-access.svg",
      description:
        "Grant unlimited user access with customizable roles, to enhanced security and also allowing you to set restrictions based on  Date range, CIDR ranges.",
      link: "multi-user-accounting-software",
    },
    {
      name: "VAT Compliance",
      image: "/feature-uae-vat-compliance.svg",
      description:
        "Effortlessly Generate VAT-Compliant Invoices and Access Comprehensive VAT Reports.",
      link: "vat",
    },
    {
      name: "Inventory Management",
      image: "/feature-inventory-management.svg",
      description:
        "Maintain inventory of Product, and Services in group, items and variant too, easy search with barcode, and real-time inventory reports.",
      link: "inventory-management-software",
    },
    {
      name: "IP Security",
      image: "/feature-ip-security.svg",
      description:
        "Implementing IP security in Giddh ensures restricted access to authorized IP addresses, and protecting sensitive financial data. It ensures compliance, reduces the risk of breaches, and enhances overall control and monitoring of system access for better security.",
      link: "security",
    },
  ];

  let ukCardData = [
    {
      name: "Invoices",
      image: "/feature-invoicing-software-with-vat.svg",
      description:
        "Efficiently Create and Send professional business invoices, track payment statuses, establish due dates, apply reverse charge as necessary, and access a range of additional functionalities to streamline financial management and enhance business operations.",
      link: "invoice-software",
    },
    {
      name: "Unlimited user access",
      image: "/feature-unlimited-user-access.svg",
      description:
        "Grant unlimited user access with customizable roles, to enhanced security and also allowing you to set restrictions based on  Date range, CIDR ranges.",
      link: "multi-user-accounting-software",
    },
    {
      name: " VAT Compliance",
      image: "/feature-uk-vat-compliance.svg",
      description:
        "Generate VAT-Compliant Invoices, Access VAT Reports, Streamline Direct Filing, and Simplify Transaction Reconciliation via VAT Portal.",
      link: "vat",
    },
    {
      name: "Inventory Management",
      image: "/feature-inventory-management.svg",
      description:
        "Maintain inventory of Product, and Services in group, items and variant too, easy search with barcode, and real-time inventory reports.",
      link: "inventory-management-software",
    },
    {
      name: "IP Security",
      image: "/feature-ip-security.svg",
      description:
        "Implementing IP security in Giddh ensures restricted access to authorized IP addresses, and protecting sensitive financial data. It ensures compliance, reduces the risk of breaches, and enhances overall control and monitoring of system access for better security.",
      link: "security",
    },
  ];

  const countryWiseCardData = link.isIndia
    ? indiaCardData
    : link.isAE
    ? aeCardData
    : ukCardData;

  return (
    <>
      <section className="container-fluid feature-gallery">
        <div className="container">
          <div className="row">
            <div className="feature-gallery__title text-center mb-3">
              <h2>Features that empower your business accounting</h2>
            </div>
          </div>
          <div className="row">
            {countryWiseCardData.map((data, index) => (
              <div className="col-lg-6 col-md-12 col-sm-12" key={index}>
                <div className="feature-gallery__card container">
                  <div className="row h-100 align-items-start row-gap-3  text-md-start text-sm-center text-center">
                    <div className="col-md-5 col-sm-12 text-center">
                      <figure className="pt-2">
                        <img
                          src={"/img" + data.image}
                          alt="Giddh features Icon"
                          height="auto"
                          width="160"
                        />
                      </figure>
                    </div>
                    <div className="col-md-7 col-sm-12">
                      <div className="pe-4">
                        <h3 className="c-fw-600 c-fs-4">{data?.name}</h3>
                        <p>{data.description}</p>
                        <a
                          href={link.linkPrefix + "/" + data?.link}
                        >
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <a
                className="feature-gallery__card feature-gallery--see-more"
                href={link.linkPrefix + "/all-features"}
              ></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default featureGallery;
