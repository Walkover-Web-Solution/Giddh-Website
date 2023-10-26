import { useState } from "react";
import {
  MdDone,
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
const pricing = (path) => {
  const [readMoreStatus, readmoreAction] = useState(false);
  const [readMoreParagraphStatus1, showMoreParagraph1] = useState(false);
  const [readMoreParagraphStatus2, showMoreParagraph2] = useState(false);
  const [readMoreParagraphStatus3, showMoreParagraph3] = useState(false);
  const [readMoreParagraphStatus4, showMoreParagraph4] = useState(false);
  const [readMoreParagraphStatus5, showMoreParagraph5] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [recordBill, setRecordBill] = useState(false);
  const [managingInventory, setManagingInventory] = useState(false);
  const [multiCurrency, setMultiCurrency] = useState(false);
  const [gst, setGst] = useState(false);
  const [report, setReport] = useState(false);
  const [dashoard, setDashboard] = useState(false);
  const [userAccess, setUserAccess] = useState(false);
  const [bankRec, setBankReconciliation] = useState(false);
  const [manufacturing, setManufacturing] = useState(false);
  const [eInvoice, setEInvoice] = useState(false);
  const [ewayBill, setEwayBill] = useState(false);
  const [icici, setIcici] = useState(false);
  const [ecom, setEcommerce] = useState(false);
  const [telecom, setTelecom] = useState(false);
  const [warehouse, setWarehouse] = useState(false);
  const [importExport, setImportExport] = useState(false);
  const [financialYear, setFinancialYear] = useState(false);
  const [security, setSecurity] = useState(false);
  const [support, setSupport] = useState(false);

  const linkPath = path.path;
  const isIndia = linkPath.isIndia;
  const isAE = linkPath.isAE;
  const isUK = linkPath.isUK;
  const link = linkPath.linkPrefix;

  return (
    <>
      <section className="container-fluid pricing_main_section">
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className={
                "pricing_main_section__grid " +
                (isIndia ? " display-all" : " display-four")
              }
            >
              <div className="pricing_main_section__grid__title">
                <h1 className="font-46 col-primary c-fw-600 ms-4 mt-5">
                  Powerful Accounting Software. Affordable Pricing.
                </h1>
                <h2 className="sub-heading c-fw-600 ms-4 mt-4 mb-5">
                  No features sacrifices
                </h2>
              </div>
              <div className="pricing_main_section__grid__guarantee_logo">
                <figure>
                  <img
                    src="/img/guarantee-96.png"
                    alt="90 Days guarantee logo"
                  />
                </figure>
              </div>
              <div className="pricing_main_section__grid__trial pricing__heading text-center">
                <span className="pricing__heading__name">Trial</span>
                <br />
                <span
                  className={
                    "pricing__heading__cost d-inline-block " +
                    (isIndia ? "" : " pt-4 mt-2")
                  }
                >
                  Free
                </span>
                <br />
                <span className="pricing__heading__period">15 days</span>
              </div>
              <div className="pricing_main_section__grid__birch pricing__heading text-center">
                <span className="pricing__heading__name">Birch</span>
                {isIndia ? null : (
                  <>
                    <br />
                    <span className="pricing__heading__cost">
                      <s>&nbsp;{isAE ? "AED 500" : "GBP 100"}&nbsp;</s>
                    </span>
                  </>
                )}
                <br />
                <span className="pricing__heading__cost">
                  {isIndia ? "INR 1,500" : isAE ? "AED 350" : "GBP 70"}
                  <span>/year</span>
                </span>
                {isIndia ? null : (
                  <>
                    <br />
                    <span className="pricing__heading__period">
                      Save 30% for 12 months
                    </span>
                  </>
                )}
              </div>
              <div className="pricing_main_section__grid__oak pricing__heading text-center position-relative">
                <span className="plan_tag">
                  <img
                    src="/img/popular-plan.png"
                    width="70px"
                    alt="popular plan tag"
                  />
                </span>
                <span className="pricing__heading__name"> Oak</span>
                {isIndia ? null : (
                  <>
                    <br />
                    <span className="pricing__heading__cost">
                      <s>&nbsp;{isAE ? "AED 1,500" : "GBP 300"}&nbsp;</s>
                    </span>
                  </>
                )}
                <br />
                <span className="pricing__heading__cost">
                  {isIndia ? "INR 4,000" : isAE ? "AED 1,050" : "GBP 210"}
                  <span>/year</span>
                </span>
                {isIndia ? null : (
                  <>
                    <br />
                    <span className="pricing__heading__period">
                      Save 30% for 12 months
                    </span>
                  </>
                )}
              </div>
              <div className="pricing_main_section__grid__vine pricing__heading text-center">
                <span className="pricing__heading__name"> Vine</span>
                {isIndia ? null : (
                  <>
                    <br />
                    <span className="pricing__heading__cost">
                      <s>&nbsp;{isAE ? "AED 3,000" : "GBP 500"}&nbsp;</s>
                    </span>
                  </>
                )}
                <br />
                <span className="pricing__heading__cost">
                  {isIndia ? "INR 10,000" : isAE ? " AED 2,100" : "GBP 350"}
                  <span>/year</span>
                </span>
                {isIndia ? null : (
                  <>
                    <br />
                    <span className="pricing__heading__period">
                      Save 30% for 12 months
                    </span>
                  </>
                )}
              </div>
              <div className="pricing_main_section__grid__sequoia pricing__heading text-center display-all__child">
                <span className="pricing__heading__name"> Sequoia</span>
                <br />
                <span className="pricing__heading__cost">
                  INR 15,000<span>/year</span>
                </span>
              </div>

              <div className="pricing_main_section__grid__benefits">
                <p className="c-fw-600">Benefits</p>
              </div>
              <div className="pricing_main_section__grid__b1 text-center">
                <a href={link + "/signup"} className="benefits-link bg-grey">
                  Get Started
                </a>
              </div>
              <div className="pricing_main_section__grid__b2 text-center">
                <a
                  href="javascript:;"
                  className="benefits-link"
                  onClick={() =>
                    Calendly.initPopupWidget({
                      url: "https://calendly.com/sales-accounting-software/talk-to-sale",
                    })
                  }
                >
                  Talk to Us
                </a>
              </div>
              <div className="pricing_main_section__grid__b3 text-center">
                <a href={link + "/signup"} className="benefits-link">
                  Join Us
                </a>
              </div>
              <div className="pricing_main_section__grid__b4 text-center">
                <a href={link + "/signup"} className="benefits-link">
                  Join Us
                </a>
              </div>
              <div className="pricing_main_section__grid__b5 text-center display-all__child">
                <a href={link + "/signup"} className="benefits-link">
                  Join Us
                </a>
              </div>

              <div className="pricing_main_section__grid__transactions">
                Transactions
              </div>
              <div className="pricing_main_section__grid__transactions_2">
                Transactions
              </div>
              <div className="pricing_main_section__grid__transactions_3">
                Transactions
              </div>
              <div className="pricing_main_section__grid__transactions_4">
                Transactions
              </div>
              <div className="pricing_main_section__grid__transactions_5 display-all__child">
                Transactions
              </div>
              <div className="pricing_main_section__grid__t1 text-center">
                40,000
              </div>
              <div className="pricing_main_section__grid__t2 text-center">
                {isIndia ? "10,000" : isAE ? "40,000" : "40,000"}
              </div>
              <div className="pricing_main_section__grid__t3 text-center">
                {isIndia ? "40,000" : isAE ? "40,000" : "40,000"}
              </div>
              <div className="pricing_main_section__grid__t4 text-center">
                {isIndia ? "40,000" : isAE ? "100,000" : "100,000"}
              </div>
              <div className="pricing_main_section__grid__t5 text-center display-all__child">
                1,00,000
              </div>

              <div className="pricing_main_section__grid__companies pricing-border-top">
                Companies
              </div>
              <div className="pricing_main_section__grid__companies_2">
                Companies
              </div>
              <div className="pricing_main_section__grid__companies_3">
                Companies
              </div>
              <div className="pricing_main_section__grid__companies_4">
                Companies
              </div>
              <div className="pricing_main_section__grid__companies_5 display-all__child">
                Companies
              </div>
              <div className="pricing_main_section__grid__c1 text-center pricing-border-top">
                1
              </div>
              <div className="pricing_main_section__grid__c2 text-center pricing-border-top">
                1
              </div>
              <div className="pricing_main_section__grid__c3 text-center pricing-border-top">
                {isIndia ? "1" : isAE ? "10" : "10"}
              </div>
              <div className="pricing_main_section__grid__c4 text-center pricing-border-top">
                {isIndia ? "10" : isAE ? "100" : "100"}
              </div>
              <div className="pricing_main_section__grid__c5 text-center pricing-border-top display-all__child">
                100
              </div>

              <div className="pricing_main_section__grid__accountant_consultant pricing-border-top">
                Accountant Consultant
              </div>
              <div className="pricing_main_section__grid__accountant_consultant_2">
                Accountant Consultant
              </div>
              <div className="pricing_main_section__grid__accountant_consultant_3">
                Accountant Consultant
              </div>
              <div className="pricing_main_section__grid__accountant_consultant_4">
                Accountant Consultant
              </div>
              <div className="pricing_main_section__grid__accountant_consultant_5 display-all__child">
                Accountant Consultant
              </div>

              <div className="pricing_main_section__grid__ac1 text-center pricing-border-top">
                <MdClose />
              </div>
              <div className="pricing_main_section__grid__ac2 text-center pricing-border-top">
                <MdClose />
              </div>
              <div className="pricing_main_section__grid__ac3 text-center pricing-border-top">
                2 hrs
              </div>
              <div className="pricing_main_section__grid__ac4 text-center pricing-border-top">
                4 hrs
              </div>
              <div className="pricing_main_section__grid__ac5 text-center pricing-border-top display-all__child">
                10 hrs
              </div>

              <div className="pricing_main_section__grid__customers_vendors pricing-border-top">
                Unlimited Customers/Vendors
              </div>
              <div className="pricing_main_section__grid__customers_vendors_2">
                Unlimited Customers/Vendors
              </div>
              <div className="pricing_main_section__grid__customers_vendors_3">
                Unlimited Customers/Vendors
              </div>
              <div className="pricing_main_section__grid__customers_vendors_4">
                Unlimited Customers/Vendors
              </div>
              <div className="pricing_main_section__grid__customers_vendors_5 display-all__child">
                Unlimited Customers/Vendors
              </div>
              <div className="pricing_main_section__grid__cv1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__cv2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__cv3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__cv4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__cv5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__desktop_mobile_app pricing-border-top">
                Desktop/Mobile App
              </div>
              <div className="pricing_main_section__grid__desktop_mobile_app_2">
                Desktop/Mobile App
              </div>
              <div className="pricing_main_section__grid__desktop_mobile_app_3">
                Desktop/Mobile App
              </div>
              <div className="pricing_main_section__grid__desktop_mobile_app_4">
                Desktop/Mobile App
              </div>
              <div className="pricing_main_section__grid__desktop_mobile_app_5 display-all__child">
                Desktop/Mobile App
              </div>
              <div className="pricing_main_section__grid__d1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__d2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__d3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__d4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__d5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__invoicing pricing-border-top">
                <div
                  className={"cursor-pointer " + (invoice ? "pt-2" : "")}
                  onClick={() => setInvoice((invoice) => !invoice)}
                >
                  <span>
                    Invoicing {!invoice && <MdKeyboardArrowDown />}{" "}
                    {invoice && <MdKeyboardArrowUp />}
                  </span>
                  {invoice && (
                    <p className="c-fw-400">
                      Create, and send the cash and sales invoices, check
                      payment status, set due dates, apply reverse charge and{" "}
                      <a href={link + "/invoice-software"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__invoicing_2">
                <div
                  className={"cursor-pointer " + (invoice ? "pt-2" : "")}
                  onClick={() => setInvoice((invoice) => !invoice)}
                >
                  <span>
                    Invoicing {!invoice && <MdKeyboardArrowDown />}{" "}
                    {invoice && <MdKeyboardArrowUp />}
                  </span>
                  {invoice && (
                    <p className="c-fw-400">
                      Create, and send the cash and sales invoices, check
                      payment status, set due dates, apply reverse charge and{" "}
                      <a href={link + "/invoice-software"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__invoicing_3">
                <div
                  className={"cursor-pointer " + (invoice ? "pt-2" : "")}
                  onClick={() => setInvoice((invoice) => !invoice)}
                >
                  <span>
                    Invoicing {!invoice && <MdKeyboardArrowDown />}{" "}
                    {invoice && <MdKeyboardArrowUp />}
                  </span>
                  {invoice && (
                    <p className="c-fw-400">
                      Create, and send the cash and sales invoices, check
                      payment status, set due dates, apply reverse charge and{" "}
                      <a href={link + "/invoice-software"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__invoicing_4">
                <div
                  className={"cursor-pointer " + (invoice ? "pt-2" : "")}
                  onClick={() => setInvoice((invoice) => !invoice)}
                >
                  <span>
                    Invoicing {!invoice && <MdKeyboardArrowDown />}{" "}
                    {invoice && <MdKeyboardArrowUp />}
                  </span>
                  {invoice && (
                    <p className="c-fw-400">
                      Create, and send the cash and sales invoices, check
                      payment status, set due dates, apply reverse charge and{" "}
                      <a href={link + "/invoice-software"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__invoicing_5 display-all__child">
                <div
                  className={"cursor-pointer " + (invoice ? "pt-2" : "")}
                  onClick={() => setInvoice((invoice) => !invoice)}
                >
                  <span>
                    Invoicing {!invoice && <MdKeyboardArrowDown />}{" "}
                    {invoice && <MdKeyboardArrowUp />}
                  </span>
                  {invoice && (
                    <p className="c-fw-400">
                      Create, and send the cash and sales invoices, check
                      payment status, set due dates, apply reverse charge and{" "}
                      <a href={link + "/invoice-software"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__in1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__in2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__in3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__in4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__in5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__record-bills pricing-border-top">
                <div
                  className={"cursor-pointer " + (recordBill ? "pt-2" : "")}
                  onClick={() => setRecordBill((recordBill) => !recordBill)}
                >
                  <span>
                    Record Bills {!recordBill && <MdKeyboardArrowDown />}{" "}
                    {recordBill && <MdKeyboardArrowUp />}
                  </span>
                  {recordBill && (
                    <p className="c-fw-400">
                      Create purchase order, and purchase bill, attach files in
                      the bill, pay directly to the vendor, and more
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__record-bills_2">
                <div
                  className={"cursor-pointer " + (recordBill ? "pt-2" : "")}
                  onClick={() => setRecordBill((recordBill) => !recordBill)}
                >
                  <span>
                    Record Bills {!recordBill && <MdKeyboardArrowDown />}{" "}
                    {recordBill && <MdKeyboardArrowUp />}
                  </span>
                  {recordBill && (
                    <p className="c-fw-400">
                      Create, and send the cash and sales invoices, check
                      payment status, set due dates, apply reverse charge and{" "}
                      more
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__record-bills_3">
                <div
                  className={"cursor-pointer " + (recordBill ? "pt-2" : "")}
                  onClick={() => setRecordBill((recordBill) => !recordBill)}
                >
                  <span>
                    Record Bills {!recordBill && <MdKeyboardArrowDown />}
                    {recordBill && <MdKeyboardArrowUp />}
                  </span>
                  {recordBill && (
                    <p className="c-fw-400">
                      Create, and send the cash and sales invoices, check
                      payment status, set due dates, apply reverse charge and{" "}
                      more
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__record-bills_4">
                <div
                  className={"cursor-pointer " + (recordBill ? "pt-2" : "")}
                  onClick={() => setRecordBill((recordBill) => !recordBill)}
                >
                  <span>
                    Record Bills {!recordBill && <MdKeyboardArrowDown />}{" "}
                    {recordBill && <MdKeyboardArrowUp />}
                  </span>
                  {recordBill && (
                    <p className="c-fw-400">
                      Create, and send the cash and sales invoices, check
                      payment status, set due dates, apply reverse charge and{" "}
                      more
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__record-bills_5 display-all__child">
                <div
                  className={"cursor-pointer " + (recordBill ? "pt-2" : "")}
                  onClick={() => setRecordBill((recordBill) => !recordBill)}
                >
                  <span>
                    Record Bills {!recordBill && <MdKeyboardArrowDown />}{" "}
                    {recordBill && <MdKeyboardArrowUp />}
                  </span>
                  {recordBill && (
                    <p className="c-fw-400">
                      Create, and send the cash and sales invoices, check
                      payment status, set due dates, apply reverse charge and{" "}
                      more
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__rb1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__rb2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__rb3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__rb4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__rb5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__managing-inventory pricing-border-top">
                <div
                  className={
                    "cursor-pointer " + (managingInventory ? "pt-2" : "")
                  }
                  onClick={() =>
                    setManagingInventory(
                      (managingInventory) => !managingInventory
                    )
                  }
                >
                  <span>
                    Managing Inventory{" "}
                    {!managingInventory && <MdKeyboardArrowDown />}{" "}
                    {managingInventory && <MdKeyboardArrowUp />}
                  </span>
                  {managingInventory && (
                    <p className="c-fw-400">
                      Maintain inventory of product, services, and fixed asset
                      in group, items and variant too, easy search with barcode,
                      and
                      <a
                        href={link + "/inventory-management-software"}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__managing-inventory_2">
                <div
                  className={
                    "cursor-pointer " + (managingInventory ? "pt-2" : "")
                  }
                  onClick={() =>
                    setManagingInventory(
                      (managingInventory) => !managingInventory
                    )
                  }
                >
                  <span>
                    Managing Inventory{" "}
                    {!managingInventory && <MdKeyboardArrowDown />}{" "}
                    {managingInventory && <MdKeyboardArrowUp />}
                  </span>
                  {managingInventory && (
                    <p className="c-fw-400">
                      Maintain inventory of product, services, and fixed asset
                      in group, items and variant too, easy search with barcode,
                      and
                      <a
                        href={link + "/inventory-management-software"}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__managing-inventory_3">
                <div
                  className={
                    "cursor-pointer " + (managingInventory ? "pt-2" : "")
                  }
                  onClick={() =>
                    setManagingInventory(
                      (managingInventory) => !managingInventory
                    )
                  }
                >
                  <span>
                    Managing Inventory{" "}
                    {!managingInventory && <MdKeyboardArrowDown />}{" "}
                    {managingInventory && <MdKeyboardArrowUp />}
                  </span>
                  {managingInventory && (
                    <p className="c-fw-400">
                      Maintain inventory of product, services, and fixed asset
                      in group, items and variant too, easy search with barcode,
                      and
                      <a
                        href={link + "/inventory-management-software"}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__managing-inventory_4">
                <div
                  className={
                    "cursor-pointer " + (managingInventory ? "pt-2" : "")
                  }
                  onClick={() =>
                    setManagingInventory(
                      (managingInventory) => !managingInventory
                    )
                  }
                >
                  <span>
                    Managing Inventory{" "}
                    {!managingInventory && <MdKeyboardArrowDown />}{" "}
                    {managingInventory && <MdKeyboardArrowUp />}
                  </span>
                  {managingInventory && (
                    <p className="c-fw-400">
                      Maintain inventory of product, services, and fixed asset
                      in group, items and variant too, easy search with barcode,
                      and
                      <a
                        href={link + "/inventory-management-software"}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__managing-inventory_5 display-all__child">
                <div
                  className={
                    "cursor-pointer " + (managingInventory ? "pt-2" : "")
                  }
                  onClick={() =>
                    setManagingInventory(
                      (managingInventory) => !managingInventory
                    )
                  }
                >
                  <span>
                    Managing Inventory{" "}
                    {!managingInventory && <MdKeyboardArrowDown />}{" "}
                    {managingInventory && <MdKeyboardArrowUp />}
                  </span>
                  {managingInventory && (
                    <p className="c-fw-400">
                      Maintain inventory of product, services, and fixed asset
                      in group, items and variant too, easy search with barcode,
                      and
                      <a
                        href={link + "/inventory-management-software"}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__mi1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__mi2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__mi3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__mi4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__mi5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__multi-currency pricing-border-top">
                <div
                  className={"cursor-pointer " + (multiCurrency ? "pt-2" : "")}
                  onClick={() =>
                    setMultiCurrency((multiCurrency) => !multiCurrency)
                  }
                >
                  <span>
                    Multi-currency {!multiCurrency && <MdKeyboardArrowDown />}{" "}
                    {multiCurrency && <MdKeyboardArrowUp />}
                  </span>
                  {multiCurrency && (
                    <p className="c-fw-400">
                      Manage invoicing and payments seamlessly across 100+
                      currencies, with automatic currency conversion based on
                      real-time exchange rates and
                      <a
                        href={link + "/multi-currency-accounting-software"}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__multi-currency_2">
                <div
                  className={"cursor-pointer " + (multiCurrency ? "pt-2" : "")}
                  onClick={() =>
                    setMultiCurrency((multiCurrency) => !multiCurrency)
                  }
                >
                  <span>
                    Multi-currency {!multiCurrency && <MdKeyboardArrowDown />}{" "}
                    {multiCurrency && <MdKeyboardArrowUp />}
                  </span>
                  {multiCurrency && (
                    <p className="c-fw-400">
                      Manage invoicing and payments seamlessly across 100+
                      currencies, with automatic currency conversion based on
                      real-time exchange rates and
                      <a
                        href={link + "/multi-currency-accounting-software"}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__multi-currency_3">
                <div
                  className={"cursor-pointer " + (multiCurrency ? "pt-2" : "")}
                  onClick={() =>
                    setMultiCurrency((multiCurrency) => !multiCurrency)
                  }
                >
                  <span>
                    Multi-currency {!multiCurrency && <MdKeyboardArrowDown />}{" "}
                    {multiCurrency && <MdKeyboardArrowUp />}
                  </span>
                  {multiCurrency && (
                    <p className="c-fw-400">
                      Manage invoicing and payments seamlessly across 100+
                      currencies, with automatic currency conversion based on
                      real-time exchange rates and
                      <a
                        href={link + "/multi-currency-accounting-software"}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__multi-currency_4">
                <div
                  className={"cursor-pointer " + (multiCurrency ? "pt-2" : "")}
                  onClick={() =>
                    setMultiCurrency((multiCurrency) => !multiCurrency)
                  }
                >
                  <span>
                    Multi-currency {!multiCurrency && <MdKeyboardArrowDown />}{" "}
                    {multiCurrency && <MdKeyboardArrowUp />}
                  </span>
                  {multiCurrency && (
                    <p className="c-fw-400">
                      Manage invoicing and payments seamlessly across 100+
                      currencies, with automatic currency conversion based on
                      real-time exchange rates and
                      <a
                        href={link + "/multi-currency-accounting-software"}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__multi-currency_5 display-all__child">
                <div
                  className={"cursor-pointer " + (multiCurrency ? "pt-2" : "")}
                  onClick={() =>
                    setMultiCurrency((multiCurrency) => !multiCurrency)
                  }
                >
                  <span>
                    Multi-currency {!multiCurrency && <MdKeyboardArrowDown />}{" "}
                    {multiCurrency && <MdKeyboardArrowUp />}
                  </span>
                  {multiCurrency && (
                    <p className="c-fw-400">
                      Manage invoicing and payments seamlessly across 100+
                      currencies, with automatic currency conversion based on
                      real-time exchange rates and
                      <a
                        href={link + "/multi-currency-accounting-software"}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__mc1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__mc2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__mc3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__mc4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__mc5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__gst pricing-border-top">
                <div
                  className={"cursor-pointer " + (gst ? "pt-2" : "")}
                  onClick={() => setGst((gst) => !gst)}
                >
                  <span>
                    {isIndia ? "GST" : "VAT"} Compliance{" "}
                    {!gst && <MdKeyboardArrowDown />}{" "}
                    {gst && <MdKeyboardArrowUp />}
                  </span>
                  {gst && (
                    <p className="c-fw-400">
                      Create {isIndia ? "GST" : "VAT"} invoice, view{" "}
                      {isIndia ? "GST" : "VAT"} reports, direct filing, and
                      reconcile transaction with the {isIndia ? "GST" : "VAT"}{" "}
                      portal and
                      <a
                        href={link + (isIndia ? "/gst" : "/vat")}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__gst_2">
                <div
                  className={"cursor-pointer " + (gst ? "pt-2" : "")}
                  onClick={() => setGst((gst) => !gst)}
                >
                  <span>
                    {isIndia ? "GST" : "VAT"} Compliance{" "}
                    {!gst && <MdKeyboardArrowDown />}{" "}
                    {gst && <MdKeyboardArrowUp />}
                  </span>
                  {gst && (
                    <p className="c-fw-400">
                      Create {isIndia ? "GST" : "VAT"} invoice, view{" "}
                      {isIndia ? "GST" : "VAT"} reports, direct filing, and
                      reconcile transaction with the {isIndia ? "GST" : "VAT"}{" "}
                      portal and
                      <a
                        href={link + (isIndia ? "/gst" : "/vat")}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__gst_3">
                <div
                  className={"cursor-pointer " + (gst ? "pt-2" : "")}
                  onClick={() => setGst((gst) => !gst)}
                >
                  <span>
                    {isIndia ? "GST" : "VAT"} Compliance{" "}
                    {!gst && <MdKeyboardArrowDown />}{" "}
                    {gst && <MdKeyboardArrowUp />}
                  </span>
                  {gst && (
                    <p className="c-fw-400">
                      Create {isIndia ? "GST" : "VAT"} invoice, view{" "}
                      {isIndia ? "GST" : "VAT"} reports, direct filing, and
                      reconcile transaction with the {isIndia ? "GST" : "VAT"}{" "}
                      portal and
                      <a
                        href={link + (isIndia ? "/gst" : "/vat")}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__gst_4">
                <div
                  className={"cursor-pointer " + (gst ? "pt-2" : "")}
                  onClick={() => setGst((gst) => !gst)}
                >
                  <span>
                    {isIndia ? "GST" : "VAT"} Compliance{" "}
                    {!gst && <MdKeyboardArrowDown />}{" "}
                    {gst && <MdKeyboardArrowUp />}
                  </span>
                  {gst && (
                    <p className="c-fw-400">
                      Create {isIndia ? "GST" : "VAT"} invoice, view{" "}
                      {isIndia ? "GST" : "VAT"} reports, direct filing, and
                      reconcile transaction with the {isIndia ? "GST" : "VAT"}{" "}
                      portal and
                      <a
                        href={link + (isIndia ? "/gst" : "/vat")}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__gst_5 display-all__child">
                <div
                  className={"cursor-pointer " + (gst ? "pt-2" : "")}
                  onClick={() => setGst((gst) => !gst)}
                >
                  <span>
                    {isIndia ? "GST" : "VAT"} Compliance{" "}
                    {!gst && <MdKeyboardArrowDown />}{" "}
                    {gst && <MdKeyboardArrowUp />}
                  </span>
                  {gst && (
                    <p className="c-fw-400">
                      Create {isIndia ? "GST" : "VAT"} invoice, view{" "}
                      {isIndia ? "GST" : "VAT"} reports, direct filing, and
                      reconcile transaction with the {isIndia ? "GST" : "VAT"}{" "}
                      portal and
                      <a
                        href={link + (isIndia ? "/gst" : "/vat")}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__g1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__g2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__g3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__g4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__g5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__reports pricing-border-top">
                <div
                  className={"cursor-pointer " + (report ? "pt-2" : "")}
                  onClick={() => setReport((report) => !report)}
                >
                  <span>
                    Reports {!report && <MdKeyboardArrowDown />}{" "}
                    {report && <MdKeyboardArrowUp />}
                  </span>
                  {report && (
                    <p className="c-fw-400">
                      Access various reports like Trial balance, Profit & loss,
                      Balance sheet, Daybook, Cash flow statement, Ledger, Sales
                      bifurcation, Columnar report, Purchase register, Sales
                      register, Inventory reports, Reverse charge report, Autopaid, Bill to bill report and
                      <a href={link + "/financial-reporting"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__reports_2">
                <div
                  className={"cursor-pointer " + (report ? "pt-2" : "")}
                  onClick={() => setReport((report) => !report)}
                >
                  <span>
                    Reports {!report && <MdKeyboardArrowDown />}{" "}
                    {report && <MdKeyboardArrowUp />}
                  </span>
                  {report && (
                    <p className="c-fw-400">
                      Access various reports like Trial balance, Profit & loss,
                      Balance sheet, Daybook, Cash flow statement, Ledger, Sales
                      bifurcation, Columnar report, Purchase register, Sales
                      register, Inventory reports, Reverse charge report, Autopaid, Bill to bill report and
                      <a href={link + "/financial-reporting"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__reports_3">
                <div
                  className={"cursor-pointer " + (report ? "pt-2" : "")}
                  onClick={() => setReport((report) => !report)}
                >
                  <span>
                    Reports {!report && <MdKeyboardArrowDown />}{" "}
                    {report && <MdKeyboardArrowUp />}
                  </span>
                  {report && (
                    <p className="c-fw-400">
                      Access various reports like Trial balance, Profit & loss,
                      Balance sheet, Daybook, Cash flow statement, Ledger, Sales
                      bifurcation, Columnar report, Purchase register, Sales
                      register, Inventory reports, Reverse charge report, Autopaid, Bill to bill report and
                      <a href={link + "/financial-reporting"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__reports_4">
                <div
                  className={"cursor-pointer " + (report ? "pt-2" : "")}
                  onClick={() => setReport((report) => !report)}
                >
                  <span>
                    Reports {!report && <MdKeyboardArrowDown />}{" "}
                    {report && <MdKeyboardArrowUp />}
                  </span>
                  {report && (
                    <p className="c-fw-400">
                      Access various reports like Trial balance, Profit & loss,
                      Balance sheet, Daybook, Cash flow statement, Ledger, Sales
                      bifurcation, Columnar report, Purchase register, Sales
                      register, Inventory reports, Reverse charge report, Autopaid, Bill to bill report and
                      <a href={link + "/financial-reporting"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__reports_5 display-all__child">
                <div
                  className={"cursor-pointer " + (report ? "pt-2" : "")}
                  onClick={() => setReport((report) => !report)}
                >
                  <span>
                    Reports {!report && <MdKeyboardArrowDown />}{" "}
                    {report && <MdKeyboardArrowUp />}
                  </span>
                  {report && (
                    <p className="c-fw-400">
                      Access various reports like Trial balance, Profit & loss,
                      Balance sheet, Daybook, Cash flow statement, Ledger, Sales
                      bifurcation, Columnar report, Purchase register, Sales
                      register, Inventory reports, Reverse charge report, Autopaid, Bill to bill report and
                      <a href={link + "/financial-reporting"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__r1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__r2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__r3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__r4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__r5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__dashboard pricing-border-top">
                <div
                  className={"cursor-pointer " + (dashoard ? "pt-2" : "")}
                  onClick={() => setDashboard((dashoard) => !dashoard)}
                >
                  <span>
                    Real-time Dashboard {!dashoard && <MdKeyboardArrowDown />}{" "}
                    {dashoard && <MdKeyboardArrowUp />}
                  </span>
                  {dashoard && (
                    <p className="c-fw-400">
                      View visual representation of the company data like Total
                      overdues, Profit & loss, Bank Account balances, and
                      <a href={link + "/accounting-dashboard"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__dashboard_2">
                <div
                  className={"cursor-pointer " + (dashoard ? "pt-2" : "")}
                  onClick={() => setDashboard((dashoard) => !dashoard)}
                >
                  <span>
                    Real-time Dashboard {!dashoard && <MdKeyboardArrowDown />}{" "}
                    {dashoard && <MdKeyboardArrowUp />}
                  </span>
                  {dashoard && (
                    <p className="c-fw-400">
                      View visual representation of the company data like Total
                      overdues, Profit & loss, Bank Account balances, and
                      <a href={link + "/accounting-dashboard"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__dashboard_3">
                <div
                  className={"cursor-pointer " + (dashoard ? "pt-2" : "")}
                  onClick={() => setDashboard((dashoard) => !dashoard)}
                >
                  <span>
                    Real-time Dashboard {!dashoard && <MdKeyboardArrowDown />}{" "}
                    {dashoard && <MdKeyboardArrowUp />}
                  </span>
                  {dashoard && (
                    <p className="c-fw-400">
                      View visual representation of the company data like Total
                      overdues, Profit & loss, Bank Account balances, and
                      <a href={link + "/accounting-dashboard"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__dashboard_4">
                <div
                  className={"cursor-pointer " + (dashoard ? "pt-2" : "")}
                  onClick={() => setDashboard((dashoard) => !dashoard)}
                >
                  <span>
                    Real-time Dashboard {!dashoard && <MdKeyboardArrowDown />}{" "}
                    {dashoard && <MdKeyboardArrowUp />}
                  </span>
                  {dashoard && (
                    <p className="c-fw-400">
                      View visual representation of the company data like Total
                      overdues, Profit & loss, Bank Account balances, and
                      <a href={link + "/accounting-dashboard"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__dashboard_5 display-all__child">
                <div
                  className={"cursor-pointer " + (dashoard ? "pt-2" : "")}
                  onClick={() => setDashboard((dashoard) => !dashoard)}
                >
                  <span>
                    Real-time Dashboard {!dashoard && <MdKeyboardArrowDown />}{" "}
                    {dashoard && <MdKeyboardArrowUp />}
                  </span>
                  {dashoard && (
                    <p className="c-fw-400">
                      View visual representation of the company data like Total
                      overdues, Profit & loss, Bank Account balances, and
                      <a href={link + "/accounting-dashboard"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__rd1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__rd2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__rd3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__rd4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__rd5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__user-access pricing-border-top">
                <div
                  className={"cursor-pointer " + (userAccess ? "pt-2" : "")}
                  onClick={() => setUserAccess((userAccess) => !userAccess)}
                >
                  <span>
                    Unlimited users access{" "}
                    {!userAccess && <MdKeyboardArrowDown />}{" "}
                    {userAccess && <MdKeyboardArrowUp />}
                  </span>
                  {userAccess && (
                    <p className="c-fw-400">
                      Grant unlimited user access with customizable roles, to
                      enhanced security and also allowing you to set
                      restrictions such as Date ranges, CIDR ranges, and
                      <a
                        href={link + "/multi-user-accounting-software"}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__user-access_2">
                <div
                  className={"cursor-pointer " + (userAccess ? "pt-2" : "")}
                  onClick={() => setUserAccess((userAccess) => !userAccess)}
                >
                  <span>
                    Unlimited users access{" "}
                    {!userAccess && <MdKeyboardArrowDown />}{" "}
                    {userAccess && <MdKeyboardArrowUp />}
                  </span>
                  {userAccess && (
                    <p className="c-fw-400">
                      Grant unlimited user access with customizable roles, to
                      enhanced security and also allowing you to set
                      restrictions such as Date ranges, CIDR ranges, and
                      <a
                        href={link + "/multi-user-accounting-software"}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__user-access_3">
                <div
                  className={"cursor-pointer " + (userAccess ? "pt-2" : "")}
                  onClick={() => setUserAccess((userAccess) => !userAccess)}
                >
                  <span>
                    Unlimited users access{" "}
                    {!userAccess && <MdKeyboardArrowDown />}{" "}
                    {userAccess && <MdKeyboardArrowUp />}
                  </span>
                  {userAccess && (
                    <p className="c-fw-400">
                      Grant unlimited user access with customizable roles, to
                      enhanced security and also allowing you to set
                      restrictions such as Date ranges, CIDR ranges, and
                      <a
                        href={link + "/multi-user-accounting-software"}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__user-access_4">
                <div
                  className={"cursor-pointer " + (userAccess ? "pt-2" : "")}
                  onClick={() => setUserAccess((userAccess) => !userAccess)}
                >
                  <span>
                    Unlimited users access{" "}
                    {!userAccess && <MdKeyboardArrowDown />}{" "}
                    {userAccess && <MdKeyboardArrowUp />}
                  </span>
                  {userAccess && (
                    <p className="c-fw-400">
                      Grant unlimited user access with customizable roles, to
                      enhanced security and also allowing you to set
                      restrictions such as Date ranges, CIDR ranges, and
                      <a
                        href={link + "/multi-user-accounting-software"}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__user-access_5 display-all__child">
                <div
                  className={"cursor-pointer " + (userAccess ? "pt-2" : "")}
                  onClick={() => setUserAccess((userAccess) => !userAccess)}
                >
                  <span>
                    Unlimited users access{" "}
                    {!userAccess && <MdKeyboardArrowDown />}{" "}
                    {userAccess && <MdKeyboardArrowUp />}
                  </span>
                  {userAccess && (
                    <p className="c-fw-400">
                      Grant unlimited user access with customizable roles, to
                      enhanced security and also allowing you to set
                      restrictions such as Date ranges, CIDR ranges, and
                      <a
                        href={link + "/multi-user-accounting-software"}
                        target="_blank"
                      >
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__ua1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__ua2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__ua3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__ua4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__ua5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__bank pricing-border-top">
                <div
                  className={"cursor-pointer " + (bankRec ? "pt-2" : "")}
                  onClick={() => setBankReconciliation((bankRec) => !bankRec)}
                >
                  <span>
                    Bank Reconciliation
                    {!bankRec && <MdKeyboardArrowDown />}{" "}
                    {bankRec && <MdKeyboardArrowUp />}
                  </span>
                  {bankRec && (
                    <p className="c-fw-400">
                      Connect your bank account in Giddh, and with just one
                      click, we will compare and match the transactions of your
                      books with your bank account and
                      <a href={link + "/conect-bank-reconcile"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__bank_2">
                <div
                  className={"cursor-pointer " + (bankRec ? "pt-2" : "")}
                  onClick={() => setBankReconciliation((bankRec) => !bankRec)}
                >
                  <span>
                    Bank Reconciliation
                    {!bankRec && <MdKeyboardArrowDown />}{" "}
                    {bankRec && <MdKeyboardArrowUp />}
                  </span>
                  {bankRec && (
                    <p className="c-fw-400">
                      Connect your bank account in Giddh, and with just one
                      click, we will compare and match the transactions of your
                      books with your bank account and
                      <a href={link + "/conect-bank-reconcile"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__bank_3">
                <div
                  className={"cursor-pointer " + (bankRec ? "pt-2" : "")}
                  onClick={() => setBankReconciliation((bankRec) => !bankRec)}
                >
                  <span>
                    Bank Reconciliation
                    {!bankRec && <MdKeyboardArrowDown />}{" "}
                    {bankRec && <MdKeyboardArrowUp />}
                  </span>
                  {bankRec && (
                    <p className="c-fw-400">
                      Connect your bank account in Giddh, and with just one
                      click, we will compare and match the transactions of your
                      books with your bank account and
                      <a href={link + "/conect-bank-reconcile"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__bank_4">
                <div
                  className={"cursor-pointer " + (bankRec ? "pt-2" : "")}
                  onClick={() => setBankReconciliation((bankRec) => !bankRec)}
                >
                  <span>
                    Bank Reconciliation
                    {!bankRec && <MdKeyboardArrowDown />}{" "}
                    {bankRec && <MdKeyboardArrowUp />}
                  </span>
                  {bankRec && (
                    <p className="c-fw-400">
                      Connect your bank account in Giddh, and with just one
                      click, we will compare and match the transactions of your
                      books with your bank account and
                      <a href={link + "/conect-bank-reconcile"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__bank_5 display-all__child">
                <div
                  className={"cursor-pointer " + (bankRec ? "pt-2" : "")}
                  onClick={() => setBankReconciliation((bankRec) => !bankRec)}
                >
                  <span>
                    Bank Reconciliation
                    {!bankRec && <MdKeyboardArrowDown />}{" "}
                    {bankRec && <MdKeyboardArrowUp />}
                  </span>
                  {bankRec && (
                    <p className="c-fw-400">
                      Connect your bank account in Giddh, and with just one
                      click, we will compare and match the transactions of your
                      books with your bank account and
                      <a href={link + "/conect-bank-reconcile"} target="_blank">
                        {" "}
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__br1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__br2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__br3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__br4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__br5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__manufacturing pricing-border-top">
                <div
                  className={"cursor-pointer " + (manufacturing ? "pt-2" : "")}
                  onClick={() =>
                    setManufacturing((manufacturing) => !manufacturing)
                  }
                >
                  <span>
                    Manufacturing
                    {!manufacturing && <MdKeyboardArrowDown />}{" "}
                    {manufacturing && <MdKeyboardArrowUp />}
                  </span>
                  {manufacturing && (
                    <p className="c-fw-400">
                      Create manufacturing recipe, do manufacturing, add
                      manufacturing expenses, and view its reports.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__manufacturing_2">
                <div
                  className={"cursor-pointer " + (manufacturing ? "pt-2" : "")}
                  onClick={() =>
                    setManufacturing((manufacturing) => !manufacturing)
                  }
                >
                  <span>
                    Manufacturing
                    {!manufacturing && <MdKeyboardArrowDown />}{" "}
                    {manufacturing && <MdKeyboardArrowUp />}
                  </span>
                  {manufacturing && (
                    <p className="c-fw-400">
                      Create manufacturing recipe, do manufacturing, add
                      manufacturing expenses, and view its reports.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__manufacturing_3">
                <div
                  className={"cursor-pointer " + (manufacturing ? "pt-2" : "")}
                  onClick={() =>
                    setManufacturing((manufacturing) => !manufacturing)
                  }
                >
                  <span>
                    Manufacturing
                    {!manufacturing && <MdKeyboardArrowDown />}{" "}
                    {manufacturing && <MdKeyboardArrowUp />}
                  </span>
                  {manufacturing && (
                    <p className="c-fw-400">
                      Create manufacturing recipe, do manufacturing, add
                      manufacturing expenses, and view its reports.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__manufacturing_4">
                <div
                  className={"cursor-pointer " + (manufacturing ? "pt-2" : "")}
                  onClick={() =>
                    setManufacturing((manufacturing) => !manufacturing)
                  }
                >
                  <span>
                    Manufacturing
                    {!manufacturing && <MdKeyboardArrowDown />}{" "}
                    {manufacturing && <MdKeyboardArrowUp />}
                  </span>
                  {manufacturing && (
                    <p className="c-fw-400">
                      Create manufacturing recipe, do manufacturing, add
                      manufacturing expenses, and view its reports.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__manufacturing_5 display-all__child">
                <div
                  className={"cursor-pointer " + (manufacturing ? "pt-2" : "")}
                  onClick={() =>
                    setManufacturing((manufacturing) => !manufacturing)
                  }
                >
                  <span>
                    Manufacturing
                    {!manufacturing && <MdKeyboardArrowDown />}{" "}
                    {manufacturing && <MdKeyboardArrowUp />}
                  </span>
                  {manufacturing && (
                    <p className="c-fw-400">
                      Create manufacturing recipe, do manufacturing, add
                      manufacturing expenses, and view its reports.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__m1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__m2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__m3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__m4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__m5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>
              {isIndia && (
                <>
                  <div className="pricing_main_section__grid__e-invoice pricing-border-top">
                    <div
                      className={"cursor-pointer " + (eInvoice ? "pt-2" : "")}
                      onClick={() => setEInvoice((eInvoice) => !eInvoice)}
                    >
                      <span>
                        E-invoice
                        {!eInvoice && <MdKeyboardArrowDown />}{" "}
                        {eInvoice && <MdKeyboardArrowUp />}
                      </span>
                      {eInvoice && (
                        <p className="c-fw-400">
                          Easily create E-invoice, auto-push E-invoice to its
                          portal, monitor its status, and
                          <a href="/e-invoice" target="_blank">
                            {" "}
                            more
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="pricing_main_section__grid__e-invoice_2">
                    <div
                      className={"cursor-pointer " + (eInvoice ? "pt-2" : "")}
                      onClick={() => setEInvoice((eInvoice) => !eInvoice)}
                    >
                      <span>
                        E-invoice
                        {!eInvoice && <MdKeyboardArrowDown />}{" "}
                        {eInvoice && <MdKeyboardArrowUp />}
                      </span>
                      {eInvoice && (
                        <p className="c-fw-400">
                          Easily create E-invoice, auto-push E-invoice to its
                          portal, monitor its status, and
                          <a href="/e-invoice" target="_blank">
                            {" "}
                            more
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="pricing_main_section__grid__e-invoice_3">
                    <div
                      className={"cursor-pointer " + (eInvoice ? "pt-2" : "")}
                      onClick={() => setEInvoice((eInvoice) => !eInvoice)}
                    >
                      <span>
                        E-invoice
                        {!eInvoice && <MdKeyboardArrowDown />}{" "}
                        {eInvoice && <MdKeyboardArrowUp />}
                      </span>
                      {eInvoice && (
                        <p className="c-fw-400">
                          Easily create E-invoice, auto-push E-invoice to its
                          portal, monitor its status, and
                          <a href="/e-invoice" target="_blank">
                            {" "}
                            more
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="pricing_main_section__grid__e-invoice_4">
                    <div
                      className={"cursor-pointer " + (eInvoice ? "pt-2" : "")}
                      onClick={() => setEInvoice((eInvoice) => !eInvoice)}
                    >
                      <span>
                        E-invoice
                        {!eInvoice && <MdKeyboardArrowDown />}{" "}
                        {eInvoice && <MdKeyboardArrowUp />}
                      </span>
                      {eInvoice && (
                        <p className="c-fw-400">
                          Easily create E-invoice, auto-push E-invoice to its
                          portal, monitor its status, and
                          <a href="/e-invoice" target="_blank">
                            {" "}
                            more
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="pricing_main_section__grid__e-invoice_5 display-all__child">
                    <div
                      className={"cursor-pointer " + (eInvoice ? "pt-2" : "")}
                      onClick={() => setEInvoice((eInvoice) => !eInvoice)}
                    >
                      <span>
                        E-invoice
                        {!eInvoice && <MdKeyboardArrowDown />}{" "}
                        {eInvoice && <MdKeyboardArrowUp />}
                      </span>
                      {eInvoice && (
                        <p className="c-fw-400">
                          Easily create E-invoice, auto-push E-invoice to its
                          portal, monitor its status, and
                          <a href="/e-invoice" target="_blank">
                            {" "}
                            more
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="pricing_main_section__grid__ei1 text-center pricing-border-top">
                    <MdDone />
                  </div>
                  <div className="pricing_main_section__grid__ei2 text-center pricing-border-top">
                    <MdDone />
                  </div>
                  <div className="pricing_main_section__grid__ei3 text-center pricing-border-top">
                    <MdDone />
                  </div>
                  <div className="pricing_main_section__grid__ei4 text-center pricing-border-top">
                    <MdDone />
                  </div>
                  <div className="pricing_main_section__grid__ei5 text-center pricing-border-top display-all__child">
                    <MdDone />
                  </div>
                </>
              )}

              {isIndia && (
                <>
                  <div className="pricing_main_section__grid__eway-bill pricing-border-top">
                    <div
                      className={"cursor-pointer " + (ewayBill ? "pt-2" : "")}
                      onClick={() => setEwayBill((ewayBill) => !ewayBill)}
                    >
                      <span>
                        E-way bill
                        {!ewayBill && <MdKeyboardArrowDown />}{" "}
                        {ewayBill && <MdKeyboardArrowUp />}
                      </span>
                      {ewayBill && (
                        <p className="c-fw-400">
                          Generate E-way bills, and streamline the process of
                          tracking the movements of goods in compliance with the
                          tax regulations.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="pricing_main_section__grid__eway-bill_2">
                    <div
                      className={"cursor-pointer " + (ewayBill ? "pt-2" : "")}
                      onClick={() => setEwayBill((ewayBill) => !ewayBill)}
                    >
                      <span>
                        E-way bill
                        {!ewayBill && <MdKeyboardArrowDown />}{" "}
                        {ewayBill && <MdKeyboardArrowUp />}
                      </span>
                      {ewayBill && (
                        <p className="c-fw-400">
                          Generate E-way bills, and streamline the process of
                          tracking the movements of goods in compliance with the
                          tax regulations.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="pricing_main_section__grid__eway-bill_3">
                    <div
                      className={"cursor-pointer " + (ewayBill ? "pt-2" : "")}
                      onClick={() => setEwayBill((ewayBill) => !ewayBill)}
                    >
                      <span>
                        E-way bill
                        {!ewayBill && <MdKeyboardArrowDown />}{" "}
                        {ewayBill && <MdKeyboardArrowUp />}
                      </span>
                      {ewayBill && (
                        <p className="c-fw-400">
                          Generate E-way bills, and streamline the process of
                          tracking the movements of goods in compliance with the
                          tax regulations.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="pricing_main_section__grid__eway-bill_4">
                    <div
                      className={"cursor-pointer " + (ewayBill ? "pt-2" : "")}
                      onClick={() => setEwayBill((ewayBill) => !ewayBill)}
                    >
                      <span>
                        E-way bill
                        {!ewayBill && <MdKeyboardArrowDown />}{" "}
                        {ewayBill && <MdKeyboardArrowUp />}
                      </span>
                      {ewayBill && (
                        <p className="c-fw-400">
                          Generate E-way bills, and streamline the process of
                          tracking the movements of goods in compliance with the
                          tax regulations.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="pricing_main_section__grid__eway-bill_5 display-all__child">
                    <div
                      className={"cursor-pointer " + (ewayBill ? "pt-2" : "")}
                      onClick={() => setEwayBill((ewayBill) => !ewayBill)}
                    >
                      <span>
                        E-way bill
                        {!ewayBill && <MdKeyboardArrowDown />}{" "}
                        {ewayBill && <MdKeyboardArrowUp />}
                      </span>
                      {ewayBill && (
                        <p className="c-fw-400">
                          Generate E-way bills, and streamline the process of
                          tracking the movements of goods in compliance with the
                          tax regulations.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="pricing_main_section__grid__ewb1 text-center pricing-border-top">
                    <MdDone />
                  </div>
                  <div className="pricing_main_section__grid__ewb2 text-center pricing-border-top">
                    <MdDone />
                  </div>
                  <div className="pricing_main_section__grid__ewb3 text-center pricing-border-top">
                    <MdDone />
                  </div>
                  <div className="pricing_main_section__grid__ewb4 text-center pricing-border-top">
                    <MdDone />
                  </div>
                  <div className="pricing_main_section__grid__ewb5 text-center pricing-border-top display-all__child">
                    <MdDone />
                  </div>
                </>
              )}
              <div className="pricing_main_section__grid__icici pricing-border-top">
                <div
                  className={"cursor-pointer " + (icici ? "pt-2" : "")}
                  onClick={() => setIcici((icici) => !icici)}
                >
                  <span>
                    Bank Integrations
                    {!icici && <MdKeyboardArrowDown />}{" "}
                    {icici && <MdKeyboardArrowUp />}
                  </span>
                  {icici && (
                    <p className="c-fw-400">
                      {isIndia ? (
                        <>
                          ICICI bank integration to simply the bank reconciliation, payment process and{" "}
                          <a target="_blank" href={link + "/icici-integration"}>
                            much more
                          </a>{" "}
                        </>
                      ) : (
                        <>
                          Provides support in 12+ countries including USA, Canada, UK, Germany, France, Netherlands, Ireland, Spain, Sweden, Denmark, Poland, Portugal
                        </>
                      )} 
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__icici_2">
                <div
                  className={"cursor-pointer " + (icici ? "pt-2" : "")}
                  onClick={() => setIcici((icici) => !icici)}
                >
                  <span>
                    Bank Integrations
                    {!icici && <MdKeyboardArrowDown />}{" "}
                    {icici && <MdKeyboardArrowUp />}
                  </span>
                  {icici && (
                 <p className="c-fw-400">
                      {isIndia ? (
                        <>
                          ICICI bank integration to simply the bank reconciliation, payment process and{" "}
                          <a target="_blank" href={link + "/icici-integration"}>
                            much more
                          </a>{" "}
                        </>
                      ) : (
                        <>
                          Provides support in 12+ countries including USA, Canada, UK, Germany, France, Netherlands, Ireland, Spain, Sweden, Denmark, Poland, Portugal
                        </>
                      )} 
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__icici_3">
                <div
                  className={"cursor-pointer " + (icici ? "pt-2" : "")}
                  onClick={() => setIcici((icici) => !icici)}
                >
                  <span>
                    Bank Integrations
                    {!icici && <MdKeyboardArrowDown />}{" "}
                    {icici && <MdKeyboardArrowUp />}
                  </span>
                  {icici && (
                 <p className="c-fw-400">
                      {isIndia ? (
                        <>
                          ICICI bank integration to simply the bank reconciliation, payment process and{" "}
                          <a target="_blank" href={link + "/icici-integration"}>
                            much more
                          </a>{" "}
                        </>
                      ) : (
                        <>
                          Provides support in 12+ countries including USA, Canada, UK, Germany, France, Netherlands, Ireland, Spain, Sweden, Denmark, Poland, Portugal
                        </>
                      )} 
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__icici_4">
                <div
                  className={"cursor-pointer " + (icici ? "pt-2" : "")}
                  onClick={() => setIcici((icici) => !icici)}
                >
                  <span>
                    Bank Integrations
                    {!icici && <MdKeyboardArrowDown />}{" "}
                    {icici && <MdKeyboardArrowUp />}
                  </span>
                  {icici && (
                 <p className="c-fw-400">
                      {isIndia ? (
                        <>
                          ICICI bank integration to simply the bank reconciliation, payment process and{" "}
                          <a target="_blank" href={link + "/icici-integration"}>
                            much more
                          </a>{" "}
                        </>
                      ) : (
                        <>
                          Provides support in 12+ countries including USA, Canada, UK, Germany, France, Netherlands, Ireland, Spain, Sweden, Denmark, Poland, Portugal
                        </>
                      )} 
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__icici_5 display-all__child">
                <div
                  className={"cursor-pointer " + (icici ? "pt-2" : "")}
                  onClick={() => setIcici((icici) => !icici)}
                >
                  <span>
                    Bank Integrations
                    {!icici && <MdKeyboardArrowDown />}{" "}
                    {icici && <MdKeyboardArrowUp />}
                  </span>
                  {icici && (
                 <p className="c-fw-400">
                      {isIndia ? (
                        <>
                          ICICI bank integration to simply the bank reconciliation, payment process and{" "}
                          <a target="_blank" href={link + "/icici-integration"}>
                            much more
                          </a>{" "}
                        </>
                      ) : (
                        <>
                          Provides support in 12+ countries including USA, Canada, UK, Germany, France, Netherlands, Ireland, Spain, Sweden, Denmark, Poland, Portugal
                        </>
                      )} 
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__ic1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__ic2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__ic3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__ic4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__ic5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__e-commerce pricing-border-top">
                <div
                  className={"cursor-pointer " + (ecom ? "pt-2" : "")}
                  onClick={() => setEcommerce((ecom) => !ecom)}
                >
                  <span>
                    E-commerce Integration
                    {!ecom && <MdKeyboardArrowDown />}{" "}
                    {ecom && <MdKeyboardArrowUp />}
                  </span>
                  {ecom && (
                    <p className="c-fw-400">
                      Shopify integration to enhance the efficiency and growth
                      of Ecommerce business.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__e-commerce_2">
                <div
                  className={"cursor-pointer " + (ecom ? "pt-2" : "")}
                  onClick={() => setEcommerce((ecom) => !ecom)}
                >
                  <span>
                    E-commerce Integration
                    {!ecom && <MdKeyboardArrowDown />}{" "}
                    {ecom && <MdKeyboardArrowUp />}
                  </span>
                  {ecom && (
                    <p className="c-fw-400">
                      Shopify integration to enhance the efficiency and growth
                      of Ecommerce business.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__e-commerce_3">
                <div
                  className={"cursor-pointer " + (ecom ? "pt-2" : "")}
                  onClick={() => setEcommerce((ecom) => !ecom)}
                >
                  <span>
                    E-commerce Integration
                    {!ecom && <MdKeyboardArrowDown />}{" "}
                    {ecom && <MdKeyboardArrowUp />}
                  </span>
                  {ecom && (
                    <p className="c-fw-400">
                      Shopify integration to enhance the efficiency and growth
                      of Ecommerce business.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__e-commerce_4">
                <div
                  className={"cursor-pointer " + (ecom ? "pt-2" : "")}
                  onClick={() => setEcommerce((ecom) => !ecom)}
                >
                  <span>
                    E-commerce Integration
                    {!ecom && <MdKeyboardArrowDown />}{" "}
                    {ecom && <MdKeyboardArrowUp />}
                  </span>
                  {ecom && (
                    <p className="c-fw-400">
                      Shopify integration to enhance the efficiency and growth
                      of Ecommerce business.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__e-commerce_5 display-all__child">
                <div
                  className={"cursor-pointer " + (ecom ? "pt-2" : "")}
                  onClick={() => setEcommerce((ecom) => !ecom)}
                >
                  <span>
                    E-commerce Integration
                    {!ecom && <MdKeyboardArrowDown />}{" "}
                    {ecom && <MdKeyboardArrowUp />}
                  </span>
                  {ecom && (
                    <p className="c-fw-400">
                      Shopify integration to enhance the efficiency and growth
                      of Ecommerce business.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__ecom1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__ecom2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__ecom3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__ecom4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__ecom5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__telecom pricing-border-top">
                <div
                  className={"cursor-pointer " + (telecom ? "pt-2" : "")}
                  onClick={() => setTelecom((telecom) => !telecom)}
                >
                  <span>
                    Telecom Integration
                    {!telecom && <MdKeyboardArrowDown />}{" "}
                    {telecom && <MdKeyboardArrowUp />}
                  </span>
                  {telecom && (
                    <p className="c-fw-400">
                      MSG91 integration to automate the business communication like sending invoices, payment reminder and more via Mail, SMS, Whatsapp message.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__telecom_2">
                 <div
                  className={"cursor-pointer " + (telecom ? "pt-2" : "")}
                  onClick={() => setTelecom((telecom) => !telecom)}
                >
                  <span>
                    Telecom Integration
                    {!telecom && <MdKeyboardArrowDown />}{" "}
                    {telecom && <MdKeyboardArrowUp />}
                  </span>
                  {telecom && (
                    <p className="c-fw-400">
                      MSG91 integration to automate the business communication like sending invoices, payment reminder and more via Mail, SMS, Whatsapp message.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__telecom_3">
                 <div
                  className={"cursor-pointer " + (telecom ? "pt-2" : "")}
                  onClick={() => setTelecom((telecom) => !telecom)}
                >
                  <span>
                    Telecom Integration
                    {!telecom && <MdKeyboardArrowDown />}{" "}
                    {telecom && <MdKeyboardArrowUp />}
                  </span>
                  {telecom && (
                    <p className="c-fw-400">
                      MSG91 integration to automate the business communication like sending invoices, payment reminder and more via Mail, SMS, Whatsapp message.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__telecom_4">
                 <div
                  className={"cursor-pointer " + (telecom ? "pt-2" : "")}
                  onClick={() => setTelecom((telecom) => !telecom)}
                >
                  <span>
                    Telecom Integration
                    {!telecom && <MdKeyboardArrowDown />}{" "}
                    {telecom && <MdKeyboardArrowUp />}
                  </span>
                  {telecom && (
                    <p className="c-fw-400">
                      MSG91 integration to automate the business communication like sending invoices, payment reminder and more via Mail, SMS, Whatsapp message.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__telecom_5 display-all__child">
                 <div
                  className={"cursor-pointer " + (telecom ? "pt-2" : "")}
                  onClick={() => setTelecom((telecom) => !telecom)}
                >
                  <span>
                    Telecom Integration
                    {!telecom && <MdKeyboardArrowDown />}{" "}
                    {telecom && <MdKeyboardArrowUp />}
                  </span>
                  {telecom && (
                    <p className="c-fw-400">
                      MSG91 integration to automate the business communication like sending invoices, payment reminder and more via Mail, SMS, Whatsapp message.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__tc1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__tc2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__tc3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__tc4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__tc5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__warehouse pricing-border-top">
                <div
                  className={"cursor-pointer " + (warehouse ? "pt-2" : "")}
                  onClick={() => setWarehouse((warehouse) => !warehouse)}
                >
                  <span>
                    Branch and warehouse management
                    {!warehouse && <MdKeyboardArrowDown />}{" "}
                    {warehouse && <MdKeyboardArrowUp />}
                  </span>
                  {warehouse && (
                    <p className="c-fw-400">
                      Efficiently manage the company's numerous branches and
                      warehouses, access branch- and warehouse-specific reports,
                      facilitate branch transfers, archive the branch and
                      warehouse and perform various related tasks.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__warehouse_2">
                <div
                  className={"cursor-pointer " + (warehouse ? "pt-2" : "")}
                  onClick={() => setWarehouse((warehouse) => !warehouse)}
                >
                  <span>
                    Branch and warehouse management
                    {!warehouse && <MdKeyboardArrowDown />}{" "}
                    {warehouse && <MdKeyboardArrowUp />}
                  </span>
                  {warehouse && (
                    <p className="c-fw-400">
                      Efficiently manage the company's numerous branches and
                      warehouses, access branch- and warehouse-specific reports,
                      facilitate branch transfers, archive the branch and
                      warehouse and perform various related tasks.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__warehouse_3">
                <div
                  className={"cursor-pointer " + (warehouse ? "pt-2" : "")}
                  onClick={() => setWarehouse((warehouse) => !warehouse)}
                >
                  <span>
                    Branch and warehouse management
                    {!warehouse && <MdKeyboardArrowDown />}{" "}
                    {warehouse && <MdKeyboardArrowUp />}
                  </span>
                  {warehouse && (
                    <p className="c-fw-400">
                      Efficiently manage the company's numerous branches and
                      warehouses, access branch- and warehouse-specific reports,
                      facilitate branch transfers, archive the branch and
                      warehouse and perform various related tasks.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__warehouse_4">
                <div
                  className={"cursor-pointer " + (warehouse ? "pt-2" : "")}
                  onClick={() => setWarehouse((warehouse) => !warehouse)}
                >
                  <span>
                    Branch and warehouse management
                    {!warehouse && <MdKeyboardArrowDown />}{" "}
                    {warehouse && <MdKeyboardArrowUp />}
                  </span>
                  {warehouse && (
                    <p className="c-fw-400">
                      Efficiently manage the company's numerous branches and
                      warehouses, access branch- and warehouse-specific reports,
                      facilitate branch transfers, archive the branch and
                      warehouse and perform various related tasks.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__warehouse_5 display-all__child">
                <div
                  className={"cursor-pointer " + (warehouse ? "pt-2" : "")}
                  onClick={() => setWarehouse((warehouse) => !warehouse)}
                >
                  <span>
                    Branch and warehouse management
                    {!warehouse && <MdKeyboardArrowDown />}{" "}
                    {warehouse && <MdKeyboardArrowUp />}
                  </span>
                  {warehouse && (
                    <p className="c-fw-400">
                      Efficiently manage the company's numerous branches and
                      warehouses, access branch- and warehouse-specific reports,
                      facilitate branch transfers, archive the branch and
                      warehouse and perform various related tasks.
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__w1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__w2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__w3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__w4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__w5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__easy-import pricing-border-top">
                <div
                  className={"cursor-pointer " + (importExport ? "pt-2" : "")}
                  onClick={() =>
                    setImportExport((importExport) => !importExport)
                  }
                >
                  <span>
                    Easy Import/Export of the data
                    {!importExport && <MdKeyboardArrowDown />}{" "}
                    {importExport && <MdKeyboardArrowUp />}
                  </span>
                  {importExport && (
                    <p className="c-fw-400">
                      Accelerate the accounting process by importing data such
                      as company master information, inventory details,
                      financial entries, bank statements, and{" "}
                      <a target="_blank" href={link + "/import-data"}>
                        other relevant data
                      </a>
                      . Effortlessly export and share data, including ledgers,
                      invoices, reports, and many more
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__easy-import_2">
                <div
                  className={"cursor-pointer " + (importExport ? "pt-2" : "")}
                  onClick={() =>
                    setImportExport((importExport) => !importExport)
                  }
                >
                  <span>
                    Easy Import/Export of the data
                    {!importExport && <MdKeyboardArrowDown />}{" "}
                    {importExport && <MdKeyboardArrowUp />}
                  </span>
                  {importExport && (
                    <p className="c-fw-400">
                      Accelerate the accounting process by importing data such
                      as company master information, inventory details,
                      financial entries, bank statements, and{" "}
                      <a target="_blank" href={link + "/import-data"}>
                        other relevant data
                      </a>
                      . Effortlessly export and share data, including ledgers,
                      invoices, reports, and many more
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__easy-import_3">
                <div
                  className={"cursor-pointer " + (importExport ? "pt-2" : "")}
                  onClick={() =>
                    setImportExport((importExport) => !importExport)
                  }
                >
                  <span>
                    Easy Import/Export of the data
                    {!importExport && <MdKeyboardArrowDown />}{" "}
                    {importExport && <MdKeyboardArrowUp />}
                  </span>
                  {importExport && (
                    <p className="c-fw-400">
                      Accelerate the accounting process by importing data such
                      as company master information, inventory details,
                      financial entries, bank statements, and{" "}
                      <a target="_blank" href={link + "/import-data"}>
                        other relevant data
                      </a>
                      . Effortlessly export and share data, including ledgers,
                      invoices, reports, and many more
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__easy-import_4">
                <div
                  className={"cursor-pointer " + (importExport ? "pt-2" : "")}
                  onClick={() =>
                    setImportExport((importExport) => !importExport)
                  }
                >
                  <span>
                    Easy Import/Export of the data
                    {!importExport && <MdKeyboardArrowDown />}{" "}
                    {importExport && <MdKeyboardArrowUp />}
                  </span>
                  {importExport && (
                    <p className="c-fw-400">
                      Accelerate the accounting process by importing data such
                      as company master information, inventory details,
                      financial entries, bank statements, and{" "}
                      <a target="_blank" href={link + "/import-data"}>
                        other relevant data
                      </a>
                      . Effortlessly export and share data, including ledgers,
                      invoices, reports, and many more
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__easy-import_5 display-all__child">
                <div
                  className={"cursor-pointer " + (importExport ? "pt-2" : "")}
                  onClick={() =>
                    setImportExport((importExport) => !importExport)
                  }
                >
                  <span>
                    Easy Import/Export of the data
                    {!importExport && <MdKeyboardArrowDown />}{" "}
                    {importExport && <MdKeyboardArrowUp />}
                  </span>
                  {importExport && (
                    <p className="c-fw-400">
                      Accelerate the accounting process by importing data such
                      as company master information, inventory details,
                      financial entries, bank statements, and{" "}
                      <a target="_blank" href={link + "/import-data"}>
                        other relevant data
                      </a>
                      . Effortlessly export and share data, including ledgers,
                      invoices, reports, and many more
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__imex1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__imex2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__imex3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__imex4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__imex5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__financial pricing-border-top">
                <div
                  className={"cursor-pointer " + (financialYear ? "pt-2" : "")}
                  onClick={() =>
                    setFinancialYear((financialYear) => !financialYear)
                  }
                >
                  <span>
                    Financial Year Locking
                    {!financialYear && <MdKeyboardArrowDown />}{" "}
                    {financialYear && <MdKeyboardArrowUp />}
                  </span>
                  {financialYear && (
                    <p className="c-fw-400">
                      You have the ability to lock a specific financial year
                      within your company, preventing any further entries or
                      modifications during that period
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__financial_2">
                <div
                  className={"cursor-pointer " + (financialYear ? "pt-2" : "")}
                  onClick={() =>
                    setFinancialYear((financialYear) => !financialYear)
                  }
                >
                  <span>
                    Financial Year Locking
                    {!financialYear && <MdKeyboardArrowDown />}{" "}
                    {financialYear && <MdKeyboardArrowUp />}
                  </span>
                  {financialYear && (
                    <p className="c-fw-400">
                      You have the ability to lock a specific financial year
                      within your company, preventing any further entries or
                      modifications during that period
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__financial_3">
                <div
                  className={"cursor-pointer " + (financialYear ? "pt-2" : "")}
                  onClick={() =>
                    setFinancialYear((financialYear) => !financialYear)
                  }
                >
                  <span>
                    Financial Year Locking
                    {!financialYear && <MdKeyboardArrowDown />}{" "}
                    {financialYear && <MdKeyboardArrowUp />}
                  </span>
                  {financialYear && (
                    <p className="c-fw-400">
                      You have the ability to lock a specific financial year
                      within your company, preventing any further entries or
                      modifications during that period
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__financial_4">
                <div
                  className={"cursor-pointer " + (financialYear ? "pt-2" : "")}
                  onClick={() =>
                    setFinancialYear((financialYear) => !financialYear)
                  }
                >
                  <span>
                    Financial Year Locking
                    {!financialYear && <MdKeyboardArrowDown />}{" "}
                    {financialYear && <MdKeyboardArrowUp />}
                  </span>
                  {financialYear && (
                    <p className="c-fw-400">
                      You have the ability to lock a specific financial year
                      within your company, preventing any further entries or
                      modifications during that period
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__financial_5 display-all__child">
                <div
                  className={"cursor-pointer " + (financialYear ? "pt-2" : "")}
                  onClick={() =>
                    setFinancialYear((financialYear) => !financialYear)
                  }
                >
                  <span>
                    Financial Year Locking
                    {!financialYear && <MdKeyboardArrowDown />}{" "}
                    {financialYear && <MdKeyboardArrowUp />}
                  </span>
                  {financialYear && (
                    <p className="c-fw-400">
                      You have the ability to lock a specific financial year
                      within your company, preventing any further entries or
                      modifications during that period
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__fy1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__fy2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__fy3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__fy4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__fy5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__security pricing-border-top">
                <div
                  className={"cursor-pointer " + (security ? "pt-2" : "")}
                  onClick={() => setSecurity((security) => !security)}
                >
                  <span>
                    Security
                    {!security && <MdKeyboardArrowDown />}{" "}
                    {security && <MdKeyboardArrowUp />}
                  </span>
                  {security && (
                    <p className="c-fw-400">
                      Your data secured on AWS cloud, and for more security we
                      provide the Two-way authentication, Auth key, Sessions,
                      Audit logs and{" "}
                      <a href={link + "/security"} target="_blank">
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__security_2">
                <div
                  className={"cursor-pointer " + (security ? "pt-2" : "")}
                  onClick={() => setSecurity((security) => !security)}
                >
                  <span>
                    Security
                    {!security && <MdKeyboardArrowDown />}{" "}
                    {security && <MdKeyboardArrowUp />}
                  </span>
                  {security && (
                    <p className="c-fw-400">
                      Your data secured on AWS cloud, and for more security we
                      provide the Two-way authentication, Auth key, Sessions,
                      Audit logs and{" "}
                      <a href={link + "/security"} target="_blank">
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__security_3">
                <div
                  className={"cursor-pointer " + (security ? "pt-2" : "")}
                  onClick={() => setSecurity((security) => !security)}
                >
                  <span>
                    Security
                    {!security && <MdKeyboardArrowDown />}{" "}
                    {security && <MdKeyboardArrowUp />}
                  </span>
                  {security && (
                    <p className="c-fw-400">
                      Your data secured on AWS cloud, and for more security we
                      provide the Two-way authentication, Auth key, Sessions,
                      Audit logs and{" "}
                      <a href={link + "/security"} target="_blank">
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__security_4">
                <div
                  className={"cursor-pointer " + (security ? "pt-2" : "")}
                  onClick={() => setSecurity((security) => !security)}
                >
                  <span>
                    Security
                    {!security && <MdKeyboardArrowDown />}{" "}
                    {security && <MdKeyboardArrowUp />}
                  </span>
                  {security && (
                    <p className="c-fw-400">
                      Your data secured on AWS cloud, and for more security we
                      provide the Two-way authentication, Auth key, Sessions,
                      Audit logs and{" "}
                      <a href={link + "/security"} target="_blank">
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__security_5 display-all__child">
                <div
                  className={"cursor-pointer " + (security ? "pt-2" : "")}
                  onClick={() => setSecurity((security) => !security)}
                >
                  <span>
                    Security
                    {!security && <MdKeyboardArrowDown />}{" "}
                    {security && <MdKeyboardArrowUp />}
                  </span>
                  {security && (
                    <p className="c-fw-400">
                      Your data secured on AWS cloud, and for more security we
                      provide the Two-way authentication, Auth key, Sessions,
                      Audit logs and{" "}
                      <a href={link + "/security"} target="_blank">
                        more
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__s1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__s2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__s3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__s4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__s5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__support pricing-border-top">
                <div
                  className={"cursor-pointer " + (support ? "pt-2" : "")}
                  onClick={() => setSupport((support) => !support)}
                >
                  <span>
                    Support
                    {!support && <MdKeyboardArrowDown />}{" "}
                    {support && <MdKeyboardArrowUp />}
                  </span>
                  {support && (
                    <p className="c-fw-400">
                      You are just one call or email away from us,{" "}
                      <a href={link + "/contact-us"} target="_blank">
                        Connect with us
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__support_2">
                <div
                  className={"cursor-pointer " + (support ? "pt-2" : "")}
                  onClick={() => setSupport((support) => !support)}
                >
                  <span>
                    Support
                    {!support && <MdKeyboardArrowDown />}{" "}
                    {support && <MdKeyboardArrowUp />}
                  </span>
                  {support && (
                    <p className="c-fw-400">
                      You are just one call or email away from us,{" "}
                      <a href={link + "/contact-us"} target="_blank">
                        Connect with us
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__support_3">
                <div
                  className={"cursor-pointer " + (support ? "pt-2" : "")}
                  onClick={() => setSupport((support) => !support)}
                >
                  <span>
                    Support
                    {!support && <MdKeyboardArrowDown />}{" "}
                    {support && <MdKeyboardArrowUp />}
                  </span>
                  {support && (
                    <p className="c-fw-400">
                      You are just one call or email away from us,{" "}
                      <a href={link + "/contact-us"} target="_blank">
                        Connect with us
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__support_4">
                <div
                  className={"cursor-pointer " + (support ? "pt-2" : "")}
                  onClick={() => setSupport((support) => !support)}
                >
                  <span>
                    Support
                    {!support && <MdKeyboardArrowDown />}{" "}
                    {support && <MdKeyboardArrowUp />}
                  </span>
                  {support && (
                    <p className="c-fw-400">
                      You are just one call or email away from us,{" "}
                      <a href={link + "/contact-us"} target="_blank">
                        Connect with us
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__support_5 display-all__child">
                <div
                  className={"cursor-pointer " + (support ? "pt-2" : "")}
                  onClick={() => setSupport((support) => !support)}
                >
                  <span>
                    Support
                    {!support && <MdKeyboardArrowDown />}{" "}
                    {support && <MdKeyboardArrowUp />}
                  </span>
                  {support && (
                    <p className="c-fw-400">
                      You are just one call or email away from us,{" "}
                      <a href={link + "/contact-us"} target="_blank">
                        Connect with us
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="pricing_main_section__grid__sp1 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__sp2 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__sp3 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__sp4 text-center pricing-border-top">
                <MdDone />
              </div>
              <div className="pricing_main_section__grid__sp5 text-center pricing-border-top display-all__child">
                <MdDone />
              </div>

              <div className="pricing_main_section__grid__link_all_feature">
                <a href={link + "/all-features"}>Check all features</a>
              </div>
              <div className="pricing_main_section__grid__extra_charges">
                <p className="c-fs-6 c-fw-400">
                  Extra Add ons:{" "}
                  <span className="c-fw-600">
                    {" "}
                    {isIndia ? "₹0.10" : isAE ? "د.إ0.03" : "£0.005"}
                  </span>{" "}
                  per transaction |{" "}
                  <span className="c-fw-600">
                    {isIndia ? "₹2000" : isAE ? "د.إ250" : "£60"}
                  </span>{" "}
                  per branch/year |{" "}
                  <span className="c-fw-600">
                    {isIndia ? "₹1000" : isAE ? "د.إ120" : "£30"}
                  </span>{" "}
                  per warehouse/year
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h3 className="c-fs-3 c-fw-600">Big Enterprises?</h3>

            <a
              href="javascript:;"
              className="benefits-link"
              onClick={() =>
                Calendly.initPopupWidget({
                  url: "https://calendly.com/sales-accounting-software/talk-to-sale",
                })
              }
            >
              TALK TO US
            </a>
          </div>
        </div>
      </section>

      <section className="container-fluid pricing_start_trail_section">
        <div className="container">
          <div className="text-center">
            <h2 className="sub-heading col-primary c-fw-600">
              GIDDH – The AIO Answer to Your Accounting Needs
            </h2>
            <p className="c-fs-4 c-fw-600">
              Are you still entering your financial data manually into
              spreadsheets to manage your finances?
              <br />
              If yes, it’s time to Make the Switch and purchase a dedicated
              online accounting software like GIDDH.
            </p>
            <a href={link + "/signup"}>Start your trial</a>
          </div>
        </div>
      </section>

      <section className="container-fluid features__description_container mt-5">
        <div className="container">
          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal" +
              (readMoreParagraphStatus1 ? " --read-more" : "")
            }
          >
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h4 className="col-primary small-heading c-fw-600 mb-3">
                  WHY GIDDH?
                </h4>
                <p>
                  Managing your business without understanding its financial
                  status can jeopardize your growth prospects. If you’re a small
                  business organization, the price of accounting software can
                  often put an extra burden on your expenses. So, it’s
                  imperative for you to compare different accounting software
                  prices and then make your choice.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                  style={{
                    display: readMoreParagraphStatus1 ? "none" : "block",
                  }}
                  onClick={() =>
                    showMoreParagraph1((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read More...
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 __image-alignment">
              <figure>
                <img
                  src="/img/giddh-login-page.svg"
                  className="img-fluid"
                  alt="giddh-login-page image"
                />
              </figure>
            </div>

            <div className="col-12">
              <div className="features__description_container__content">
                <p
                  style={{
                    display: readMoreParagraphStatus1 ? "block" : "none",
                  }}
                >
                  That being said, GIDDH is a perfect web-based solution for
                  SMEs that caters to all your accounting needs at affordable
                  prices. Incorporating multiple modules within itself, GIDDH
                  allows you to update your books of account effortlessly making
                  it easier for you to track your cash flow and the overall
                  financial health of the business.
                </p>
                <p
                  style={{
                    display: readMoreParagraphStatus1 ? "block" : "none",
                  }}
                >
                  The time has gone by when accounting was considered “an
                  activity only for the accountants”. Today, all professions,
                  business owners, etc. rely on the different accounting
                  software to make better business decisions. The following
                  segment bifurcates different professions and helps you
                  understand how they are making optimal use of accounting
                  software.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600"
                  style={{
                    display: readMoreParagraphStatus1 ? "block" : "none",
                  }}
                  onClick={() =>
                    showMoreParagraph1((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read Less
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal" +
              (readMoreParagraphStatus2 ? " --read-more" : "")
            }
          >
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h4 className="col-primary small-heading c-fw-600 mb-3">
                  Accounting Software for Growing Businesses
                </h4>
                <p>
                  The advancement and inception of technologies like Artificial
                  Intelligence (AI), Machine Learning (ML), etc. has been
                  forcing businesses to streamline & upgrade all their processes
                  inclusive of accounting. So, if you’re planning to expand your
                  business across states or boundaries, chances are you might be
                  experiencing different forms of shortcomings w.r.t handling
                  the business operations, managing accounts, etc.
                </p>

                <span
                  className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                  style={{
                    display: readMoreParagraphStatus2 ? "none" : "block",
                  }}
                  onClick={() =>
                    showMoreParagraph2((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read More
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 __image-alignment">
              <figure>
                <img
                  src="/img/account-giddh-feature-image.svg"
                  className="img-fluid"
                  alt="account-giddh-feature-image"
                />
              </figure>
            </div>

            <div className="col-12">
              <div className="features__description_container__content">
                <p
                  style={{
                    display: readMoreParagraphStatus2 ? "block" : "none",
                  }}
                >
                  Being a part of a growing business, it’s evident to understand
                  that you’re already running on a shoestring budget, and thus
                  paying a professional accountant to manage your books isn’t a
                  wise choice.
                </p>
                <p
                  style={{
                    display: readMoreParagraphStatus2 ? "block" : "none",
                  }}
                >
                  In such circumstances, having proper accounting software like
                  GIDDH by your side can be a boon for your business. It allows
                  you to utilize all available firm’s resources optimally
                  reducing the hassles of your bookkeeping and accounting tasks.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600"
                  style={{
                    display: readMoreParagraphStatus2 ? "block" : "none",
                  }}
                  onClick={() =>
                    showMoreParagraph2((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read Less
                </span>
              </div>
            </div>
          </div>

          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal" +
              (readMoreParagraphStatus3 ? " --read-more" : "")
            }
          >
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h4 className="col-primary small-heading c-fw-600 mb-3">
                  Accounting Software for Startups
                </h4>
                <p>
                  Entrepreneurship in any form gives you the option to wear
                  multiple caps at a time. If you’re a sole entrepreneur running
                  a startup, right from pitching to clients, to working for
                  them, to raising invoices on time and tracking your finances –
                  every little task gets done by you solely. Automating your
                  financial operation gets easier with the integration of
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                  style={{
                    display: readMoreParagraphStatus3 ? "none" : "block",
                  }}
                  onClick={() =>
                    showMoreParagraph3((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read More
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 __image-alignment">
              <figure>
                <img
                  src="/img/giddh-invoice-send-success.svg"
                  className="img-fluid"
                  alt="giddh-invoice-send-success image"
                />
              </figure>
            </div>
            <div className="col-12">
              <div className="features__description_container__content">
                <p
                  style={{
                    display: readMoreParagraphStatus3 ? "block" : "none",
                  }}
                >
                  cloud-based accounting software. It acts as a company’s
                  valuable asset that improves the efficiency of your finance
                  department. Since, financial data security is a major concern
                  for most startups, having a reliable cloud-based accounting
                  software like GIDDH within your business operations cycle can
                  help. It keeps your financial information secured on an AWS
                  cloud (a Linux server) strengthening its layers of protection
                  and discarding any chances of an unethical data breach.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600"
                  style={{
                    display: readMoreParagraphStatus3 ? "block" : "none",
                  }}
                  onClick={() =>
                    showMoreParagraph3((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read Less
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal" +
              (readMoreParagraphStatus4 ? " --read-more" : "")
            }
          >
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h4 className="col-primary small-heading c-fw-600 mb-3">
                  Accounting Software for CAs and CS
                </h4>
                <p>
                  If you’re looking for a perfect software system to help you
                  with business operations, you’re at the right place. GIDDH –
                  is one of the best accounting software for CA and CS both as
                  it can help you manage daily workload and cater to the
                  specific needs of your clients regularly.
                </p>

                <span
                  className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                  style={{
                    display: readMoreParagraphStatus4 ? "none" : "block",
                  }}
                  onClick={() =>
                    showMoreParagraph4((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read More
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 __image-alignment">
              <figure>
                <img
                  src="/img/accounting-software-feature.png"
                  className="img-fluid"
                  alt="accounting-software-feature image"
                />
              </figure>
            </div>
            <div className="col-12">
              <div className="features__description_container__content">
                <p
                  style={{
                    display: readMoreParagraphStatus4 ? "block" : "none",
                  }}
                >
                  The accounting software pricing stands at just { isIndia && "INR 800/-"} { isAE && "AED 350/-"} { isUK && "GBP 70/-"} per
                  organization/year with a capacity to handle { isIndia && " 10,000"} { (isAE || isUK) && " 40,000"} {" "}
                  transactions and unlimited users. GIDDH prepares your {isIndia ? "GST" : "VAT"} {" "}
                  return filing automatically, identifies potential errors,
                  never lets you miss out deadlines, and streamlines the entire
                  process. Another significant benefit of trusting GIDDH is that
                  it allows you to grant your CA view access to the relevant {isIndia ? "GST" : "VAT"} {" "}
                  tax return data and create {isIndia ? "GST" : "VAT"} invoices ensuring that
                  compliance is no more a challenge.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600"
                  style={{
                    display: readMoreParagraphStatus4 ? "block" : "none",
                  }}
                  onClick={() =>
                    showMoreParagraph4((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read Less
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal" +
              (readMoreParagraphStatus5 ? " --read-more" : "")
            }
          >
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h4 className="col-primary small-heading c-fw-600 mb-3">
                  Free Accounting Software For Students and Teachers
                </h4>
                <p>
                  Here at Giddh, we want to spread awareness about the power and
                  convenience of cloud accounting to everyone. In this regard,
                  we are offering our tool completely free of cost for students
                  and teachers to help them get acquainted with our powerful
                  features and practice using our various options.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                  style={{
                    display: readMoreParagraphStatus5 ? "none" : "block",
                  }}
                  onClick={() =>
                    showMoreParagraph5((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read More
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 __image-alignment">
              <figure>
                <img
                  src="/img/education-economy-image.svg"
                  className="img-fluid"
                  alt="education-economy-image"
                />
              </figure>
            </div>
            <div className="col-12">
              <div className="features__description_container__content">
                <p
                  style={{
                    display: readMoreParagraphStatus5 ? "block" : "none",
                  }}
                >
                  With this free alternative, teachers and students will be able
                  to get hands-on experience about accounting terms and
                  practices using Giddh. This free option also extends to
                  institutes and coaching centers in order to enable instructors
                  to explain commerce and accounting concepts using a real-world
                  tool.We hope that this will better equip the younger
                  generation to take a confident step into the world of
                  accounting.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600"
                  style={{
                    display: readMoreParagraphStatus5 ? "block" : "none",
                  }}
                  onClick={() =>
                    showMoreParagraph5((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read Less
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container-fluid readmore_section"
        style={{ maxHeight: readMoreStatus ? "100%" : "max-content" }}
      >
        <div className="container">
          <div className="col-12 pricing_description text-center">
            <h4 className="col-primary c-fs-3 fw-bold mb-3">
              Traditional Vs Cloud Accounting Software: A Comparison
            </h4>
            <p className="c-fs-4 my-4">
              Not long ago, traditional accounting software like Tally was quite
              a rage and was considered an integral part of both small to
              medium-sized businesses. However, as tech improvements came to the
              fore with concepts of cloud, AI, ML emerging, organizations
              started looking for better options and started incorporating
              cloud-based software.
            </p>
            <div style={{ display: readMoreStatus ? "block" : "none" }}>
              <p className="c-fs-4 text-start">
                Apart from tech improvements, other factors that led to this
                tremendous shift include:
              </p>

              <ul className="custom-ul-with-right-tick text-start">
                <li className="c-fs-4">
                  <span className="c-fw-600">Hardware Costs:</span> Traditional
                  accounting software demanded physical setup of hardware which
                  meant additional expense as it involved purchasing cost,
                  insurance, installation charges, along with its maintenance
                  costs. However, you don’t have to worry about cloud{" "}
                  <span className="c-fw-600">account software price</span>{" "}
                  fluctuations as you don’t require any specialized hardware for
                  operating it. Your entire financial data is encrypted and
                  stored offsite in the cloud and you pay quite a nominal charge
                  for constant usage.
                </li>
                <li className="c-fs-4">
                  <span className="c-fw-600">Accessibility is a Concern:</span>{" "}
                  Traditional accounting software demanded physical setup of
                  hardware which meant additional expense as it involved
                  purchasing cost, insurance, installation charges, along with
                  its maintenance costs. However, you don’t have to worry about
                  cloud account software price fluctuations as you don’t require
                  any specialized hardware for operating it. Your entire
                  financial data is encrypted and stored offsite in the cloud
                  and you pay quite a nominal charge for constant usage.
                </li>
              </ul>
            </div>

            <span
              className="text-decoration-underline c-fw-600 cursor-pointer"
              onClick={() =>
                readmoreAction((readmoreDisplay) => !readmoreDisplay)
              }
            >
              {readMoreStatus ? "Read Less" : "Read More..."}
            </span>
          </div>
        </div>
      </section>

      <section className="container-fluid pricing_grid_section">
        <div className="container">
          <div className="row flex-wrap row-gap-5">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/feature-invoice.svg"
                    alt="Invoicing-logo"
                  />
                  <figcaption>Invoicing</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/feature-inventory.svg"
                    alt="Inventory-Management-logo"
                  />
                  <figcaption>Inventory Management</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/feature-reconcile.svg"
                    alt="Bank-Reconciliation-logo"
                  />
                  <figcaption>Bank Reconciliation</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/multi-currency-banner.svg"
                    alt="Multi-Currency-logo"
                  />
                  <figcaption>Multi Currency</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/feature-tax.svg"
                    alt="Tax-Compliant-logo"
                  />
                  <figcaption>Tax Compliant</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/feature-report.svg"
                    alt="Expense-Management-logo"
                  />
                  <figcaption>Expense Management</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid pricing_support_section">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-sm-12 text-end">
              <h2 className="sub-heading col-white">18X6 Instant Support</h2>
            </div>
            <div className="col-md-6 col-sm-12">
              <a href="contact-us">CONTACT US</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default pricing;
