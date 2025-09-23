
export default function Industries({ giddhIndustries }) {


    const renderIconsRow = (row) =>
        row?.map((it, i) => (
            <div
                key={i}
                className="col-6 col-sm-4 col-md-2 d-flex flex-column align-items-center  text-center mb-4"
            >
                <img
                    src={it?.img}
                    alt={it?.name}
                    className="img-fluid mb-2"
                    style={{ width: 72, height: "auto" }}
                />
                <div className="col-grey c-fw-600 c-fs-4">{it?.name}</div>
            </div>
        ));

    return (
        <section className="py-5 col-grey">
            <div className="container">
                <h2 className="cactus-font text-center py-3 garamond-font sub-heading c-fw-400">
                    {giddhIndustries?.heading}
                </h2>
                <p className="text-center c-fs-5 mb-5 w-75 mx-auto pb-3">{giddhIndustries?.description}</p>
                <div className="row justify-content-center align-items-center mb-3">
                    {renderIconsRow(giddhIndustries?.["row-one"])}
                </div>

                <div className="row justify-content-center align-items-center">
                    {renderIconsRow(giddhIndustries?.["row-two"])}
                </div>
            </div>
        </section>
    );
}
