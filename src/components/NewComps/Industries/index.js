import Image from "next/image";

export default function Industries({ giddhIndustries }) {
  const renderIconsRow = (row) =>
    row?.length
      ? row.map((item, index) => (
          <div
            key={index}
            className="col-6 col-sm-4 col-md-2 d-flex flex-column align-items-center text-center gap-2"
          >
            <Image
              src={item?.img}
              alt={item?.name}
              width={53}
              height={60}
              className="mx-auto"
            />
            <div className="font-600 font-grey font-md font-white">
              {item?.name}
            </div>
          </div>
        ))
      : null;

  return (
    <section className="py-5 font-white bg-dark-100">
      <div className="container d-flex flex-column gap-1">
        <h2 className="garmond-font text-center font-sub-heading">
          {giddhIndustries?.heading}
        </h2>
        <p className="text-center outfit-font font-md mb-5 w-md-75 w-100 mx-auto pb-3">
          {giddhIndustries?.description}
        </p>
        <div className="d-flex flex-column gap-4">
          <div className="row justify-content-around align-items-center mb-3">
            {renderIconsRow(giddhIndustries?.rowOne)}
          </div>

          <div className="row justify-content-around align-items-center">
            {renderIconsRow(giddhIndustries?.rowTwo)}
          </div>
          <div className="row justify-content-around align-items-center">
            {renderIconsRow(giddhIndustries?.rowThree)}
          </div>
        </div>
      </div>
    </section>
  );
}
