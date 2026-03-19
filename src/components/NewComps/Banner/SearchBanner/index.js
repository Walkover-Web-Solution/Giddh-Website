import { MdSearch } from "react-icons/md";
import style from "./SearchBanner.module.scss";

export default function SearchBanner({ compData }) {
  return (
    <section className={`${style.banner} bg-accent padding-nav py-5`}>
      <div className="container d-flex flex-column align-items-center gap-4 py-5">
        <h1 className="text-center font-heading font-white">
          {compData?.heading}
        </h1>
        <p className="text-center font-grey-deep outfit-font col-lg-8 mx-auto">
          {compData?.subHeading}
        </p>

        {compData?.searchPlaceholder && (
          <div className={`${style.searchWrapper} position-relative w-100`}>
            <MdSearch
              className={`${style.searchIcon} position-absolute top-50 translate-middle-y font-grey-deep`}
            />
            <input
              type="text"
              className={`${style.searchInput} form-control rounded-3 py-2 outfit-font`}
              placeholder={compData.searchPlaceholder}
              
            />
          </div>
        )}

        {compData?.buttons?.length > 0 && (
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            {compData.buttons.map((button, index) => (
              <a key={index} href={button.link} target="_blank" rel="noreferrer">
                <button
                  className={`btn ${
                    index === 0 ? "btn-secondary" : "btn-secondary-outline"
                  }`}
                >
                  {button.text}
                </button>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
