import React, { useState } from "react";
const about = () => {
  const [currentMenu, setCurrentMenu] = useState(0);
  const setCurrent = index => {
    setCurrentMenu(index);
  };
  return (
    <>
      <div className="about">
        <section className="container pb-3">
          <div className="row">
            <ul className="col-12 mb-4 d-flex flex-wrap justify-content-center align-items-center column-gap-4 row-gap-5 c-fs-4">
              <li>
                <span className={"about__navbar " + (currentMenu === 0 ? "active" : "")} href=":" onClick={() => setCurrent(0)}>
                  About Us
                </span>
              </li>
              <li>
                <span className={"about__navbar " + (currentMenu === 1 ? "active" : "")} href=":" onClick={() => setCurrent(1)}>
                  Our Values
                </span>
              </li>
              <li>
                <span className={"about__navbar " + (currentMenu === 2 ? "active" : "")} href=":" onClick={() => setCurrent(2)}>
                  Leadership Principles
                </span>
              </li>
              <li>
                <span className={"about__navbar " + (currentMenu === 3 ? "active" : "")} href=":" onClick={() => setCurrent(3)}>
                  The Team
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section className="about__container">
          <div className="container p-3">
            <div className="row flex-lg-nowrap flex-md-wrap align-items-center justify-content-between my-5">
              <div className="col-lg-6 col-md-12">
                <h3 className="heading col-white text-center border-end">
                  <span style={{
                    display: currentMenu === 0 ? "inline" : "none"
                  }}>
                    About Us
                  </span>
                  <span style={{
                    display: currentMenu === 1 ? "inline" : "none"
                  }}>
                    Our Values
                  </span>
                  <span style={{
                    display: currentMenu === 2 ? "inline" : "none"
                  }}>
                    Leadership Principles
                  </span>
                  <span style={{
                    display: currentMenu === 3 ? "inline" : "none"
                  }}>
                    The Team
                  </span>
                </h3>
              </div>
              <div className=" col-lg-6 col-md-12 ms-4 about__container__title">
                <span className="c-fs-5 col-white" style={{
                  display: currentMenu === 0 ? "inline" : "none"
                }}>
                  Pioneering the Automation Revolution in Accounting!
                </span>
                <span className="c-fs-5 col-white" style={{
                  display: currentMenu === 1 ? "inline" : "none"
                }}>
                  Our values are the essence of our identity and summarises the
                  purpose of our existence
                </span>
                <span className="c-fs-5 col-white" style={{
                  display: currentMenu === 2 ? "inline" : "none"
                }}>
                  The difference between success and failure is not the amount of money or resources you have, but how a leader leads his team.
                  A GOOD LEADER ALWAYS:
                </span>
                <span className="c-fs-5 col-white" style={{
                  display: currentMenu === 3 ? "inline" : "none"
                }}>
                  Our VISION is to provide technologies to organizations that enables them to take data driven financial decisions in the quickest way possible.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================================================================================ */}

        {/* Main About Page */}
        <div style={{
          display: currentMenu === 0 ? "block" : "none"
        }}>
          <section className="about__content p-8 my-5 gap-5">
            <div className="container gap-4">
              <p className="c-fs-5 mb-5">
                Giddh is a team with members who have accounting running in
                their blood, be it a member of development team or sales team.
                We are working relentlessly to push forward the automation
                revolution in bookkeeping industry with our tech solutions.
              </p>
              <p className="c-fs-5 mb-5">
                Since years Indian bookkeeping industry had fallen behind and
                failed to embrace the technological evolution. To change that
                once and forever, we have taken the initiative to keep adapting
                to the latest and greatest technologies making accounting
                simpler, faster and more secure.
              </p>
              <p className="c-fs-5 mb-2">As farsighted as a vulture:</p>
              <p className="mb-5">
                As the name suggests, Giddh provides you with analytical tools
                that can help you to keep a sharp vision on your accounts so
                that you can invest your time on analysing them.
              </p>
              <p>
                We believe in making accounting not only automated but simple
                like an elementary task by creating a product that can be used
                by everyone; from a simple web user who wants to simplify his
                accounting to a highly proficient business owners looking to
                scale up, above and ahead.
              </p>
            </div>
          </section>

          <section className="container p-5 about__walkover d-grid px-3">
            <div className="container about__walkover gap-3 mt-4"></div>
            <h4 className=" heading col-primary fw-bold ms-0 py-4">
              <span className="about--heading-underline">
                A product from Walkover
              </span>
            </h4>
            <div className="row about__walkover__container  align-items-center my-3">
              <div className="about__walkover__container__text col-lg-6 col-md-12 g-4">
                <p className="c-fs-5 col-grey-deep">
                  Walkover is a closely knit team of technology enthusiasts with
                  a reputation for adding significant value to a range of
                  products for more than 8 years. We combine our technical
                  expertise with business awareness to enable innovation that
                  helps our clients to have a competitive edge.
                </p>

                <p className="c-fs-5 col-grey-deep">
                  We are transforming everyday workflow and businesses by
                  building products that simplify processes. Our unique
                  technology-based products has served over 100 clients to run
                  more innovative and efficient businesses.
                </p>
              </div>
              <div className="col-lg-6 col-md-12 g-4">
                <img
                  className="about__walkover__container__img"
                  src="\companylogo.svg"
                />
              </div>
            </div>

            <div className=" d-flex gap-3 flex-column align-items-stretch flex-md-row about_mg_sockect h-100">
              <div className="col-12 col-md-6">
                <div className="container d-flex flex-column justify-content-between border h-100 py-5">
                  <div className="d-flex justify-content-center">
                    <img
                      width="183px"
                      height="60px"
                      src="/img/about/giddh-logo-message.svg"
                    />
                  </div>
                  <p className="c-fs-5 p-4 m-0 m-md-2 m-sm-5 gap-5">
                    MSG91 is the flagship product under the Walkover umbrella
                    with over 8 years of experience making it one of the best
                    messaging solution companies. With its easily configurable
                    APIs and a global reach of over 90 countries, MSG91 provides
                    its clients with messaging & mobile solutions whenever they
                    want, where ever they are.
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
                      width="238px"
                      height="68px"
                      src="\img\about\socket-logo-big.svg"
                    />
                  </div>
                  <p className="c-fs-5 p-4 m-0 m-md-2 m-sm-5 gap-5">
                    Socket is a multiple API integration and automation tool
                    that makes data flow faster and easier than ever to automate
                    the services. It is the youngest and the smartest member in
                    the family of Walkover products having its own API
                    marketplace that makes developers’ lives easier and adds
                    more power to your business.
                  </p>
                  <a href="" className="text-center" rel="">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Our Values Page */}
        <div style={{
          display: currentMenu === 1 ? "block" : "none"
        }}>
          <div className="our_values">
            <section className="container-fluid our_values__illustration">
              <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center column-gap-3 row-gap-3">
                  <a href="#" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/our-values/customers-come-first.svg"
                        alt="Customers Come First Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        Customers Come First
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/our-values/embracing-setbacks-to-break-boundaries.svg"
                        alt="Setbacks to Break Boundaries Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        Setbacks to Break Boundaries
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/our-values/we-set-impossible-goals.svg"
                        alt="We Set Impossible Goals Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        We Set Impossible Goals
                      </figcaption>
                    </figure>
                  </a>

                  <a href="#" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/our-values/people-are-our-power.svg"
                        alt="People are our Power Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        People are our Power
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/our-values/we-focus-on-why-and-how.svg"
                        alt="We Focus on Why & How? Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        We Focus on Why & How?
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/our-values/always-we-before-me.svg"
                        alt="Always We Before Me Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        Always We Before Me
                      </figcaption>
                    </figure>
                  </a>

                  <a href="#" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/our-values/we-do-not-settle.svg"
                        alt="We Don’t Settle Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        We Don’t Settle
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/our-values/we-empower-the-future.svg"
                        alt="We Empower The Future Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        We Empower The Future
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/our-values/transparency-and-honesty.svg"
                        alt="Transparency and Honesty Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        Transparency and Honesty
                      </figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            </section>

            <section className="container-fluid our_values__content">
              <div className="container">
                <div className="row our_values__content__wapper">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 class="col-primary heading c-fw-600 about--heading-underline">
                          Customers Come First
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p class="col-dark-light c-fs-4">
                          We are the leaders that solve problems from the
                          perspective of the customer's experiences. Before
                          wearing our corporate jacket, we wear our customer’s
                          shoes to provide them the solutions they need.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <figure>
                          <img
                            src="/img/our-values/customers-come-first-grey.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row our_values__content__wapper">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 class="col-primary heading c-fw-600 about--heading-underline">
                          Embracing Setbacks to Break Boundaries
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p class="col-dark-light c-fs-4">
                          Everytime we hit a wall of setback, we push ourselves
                          harder to create new milestones and leave a legacy
                          behind. Once a setback is experienced, we strive on
                          with a deeper understanding of what is need to be done
                          to eventually succeed.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <figure>
                          <img
                            src="/img/our-values/embracing-setbacks-to-break-boundaries-grey.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row our_values__content__wapper">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 class="col-primary heading c-fw-600 about--heading-underline">
                          We Set Impossible Goals
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p class="col-dark-light c-fs-4">
                          We are fueled with a healthy disrespect for the
                          impossible. We make sure to never get distracted with
                          trying to improve things by 10% when we have the
                          certainty and the ability to improve them by 10x.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <figure>
                          <img
                            src="/img/our-values/we-set-impossible-goals-grey.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row our_values__content__wapper">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 class="col-primary heading c-fw-600 about--heading-underline">
                          People are our Power
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p class="col-dark-light c-fs-4">
                          We know that technology is merely an enabler to
                          challenge boundaries and true success is achieved by a
                          honest, efficient and fearless individuals. We make
                          sure to never stop in our pursuit of bringing out the
                          best in people.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <figure>
                          <img
                            src="/img/our-values/people-are-our-power-grey.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row our_values__content__wapper">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 class="col-primary heading c-fw-600 about--heading-underline">
                          We Focus on ‘Why?’ & ‘How?’
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p class="col-dark-light c-fs-4">
                          Our philosophy revolves around two important questions
                          -’Why’ and ‘How’. Asking ‘Why’ to ourselves and those
                          around us gives the purpose for our actions and
                          \‘How\’ gives us the shortest path to execute them.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <figure>
                          <img
                            src="/img/our-values/we-focus-on-why-and-how-grey.svg.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row our_values__content__wapper">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 class="col-primary heading c-fw-600 about--heading-underline">
                          Always We Before Me
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p class="col-dark-light c-fs-4">
                          We believe in collaborating both inside and outside
                          the organization to maximize our shared knowledge and
                          bring great value to our customers. We are
                          self-centred in our preparation, but selfless in our
                          execution.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <figure>
                          <img
                            src="/img/our-values/always-we-before-me-grey.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row our_values__content__wapper">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 class="col-primary heading c-fw-600 about--heading-underline">
                          We Don’t Settle
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p class="col-dark-light c-fs-4">
                          We don’t settle for anything less than excellent and
                          extraordinary in every group of our organization and
                          possess the honesty to admit when we’re wrong and the
                          courage to change, evolve and adapt according to the
                          situation.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <figure>
                          <img
                            src="/img/our-values/we-do-not-settle-grey.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row our_values__content__wapper">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 class="col-primary heading c-fw-600 about--heading-underline">
                          We Empower The Future
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p class="col-dark-light c-fs-4">
                          We focus on ways by which our organization can harness
                          the power of technology to transform today which can
                          create a better & brighter tomorrow in the most
                          sustainable way.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <figure>
                          <img
                            src="/img/our-values/we-empower-the-future-grey.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row our_values__content__wapper">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 class="col-primary heading c-fw-600 about--heading-underline">
                          Transparency and Honesty
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p class="col-dark-light c-fs-4">
                          We apply due care in maintaining transparency in our
                          work by providing honest, accurate and impartial
                          services to our clients. We avoid tricks, hidden
                          agendas and make information accessible to our
                          employees and our clients alike.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <figure>
                          <img
                            src="/img/our-values/transparency-and-honesty-grey.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Leadership Principles Page */}
        <div style={{
          display: currentMenu === 2 ? "block" : "none"
        }}>
          <div className="leadership_principles">
            <div className="our_values">
              <section className="container-fluid our_values__illustration">
                <div className="container">
                  <div className="d-flex flex-wrap align-items-center justify-content-center column-gap-3 row-gap-3">
                    <a href="#" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/our-values/customers-come-first.svg"
                          alt="Nurtures Collaboration Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Nurtures Collaboration
                        </figcaption>
                      </figure>
                    </a>
                    <a href="#" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/our-values/embracing-setbacks-to-break-boundaries.svg"
                          alt="Leads through Communication Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Leads through Communication
                        </figcaption>
                      </figure>
                    </a>
                    <a href="#" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/our-values/we-set-impossible-goals.svg"
                          alt="Leads By Example Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Leads By Example
                        </figcaption>
                      </figure>
                    </a>

                    <a href="#" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/our-values/people-are-our-power.svg"
                          alt="Consults and Delegates Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Consults and Delegates
                        </figcaption>
                      </figure>
                    </a>
                    <a href="#" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/our-values/we-focus-on-why-and-how.svg"
                          alt="Is Courageous Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}

                          Is Courageous
                        </figcaption>
                      </figure>
                    </a>
                    <a href="#" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/our-values/always-we-before-me.svg"
                          alt="Adds Integrity Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Adds Integrity
                        </figcaption>
                      </figure>
                    </a>

                    <a href="#" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/our-values/we-do-not-settle.svg"
                          alt="Serves for the Greater Good Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Serves for the Greater Good
                        </figcaption>
                      </figure>
                    </a>
                    <a href="#" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/our-values/we-empower-the-future.svg"
                          alt="Defines & Creates Processes Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Defines & Creates Processes
                        </figcaption>
                      </figure>
                    </a>
                    <a href="#" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/our-values/transparency-and-honesty.svg"
                          alt="Adapts to Evolve Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Adapts to Evolve
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* The Team Page */}
        <div style={{
          display: currentMenu === 3 ? "block" : "none"
        }}>
          <div className="team"></div>
        </div>

        {/* ============================================================================================================================ */}
        <section className="about__see_more">
          <div className="d-flex py-4">
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
                <a className="col-primary d-inline-block about__see_more__btn border col-primary border-3">
                  Our Values
                </a>
                <a className="about__see_more__btn col-primary  border border-3">
                  Leadership Principles
                </a>
                <a className="about__see_more__btn col-primary border border-3">
                  The Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default about;
