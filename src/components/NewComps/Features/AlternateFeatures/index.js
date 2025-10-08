import Image from "next/image";
import { MdCircle } from "react-icons/md";

export default function AlternateFeatures({ features }) {
  if (!features?.content?.length) return null;
  return (
    <section className="bg-neutral py-5">
      <div className="container d-flex flex-column gap-5">
        <div className="d-flex flex-column g-2">
          <h2 className="text-center font-sub-heading garmond-font">
            {features?.heading}
          </h2>
          <p className="text-center font-slate-grey font-md">
            {features?.subHeading}
          </p>
        </div>
        {features?.content?.map((feature, index) => {
          const imageRight = index % 2 === 0;
          return (
            <div
              className="row align-items-center justify-content-between"
              key={feature?.feature + "-" + index}
            >
              <div
                className={`col-12 col-md-7 ${
                  imageRight ? "order-md-1" : "order-md-2"
                }`}
              >
                <h3 className="garmond-font font-primary font-xl font-600">
                  {feature?.heading}
                </h3>
                <p className="font-slate-grey font-md">
                  {feature?.description}
                </p>
                {feature?.more_content && (
                  <ul className="mb-0 font-slate-grey font-md">
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
                className={`col-12 col-md-4 ${
                  imageRight ? "order-md-2" : "order-md-1"
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
        {features?.buttons && (
          <div className="d-flex justify-content-center">
            {features?.buttons?.map((button, index) => (
              <button
                key={index}
                className={`btn btn-primary-outline mx-auto`}
                onClick={() => (window.location.href = button?.link)}
              >
                {button?.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
