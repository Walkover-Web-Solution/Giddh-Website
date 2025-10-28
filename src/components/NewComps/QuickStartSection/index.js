import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

export default function QuickStartSection({ compData }) {
  if (compData?.steps.length < 0) return null;
  return (
    <section className="container py-5">
      <div>
        <h2>{compData?.heading}</h2>
        <p>{compData?.subHeading}</p>
      </div>
      <div className="d-flex flex-column flex-sm-row gap-3 py-2">
        {compData.steps.map((step, index) => (
          <div key={index} className="border p-2 d-flex flex-column">
            <Image
              src={step.icon}
              width={80}
              height={80}
              className="align-self-center"
              alt={step.title}
            />
            <p className="m-0 ps-2 font-600">
              {" "}
              {index + 1}. {step.title}
            </p>
            <p className="ps-2">
              {" "}
              <MdArrowForward /> {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
