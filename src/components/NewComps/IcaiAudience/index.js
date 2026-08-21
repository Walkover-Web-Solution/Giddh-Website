import { MdCheck } from "react-icons/md";

export default function IcaiAudience({ compData }) {
  if (!compData?.cards?.length) return null;

  return (
    <section className="py-5 outfit-font bg-extra-light-blue">
      <div className="container d-flex flex-column gap-4">
        <div className="d-flex flex-column align-items-center text-center gap-3">
          {compData?.badge && (
            <span className="rounded-4 px-2 py-1 bg-faded-blue font-primary c-fs-7 c-fw-600 text-uppercase">
              {compData.badge}
            </span>
          )}
          {compData?.heading && (
            <h2 className="garmond-font font-sub-heading font-primary m-0">
              {compData.heading}
            </h2>
          )}
        </div>

        <div className="row g-3">
          {compData.cards.map((card, index) => (
            <div key={index} className="col-12 col-md-6">
              <div className="bg-white border rounded-4 p-4 p-md-5 h-100 position-relative overflow-hidden">
                <div
                  className="bg-accent position-absolute top-0 start-0 w-100"
                  style={{ height: 4 }}
                />
                <h3 className="garmond-font font-primary font-xl font-600 mb-3 pt-1">
                  {card?.title}
                </h3>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  {card.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="d-flex align-items-center gap-2 font-sm"
                    >
                      <span
                        className="d-flex align-items-center justify-content-center bg-faded-blue rounded-4 flex-shrink-0"
                        style={{ width: 20, height: 20, minWidth: 20 }}
                      >
                        <MdCheck size={12} className="font-primary" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
