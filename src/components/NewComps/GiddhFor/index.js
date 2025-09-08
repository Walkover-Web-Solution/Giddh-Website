import data from "./data.json";
import { useState } from "react";
import style from "./GiddhFor.module.scss";

export default function GiddhFor() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="outfit-font bg-black text-white py-5 ">
      <div className="container px-3">
        <div className="text-center">
          <h2 className="cactus-font">{data?.heading}</h2>
          <p className="mb-3 mb-md-4 w-100 w-md-75 mx-auto px-3">
            {data?.subheading}
          </p>
        </div>

        <div className="border border-white rounded d-none d-lg-block">
          <div className="">
            <div className="d-flex justify-content-between align-items-center border-bottom border-white  overflow-hidden">
              {data?.content.map((item, index) => (
                <div key={index} className="position-relative flex-fill">
                  <div
                    className={`d-flex align-items-center justify-content-center gap-2 w-100 px-3 py-3 cursor-pointer ${style.tab}`}
                    onClick={() => setActiveTab(index)}
                  >
                    <span>{item?.icon}</span>
                    <span>{item?.name.split(" ")[0]}</span>
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
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <div className="text-center text-lg-start px-2">
                <h3 className="mb-1 c-fs-4 c-fw-600">
                  {data?.content[activeTab]?.name}
                </h3>
                <p>{data?.content[activeTab]?.description}</p>
              </div>
            </div>

            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <div className="d-flex justify-content-center">
                <img
                  src={data?.content[activeTab]?.image}
                  alt={data?.content[activeTab]?.name}
                  className={style.image}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="d-grid  g-3 d-lg-none ">
          {data?.content.map((item, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center g-3 g-md-4 p-4"
            >
              <div className="col-12 col-lg-6 order-1 order-lg-2">
                <div className="text-center">
                  <h3 className="mb-1 c-fs-4 c-fw-600">{item?.name}</h3>
                  <p>{item?.description}</p>
                </div>
              </div>
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                <div className="d-flex justify-content-center">
                  <img
                    src={item?.image}
                    className={style.image}
                    alt={item?.name}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
