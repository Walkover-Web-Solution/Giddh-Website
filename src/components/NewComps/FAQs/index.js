import { MdRemove, MdAdd } from "react-icons/md";
import Head from "next/head";
export default function FAQs() {
  const data = [
    {
      question: "How secure is my financial data on Giddh?",
      answer:
        "Giddh takes data security seriously. We implement IP security, encryption, and secure access controls to ensure that your financial data is protected from unauthorized access. With regular backups and secure cloud infrastructure, your sensitive business data is safe and always available when you need it.",
    },
    {
      question:
        "Can Giddh assist my business in complying with GST and VAT regulations?",
      answer:
        "Yes! Giddh, a software for GST billings, simplifies GST & VAT compliance for enterprises operating in India, UAE, and the UK. With direct integration for GST invoicing, filing, and reconciliation, Giddh ensures that your business stays compliant with regional tax regulations effortlessly.",
    },
    {
      question: "How does Giddh simplify inventory management for my business?",
      answer:
        "Giddh’s real-time inventory tracking, along with features like barcode integration, helps you manage products and services efficiently. Whether you’re tracking stock in different locations or syncing data with platforms like Shopify, Giddh ensures accurate and timely inventory management.",
    },
    {
      question:
        "Can Giddh handle the accounting needs of accounting firms and chartered accountants?",
      answer:
        "Yes! Giddh offers white-label solutions, making it easy for accounting firms to manage multiple clients and handle complex accounting tasks, such as ledger entries and tax compliance, all within one platform. Simplify your client management and focus on delivering value.",
    },
    {
      question: "Can Giddh integrate with other tools and platforms I use?",
      answer:
        "Absolutely! Giddh offers an Open API for customer integration, allowing seamless connections with platforms like Shopify, payment gateways, and other business tools. This flexibility ensures that Giddh fits perfectly into your existing tech stack, streamlining your operations.",
    },
    {
      question:
        "Is Giddh suitable for businesses with multiple branches or warehouses?",
      answer:
        "Yes! Giddh's multi-branch and warehouse management capabilities enable you to manage operations efficiently across various locations. Whether you're tracking inventory, transferring stock, or generating location-specific reports, Giddh provides a unified solution to handle all your business functions under one subscription.",
    },
    {
      question: "Is Giddh the Right Accounting Solution for My Business?",
      answer:
        "Giddh is ideal for accounting software for startups, small to medium-sized businesses (with a revenue of ₹1 lakh to ₹10 crore), accounting firms, B2B service providers, and manufacturers. Whether you need multi-branch accounting, inventory tracking, or GST & VAT compliance, Giddh streamlines your financial management, helping you scale efficiently and stay compliant across India, UAE, and the UK.",
    },
  ];

  const allQuestionAnswer = data.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  }));
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQuestionAnswer,
  };

  return (
    <>
      {faqSchema && (
        <Head>
          <Head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqSchema),
              }}
            />
          </Head>
        </Head>
      )}
      <section className="container-fluid faqs">
        <div className="container d-flex flex-lg-row flex-column">
          <h2 className="fw-bold subheading col-primary col-lg-2 col-12">
            Frequently Asked Questions
          </h2>
          <div className="col-lg-10 col-12">
            <div className="col-12 px-0">
              <div className="accordion" id="accordionAllFeatures">
                {data?.map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <h3 className="accordion-header" id={"heading" + index}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#collapse" + index}
                        aria-expanded="false"
                        aria-controls={"collapse" + index}
                      >
                        <span className="me-2 collapse-icon collapse-icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse-icon collapse-icon--close">
                          <MdRemove />
                        </span>
                        <div>{faq.question}</div>
                      </button>
                    </h3>
                    <div
                      id={"collapse" + index}
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        <div>{faq.answer}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
