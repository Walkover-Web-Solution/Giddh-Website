export default function SwitchToGiddh() {
  const data = {
    heading:
      "Is it Time to Switch to Cloud-Based Accounting Software in India?",
    subheading: "Look out for these key signs ✅",
    content: [
      {
        name: " 1️⃣  Is your accounting system slowing growth?",
        description:
          "Giddh’s Ledger-Based Entry System enables you to bypass complex voucher steps, resulting in faster and more efficient accounting for busy businesses.",
      },
      {
        name: " 2️⃣ Are integrations limiting your business?",
        description:
          "Open API for Customer Integration: Seamlessly integrates with platforms like Shopify, offering a high level of flexibility to meet your business’s unique requirements.",
      },
      {
        name: " 3️⃣ Struggling with multiple users and locations?",
        description:
          "Multiple User Management System: Easily manage an unlimited number of users across different companies, streamlining collaboration and improving efficiency.",
      },
      {
        name: " 4️⃣ Managing branches and warehouses separately?",
        description:
          "Branch Accounting: Manage multiple branches and warehouses under one subscription, streamlining operations with full integration.",
      },
      {
        name: " 5️⃣ Finding it hard to track financial health?",
        description:
          "Comprehensive Reporting: With P&L, Balance Sheets, Tax Reports, and Aging Reports, Giddh makes it easier to track your financial data without any complex setups.",
      },
    ],
  };
  if (!data?.content?.length) return null;
  return (
    <section className="container section_py d-flex flex-column gap-1 gap-md-2">
      <div className="d-flex flex-column content-width">
        <h2 className="sub-heading c-fw-600 col-primary garmond-font">{data?.heading}</h2>
        <p className="c-fs-2 col-primary">{data?.subheading}</p>
      </div>
      <div className="d-flex flex-column gap-1 gap-md-2 ">
        <div className="d-none d-md-flex align-items-center gap-1 gap-md-4">
          <h3 className="c-fs-4 col-4">Problem</h3>
          <p className="c-fs-4">Giddh Solution</p>
        </div>
        {data.content.map((feature, index) => {
          return (
            <div
              className="d-flex gap-md-4 flex-column flex-md-row"
              key={index}
            >
              <h3 className="c-fs-4 c-fw-600 col-12 col-md-4">
                {feature?.name}
              </h3>
              <p className="c-fs-4">{feature?.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
