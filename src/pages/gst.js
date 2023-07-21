const gst = () => {
  return (
    <>
      <section className="container mb-5 ">
        <div className="gst-hero-container  text-center">
          <div className="row d-flex h-100 align-content-end">
            <div className=" d-flex flex-column  ">
              <span className="c-fs-3  col-dark-light fw-light m-3">
                From creating error-free GST invoice to
              </span>
              <h1 className="heading fw-bold  col-primary ">
                File your GSTR Automatically
              </h1>
            </div>
            <div class="gst-image mt-auto">
              <img
                className="col-12"
                alt="gst"
                src="/img/gst-images/gstimage1.png"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className=" filing-gstr py-5">
        <div className="container mt-5">
          <div className="text-center">
            <p className="sub-heading c-fs-1 col-primary fw-bold ">
              Advantages of filing GSTR with us
            </p>
          </div>

          <div className="row">
            <div className="col">
              <div className="filing-gstr-card d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/gst-images/Direct-Filing.svg" />
                <div className="caption text-center">
                  <h3 className="small-heading col-primary fw-bold">
                    Direct Filing
                  </h3>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    We prepare your GST return file automatically and do the
                    heavy lifting for you. Now file your Goods and Services Tax
                    (GST) directly on portal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="filing-gstr d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/gst-images/accurate.svg" />
                <div className="caption text-center">
                  <h3 className="small-heading col-primary fw-bold">
                    100% Accurate
                  </h3>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    Get 10/10 on accuracy by identifying errors right before
                    submitting your GST return online with the help of our
                    straightforward error sheet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="filing-gstr d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/gst-images/get-notified.svg" />
                <div className="caption text-center">
                  <h3 className="small-heading col-primary fw-bold">
                    Timely Notifications
                  </h3>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    Frustrated with last-minute tax return stress? With Giddh
                    GST accounting, you will never miss another deadline or
                    suffer the penalty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {" "}
              <div className="filing-gstr d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/gst-images/easy-fast.svg" />
                <div className="caption text-center">
                  <h3 className="small-heading col-primary fw-bold">
                    Highly Collaborative
                  </h3>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    Be on the same page with your team. With our role based
                    model, you can grant your CA the access to view the relevant
                    GST tax return data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="filing-gstr d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/gst-images/secure-reliable.svg" />
                <div className="caption text-center">
                  <h3 className="small-heading col-primary fw-bold">
                    Secure & Reliable
                  </h3>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    With 2-factor authentication, industry leading security and
                    OTP verification, your GST return filing process is secure
                    from the beginning till the end.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="filing-gstr d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/gst-images/best-support.svg" />
                <div className="caption text-center">
                  <h3 className="small-heading col-primary fw-bold">
                    Best in Class Support
                  </h3>
                  <p className="px-4 c-fs-5 lh-lg col-grey">
                    Stuck somewhere? Count on our friendly and knowledgable
                    support team for your accounting & GST filing queries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-4 my-4 mx-2 mx-md-0 ">
        <div className="d-flex flex-column gap-4 c-fs-3 text-center ">
          <span>Take charge of your business with Giddh &</span>
          <div className="c-fs-1 col-primary fw-bold ">
            Make GST Return Process Automatic.
          </div>
          <div className="">
            <a className="c-fs-4 btn btn-primary btn-lg ">Try Now</a>{" "}
          </div>
          <span className="c-fs-4 m-3">
            Cloud Based Accounting Software to File GST Return Online
          </span>
        </div>
      </section>
      <section className="container ">
        <div className="justify-content-between d-flex my-5 flex-column flex-md-row">
          <div className=" col-dark-light md-8 d-flex align-items-center gap-4" >
            <h3 className="">GST Return Collaborators</h3>{" "}
            
              <img className="col-6" src="/img/jio-GST.png" />
            
          </div>
          <span className="h-100% border-end"></span>
          <div className="md-4">
            <img  className="gst-image  mt-4  mb-4 mr-6 col-12" src="/img/GST.png"/>
          </div>
        </div>
      </section>

    </>
  );
};
export default gst;
