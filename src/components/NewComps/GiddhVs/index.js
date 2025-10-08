import Image from "next/image";
import styles from "./GiddhVs.module.scss";

export default function GiddhVs({ giddhVs }) {
  if (!giddhVs?.content?.length) return null;

  return (
    <section className="container py-5 outfit-font">
      <div className="d-flex flex-column gap-4">
        <h1 className="text-center font-sub-heading font-600 garmond-font font-primary">
          {giddhVs?.heading}
        </h1>
        <p className="text-center font-md font-400 w-75 mx-auto">
          {giddhVs?.subheading}
        </p>
        <div
          className={`text-center ${styles.giddhScrollWrapper} overflow-touch overflow-x-auto d-inline-block`}
        >
          <div className={styles.giddhScrollInner}>
            <div className="bg-white border rounded overflow-hidden">
              <div className="row border-bottom font-md font-600 text-dark text-center">
                <div className="col-3 col-md-3 px-3 py-2 border-end d-flex align-items-center justify-content-center">
                  <span className="text-center">Feature</span>
                </div>
                <div className="col-3 col-md-3 px-3 py-4 border-end bg-light-blue border-top border-start border-4 rounded-top-4 border-accent">
                  <Image
                    src={"/img/giddh-logo.svg"}
                    className="font-lg"
                    height={24}
                    width={120}
                  />
                </div>
                <div className="col-3 col-md-3 px-3 py-4 border-end ">
                  <Image
                    src={"/img/home-page/quickbooks.svg"}
                    height={32}
                    width={168}
                  />
                </div>
                <div className="col-3 col-md-3 px-3 py-4 border-end">
                  <Image
                    src={"/img/home-page/tally.svg"}
                    height={36}
                    width={74}
                  />
                </div>
              </div>

              {giddhVs.content.map((row, index) => (
                <div
                  key={index}
                  className="row border-bottom c-fs-6 text-center "
                >
                  <div className="col-3 col-md-3 px-3 py-2 border-end font-sm font-600">
                    {row?.feature}
                  </div>
                  <div
                    className={`col-3 col-md-3 px-3 py-2 font-sm border-end border-start bg-light-blue border-accent border-4 ${
                      index === giddhVs.content.length - 1 &&
                      "border-bottom rounded-bottom-4 "
                    }`}
                  >
                    {row?.giddh}
                  </div>
                  <div className="col-3 col-md-3 px-3 py-2 font-sm border-end">
                    {row?.quickbooks}
                  </div>
                  <div className="col-3 col-md-3 px-3 font-sm py-2">
                    {row?.tally}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
