import Head from "next/head";
import Jsondata from "@/data/schema/organizationSchema.json";
import { getSchemaForLinkPath } from "../../../../public/js/utils";
import style from "./Banner.module.scss";
import Link from "next/link";
import BookFreeDemoForm from "../BookFreeDemoForm";
import { MdCheck } from "react-icons/md";
import { trustBadgeBrands } from "../TrustBadge";

export default function Banner(path) {
  const link = path.path;
  const selectedSchema = getSchemaForLinkPath(
    link,
    Jsondata.organizationSchema
  );

  return (
    <>
      {selectedSchema && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(selectedSchema) }}
          />
        </Head>
      )}
  
      {/* <section className={style.banner}>
    
       
        <div className="section_py container d-flex gap-3 gap-md-5 w-100 align-items-center justify-content-center flex-column flex-md-row">
       <div className="d-flex flex-column gap-1 gap-md-3 w-100">
            <div className="content-width">
              <h1 className="heading col-primary c-fw-600">
                One Platform for All Your Accounting Needs
              </h1>
              <ul className="d-flex flex-column gap-2 ">
                <li>
                  <MdCheck /> Manage multiple companies
                </li>
                <li>
                  <MdCheck /> Simplify ledger entries with a one-step process
                </li>
                <li>
                  <MdCheck /> Seamless integration with open API
                </li>
                <li>
                  <MdCheck /> Stay compliant with GST and VAT
                </li>
                <li>
                  <MdCheck /> Comprehensive financial reports, including aging
                  breakdowns, in one subscription
                </li>
              </ul>
            </div>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex flex-sm-row  gap-md-4 gap-2 justify-content-start w-12">
                <Link href={"/signup"}>
                  <button
                    className="btn btn-primary btn-lg"
                    aria-label="Signup for Accounting Software"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <BookFreeDemoForm hiddenAbsolute={true} />
        </div>
      </section> */}
      
 
    <section
      className="banner-new-comp py-3 mb-5"
      style={{
        background: "radial-gradient(50% 50% at 50% 50%, #D2D8FF 0%, #FFFFFF 100%)"
      }}
    >
      <div className="container">
        <div className="mb-5 pb-3 d-flex justify-content-between align-items-center">
              <img
                src="/img/giddh-logo.svg"
                alt="Giddh Logo"
                className="banner-logo"
                width={120}
                height={24}
              />
              <button 
  className={` btn-outline-primary btn d-inline-flex align-items-center justify-content-center 
             fw-medium fs-6 px-4 py-2 rounded-3`}
  style={{
    width: "133px",
    height: "44px",
    fontFamily: "Outfit, sans-serif",
    borderColor: "#1A237E",
    color: "#1A237E",
    cursor: "pointer",
   
  }}
>
  Get Started
</button>

            </div>
        <div className="row align-items-center">
          {/* Left Side: Text and Logos */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            
            <h1 class="fw-400 "   style={{
    fontFamily: "Cactus Classical Serif",
    fontSize: "44px",
    color: "#1A237E",
  }}>
              Smart, Simple &<br />
              Powerful Accounting<br />
              for Growing Businesses
            </h1>
            <p className="mb-4 fs-small text-secondary banner-description w-85">
              GIDDH makes accounting easy with clear ledger entries, <br/> 
              unlimited users, and strong inventory management — all at <br/> affordable prices. Track sales, purchases, and <br/> 
              manufacturing in one place and grow your business with <br/> 
              confidence.
            </p>
            <div className="d-flex flex-wrap align-items-center banner-logos w-75 gap-2">
              {trustBadgeBrands?.map((logo, index) => (
                <a
                  key={index}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 mb-2"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="logo-item" 
                    
                    height={24} 
                  />
                </a>
              ))}
            </div>
          </div>
     
          

          <BookFreeDemoForm hiddenAbsolute={false}  location="banner" />
       
          
        </div>
      </div>
    </section>
    </>

  );
}
