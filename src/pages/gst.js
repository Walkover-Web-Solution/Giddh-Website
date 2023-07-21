const gst = () => {
  return (
    <>
      <section>
        <div className="container text-center ">
          <div className="row d-flex">
            <div className="row">
              <div className="col">
                <span className="gst-hading">
                  From creating error-free GST invoice to
                </span>
                <h1 className=" hadding-color banner-h1 text-indigo mb-5">
                  File your GSTR Automatically
                </h1>
              </div>
              <div class="gst-image">
                <img
                  className="col-12"
                  alt="gst"
                  src="/img/gst-images/gstimage1.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="container mt-20">
          <div className="text-center ">
            <p className="gst-hading fw-bold ">
              Advantages of filing GSTR with us
            </p>
          </div>

          <div className="row">
            <div className="col">
              <div className="filing-gstr d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/gst-images/Direct-Filing.svg" />
                <div className="caption text-center">
                  <h3>Direct Filing</h3>
                  <p className="px-4 c-fs-3">
                    We prepare your GST return file automatically and do the
                    heavy lifting for you. Now file your Goods and Services Tax
                    (GST) directly on portal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col"> <div className="filing-gstr d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/gst-images/accurate.svg" />
                <div className="caption text-center">
                  <h3>100% Accurate</h3>
                  <p className="px-4 c-fs-3">
                  Get 10/10 on accuracy by identifying errors right before submitting your GST return online with the help of our straightforward error sheet.
                  </p>
                </div>
              </div></div>
            <div className="col"> <div className="filing-gstr d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/gst-images/get-notified.svg" />
                <div className="caption text-center">
                  <h3>Timely Notifications</h3>
                  <p className="px-4 c-fs-3">
                  Frustrated with last-minute tax return stress? With Giddh GST accounting, you will never miss another deadline or suffer the penalty.
                  </p>
                </div>
              </div></div>
          </div>

          <div className="row">
            <div className="col"> <div className="filing-gstr d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/gst-images/easy-fast.svg" />
                <div className="caption text-center">
                  <h3>Highly Collaborative</h3>
                  <p className="px-4 c-fs-3">
                  Be on the same page with your team. With our role based model, you can grant your CA the access to view the relevant GST tax return data.
                  </p>
                </div>
              </div></div>
            <div className="col"> <div className="filing-gstr d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/gst-images/secure-reliable.svg" />
                <div className="caption text-center">
                  <h3>Secure & Reliable</h3>
                  <p className="px-4 c-fs-3">
                  With 2-factor authentication, industry leading security and OTP verification, your GST return filing process is secure from the beginning till the end.
                  </p>
                </div>
              </div></div>
            <div className="col"> <div className="filing-gstr d-flex flex-column align-items-center gap-4 p-3">
                <img src="/img/gst-images/best-support.svg" />
                <div className="caption text-center">
                  <h3>Best in Class Support</h3>
                  <p className="px-4 c-fs-3">
                  Stuck somewhere? Count on our friendly and knowledgable support team for your accounting & GST filing queries.
                  </p>
                </div>
              </div></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default gst;
