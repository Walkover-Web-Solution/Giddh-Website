const clientSummary = () => {
  const ourClient = [
    {
      clientName: "RackBank",
      clientLogo: "/rackbank-logo.png",
      websiteLink: "https://www.rackbank.com/",
      description: "Datacenter Accounting",
    },
    {
      clientName: "MSG91",
      clientLogo: "/msg91-logo.svg",
      websiteLink: "https://msg91.com/",
      description: "SaaS Accounting",
    },
    {
      clientName: "Mitti",
      clientLogo: "/mitti-logo.webp", 
      websiteLink: "https://mitti.cafe/",
      description: "Restaurant Accounting",
    },
  ];

  return (
    <>
      <section className="container-fluid client-summary" aria-labelledby="client-summary-title">
        <div className="container">
          <h3 className="client-summary__title text-center col-primary mt-5">
            Our few clients
          </h3>
          <div className="client-summary__content-wrapper">
            <div className="row row-gap-3 justify-content-center">
              {ourClient.map((res) => {
                return (
                  <div
                    key={res.clientName}
                    className="col-lg-3 col-md-6 col-sm-12 column-wrapper"
                  >
                    <a
                      href={res.websiteLink}
                      target="_blank"
                      className="d-block client"
                      aria-label={`Visit ${res.clientName} website`}
                    >
                      <figure>
                        <img
                          src={"/img/our-clients" + res.clientLogo}
                          alt={res.clientName}
                          width="auto"
                          height="60"
                        />
                      </figure>
                      <p className="col-dark text-center fs-5">
                        {res.description}
                      </p>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default clientSummary;
