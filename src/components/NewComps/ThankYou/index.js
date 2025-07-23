import { MdCheckCircleOutline } from "react-icons/md";
import style from "./ThankYou.module.scss";
import Link from "next/link";
export default function ThankYou() {
  return (
    <section
      className={`${style.section} d-flex align-items-center justify-content-center`}
    >
      <div className="d-flex align-items-center justify-content-center flex-column gap-2">
        <MdCheckCircleOutline className={style.check} />
        <h1 className="col-primary c-fw-600 mb-0 heading">Thank You!</h1>
        <p className="col-primary mb-0 c-fs-2 text-center">
          Your demo request has been submitted successfully. <br />
          Our team will get in touch with you shortly.
        </p>
        <div>
          <Link href="https://giddh.com/contact-us">
            <button className="btn btn-link"> Contact us</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
