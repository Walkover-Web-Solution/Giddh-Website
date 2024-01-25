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
      clientLogo: "/mitti-logo.png",
      websiteLink: "https://mitti.cafe/",
      description: "Restaurant Accounting",
    },
  ];

  return (
    <>
      <section className="container-fluid client-summary">
        <div className="container">
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
                    >
                      <figure>
                        <img
                          src={"/img/our-clients" + res.clientLogo}
                          alt={res.clientName}
                          width="auto"
                          height="60"
                        />
                      </figure>
                      <h5 className="col-dark text-center">
                        {res.description}
                      </h5>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <h2 className="client-summary__title text-center col-primary mt-5">
          Our few clients
        </h2>
      </section>
    </>
  );
};

export default clientSummary;
