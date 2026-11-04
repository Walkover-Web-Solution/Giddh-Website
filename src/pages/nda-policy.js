const ndaPolicy = (path) => {
  const link = path.path.linkPrefix;
  return (
    <>
      <section className="container-fluid privacy" aria-labelledby="nda-policy-heading">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 id="nda-policy-heading" className="sub-heading c-fw-600 mb-4 text-center col-primary">
                Non-Disclosure Agreement
              </h1>
              <p className="mb-4 c-fs-5 text-center">
                Effective date: 1 November 2026 &nbsp;|&nbsp; Version 1.0 &nbsp;|&nbsp; Applies to every account created on or used through giddh.com and the Giddh apps
              </p>

              <p className="mb-4 c-fs-5">
                This is a two-way promise. Giddh keeps your business and financial data confidential, and you keep confidential any non-public information about Giddh that you see while using the product. The full terms below are what legally apply.
              </p>

              <h2 className="mb-3 c-fs-4 heading">1. Parties and acceptance</h2>
              <p className="mb-4 c-fs-5">
                This Non-Disclosure Agreement (the “Agreement”) is between Walkover Technologies Pvt Ltd, a company incorporated under the laws of India with its registered office at 5th Floor, Wing B, LIC Tower, 28-29-30, PU - 03, Scheme No. 54, Indore, Madhya Pradesh, 452011, which owns and operates Giddh (“Giddh”, “we”, “us”), and the individual or entity that creates or uses a Giddh account (“you”, “User”). If you accept on behalf of a company or other organisation, you confirm that you have authority to bind it, and “you” includes that organisation.
              </p>
              <p className="mb-4 c-fs-5">
                You accept this Agreement by ticking the acceptance box, or by clicking “Sign up”, “Sign in” or a similar button, on any Giddh sign-up or sign-in screen. This electronic acceptance forms a binding contract under the Indian Contract Act, 1872 and the Information Technology Act, 2000. If you do not agree, do not create an account or sign in.
              </p>

              <h2 className="mb-3 c-fs-4 heading">2. Definitions</h2>
              <p className="mb-4 c-fs-5">
                “Confidential Information” means any non-public information disclosed by one party (the “Disclosing Party”) to the other (the “Receiving Party”), in any form, that is marked confidential or that a reasonable person would understand to be confidential from its nature or the circumstances of disclosure. It includes Customer Data and Giddh Information.
              </p>
              <p className="mb-4 c-fs-5">
                “Customer Data” means all data you or your authorised users enter, upload, import or generate in Giddh, including ledgers, invoices, bills, bank statements and bank-feed data, GST, VAT and other tax data, e-invoice and e-way bill data, inventory, payroll data, and details of your customers, vendors and employees.
              </p>
              <p className="mb-4 c-fs-5">
                “Giddh Information” means non-public information about Giddh and its group companies, including unreleased, beta or early-access features, product roadmaps, non-public pricing and commercial offers, API documentation and credentials not published by us, system architecture, security measures and test results, source code, and any communications marked confidential.
              </p>
              <p className="mb-4 c-fs-5">
                “Representatives” means a party’s directors, employees, consultants, chartered accountants, auditors, legal advisers and, for Giddh, its group companies and sub-processors, in each case who need the information for the purposes of this Agreement.
              </p>

              <h2 className="mb-3 c-fs-4 heading">3. How Giddh protects your data</h2>
              <ul className="mb-4 c-fs-5">
                <li>
                  We treat all Customer Data as your Confidential Information. We use it only to provide, secure, support and improve the Giddh service for you, and as you instruct through your use of the product.
                </li>
                <li>
                  We do not sell Customer Data, and we do not disclose it to third parties except as set out in clauses 6 and 7, or where you direct us to (for example, when you connect a bank, file a return with a tax portal, or share an invoice with your customer).
                </li>
                <li>
                  We apply reasonable technical and organisational security measures appropriate to financial data, including access controls, encryption in transit and at rest where applicable, and limiting staff access to those who need it.
                </li>
                <li>
                  We may use Customer Data in aggregated and anonymised form, from which you and your customers cannot be identified, to operate and improve our services. Such data is not Confidential Information.
                </li>
                <li>
                  Our handling of personal data within Customer Data is further governed by our{" "}
                  <a href={"https://giddh.com" + link + "/privacy-policy"} className="col-primary fw-medium" title="Privacy Policy" aria-label="Giddh Privacy Policy">
                    Privacy Policy
                  </a>{" "}
                  and applicable data protection law, including the Digital Personal Data Protection Act, 2023.
                </li>
              </ul>

              <h2 className="mb-3 c-fs-4 heading">4. How you protect Giddh’s information</h2>
              <ul className="mb-4 c-fs-5">
                <li>
                  You will use Giddh Information only to use Giddh for your own business and to evaluate the service.
                </li>
                <li>
                  You will not disclose Giddh Information to any third party except your Representatives under clause 6, and you will protect it with at least the same care you use for your own confidential information, and never less than reasonable care.
                </li>
                <li>
                  You will not copy, reverse engineer, decompile or attempt to derive the source code, structure or algorithms of Giddh, and you will not use Giddh Information to build or help build a competing product.
                </li>
                <li>
                  If you take part in a beta, pilot or early-access programme, you will not publish screenshots, reviews, benchmarks or descriptions of unreleased features without our prior written consent.
                </li>
                <li>
                  You are responsible for keeping your login credentials, API keys and tokens confidential, and for any breach of this Agreement by your users or Representatives.
                </li>
              </ul>

              <h2 className="mb-3 c-fs-4 heading">5. What is not confidential</h2>
              <p className="mb-4 c-fs-5">
                Confidential Information does not include information that the Receiving Party can show:
              </p>
              <ul className="mb-4 c-fs-5">
                <li>is or becomes publicly available through no fault of the Receiving Party;</li>
                <li>was lawfully known to the Receiving Party, without a duty of confidentiality, before it was disclosed;</li>
                <li>is lawfully received from a third party who is free to disclose it without restriction; or</li>
                <li>is independently developed by the Receiving Party without use of or reference to the Confidential Information.</li>
              </ul>

              <h2 className="mb-3 c-fs-4 heading">6. Permitted disclosures</h2>
              <p className="mb-4 c-fs-5">
                The Receiving Party may disclose Confidential Information to its Representatives who need to know it for the purposes of this Agreement and who are bound by confidentiality obligations at least as protective as these. Giddh may share Customer Data with sub-processors, such as cloud hosting, payment, communication and support providers, only to the extent needed to provide the service. Each party remains responsible for any breach by its Representatives.
              </p>

              <h2 className="mb-3 c-fs-4 heading">7. Disclosure required by law</h2>
              <p className="mb-4 c-fs-5">
                The Receiving Party may disclose Confidential Information if required by law, regulation, a court order, or a request from a tax, regulatory or law-enforcement authority. Where legally permitted, it will give the Disclosing Party prompt notice so that it can seek protection, and will disclose only the portion that is legally required.
              </p>

              <h2 className="mb-3 c-fs-4 heading">8. Return and deletion</h2>
              <p className="mb-4 c-fs-5">
                When your account is closed, or on written request, each party will stop using the other’s Confidential Information and will return or delete it, except for copies that must be kept to comply with law (including statutory record-keeping requirements for accounts and tax records), or that remain in routine backups until they are overwritten. Retained copies stay subject to this Agreement. You can export your Customer Data before closing your account as described in our{" "}
                <a href={"https://giddh.com" + link + "/terms"} className="col-primary fw-medium" title="Terms of Service" aria-label="Giddh Terms of Service">
                  Terms of Service
                </a>
                .
              </p>

              <h2 className="mb-3 c-fs-4 heading">9. No licence or ownership transfer</h2>
              <p className="mb-4 c-fs-5">
                All Confidential Information remains the property of the Disclosing Party. You own your Customer Data, and Giddh owns Giddh Information and the Giddh platform. Nothing in this Agreement grants either party any licence or right in the other’s intellectual property, except the limited rights needed to perform this Agreement and provide or use the service.
              </p>

              <h2 className="mb-3 c-fs-4 heading">10. Term and survival</h2>
              <p className="mb-4 c-fs-5">
                This Agreement starts when you accept it and continues while you have a Giddh account. The confidentiality obligations continue for three (3) years after your account is closed, except that obligations for Customer Data, trade secrets, source code and security information continue for as long as that information remains confidential.
              </p>

              <h2 className="mb-3 c-fs-4 heading">11. Remedies</h2>
              <p className="mb-4 c-fs-5">
                Unauthorised use or disclosure of Confidential Information may cause harm that money alone cannot remedy. The Disclosing Party may therefore seek an injunction or other equitable relief, in addition to any other remedies available under law. Giddh may also suspend or terminate an account that breaches this Agreement. Each party’s liability under this Agreement is subject to the limitation of liability in the{" "}
                <a href={"https://giddh.com" + link + "/terms"} className="col-primary fw-medium" title="Terms of Service" aria-label="Giddh Terms of Service">
                  Terms of Service
                </a>
                , except for wilful or fraudulent misuse of Confidential Information.
              </p>

              <h2 className="mb-3 c-fs-4 heading">12. Relationship with other terms</h2>
              <p className="mb-4 c-fs-5">
                This Agreement forms part of, and should be read together with, the Giddh{" "}
                <a href={"https://giddh.com" + link + "/terms"} className="col-primary fw-medium" title="Terms of Service" aria-label="Giddh Terms of Service">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href={"https://giddh.com" + link + "/privacy-policy"} className="col-primary fw-medium" title="Privacy Policy" aria-label="Giddh Privacy Policy">
                  Privacy Policy
                </a>
                . If this Agreement conflicts with those documents on a matter of confidentiality, this Agreement prevails. A separate signed agreement between you and Giddh prevails over this Agreement to the extent it expressly says so.
              </p>

              <h2 className="mb-3 c-fs-4 heading">13. Governing law and disputes</h2>
              <p className="mb-4 c-fs-5">
                This Agreement is governed by the laws of India. The parties will first try to resolve any dispute through good-faith discussion for thirty (30) days. Subject to that, the courts at Indore, Madhya Pradesh will have exclusive jurisdiction, without limiting the right of either party to seek urgent interim relief in any competent court.
              </p>

              <h2 className="mb-3 c-fs-4 heading">14. Changes to this agreement</h2>
              <p className="mb-4 c-fs-5">
                We may update this Agreement from time to time. We will show the new effective date on this page and, for material changes, notify you by email or in the product. Continuing to sign in or use Giddh after the effective date means you accept the updated Agreement. If you do not agree, you may close your account.
              </p>

              <h2 className="mb-3 c-fs-4 heading">15. Contact</h2>
              <p className="mb-4 c-fs-5">
                Questions about this Agreement, or reports of suspected misuse of confidential information, can be sent to{" "}
                <a href="mailto:legal@giddh.com" className="col-primary fw-medium" title="Email legal@giddh.com" aria-label="Email legal@giddh.com">
                  legal@giddh.com
                </a>{" "}
                or by post to Walkover Technologies Pvt Ltd, 5th Floor, Wing B, LIC Tower, 28-29-30, PU - 03, Scheme No. 54, Indore, Madhya Pradesh, 452011, India.
              </p>

              <p className="mb-4 c-fs-5">
                By ticking “I agree” or clicking “Sign up” or “Sign in”, you confirm that you have read, understood and agree to this Non-Disclosure Agreement, the Terms of Service and the Privacy Policy.
              </p>

              <p className="mb-4 c-fs-5">
                © Walkover Technologies Pvt Ltd. Giddh is a product of Walkover Technologies Pvt Ltd.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ndaPolicy;
