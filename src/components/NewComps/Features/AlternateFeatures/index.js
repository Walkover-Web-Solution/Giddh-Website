import Image from "next/image";
import { MdCircle } from "react-icons/md";

export default function AlternateFeatures({ features }) {
  if (features?.content?.length === 0) return null;
  return (
    <section className="bg-neutral pt-5">
      <div className="container d-flex flex-column gap-5">
        <h2 className="text-center sub-heading garamond-font">
          {features?.heading}
        </h2>
        {features?.content?.map((feature, index) => {
          const imageRight = index % 2 === 0;
          return (
            <div
              className="row align-items-center text-start"
              key={feature?.feature + "-" + index}
            >
              <div
                className={`col-12 col-md-6  ${imageRight ? "order-md-1" : "order-md-2"
                  }`}
              >
                <h3 className="garamond-font col-primary c-fs-1 c-fw-400">
                  {feature?.feature}
                </h3>
                <p className="col-dark-grey c-fs-4">{feature?.description}</p>
                {Array.isArray(feature?.more_content) && (
                  <ul className="mb-0 col-dark-grey c-fs-4">
                    {feature?.more_content?.map((content, index) => (
                      <li key={index}>
                        <MdCircle
                          fontSize={5}
                          className="align-self-center mx-1"
                        />{" "}
                        {content}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div
                className={`col-12 col-md-6 ${imageRight ? "order-md-2" : "order-md-1"
                  }`}
              >
                {feature?.img ? (
                  <div className="d-flex justify-content-center">
                    <Image
                      src={feature?.img}
                      alt={feature?.feature}
                      width={550}
                      height={550}
                      className="img-fluid rounded"
                    />
                  </div>
                ) : (
                  <div className="ratio ratio-4x3 bg-light rounded"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
