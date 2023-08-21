import { useState } from "react";
import { usePathname } from "next/navigation";

const about = () => {
  const [currentMenu, setCurrentMenu] = useState(0);
  const setCurrent = (index) => {
    setCurrentMenu(index);
  };

  // To get active route
  const pathname = usePathname();
  const startPath = pathname.split("/");
  let isIndia = startPath[1] !== "ae" && startPath[1] !== "uk";
  return (
    <>
      <div className="about" id="top">
        <section className="container pb-3">
          <div className="row">
            <ul className="col-12 mb-4 d-flex flex-wrap justify-content-center align-items-center column-gap-4 row-gap-5 c-fs-4">
              <li>
                <span
                  className={
                    "about__navbar " + (currentMenu === 0 ? "active" : "")
                  }
                  onClick={() => setCurrent(0)}
                >
                  About Us
                </span>
              </li>
              <li>
                <span
                  className={
                    "about__navbar " + (currentMenu === 1 ? "active" : "")
                  }
                  onClick={() => setCurrent(1)}
                >
                  Our Values
                </span>
              </li>
              <li>
                <span
                  className={
                    "about__navbar " + (currentMenu === 2 ? "active" : "")
                  }
                  onClick={() => setCurrent(2)}
                >
                  Leadership Principles
                </span>
              </li>
              <li>
                <span
                  className={
                    "about__navbar " + (currentMenu === 3 ? "active" : "")
                  }
                  onClick={() => setCurrent(3)}
                >
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
                  <span
                    style={{
                      display: currentMenu === 0 ? "inline" : "none",
                    }}
                  >
                    About Us
                  </span>
                  <span
                    style={{
                      display: currentMenu === 1 ? "inline" : "none",
                    }}
                  >
                    Our Values
                  </span>
                  <span
                    style={{
                      display: currentMenu === 2 ? "inline" : "none",
                    }}
                  >
                    Leadership Principles
                  </span>
                  <span
                    style={{
                      display: currentMenu === 3 ? "inline" : "none",
                    }}
                  >
                    The Team
                  </span>
                </h3>
              </div>
              <div className=" col-lg-6 col-md-12 ms-4 about__container__title">
                <span
                  className="c-fs-5 col-white"
                  style={{
                    display: currentMenu === 0 ? "inline" : "none",
                  }}
                >
                  Pioneering the Automation Revolution in Accounting!
                </span>
                <span
                  className="c-fs-5 col-white"
                  style={{
                    display: currentMenu === 1 ? "inline" : "none",
                  }}
                >
                  Our values are the essence of our identity and summarises the
                  purpose of our existence
                </span>
                <span
                  className="c-fs-5 col-white"
                  style={{
                    display: currentMenu === 2 ? "inline" : "none",
                  }}
                >
                  The difference between success and failure is not the amount
                  of money or resources you have, but how a leader leads his
                  team. A GOOD LEADER ALWAYS:
                </span>
                <span
                  className="c-fs-5 col-white"
                  style={{
                    display: currentMenu === 3 ? "inline" : "none",
                  }}
                >
                  Our VISION is to provide technologies to organizations that
                  enables them to take data driven financial decisions in the
                  quickest way possible.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================================================================================ */}

        {/* Main About Page */}
        <div
          style={{
            display: currentMenu === 0 ? "block" : "none",
          }}
        >
          <section className="about__content mb-5">
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
                  src="/walkover-web-solution-pvt-ltd-company-logo.svg"
                  alt="Walkover Web Solutions Pvt Ltd, Indore, Madhya Pradesh, India logo"

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
                      src="/img/about/msg91-company-logo.svg"
                      alt="msg91-company-logo"
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
                  <a href="https://msg91.com/" className="text-center">
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
                      alt="via-socket-logo"
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
                  <a href="https://viasocket.com/" className="text-center">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Our Values Page */}
        <div
          style={{
            display: currentMenu === 1 ? "block" : "none",
          }}
        >
          <div className="our_values">
            <section className="container-fluid our_values__illustration">
              <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center column-gap-3 row-gap-3">
                  <a href="#customersComeFirst" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/about/our-values/customers-come-first.svg"
                        alt="Customers Come First Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        Customers Come First
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#setbacksToBreakBoundaries" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/about/our-values/embracing-setbacks-to-break-boundaries.svg"
                        alt="Setbacks to Break Boundaries Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        Setbacks to Break Boundaries
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#weSetImpossibleGoals" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/about/our-values/we-set-impossible-goals.svg"
                        alt="We Set Impossible Goals Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        We Set Impossible Goals
                      </figcaption>
                    </figure>
                  </a>

                  <a href="#peopleAreOurPower" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/about/our-values/people-are-our-power.svg"
                        alt="People are our Power Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        People are our Power
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#weFocusOnWhyHow" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/about/our-values/we-focus-on-why-and-how.svg"
                        alt="We Focus on Why & How? Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        We Focus on Why & How?
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#alwaysWeBeforeMe" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/about/our-values/always-we-before-me.svg"
                        alt="Always We Before Me Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        Always We Before Me
                      </figcaption>
                    </figure>
                  </a>

                  <a href="#weDoNotSettle" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/about/our-values/we-do-not-settle.svg"
                        alt="We Don’t Settle Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        We Don’t Settle
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#weEmpowerTheFuture" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/about/our-values/we-empower-the-future.svg"
                        alt="We Empower The Future Icon"
                      />
                      <figcaption className="col-primary c-fs-6">
                        {" "}
                        We Empower The Future
                      </figcaption>
                    </figure>
                  </a>
                  <a href="#transparencyAndHonesty" className="our_values__illustration__content">
                    <figure>
                      <img
                        src="/img/about/our-values/transparency-and-honesty.svg"
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
                <div className="row our_values__content__wapper" id="customersComeFirst">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 className="col-primary heading c-fw-600 mb-5 mb-lg-3 about--heading-underline">
                          Customers Come First
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p className="col-dark-light c-fs-4">
                          We are the leaders that solve problems from the
                          perspective of the customer's experiences. Before
                          wearing our corporate jacket, we wear our customer’s
                          shoes to provide them the solutions they need.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <figure>
                          <img
                            src="/img/about/our-values/customers-come-first-grey.svg"
                            className="img-fluid"
                            alt="Customers Come First logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row our_values__content__wapper" id="setbacksToBreakBoundaries">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 className="col-primary heading c-fw-600 mb-5 mb-lg-3 about--heading-underline">
                          Embracing Setbacks to Break Boundaries
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p className="col-dark-light c-fs-4">
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
                            src="/img/about/our-values/embracing-setbacks-to-break-boundaries-grey.svg"
                            className="img-fluid"
                            alt="Embracing Setbacks to Break Boundaries logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row our_values__content__wapper" id="weSetImpossibleGoals">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 className="col-primary heading c-fw-600 mb-5 mb-lg-3 about--heading-underline">
                          We Set Impossible Goals
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p className="col-dark-light c-fs-4">
                          We are fueled with a healthy disrespect for the
                          impossible. We make sure to never get distracted with
                          trying to improve things by 10% when we have the
                          certainty and the ability to improve them by 10x.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <figure>
                          <img
                            src="/img/about/our-values/we-set-impossible-goals-grey.svg"
                            className="img-fluid"
                            alt="We Set Impossible Goals logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row our_values__content__wapper" id="peopleAreOurPower">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 className="col-primary heading c-fw-600 mb-5 mb-lg-3 about--heading-underline">
                          People are our Power
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p className="col-dark-light c-fs-4">
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
                            src="/img/about/our-values/people-are-our-power-grey.svg"
                            className="img-fluid"
                            alt="People are our Power logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row our_values__content__wapper" id="weFocusOnWhyHow">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 className="col-primary heading c-fw-600 mb-5 mb-lg-3 about--heading-underline">
                          We Focus on ‘Why?’ & ‘How?’
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p className="col-dark-light c-fs-4">
                          Our philosophy revolves around two important questions
                          -’Why’ and ‘How’. Asking ‘Why’ to ourselves and those
                          around us gives the purpose for our actions and
                          \‘How\’ gives us the shortest path to execute them.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <figure>
                          <img
                            src="/img/about/our-values/we-focus-on-why-and-how-grey.svg.svg"
                            className="img-fluid"
                            alt="We Focus on ‘Why?’ & ‘How?’ logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row our_values__content__wapper" id="alwaysWeBeforeMe">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 className="col-primary heading c-fw-600 mb-5 mb-lg-3 about--heading-underline">
                          Always We Before Me
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p className="col-dark-light c-fs-4">
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
                            src="/img/about/our-values/always-we-before-me-grey.svg"
                            className="img-fluid"
                            alt="Always We Before Me logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row our_values__content__wapper" id="weDoNotSettle">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 className="col-primary heading c-fw-600 mb-5 mb-lg-3 about--heading-underline">
                          We Don’t Settle
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p className="col-dark-light c-fs-4">
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
                            src="/img/about/our-values/we-do-not-settle-grey.svg"
                            className="img-fluid"
                            alt="We Don’t Settle logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row our_values__content__wapper" id="weEmpowerTheFuture">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 className="col-primary heading c-fw-600 mb-5 mb-lg-3 about--heading-underline">
                          We Empower The Future
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p className="col-dark-light c-fs-4">
                          We focus on ways by which our organization can harness
                          the power of technology to transform today which can
                          create a better & brighter tomorrow in the most
                          sustainable way.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <figure>
                          <img
                            src="/img/about/our-values/we-empower-the-future-grey.svg"
                            className="img-fluid"
                            alt="We Empower The Future logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row our_values__content__wapper" id="transparencyAndHonesty">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h2 className="col-primary heading c-fw-600 mb-5 mb-lg-3 about--heading-underline">
                          Transparency and Honesty
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        <p className="col-dark-light c-fs-4">
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
                            src="/img/about/our-values/transparency-and-honesty-grey.svg"
                            className="img-fluid"
                            alt="Transparency and Honesty logo"
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
        <div
          style={{
            display: currentMenu === 2 ? "block" : "none",
          }}
        >
          <div className="leadership_principles">
            <div className="our_values">
              <section className="container-fluid our_values__illustration">
                <div className="container">
                  <div className="d-flex flex-wrap align-items-center justify-content-center column-gap-3 row-gap-3">
                    <a href="#nurturesCollaboration" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/about/leadership/nurtures-collaboration.svg"
                          alt="Nurtures Collaboration Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Nurtures Collaboration
                        </figcaption>
                      </figure>
                    </a>
                    <a href="#leadsThroughCommunication" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/about/leadership/leads-through-communication.svg"
                          alt="Leads through Communication Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Leads through Communication
                        </figcaption>
                      </figure>
                    </a>
                    <a href="#leadsByExample" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/about/leadership/leads-by-example.svg"
                          alt="Leads By Example Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Leads By Example
                        </figcaption>
                      </figure>
                    </a>

                    <a href="#consultsAndDelegates" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/about/leadership/consults-and-delegates.svg"
                          alt="Consults and Delegates Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Consults and Delegates
                        </figcaption>
                      </figure>
                    </a>
                    <a href="#isCourageous" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/about/leadership/is-courageous.svg"
                          alt="Is Courageous Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Is Courageous
                        </figcaption>
                      </figure>
                    </a>
                    <a href="#addsIntegrity" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/about/leadership/adds-integrity.svg"
                          alt="Adds Integrity Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Adds Integrity
                        </figcaption>
                      </figure>
                    </a>

                    <a href="#servesForTheGreaterGood" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/about/leadership/serves-for-the-greater-good.svg"
                          alt="Serves for the Greater Good Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Serves for the Greater Good
                        </figcaption>
                      </figure>
                    </a>
                    <a href="#definesCreatesProcesses" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/about/leadership/defines-and-creates-processes.svg"
                          alt="Defines & Creates Processes Icon"
                        />
                        <figcaption className="col-primary c-fs-6">
                          {" "}
                          Defines & Creates Processes
                        </figcaption>
                      </figure>
                    </a>
                    <a href="#adaptsToEvolve" className="our_values__illustration__content">
                      <figure>
                        <img
                          src="/img/about/leadership/adapts-to-evolve.svg"
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
              <section className="leadership_principles__banner_wrapper">
                <div className="container-fluid leadership_principles__banner_image_background"  id="nurturesCollaboration">
                  <div className="container">
                    <div className="row leadership_principles__content_wrapper align-items-center">
                      <div className="col-lg-3 col-md-12">
                        <div className="row align-items-center">
                          <div className="col-md-4 col-sm-12">
                            <figure>
                              <img
                                src="/img/about/leadership/nurtures-collaboration-white.svg"
                                width="auto"
                                height="80px"
                                alt="Icon"
                              />
                            </figure>
                          </div>
                          <div className="col-md-8 col-sm-12">
                            <h3 className="col-white c-fs-3">
                              Nurtures Collaboration
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-12  border-start ps-4">
                        <p className="col-white c-fs-4">
                          A good leader always nurtures collaboration and acts
                          as an active part in the process of co-creation with
                          his team and the entire ecosystem. A bad leader fails
                          to grasp the importance of collaboration and thus
                          fails himself and his team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid leadership_principles__banner_image_background" id="leadsThroughCommunication">
                  <div className="container">
                    <div className="row leadership_principles__content_wrapper align-items-center">
                      <div className="col-lg-3 col-md-12">
                        <div className="row align-items-center">
                          <div className="col-md-4 col-sm-12">
                            <figure>
                              <img
                                src="/img/about/leadership/leads-through-communication-white.svg"
                                width="auto"
                                height="80px"
                                alt="Icon"
                              />
                            </figure>
                          </div>
                          <div className="col-md-8 col-sm-12">
                            <h3 className="col-white c-fs-3">
                              Leads through Communication
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-12  border-start ps-4">
                        <p className="col-white c-fs-4">
                          A Good leader creates an environment that promotes
                          honest and open communications without the fear of
                          judgement. A bad leaders creates an hostile
                          environment that restricts open lines of
                          communication.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid leadership_principles__banner_image_background" id="leadsByExample">
                  <div className="container">
                    <div className="row leadership_principles__content_wrapper align-items-center">
                      <div className="col-lg-3 col-md-12">
                        <div className="row align-items-center">
                          <div className="col-md-4 col-sm-12">
                            <figure>
                              <img
                                src="/img/about/leadership/leads-by-example-white.svg"
                                width="auto"
                                height="80px"
                                alt="Icon"
                              />
                            </figure>
                          </div>
                          <div className="col-md-8 col-sm-12">
                            <h3 className="col-white c-fs-3">
                              Leads By Example
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-12  border-start ps-4">
                        <p className="col-white c-fs-4">
                          A good leader always leads by example. He is the first
                          to take actions, sets milestones and then encourages
                          his team follow. A bad leader is passive and fails to
                          take initiative.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid leadership_principles__banner_image_background" id="consultsAndDelegates">
                  <div className="container">
                    <div className="row leadership_principles__content_wrapper align-items-center">
                      <div className="col-lg-3 col-md-12">
                        <div className="row align-items-center">
                          <div className="col-md-4 col-sm-12">
                            <figure>
                              <img
                                src="/img/about/leadership/consults-and-delegates-white.svg"
                                width="auto"
                                height="80px"
                                alt="Icon"
                              />
                            </figure>
                          </div>
                          <div className="col-md-8 col-sm-12">
                            <h3 className="col-white c-fs-3">
                              {" "}
                              Consults and Delegates
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-12  border-start ps-4">
                        <p className="col-white c-fs-4">
                          A good leader has the ability to seek consultation
                          from subordinates and also has the ability to assign
                          tasks to the right employees taking their skills into
                          account. A bad leader is a bad judge of skill set and
                          delegates poorly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid leadership_principles__banner_image_background" id="isCourageous">
                  <div className="container">
                    <div className="row leadership_principles__content_wrapper align-items-center">
                      <div className="col-lg-3 col-md-12">
                        <div className="row align-items-center">
                          <div className="col-md-4 col-sm-12">
                            <figure>
                              <img
                                src="/img/about/leadership/is-courageous-white.svg"
                                width="auto"
                                height="80px"
                                alt="Icon"
                              />
                            </figure>
                          </div>
                          <div className="col-md-8 col-sm-12">
                            <h3 className="col-white c-fs-3">Is Courageous</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-12  border-start ps-4">
                        <p className="col-white c-fs-4">
                          A good leader has the strength of self to act with
                          intention on behalf of the common good. A bad leader
                          does not possess the courage to take a stand during
                          adversity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid leadership_principles__banner_image_background" id="addsIntegrity">
                  <div className="container">
                    <div className="row leadership_principles__content_wrapper align-items-center">
                      <div className="col-lg-3 col-md-12">
                        <div className="row align-items-center">
                          <div className="col-md-4 col-sm-12">
                            <figure>
                              <img
                                src="/img/about/leadership/adds-integrity-white.svg"
                                width="auto"
                                height="80px"
                                alt="Icon"
                              />
                            </figure>
                          </div>
                          <div className="col-md-8 col-sm-12">
                            <h3 className="col-white c-fs-3">Adds Integrity</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-12  border-start ps-4">
                        <p className="col-white c-fs-4">
                          A good leader has moral courage, ethical strength, and
                          trustworthiness. He is able to keep promises and
                          fulfill expectations. A bad leader lacks integrity
                          that inspires his team to take ethical measures in all
                          their actions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid leadership_principles__banner_image_background" id="servesForTheGreaterGood">
                  <div className="container">
                    <div className="row leadership_principles__content_wrapper align-items-center">
                      <div className="col-lg-3 col-md-12">
                        <div className="row align-items-center">
                          <div className="col-md-4 col-sm-12">
                            <figure>
                              <img
                                src="/img/about/leadership/serves-for-the-greater-good-white.svg"
                                width="auto"
                                height="80px"
                                alt="Icon"
                              />
                            </figure>
                          </div>
                          <div className="col-md-8 col-sm-12">
                            <h3 className="col-white c-fs-3">
                              Serves for the Greater Good
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-12  border-start ps-4">
                        <p className="col-white c-fs-4">
                          A good leader shows commitment that extends beyond
                          one’s own self interest; personal humility for the
                          sake of a greater cause. A bad leader is self serving
                          and does not believe in serving for a greater good.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid leadership_principles__banner_image_background" id="definesCreatesProcesses">
                  <div className="container">
                    <div className="row leadership_principles__content_wrapper align-items-center">
                      <div className="col-lg-3 col-md-12">
                        <div className="row align-items-center">
                          <div className="col-md-4 col-sm-12">
                            <figure>
                              <img
                                src="/img/about/leadership/defines-and-creates-processes-white.svg"
                                width="auto"
                                height="80px"
                                alt="Icon"
                              />
                            </figure>
                          </div>
                          <div className="col-md-8 col-sm-12">
                            <h3 className="col-white c-fs-3">
                              {" "}
                              Defines and Creates Processes
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-12  border-start ps-4">
                        <p className="col-white c-fs-4">
                          A good leader creates new processes before indulging
                          into a new project and makes sure to change that
                          process if it is rectifiable. A bad leader takes the
                          shortest path to complete a project without rectifying
                          the process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid leadership_principles__banner_image_background" id="adaptsToEvolve">
                  <div className="container">
                    <div className="row leadership_principles__content_wrapper align-items-center">
                      <div className="col-lg-3 col-md-12">
                        <div className="row align-items-center">
                          <div className="col-md-4 col-sm-12">
                            <figure>
                              <img
                                src="/img/about/leadership/adapts-to-evolve-white.svg"
                                width="auto"
                                height="80px"
                                alt="Icon"
                              />
                            </figure>
                          </div>
                          <div className="col-md-8 col-sm-12">
                            <h3 className="col-white c-fs-3">
                              Adapts to Evolve
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-12  border-start ps-4">
                        <p className="col-white c-fs-4">
                          A good leader uses his experience to recognize
                          different situations and take actions according to the
                          context. A bad leader make the mistake of taking the
                          same actions regardless of the facts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* The Team Page */}
        <div
          style={{
            display: currentMenu === 3 ? "block" : "none",
          }}
        >
          <div className="team">
            <section className="container-fluid">
              <div className="container">
                <h2 className="col-dark heading c-fw-600 about--heading-underline mb-5">
                  The Team
                </h2>
                <div className="d-flex flex-wrap justify-content-center column-gap-3 row-gap-3 pt-5 team__member_profile_pic_wapper">
                  <figure>
                    <img
                      src="/img/about/team/gaurav.png"
                      width="100%"
                      height="100%"
                      alt="Mr. Gaurav"
                    />
                    <div>
                      <figcaption>Gaurav</figcaption>
                      <figcaption>Engineering Lead</figcaption>
                    </div>
                  </figure>
                  <figure>
                    <img
                      src="/img/about/team/sheba.png"
                      width="100%"
                      height="100%"
                      alt="Sheba"
                    />
                    <div>
                      <figcaption>Sheba</figcaption>
                      <figcaption>Product Consultant</figcaption>
                    </div>
                  </figure>
                  <figure>
                    <img
                      src="/img/about/team/Ravinder.png"
                      width="100%"
                      height="100%"
                      alt="Mr. Ravinder"
                    />
                    <div>
                      <figcaption>Ravinder</figcaption>
                      <figcaption>Sr. Software Developer</figcaption>
                    </div>
                  </figure>
                  <figure>
                    <img
                      src={ isIndia ? "/img/about/team/dilpreet.jpg" : "/img/about/team/prateek.png"}
                      width="100%"
                      height="100%"
                      alt={  isIndia ? "Mr. Dilpreet" : "Mr. Prateek"}
                    />
                    <div>
                      <figcaption>{ isIndia ? "Dilpreet" : "Prateek"}</figcaption>
                      <figcaption>{ isIndia ? "Jr." : "Sr."} Software Developer</figcaption>
                    </div>
                  </figure>
                  <figure>
                    <img
                      src="/img/about/team/leena.png"
                      width="100%"
                      height="100%"
                      alt="Mrs. Leena"
                    />
                    <div>
                      <figcaption>Leena</figcaption>
                      <figcaption>Java Developer</figcaption>
                    </div>
                  </figure>
                  <figure>
                    <img
                      src="/img/about/team/Kriti.png"
                      width="100%"
                      height="100%"
                      alt="Miss Kriti"
                    />
                    <div>
                      <figcaption>Kriti</figcaption>
                      <figcaption>QA Lead</figcaption>
                    </div>
                  </figure>
                  <figure>
                    <img
                      src="/img/about/team/rishi.png"
                      width="100%"
                      height="100%"
                      alt="Mr. Rishi"
                    />
                    <div>
                      <figcaption>Rishi</figcaption>
                      <figcaption>Finance Expert</figcaption>
                    </div>
                  </figure>
                  <div className="team__member_profile_pic_wapper__msg_join_us ">
                    <p className="c-fs-4">
                      Interested to <br /> join out
                      <br /> team.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="container-fluid team__founder">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-11">
                    <h2 className="col-dark heading c-fw-600 about--heading-underline mb-5">
                      Founder
                    </h2>

                    <h3 className="col-white c-fs-1 fw-bold">
                      Shubhendra Agrawal,
                    </h3>
                    <h4 className="col-white c-fs-4">
                      Founder, Tech Visionary
                    </h4>
                    <p className="col-white c-fs-4 my-4">
                      Shubhendra Agrawal is the founder of Giddh. An
                      entrepreneur at heart and an engineer by choice, he
                      founded Giddh in 2016 with the idea of unifying accounting
                      with automation. Prior to Giddh, Shubhendra was the
                      co-founder and CFO of MSG91, one of India’s top 5
                      messaging solutions firm.
                    </p>
                    <p className="col-white c-fs-4">
                      With experience lasting over a decade in engineering, he
                      has been a keen analyser of consumer behavior helping him
                      cultivate a team that creates simple yet highly functional
                      IT products.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="container-fluid team__mentors">
              <div className="container">
                <h2 className="col-dark heading c-fw-600 about--heading-underline">
                  Mentors
                </h2>
                <div className="row border align-items-center">
                  <div className="col-xl-6 col-lg-12 ps-lg-0 pt-lg-0 pt-2">
                    <figure className="mb-0">
                      <img
                        src="/img/about/team/pushpendra.png"
                        width="100%"
                        height="100%"
                        alt="Mr. Pushpendra"
                      />
                    </figure>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="px-4">
                      <h3 className="c-fs-3 fw-bold">Pushpendra Agrawal,</h3>
                      <h4 className="c-fs-4 c-fw-400 mb-4">
                        Idea Guy, Technology Geek
                      </h4>

                      <p className="c-fs-4">
                        A calculated risk-taker with passion for everything
                        numbers, Pushpendra is an IMT pass out, and the founder
                        of Walkover. Over the years Pushpendra has perfected the
                        art of crafting the most efficient code and believes
                        apathy to be a man’s biggest foe and time to be his
                        biggest ally.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row flex-row-reverse border align-items-center my-5">
                  <div className="col-xl-6 col-lg-12 px-lg-0 pt-lg-0 pt-2">
                    <figure className="mb-0">
                      <img
                        src="/img/about/team/aashish-big.png"
                        width="100%"
                        height="100%"
                        alt="Mr. Ashish Yadav"
                      />
                    </figure>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="px-4">
                      <h3 className="c-fs-3 fw-bold">Ashish Yadav,</h3>
                      <h4 className="c-fs-4 c-fw-400 mb-4">Concept Creator</h4>

                      <p className="c-fs-4">
                        Ashish brings 10+ years of experience with himself in
                        designing highly functional and intuitive applications.
                        He believes Design to be the biggest ‘Weapon of Mass
                        Inspiration’. As a Head of Design at Walkover, his work
                        is grounded in his deep interest in how people connect
                        through visual communication.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row border align-items-center">
                  <div className="col-xl-6 col-lg-12 ps-lg-0 pt-lg-0 pt-2">
                    <figure className="mb-0">
                      <img
                        src="/img/about/team/ankita-big.png"
                        width="100%"
                        height="100%"
                        alt="Ankita Chadha"
                      />
                    </figure>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="px-4">
                      <h3 className="c-fs-3 fw-bold">Ankita Chadha,</h3>
                      <h4 className="c-fs-4 c-fw-400 mb-4">Idea Brewer</h4>

                      <p className="c-fs-4">
                        With a knack for creating beautiful spaces and bringing
                        together the brightest of minds,Ankita is the perfect
                        blend of a novelist, having written a novel, and an
                        entrepreneur, having founded Mitti-Brewing Ideas, a cafe
                        where the thinkers and doers collaborate and let their
                        creative juices flow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ============================================================================================================================ */}

        <section className="about__see_more">
          <div className="d-flex py-4">
            <div className="container d-flex gap-4 flex-column text-center">
              <h1 className="heading fw-bold col-primary">
                <span className="about--heading-underline about__see_more--pull-near-text">See More</span>
              </h1>
              <h3 className="c-fs-3">See more about the Company</h3>
              <span className="c-fs-5">
                Learn more about how Giddh can provide the solution you need.
              </span>
              <br></br>
              <div className="col-12 d-flex justify-content-center flex-wrap gap-3">
                <a className="col-primary d-inline-block about__see_more__btn border col-primary border-3" href="#top" onClick={() => setCurrent(1)}>
                  Our Values
                </a>
                <a className="about__see_more__btn col-primary  border border-3" href="#top" onClick={() => setCurrent(2)}>
                  Leadership Principles
                </a>
                <a className="about__see_more__btn col-primary border border-3" href="#top" onClick={() => setCurrent(3)}>
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
