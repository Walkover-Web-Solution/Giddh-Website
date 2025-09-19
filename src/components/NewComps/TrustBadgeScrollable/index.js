import { trustBadgeBrands } from "../TrustBadge";

export default function TrustBadgeScrollable() {

    const heading ={
        title: "Trusted By Industry Leaders",
        description: "See who’s talking about us and why businesses trust us around the globe."
    }

    

    return (
        <>
        <section className="py-5">  
            <div className="container text-center">
                <h2 className="sub-heading col-primary c-fw-400 garamond-font">{heading.title}</h2>
                <p className="col-dark-grey cactus-font c-fs-4">{heading.description}</p>
                <div className="d-flex flex-wrap align-items-center justify-content-center gap-5">
                {trustBadgeBrands?.map((logo, index) => (
                  <a
                    key={index}
                    href={logo.href}
                    target="_blank"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="logo-item"
                      height={34}
                    />
                  </a>
                ))}
                </div>
            </div>
        </section>
        </>
    );
}