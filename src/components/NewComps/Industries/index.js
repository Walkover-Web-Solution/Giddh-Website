
export default function Industries({ giddhIndustries }) {
    const renderIconsRow = (row) =>
        row?.map((item, index) => (
            <div
                key={index}
                className="col-6 col-sm-4 col-md-2 d-flex flex-column align-items-center text-center gap-2"
            >
                <img
                    src={item?.img}
                    alt={item?.name}
                    className="img-fluid max-width-5"
                />
                <div className="col-grey c-fw-600 c-fs-5">{item?.name}</div>
            </div>
        ));

    return (
        <section className="py-5 col-grey">
            <div className="container d-flex flex-column gap-1">
                <h2 className="garmond-font  text-center garmond-font sub-heading c-fw-400">
                    {giddhIndustries?.heading}
                </h2>
                <p className="text-center c-fs-4 mb-5 w-md-75 w-100 mx-auto pb-3">{giddhIndustries?.description}</p>
                <div className="row justify-content-center align-items-center mb-3">
                    {renderIconsRow(giddhIndustries?.rowOne)}
                </div>

                <div className="row justify-content-center align-items-center">
                    {renderIconsRow(giddhIndustries?.rowTwo)}
                </div>
            </div>
        </section>
    );
}
