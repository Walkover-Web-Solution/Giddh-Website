import { usePathname } from "next/navigation";

const terms = (path) => {
  const link = path.path.linkPrefix;
  return (
    <>
      <section className="container-fluid privacy" aria-labelledby="terms-heading">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 id="terms-heading" className="sub-heading c-fw-600 mb-4 text-center col-primary" >
                Please pay attention
              </h1>
              <p className="mb-4 c-fs-5">
                Giddh is an{" "}
                <a href={ "https://giddh.com" + link } title="online accounting service" className="col-primary fw-medium" aria-label="Giddh online accounting service">online accounting service</a>{" "}
                designed especially for small businesses and consumers. These
                Terms of Use are intended to explain our obligations as a
                service provider and Your obligations as a customer. Please read
                them carefully.
              </p>
              <p className="mb-4 c-fs-5">
                These Terms are binding on any use of the Service and apply to
                You from the time that Giddh provides You with access to the
                Service. The Giddh Service will evolve over time based on user
                feedback. These Terms are not intended to answer every question
                or address every issue raised by the use of the Giddh Service.
                Giddh reserves the right to change these terms at any time,
                effective upon the posting of modified terms and Giddh will make
                every effort to communicate these changes to You via email or
                notification via the Website. It is likely the terms of use will
                change over time. It is Your obligation to ensure that You have
                read, understood and agree to the most recent terms available on
                the Website.
              </p>
              <p className="mb-4 c-fs-5">
                By registering to use the Service you acknowledge that You have
                read and understood these Terms and have the authority to act on
                behalf of any person for whom You are using the Service. You are
                deemed to have agreed to these Terms on behalf of any entity for
                whom you use the Service.
              </p>
              <p className="mb-4 c-fs-5">
                These Terms were last updated on 10 May 2016.
              </p>
              <h2 className="mb-3 c-fs-4 heading">1. DEFINITIONS</h2>
              <h3 className="mb-2 c-fs-3 c-fw-400 c-fs-4">Agreement</h3>
              <p className="mb-4 c-fs-5">means these Terms of Use.</p>
              <h3 className="mb-2 c-fs-3 c-fw-400 c-fs-4">Access Fee</h3>
              <p className="mb-4 c-fs-5">
                means the monthly fee (excluding any taxes and duties) payable
                by You in accordance with the fee schedule set out on the
                Website (which Giddh may change from time to time on notice to
                You).
              </p>
              <h3 className="mb-2 c-fs-3 c-fw-400 c-fs-4">
                Confidential Information
              </h3>
              <p className="mb-4 c-fs-5">
                includes all information exchanged between the parties to this
                Agreement, whether in writing, electronically or orally,
                including the Service but does not include information which is,
                or becomes, publicly available other than through unauthorized
                disclosure by the other party.
              </p>
              <h3 className="mb-2 c-fs-3 c-fw-400 c-fs-4">Data</h3>
              <p className="mb-4 c-fs-5">
                means any data inputted by You or with Your authority into the
                Website.
              </p>
              <h3 className="mb-2 c-fs-3 c-fw-400 c-fs-4">
                Intellectual Property Right
              </h3>
              <p className="mb-4 c-fs-5">
                means any patent, trademark, service mark, copyright, moral
                right, right in a design, know-how and any other intellectual or
                industrial property rights, anywhere in the world whether or not
                registered.
              </p>
              <h3 className="mb-2 c-fs-3 c-fw-400 c-fs-4">Service</h3>
              <p className="mb-4 c-fs-5">
                means the online accounting and personal finance management
                services made available (as may be changed or updated from time
                to time by Giddh) via the Website.
              </p>
              <h3 className="mb-2 c-fs-3 c-fw-400 c-fs-4">Website</h3>
              <p className="mb-4 c-fs-5">
                means the Internet site at the domain <a href={ "https://giddh.com" + link } className="col-primary fw-medium" title="www.Giddh.com" aria-label="Visit Giddh website">www.Giddh.com</a> or any other
                site operated by Giddh.
              </p>
              <h3 className="mb-2 c-fs-3 c-fw-400 c-fs-4">Invited User</h3>
              <p className="mb-4 c-fs-5">
                means any person or entity, other than the Subscriber, that uses
                the Service with the authorization of the Subscriber from time
                to time.
              </p>
              <h3 className="mb-2 c-fs-3 c-fw-400 c-fs-4">Subscriber</h3>
              <p className="mb-4 c-fs-5">
                means the person who registers to use the Service, and, where
                the context permits, includes any entity on whose behalf that
                person registers to use the Service.
              </p>
              <h3 className="mb-2 c-fs-3 c-fw-400 c-fs-4">You</h3>
              <p className="mb-4 c-fs-5">Your has a corresponding meaning.</p>
              <h2 className="mb-3 c-fs-4  sub-heading">2. USE OF SOFTWARE</h2>

              <p className="mb-4 c-fs-5">
                Giddh grants You the right to access and use the Service via the
                Website with the particular user roles available to You
                according to Your subscription type. This right is
                non-exclusive, non-transferable, and limited by and subject to
                this Agreement. You acknowledge and agree that, subject to any
                applicable written agreement between the Subscriber and the
                Invited Users, or any other applicable laws:
              </p>
              <div className="m-5">
                <p>
                  {" "}
                  The Subscriber determines who is an Invited User and what
                  level of user role access to the relevant organization and
                  Service that Invited User has;
                  <br />
                  the Subscriber is responsible for all Invited Users’ use of
                  the Service;
                </p>

                <p>
                  the Subscriber controls each Invited User’s level of access to
                  the relevant organization and Service at all times and can
                  revoke or change an Invited User’s access, or level of access,
                  at any time and for any reason, in which case that person or
                  entity will cease to be an Invited User or shall have that
                  different level of access, as the case may be;
                </p>

                <p>
                  if there is any dispute between a Subscriber and an Invited
                  User regarding access to any organization or Service, the
                  Subscriber shall decide what access or level of access to the
                  relevant Data or Service that Invited User shall have, if any.
                </p>
              </div>

              <h2 className="mb-3 c-fs-4 sub-heading" id="clause-31" >3. YOUR OBLIGATIONS</h2>
              <h3 className="mb-2 c-fs-3 c-fw-400 c-fs-4">
                3.1. Payment obligations:
              </h3>
              <p className="mb-4 c-fs-5" id="clause-31">
                An invoice for the Access Fee will be issued each month starting
                one month from the date You added Your first organization to
                Your Giddh account. All invoices will include the Access Fee for
                the preceding period one month of use. Giddh will continue
                invoicing You monthly until this Agreement is terminated in
                accordance with clause <a className="col-primary fw-medium" href="#clause-8">8</a>. All Giddh invoices will be sent to
                You, or to a Billing Contact whose details are provided by You,
                by email. You must pay or arrange payment of all amounts
                specified in any invoice by the due date for payment and are
                payable within 10 days of the invoice date. You are responsible
                for payment of all taxes and duties in addition to the Access
                Fee.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">
                3.2. Preferential pricing or discounts:
              </h3>
              <p className="mb-4 c-fs-5">
                You may from time to time be offered preferential pricing or
                discounts for the Access Fees as a result of the number of
                organizations that You have added to the Service or that have
                been added with Your authority or as a result of Your use of the
                Service (‘Organizations’). Eligibility for such preferential
                pricing or discounts is conditional upon Your acceptance of
                responsibility for payment of any Access Fees in relation to all
                of Your Organizations. Without prejudice to any other rights
                that Giddh may have under these Terms or at law, Giddh reserves
                the right to render invoices for the full (non-discounted)
                Access Fees due or suspend or terminate Your use of the Service
                in respect of any or all of Your Organizations in the event that
                any invoices for those Access Fees are not paid in full by the
                due date for payment.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">
                3.3. General obligations:
              </h3>
              <p className="mb-4 c-fs-5">
                You must only use the Service and Website for Your own lawful
                internal business purposes, in accordance with these Terms and
                any notice sent by Giddh or condition posted on the Website. You
                may use the Service and Website on behalf of others or in order
                to provide services to others but if You do so you must ensure
                that You are authorized to do so and that all persons for whom
                or to whom services are provided comply with and accept all
                terms of this Agreement that apply to You.
              </p>
              <h3 className="mb-2 c-fw-400 c-fs-4" id="clause-34">
                3.4. Automated Bank transaction data delivered into Your Giddh
                account:
              </h3>
              <p className="mb-4 c-fs-5">
                Where available, automated bank account transaction data feeds
                are generally provided to You free of charge. However, Giddh
                reserves the right to pass on any charges related to the
                provision of bank feed data on a case-by-case basis at Giddh’s
                sole discretion. Giddh would first inform You via email to
                indicate what those charges are likely to be (as such charges
                may vary depending on Your bank and Your volume of bank feeds).
                You have the option to decide to discontinue use of automated
                bank feeds at any time. To exercise this option, you must give
                Giddh sufficient prior notice of which automated bank account
                transaction data feeds you want to discontinue. Upon receiving
                such notice Giddh will arrange for such feeds to be terminated
                in accordance with each bank’s usual practices.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">3.5. Access conditions:</h3>
              <ol>
                <li>
                  You must ensure that all usernames and passwords required to
                  access the Service are kept secure and confidential. You must
                  immediately notify Giddh of any unauthorized use of Your
                  passwords or any other breach of security and Giddh will reset
                  Your password and You must take all other actions that Giddh
                  reasonably deems necessary to maintain or enhance the security
                  of Giddh’s computing systems and networks and Your access to
                  the Services.
                </li>
                <li>
                  As a condition of these Terms, when accessing and using the
                  Services, You must:
                <ul>
                  <li>
                    not attempt to undermine the security or integrity of
                    Giddh’s computing systems or networks or, where the Services
                    are hosted by a third party, that third party’s computing
                    systems and networks;
                  </li>
                  <li>
                    not use, or misuse, the Services in any way which may impair
                    the functionality of the Services or Website, or other
                    systems used to deliver the Services or impair the ability
                    of any other user to use the Services or Website;
                  </li>
                  <li>
                    not attempt to gain unauthorized access to any materials
                    other than those to which You have been given express
                    permission to access or to the computer system on which the
                    Services are hosted;
                  </li>
                  <li>
                    not transmit, or input into the Website, any: files that may
                    damage any other person’s computing devices or software,
                    content that may be offensive, or material or Data in
                    violation of any law (including Data or other material
                    protected by copyright or trade secrets which You do not
                    have the right to use);
                  </li>
                  <li>
                    and not attempt to modify, copy, adapt, reproduce,
                    disassemble, decompile or reverse engineer any computer
                    programs used to deliver the Services or to operate the
                    Website except as is strictly necessary to use either of
                    them for normal operation.
                  </li>
                </ul>
                </li>
                <li>
                  By enabling the multi-currency functionality within the
                  Services You confirm that You have read and accept the XE.com
                  terms and conditions for the use of the XE Currency Datafeed
                  service.
                </li>
                <li>
                  Your use of automated bank account feeds enabled by the
                  Yodlee/Saltedge data gathering service (Yodlee/Saltedge
                  Service) from within the Service is subject to the
                  Yodlee/Saltedge Terms of Use.
                </li>
              </ol>
              <h3 className="mb-2  c-fw-400 c-fs-4">3.6. Usage Limitations:</h3>
              <p className="mb-4 c-fs-5">
                Use of the Service may be subject to limitations, including but
                not limited to monthly transaction volumes and the number of
                calls You are permitted to make against Giddh’s application
                programming interface. Any such limitations will be specified
                within the Service.
              </p>
              <h3 id="clause-37" className="mb-2  c-fw-400 c-fs-4">
                3.7. Communication Conditions:
              </h3>
              <p className="mb-4 c-fs-5">
                As a condition of these Terms, if You use any communication
                tools available through the Website (such as any forum, chat
                room or message center), You agree only to use such
                communication tools for lawful and legitimate purposes. You must
                not use any such communication tool for posting or disseminating
                any material unrelated to the use of the Services, including
                (but not limited to): offers of goods or services for sale,
                unsolicited commercial e-mail, files that may damage any other
                person’s computing devices or software, content that may be
                offensive to any other users of the Services or the Website, or
                material in violation of any law (including material that is
                protected by copyright or trade secrets which You do not have
                the right to use). When You make any communication on the
                Website, You represent that You are permitted to make such
                communication. Giddh is under no obligation to ensure that the
                communications on the Website are legitimate or that they are
                related only to the use of the Services. As with any other
                web-based forum, You must exercise caution when using the
                communication tools available on the Website. However, Giddh
                does reserve the right to remove any communication at any time
                in its sole discretion.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">3.8. Indemnity.</h3>
              <p className="mb-4 c-fs-5">
                You indemnify Giddh against: all claims, costs, damage and loss
                arising from Your breach of any of these Terms or any obligation
                You may have to Giddh, including (but not limited to) any costs
                relating to the recovery of any Access Fees that are due but
                have not been paid by You.
              </p>
              <h2 className="mb-3 c-fs-4  sub-heading" id="clause-4">
                4. CONFIDENTIALITY AND PRIVACY
              </h2>
              <h3 className="mb-2 c-fw-400 c-fs-4" >4.1. Confidentiality:</h3>
              <p className="mb-4 c-fs-5"> 
                Unless the relevant party has the prior written consent of the
                other or unless required to do so by law:
              </p>
              <ol>
                <li id="clause-411">
                  Each party will preserve the confidentiality of all
                  Confidential Information of the other obtained in connection
                  with these Terms. Neither party will, without the prior
                  written consent of the other, disclose or make any
                  Confidential Information available to any person, or use the
                  same for its own benefit, other than as contemplated by these
                  Terms.
                </li>
                <li id="clause-412">
                  Each party’s obligations under this clause will survive
                  termination of these Terms.
                </li>
                <li>
                  The provisions of clauses <a className="col-primary fw-medium" href="#clause-411">4.1.1</a> and{" "}
                  <a href="#clause-412" className="col-primary fw-medium"> 4.1.2</a> shall not apply to any information
                  which:
                <ul>
                  <li>
                    is or becomes public knowledge other than by a breach of
                    this clause;
                  </li>
                  <li>
                    is received from a third party who lawfully acquired it and
                    who is under no obligation restricting its disclosure;
                  </li>
                  <li>
                    is in the possession of the receiving party without
                    restriction in relation to disclosure before the date of
                    receipt from the disclosing party; or
                  </li>
                  <li>
                    is independently developed without access to the
                    Confidential Information.
                  </li>
                </ul>
                </li>
              </ol>
              <h3 className="mb-2  c-fw-400 c-fs-4">4.2. Privacy:</h3>
              <p className="mb-4 c-fs-5">
                Giddh maintains a privacy policy that sets out the parties’
                obligations in respect of personal information. You should read
                that policy at privacy and You will be taken to have accepted
                that policy when You accept these Terms.
              </p>
              <h2 className="mb-3 c-fs-4  sub-heading" id="clause-5">
                5. INTELLECTUAL PROPERTY
              </h2>

              <h3 className="mb-2  c-fw-400 c-fs-4">5.1. General:</h3>
              <p className="mb-4 c-fs-5">
                Title to, and all Intellectual Property Rights in the Services,
                the Website and any documentation relating to the Services
                remain the property of Giddh (or its licensors).
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">5.2. Ownership of Data:</h3>
              <p className="mb-4 c-fs-5">
                Title to, and all Intellectual Property Rights in, the Data
                remain Your property. However, Your access to the Data is
                contingent on full payment of the Giddh Access Fee when due. You
                grant Giddh a licence to use, copy, transmit, store, and back-up
                Your information and Data for the purposes of enabling You to
                access and use the Services and for any other purpose related to
                provision of services to You.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">5.3. Backup of Data:</h3>
              <p className="mb-4 c-fs-5">
                You must maintain copies of all Data inputted into the Service.
                Giddh adheres to its best practice policies and procedures to
                prevent data loss, including a daily system data backup regime,
                but does not make any guarantees that there will be no loss of
                Data. Giddh expressly excludes liability for any loss of Data no
                matter how caused.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">
                5.4. Third-party applications and your Data.
              </h3>
              <p className="mb-4 c-fs-5">
                If You enable third-party applications for use in conjunction
                with the Services, You acknowledge that Giddh may allow the
                providers of those third-party applications to access Your Data
                as required for the interoperation of such third-party
                applications with the Services. Giddh shall not be responsible
                for any disclosure, modification or deletion of Your Data
                resulting from any such access by third-party application
                providers.
              </p>
              <h2 className="mb-3 c-fs-4  sub-heading" id="clause-6">
                6. WARRANTIES AND ACKNOWLEDGEMENTS
              </h2>
              <h3 className="mb-2  c-fw-400 c-fs-4">6.1. Authority:</h3>
              <p className="mb-4 c-fs-5">
                You warrant that where You have registered to use the Service on
                behalf of another person, You have the authority to agree to
                these Terms on behalf of that person and agree that by
                registering to use the Service You bind the person on whose
                behalf You act to the performance of any and all obligations
                that You become subject to by virtue of these Terms, without
                limiting Your own personal obligations under these Terms.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">6.2. Acknowledgement:</h3>
              <p className="mb-4 c-fs-5">You acknowledge that:</p>
              <ol>
                <li>
                  You are authorized to use the Services and the Website and to
                  access the information and Data that You input into the
                  Website, including any information or Data input into the
                  Website by any person you have authorized to use the Service.
                  You are also authorized to access the processed information
                  and Data that is made available to You through Your use of the
                  Website and the Services (whether that information and Data is
                  Your own or that of anyone else).
                </li>
                <li>
                  Giddh has no responsibility to any person other than You and
                  nothing in this Agreement confers, or purports to confer, a
                  benefit on any person other than You. If You use the Services
                  or access the Website on behalf of or for the benefit of
                  anyone other than yourself (whether a body corporate or
                  otherwise) you agree that:
                <ul>
                  <li>
                    You are responsible for ensuring that You have the right to
                    do so;
                  </li>
                  <li>
                    You are responsible for authorizing any person who is given
                    access to information or Data, and you agree that Giddh has
                    no obligation to provide any person access to such
                    information or Data without Your authorization and may refer
                    any requests for information to You to address; and
                  </li>
                  <li>
                    You will indemnify Giddh against any claims or loss relating
                    to:
                  <ul>
                    <li>
                      Giddh’s refusal to provide any person access to Your
                      information or Data in accordance with these Terms,
                    </li>
                    <li>
                      Giddh’s making available information or Data to any person
                      with Your authorisation.
                    </li>
                  </ul>
                  </li>
                </ul>
                </li>
                <li>
                  The provision of, access to, and use of, the Services is on an
                  as is basis and at Your own risk.
                </li>
                <li>
                  Giddh does not warrant that the use of the Service will be
                  uninterrupted or error free. Among other things, the operation
                  and availability of the systems used for accessing the
                  Service, including public telephone services, computer
                  networks and the Internet, can be unpredictable and may from
                  time to time interfere with or prevent access to the Services.
                  Giddh is not in any way responsible for any such interference
                  or prevention of Your access or use of the Services.
                </li>
                <li>
                  Giddh is not Your accountant and use of the Services does not
                  constitute the receipt of accounting advice. If You have any
                  accounting questions, please contact an accountant.
                </li>
                <li>
                  It is Your sole responsibility to determine that the Services
                  meet the needs of Your business and are suitable for the
                  purposes for which they are used.
                </li>
                <li>
                  You remain solely responsible for complying with all
                  applicable accounting, tax and other laws. It is Your
                  responsibility to check that storage of and access to your
                  Data via the Software and the Website will comply with laws
                  applicable to you (including any laws requiring you to retain
                  records).
                </li>
              </ol>

              <h3 className="mb-2  c-fw-400 c-fs-4">6.3. No warranties:</h3>
              <p className="mb-4 c-fs-5">
                Giddh gives no warranty about the Services. Without limiting the
                foregoing, Giddh does not warrant that the Services will meet
                Your requirements or that it will be suitable for any particular
                purpose. To avoid doubt, all implied conditions or warranties
                are excluded in so far as is permitted by law, including
                (without limitation) warranties of merchantability, fitness for
                purpose, title and non-infringement.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">
                6.4. Consumer guarantees:
              </h3>
              <p className="mb-4 c-fs-5">
                You warrant and represent that You are acquiring the right to
                access and use the Services for the purposes of a business and
                that, to the maximum extent permitted by law, any statutory
                consumer guarantees or legislation intended to protect
                non-business consumers in any jurisdiction does not apply to the
                supply of the Services, the Website or these Terms.
              </p>
              <h2 className="mb-3  sub-heading c-fs-4" id="clause-7">
                7. LIMITATION OF LIABILITY
              </h2>
              <ol>
                <li>
                  To the maximum extent permitted by law, Giddh excludes all
                  liability and responsibility to You (or any other person) in
                  contract, tort (including negligence), or otherwise, for any
                  loss (including loss of information, Data, profits and
                  savings) or damage resulting, directly or indirectly, from any
                  use of, or reliance on, the Service or Website.
                </li>
                <li>
                  If You suffer loss or damage as a result of Giddh’s negligence
                  or failure to comply with these Terms, any claim by You
                  against Giddh arising from Giddh’s negligence or failure will
                  be limited in respect of any one incident, or series of
                  connected incidents, to the Access Fees paid by You in the
                  previous 12 months.
                </li>
                <li>
                  If You are not satisfied with the Service, Your sole and
                  exclusive remedy is to terminate these Terms in accordance
                  with Clause 8.
                </li>
              </ol>
              <h2 className="mb-3  sub-heading c-fs-4" id="clause-8">8. TERMINATION</h2>
              <h3 className="mb-2  c-fw-400 c-fs-4">8.1. Trial policy</h3>
              <p className="mb-4 c-fs-5">
                When You first sign up for access to the Services You can
                evaluate the Services under the defined trial usage conditions,
                with no obligation to continue to use the Services. If You
                choose to continue using the Services thereafter, You will be
                billed from the day You first added Your billing details into
                the Services. If You choose not to continue using the Services,
                You may delete Your organization in the “settings” section of
                the Services.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">
                8.2. Prepaid Subscriptions
              </h3>
              <p className="mb-4 c-fs-5">
                Giddh will not provide any refund for any remaining prepaid
                period for a prepaid Access Fee subscription.
              </p>
              <h3 className="mb-2 c-fw-400 c-fs-4">
                8.3. No-fault termination:
              </h3>
              <p className="mb-4 c-fs-5">
                These Terms will continue for the period covered by the Access
                Fee paid or payable under clause <a href="#clause-31" className="col-primary fw-medium">3.1.</a> At the
                end of each billing period these Terms will automatically
                continue for another period of the same duration as that period,
                provided You continue to pay the prescribed Access Fee when due,
                unless either party terminates these Terms by giving notice to
                the other party at least 30 days before the end of the relevant
                payment period. If You terminate these Terms You shall be liable
                to pay all relevant Access Fees on a pro-rata basis for each day
                of the then current period up to and including the day of
                termination of these Terms.
              </p>
              <h3 className="mb-2 c-fw-400 c-fs-4" id="clause-84">8.4. Breach:</h3>
              <p className="mb-4 c-fs-5">If You:</p>
              <ol>
                <li>
                  breach any of these Terms (including, without limitation, by
                  non-payment of any Access Fees) and do not remedy the breach
                  within 14 days after receiving notice of the breach if the
                  breach is capable of being remedied;
                </li>
                <li>
                  breach any of these Terms and the breach is not capable of
                  being remedied (which includes (without limitation) any breach
                  of clause <a className="col-primary fw-medium" href="#clause-34"> 3.4 </a> or any payment of Access Fees that are more than
                  30 days overdue); or
                </li>
                <li>
                  You or Your business become insolvent or Your business goes
                  into liquidation or has a receiver or manager appointed of any
                  of its assets or if You become insolvent, or make any
                  arrangement with Your creditors, or become subject to any
                  similar insolvency event in any jurisdiction.
                </li>
                <li>
                  Giddh may take any or all of the following actions, at its
                  sole discretion:
                </li>
                <li>
                  Terminate this Agreement and Your use of the Services and the
                  Website;
                </li>
                <li>
                  Suspend for any definite or indefinite period of time, Your
                  use of the Services and the Website;
                </li>
                <li>Suspend or terminate access to all or any Data.</li>
                <li>
                  Take either of the actions in sub-clauses (d), (e) and (f) of
                  this clause <a className="col-primary fw-medium" href="#clause-84">8(4)</a> in respect of any or all other persons whom
                  You have authorized to have access to Your information or
                  Data.
                </li>
                <li>
                  For the avoidance of doubt, if payment of any invoice for
                  Access Fees due in relation to any of Your Billing Contacts,
                  Billing Plans or any of Your Organizations (as defined at
                  clause <a className="col-primary fw-medium" href="#clause-31">3</a>) is not made in full by the relevant due date, Giddh
                  may: suspend or terminate Your use of the Service, the
                  authority for all or any of Your Organizations to use the
                  Service, or Your rights of access to all or any Data.
                </li>
              </ol>
              <h3 className="mb-2  c-fw-400 c-fs-4">8.5. Accrued Rights:</h3>
              <p className="mb-4 c-fs-5">
                Termination of these Terms is without prejudice to any rights
                and obligations of the parties accrued up to and including the
                date of termination. On termination of this Agreement You will:
                <br />
                remain liable for any accrued charges and amounts which become
                due for payment before or after termination; and
                <br />
                immediately cease to use the Services and the Website.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">
                8.6. Expiry or termination:
              </h3>
              <p className="mb-4 c-fs-5">
                Clauses <a className="col-primary fw-medium" href="#clause-31"> 3.1</a>,<a className="col-primary fw-medium" href="#clause-37"> 3.7</a>,<a className="col-primary fw-medium" href="#clause-4"> 4</a>,<a className="col-primary fw-medium" href="#clause-5"> 5</a>,<a className="col-primary fw-medium" href="#clause-6"> 6</a>,<a className="col-primary fw-medium" href="#clause-7"> 7</a>,<a className="col-primary fw-medium" href="#clause-8"> 8</a> and <a className="col-primary fw-medium" href="#clause-10"> 10 </a> survive the expiry or
                termination of these Terms.
              </p>
              <h2 className="mb-3  sub-heading c-fs-4">9. HELP DESK</h2>
              <h3 className="mb-2  c-fw-400 c-fs-4">
                9.1. Technical Problems:
              </h3>
              <p className="mb-4 c-fs-5">
                In the case of technical problems You must make all reasonable
                efforts to investigate and diagnose problems before contacting
                Giddh. If You still need technical help, please check the
                support provided online by Giddh on the Website.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">
                9.2. Service availability:
              </h3>
              <p className="mb-4 c-fs-5">
                Whilst Giddh intends that the Services should be available 24
                hours a day, seven days a week, it is possible that on occasions
                the Services or Website may be unavailable to permit maintenance
                or other development activity to take place.
              </p>
              <h2 className="mb-3  sub-heading c-fs-4" id="clause-10">10. GENERAL</h2>
              <h3 className="mb-2  c-fw-400 c-fs-4">10.1. Entire agreement:</h3>
              <p className="mb-4 c-fs-5">
                These Terms, together with the Giddh Privacy Policy and the
                terms of any other notices or instructions given to You under
                these Terms of Use, supersede and extinguish all prior
                agreements, representations (whether oral or written), and
                understandings and constitute the entire agreement between You
                and Giddh relating to the Services and the other matters dealt
                with in these Terms.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">10.2. Waiver:</h3>
              <p className="mb-4 c-fs-5">
                If either party waives any breach of these Terms, this will not
                constitute a waiver of any other breach. No waiver will be
                effective unless made in writing.
              </p>
              <h3 className="mb-4  c-fw-400 c-fs-4">10.3. Delays:</h3>
              <p className="mb-4 c-fs-5">
                Neither party will be liable for any delay or failure in
                performance of its obligations under these Terms if the delay or
                failure is due to any cause outside its reasonable control. This
                clause does not apply to any obligation to pay money.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">10.4. No Assignment:</h3>
              <p className="mb-4 c-fs-5">
                You may not assign or transfer any rights to any other person
                without Giddh’s prior written consent.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">
                10.5. Governing law and jurisdiction:
              </h3>
              <p className="mb-4 c-fs-5">
                This Agreement is governed by the laws of India and You hereby
                submit to the exclusive jurisdiction of the courts of Indore for
                all disputes arising out of or in connection with this
                Agreement.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">10.6. Severability:</h3>
              <p className="mb-4 c-fs-5">
                If any part or provision of these Terms is invalid,
                unenforceable or in conflict with the law, that part or
                provision is replaced with a provision which, as far as
                possible, accomplishes the original purpose of that part or
                provision. The remainder of this Agreement will be binding on
                the parties.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">10.7. Notices:</h3>
              <p className="mb-4 c-fs-5">
                Any notice given under these Terms by either party to the other
                must be in writing by email and will be deemed to have been
                given on transmission. Notices to Giddh must be sent to
                shubhendra@Giddh.com or to any other email address notified by
                email to You by Giddh. Notices to You will be sent to the email
                address which You provided when setting up Your access to the
                Service.
              </p>
              <h3 className="mb-2  c-fw-400 c-fs-4">
                10.8. Rights of Third Parties:
              </h3>
              <p className="mb-4 c-fs-5">
                A person who is not a party to these Terms has no right to
                benefit under or to enforce any term of these Terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default terms;
