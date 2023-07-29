import React from "react";

const Affiliate = () => {
  return (
    <section className="pt-5">
      <div className="container">
        <h1 className="text-center sub-heading col-primary">Why Join Us?</h1>
        <div className="d-flex flex-column justify-content-center col-12">
          <section className="container col-12 col-lg-10 col-md-12 col-sm-12 d-grid gap-3 gap-sm-0">
            <div className=" d-flex flex-column flex-md-row gap-2 align-items-center my-3">
              <div className="col-3 text-center affiliate align-content-center">
                <img className="mx-auto affiliate-img" src="/img/affilate/earn.png" />
              </div>
              <div className="col-9 col-md-8 ">
                <h4 className="c-fs-1  col-primary c-fw-400 mb-3">
                  Lucrative, Residual Commissions
                </h4>
                <p p className="c-fs-5">
                  Earn 50% of every new referral's first payment, 30% on renewal
                  or second payment and 20% on the third one. We don't put a cap
                  on earnings.
                </p>
              </div>
            </div>
          </section>

          <section className="container col-12 col-lg-10 col-md-12 col-sm-12 d-grid gap-3 gap-sm-0">
            <div className=" d-flex flex-column flex-md-row gap-2 align-items-center my-3">
              <div className="col-3 text-center align-content-center">
                <img className="mx-auto affiliate-img" src="/img/affilate/target.png" />
              </div>
              <div className="col-9 col-md-8">
                <h4 className="c-fs-1  col-primary c-fw-400 mb-3">
                  Long Cookie Duration with Active Retargeting
                </h4>
                <p p className="c-fs-5 ">
                  Receive the credit you deserve with our 120-day cookie
                  duration, plus benefit from our active retargeting campaigns.
                </p>
              </div>
            </div>
          </section>

          <section className="container col-12 col-lg-10 col-md-12 col-sm-12 d-grid gap-3 gap-sm-0">
            <div className=" d-flex flex-column flex-md-row gap-2 align-items-center ">
              <div className="col-3 text-center align-content-center">
                <img className="mx-auto affiliate-img" src="/img/affilate/analytics.png" />
              </div>
              <div className="col-9 col-md-8">
                <h4 className="c-fs-1  col-primary c-fw-400 mb-3">
                  Reliable Tracking
                </h4>
                <p p className="c-fs-5 ">
                  Accumulate more referrals with the highly-accurate tracking
                  software we've implemented.
                </p>
              </div>
            </div>
          </section>

          <section className="container col-12 col-lg-10 col-md-12 col-sm-12 d-grid gap-3 gap-sm-0">
            <div className=" d-flex flex-column flex-md-row gap-2 align-items-center my-3">
              <div className="col-3 text-center align-content-center">
                <img className="mx-auto affiliate-img" src="/img/affilate/meter.png" />
              </div>
              <div className="col-9 col-md-8">
                <h4 className="c-fs-1  col-primary c-fw-400 mb-3">Proven Results</h4>
                <p p className="c-fs-5 ">
                  Profit more from your efforts with our high conversion rate,
                  strong earnings per click, and great customer lifetime value..
                </p>
              </div>
            </div>
          </section>

          <section className="container col-12 col-lg-10 col-md-12 col-sm-12 d-grid gap-3 gap-sm-0">
            <div className=" d-flex flex-column flex-md-row gap-2 align-items-center my-3">
              <div className="col-3 text-center align-content-center">
                <img className="mx-auto affiliate-img" src="/img/affilate/free.png" />
              </div>
              <div className="col-9 col-md-8">
                <h4 className="c-fs-1  col-primary c-fw-400 mb-3">Free To Join</h4>
                <p p className="c-fs-5 ">
                It's free to join our partner community and only takes minutes to sign up and start promoting.
                </p>
              </div>
            </div>
          </section>

          {/* <section className="container  d-grid gap-3 my-5">
            <div className=" d-flex flex-column flex-md-row gap-2 align-items-center my-3">
              <img
                className="mx-auto"
                src="/img/affilate/earn.png"
              />
              <div className="col-12 col-md-6">
                <h4 className="c-fs-4 col-primary fw-bold">
                  Lucrative, Residual Commissions
                </h4>
                <p p className="c-fs-5 ">
                  Earn 50% of every new referral's first payment, 30% on renewal
                  or second payment and 20% on the third one. We don't put a cap
                  on earnings.
                </p>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </section>
  );
};

export default Affiliate;
