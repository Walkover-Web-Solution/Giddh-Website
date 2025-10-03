import BookFreeDemoForm from "../BookFreeDemoForm";

export default function SeeGiddhInAction({ compdata }) {
  return (
    <section id="SeeGiddhInAction" className="gradient-primary py-5">
      <div className="section_py container d-flex gap-2 gap-md-5 w-100 align-items-center justify-content-center flex-column flex-md-row">
        <div className="d-flex flex-column gap-3 col-md-5 col-lg-6">
          <div className="content-width">
            <h2 className="font-sub-heading font-primary garmond-font">
              {compdata?.heading}
            </h2>
            <p className="font-md outfit-font">
              {compdata?.subheading}
            </p>
          </div>
        </div>
        {compdata?.form && (
          <BookFreeDemoForm hiddenAbsolute={false} heading={false} verticalFileds={true} />
        )}
      </div>
    </section>
  );
}

