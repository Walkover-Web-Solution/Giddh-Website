const clientSummary = () => {
  const ourClient = [
    {
      clientName: "RackBank",
      clientLogo: "/rackbank-logo.png",
      websiteLink: "https://www.rackbank.com/",
    },
    {
      clientName: "MSG91",
      clientLogo: "/msg91-logo.svg",
      websiteLink: "https://msg91.com/",
    },
    {
      clientName: "Mitti",
      clientLogo: "/mitti-logo.png",
      websiteLink: "https://mitti.cafe/",
    },
    {
      clientName: "Half Kg",
      clientLogo: "/halfkg-logo.svg",
      websiteLink: "https://halfkg.store/",
    },
  ];

  return (
    <>
      <section className="container-fluid client-summary">
        <div className="container">
          <h2 className="client-summary__title text-center col-primary">
            Our few clients
          </h2>
          <div className="client-summary__content-wrapper">
            <div className="row row-gap-5 ">
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
