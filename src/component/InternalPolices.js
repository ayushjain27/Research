import React, { useRef, useState } from "react";
import {
  ExternalLink,
  CheckCircle,
  X,
  Menu,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const InternalPolicies = () => {
  const [activeTab, setActiveTab] = useState("introduction");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);

  // Refs for each section
  const introductionRef = useRef(null);
  const applicabilityRef = useRef(null);
  const definitionsRef = useRef(null);
  const limitationsRef = useRef(null);
  const publicationRef = useRef(null);
  const disclosuresRef = useRef(null);
  const conditionsRef = useRef(null);

  const tabs = [
    { id: "introduction", title: "Introduction", ref: introductionRef },
    { id: "applicability", title: "Applicability", ref: applicabilityRef },
    { id: "definitions", title: "Definitions", ref: definitionsRef },
    { id: "limitations", title: "Trading Limitations", ref: limitationsRef },
    { id: "publication", title: "Publication", ref: publicationRef },
    { id: "disclosures", title: "Disclosures", ref: disclosuresRef },
    { id: "conditions", title: "Other Conditions", ref: conditionsRef },
  ];

  const scrollToSection = (ref, id) => {
    setActiveTab(id);
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const AnimatedLogo = () => (
    <div className="flex flex-col">
      <div className="flex items-center space-x-3">
        <div className="relative w-12 h-10">
          <div className="absolute inset-0 flex items-end justify-center space-x-1">
            {[15, 8, 20, 25, 18].map((height, i) => (
              <div
                key={i}
                className="w-1.5 bg-gradient-to-t from-teal-400 to-teal-500 rounded-full animate-pulse"
                style={{
                  height: `${height}px`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: "2s",
                }}
              />
            ))}
          </div>
          <ArrowRight className="absolute -right-1 top-2 w-4 h-4 text-orange-500 animate-bounce" />
        </div>
        <span className="text-2xl font-bold text-gray-800">AKV</span>
      </div>
      <span className="text-sm text-gray-600 mt-1">
        by Abishek Kondagunta Venkatesh
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <AnimatedLogo />

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8 items-center">
                <a
                  href="/"
                  className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                >
                  Research Services
                </a>
                <a
                  href="/disclosure"
                  className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                >
                  Disclosures
                </a>
                <div className="relative">
                  <button
                    onClick={() => setComplianceOpen(!complianceOpen)}
                    className="flex items-center text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                  >
                    SEBI Compliance
                    <ChevronDown
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        complianceOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {complianceOpen && (
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                    <a href="/investorCharter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Investor Charter</a>
                    <a href="/internalPolicies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Internal Policy and Procedure</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Privacy Policy</a>
                    <a href="/codeOfConduct" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Code of Conduct</a>
                    <a href="/grievance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Grievance Redressal</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Terms & Conditions</a>
                  </div>
                  )}
                </div>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                >
                  Contact Us
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-700 hover:text-teal-600 focus:outline-none"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#home"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Research Services
                </a>
                <div className="px-3 py-2">
                  <button
                    onClick={() => setComplianceOpen(!complianceOpen)}
                    className="flex items-center text-base font-medium text-gray-700 hover:text-teal-600 w-full"
                  >
                    SEBI Compliance
                    <ChevronDown
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        complianceOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {complianceOpen && (
                    <div className="mt-2 pl-4 space-y-1">
                      <a
                        href="/investorCharter"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                      >
                        Investor Charter
                      </a>
                      <a
                        href="/internalPolicies"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50 bg-blue-50"
                      >
                        Internal Policy and Procedures
                      </a>
                      <a
                        href="#"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                      >
                        Privacy Policy
                      </a>
                      <a
                        href="#"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                      >
                        Code of Conduct
                      </a>
                      <a
                        href="/grievance"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                      >
                        Grievance Redressal
                      </a>
                      <a
                        href="#"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                      >
                        Terms & Conditions
                      </a>
                    </div>
                  )}
                </div>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-0 py-8">
          <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
            {/* Header with title */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-t-lg">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                INTERNAL POLICIES AND PROCEDURES TO EFFECTIVELY ADDRESS CONFLICT
                OF INTEREST
              </h1>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 sticky top-20 bg-white z-10">
              <nav className="flex overflow-x-auto">
                <div className="flex space-x-1 px-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => scrollToSection(tab.ref, tab.id)}
                      className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-200 ${
                        activeTab === tab.id
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent hover:border-gray-300 hover:text-gray-700"
                      }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
              </nav>
            </div>

            {/* Content Area - All sections in one scrollable view */}
            <div className="p-6 md:p-8 space-y-4 max-h-[calc(100vh-315px)] overflow-y-auto">
              {/* Introduction Section */}
              <section ref={introductionRef} className="scroll-mt-2">
                <div className="space-y-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    INTRODUCTION:
                  </h2>
                  <div className="text-gray-700">
                    <p>
                      The Securities & Exchange Board of India (SEBI) has
                      formulated the SEBI Research Analyst regulations, 2014
                      (amended w.e.f. December 16, 2024) under the powers
                      conferred to it according to the SEBI Act, 1992. These
                      regulations became effective starting December 1, 2014. A
                      Research Analyst is required to follow this code both in
                      word and spirit.
                    </p>
                  </div>
                </div>
              </section>

              {/* Applicability Section */}
              <section ref={applicabilityRef} className="scroll-mt-2">
                <div className="space-y-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    APPLICABILITY:
                  </h2>
                  <div className="text-gray-700">
                    <p>
                      This policy shall be applicable to Research Analyst
                      Abishek Kondagunta Venkatesh holding SEBI Registration No
                      INH000022066 and Associates; if any of the Research
                      Analyst.
                    </p>
                  </div>
                </div>
              </section>

              {/* Definitions Section */}
              <section ref={definitionsRef} className="scroll-mt-2">
                <div className="space-y-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    IMPORTANT DEFINITIONS:
                  </h2>
                  <div className="text-gray-700">
                    <p>
                      "Research Analyst" is a person primarily responsible for:
                    </p>
                    <ol className="list-decimal pl-6 mt-2 space-y-1">
                      <li>
                        Preparation or publication of the content of the
                        research report; or
                      </li>
                      <li>
                        Providing a research report or making recommendation or
                        giving price target; or
                      </li>
                      <li>
                        Offering an opinion on any security that is listed or to
                        be listed on a Stock Exchange.
                      </li>
                    </ol>
                    <p className="mt-2">
                      This term includes any associates of research analyst who
                      report directly or indirectly to the research analyst in
                      connection to the activities cited above.
                    </p>
                  </div>
                </div>
              </section>

              {/* Trading Limitations Section */}
              <section ref={limitationsRef} className="scroll-mt-2">
                <div className="space-y-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    1. LIMITATIONS ON TRADING BY RESEARCH ANALYSTS:
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-700 mb-1">
                    POLICIES AND PROCEDURES:
                  </h3>
                  <div className="text-gray-700">
                    <p>Research Analysts shall not:</p>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>
                        deal / trade in securities recommended / followed by the
                        research analyst within 30 days before and five days
                        after the publication of a research report;
                      </li>
                      <li>
                        deal / trade in securities that the research analyst
                        reviews in a manner contrary to his given
                        recommendation;
                      </li>
                      <li>
                        purchase or receive securities of the issuer before the
                        issuer's initial public offering, if the issuer is
                        principally engaged in the same types of business as
                        companies that the research analyst follows or
                        recommends.
                      </li>
                    </ul>
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 mt-2">
                      <p className="text-blue-800 text-sm">
                        <strong>Note:</strong> The above restrictions to
                        trade/deal in securities shall not be applicable in case
                        of significant news or event concerning the subject
                        company or based upon an unanticipated significant
                        change in the personal financial circumstances of the
                        research analyst.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Publication Section */}
              <section ref={publicationRef} className="scroll-mt-2">
                <div className="space-y-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    2. LIMITATION ON PUBLICATION OF RESEARCH REPORT, PUBLIC
                    APPEARANCE, CONDUCT OF BUSINESS ETC.
                  </h2>
                  <div className="text-gray-700 space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>
                        The Research Report issued by Research Analyst shall be
                        based on adequate documentary research evidence.
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Research Analyst shall not provide any promise or
                        assurance of favourable review in research report to the
                        Company or Industry as a consideration to commence or
                        influence a business relationship or for the receipt of
                        compensation or other benefits.
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Disclosures Section */}
              <section ref={disclosuresRef} className="scroll-mt-2">
                <div className="space-y-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    3. DISCLOSURES IN RESEARCH REPORT
                  </h2>
                  <div className="text-gray-700">
                    <p>
                      Research Analyst shall disclose all material information
                      about himself including the following in its research
                      reports:
                    </p>
                    <ol className="list-decimal pl-6 mt-2 space-y-2">
                      <li>
                        <strong>Business Activity</strong>
                      </li>
                      <li>
                        <strong>Disciplinary History</strong>
                      </li>
                      <li>
                        <strong>Terms and conditions</strong> on which it offers
                        research report
                      </li>
                      <li>
                        <strong>
                          Details with respect to Ownership and Material
                          Conflict of Interest
                        </strong>{" "}
                        such as:
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                          <li>
                            Whether Research Analyst or its/his associate or
                            relatives have any financial interest in the subject
                            company, if yes, together with nature of such
                            financial interest.
                          </li>
                          <li>
                            Whether Research Analyst or its/his associate or
                            relatives have actual / beneficial ownership of 1%
                            or more securities of subject company at the end of
                            the month immediately preceding the date of
                            publication of research report or date of public
                            appearance, as the case may be.
                          </li>
                          <li>
                            Details of actual / beneficial ownership of one
                            percent or more securities of the subject company,
                            at the end of month immediately preceding the date
                            of publication the research report or date of public
                            appearance.
                          </li>
                          <li>
                            Details of any material conflict of interest at the
                            time of publication of research report or at the
                            time of public appearance.
                          </li>
                          <li>
                            Details of any compensation received by Research
                            Analyst or its/his/her/their associates from the
                            subject company in past 12 months.
                          </li>
                          <li>
                            Details of whether Research Analyst or its
                            associates have managed or co-managed the public
                            offering of subject company in past 12 months.
                          </li>
                          <li>
                            Details of whether Research Analyst or its
                            associates have received any compensation for
                            investment banking or merchant banking or brokerage
                            services from the subject company in past 12 months.
                          </li>
                          <li>
                            Details of whether Research Analyst or its
                            associates have received any compensation for
                            products or services other than above from the
                            subject company in past 12 months.
                          </li>
                          <li>
                            Details of any compensation or other benefits
                            received by Research Analyst or its/his/her/their
                            associates from the subject company or 3rd party in
                            connection with the research report.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Research Analyst shall disclose in public appearance
                        with regard to receipt of compensation:
                        <div className="flex items-start space-x-2 mt-1">
                          <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>
                            Whether Research Analyst or its/his/her/their
                            associates have received any compensation from the
                            subject company in past 12 months
                          </span>
                        </div>
                        <div className="flex items-start space-x-2 mt-1">
                          <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>
                            Whether the subject company is/was client of
                            Research Analyst during 12 months preceding the date
                            of distribution of research report and the types of
                            such services provided by Research Analyst
                          </span>
                        </div>
                      </li>
                      <li>
                        Whether the Research Analyst has served as an officer,
                        director or employee of the subject company.
                      </li>
                      <li>
                        Whether Research Analyst has been engaged in market
                        making activity of the subject company
                      </li>
                      <li>
                        Such other disclosures in research reports / public
                        appearance as specified by SEBI under any other
                        regulations.
                      </li>
                      <li>
                        Such Research Reports reflects the factual information
                        about the subject company and are based on reliable
                        information. Such reports also contain the definition of
                        terms which are used in making recommendations and such
                        terms have been used consistently.
                      </li>
                      <li>
                        If such Research Reports contain either a rating or
                        price target for at least 1 year, the same shall also
                        provide for the graph of daily closing price of such
                        securities for the period assigned or for a 3-year
                        period, whichever is shorter.
                      </li>
                      <li>
                        Such Research Report Shall not be issued selectively to
                        internal trading personnel or to a particular client or
                        group of other clients in advance of other clients who
                        are entitled to receive the research report.
                      </li>
                      <li>
                        In case, Research Analyst appears in public media and
                        make any recommendation, the disclosure of his / its
                        name, registration status and details of financial
                        interest shall invariably made at the time of making
                        such recommendation or offering any opinion in his
                        personal capacity, responding to any queries of audience
                        or journalists in personal capacity and communicating
                        the research report or its substance through public
                        media.
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Other Conditions Section */}
              <section ref={conditionsRef} className="scroll-mt-2">
                <div className="space-y-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    4. OTHER CONDITIONS:
                  </h2>
                  <div className="text-gray-700">
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>
                        Research Analyst shall be NISM Certified or such other
                        certification for research analysts as specified by
                        SEBI.
                      </li>
                      <li>
                        Research Analyst shall maintain and preserve following
                        records for a minimum period of 5 years:
                        <div className="flex items-start space-x-2 mt-1">
                          <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Research recommendation provided</span>
                        </div>
                        <div className="flex items-start space-x-2 mt-1">
                          <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>
                            Rationale for arriving at research recommendation
                          </span>
                        </div>
                        <div className="flex items-start space-x-2 mt-1">
                          <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Record of public appearance</span>
                        </div>
                      </li>
                      <li>
                        Research Analysts shall forthwith inform the Board in
                        writing about any information or particulars about
                        him/her/them submitted to SEBI, which are found to be
                        false or misleading in any material particular or are
                        there is any change in information already submitted.
                      </li>
                      <li>
                        Research Analyst shall conduct annual audit in respect
                        of compliance with the captioned SEBI Regulations from
                        member of ICAI or ICSI.
                      </li>
                    </ol>
                    <div className="mt-4 text-right">
                      <p className="font-medium">
                        Mr. Abishek Kondagunta Venkatesh
                      </p>
                      <p>Place: Hyderabad</p>
                      <p>Date: June 28, 2025</p>
                    </div>
                  </div>
                </div>
              </section>
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
        </main>
      </div>
    </div>
  );
};

export default InternalPolicies;
