import { useEffect } from "react";
import styles from "./GiddhIntro.module.scss";

export default function MyComponent({ }) {
    const data = {
        image: "/img/home-page/powerful-accounting-for-growing-businesses.svg",
        heading: "GIDDH — Smart, Simple & Powerful Accounting for Growing Businesses",
        subheading: "GIDDH makes accounting easy with clear ledger entries, unlimited users, and strong inventory management — all at affordable prices. Track sales, purchases, and manufacturing in one place and grow your business with confidence.",
    }


    return (
        <section className={`bg-soft-blue ${styles.topSection}`}>
            <div className="container py-5 d-flex flex-row flex-wrap gap-4 justify-content-center align-items-center ">
                <img className="img-fluid align-self-center" src={data.image} alt={data.heading} />
                <h1 className="text-center c-fw-400 heading garamond-font col-primary">{data.heading}</h1>
                <div className="col-lg-8 mx-auto">
                    <p className="text-center col-grey-deep">
                        {data.subheading}
                    </p>
                </div>
            </div>
        </section>
    );
}
