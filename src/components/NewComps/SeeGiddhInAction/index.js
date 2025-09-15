import BookFreeDemoForm from "../BookFreeDemoForm";

export default function SeeGiddhInAction() {
  return (
    <section id="SeeGiddhInAction">
      <div className="section_py container d-flex gap-2 gap-md-5 w-100 align-items-center justify-content-center flex-column flex-md-row">
        <div className="d-flex flex-column gap-3 col-md-5 col-lg-6">
          <div className="content-width">
            <h1 className="heading col-primary cactus-font">
              One Platform for All Your Accounting Needs
            </h1>
            <p className="c-fs-4 outfit-font">
              Simplify your entire financial workflow — from creating invoices
              and tracking payments to ensuring full compliance with tax laws —
              with a powerful all-in-one solution built for modern businesses.
            </p>
          </div>
        </div>
        <BookFreeDemoForm hiddenAbsolute={false} heading={false} verticalFileds={true} />
      </div>
    </section>
  );
}
