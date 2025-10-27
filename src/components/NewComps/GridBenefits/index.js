import Image from "next/image";

export default function GridBenefits({ compData }) {
  if (!compData?.length) return null;

  return (
    <section className="container py-5">
      <div className="d-flex flex-column">
        {compData.map((row, rowIndex) => (
          <div key={rowIndex} className="row g-0 overflow-hidden">
            {row.map((item, colIndex) => (
              <div
                key={colIndex}
                className="col border border-black d-flex flex-column align-items-center justify-content-center text-center p-4"
              >
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="mb-3"
                  />
                )}
                <p className="m-0 font-600">{item.title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
