import Image from "next/image";
import data from "./data.json";
import { MdCircle } from "react-icons/md";

export default function HomePageFeatures() {
  const features = Array.isArray(data) ? data : [];

  return (
    <section className="bg-neutral py-5">
      <div className="container">
        <h2 className="text-center sub-heading py-5">Features</h2>

        {features.map((feature, index) => {
          const imageRight = index % 2 === 0;
          return (
            <div className="row align-items-center text-start py-5" key={feature.feature + "-" + index}>
              <div className={`col-12 col-md-6  ${imageRight ? "order-md-1" : "order-md-2"}`}>
                <h3 className="garamond-font col-primary c-fs-1 c-fw-400">{feature.feature}</h3>
                <p className="col-dark-grey c-fs-4">{feature.description}</p>

                {Array.isArray(feature.more_content) && (
                  <ul className="ps-3 mb-0 col-dark-grey c-fs-4">
                    {feature.more_content.map((content, index) => (
                      <li key={index}><MdCircle fontSize={5} className="align-self-center mx-1"/> {content}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={`col-12 col-md-6 ${imageRight ? "order-md-2" : "order-md-1"}`}>
                {feature.img ? (
                  <div className="d-flex justify-content-center">
                    <Image
                      src={feature.img}
                      alt={feature.feature}
                      width={550}
                      height={350}
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
