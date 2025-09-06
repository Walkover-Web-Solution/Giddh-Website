import data from './data.json';
import { useState } from 'react';

export default function GiddhFor() {
  const [activeTab, setActiveTab] = useState(0);

  return (

// <section className="container section_py d-flex flex-column gap-3">
    //   <div className="d-flex flex-column text-center content-width mx-auto">
    //     <h2 className="sub-heading c-fw-600 col-primary ">{data?.heading}</h2>
    //     <p>{data?.subheading}</p>
    //   </div>
    //   <div className="row row-cols-1 row-cols-md-2 g-2 g-md-4">
    //     {data?.content.map((feature, index) => {
    //       return (
    //         <div className="col" key={index}>
    //           <div className="d-flex flex-column h-100 p-4 border rounded">
    //             <span className="c-fs-1">{feature?.icon}</span>
    //             <h3 className="mt-3 c-fs-3">{feature?.name}</h3>
    //             <p>{feature?.description}</p>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </section>

          <section className="container-fluid bg-black text-white py-5 ">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-4 mb-md-5">
            <h2 className="mb-3 mb-md-4 px-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '600' }}>
              {data?.heading}
            </h2>
            <p className="mb-3 mb-md-4 w-100 w-md-75 mx-auto px-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', opacity: '0.9' }}>
              {data?.subheading}
            </p>
          </div>

          {/* Main Content Container with Border */}
          <div className="border border-white rounded ">
            {/* Tab Navigation - Mobile First Responsive */}
            <div className="mb-3 mb-md-4">
              {/* Mobile: Stacked buttons */}
              <div className="d-block d-lg-none">
                <div className="row g-2">
                  {data?.content.map((item, index) => (
                    <div key={index} className="col-6">
                      <button
                        className={`btn w-100 d-flex flex-column align-items-center gap-1 py-3 ${
                          activeTab === index 
                            ? 'bg-white text-dark' 
                            : 'text-white border border-white'
                        }`}
                        onClick={() => setActiveTab(index)}
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: '500',
                          minHeight: '80px',
                          cursor: 'pointer'
                        }}
                      >
                        <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                        <span className="text-center" style={{ fontSize: '0.75rem', lineHeight: '1.2' }}>
                          {item.name}
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Horizontal tabs */}
              <div className="d-none d-lg-block">
                <div className="d-flex justify-content-between align-items-center border-bottom border-white">
                  {data?.content.map((item, index) => (
                    <div key={index} className="position-relative flex-fill">
                      <button
                        className="btn text-white d-flex align-items-center justify-content-center gap-2 w-100 px-3 py-3"
                        onClick={() => setActiveTab(index)}
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          fontSize: '1rem',
                          fontWeight: '500',
                          cursor: 'pointer'
                        }}
                      >
                        <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                        <span>{item.name.split(' ')[0]}</span>
                      </button>
                      {/* White underline for active tab */}
                      {activeTab === index && (
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '-2px',
                            left: '0',
                            right: '0',
                            height: '3px',
                            backgroundColor: 'white'
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-3 p-md-4">
              <div className="row align-items-center g-3 g-md-4">
                {/* Content - Shows first on mobile */}
                <div className="col-12 col-lg-6 order-1 order-lg-2">
                  <div className="text-center text-lg-start px-2">
                    <h3 className="mb-2 mb-md-3" style={{ 
                      fontSize: 'clamp(1.2rem, 5vw, 1.8rem)', 
                      fontWeight: '600',
                      lineHeight: '1.3'
                    }}>
                      {data?.content[activeTab]?.name}
                    </h3>
                    <p style={{ 
                      fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', 
                      lineHeight: '1.5', 
                      opacity: '0.9',
                      margin: '0'
                    }}>
                      {data?.content[activeTab]?.description}
                    </p>
                  </div>
                </div>

                {/* Image - Shows second on mobile */}
                <div className="col-12 col-lg-6 order-2 order-lg-1">
                  <div className="d-flex justify-content-center">
                    <div 
                      className="bg-light d-flex align-items-center justify-content-center rounded"
                      style={{
                        height: 'clamp(180px, 35vw, 280px)',
                        width: 'clamp(180px, 35vw, 280px)',
                        maxWidth: '100%'
                      }}
                    >
                      <img
                        src={data?.content[activeTab]?.image}
                        alt={data?.content[activeTab]?.name}
                        style={{
                          maxHeight: '85%',
                          maxWidth: '85%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>     
      </section>
  );
}
