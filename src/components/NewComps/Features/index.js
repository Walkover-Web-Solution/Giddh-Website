import data from "@/data/data.json";
import Link from "next/link";
import style from "./Features.module.scss";
import Image from "next/image";

export default function Features(path) {
  return (
    <section className="container section_py d-flex flex-column gap-5">
      {data?.globalCardData?.map((feature, index) => {
        return (
          <div
          key={index}
            className={`d-flex gap-5 flex-column flex-md-row align-items-center ${
              index % 2 === 1 ? "flex-md-row-reverse" : ""
            }`}
          >
            <div>
              <h2 className="c-fs-3 c-fw-600  col-primary">{feature?.name}</h2>
              <p>{feature?.description}</p>
              {feature?.link && <Link href={feature?.link}>Learn More</Link>}
            </div>
            <div className={style.img_cont}>
              <Image
                src={`/img/feature-gallery-icons${feature?.image}`}
                className={style.img}
                width={440}
                height={440}
                alt={feature?.name}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
