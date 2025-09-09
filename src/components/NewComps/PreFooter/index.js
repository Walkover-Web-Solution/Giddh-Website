import Link from "next/link";
export default function PreFooter() {
  const data = {
    heading:
      "Access Your Accounting Anytime, Anywhere with Giddh – Top-Rated Billing Platform",
    subheading:
      "Manage your finances on the go with Giddh’s cloud-based software. Giddh helps startups and SMEs manage GST, books, and reports in one place.",
  };

  return (
    <section className="bg-accent section_py outfit-font">
      <div className="container d-flex flex-column gap-3 align-items-center justify-content-center">
        <div className="d-flex flex-column content-width">
          <h2 className="sub-heading c-fw-600 col-white text-center">
            {data?.heading}
          </h2>
          <p className="col-white text-center">{data?.subheading}</p>
        </div>
        <Link href={"/signup"}>
          <button
            className=" btn btn-light cursor-pointer"
            aria-label="Signup for Accounting Software"
          
          >
            Try Giddh Now
          </button>
        </Link>
      </div>
    </section>
  );
}
