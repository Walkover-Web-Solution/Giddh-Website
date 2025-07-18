import data from "./data.json";
import style from "./Features.module.scss";
import Image from "next/image";

export default function Features() {
  return (
    <section className="container section_py d-flex flex-column gap-5">
      {data.map((feature, index) => (
        <div
          key={index}
          className={`d-flex gap-lg-5 gap-md-3 gap-2 flex-column flex-md-row align-items-center col-12 ${
            index % 2 === 1 ? "flex-md-row-reverse" : ""
          }`}
        >
          <div className="w-100">
            <h2 className="c-fs-3 c-fw-600 col-primary">{feature?.name}</h2>
            {feature?.description && <p>{feature?.description}</p>}
            <div>
              {feature?.moreHeading && (
                <p className="mb-1 c-fw-600">{feature?.moreHeading}</p>
              )}
              {feature?.content && feature?.content?.length && (
                <ul className="list-disc ms-4">
                  {feature?.content.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div
            className={`${style.img_cont} w-100 d-flex align-items-center justify-content-center p-4 bg-light-blue`}
          >
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
    </section>
  );
}
