import ImportData from "@/components/Pages/ImportData";

export default function InImportData({ pageData }) {
  console.log(pageData);
  return (
    <>
      <ImportData pageData={pageData} />
    </>
  );
}
