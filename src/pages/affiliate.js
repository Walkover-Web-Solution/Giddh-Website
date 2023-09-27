const affiliate = (path) => {
    const linkPath = path.path;

    const isIndia = linkPath.isIndia
    const isAE = linkPath.isAE;
    const link = linkPath.linkPrefix;
  return (
    <>
      <div className="affiliate">
        <section className="affiliate__top_section">
          <div className="container">
            <h1 className="text-center heading col-primary mb-4">
              Why Join Us?
            </h1>
            <div className="d-flex flex-column justify-content-center col-12">
              <section className="container col-12 col-lg-10 col-md-12 col-sm-12 d-grid gap-3 gap-sm-0">
                <div className="d-flex flex-column flex-md-row gap-2 align-items-center my-3">
                  <div className="col-md-3 col-sm-12 text-center align-content-center">
                    <img
                      className="mx-auto affiliate__img"
                      src="/img/affilate/earn.png"
                      alt="earn money icon"
                    />
                  </div>
                  <div className="col-9 col-md-8">
                    <h4 className="c-fs-1 col-primary c-fw-400 mb-3">
                      Lucrative, Residual Commissions
                    </h4>
                    <p className="c-fs-5">
                      Earn 50% of every new referral's first payment, 30% on
                      renewal or second payment and 20% on the third one. We
                      don't put a cap on earnings.
                    </p>
                  </div>
                </div>
              </section>
              <section className="container col-12 col-lg-10 col-md-12 col-sm-12 d-grid gap-3 gap-sm-0">
                <div className=" d-flex flex-column flex-md-row gap-2 align-items-center my-3">
                  <div className="col-md-3 col-sm-12 text-center align-content-center">
                    <img
                      className="mx-auto affiliate__img"
                      src="/img/affilate/target.png"
                      alt="Achive taget icon"
                    />
                  </div>
                  <div className="col-9 col-md-8">
                    <h4 className="c-fs-1  col-primary c-fw-400 mb-3">
                      Long Cookie Duration with Active Retargeting
                    </h4>
                    <p className="c-fs-5">
                      Receive the credit you deserve with our 120-day cookie
                      duration, plus benefit from our active retargeting
                      campaigns.
                    </p>
                  </div>
                </div>
              </section>
              <section className="container col-12 col-lg-10 col-md-12 col-sm-12 d-grid gap-3 gap-sm-0">
                <div className=" d-flex flex-column flex-md-row gap-2 align-items-center ">
                  <div className="col-md-3 col-sm-12 text-center align-content-center">
                    <img
                      className="mx-auto affiliate__img"
                      src="/img/affilate/analytics.png"
                      alt="Giddh Analytics Reliable Tracking icons"
                    />
                  </div>
                  <div className="col-9 col-md-8">
                    <h4 className="c-fs-1  col-primary c-fw-400 mb-3">
                      Reliable Tracking
                    </h4>
                    <p className="c-fs-5">
                      Accumulate more referrals with the highly-accurate
                      tracking software we've implemented.
                    </p>
                  </div>
                </div>
              </section>

              <section className="container col-12 col-lg-10 col-md-12 col-sm-12 d-grid gap-3 gap-sm-0">
                <div className=" d-flex flex-column flex-md-row gap-2 align-items-center my-3">
                  <div className="col-md-3 col-sm-12 text-center align-content-center">
                    <img
                      className="mx-auto affiliate__img"
                      src="/img/affilate/meter.png"
                      alt="Proven Results Measure Icon"
                    />
                  </div>
                  <div className="col-9 col-md-8">
                    <h4 className="c-fs-1 col-primary c-fw-400 mb-3">
                      Proven Results
                    </h4>
                    <p className="c-fs-5">
                      Profit more from your efforts with our high conversion
                      rate, strong earnings per click, and great customer
                      lifetime value..
                    </p>
                  </div>
                </div>
              </section>

              <section className="container col-12 col-lg-10 col-md-12 col-sm-12 d-grid gap-3 gap-sm-0">
                <div className=" d-flex flex-column flex-md-row gap-2 align-items-center my-3">
                  <div className="col-md-3 col-sm-12 text-center align-content-center">
                    <img
                      className="mx-auto affiliate__img"
                      src="/img/affilate/free.png"
                      alt="Free to Join Icon"
                    />
                  </div>
                  <div className="col-9 col-md-8">
                    <h4 className="c-fs-1 col-primary c-fw-400 mb-3">
                      Free To Join
                    </h4>
                    <p className="c-fs-5">
                      It's free to join our partner community and only takes
                      minutes to sign up and start promoting.
                    </p>
                  </div>
                </div>
              </section>
              <div className="text-center">
                <a href={link + "/signup"} className="btn btn-start btn-lg">
                  <span className="col-white c-fw-600">Let's Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="affiliate__resources">
          <div className="container pb-5">
            <div className="text-center col-primary pt-5 pb-4">
              <h2 className="heading">We Help you With Resources</h2>
            </div>
            <section className="container my-5">
              <div className="row mb-5 pb-5 align-items-center">
                <div className="col-lg-6 col-md-12 order-0 text-center">
                  <img
                    className="img-fluid mb-4 mb-lg-0"
                    src="/img/affilate/graph.png"
                    alt="Reliable Tracking Icon"
                  />
                </div>
                <div className="col-lg-6 col-md-12 order-1">
                  <div>
                    <h4 className="c-fs-1 mb-4 col-primary">
                      Dashboard To Track Your Success
                    </h4>
                    <p className="c-fs-4 col-grey-deep">
                      Metrics are vital. As an{" "}
                      <a
                        href={isIndia ? "/" : link}
                        title="Accounting Software"
                        className="col-primary "
                      >
                        Accounting Software
                      </a>{" "}
                      affiliate you will have your own reporting dashboard where
                      you can track shares, clicks, enrollments, and more. Keep
                      track of your success and know which types of promotions
                      are working the best for your audience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row mb-5 pb-5 align-items-center">
                <div className="col-lg-6 col-md-12 order-lg-1 order-0 text-center">
                  <img
                    className="img-fluid mb-4 mb-lg-0"
                    src="/img/affilate/affiliate_manager.png"
                    alt="Dedicated Affiliate Manager Banner Image"
                  />
                </div>
                <div className="col-lg-6 col-md-12 order-lg-0 order-1">
                  <div>
                    <h4 className="c-fs-1 mb-4 col-primary">
                      Dedicated Affiliate Manager
                    </h4>
                    <p className="c-fs-4 col-grey-deep">
                      At your service. We have an Affiliate Manager dedicated to
                      helping you promote Giddh and increase your conversions
                      for Accounting or Bookkeeping Software. He can answer your
                      questions and work with you on strategies to sell this{" "}
                      <a
                        className="col-primary"
                        href={ isIndia ? "/gst" : ( isAE ? "/ae/vat" : "/uk/vat")}
                        title={ (isIndia ? "GST " : ( isAE ? "VAT " : "VAT ")) + " Accounting Software"}
                      >
                        { (isIndia ? " GST " : ( isAE ? " VAT " : " VAT ")) } ready Accounting Software
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="row align-items-center mt-4">
                <div className="col-lg-6 col-md-12 order-0 text-center">
                  <img
                    className="img-fluid mb-4 mb-lg-0"
                    src="/img/affilate/newsletter.png"
                    alt="Affiliate Newsletter Banner Image"
                  />
                </div>
                <div className="col-lg-6 col-md-12 order-1">
                  <div>
                    <h4 className="c-fs-1 mb-4 col-primary">
                      Exclusive Affiliate Newsletter
                    </h4>
                    <p className="c-fs-4 col-grey-deep">
                      News you can use. As an Accounting Software reseller,
                      you’ll receive access to a special newsletter with
                      important product updates, news on promotions. Also you
                      will get all details on Cloud based { (isIndia ? " GST " : ( isAE ? " VAT " : " VAT ")) } software.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default affiliate;
