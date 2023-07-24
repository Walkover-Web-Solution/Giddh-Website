const about = () => {
  return (
    <>
    <section className="about ">
        <div className="container p-5 ">
          <div className="row align-items-center ">
            <div className="col-lg-6  ">
              <h3 className="heading border-end col-white text-center">
                About Us
              </h3>
            </div>

            <div className="col-lg-6 c-fs-5  col-white ">
              <span>Pioneering the Automation Revolution in Accounting!</span>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-5 container__about ">
        <div className="container  d-flex flex-column gap-5 ">
          <p className="c-fs-5   ">
            Giddh is a team with members who have accounting running in their
            blood, be it a member of development team or sales team. We are
            working relentlessly to push forward the automation revolution in
            bookkeeping industry with our tech solutions.
          </p>
          <p className="c-fs-5">
            Since years Indian bookkeeping industry had fallen behind and failed
            to embrace the technological evolution. To change that once and
            forever, we have taken the initiative to keep adapting to the latest
            and greatest technologies making accounting simpler, faster and more
            secure.
          </p>

          <span className="c-fs-5">
            <a>As farsighted as a vulture:</a>
            <p>
              As the name suggests, Giddh provides you with analytical tools
              that can help you to keep a sharp vision on your accounts so that
              you can invest your time on analysing them.
            </p>
            <p>
              We believe in making accounting not only automated but simple like
              an elementary task by creating a product that can be used by
              everyone; from a simple web user who wants to simplify his
              accounting to a highly proficient business owners looking to scale
              up, above and ahead.
            </p>
          </span>
        </div>
      </section>

      <section className="container  p-5 about-features d-grid border-bottom px-3  ">
        <div className="container">
          <h4 className=" heading  col-primary fw-bold  p-4">
            A product from Walkover
          </h4>
        </div>
        
        <div className="about-feature-container d-flex flex-column flex-md-row align-items-center my-3">
          <div className="about-feature-container__text col-12 col-md-6 g-4">
            <p className="c-fs-5 col-grey-deep  ">
              Walkover is a closely knit team of technology enthusiasts with a
              reputation for adding significant value to a range of products for
              more than 8 years. We combine our technical expertise with
              business awareness to enable innovation that helps our clients to
              have a competitive edge.
            </p>

            <p className="col-grey-deep">
              We are transforming everyday workflow and businesses by building
              products that simplify processes. Our unique technology-based
              products has served over 100 clients to run more innovative and
              efficient businesses.
            </p>
          </div>
          <img
            className="about-feature-container__img mx-auto"
            src="\companylogo.svg"
          />
        </div>

        <div className="row ">
          <div className="col-6 ">
            <div className="container d-flex flex-column justify-content-center border py-5">
              <div className="text-center py-4  ">
                <img  className="about__socket" src="/img/about/giddh-logo-message.svg" />
              </div>
              <p className="c-fs-5 py-4 p-4 m-5 gap-5  line-height-lg">
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

          <div className="col-6">
            <div className="container d-flex flex-column justify-content-center border py-5">
              <div className="text-center py-4  ">
                <img className="about__socket" src="\img\about\socket-logo-big.svg" />
              </div>
              <p className="c-fs-5 py-4 p-4 m-5 gap-5 line-height-lg">
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
    </>
  );
};
export default about;
