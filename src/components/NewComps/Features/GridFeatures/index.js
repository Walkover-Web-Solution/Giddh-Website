import { MdCircle } from "react-icons/md";
import styles from "./GridFeatures.module.scss";
import Image from "next/image";

export default function GridFeatures({ features }) {
  if (!features?.cards?.length) return null;
  return (
    <section className="py-5">
      <div className="container d-flex flex-column gap-4">
        <div className="d-flex flex-column gap-4">
          <h2 className="text-center font-heading font-primary">
            {features?.heading}
          </h2>
          {features?.subHeading && (
            <p className="text-center font-md font-slate-grey">
              {features.subHeading}
            </p>
          )}
        </div>
        <div className="row g-3">
          {features.cards.map((card, index) => (
            <div key={index} className="col-12 col-md-6">
              <div
                className={`d-flex flex-column border rounded-4 px-4 py-2 text-center justify-content-center border-color-primary ${
                  styles.card
                }  ${card?.icon ? "py-4" : ""}`}
              >
                {card?.icon && (
                  <Image
                    width={80}
                    height={70}
                    src={card.icon}
                    alt={card?.heading}
                    className="align-self-center"
                  />
                )}
                <p className="m-0 font-xl font-600 font-primary">
                  {card?.heading}
                </p>
                <p className="font-md font-slate-grey">{card?.description}</p>
                {card?.more_content?.length && (
                  <ul>
                    {card.more_content.map((content, index) => (
                      <li key={index} className="font-sm">
                        <MdCircle size={5} /> {content}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
