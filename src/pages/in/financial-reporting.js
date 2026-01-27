import Schema from "@/components/NewComps/Schema";
import FinancialReporting from "@/pages/financial-reporting";
const inFinancialReporting = (path) => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "WebPage",
      description:
        "Financial reports will help in evaluating the strengths and weaknesses of any business, be it a small retail one or a growing e-commerce one.",
      name: "Financial Reporting",
      url: "https://giddh.com/in/financial-reporting",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "Service",
      description:
        "Financial reports will help in evaluating the strengths and weaknesses of any business, be it a small retail one or a growing e-commerce one.",
      url: "https://giddh.com/in/financial-reporting",
      name: "Financial Reporting",
    },
  ];
  return (
    <>
      <Schema schema={schema} />
      <FinancialReporting path={path.path} />
    </>
  );
};
export default inFinancialReporting;
