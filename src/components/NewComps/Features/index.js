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
            className={`d-flex gap-lg-5 gap-md-3 gap-2 flex-column flex-md-row align-items-center col-12 ${
              index % 2 === 1 ? "flex-md-row-reverse" : ""
            }`}
          >
            <div className="w-100">
              <h2 className="c-fs-3 c-fw-600  col-primary">{feature?.name}</h2>
              <p dangerouslySetInnerHTML={{ __html: feature?.description }} />
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
        );
      })}
    </section>
  );
}
