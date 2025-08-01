import React from "react";
import { ArrowRight } from "lucide-react";
import HeaderTab from "./HeaderTab";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        {/* Header */}
        <HeaderTab />

        {/* Main Content */}
        <div className="max-w-7xl mt-16 mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="sticky top-24 z-10 bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-t-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              TERMS AND CONDITIONS
            </h1>
          </div>

          <div
            className="bg-white rounded-b-lg shadow-sm border border-gray-200 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 200px)" }}
          >
            {/* Content Sections */}
            <div className="p-6 md:p-8 space-y-4">
              {/* Agreement Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Agreement
                </h2>
                <div className="space-y-1 text-gray-700">
                  <p>
                    This is an agreement between the client ("You") and Abishek
                    Kondagunta Venkatesh ("Research Analyst") registered with
                    the Securities and Exchange Board of India (SEBI) as a
                    Research Analyst (RA) under registration No. INH000022066;
                    BSE Enlistment No. &lt;to be updated&gt;
                  </p>
                  <p>
                    By subscribing to the research services, clients acknowledge
                    and agree to the following terms and conditions:
                  </p>
                </div>
              </section>

              {/* Research Services Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Research Services
                </h2>
                <div className="space-y-1 text-gray-700">
                  <p>
                    <strong>1. Availing the research services:</strong> By
                    accepting delivery of the research service, the client
                    confirms that they have elected to subscribe to the research
                    service of the RA at their sole discretion. RA confirms that
                    the research services shall be rendered in accordance with
                    the applicable provisions of the RA Regulations.
                  </p>
                  <p>
                    <strong>2. Obligation on Research Analyst:</strong> RA and
                    the client shall be bound by SEBI Act and all the applicable
                    rules and regulations of SEBI, including the RA Regulations
                    and relevant notifications of the Government, as may be in
                    force, from time to time.
                  </p>
                  <p>
                    <strong>3. Client Information and KYC:</strong> The client
                    shall furnish all required details in full as may be
                    required by the RA in its standard form with supporting
                    details. RA shall collect, store, upload and/or check KYC
                    records with the KYC Registration Agency (KRA) as specified
                    by SEBI.
                  </p>
                </div>
              </section>

              {/* Client Declaration Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Client Declaration
                </h2>
                <div className="space-y-1 text-gray-700 italic">
                  <p>
                    "I/We have read and understood the terms and conditions
                    applicable to a research analyst as defined under regulation
                    2(1)(u) of the SEBI (Research Analyst) Regulations, 2014,
                    including the fee structure."
                  </p>
                  <p>
                    "I/We are subscribing to the research services for our own
                    benefits and consumption, and any reliance placed on the
                    research report provided by research analyst shall be as per
                    our own judgement and assessment of the conclusions
                    contained in the research report."
                  </p>
                  <p>
                    "I/We understand that any investment made based on the
                    recommendations in the research report are subject to market
                    risk. Recommendations in the research report do not provide
                    any assurance of returns. There is no recourse to claim any
                    losses incurred on the investments made based on the
                    recommendations in the research report."
                  </p>
                </div>
              </section>

              {/* Research Analyst Declaration Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Research Analyst Declaration
                </h2>
                <div className="space-y-1 text-gray-700">
                  <p>
                    1. We are duly registered with SEBI as a research analyst
                    under registration no. INH000022066 from July 28, 2025; BSE
                    enlistment no. &lt;to be updated&gt; and compliant with the
                    SEBI (research analyst) regulations, 2014.
                  </p>
                  <p>
                    2. Currently, we have a valid SEBI registration and have the
                    required qualifications to render services contemplated
                    under RA regulations.
                  </p>
                  <p>
                    3. We have no material adverse disciplinary history or any
                    other conflicts of interest that compromise the integrity of
                    its recommendations.
                  </p>
                  <p>
                    4. The maximum fee charged by the research analyst shall not
                    exceed ₹ 1.51 lakhs per annum per family of clients.
                  </p>
                  <p>
                    5. The recommendations provided by us do not provide any
                    assurance of returns.
                  </p>
                </div>
              </section>

              {/* Payment Terms Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Payment Terms
                </h2>
                <div className="space-y-1 text-gray-700">
                  <p>
                    <strong>5. Consideration and mode of payment:</strong> The
                    client shall duly pay to the RA, the agreed fees for the
                    services that RA renders to the client and statutory
                    charges; as applicable. Such fees and statutory charges
                    shall be payable through the specified manner and modes
                    communicated by the Research Analyst (including but not
                    limited to payment gateways or processors like Razorpay,
                    NEFT, Centralised Fee Collection Mechanism for RA, etc.). We
                    may collect upto 3 months advance payment based on mutual
                    agreement.
                  </p>
                  <p>
                    <strong>
                      Optional Centralised Fee Collection Mechanism:
                    </strong>{" "}
                    Abishek Kondagunta Venkatesh, in compliance with SEBI
                    guidelines, informs clients about the availability of an
                    optional Centralised Fee Collection Mechanism (CeFCoM) for
                    the payment of fees. Clients opting for this mechanism will
                    be provided with necessary guidance and instructions at the
                    time of subscription.
                  </p>
                </div>
              </section>

              {/* Risk Factors Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Risk Factors
                </h2>
                <div className="space-y-1 text-gray-700">
                  <p>
                    <strong>6. Risk Factors:</strong> Investments in securities
                    markets are inherently risky and subject to market dynamics.
                    Registration granted by SEBI and certification from NISM in
                    no way guarantee performance of the intermediary or provide
                    any assurance of returns to clients.
                  </p>
                  <p>
                    <strong>7. Conflict of Interest:</strong> The research
                    analyst adheres to SEBI's guidelines on the disclosure and
                    mitigation of actual or potential conflicts of interest.
                    Full disclosures are provided in each research report.
                  </p>
                </div>
              </section>

              {/* Termination Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Termination of Service
                </h2>
                <div className="space-y-1 text-gray-700">
                  <p>
                    <strong>
                      8. Termination of service and refund of fees:
                    </strong>{" "}
                    The research analyst reserves the right to suspend or
                    terminate the provision of research services to clients in
                    the event of suspension or cancellation of its registration
                    with SEBI.
                  </p>
                  <p>
                    In case the certificate of registration of the research
                    analyst is suspended for a period exceeding sixty (60) days
                    or is cancelled, the research analyst shall refund the
                    subscription fees to the client on a pro-rata basis for the
                    period from the effective date of such suspension or
                    cancellation to the end of the subscription period.
                  </p>
                </div>
              </section>

              {/* Grievance Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Grievance Redressal
                </h2>
                <div className="space-y-1 text-gray-700">
                  <p>
                    <strong>
                      9. Grievance redressal and dispute resolution:
                    </strong>{" "}
                    For any support-related grievances, including issues related
                    to non-receipt of reports or deficiencies in service,
                    clients must email their concerns to the grievance officer
                    at abishekkvenkatesh@outlook.com. All grievances will be
                    addressed within 7 (seven) business days or as per latest
                    SEBI RA Regulations.
                  </p>
                  <p>
                    <strong>Steps for grievance resolution:</strong>
                  </p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>
                      The client should first contact the RA using the details
                      on its website.
                    </li>
                    <li>
                      If the resolution is unsatisfactory, the client can lodge
                      grievances through SEBI's SCORES platform at
                      www.scores.sebi.gov.in
                    </li>
                    <li>
                      The client may also consider the Online Dispute Resolution
                      (ODR) through the Smart ODR portal at https://smartodr.in
                    </li>
                  </ol>
                </div>
              </section>

              {/* Important Terms Section */}
              <section className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                <h2 className="text-xl font-bold text-orange-800 mb-2">
                  Most Important Terms and Conditions (MITC)
                </h2>
                <div className="space-y-1 text-orange-700">
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>
                      These terms and conditions, and consent thereon are for
                      the research services provided by the Research Analyst
                      (RA) and RA cannot execute/carry out any trade
                      (purchase/sell transaction) on behalf of, the client.
                      Thus, the clients are advised not to permit RA to execute
                      any trade on their behalf.
                    </li>
                    <li>
                      The fee charged by RA to the client will be subject to the
                      maximum of amount prescribed by SEBI/ Research Analyst
                      Administration and Supervisory Body (RAASB) from time to
                      time (applicable only for Individual and HUF Clients).
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          The current fee limit is Rs 1,51,000/- per annum per
                          family of client for all research services of the RA.
                        </li>
                        <li>
                          The fee limit does not include statutory charges.
                        </li>
                        <li>
                          The fee limits do not apply to a non-individual
                          client/accredited investor.
                        </li>
                      </ul>
                    </li>
                    <li>
                      RA may charge fees in advance if agreed by the client.
                      Such advance shall not exceed the period stipulated by
                      SEBI; presently it is one quarter. In case of pre-mature
                      termination of the RA services by either the client or the
                      RA, the client shall be entitled to seek refund of
                      proportionate fees only for unexpired period.
                    </li>
                    <li>
                      Fees to RA may be paid by the client through any of the
                      specified modes like cheque, online bank transfer, UPI,
                      etc. Cash payment is not allowed. Optionally the client
                      can make payments through Centralized Fee Collection
                      Mechanism (CeFCoM) managed by BSE Limited (i.e. currently
                      recognized RAASB).
                    </li>
                  </ol>
                </div>
              </section>

              {/* AI Usage Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Use of Artificial Intelligence
                </h2>
                <div className="space-y-1 text-gray-700">
                  <p>
                    Abishek Kondagunta Venkatesh may infrequently use Artificial
                    Intelligence (AI) tools in its research services to enhance
                    the quality and efficiency of the recommendations provided
                    to clients. In accordance with Regulation 24(7) of the SEBI
                    (Research Analyst) Regulations, 2014:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>
                      We take full responsibility for the security,
                      confidentiality, and integrity of client data used in
                      conjunction with AI tools.
                    </li>
                    <li>
                      We ensure compliance with applicable laws regarding the
                      use of AI tools.
                    </li>
                  </ol>
                </div>
              </section>

              {/* Final Note Section */}
              <section className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg border border-blue-200">
                <h2 className="text-xl font-bold text-blue-800 mb-2">
                  Important Note
                </h2>
                <div className="space-y-1 text-blue-700">
                  <p>
                    Neither any research service will be rendered nor any fee
                    will be charged until consent is received from client on
                    these terms and conditions.
                  </p>
                  <p>
                    For further details or updates, visit our website:{" "}
                    <a
                      href="https://www.akvequityresearch.com"
                      className="text-blue-600 underline"
                    >
                      www.akvequityresearch.com
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>SEBI Registered Research Analyst - INH000022066</p>
            <p className="mt-1">
              © {new Date().getFullYear()} AKV Equity Research. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
