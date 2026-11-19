import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

import {
  MdArrowForward,
  MdArrowOutward,
  MdAutoAwesome,
  MdCheckCircleOutline,
  MdClose,
  MdPlayArrow,
} from "react-icons/md";

import styles from "./HeroSection.module.scss";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function HeroSection({ compData, onStart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!compData) {
    return null;
  }

  const handleAnchorScroll = (targetId) => {
    if (typeof document === "undefined" || !targetId) {
      return;
    }
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handlePrimaryCta = () => {
    if (typeof onStart === "function") {
      onStart();
      return;
    }
    handleAnchorScroll(compData?.primaryCta?.targetId);
  };

  return (
    <section className={`outfit-font padding-nav ${styles.heroWrapper}`}>
      <div className={styles.heroGridBackdrop}>
        <div className="container px-4 py-5">
          <div className="row align-items-center justify-content-between g-5 py-lg-4">
            <div className="col-12 col-lg-6 d-flex flex-column gap-4">
              {compData?.eyebrow && (
                <div className="d-inline-flex align-items-center gap-2">
                  <span
                    className={`rounded-circle d-inline-block bg-blue opacity-75 ${styles.eyebrowDot}`}
                    aria-hidden="true"
                  />
                  <span className="font-xs font-600 font-grey-deep">
                    {compData?.eyebrow}
                  </span>
                </div>
              )}

              <h1 className={`outfit-font font-600 m-0 ${styles.heroTitle}`}>
                <span className="font-primary d-block">
                  {compData?.headingPrimary}
                </span>
                {compData?.headingAccent && (
                  <span
                    className={`font-blue opacity-75 d-block ${styles.heroTitleAccent}`}
                  >
                    {compData?.headingAccent}
                  </span>
                )}
              </h1>

              {compData?.description && (
                <p className="font-rg font-slate-grey m-0 col-lg-10 lh-lg">
                  {compData?.description}
                </p>
              )}

              <div className="d-flex flex-wrap align-items-center gap-4">
                {compData?.primaryCta?.text && (
                  <button
                    type="button"
                    className="btn btn-primary rounded-1 px-4 py-3 d-inline-flex align-items-center gap-3 font-sm font-600"
                    onClick={handlePrimaryCta}
                  >
                    <span>{compData?.primaryCta?.text}</span>
                    <MdArrowForward size={16} aria-hidden="true" />
                  </button>
                )}

                {compData?.secondaryCta?.text && (
                  <button
                    type="button"
                    className="bg-transparent border-0 border-bottom border-primary p-0 font-sm font-600 font-primary d-inline-flex align-items-center gap-2 cursor-pointer"
                    onClick={() =>
                      compData?.media?.videoUrl
                        ? setIsModalOpen(true)
                        : handleAnchorScroll(compData?.secondaryCta?.targetId)
                    }
                  >
                    <span>{compData?.secondaryCta?.text}</span>
                    <MdArrowOutward size={15} aria-hidden="true" />
                  </button>
                )}
              </div>

              {compData?.stats?.length > 0 && (
                <div className="row g-3 col-lg-11">
                  {compData.stats.map((item, index) => (
                    <div
                      key={index}
                      className="col-6 col-sm-3 d-flex flex-column gap-2"
                    >
                      <div className="font-lg font-600 font-primary lh-1">
                        {item?.value}
                      </div>
                      <div className="font-xs font-grey-deep">
                        {item?.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <div className={`position-relative w-100 ${styles.mediaStage}`}>
                <span className={styles.orbitRingTop} aria-hidden="true" />
                <span className={styles.orbitRingBottom} aria-hidden="true" />

                <div
                  className={`position-relative overflow-hidden rounded-4 bg-primary ${styles.mediaCard}`}
                >
                  {compData?.media?.image && (
                    <Image
                      src={compData?.media?.image}
                      alt={compData?.media?.imageAlt}
                      fill
                      sizes="(max-width: 992px) 100vw, 480px"
                      className="object-fit-cover"
                      priority
                    />
                  )}

                  <div className={`position-absolute top-0 bottom-0 start-0 end-0 pe-none ${styles.mediaOverlay}`} />

                  {compData?.media?.topLabel && (
                    <span
                      className={`position-absolute font-xs font-600 font-white opacity-75 z-1 ${styles.mediaTopLabel}`}
                    >
                      {compData?.media?.topLabel}
                    </span>
                  )}

                  <button
                    type="button"
                    className={`position-absolute top-50 start-50 translate-middle border-0 rounded-circle d-inline-flex align-items-center justify-content-center cursor-pointer z-2 ${styles.playButton}`}
                    aria-label={compData?.media?.playAriaLabel}
                    onClick={() =>
                      compData?.media?.videoUrl
                        ? setIsModalOpen(true)
                        : handleAnchorScroll(compData?.secondaryCta?.targetId)
                    }
                  >
                    <MdPlayArrow size={30} className="font-white" />
                  </button>

                  {compData?.media?.captionTitle && (
                    <div
                      className={`position-absolute bottom-0 start-0 end-0 d-flex align-items-end justify-content-between gap-3 z-1 ${styles.mediaCaption}`}
                    >
                      <div>
                        <p className="font-md font-600 font-white m-0 lh-sm">
                          {compData?.media?.captionTitle}
                        </p>
                        {compData?.media?.captionAccent && (
                          <p className="font-md font-600 font-light-blue m-0 lh-sm">
                            {compData?.media?.captionAccent}
                          </p>
                        )}
                      </div>

                      {compData?.media?.duration && (
                        <div className="d-flex align-items-center gap-2">
                          <span className="font-xs font-white opacity-75">
                            {compData?.media?.duration}
                          </span>
                          <span
                            className={`d-inline-block bg-white opacity-50 ${styles.durationBar}`}
                            aria-hidden="true"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {compData?.media?.topBadge?.title && (
                  <div
                    className={`position-absolute bg-white rounded-1 border border-light-gray px-3 py-2 d-flex align-items-start gap-2 shadow-sm z-3 ${styles.floatingTopBadge}`}
                  >
                    <MdAutoAwesome
                      size={15}
                      className="font-blue opacity-75"
                      aria-hidden="true"
                    />
                    <div className="lh-sm d-flex flex-column gap-1">
                      <span className="font-xs font-600 font-primary">
                        {compData?.media?.topBadge?.title}
                      </span>
                      {compData?.media?.topBadge?.subtitle && (
                        <span className="font-xs font-600 font-primary">
                          {compData?.media?.topBadge?.subtitle}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {compData?.media?.bottomBadge?.title && (
                  <div
                    className={`position-absolute bg-white rounded-1 border border-light-gray px-3 py-2 d-flex align-items-start gap-2 shadow-sm z-3 ${styles.floatingBottomBadge}`}
                  >
                    <MdCheckCircleOutline
                      size={15}
                      className="font-blue opacity-75"
                      aria-hidden="true"
                    />
                    <div className="lh-sm d-flex flex-column gap-1">
                      <span className="font-xs font-grey-deep">
                        {compData?.media?.bottomBadge?.title}
                      </span>
                      {compData?.media?.bottomBadge?.subtitle && (
                        <span className="font-xs font-600 font-primary">
                          {compData?.media?.bottomBadge?.subtitle}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {compData?.highlightsStrip?.length > 0 && (
        <div className="bg-extra-light-blue py-3">
          <div className="container px-4 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between gap-3">
            {compData.highlightsStrip.map((item, index) => (
              <span key={index} className="font-xs font-600 font-grey-deep">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {isModalOpen && compData?.media?.videoUrl && (
        <div
          className="modal fade show d-block bg-dark bg-opacity-75"
          role="dialog"
          aria-modal="true"
          aria-label={compData?.media?.captionTitle}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-content bg-white rounded-3 overflow-hidden border-0">
              <div className="modal-header border-bottom border-light-gray px-4 py-3">
                <h2 className="font-md font-600 font-primary m-0">
                  {compData?.media?.captionTitle}
                </h2>
                <button
                  type="button"
                  className="btn border-0 bg-transparent p-1 font-primary"
                  aria-label="Close video"
                  onClick={() => setIsModalOpen(false)}
                >
                  <MdClose size={22} />
                </button>
              </div>
              <div className="modal-body p-0 ratio ratio-16x9">
                <ReactPlayer
                  url={compData?.media?.videoUrl}
                  width="100%"
                  height="100%"
                  controls
                  playing
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
