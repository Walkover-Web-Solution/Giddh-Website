import BookFreeDemoForm from "../BookFreeDemoForm";
import styles from './SeeGiddhInAction.module.scss'

export default function SeeGiddhInAction() {
  return (
    <section id="SeeGiddhInAction" className={styles.section}>
      <div className="section_py container d-flex gap-2 gap-md-5 w-100 align-items-center justify-content-center flex-column flex-md-row">
        <div className="d-flex flex-column gap-3 col-md-5 col-lg-6">
          <div className="content-width">
            <h2 className="heading col-primary garmond-font">
              Giddh For All Your Accounting Needs
            </h2>
            <p className="c-fs-4 outfit-font">
              Manage 100 companies, unlimited users, real-time reports, GST & VAT compliance, and more—streamline accounting and inventory in one platform.
            </p>
          </div>
        </div>
        <BookFreeDemoForm hiddenAbsolute={false} heading={false} verticalFileds={true} />
      </div>
    </section>
  );
}
