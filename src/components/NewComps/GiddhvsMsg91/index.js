



export default function GiddhvsMsg91() {
    const data = {
        heading: "Giddh vs Msg91",
        subheading: "Giddh is a cloud-based accounting software that helps you manage your finances and grow your business.",
    }

    const GiddhvsMsg91 = require("./data.json");
    return (

        <section className="container py-4 mt-5 mb-5 outfit-font">
      <h1 className="text-center mb-4 cactus-font">{data.heading}</h1>
      <p className="text-center mb-4 w-75 mx-auto">{data.subheading}</p>
      <div className="bg-white border rounded overflow-hidden">
        <div className="row border-bottom fw-semibold text-dark text-center">
          <div className="col-6 col-md-4 px-3 py-2 border-end">Feature</div>
          <div className="col-3 col-md-4 px-3 py-2 border-end">Msg91</div>
          <div className="col-3 col-md-4 px-3 py-2">Giddh</div>
        </div>
        {GiddhvsMsg91.map((row, index) => (
          <div key={index} className="row border-bottom text-center">
            <div className="col-6 col-md-4 px-3 py-2 border-end ">
              {row["feature"]}
            </div>
            <div className="col-3 col-md-4 px-3 py-2 border-end">
            {row["msg91"]}
            </div>
            <div className="col-3 col-md-4 px-3 py-2">
              {row["giddh"]}
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}
