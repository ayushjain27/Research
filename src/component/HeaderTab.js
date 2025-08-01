import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, BarChart3, Target, Shield, Users, Award, CheckCircle, 
  ArrowRight, Phone, Mail, MapPin, Star, DollarSign, PieChart, 
  LineChart, Activity, Briefcase, Clock, Globe, Zap, BookOpen, 
  TrendingDown, Eye, Calendar, Download, ChevronUp, ExternalLink,
  FileText, Lock, AlertCircle, HelpCircle, Clipboard, User, ChevronDown,
  Menu,
  X,
  Link
} from 'lucide-react';

const HeaderTab = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
          <ArrowRight className="absolute -right-1 top-2 w-4 h-4 text-orange-500 animate-bounce" />
        </div>
        <span className="text-2xl font-bold text-gray-800">AKV</span>
      </div>
      <span className="text-sm text-gray-600 mt-1">by Abishek Kondagunta Venkatesh</span>
    </div>
  );

  return (
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
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
              <div className="relative">
                <button 
                  onClick={() => setComplianceOpen(!complianceOpen)}
                  className="flex items-center text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                >
                  RA Compliance
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${complianceOpen ? 'transform rotate-180' : ''}`} />
                </button>
                {complianceOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                    <a href="/investorCharter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Investor Charter</a>
                    <a href="/internalPolicies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Internal Policies and Procedure</a>
                    <a href="/disclosure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Disclosures</a>
                    <a href="/codeOfConduct" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Code of Conduct</a>
                    <a href="/grievance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Grievance Redressal</a>
                    <a href="/refundPolicy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Refund Policy</a>
                    <a href="/privacyPolicy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Privacy Policy</a>
                    <a href="/termsAndConditions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Terms & Conditions</a>
                  </div>
                )}
              </div>
              <a
                href="/contact"
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
                 href="/"
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
                  RA Compliance
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${complianceOpen ? 'transform rotate-180' : ''}`} />
                </button>
                {complianceOpen && (
                  <div className="mt-2 pl-4 space-y-1">
                    <a href="/investorCharter" className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50">Investor Charter</a>
                    <a href="/internalPolicies" className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50">Internal Policies and Procedure</a>
                    <a href="/disclosure" className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50">Disclosures</a>
                    <a href="/codeOfConduct" className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50">Code of Conduct</a>
                    <a href="/grievance" className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50">Grievance Redressal</a>
                    <a href="/refundPolicy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Refund Policy</a>
                    <a href="/privacyPolicy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Privacy Policy</a>
                    <a href="/termsAndConditions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Terms & Conditions</a>
                  </div>
                )}
              </div>
              <a
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </header>
  );
};

export default HeaderTab;