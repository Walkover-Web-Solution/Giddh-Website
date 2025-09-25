import { MdCheckCircleOutline } from "react-icons/md";
import style from "./ThankYou.module.scss";
export default function ThankYou() {
  return (
    <>
      <section
        className={`${style.section} d-flex align-items-center justify-content-center`}
      >
        <div className="d-flex align-items-center justify-content-center flex-column gap-2">
          <MdCheckCircleOutline className={`${style.check} col-success`} />
          <h1 className="col-primary c-fw-600 mb-0 heading">Thank You!</h1>
          <p className="col-primary mb-0 c-fs-2 text-center">
            Your demo request has been submitted successfully. <br />
            Our team will get in touch with you shortly.
          </p>
          <div>
            {/* <a
              className="text-decoration-underline"
              href="https://giddh.com/contact-us"
            >
              Contact us
            </a> */}
          </div>
        </div>
      </section>
    </>
  );
}
