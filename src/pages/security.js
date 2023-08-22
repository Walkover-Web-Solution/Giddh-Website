import { usePathname } from "next/navigation";

const security = () => {
  // To get active route
  const pathname = usePathname();
  const startPath = pathname.split("/");
  let isIndia = startPath[1] !== "ae" && startPath[1] !== "uk";
  let isAE = startPath[1] === "ae";

  // Holds Url Prefix country wise
  let link = isIndia ? "" : isAE ? "/ae" : "/uk";
    return (
      <>
        <section className="container-fluid security ">
          <div className="container">
            <div className="row">
                    <div className="col-12">
                        <div className="security__text">
                          <p className="text-center col-white">
                          Still managing your accounts offline?<br/>
                          Go online with Giddh. It gives you high level data security with<br/>
                          its unmatched data encryption algorithm.
                          </p>
                        </div>
                        <div className="security__banner">
                            <figure>
                              <img src="/img/security.png" className="img-fluid" alt="security banner image" />
                            </figure>
                        </div>
                    </div>
            </div>
          </div>
        </section>


         <section className="container-fluid security__text text-center">
          <p>Your data is on AWS cloud, a Linux server and Giddh uses java as backend development. This makes your data much more secure compared to any other local server. Giddh processes your data in an encrypted format, which can’t be accessed even by our developers. Your data could be at high risk if you are on local server. It can be leaked and an onsite disaster will get your data destroyed along with the backups.
          </p>
          <p>Selecting the right  <a title={ isIndia ? "GST" : "VAT" } href={isIndia ? "/gst" : link + "/vat" } >{ isIndia ? "GST" : "VAT" }</a>  
          <a title="Accounting Software" href={link}> Accounting Software</a>   with the right server and the right approach is a crucial decision for your business. Giddh is here to ensure that you meet these needs and achieve the best possible solution. For more information on Giddh – a Cloud-based accounting software, contact a member of our team today!</p>
         </section>
      </>
    );
  };
  export default security;
  