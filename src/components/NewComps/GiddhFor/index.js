import { useState } from "react";
import style from "./GiddhFor.module.scss";
import Image from "next/image";

export default function GiddhFor({ compdata }) {
  if (compdata?.content?.length === 0) return null;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="outfit-font bg-black font-white py-5">
      <div className="container px-3 d-flex flex-column gap-3">
        <div className="text-center d-flex flex-column gap-2">
          <h2 className="garmond-font font-sub-heading">{compdata?.heading}</h2>
          <p className="mb-3 mb-md-4 w-100 w-md-75 font-sm mx-auto px-3">
            {compdata?.subheading}
          </p>
        </div>

        <div className="border border-white rounded d-none d-lg-block">
          <div className="">
            <div className="d-flex justify-content-between align-items-center border-bottom border-white overflow-hidden">
              {compdata.content.map((item, index) => (
                <div key={index} className="position-relative flex-fill">
                  <div
                    className={`d-flex align-items-center justify-content-center gap-2 w-100 px-3 py-3 cursor-pointer ${style.tab}`}
                    onClick={() => setActiveTab(index)}
                  >
                    <span>{item?.icon}</span>
                    <span>{item?.title}</span>
                  </div>
                  {activeTab === index && (
                    <div
                      className={`${style.tabUnderline} position-absolute bottom-0 left-0 w-100`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="row align-items-center g-3 g-md-4 p-4">
            <div className={`${compdata.content[activeTab]?.image ? "col-12 col-lg-6" : "col-12"} order-1 order-lg-2`}>
              <div className={`px-2 ${compdata?.content[activeTab]?.image ? "text-center text-lg-start" : "text-center"}`}>
                <h3 className="mb-1 font-md font-600">
                  {compdata?.content[activeTab]?.name}
                </h3>
                <p>{compdata?.content[activeTab]?.description}</p>
              </div>
            </div>
            {compdata.content[activeTab]?.image && (
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                <div className="d-flex justify-content-center">
                  <Image
                    src={compdata?.content[activeTab]?.image}
                    alt={compdata?.content[activeTab]?.name}
                    className={`${style.image} rounded`}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="d-grid g-3 d-lg-none">
          {compdata.content.map((item, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center g-3 g-md-4 p-4"
            >
              <div className="col-12 col-lg-6 order-1 order-lg-2">
                <div className="text-center">
                  <h3 className="mb-1 font-md font-600">{item?.name}</h3>
                  <p>{item?.description}</p>
                </div>
              </div>
              {item?.image && (
                <div className="col-12 col-lg-6 order-2 order-lg-1">
                  <div className="d-flex justify-content-center">
                    <Image
                      width={500}
                      height={500}
                      src={item.image}
                      className={`${style.image} rounded`}
                      alt={item?.name}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
