import React from "react";

export default function GiddhIndustries() {
    const data = {
        heading: "Industries Love Giddh",
        description:
            "Industries love Giddh because it transforms the way businesses manage their finances. By automating routine accounting processes, offering instant access to data, and ensuring accuracy at every step, Giddh helps organisations across sectors save time, cut costs, and make smarter decisions for long-term growth.",
        "row-one": [
            { name: "Manufacturing", img: "/img/industries/manufacturing.svg" },
            { name: "Trading", img: "/img/industries/trading.svg" },
            { name: "Agri-Fintech", img: "/img/industries/agri-fintech.svg" },
            { name: "Tourism", img: "/img/industries/tourism.svg" },
            { name: "Construction", img: "/img/industries/construction.svg" },
            { name: "Infrastructure", img: "/img/industries/infrastructure.svg" }
        ],
        "row-two": [
            { name: "Ayurveda", img: "/img/industries/ayurveda.svg" },
            { name: "Jewellery", img: "/img/industries/jewellery.svg" },
            { name: "FMCG", img: "/img/industries/fmcg.svg" },
            { name: "E-commerce", img: "/img/industries/e-commerce.svg" },
            { name: "Clothing", img: "/img/industries/clothing.svg" },
            { name: "Food & Beverage", img: "/img/industries/food&beverage.svg" }
        ]
    };

    const renderIconsRow = (row) =>
        row.map((it, i) => (
            <div
                key={i}
                className="col-6 col-sm-4 col-md-2 d-flex flex-column align-items-center  text-center mb-4"
            >
                <img
                    src={it.img}
                    alt={it.name}
                    className="img-fluid mb-2"
                    style={{ width: 72, height: "auto" }}
                />
                <div className="col-grey c-fw-600 c-fs-4">{it.name}</div>
            </div>
        ));

    return (
        <section className="py-5 col-grey">
            <div className="container">
                <h2 className="cactus-font text-center py-3 garamond-font sub-heading c-fw-400">
                    {data.heading}
                </h2>

                <p className="text-center c-fs-5 mb-5 w-75 mx-auto pb-3">{data.description}</p>

                <div className="row justify-content-center align-items-center mb-3">
                    {renderIconsRow(data["row-one"])}
                </div>

                <div className="row justify-content-center align-items-center">
                    {renderIconsRow(data["row-two"])}
                </div>
            </div>
        </section>
    );
}
