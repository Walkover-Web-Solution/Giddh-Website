import whyGiddhData from "./data.json";

export default function WhyGiddh() {
  const data = {
    heading: "Why is Giddh better than most!",
    subheading:
      "In today's business landscape, understanding and managing the financial status of your organization are crucial for making informed business decisions and sustainable growth. This necessity applies not only to professional accountants but also to all professionals working in various industries.",
  };

  return (
    <section className="container py-4 mt-5 mb-5">
      <h1 className="text-center mb-4">{data.heading}</h1>
      <p className="text-center mb-4 w-75 mx-auto">{data.subheading}</p>

   
      <div className="bg-white border rounded overflow-hidden d-none d-md-block">
        <div className="row border-bottom">
          <div className="col-md-4 px-4 py-3 fw-semibold text-dark border-end">
            Feature
          </div>
          <div className="col-md-4 px-4 py-3 fw-semibold text-dark border-end">
            Giddh
          </div>
          <div className="col-md-4 px-4 py-3 fw-semibold text-dark">MSG91</div>
        </div>

    
        {whyGiddhData.map((row, index) => (
          <div key={index} className="row border-bottom">
            <div className="col-md-4 px-4 py-3 border-end">{row.Feature}</div>
            <div className="col-md-4 px-4 py-3 border-end">{row.Giddh}</div>
            <div className="col-md-4 px-4 py-3">{row.MSG91}</div>
          </div>
        ))}
      </div>

    
      <div className="d-block d-md-none">
        {whyGiddhData.map((row, index) => (
          <div
            key={index}
            className="bg-white border rounded shadow p-3 mb-3"
          >
            <div className="mb-2">
          
              <div className="c-fw-600 c-fs-2  ">{row.Feature}</div>
            </div>

            <div className="mb-2 lh-sm">
              <small className=" fw-semibold col-primary ">Giddh</small>
              <div>{row.Giddh}</div>
            </div>

            <div className="lh-sm">
              <small className="col-primary fw-semibold">MSG91</small>
              <div>{row.MSG91}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
