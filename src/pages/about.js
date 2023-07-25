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
      <section className="about_container">
        <div className="container p-3">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between my-5">
            <div className=" col-6 col-md-row">
              <h3 className="heading col-white text-center border-end">
                About Us
              </h3>
            </div>

            <div className="c-fs-5 col-white col-6 ms-4 about_container__title">
              <span>Pioneering the Automation Revolution in Accounting!</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about_content p-8 my-5 gap-5">
        <div className="container gap-4">
          <p className="c-fs-5 mb-5">
            Giddh is a team with members who have accounting running in their
            blood, be it a member of development team or sales team. We are
            working relentlessly to push forward the automation revolution in
            bookkeeping industry with our tech solutions.
          </p>
          <p className="c-fs-5 mb-5">
            Since years Indian bookkeeping industry had fallen behind and failed
            to embrace the technological evolution. To change that once and
            forever, we have taken the initiative to keep adapting to the latest
            and greatest technologies making accounting simpler, faster and more
            secure.
          </p>
          <p className="c-fs-5 mb-2">As farsighted as a vulture:</p>
          <p className="mb-5">
            As the name suggests, Giddh provides you with analytical tools that
            can help you to keep a sharp vision on your accounts so that you can
            invest your time on analysing them.
          </p>
          <p>
            We believe in making accounting not only automated but simple like
            an elementary task by creating a product that can be used by
            everyone; from a simple web user who wants to simplify his
            accounting to a highly proficient business owners looking to scale
            up, above and ahead.
          </p>
        </div>
      </section>

      <section className="container p-5 about-walkover d-grid px-3">
        <div className="container about-walkover gap-3 mt-4"></div>
        <h4 className=" heading col-primary fw-bold ms-0 py-4">
          <span className="border-bottom-hadding">
            A product from Walkover
          </span>
        </h4>
        <div className="about-walkover-container d-flex flex-column-reverse flex-md-row   align-items-center my-3">
          <div className="about-walkover-container__text col-12 col-md-6 g-4">
            <p className="c-fs-5 col-grey-deep">
              Walkover is a closely knit team of technology enthusiasts with a
              reputation for adding significant value to a range of products for
              more than 8 years. We combine our technical expertise with
              business awareness to enable innovation that helps our clients to
              have a competitive edge.
            </p>

            <p className="c-fs-5 col-grey-deep">
              We are transforming everyday workflow and businesses by building
              products that simplify processes. Our unique technology-based
              products has served over 100 clients to run more innovative and
              efficient businesses.
            </p>
          </div>
          <img
            className="about-walkover-container__img"
            src="\companylogo.svg"
          />
        </div>

        <div className=" d-flex gap-3 flex-column align-items-stretch flex-md-row about_mg_sockect h-100">
          <div className="col-12 col-md-6">
            <div className="container d-flex flex-column justify-content-between border h-100 py-5">
              <div className="d-flex justify-content-center">
                <img
                  className="about-logo-card-section"
                  src="/img/about/giddh-logo-message.svg"
                />
              </div>
              <p className="c-fs-5 p-4 m-0 m-md-2 m-sm-5 gap-5">
                MSG91 is the flagship product under the Walkover umbrella with
                over 8 years of experience making it one of the best messaging
                solution companies. With its easily configurable APIs and a
                global reach of over 90 countries, MSG91 provides its clients
                with messaging & mobile solutions whenever they want, where ever
                they are.
              </p>
              <a href="" className="text-center" rel="">
                Know More
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="container d-flex flex-column justify-content-between border h-100 py-5">
              <div className="d-flex justify-content-center">
                <img
                  className="about-logo-card-section"
                  src="\img\about\socket-logo-big.svg"
                />
              </div>
              <p className="c-fs-5 p-4 m-0 m-md-2 m-sm-5 gap-5">
                Socket is a multiple API integration and automation tool that
                makes data flow faster and easier than ever to automate the
                services. It is the youngest and the smartest member in the
                family of Walkover products having its own API marketplace that
                makes developers’ lives easier and adds more power to your
                business.
              </p>
              <a href="" className="text-center" rel="">
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
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
