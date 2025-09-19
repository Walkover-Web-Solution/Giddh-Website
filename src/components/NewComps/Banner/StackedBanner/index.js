import Image from "next/image";
import styles from "./StackedBanner.module.scss";

export default function StackedBanner({ compData }) {
  return (
    <section className={`bg-soft-blue ${styles.topSection}`}>
      <div className="container py-5 d-flex flex-row flex-wrap gap-4 justify-content-center align-items-center ">
        {compData?.image ? (
          <Image
            width={1080}
            height={585}
            className="img-fluid align-self-center"
            src={compData?.image}
            alt={compData?.heading}
          />
        ) : null}

        <h1 className="text-center c-fw-400 heading garamond-font col-primary">
          {compData?.heading}
        </h1>
        <div className="col-lg-8 mx-auto">
          <p className="text-center col-grey-deep">{compData?.subHeading}</p>
        </div>
      </div>
    </section>
  );
}
