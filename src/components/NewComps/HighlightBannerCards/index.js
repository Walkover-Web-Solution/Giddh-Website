import { MdCheck } from "react-icons/md";
import styles from "./HighlightBannerCards.module.scss";

export default function HighlightBannerCards({ compData }) {
  if (!compData?.items?.length) return null;

  return (
    <section className="py-5 outfit-font container">
      <div className="bg-accent font-white rounded-4 p-4 p-md-5 text-center">
        {compData?.heading && (
          <h2 className="garmond-font font-sub-heading font-white mb-4">
            {compData.heading}
          </h2>
        )}
        <div className="row g-3 text-start">
          {compData.items.map((item, index) => (
            <div key={index} className="col-12 col-md-6">
              <div className="rounded-4 p-4 h-100 bg-white bg-opacity-10">
                <span
                  className={`d-inline-flex align-items-center justify-content-center rounded-4 bg-white bg-opacity-25 mb-2 ${styles.checkBadge}`}
                >
                  <MdCheck size={14} className="font-white" />
                </span>
                <h3 className="font-white font-sm font-600 mb-1">
                  {item?.title}
                </h3>
                <p className="font-sm mb-0 text-white-50">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
