import { usePathname } from 'next/navigation'
const enquiryForm = () => {
  // To get active route
  const pathname = usePathname();
  const startPath = pathname.split('/');
  let isIndia = startPath[1] === '';
  let isAE = startPath[1] === 'ae';
  let isUK = startPath[1] === 'uk';
  return (
    <>
      <section className="container-fluid enquiry_form">
        <div className="container enquiry_form--max-width-unset mt-auto">
          <div className="enquiry_form__wrapper d-flex align-items-center flex-column">
            <div className="enquiry_form__wrapper__title text-center">
              <h1>
                { isIndia ? 'Upgrade your Books to Giddh.' : ''}
                { isAE ? 'Dubai is all set to do VAT friendly accounting!' : ''}
                { isUK ? 'UK is all set to do VAT friendly accounting!' : ''}
                </h1>
              <p className="c-fs-3 mb-5">                
                { isIndia ? 'Giddh fits the needs of every business.' : ''}
                { isAE || isUK ? 'Light on pocket, easy to use, VAT compliant,' : ''}
                <br/>
                { isAE || isUK ? 'With Giddh, you can now connect to banks & departments seamlessly' : ''}
              </p>           
            </div>
            <div className="enquiry_form__wrapper__form_wrapper">
              <form>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 ">
                      <div className="mb-3">
                        <input
                          autoComplete="name"
                          type="email"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 ">
                      <div className="mb-3">
                        <input
                          autoComplete="email"
                          type="email"
                          className="form-control"
                          placeholder="example@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 ">
                      <div className="row">
                        <div className="col-4 pe-0">
                          <div className="mb-3">
                            <select
                              autoComplete="on"
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option value="+91" defaultValue>
                                +91
                              </option>
                              <option value="+652">+652</option>
                              <option value="+98">+98</option>
                              <option value="+30">+30</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="mb-3">
                            <input
                              autoComplete="tel-national"
                              type="email"
                              className="form-control"
                              placeholder="Mobile Number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mt-2">
                        <textarea
                          className="form-control"
                          rows="4"
                          placeholder="Description"
                          autoComplete="on"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="submit__button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default enquiryForm;
