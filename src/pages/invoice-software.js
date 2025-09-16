import { useState, useEffect } from "react";
import Faqs from "@/components/faq";
import faqs from '../data/faqs.json';

const invoiceSoftware = (path) => {
    const linkPath = path.path;
    const isGlobal = linkPath.isGlobal;
    const isIndia = linkPath.isIndia;
    const isAE = linkPath.isAE;
    const isUK = linkPath.isUK;
    const link = linkPath.linkPrefix;
    const country = linkPath.country || "global";
    const heading = {
        "global": "Create & Send Professional Invoices with Cloud Software",
        "ae": "Invoicing is fun with GIDDH online invoicing software",
        "uk": "Make invoice ease with billing and invoicing software",
        "in": "Invoicing is fun with online invoicing software.",
    }
    const globalData = [
        {
            name: "Create and Send professional invoices with cloud based invoicing software",
            des: "Effortlessly create and send professional invoices using cloud-based invoicing software, streamlining your billing process and enhancing your business image with ease and efficiency.",
            img: "/img/feature-gallery-icons/create-and-send-professional-invoices-with-cloud-based.svg",
        },
        {
            name: " Use Barcode for making invoice",
            des: " Simplify the invoicing process by utilizing barcodes for product identification. This eliminates the need to manually search for products every time you generate an invoice, streamlining your workflow.",
            img: "/img/feature-gallery-icons/barcode.svg",
        },
        {
            name: " Multi-currency Invoices",
            des: "Generate hassle-free invoices for international clients by automatically calculating real-time exchange rates. Say goodbye to the tedious task of manually looking up exchange rates and converting them to your base currency every time you create an invoice.",
            img: "/img/feature-gallery-icons/multi-currency.svg",
        },
        {
            name: "Sending invoice via multi-channels",
            des: "You can efficiently send invoices through various channels like WhatsApp, email, and SMS directly from your accounting software, leading to effective communication with your clients and ensuring timely payments.",
            img: "/img/feature-gallery-icons/share-invoice.svg",
        },
        {
            name: "Lock your invoices and move on!",
            des: "Frustrated by unauthorized changes to your completed invoices? GIDDH's invoicing software offers an invoice locking feature, ensuring that once your invoices are finalized, they cannot be edited or deleted without authorization.",
            img: "/img/feature-gallery-icons/lock-your-invoice.svg",
        },
        {
            name: "Add due date to invoices",
            des: "Enhance your invoicing process by including due dates on each invoice, relieving you from the burden of having to recall payment collection dates for every individual invoice.",
            img: "/img/feature-gallery-icons/add-due-date-to-invoices.svg",
        },
        {
            name: "Customize the invoice number",
            des: "In the billing software, you have the flexibility to personalize your invoice numbers to suit your preferences, without being limited to the sequential format (1, 2, 3, etc).",
            img: "/img/feature-gallery-icons/customize-the-invoice-number.svg",
        },
        {
            name: "Reverse charge",
            des: "You have the option to implement the Reverse Charge mechanism on your invoices as well.",
            img: "/img/feature-gallery-icons/reverse-charge.svg",
        },
        {
            name: "Bulk Invoice update",
            des: "Effortlessly manage your invoices by making bulk updates and deletions as needed.",
            img: "/img/feature-gallery-icons/bulk-update.svg",
        },
        {
            name: "Copy from previous invoice",
            des: "Streamline your workflow by duplicating invoice data from a previous invoice, eliminating the need to manually input the same information each time when it remains unchanged.",
            img: "/img/feature-gallery-icons/copy-from-invoice.svg",
        },
        {
            name: "Import and Export the invoice",
            des: "No need to stress about recreating all your previous invoices when you have data in an Excel file. Just import the file, and you're good to go. Additionally, you can efficiently export the necessary invoices in bulk as per your requirements.",
            img: "/img/feature-gallery-icons/Invoice.svg",
        },
        {
            name: "Generate multiple and compound invoices",
            des: "Effortlessly create multiple invoices at once by leveraging your entries, also benefiting from the convenience of generating composite invoices using these recorded entries.",
            img: "/img/feature-gallery-icons/generate-multiple-and-compound-invoices.svg",
        },
        {
            name: "Run your business with automation!",
            des: "From setting payment reminders to sending online invoices to clients on a recurring basis, you can utilize the complete potential of automation with Giddh! So let Giddh follow-up with customers and focus on your core business activities.",
            img: "/img/feature-gallery-icons/run-your-business-with-automation.svg",
        },
    ];
    const [readMoreStatus, readmoreAction] = useState(false);
    const [faq, setFaq] = useState([]);

    useEffect(() => {
        setFaq(faqs['invoice-software']);
    }, []);

    return (
        <div className='features'>
            <section className='container-fluid'>
                <div className='container features__heading_container'>
                    <div className='row'>
                        <div className='col-lg-7 order-lg-0 order-1'>
                            <h1 className='heading col-primary c-fw-600 mb-4' role="heading" aria-level="1">
                                {isAE && "UAE-Specific Invoice Software for Business Efficiency"}
                                {isUK && "Streamline Billing with Our UK Invoice Software"}
                                {(isIndia || isGlobal) && "Invoicing Software in India "}
                            </h1>
                            <p className='col-grey c-fs-3 mb-5'>
                                Invoicing is fun with online invoicing software.
                            </p>
                            <div className='features__heading_container__links'>
                                <a
                                    href='#'
                                    className='download_free_btn me-4'
                                    data-bs-toggle='modal'
                                    data-bs-target='#downloadFree'
                                    role="button"
                                    aria-label="Download Free Invoice Software"
                                >
                                    Download Free
                                </a>
                                <a
                                    href='#'
                                    className='col-blue'
                                    onClick={() => openCalendly()}
                                    role="button"
                                    aria-label="Schedule a Demo"
                                >
                                    Schedule Demo
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-5 order-lg-1 order-0 position-relative'>
                            <figure className='text-end'>
                                <img
                                    src='/img/feature-gallery-icons/invoice-banner.svg'
                                    width="400"
                                    height="300"
                                    alt='A banner showcasing the invoice software features'
                                />
                                <img
                                    src='/img/all-features-cloud_icon.svg'
                                    alt='Cloud icons representing various features of the software'
                                    className='features__heading_container__right_banner_img'
                                    width='90%'
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid features__sub_heading_container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center features__sub_heading_container--pull-top'>
                            <h2 className='sub-heading col-primary c-fw-600 mb-3' role="heading" aria-level="2">
                                {isAE && "Automated Invoicing: Save Time and Reduce Errors"}
                                {isUK && "Compliance Made Simple with Automated Features"}
                                {(isIndia || isGlobal) && "Save time. Stay ahead."}
                            </h2>
                            <p className='c-fs-4 mb-5'>
                                With GIDDH, Say Goodbye to Tedious Invoicing! Boost
                                Productivity with Online Invoicing Software for Transactions,
                                Gaining a Competitive Business Edge.
                            </p>
                            <a
                                href={link + "/signup"}
                                className='btn-link-purple'
                                role="button"
                                aria-label="Start your trial for GIDDH invoicing software"
                            >
                                Start Your Trial
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid features__description_container mt-5'>
                <div className='container'>
                    {isGlobal ? (
                        <>
                            {globalData.map((feature, index) => {
                                return (
                                    <div
                                        className={`row mb-5 pb-5 align-items-center border-bottom features__description_container--row-${index % 2 === 0 ? "even" : "odd"
                                            }`}
                                    >
                                        <div className='col-md-12 col-lg-6'>
                                            <div className='features__description_container__content'>
                                                <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                    {feature?.name}
                                                </h2>
                                                <p>{feature?.des}</p>
                                            </div>
                                        </div>
                                        <div className='col-md-12 col-lg-6 image-alignment'>
                                            <figure>
                                                <img
                                                    src={feature?.img}
                                                    className='img-fluid'
                                                    alt={`Image representing the feature: ${feature?.name}`}
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    ) : (
                        <>
                            <div className='row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom'>
                                <div className='col-md-12 col-lg-6'>
                                    <div className='features__description_container__content'>
                                        <h2 className='col-primary c-fw-600 mb-3'>
                                            {heading[country] || heading.global}
                                        </h2>
                                        <p>
                                            Effortlessly create and send professional invoices using
                                            cloud-based invoicing software, streamlining your
                                            billing process and enhancing your business image with
                                            ease and efficiency.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-6 image-alignment'>
                                    <figure>
                                        <img
                                            src='/img/feature-gallery-icons/create-and-send-professional-invoices-with-cloud-based.svg'
                                            className='img-fluid'
                                            alt='Icon representing creation and sending of professional invoices using cloud accounting'
                                            width="auto"
                                            height="200"
                                        />
                                    </figure>
                                </div>
                            </div>
                            <div className='row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom'>
                                <div className='col-md-12 col-lg-6'>
                                    <div className='features__description_container__content'>
                                        <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                            Use Barcode for making invoice
                                        </h2>
                                        <p>
                                            Simplify the invoicing process by utilizing barcodes for
                                            product identification. This eliminates the need to
                                            manually search for products every time you generate an
                                            invoice, streamlining your workflow.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-6 image-alignment'>
                                    <figure>
                                        <img
                                            src='/img/feature-gallery-icons/barcode.svg'
                                            className='img-fluid'
                                            alt='Barcode for invoice processing'
                                            width="auto"
                                            height="200"
                                        />
                                    </figure>
                                </div>
                            </div>
                            {!isGlobal && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                {isIndia
                                                    ? "Effortless GST Invoicing"
                                                    : "Incorporate VAT into the invoices"}
                                            </h2>
                                            <p>
                                                {isIndia
                                                    ? "Simplify your invoices for you and your clients by applying GST. No more need to repeatedly verify the client's state for the correct GST type – simply enter the state, and GIDDH, the GST billing software will apply the appropriate GST type automatically."
                                                    : ""}
                                                {isAE || isUK || isGlobal
                                                    ? "Simplify your invoices for you and your clients by applying VAT."
                                                    : ""}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src={
                                                    isIndia
                                                        ? "/img/feature-gallery-icons/effortless-gst-invoicing.svg"
                                                        : "/img/feature-gallery-icons/effortless-vat-invoicing.svg"
                                                }
                                                className='img-fluid'
                                                alt={isIndia ? 'Effortless GST invoicing' : 'Effortless VAT invoicing'}
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}

                            {isIndia && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                Other taxes
                                            </h2>
                                            <p>
                                                Include additional taxes, such as TCS and TDS, on your
                                                invoice for comprehensive taxation transparency.
                                                Moreover, you have the option to manually create taxes
                                                based on your specific needs.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/other-tax.svg'
                                                className='img-fluid'
                                                alt='other-taxes-icon'
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}
                            {isIndia && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                Multi-currency Invoices
                                            </h2>
                                            <p>
                                                Generate hassle-free invoices for international
                                                clients by automatically calculating real-time
                                                exchange rates. Say goodbye to the tedious task of
                                                manually looking up exchange rates and converting them
                                                to your base currency every time you create an
                                                invoice.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/multi-currency.svg'
                                                className='img-fluid'
                                                alt='Multi-currency invoicing'
                                                width="200"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}
                            {(isAE || isUK || isGlobal) && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                Multi-currency Invoices
                                            </h2>
                                            <p>
                                                Generate hassle-free invoices for international
                                                clients by automatically calculating real-time
                                                exchange rates. Say goodbye to the tedious task of
                                                manually looking up exchange rates and converting them
                                                to your base currency every time you create an
                                                invoice.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/multi-currency.svg'
                                                className='img-fluid'
                                                alt='Multi-currency invoicing'
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}
                            {isIndia && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                Sending invoice via multi-channels
                                            </h2>
                                            <p>
                                                You can efficiently send invoices through various
                                                channels like WhatsApp, email, and SMS directly from
                                                your accounting software, leading to effective
                                                communication with your clients and ensuring timely
                                                payments.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/share-invoice.svg'
                                                className='img-fluid'
                                                alt='Sending invoice via multiple channels'
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}
                            {(isAE || isUK || isGlobal) && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                Sending invoice via multi-channels
                                            </h2>
                                            <p>
                                                You can efficiently send invoices through various
                                                channels like WhatsApp, email, and SMS directly from
                                                your accounting software, leading to effective
                                                communication with your clients and ensuring timely
                                                payments.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/share-invoice.svg'
                                                className='img-fluid'
                                                alt='Sending invoice via multiple channels'
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}
                            {isIndia && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                Lock your invoices and move on!
                                            </h2>
                                            <p>
                                                Frustrated by unauthorized changes to your completed
                                                invoices? GIDDH's invoicing software offers an invoice
                                                locking feature, ensuring that once your invoices are
                                                finalized, they cannot be edited or deleted without
                                                authorization.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/lock-your-invoice.svg'
                                                className='img-fluid'
                                                alt='Lock your invoice feature'
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}
                            {(isAE || isUK || isGlobal) && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                Lock your invoices and move on!
                                            </h2>
                                            <p>
                                                Frustrated by unauthorized changes to your completed
                                                invoices? GIDDH's invoicing software offers an invoice
                                                locking feature, ensuring that once your invoices are
                                                finalized, they cannot be edited or deleted without
                                                authorization.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/lock-your-invoice.svg'
                                                className='img-fluid'
                                                alt='Lock your invoice feature'
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}
                            {isIndia && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                Add due date to invoices
                                            </h2>
                                            <p>
                                                Enhance your invoicing process by including due dates
                                                on each invoice, relieving you from the burden of
                                                having to recall payment collection dates for every
                                                individual invoice.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/add-due-date-to-invoices.svg'
                                                className='img-fluid'
                                                alt='Invoice due dates feature'
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}
                            {(isAE || isUK || isGlobal) && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                Add due date to invoices
                                            </h2>
                                            <p>
                                                Enhance your invoicing process by including due dates
                                                on each invoice, relieving you from the burden of
                                                having to recall payment collection dates for every
                                                individual invoice.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/add-due-date-to-invoices.svg'
                                                className='img-fluid'
                                                alt='Invoice due dates feature'
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}

                            {isIndia && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                Customize the invoice number
                                            </h2>
                                            <p>
                                                In the billing software, you have the flexibility to
                                                personalize your invoice numbers to suit your
                                                preferences, without being limited to the sequential
                                                format (1, 2, 3, etc).
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/customize-the-invoice-number.svg'
                                                className='img-fluid'
                                                alt='Customize invoice number feature'
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}
                            {(isAE || isUK || isGlobal) && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                Customize the invoice number
                                            </h2>
                                            <p>
                                                In the billing software, you have the flexibility to
                                                personalize your invoice numbers to suit your
                                                preferences, without being limited to the sequential
                                                format (1, 2, 3, etc).
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/customize-the-invoice-number.svg'
                                                className='img-fluid'
                                                alt='Customize invoice number feature'
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}
                            {!isAE && !isGlobal && (!isUK || isIndia) && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                {" "}
                                                Reverse charge
                                            </h2>
                                            <p>
                                                {" "}
                                                You have the option to implement the Reverse Charge
                                                mechanism on your invoices as well.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/reverse-charge.svg'
                                                className='img-fluid'
                                                alt='Reverse charge feature'
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}
                            {isUK ||
                                (isGlobal && (
                                    <div className='row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom'>
                                        <div className='col-md-12 col-lg-6'>
                                            <div className='features__description_container__content'>
                                                <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                    {" "}
                                                    Reverse charge
                                                </h2>
                                                <p>
                                                    {" "}
                                                    You have the option to implement the Reverse Charge
                                                    mechanism on your invoices as well.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-md-12 col-lg-6 image-alignment'>
                                            <figure>
                                                <img
                                                    src='/img/feature-gallery-icons/reverse-charge.svg'
                                                    className='img-fluid'
                                                    alt='Reverse charge feature'
                                                    width="auto"
                                                    height="200"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                ))}
                            {(isIndia || isAE) && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                Bulk Invoice update
                                            </h2>
                                            <p>
                                                Effortlessly manage your invoices by making bulk
                                                updates and deletions as needed.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/bulk-update.svg'
                                                className='img-fluid'
                                                alt='Bulk invoice update feature'
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}
                            {isUK ||
                                (isGlobal && (
                                    <div className='row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom'>
                                        <div className='col-md-12 col-lg-6'>
                                            <div className='features__description_container__content'>
                                                <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                    Bulk Invoice update
                                                </h2>
                                                <p>
                                                    Effortlessly manage your invoices by making bulk
                                                    updates and deletions as needed.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-md-12 col-lg-6 image-alignment'>
                                            <figure>
                                                <img
                                                    src='/img/feature-gallery-icons/bulk-update.svg'
                                                    className='img-fluid'
                                                    alt='Bulk invoice update feature'
                                                    width="auto"
                                                    height="200"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                ))}
                            {(isIndia || isAE) && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                Copy from previous invoice
                                            </h2>
                                            <p>
                                                Streamline your workflow by duplicating invoice data
                                                from a previous invoice, eliminating the need to
                                                manually input the same information each time when it
                                                remains unchanged.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/copy-from-invoice.svg'
                                                className='img-fluid'
                                                alt='Copy from previous invoice feature'
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}
                            {isUK ||
                                (isGlobal && (
                                    <div className='row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom'>
                                        <div className='col-md-12 col-lg-6'>
                                            <div className='features__description_container__content'>
                                                <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                    Copy from previous invoice
                                                </h2>
                                                <p>
                                                    Streamline your workflow by duplicating invoice data
                                                    from a previous invoice, eliminating the need to
                                                    manually input the same information each time when
                                                    it remains unchanged.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-md-12 col-lg-6 image-alignment'>
                                            <figure>
                                                <img
                                                    src='/img/feature-gallery-icons/copy-from-invoice.svg'
                                                    className='img-fluid'
                                                    alt='Copy from previous invoice feature'
                                                    width="auto"
                                                    height="200"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                ))}

                            {(isIndia || isAE) && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                Import and Export the invoice
                                            </h2>
                                            <p>
                                                No need to stress about recreating all your previous
                                                invoices when you have data in an Excel file. Just
                                                import the file, and you're good to go. Additionally,
                                                you can efficiently export the necessary invoices in
                                                bulk as per your requirements.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/Invoice.svg'
                                                className='img-fluid'
                                                alt='Import and export invoices feature'
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}
                            {isUK ||
                                (isGlobal && (
                                    <div className='row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom'>
                                        <div className='col-md-12 col-lg-6'>
                                            <div className='features__description_container__content'>
                                                <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                    Import and Export the invoice
                                                </h2>
                                                <p>
                                                    No need to stress about recreating all your previous
                                                    invoices when you have data in an Excel file. Just
                                                    import the file, and you're good to go.
                                                    Additionally, you can efficiently export the
                                                    necessary invoices in bulk as per your requirements.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-md-12 col-lg-6 image-alignment'>
                                            <figure>
                                                <img
                                                    src='/img/feature-gallery-icons/Invoice.svg'
                                                    className='img-fluid'
                                                    alt='Import and export invoices feature'
                                                    width="auto"
                                                    height="200"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                ))}

                            {(isIndia || isAE) && (
                                <div className='row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom'>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='features__description_container__content'>
                                            <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                Generate multiple and compound invoices
                                            </h2>
                                            <p>
                                                Effortlessly create multiple invoices at once by
                                                leveraging your entries, also benefiting from the
                                                convenience of generating composite invoices using
                                                these recorded entries.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6 image-alignment'>
                                        <figure>
                                            <img
                                                src='/img/feature-gallery-icons/generate-multiple-and-compound-invoices.svg'
                                                className='img-fluid'
                                                alt='Generate multiple and compound invoices feature'
                                                width="auto"
                                                height="200"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            )}
                            {isUK ||
                                (isGlobal && (
                                    <div className='row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom'>
                                        <div className='col-md-12 col-lg-6'>
                                            <div className='features__description_container__content'>
                                                <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                                    Generate multiple and compound invoices
                                                </h2>
                                                <p>
                                                    Effortlessly create multiple invoices at once by
                                                    leveraging your entries, also benefiting from the
                                                    convenience of generating composite invoices using
                                                    these recorded entries.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-md-12 col-lg-6 image-alignment'>
                                            <figure>
                                                <img
                                                    src='/img/feature-gallery-icons/generate-multiple-and-compound-invoices.svg'
                                                    className='img-fluid'
                                                    alt='Generate multiple and compound invoices feature'
                                                    width="auto"
                                                    height="200"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                ))}

                            <div
                                className={
                                    "row mb-5 align-items-center " +
                                    (isIndia || isAE
                                        ? " features__description_container--row-odd"
                                        : " features__description_container--row-odd")
                                }
                            >
                                <div className='col-md-12 col-lg-6'>
                                    <div className='features__description_container__content'>
                                        <h2 className='col-primary c-fw-600 mb-3' role="heading" aria-level="3">
                                            Run your business with automation!
                                        </h2>
                                        <p>
                                            From setting payment reminders to sending{" "}
                                            <a
                                                href='https://giddh.com/blog/benefits-of-online-invoicing-for-small-business/'
                                                target='_blank'
                                                className='text-decoration-underline'
                                                aria-label="Read about the benefits of online invoicing for small businesses"
                                            >
                                                online invoices
                                            </a>{" "}
                                            to clients on a recurring basis, you can utilize the
                                            complete potential of automation with Giddh! So let
                                            Giddh follow-up with customers and focus on your core
                                            business activities.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-6 image-alignment'>
                                    <figure>
                                        <img
                                            src='/img/feature-gallery-icons/run-your-business-with-automation.svg'
                                            className='img-fluid'
                                            alt='Automation in accounting software'
                                            width="auto"
                                            height="200"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </section>

            <section className='container-fluid bg-transparent' aria-labelledby="importance-of-invoices">
                <div className='container features__e-invoice_page'>
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <div className='text-center'>
                                <a href={link + "/signup"} className='btn-link-purple' aria-label="Sign up for Giddh invoicing software">
                                    Try Now
                                </a>
                            </div>

                            <p className='c-fw-600'>The importance of invoices</p>
                            <p>
                                An invoice is a prerequisite, be it any size or type of
                                business. An invoice is a document that lists down the
                                products and services, along with the required prices for the
                                same, offered to the client.
                            </p>
                            <p>
                                Invoices are an indispensable tool for small businesses since
                                they are official proofs of products offered and services
                                rendered and help the businesses get paid. With the present
                                form of innovations, most businesses use invoice templates to
                                avoid creating invoices from scratch. They not only help you
                                save time but also repopulate the same information instead of
                                having to fill it from scratch again and again. In case you
                                want an invoicing software with more advanced software, you
                                can try out Giddh. You can perform all your finance functions
                                such as generate invoices online in a matter of minutes.
                            </p>

                            <div style={{ display: readMoreStatus ? "block" : "none" }}>
                                <p className='c-fw-600'>Purpose of invoicing</p>
                                <p>
                                    Invoicing is done for a number of reasons. Apart from
                                    recording sales transactions, they perform a number of
                                    functions such as:
                                </p>
                                <p>– Requesting timely payment from clients</p>
                                <p>– Monitoring sales</p>
                                <p>– Keeping a track of inventory</p>
                                <p>– Forecasting future sales</p>
                                <p>– Recording business revenue for tax filing</p>

                                <p className='c-fw-600'>
                                    Importance of Professional Looking Online Invoices
                                </p>
                                <p>
                                    With more and more businesses moving towards e-invoicing,
                                    there has been a rise of invoice software for creating
                                    professional-looking invoices. It’s a fast and easy process
                                    of sending and tracking invoices and can help reduce costs
                                    and save time.
                                </p>
                                <p className="c-fw-600 d-inline-block">Let’s look at some of the benefits of &nbsp; {(isGlobal || isIndia) && " creating online invoices:"}</p>
                                {isAE && (<>
                                    <h2 className="c-fw-600 c-fs-5 d-inline-block">Create Custom Invoices for Your UAE Business</h2>:
                                </>)}
                                {isUK && (<>
                                    <h2 className="c-fw-600 c-fs-5 d-inline-block">Professional Invoice Templates for UK Businesses</h2>:
                                </>)}

                                {isAE && <h2 className="c-fs-5 c-fw-600 mb-3">Streamline Your Billing with VAT Compliance </h2>}
                                {isUK && <h2 className="c-fs-5 c-fw-600 mb-3">Efficient Invoicing for Faster Payments</h2>}
                                <p>
                                    <span className='c-fw-600'>Speed –</span> With online
                                    invoice software, you can create online invoices at
                                    lightning speed. If you send out your invoices fast, you can
                                    get paid fast as well. When you’re sending out multiple
                                    invoices, it may seem like a lengthy and monotonous process
                                    of filling out the same details again and again. Since
                                    online invoices are cloud-based, you can repopulate the
                                    information in as many invoices as required. You can also
                                    reduce your hassles by scheduling your invoices at specific
                                    dates and times so that they can be sent automatically. It
                                    can also reduce your dependency on your accounting personnel
                                    as you can directly send the invoice online. Finally, you
                                    can access the invoices from anywhere, even if you’re not in
                                    the office. Thus, the online invoice software can make your
                                    entire invoicing function a great deal faster.
                                </p>
                                <p>
                                    <span className='c-fw-600'>Monitoring –</span> It doesn’t
                                    just end with sending fast invoices. Following up and
                                    checking whether the payment has come in can take up a lot
                                    of time as well. This can help you in avoiding missing any
                                    due dates. The invoice software can help you check the
                                    status of your payments, find out which ones are due and
                                    which ones have been resolved to get an overview of the
                                    total outstanding payments. Moreover, you can also get
                                    personalised reminders for individual clients and invoices
                                    so that you’re always up to date. There are also ample
                                    reports to choose from to get a clearer understanding of
                                    your clients and make payment adjustments for each client
                                    accordingly. Finally, you can leave a precise and
                                    transparent audit trail so that you can track individual
                                    transactions in case of any queries.
                                </p>
                                <p>
                                    <span className='c-fw-600'>Time and cost saving –</span>{" "}
                                    Irrespective of whether the invoices are being handled by
                                    accountants or by you, the cost incurred from the time spent
                                    in doing the task is still there. Using an invoicing
                                    software to create invoice online can help you save a lot of
                                    time and be good for your pocket as well. It can help you
                                    maintain your company cash flow effectively and send
                                    invoices to your client, ensuring seamless cash flow
                                    management. You can also effectively do away with all the
                                    messy paperwork, rather use the templates, customise, and
                                    send them within minutes.
                                </p>
                                <p>
                                    <span className='c-fw-600'>
                                        Automate your invoicing process –
                                    </span>{" "}
                                    One of the best advantages of online invoice software is
                                    that you can automate your entire processes. It also means
                                    you can actually set up recurring payments for your
                                    long-term clients in the form of a subscription-based model.
                                    There can be automatic reminders and follow-ups for both
                                    past and future invoices.
                                </p>
                                <p>
                                    <span className='c-fw-600'>Brand Identity –</span> A
                                    cloud-based online invoicing software from India like Giddh
                                    can help you reinforce your brand presence. Since you can
                                    customise your logo, colours, and scheme, it can help you
                                    create a feeling of trust and transparency. Research shows
                                    that using your logo on invoices can help to increase the
                                    chance of payments by 3%.
                                </p>
                                <p>
                                    <span className='c-fw-600'>Security –</span> It goes without
                                    saying that many people are hesitant to generate invoice
                                    online since they feel it might not be secure. It’s true,
                                    security protocols matter a lot, especially, when it comes
                                    to finances. That’s why it’s best to choose an online
                                    invoice software that adheres to all security standards such
                                    as the PCI security standards. Environment-friendly –
                                    Statistics have discovered that the invoices generated by
                                    online invoice software are more environmentally-friendly
                                    than traditional paper invoices. It saves energy, water, and
                                    paper resources as well as reduces pollution. So, by
                                    adopting an e-invoicing system, you may reduce your carbon
                                    footprints.
                                </p>
                            </div>

                            <span
                                className='text-decoration-underline c-fw-600 cursor-pointer'
                                onClick={() =>
                                    readmoreAction((readmoreDisplay) => !readmoreDisplay)
                                }
                            >
                                {readMoreStatus ? "Read Less" : "Read More..."}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid features__suggestion_container' aria-labelledby="suggestion-heading">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center features__sub_heading_container--pull-top'>
                            <figure>
                                <img
                                    src='/img/suggestion.svg'
                                    alt='Illustration representing suggestions for invoicing software'
                                    className='features__sub_heading_container--banner_img'
                                    aria-hidden="true"
                                    width="auto"
                                    height="200"
                                />
                            </figure>
                            <h2 id="suggestion-heading" className='c-fs-3 col-grey-deep c-fw-400 mb-3 mt-4'>
                                People interested in
                                <span className='col-blue'> Invoicing Software </span> also
                                looked at
                            </h2>

                            <div className='features__suggestion_container__links' role="navigation" aria-label="Related links">
                                <a href={link + "/all-features"} className='col-blue' aria-label="View all features">
                                    All features
                                </a>
                                <a
                                    href={link + "/multi-user-accounting-software"}
                                    className='border-left col-blue'
                                    aria-label="Learn about multi-user accounting software"
                                >
                                    Share Data
                                </a>
                                <a
                                    href={link + "/multi-currency-accounting-software"}
                                    className='border-left col-blue'
                                    aria-label="Explore multi-currency accounting software"
                                >
                                    Multi-Currency
                                </a>
                                <a
                                    href={link + "/invoice-software"}
                                    className='border-left col-blue'
                                    aria-label="Discover more about invoicing software"
                                >
                                    Invoicing
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Faqs faq={faq} />
        </div>
    );
};

export default invoiceSoftware;
