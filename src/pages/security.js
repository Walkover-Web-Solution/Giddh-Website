const security = (path) => {
  const linkPath = path.path;
    
  const isIndia = linkPath.isIndia
  const isGlobal = linkPath.isGlobal;
  const link = linkPath.linkPrefix;
    return (
      <>
        <section className="container-fluid security ">
          <div className="container">
            <div className="row">
                    <div className="col-12">
                        <div className="security__text">
                          <p className="text-center col-white">
                          Still managing your accounts offline?</p>
                          <h1 className="text-center col-white c-fs-4 c-fw-400">
                          Go online with Giddh. It gives you high level data security with<br/>
                          its unmatched data encryption algorithm.
                          </h1>
                        </div>
                        <div className="security__banner">
                            <figure className="text-center">
                              <img width="800" height="800" src="/img/security.webp" className="img-fluid" alt="security banner image" />
                            </figure>
                        </div>
                    </div>
            </div>
          </div>
        </section>


         <section className="container-fluid security__text text-center">
          <h2 className="d-inline-block mb-0 c-fs-4">Your data is on AWS cloud</h2>
          <p className="d-inline">, a Linux server and Giddh uses java as backend development. This makes your data much more secure compared to any other local server. Giddh processes your data in an encrypted format, which can’t be accessed even by our developers. Your data could be at high risk if you are on local server. It can be leaked and an onsite disaster will get your data destroyed along with the backups.
          </p>
          <p>Selecting the right { isIndia ? "GST" : "VAT" }
          <a title="Accounting Software" href={link == '' ? '/' : link}> Accounting Software</a>   with the right server and the right approach is a crucial decision for your business.
          <h2 className="d-inline-block mb-0 c-fs-4">Giddh is here to ensure that you meet these needs and achieve the best possible solution.</h2> For more information on Giddh – a Cloud-based accounting software, contact a member of our team today!</p>
         </section>
      </>
    );
  };
  export default security;
  