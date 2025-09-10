import data from "@/data/pagecontent/global/home.json";
import style from "./IndexPage.module.scss";
import Link from "next/link";
import Image from "next/image";
export default function IndexPage() {
  return (
    <>
      <Banner componentData={data?.banner} />
      <Stats componentData={data?.stats} />
    </>
  );
}

export function Banner({ componentData }) {
  return (
    <section className={`${style.banner_cont} section_py`}>
      <div className="container d-flex flex-column flex-md-row gap-3 gap-md-4 align-items-center">
        <div className="d-flex flex-column gap-2 gap-md-3">
          <div className="content-width">
            <h1 className="heading col-primary c-fw-600 p-0 m-0">
              {componentData?.heading}
            </h1>
            <p className="c-fs-4 p-0 m-0">{componentData?.subHeading}</p>
          </div>
          <div className="d-flex flex-sm-row gap-md-2 gap-1 justify-content-start">
            {componentData?.buttons?.map((button, index) => (
              <Link href={button?.link}>
                <button
                  className={`btn btn-${button?.variant}`}
                  aria-label={button?.label}
                >
                  {button?.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
        <Image
          width="700"
          height="400"
          src="/img/giddh-dashboard-within-chrome-browser.webp"
          alt="Screenshot of Giddh Dashboard within a Chrome browser"
          className={`${style.banner_img} h-fit-content`}
        />
      </div>
    </section>
  );
}

export function Stats({ componentData }) {
  return (
    <section className={`${style.stats_cont} section_py bg-accent`}>
      <div className="container">
        <div className="d-flex flex-md-row flex-column gap-3 gap-md-4 gap-lg-5">
          {componentData?.stats?.map((stat, index) => (
            <div
              key={index}
              className="w-100 border p-4 rounded d-flex flex-column align-items-center justify-content-center text-center"
            >
              <p className="heading col-white c-fw-600 p-0 m-0">
                {stat?.value}
              </p>
              <h2 className="col-white c-fs-5">{stat?.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

