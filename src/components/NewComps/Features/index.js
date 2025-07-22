import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import data from "./data.json";
import style from "./Features.module.scss";
import Image from "next/image";
import { useState } from "react";

export default function Features() {
  const [readMore, setReadMore] = useState(null);

  const handleReadMore = (index) => {
    setReadMore((prev) => (prev === index ? null : index));
  };

  return (
    <section className="container section_py d-flex flex-column gap-4">
      {data.map((feature, index) => (
        <div
          key={index}
          className={`d-flex gap-lg-5 gap-md-3 gap-2 flex-column flex-md-row align-items-center col-12 ${
            index % 2 === 1 ? "flex-md-row-reverse" : ""
          }`}
        >
          <div className="w-100">
            <h2 className="c-fs-3 c-fw-600 col-primary">{feature?.name}</h2>
            {feature?.description && (
              <p className="mb-0">{feature?.description}</p>
            )}
            <div className="d-block d-md-none">
              <button
                type="button"
                className="btn btn-link p-0"
                onClick={() => handleReadMore(index)}
                aria-expanded={readMore === index}
                aria-controls={`feature-readmore-${index}`}
                aria-hidden={readMore !== index}
              >
                {readMore === index ? (
                  <>
                    Read Less <MdKeyboardArrowUp fontSize={20} />
                  </>
                ) : (
                  <>
                    Read More <MdKeyboardArrowDown fontSize={20} />
                  </>
                )}
              </button>
            </div>
            <div
              id={`feature-readmore-${index}`}
              className={`${
                readMore === index ? "d-block" : "d-none"
              } d-md-block`}
            >
              {feature?.moreHeading && (
                <p className="mb-1 c-fw-600">{feature?.moreHeading}</p>
              )}
              {feature?.content && feature?.content?.length > 0 && (
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
