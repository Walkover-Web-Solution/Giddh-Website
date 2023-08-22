import { usePathname } from "next/navigation";

const makeTheSwitch = () => {
    // To get active route
    const pathname = usePathname();
    const startPath = pathname.split("/");
    let isIndia = startPath[1] !== "ae" && startPath[1] !== "uk";
    let isAE = startPath[1] === "ae";
    // Holds Url Prefix country wise
    let link = isIndia ? "" : isAE ? "/ae" : "/uk";
  return (
    <>
      <section className="container-fluid switch-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="switch-section__content">
                <p className="c-fs-3">
                  The Right Accounting Software can change the shape of your
                  Business.
                </p>
                <a href={ link + "/make-the-switch" }>Make The Switch</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default makeTheSwitch;
