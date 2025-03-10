const makeTheSwitch = (path) => {
  const link = path.path;
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
                <a href={link.linkPrefix + "/make-the-switch"}>
                  Make The Switch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default makeTheSwitch;
