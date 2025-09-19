

export default function CTASectionTwo() {

    const data = {
        heading: "Start Your Accounting Revolution with Giddh",
        subheading: "Try Giddh free and see how effortless accounting can be. Your books deserve better.",
        buttonText: "Get Started"
    }
    return (
        <section className="py-5 bg-accent">
            <div className="container d-flex  text-white text-center flex-column gap-2">
                <h2 className="c-fw-400 garamond-font sub-heading">
                    {data.heading}
                </h2>
                <p className="c-fw-400 cactus-font c-fs-4">
                    {data.subheading}
                </p>
                <button className="btn btn-outline-light fw-semibold text-center align-self-center rounded-2 py-2 mt-3 px-4 col-8 col-sm-4">
                    {data.buttonText} 
                </button>
            </div>

        </section>
    );
}