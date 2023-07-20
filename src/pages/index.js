import FEATUREGALLERY from "@/components/featureGallery";
import MAKETHESWITCH from "@/components/makeTheSwitch";

const index = () => {
  return (
    <>
      <section className="container-fluid gst text-center">
        <div className="gst__content_wapper">
          <figure>
            <img className="img-fluid" src="/img/dashboard.png" alt="Laptop image with giddh.com dashboard screen"/>
          </figure>
          <div className="container">
            <div className="gst__content_wapper__content">
              <h2>File your GST directly with Giddh</h2>
              <p>
                We prepare your GST return file automatically and the heavy
                lifting for you. Now file your Goods and Services Tax (GST)
                directly on portal.
              </p>
              <a href="#">Start Free</a>
            </div>
          </div>
        </div>
      </section>      
      <FEATUREGALLERY />
      <MAKETHESWITCH />
    </>
  );
};
export default index;
