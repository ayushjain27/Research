import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./image/AKVLogo.png";

const HeaderTab = ({
  onHomeClick,
  onServicesClick,
  onTeamClick,
  onContactClick,
  onInvestorCharterClick,
  onInternalPoliciesClick,
  onStandardDisclosuresClick,
  onCodeOfConductClick,
  onGrievanceRedressalClick,
  onRefundPolicyClick,
  onPrivacyPolicyClick,
  onTermsAndConditionsClick,
  onComplaintDataClick,
}) => {
  const [complianceOpen, setComplianceOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setComplianceOpen(false);
      }
    };

    if (complianceOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [complianceOpen]);

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setComplianceOpen(false);
  };

  const AnimatedLogo = () => (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => {
        if (onHomeClick) onHomeClick();
        closeMobileMenu();
      }}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (onHomeClick) onHomeClick();
          closeMobileMenu();
        }
      }}
      aria-label="Go to Home"
    >
      <div className="flex items-flex-start space-x-3">
        <div className="relative w-100 md:w-150 h-8 md:h-100">
          <img
            src={Logo}
            alt="AKV Equity Research - Home"
            className="h-11 w-auto"
          />
        </div>
      </div>
      <span className="text-xs sm:text-sm text-gray-600 mt-0.5 ml-3">
        by Abishek Kondagunta Venkatesh
      </span>
    </div>
  );

  const complianceItems = [
    {
      name: "Standard Disclosures",
      onClick: onStandardDisclosuresClick,
      id: "standard-disclosures",
    },
    {
      name: "Code of Conduct",
      onClick: onCodeOfConductClick,
      id: "code-of-conduct",
    },
    {
      name: "Internal Policies",
      onClick: onInternalPoliciesClick,
      id: "internal-policies",
    },
    {
      name: "Grievance Redressal",
      onClick: onGrievanceRedressalClick,
      id: "grievance-redressal",
    },
    {
      name: "Investor Charter",
      onClick: onInvestorCharterClick,
      id: "investor-charter",
    },
    {
      name: "Complaint Data",
      onClick: onComplaintDataClick,
      id: "complaint-data",
    },
    {
      name: "Refund Policy",
      onClick: onRefundPolicyClick,
      id: "refund-policy",
    },
    {
      name: "Privacy Policy",
      onClick: onPrivacyPolicyClick,
      id: "privacy-policy",
    },
    {
      name: "Terms & Conditions",
      onClick: onTermsAndConditionsClick,
      id: "terms-conditions",
    },
  ];

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full z-50 transition-all duration-300
        bg-white/95 backdrop-blur-md shadow-lg"
    >
      <nav
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex justify-between items-center h-14 md:h-16">
          <AnimatedLogo />

          {/* Desktop Navigation - optimized for iPad */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 items-center">
            <button
              onClick={() => {
                if (onHomeClick) onHomeClick();
              }}
              className="text-gray-700 hover:text-[#222222] transition-colors duration-200 font-medium text-sm lg:text-base"
              aria-label="Home"
            >
              Home
            </button>

            {/* FIXED: Research Services as Button */}
            <button
              onClick={() => {
                window.open(
                  "https://akvequityresearch.revlu.in/tg/f34d50f5d117aec7",
                  "_blank"
                );
                if (onServicesClick) onServicesClick();
              }}
              className="text-gray-700 hover:text-[#222222] transition-colors duration-200 font-medium text-sm lg:text-base"
              aria-label="Research Services (opens in new tab)"
            >
              Research Services
            </button>

            {/* FIXED: RA Compliance with keyboard support */}
            <div className="relative">
              <button
                onClick={() => setComplianceOpen(!complianceOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setComplianceOpen(!complianceOpen);
                  }
                  if (e.key === "Escape") {
                    setComplianceOpen(false);
                  }
                }}
                aria-haspopup="true"
                aria-expanded={complianceOpen}
                className="flex items-center text-gray-700 hover:text-[#222222] transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                RA Compliance
                <ChevronDown
                  className={`w-3 h-3 lg:w-4 lg:h-4 ml-1 transition-transform duration-200 ${
                    complianceOpen ? "transform rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {complianceOpen && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100 max-h-96 overflow-y-auto"
                  role="menu"
                  aria-label="Compliance submenu"
                >
                  {complianceItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        if (item.onClick) item.onClick();
                        setComplianceOpen(false);
                      }}
                      className="block w-full text-left px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-teal-50 hover:text-[#222222] transition-colors duration-200"
                      role="menuitem"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                if (onContactClick) onContactClick();
              }}
              className="text-gray-700 hover:text-[#222222] transition-colors duration-200 font-medium text-sm lg:text-base"
              aria-label="Contact Us"
            >
              Contact Us
            </button>
          </div>

          {/* FIXED: Mobile menu button with focus ring */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-[#222222] focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-md p-1"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-white shadow-lg max-h-[calc(100vh-56px)] overflow-y-auto"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => {
                if (onHomeClick) onHomeClick();
                closeMobileMenu();
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#222222] hover:bg-gray-50 rounded-md"
            >
              Home
            </button>

            {/* FIXED: Research Services in mobile */}
            <button
              onClick={() => {
                window.open(
                  "https://akvequityresearch.revlu.in/tg/f34d50f5d117aec7",
                  "_blank"
                );
                if (onServicesClick) onServicesClick();
                closeMobileMenu();
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#222222] hover:bg-gray-50 rounded-md"
              aria-label="Research Services (opens in new tab)"
            >
              Research Services
            </button>

            {/* FIXED: RA Compliance in mobile with keyboard support */}
            <div className="px-3 py-2">
              <button
                onClick={() => setComplianceOpen(!complianceOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setComplianceOpen(!complianceOpen);
                  }
                  if (e.key === "Escape") {
                    setComplianceOpen(false);
                  }
                }}
                aria-haspopup="true"
                aria-expanded={complianceOpen}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-[#222222] w-full"
              >
                RA Compliance
                <ChevronDown
                  className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                    complianceOpen ? "transform rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {complianceOpen && (
                <div className="mt-2 pl-4 space-y-1" role="menu">
                  {complianceItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        if (item.onClick) item.onClick();
                        closeMobileMenu();
                      }}
                      className="block w-full text-left px-3 py-2 text-xs text-gray-700 hover:text-[#222222] hover:bg-gray-50 rounded-md"
                      role="menuitem"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                if (onTeamClick) onTeamClick();
                closeMobileMenu();
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#222222] hover:bg-gray-50 rounded-md"
            >
              Team
            </button>

            <button
              onClick={() => {
                if (onContactClick) onContactClick();
                closeMobileMenu();
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#222222] hover:bg-gray-50 rounded-md"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderTab;