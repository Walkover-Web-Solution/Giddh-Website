import BookFreeDemoForm from "../BookFreeDemoForm";

export default function SeeGiddhInAction() {
  return (
    <section>
      <div className="section_py container d-flex gap-2 gap-md-5 w-100 align-items-center justify-content-center flex-column flex-md-row">
        <div className="d-flex flex-column gap-3">
          <div className="content-width">
            <h1 className="heading col-primary c-fw-600">
              One Platform for All Your Accounting Needs
            </h1>
            <p className="c-fs-4">
              Simplify your entire financial workflow — from creating invoices
              and tracking payments to ensuring full compliance with tax laws —
              with a powerful all-in-one solution built for modern businesses.
            </p>
          </div>
        </div>
        <BookFreeDemoForm hiddenAbsolute={false}  Heading={false} />
      </div>
    </section>
  );
}
