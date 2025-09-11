import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer
      className={`${styles.footer} d-flex align-items-center bg-light-blue`}
    >
      <div className="container py-5">
        <div className="row mb-4 pb-3">
          <div className="col-12 text-center">
            <img
              src="/img/giddh-logo.svg"
              alt="Giddh Logo"
              className="footer-logo"
              width={180}
              height={36}
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-4 text-center col-grey-deep text-md-start mb-3 mb-md-0">
            <p className="mb-0 c-fs-7 ">
              © {new Date().getFullYear()} Walkover Technologies Pvt Ltd
            </p>
          </div>
          <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
            <div className="d-flex justify-content-center  gap-4">
              <a
                href="/privacy-policy"
                className="text-decoration-none c-fs-7 col-grey-deep"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-decoration-none c-fs-7 col-grey-deep"
              >
                Term of Service
              </a>
              <a
                href="/pricing"
                className="text-decoration-none c-fs-7 col-grey-deep"
              >
                Pricing
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 text-center text-md-end">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-2">
              <span className="c-fs-7 col-grey-deep ">
                Download Giddh Mobile App
              </span>
              <div className="d-flex gap-2">
                <a
                  href="https://apps.apple.com/in/app/giddh-accounting-billing-app/id1491003438"
                  className="d-flex align-items-center justify-content-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/footer-icons/appstoreicon.svg"
                    alt="App Store"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.Giddh"
                  className="d-flex align-items-center justify-content-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/footer-icons/playstoreicon.svg"
                    alt="Play Store"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
