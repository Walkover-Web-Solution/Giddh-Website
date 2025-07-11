import data from "@/data/data.json";
import Link from "next/link";
import style from "./Features.module.scss";
import Image from "next/image";
import { MdArrowLeft, MdChevronRight } from "react-icons/md";

export default function Features(path) {
  const features = data[path.path.country] || data["global"];
  if (features && features.length > 0) {
    return (
      <section className="container section_py d-flex flex-column gap-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`d-flex gap-lg-5 gap-md-3 gap-2 flex-column flex-md-row align-items-center col-12 ${
              index % 2 === 1 ? "flex-md-row-reverse" : ""
            }`}
          >
            <div className="w-100">
              <h2 className="c-fs-3 c-fw-600  col-primary">{feature?.name}</h2>
              <div dangerouslySetInnerHTML={{ __html: feature?.description }} />
              {feature?.link && <Link href={feature?.link}>Learn More</Link>}
            </div>
            <div className={style.img_cont}>
              <Image
                src={feature?.image}
                className={style.img}
                width={440}
                height={440}
                alt={feature?.name}
              />
            </div>
          </div>
        ))}
        <div
          className={`d-flex gap-lg-5 gap-md-3 gap-2 flex-column flex-md-row align-items-center col-12 ${
            features?.length % 2 === 1 ? "flex-md-row-reverse" : ""
          }`}
        >
          <div className="w-100">
            <h2 className="c-fs-1 c-fw-600  col-primary">
              Explore More Features
            </h2>
            <p>
              Discover advanced tools to simplify your accounts, manage multiple
              users, and automate tedious tasks. Take control of your finances
              with features designed to help your business grow.
            </p>
            <Link href={path.path.linkPrefix + "/all-features"}>
              Explore More
              <MdChevronRight />
            </Link>
          </div>
          <div className={style.img_cont}>
            <Image
              src={`/img/features/more_features.svg`}
              className={style.img}
              width={440}
              height={440}
              alt="More Features"
            />
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
