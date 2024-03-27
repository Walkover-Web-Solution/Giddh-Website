import { MdAdd, MdKeyboardArrowDown } from "react-icons/md";

const bankIntegration = () => {
  return (
    <>
      <div className="bank_integration">
        <section className="container-fluid bank_integration__head_content">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <div className="d-flex align-items-center justify-content-center mb-5">
                  <span>
                    <img
                      src="/img/giddh-logo.svg"
                      alt="Giddh Accounting Software Logo"
                      height="33px"
                    />
                  </span>
                  <span className="bank_integration__head_content__add_icon mx-3">
                    <MdAdd />
                  </span>
                  <span className="heading c-fw-600 col-primary">
                    BANK INTEGRATION
                  </span>
                </div>
                <div className="mb-5 px-5 px-small">
                  <p className="c-fs-1 c-fw-600 col-primary">
                    Connect your Bank account with Giddh and do much more
                    than just monitor your daily transactions
                  </p>
                </div>
                <div className="mb-5 px-5">
                  <p className="col-grey">
                    Get new transactions delivered from your bank account into
                    Giddh – automatically & securely. By linking your bank
                    accounts you can actively monitor your day to day
                    transactions and reconcile your books. Bank link helps you
                    keep track of your cash flow in the most secure, fast and
                    reliable way.
                  </p>
                </div>
                <div className="mb-5">
                  <a
                    href={"https://giddh.com/in/signup"}
                    target="_blank"
                    className="bank_integration__get_started_btn col-white"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid bank_integration__benifits_section">
          <div className="container">
            <div className="row mb-5">
              <div className="text-center pt-2">
                <span className="bank_integration__benifits_section__down_arrow_icon">
                  {" "}
                  <MdKeyboardArrowDown />{" "}
                </span>
                <div className="pt-2 c-fs-4 col-dark-light">
                  Benefits at a glance
                </div>
              </div>
            </div>
            <div className="row py-5 g-5">
              <div className="col-md-6 col-lg-4">
                <div className="px-3">
                  <figure>
                    <img src="/img/hand-shake.svg" alt="hand-shake icon" />
                  </figure>
                  <h3 className="c-fs-4 c-fw-600">
                    Easy
                    <br />
                    Reconciliation
                  </h3>
                  <p className="c-fs-6">
                    All the transactions are automatically fetched in Giddh once
                    you integrate your bank corporate account. Keep your
                    bank and books matched perfectly always.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="px-3">
                  <figure>
                    <img
                      src="/img/card-swipe-icon.svg"
                      alt="Make payment to vendors directly Icon"
                    />
                  </figure>
                  <h3 className="c-fs-4 c-fw-600">
                    Make payment to vendors directly from Giddh
                  </h3>
                  <p className="c-fs-6">
                    Save a lot of time and never let your dues exceed the time
                    line. Pay vendors directly from the Giddh through just one
                    click. No need to go anywhere else to make the payment.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="px-3">
                  <figure>
                    <img
                      src="/img/set-payment-limit-icon.svg"
                      alt="Set limit to payments Icon"
                    />
                  </figure>
                  <h3 className="c-fs-4 c-fw-600">
                    Set limit to <br />
                    payments
                  </h3>
                  <p className="c-fs-6">
                    Be carefree about your bank account. Set different OTP
                    authorisation levels according to the amount being paid.
                    Limit the transaction amount.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="px-3">
                  <figure>
                    <img
                      src="/img/money-loan-icon.svg"
                      alt="Capital Loan at good rates Icon"
                    />
                  </figure>
                  <h3 className="c-fs-4 c-fw-600">
                    Working Capital Loan at good rates
                  </h3>
                  <p className="c-fs-6">
                    Avail working capital loans faster at very good rates as
                    compared to the market through Giddh. Get a loan in just a
                    snap.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="px-3">
                  <figure>
                    <img
                      src="/img/bulk-payment-card-icon.svg"
                      alt="Bulk Payment Icon"
                    />
                  </figure>
                  <h3 className="c-fs-4 c-fw-600">
                    Bulk <br />
                    Payment
                  </h3>
                  <p className="c-fs-6">
                    Make payment for multiple invoices of a particular vendor
                    via Bank in a single go using Giddh. This is the
                    fastest and most accurate way of doing bulk payment.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="px-3">
                  <figure>
                    <img
                      src="/img/bank-statement-icon.svg"
                      alt="Bank statement & bank balance icon"
                    />
                  </figure>
                  <h3 className="c-fs-4 c-fw-600">
                    Bank statement <br />& bank balance
                  </h3>
                  <p className="c-fs-6">
                    Keep a check on money flowing in and out of your bank
                    account from anywhere. Have access to your bank statement in
                    your hand held gizmo through Giddh mobile application.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center my-4">
              <a
                href={"https://giddh.com/in/signup"}
                target="_blank"
                className="bank_integration__get_started_btn col-white"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default bankIntegration;
