import Schema from "@/components/NewComps/Schema";
import AllFeatures from "@/pages/all-features";

const inAllFeatures = (path) => {
  let schema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is multi-user accounting software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multi-user accounting software for business enables multiple team members to access and collaborate on financial data in real time, ensuring smooth workflows and up-to-date information across departments.",
          },
        },
        {
          "@type": "Question",
          name: "Can I assign specific access to team members?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Giddh allows you to assign custom access to team members based on roles. You can restrict access to specific accounting modules to maintain control and security.",
          },
        },
        {
          "@type": "Question",
          name: "How secure is the data shared in Giddh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Giddh uses advanced encryption and secure cloud accounting software storage to protect your financial data. The software also offers role-based access and time-limited sharing links for added security.",
          },
        },
        {
          "@type": "Question",
          name: "Is Giddh compliant with GST?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Giddh is fully GST-compliant. It automatically calculates taxes and generates GST-ready reports, making tax filing easier for businesses in India.",
          },
        },
        {
          "@type": "Question",
          name: "How many users can Giddh support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Giddh supports unlimited users. You can add as many team members as needed and assign appropriate access, making it scalable for businesses of all sizes.",
          },
        },
        {
          "@type": "Question",
          name: "Is there any accounting software that allows multiple users?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many accounting software solutions support multiple users. Giddh is a powerful, multi-user platform that enables seamless collaboration, providing customized access and real-time data sharing across teams.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "WebPage",
      description:
        "Giddh’s multi-user accounting software allows seamless collaboration across business departments.",
      name: "Multi-User Accounting Software",
      url: "https://giddh.com/in/multi-user-accounting-software",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "Service",
      description:
        "Giddh’s multi-user accounting software allows seamless collaboration across business departments.",
      url: "https://giddh.com/in/multi-user-accounting-software",
      name: "Multi-User Accounting Software",
    },
  ];
  return (
    <>
      <Schema schema={schema} />
      <AllFeatures path={path.path} />
    </>
  );
};

export default inAllFeatures;
