const about = () => {
  return (
    <>
      <nav className=" mt-5 pb-2  accordion-body">
        <ul className="col-12 mb-3 d-flex flex-column flex-md-row justify-content-center gap-0 gap-sm-2 gap-md-5">
          <li className="">
            <a className="about-nav-bar active p-2" href="#">
              About Us
            </a>
          </li>
          <li className="">
            <a className="about-nav-bar p-2" href="#">
              Our Values
            </a>
          </li>
          <li className=" ">
            <a className=" about-nav-bar p-2" href="#">
              Leadership Principles 
            </a>
          </li>
          <li className=" ">
            <a className="about-nav-bar p-2" href="#">
              The Team
            </a>
          </li>
        </ul>
      </nav>
  
      <section className="see-more-conatiner">
        <div className="see-company d-flex py-4">
          <div className="container d-flex gap-4 flex-column text-center">
            <h1 className=" heading fw-bold border-bottom col-primary">
              See More
            </h1>
            <h3 className="c-fs-3">See more about the Company</h3>
            <span className="c-fs-5">
              Learn more about how Giddh can provide the solution you need.
            </span>
            <br></br>
            <div className="col-12 d-flex justify-content-center flex-wrap gap-3">
              <a className="col-primary d-inline-block see-more-button fw-bold  border col-primary border-3">
                Our Values
              </a>
              <a className="see-more-button col-primary fw-bold  border bo  rder-3">
                Leadership Principles
              </a>
              <a className="see-more-button col-primary fw-bold border border-3">
                The Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default about;
