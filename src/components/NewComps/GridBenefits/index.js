import Image from "next/image";

export default function GridBenefits({ compData }) {
  if (!compData?.features?.length) return null;

  return (
    <section className="container py-5 d-flex flex-column gap-4">
    <h2 className="text-center sub-heading">{compData?.heading}</h2>
    <div className="d-flex flex-column border border-black">
      {compData.features.map((row, rowIndex) => (
        <div key={rowIndex} className="row g-0 overflow-hidden">
          {row.map((item, colIndex) => (
            <div
              key={colIndex}
              className="col border border-black d-flex flex-column align-items-center justify-content-center text-center p-4"
            >
                {item?.icon && (
                  <Image
                    src={item.icon}
                    width={60}
                    height={60}
                    className="mb-3 opacity-50"
                    alt={item?.title}
                    loading="lazy"
                  />
                )}
                <p className="m-0 font-600">{item?.title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
