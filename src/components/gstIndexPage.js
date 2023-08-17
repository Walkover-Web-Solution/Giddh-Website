import { usePathname } from 'next/navigation'
const gstIndexPage = () => {
     // To get active route
     const pathname = usePathname();
     const startPath = pathname.split('/');
     let isIndia = startPath[1] !== 'ae' && startPath[1] !== 'uk';
     let isAE = startPath[1] === 'ae';

    // Holds Url Prefix country wise
    let link = isIndia ? "" : isAE ? "/ae" : "/uk";
    return (
      <>
      <section className="container-fluid gst text-center">
        <div className="gst__content_wapper">
          <figure>
            <img className="img-fluid" src={ isIndia || isAE ? '/img/dashboard.png' : '/img/uk-dashboard-laptop-img.svg'} alt="Laptop image with giddh.com dashboard screen"/>
          </figure>
          <div className="container">
            <div className="gst__content_wapper__content">
              <h2>
                { isIndia ? 'File your GST directly with Giddh' : 'VAT Compliant Forever!'}
                </h2>
              <p>
                { isIndia 
                  ? 'We prepare your GST return file automatically and the heavy lifting for you. Now file your Goods and Services Tax (GST) directly on portal.' 
                  : 'Once you have enabled VAT option in Giddh, you will be able to see your VAT reports at one place. With Giddh’s smart multi-currency feature, the exchange rates will be automatically displayed on Invoices' 
                }
                
              </p>
              <a href={ link + "/signup" }>Start Free</a>
            </div>
          </div>
        </div>
      </section>  
      </>
    );
  };
  export default gstIndexPage;
  