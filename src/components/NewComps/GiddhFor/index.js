import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as MdIcons from "react-icons/md";
import { MdCheck, MdArrowForward } from "react-icons/md";

export default function GiddhFor({ compData }) {
  if (!compData?.content?.length) return null;
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = compData.content[activeTab];
  const LabelIcon = MdIcons[activeItem.labelIcon];

  return (
    <section className="py-5 outfit-font bg-white">
      <div className="container px-3 d-flex flex-column gap-4 gap-md-5">
        <div className="text-center d-flex flex-column align-items-center gap-3">
          <span className="rounded-pill px-2 py-1 bg-faded-blue font-primary c-fs-7 c-fw-600 text-uppercase">
            {compData.badge}
          </span>
          <h2 className="garmond-font font-sub-heading font-primary m-0 col-lg-8">
            {compData.heading}
          </h2>
          <p className="font-grey-deep font-sm m-0 col-lg-7 px-2">
            {compData.subheading}
          </p>
        </div>

        <div
          className="d-flex overflow-auto bg-extra-light-blue rounded-3 p-1 gap-1"
          role="tablist"
        >
          {compData.content.map((item, index) => {
            const TabIcon = MdIcons[item.tabIcon];

            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                className={`d-flex align-items-center justify-content-center gap-2 flex-fill border-0 rounded-2 py-2 px-3 text-nowrap cursor-pointer font-sm font-600 ${
                  activeTab === index
                    ? "bg-accent font-white"
                    : "bg-transparent font-grey-deep"
                }`}
                onClick={() => setActiveTab(index)}
              >
                <TabIcon
                  size={18}
                  className={
                    activeTab === index ? "font-white" : "font-primary"
                  }
                />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="d-flex flex-column gap-3 px-lg-2">
              <div className="d-flex align-items-center gap-2">
                <div
                  className="d-flex align-items-center justify-content-center bg-faded-blue rounded-2 flex-shrink-0"
                  style={{ width: 32, height: 32, minWidth: 32 }}
                >
                  <LabelIcon size={16} className="font-primary" />
                </div>
                <span className="font-primary font-sm font-600 m-0">
                  {activeItem.label}
                </span>
              </div>

              <h3 className="garmond-font font-primary font-xl font-600 m-0">
                {activeItem.heading}
              </h3>

              <p className="font-grey-deep font-sm m-0">
                {activeItem.description}
              </p>

              <div className="d-flex flex-wrap gap-2 pt-1">
                {activeItem.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="bg-extra-light-blue rounded-2 py-2 px-3 d-inline-flex align-items-center gap-2 font-sm font-dark-light"
                  >
                    <MdCheck size={16} className="font-success flex-shrink-0" />
                    {highlight}
                  </span>
                ))}
              </div>

              <Link
                href={activeItem.cta.href}
                className="font-primary font-sm font-600 d-inline-flex align-items-center gap-1 mt-1 text-decoration-none"
              >
                {activeItem.cta.text}
                <MdArrowForward size={16} />
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="d-flex justify-content-center justify-content-lg-end">
              <Image
                src={activeItem.image}
                alt={activeItem.heading}
                className="img-fluid w-100"
                style={{ maxWidth: "clamp(220px, 90%, 360px)" }}
                width={360}
                height={360}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
