import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
         <footer className={`${styles.footer} d-flex align-items-center`} style={{ backgroundColor: '#E9ECFF' , height: '228px' }}>
       <div className="container">
        
        <div className="row mb-4">
          <div className="col-12 text-center">
            <img
              src="/img/giddh-logo.svg"
              alt="Giddh Logo"
              className="footer-logo"
              width={180}
              height={36}
              style={{ maxWidth: '180px', height: 'auto' }}
            />
          </div>
        </div>

        
        <div className="row align-items-center">
       
          <div className="col-12 col-md-4 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0" style={{ fontSize: '14px', color: '#6B7280' }}>
              © 2025 Walkover Technologies Pvt Ltd
            </p>
          </div>

          {/* Center - Links */}
          <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
            <div className="d-flex justify-content-center gap-4">
              <a 
                href="/privacy-policy" 
                className="text-decoration-none"
                style={{ fontSize: '14px', color: '#6B7280' }}
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service" 
                className="text-decoration-none"
                style={{ fontSize: '14px', color: '#6B7280' }}
              >
                Term of Service
              </a>
              <a 
                href="/pricing" 
                className="text-decoration-none"
                style={{ fontSize: '14px', color: '#6B7280' }}
              >
                Pricing
              </a>
            </div>
          </div>

          {/* Right Side - Download App */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-2">
              <span style={{ fontSize: '14px', color: '#6B7280' }}>
                Download Giddh Mobile App
              </span>
              <div className="d-flex gap-2">
                <a 
                  href="#" 
                  className="d-flex align-items-center justify-content-center"
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: '#F3F4F6', 
                    borderRadius: '6px',
                    textDecoration: 'none'
                  }}
                >
                  <img 
                    src="/img/footer-icons/appstoreicon.svg" 
                    alt="App Store"
                    style={{ width: '20px', height: '20px' }}
                  />
                </a>
                <a 
                  href="#" 
                  className="d-flex align-items-center justify-content-center"
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: '#F3F4F6', 
                    borderRadius: '6px',
                    textDecoration: 'none'
                  }}
                >
                  <img 
                    src="/img/footer-icons/playstoreicon.svg" 
                    alt="Play Store"
                    style={{ width: '20px', height: '20px' }}
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
