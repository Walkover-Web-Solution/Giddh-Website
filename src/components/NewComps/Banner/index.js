import Head from "next/head";
import Jsondata from "@/data/schema/organizationSchema.json";
import { getSchemaForLinkPath } from "../../../../public/js/utils";
import style from "./Banner.module.scss";
import Link from "next/link";
import BookFreeDemoForm from "../BookFreeDemoForm";

export default function Banner(path) {
  const link = path.path;
  const selectedSchema = getSchemaForLinkPath(
    link,
    Jsondata.organizationSchema
  );

  return (
    <>
      {selectedSchema && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(selectedSchema) }}
          />
        </Head>
      )}
      <section className={style.banner}>
        <div className="section_py container d-flex gap-5 w-100 align-items-center justify-content-center">
          <div className="d-flex flex-column gap-3">
            <div className="content-width">
              <h1 className="heading col-primary c-fw-600">
                One Platform for All Your Accounting Needs
              </h1>
              <p className="c-fs-4">
                ✅ Manage multiple companies, ✅ Simplify ledger entries with a
                one-step process, ✅ Seamless integration with open API, ✅ Stay
                compliant with GST and VAT, and ✅ Comprehensive financial
                reports, including aging breakdowns, in one subscription.
              </p>
            </div>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex flex-sm-row  gap-md-4 gap-2 justify-content-start w-12">
                <Link href={"/signup"}>
                  <button
                    className="btn btn-primary "
                    aria-label="Signup for Accounting Software"
                  >
                    Get Started For Free
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <BookFreeDemoForm />
        </div>
      </section>
    </>
  );
}
