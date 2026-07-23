/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  BarChart3,
  CheckCircle,
  PieChart,
  LineChart,
  FileText,
} from "lucide-react";
import HeaderTab from "./HeaderTab";
import Logo from "./image/AKVLogo.png";
import InvestorCharterContent from "./InvestorCharter";
import InternalPoliciesContent from "./InternalPolices";
import StandardDisclosuresContent from "./Disclosure";
import CodeOfConductContent from "./CodeOfConduct";
import GrievanceRedressalContent from "./Grievance";
import RefundPolicyContent from "./RefundPolicy";
import PrivacyPolicyContent from "./PrivacyPolicy";
import TermsAndConditionsContent from "./TermsAndCondition";
import ComplaintDataContent from "./ComplaintData";
import ContactUsContent from "./ContactUs";

const AKVHomepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs for navigation
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const investorCharterRef = useRef(null);
  const internalPoliciesRef = useRef(null);
  const standardDisclosuresRef = useRef(null);
  const codeOfConductRef = useRef(null);
  const grievanceRedressalRef = useRef(null);
  const refundPolicyRef = useRef(null);
  const privacyPolicyRef = useRef(null);
  const termsAndConditionsRef = useRef(null);
  const complaintDataRef = useRef(null);
  const contactUsRef = useRef(null);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const offset = 80; // Height of fixed header
      const elementPosition = ref.current.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const services = [
    {
      icon: LineChart,
      title: "Technical Analysis",
      description:
        "Advanced volume analytics indicators and orderflow based strategies for optimal entries and exits",
      features: [
        "Volume Profile framework",
        "Orderflow analysis and metrics",
        "Relative Strength profiling",
        "Statistical methods using average true range techniques",
        "Avwap based strategies",
      ],
    },
    {
      icon: BarChart3,
      title: "Fundamental Analysis",
      description:
        "Deep dive into company financials, business models, and competitive positioning to identify undervalued opportunities.",
      features: [
        "Financial Statement Analysis",
        "Ratio Analysis (P/E, P/B, ROE, etc.)",
        "Industry Comparison",
        "Management Quality Assessment",
        "DCF Valuation Models",
      ],
    },
    {
      icon: PieChart,
      title: "Decode market trends",
      description:
        "Identify emerging market trends and sector rotations to stay ahead of the curve.",
      features: [
        "Sector Rotation Analysis",
        "Market Breadth Indicators",
        "Institutional Flow Tracking",
        "Sentiment Analysis",
        "Seasonal Trends",
      ],
    },
  ];

  const AnimatedLogo = () => (
    <div className="flex flex-col">
      <div className="flex items-flex-start space-x-3">
        <div className="relative w-150 h-100">
          <img
            src={Logo}
            alt="AKV Equity Research Logo"
            className="h-13 w-auto"
          />
        </div>
      </div>
      <span className=" text-center text-xs sm:text-sm text-white md:mt-0.5">
        by Abishek Kondagunta Venkatesh
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Pass navigation props */}
      <HeaderTab
        onHomeClick={() => scrollToSection(homeRef)}
        onServicesClick={() => scrollToSection(servicesRef)}
        onTeamClick={() => scrollToSection(teamRef)}
        onContactClick={() => scrollToSection(contactUsRef)}
        onInvestorCharterClick={() => scrollToSection(investorCharterRef)}
        onInternalPoliciesClick={() => scrollToSection(internalPoliciesRef)}
        onStandardDisclosuresClick={() =>
          scrollToSection(standardDisclosuresRef)
        }
        onCodeOfConductClick={() => scrollToSection(codeOfConductRef)}
        onGrievanceRedressalClick={() => scrollToSection(grievanceRedressalRef)}
        onRefundPolicyClick={() => scrollToSection(refundPolicyRef)}
        onPrivacyPolicyClick={() => scrollToSection(privacyPolicyRef)}
        onTermsAndConditionsClick={() => scrollToSection(termsAndConditionsRef)}
        onComplaintDataClick={() => scrollToSection(complaintDataRef)}
      />

      {/* Hero Section */}
      <main role="main">
        <section
          id="home"
          ref={homeRef}
          className="pt-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <FileText className="w-4 h-4 mr-1" />
                      SEBI Registered Research Analyst - INH000022066
                    </div>
                  </div>
                  <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Access research, analysis and unlock knowledge.
                  </h1>
                  <h1 className="text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                    All guided by advanced data driven methods
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Professional-grade equity research for both traders and
                    investors, grounded in robust data analysis and
                    methodologies. Join our community to get actionable insights
                    created by leveraging advanced analytics and systematic
                    approaches.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                  <img
                    src={Logo}
                    alt="Data-driven research"
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" ref={servicesRef} className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold text-gray-900">
                Our Research Framework
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive equity research services designed using robust
                framework backed by strong data insights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-teal-100 p-3 rounded-xl group-hover:bg-teal-200 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-[#222222]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-[#222222] flex-shrink-0" />
                              <span className="text-gray-700 text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team / Research Methodology Section */}
        <section id="team" ref={teamRef} className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Research Methodology
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto mb-6">
                We use technical indicators, fundamental analysis and
                quantitative data analysis to identify potential opportunities
                on a short term and long term basis.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-bold text-lg mb-2 text-[#222222] bg-white">
                    1. Technical Screening
                  </div>
                  <p className="text-sm text-gray-600">
                    Quantitative filters for momentum, volume, and statistical
                    patterns
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-bold text-lg mb-2 text-[#222222] bg-white">
                    2. Fundamental Analysis
                  </div>
                  <p className="text-sm text-gray-600">
                    Deep dive into financials, management, industry trends, and
                    valuations
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="font-bold text-lg mb-2 text-[#222222] bg-white">
                    3. Data Validation
                  </div>
                  <p className="text-sm text-gray-600">
                    Insights backed by real time data analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Standard Disclosures Section */}
        <section
          id="standard-disclosures"
          ref={standardDisclosuresRef}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StandardDisclosuresContent />
          </div>
        </section>

        {/* Code of Conduct Section */}
        <section
          id="code-of-conduct"
          ref={codeOfConductRef}
          className="py-16 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CodeOfConductContent />
          </div>
        </section>

        {/* Internal Policies Section */}
        <section
          id="internal-policies"
          ref={internalPoliciesRef}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InternalPoliciesContent />
          </div>
        </section>

        {/* Grievance Redressal Section */}
        <section
          id="grievance-redressal"
          ref={grievanceRedressalRef}
          className="py-16 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GrievanceRedressalContent />
          </div>
        </section>

        {/* Investor Charter Section */}
        <section
          id="investor-charter"
          ref={investorCharterRef}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InvestorCharterContent />
          </div>
        </section>

        {/* Complaint Data Section */}
        <section
          id="complaint-data"
          ref={complaintDataRef}
          className="py-16 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ComplaintDataContent />
          </div>
        </section>

        {/* Refund Policy Section */}
        <section
          id="refund-policy"
          ref={refundPolicyRef}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RefundPolicyContent />
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section
          id="privacy-policy"
          ref={privacyPolicyRef}
          className="py-16 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PrivacyPolicyContent />
          </div>
        </section>

        {/* Terms & Conditions Section */}
        <section
          id="terms-conditions"
          ref={termsAndConditionsRef}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TermsAndConditionsContent />
          </div>
        </section>

        {/* Contact Us Section */}
        <section
          id="contact-us"
          ref={contactUsRef}
          className="py-16 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactUsContent />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <AnimatedLogo />
              <p className="text-gray-400 leading-relaxed text-sm">
                Empowering investors with data-driven research and strategic
                insights for sustainable wealth creation in the Indian equity
                markets.
              </p>
              <div className="flex space-x-4">
                {/* Telegram Link */}
                <a
                  href="https://t.me/akvequityresearch"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Telegram"
                  className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                  </svg>
                </a>

                {/* X (Twitter) Link */}
                <a
                  href="https://x.com/akveq_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on X"
                  className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(servicesRef);
                    }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Technical Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(servicesRef);
                    }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Fundamental Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(servicesRef);
                    }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Market Trends
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(standardDisclosuresRef);
                    }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Standard Disclosures
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(codeOfConductRef);
                    }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Code of Conduct
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(internalPoliciesRef);
                    }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Internal Policies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(grievanceRedressalRef);
                    }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Grievance Redressal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(investorCharterRef);
                    }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Investor Charter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(complaintDataRef);
                    }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Complaint Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(refundPolicyRef);
                    }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(privacyPolicyRef);
                    }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(termsAndConditionsRef);
                    }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Information</h4>
              <div className="text-gray-400 space-y-2 text-sm">
                <div>
                  <div className="font-medium">Registered Office:</div>
                  <p className="text-sm">
                    H.No 11-9-173, Ground Floor, LaxmiNagar, Kothapet,
                    <br />
                    Saroornagar Mandal,
                    <br />
                    Hyderabad, Telangana-500035
                  </p>
                </div>
                <div>
                  <div className="font-medium">Telephone:</div>
                  <p>+91 7416931626</p>
                </div>
                <div>
                  <div className="font-medium">Email:</div>
                  <p className="break-all">abishekkvenkatesh@outlook.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Section */}
          <div className="mt-12 border-t border-gray-700 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="text-gray-400 text-sm space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2">Disclaimer:</h5>
                  <p>
                    Registration granted by SEBI and certification from NISM in
                    no way guarantee performance of the research analyst or
                    provides any assurance of returns to investors.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">
                    Standard Disclaimer:
                  </h5>
                  <p>
                    Investments in securities market are subject to market
                    risks. Read all the related documents carefully before
                    investing.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">
                    SEBI Office Address:
                  </h5>
                  <p>
                    SEBI Bhavan, Plot No. C4-A, 'G' Block,
                    <br />
                    Bandra-Kurla Complex, Bandra (E),
                    <br />
                    Mumbai - 400 051
                  </p>
                </div>
              </div>

              <div className="text-gray-400 text-sm space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2">
                    Registration Details:
                  </h5>
                  <p>
                    <span className="font-medium">Registered name:</span>{" "}
                    Abishek Kondagunta Venkatesh
                    <br />
                    <span className="font-medium">
                      Type of registration:
                    </span>{" "}
                    Individual
                    <br />
                    <span className="font-medium">Registration No:</span>{" "}
                    INH000022066
                    <br />
                    <span className="font-medium">Validity:</span> July 28, 2025
                    – July 27, 2030
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 AKV Equity Research. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-xs md:text-sm text-gray-400">
                <span>SEBI Registered Research Analyst - INH000022066</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <TrendingUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default AKVHomepage;
