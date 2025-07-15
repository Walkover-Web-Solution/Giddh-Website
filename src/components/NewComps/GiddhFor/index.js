export default function GiddhFor() {
  const data = {
    heading: "Who Is Giddh For?",
    subheading:
      "Built for every business that values clarity, compliance, and control. Whether you’re selling products, offering services, or managing multiple clients — Giddh adapts to your needs and grows with you.",
    content: [
      {
        name: "Retailers & Traders",
        description: "Track inventory, manage billing, and stay GST-compliant — all in real time.",
        icon: "🛒",
      },
      {
        name: "Startups & Service Providers",
        description: "Speed up payments and streamline cash flow with smart invoicing and reminders.",
        icon: "🚀",
      },
      {
        name: "Accountants & Finance Teams",
        description: "Collaborate with teams, access ledgers instantly, and close books with confidence.",
        icon: "📊",
      },
      {
        name: "Shopify & E-commerce Brands",
        description: "Auto-sync sales, manage stock, and generate clean, audit-ready reports.",
        icon: "🛍️",
      },
    ],
  };
  return (
    <section className="container section_py d-flex flex-column gap-4">
      <div className="d-flex flex-column text-center content-width mx-auto">
        <h2 className="sub-heading c-fw-600 col-primary ">{data?.heading}</h2>
        <p>{data?.subheading}</p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {data?.content.map((feature, index) => {
          return (
            <div className="col" key={index}>
              <div className="d-flex flex-column h-100 p-4 border rounded">
                <span className="c-fs-1">{feature?.icon}</span>
                <h3 className="mt-3 c-fs-3">{feature?.name}</h3>
                <p>{feature?.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
