const gstIndexPage = (path) => {
  const link = path.path;
  return (
    <>
      <section className="container-fluid gst text-center">
        <div className="gst__content_wapper">
          <figure>
            <img
              className="img-fluid"
              src={
                link.isIndia || link.isAE
                  ? "/img/dashboard.webp"
                  : "/img/uk-dashboard-laptop-img.svg"
              }
              alt="Laptop image with giddh.com dashboard screen"
            />
          </figure>
          <div className="container">
            <div className="gst__content_wapper__content">
              <h2>
                {link.isIndia
                  ? "File your GST directly with Giddh"
                  : "VAT Compliant Forever!"}
              </h2>
              <p>
                {link.isIndia
                  ? "We prepare your GST return file automatically and the heavy lifting for you. Now file your Goods and Services Tax (GST) directly on portal."
                  : "Once you have enabled VAT option in Giddh, you will be able to see your VAT reports at one place. With Giddh’s smart multi-currency feature, the exchange rates will be automatically displayed on Invoices"}
              </p>
              <a href={link.linkPrefix + "/signup"}>Start Free</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default gstIndexPage;
