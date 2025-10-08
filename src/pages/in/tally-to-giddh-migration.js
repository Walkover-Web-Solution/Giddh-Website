import { MdFileDownload } from "react-icons/md";

const tallyPlusGiddh = () => {
  return (
    <>
      <section>
        <div className="container-fluid giddh-plus-tally">
          <div className="row height-inherit position-relative">
            <div className="col-6 px-0">
              <div className="giddh-plus-tally__left-wrapper d-flex flex-column">
                <h1 className="giddh-plus-tally__title position-absolute">TALLY an<span className="col-white c-fw-600">d GIDDH</span></h1>
                <article>
                  <p className="col-dark">
                    Graphs, Analytics,
                    <br />
                    Alerts, Automations and more...
                  </p>
                </article>
                <div className="banner-img">
                  <figure>
                    <img
                      className="img-fluid"
                      src="/img/tally-plus-giddh/tally-accounting-software-dashboard.webp"
                      width={450}
                      height="auto"
                      alt="tally-accounting-software-dashboard"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-6 px-0">
              <div className="giddh-plus-tally__right-wrapper d-flex flex-column">
                <a href="https://giddh.com/help/sync-with-tally-1591360375828781" target="_blank" className="guide-link-btn col-white d-inline-block">
                  How it works
                </a>
                <div className="banner-img">
                  <figure>
                    <img
                      className="img-fluid"
                      src="/img/tally-plus-giddh/giddh-accounting-software-dashboard-2023.webp"
                      width={450}
                      height="auto"
                      alt="giddh-accounting-software-dashboard"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="plugin-wrapper">
        <div className="container">
          <div className="text-center">
            <h2 className="col-dark">Download the Plugin</h2>
            <a
              href="https://s3.ap-south-1.amazonaws.com/giddhbuildartifacts/Walkover+Prod.tcp"
              className="d-inline-block col-white download-btn"
            >
              Plugin <MdFileDownload />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default tallyPlusGiddh;
