import Image from "next/image";
import styles from "./StackedBanner.module.scss";

export default function StackedBanner({ compData }) {
  return (
    <section className={`${styles.topSection}`}>
      <div className="container pt-5 d-flex flex-row flex-wrap gap-4 justify-content-center align-items-center">
        {compData?.image ? (
          <Image
            width={1080}
            height={585}
            className="img-fluid align-self-center rounded-2"
            src={compData?.image}
            alt={compData?.heading}
          />
        ) : null}

        <h1 className="text-center c-fw-400 heading garmond-font col-primary">
          {compData?.heading}
        </h1>
        <div className="col-lg-8 mx-auto">
          <p className="text-center col-grey-deep">{compData?.subHeading}</p>
        </div>
      </div>
      <div className="pb-5 container d-flex gap-2 gap-md-4 justify-content-center align-items-center flex-column flex-md-row">
        <a href={compData?.buttons[0].link} target="_blank">
          <button className="btn btn-primary">
            {compData?.buttons[0].text}
          </button>
        </a>
        <a href={compData?.buttons[1].link} target="_blank">
          <button className="btn btn-primary-outline">
            {compData?.buttons[1].text}
          </button>
        </a>
      </div>
    </section>
  );
}
