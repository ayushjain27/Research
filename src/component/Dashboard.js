import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  BarChart3,
  Target,
  Shield,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  DollarSign,
  PieChart,
  LineChart,
  Activity,
  Briefcase,
  Clock,
  Globe,
  Zap,
  BookOpen,
  TrendingDown,
  Eye,
  Calendar,
  Download,
  ChevronUp,
  ExternalLink,
  FileText,
  Lock,
  AlertCircle,
  HelpCircle,
  Clipboard,
  User,
  ChevronDown,
  Menu,
  X,
  Link,
} from "lucide-react";
import HeaderTab from "./HeaderTab";

const AKVHomepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stats rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.experience)
      errors.experience = "Please select your experience level";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        alert("Thank you for your message! We will contact you shortly.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          experience: "",
          message: "",
        });
        setIsSubmitting(false);
      }, 1500);
    }
  };

  const stats = [
    { value: "1000+", label: "Happy Clients", icon: Users },
    { value: "₹500Cr+", label: "Assets Analyzed", icon: DollarSign },
    { value: "98%", label: "Success Rate", icon: TrendingUp },
    { value: "15+", label: "Years Experience", icon: Award },
  ];

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
    // {
    //   icon: Target,
    //   title: 'Market Connect',
    //   description: 'Direct access to market insights and networking opportunities with industry experts.',
    //   features: [
    //     'Exclusive Webinars',
    //     'Analyst Meetups',
    //     'Corporate Access Events',
    //     'Earnings Call Highlights',
    //     'Management Interviews'
    //   ]
    // }
  ];

  const researchReports = [
    {
      title: "IT Sector Outlook 2024",
      subtitle: "Digital Transformation Driving Growth",
      date: "July 25, 2024",
      type: "Sector Report",
      rating: "BUY",
      target: "15-20% upside potential",
      companies: [
        { name: "TCS", current: "₹3,850", target: "₹4,500", upside: "+16.8%" },
        {
          name: "Infosys",
          current: "₹1,650",
          target: "₹1,950",
          upside: "+18.2%",
        },
        { name: "Wipro", current: "₹480", target: "₹550", upside: "+14.6%" },
        {
          name: "HCL Tech",
          current: "₹1,320",
          target: "₹1,550",
          upside: "+17.4%",
        },
      ],
      performance: {
        oneYear: "+24.5%",
        threeYear: "+58.3%",
        fiveYear: "+142.7%",
        benchmark: "NIFTY IT +19.2%",
      },
      keyMetrics: [
        "Revenue Growth",
        "EBITDA Margin",
        "FCF Yield",
        "PAT Growth",
      ],
    },
    {
      title: "Banking Sector Deep Dive",
      subtitle: "Credit Growth & NPA Recovery",
      date: "July 22, 2024",
      type: "Sector Analysis",
      rating: "HOLD",
      target: "10-12% upside potential",
      companies: [
        {
          name: "HDFC Bank",
          current: "₹1,725",
          target: "₹1,900",
          upside: "+10.1%",
        },
        {
          name: "ICICI Bank",
          current: "₹1,050",
          target: "₹1,150",
          upside: "+9.5%",
        },
        { name: "SBI", current: "₹680", target: "₹750", upside: "+10.3%" },
        {
          name: "Kotak Bank",
          current: "₹1,950",
          target: "₹2,100",
          upside: "+7.7%",
        },
      ],
      performance: {
        oneYear: "+18.2%",
        threeYear: "+42.8%",
        fiveYear: "+98.5%",
        benchmark: "NIFTY Bank +15.7%",
      },
      keyMetrics: ["NIM", "GNPA", "CAR", "Deposit Growth"],
    },
    {
      title: "Pharma Stock Picks",
      subtitle: "Export Recovery & Domestic Growth",
      date: "July 20, 2024",
      type: "Stock Recommendations",
      rating: "BUY",
      target: "20-25% upside potential",
      companies: [
        {
          name: "Sun Pharma",
          current: "₹1,250",
          target: "₹1,500",
          upside: "+20.0%",
        },
        {
          name: "Dr. Reddy's",
          current: "₹5,800",
          target: "₹7,000",
          upside: "+20.7%",
        },
        {
          name: "Cipla",
          current: "₹1,380",
          target: "₹1,650",
          upside: "+19.6%",
        },
        {
          name: "Lupin",
          current: "₹1,050",
          target: "₹1,300",
          upside: "+23.8%",
        },
      ],
      performance: {
        oneYear: "+15.8%",
        threeYear: "+38.2%",
        fiveYear: "+85.4%",
        benchmark: "NIFTY Pharma +12.3%",
      },
      keyMetrics: ["US Sales", "R&D Spend", "ANDAs Filed", "Domestic Growth"],
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content:
        "AKV Equity Research transformed my investment approach. Their detailed analysis helped me achieve 35% returns last year.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Priya Sharma",
      role: "Investment Manager",
      content:
        "Professional, accurate, and timely research reports. Their fundamental analysis is exceptionally thorough.",
      rating: 5,
      image: "👩‍💼",
    },
    {
      name: "Amit Patel",
      role: "Retail Investor",
      content:
        "Been following their recommendations for 3 years. Consistent performance and excellent risk management.",
      rating: 5,
      image: "👨‍💻",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "₹2,999",
      period: "/month",
      description: "Perfect for individual investors starting their journey",
      features: [
        "Weekly Market Reports (PDF)",
        "5 Stock Recommendations per month",
        "Email Support (48hr response)",
        "Basic Portfolio Health Check",
        "Market News Digest",
        "Access to Research Archive",
      ],
      popular: false,
      bestFor: "Beginners with < ₹5L portfolio",
    },
    {
      name: "Professional",
      price: "₹5,999",
      period: "/month",
      description: "Ideal for serious investors building wealth",
      features: [
        "Daily Market Analysis",
        "15 Stock Recommendations per month",
        "Priority Phone Support",
        "Detailed Portfolio Analysis",
        "Sector Deep Dive Reports",
        "Technical Analysis Tools",
        "Risk Assessment Dashboard",
        "Quarterly 1-on-1 Consultation",
      ],
      popular: true,
      bestFor: "Investors with ₹5L-₹50L portfolio",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For institutions and high net-worth individuals",
      features: [
        "Real-time Research Alerts",
        "Unlimited Recommendations",
        "Dedicated Relationship Manager",
        "Custom Research Requests",
        "Portfolio Management Services",
        "Direct Analyst Access",
        "Institutional Grade Tools",
        "Exclusive Market Events",
      ],
      popular: false,
      bestFor: "HNIs & Institutions with ₹50L+ portfolio",
    },
  ];

  const teamMembers = [
    {
      name: "Abishek Kondagunta Venkatesh",
      role: "Chief Research Analyst",
      experience: "18 years",
      specialization: "Technical & Fundamental Analysis",
      bio: "SEBI Registered Research Analyst (INH000022066) with track record of identifying multi-baggers through data-driven methods",
      education: "MBA (Finance), CMT Level 3",
    },
    {
      name: "Priya Sharma",
      role: "Technical Analyst",
      experience: "12 years",
      specialization: "Chart Patterns & Derivatives",
      bio: 'Recognized technical analysis expert with appearances on CNBC, author of "Mastering Indian Market Technicals"',
      education: "MTech, CMT Level 3",
    },
    {
      name: "Rahul Verma",
      role: "Fundamental Analyst",
      experience: "15 years",
      specialization: "Financial Modeling",
      bio: "Specializes in deep value investing and forensic accounting to identify mispriced securities",
      education: "CA, CFA",
    },
  ];

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
        <span className="text-2xl font-bold text-gray-800">
          AKV Equity Research
        </span>
      </div>
      <span className="text-sm text-gray-600 mt-1">
        by Abishek Kondagunta Venkatesh
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderTab />

      {/* Hero Section */}
      <section
        id="home"
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
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Trade. Invest. Learn.
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                    {" "}
                    All guided by data driven methods
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional-grade equity research for both traders and
                  investors, grounded in robust data analysis and methodologies.
                  Join our community to get actionable insights created by
                  leveraging advanced analytics and systematic approaches.
                </p>
              </div>

              {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                  <span>Explore Research</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div> */}
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Data-driven research"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              {/* <div className="mt-6 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <AlertCircle className="w-4 h-4" />
                  <span>Past performance is not indicative of future results. Investments are subject to market risk.</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-1 mb-4">
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
                      <Icon className="w-8 h-8 text-teal-600" />
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
                            <CheckCircle className="w-4 h-4 text-teal-600" />
                            <span className="text-gray-700">{feature}</span>
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

      {/* Research Reports Section */}
      {/* <section id="research" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Latest Research Reports</h2>
            <p className="text-xl text-gray-600">
              Evidence-based investment theses with complete transparency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchReports.map((report, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {report.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      report.rating === 'BUY' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {report.rating}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                      {report.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{report.subtitle}</p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{report.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="w-4 h-4" />
                      <span>{report.target}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-700">Covered Companies:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {report.companies.map((company, i) => (
                        <div key={i} className="bg-gray-50 p-2 rounded">
                          <div className="font-medium text-sm">{company.name}</div>
                          <div className="flex justify-between text-xs">
                            <span>₹{company.current}</span>
                            <span className={`font-medium ${
                              company.upside.startsWith('+') ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {company.upside}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm font-medium text-gray-700">Performance vs Benchmark:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs mt-1">
                      <div className="bg-gray-50 p-2 rounded">
                        <div>1 Year</div>
                        <div className="font-medium">{report.performance.oneYear}</div>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <div>3 Year</div>
                        <div className="font-medium">{report.performance.threeYear}</div>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <div>5 Year</div>
                        <div className="font-medium">{report.performance.fiveYear}</div>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <div>Benchmark</div>
                        <div className="font-medium">{report.performance.benchmark}</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download Sample</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-50 transition-all duration-200 flex items-center justify-center space-x-2 mx-auto">
              <span>View All Research</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section id="team" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-1 mb-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Meet Our Research Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              45+ years of combined market experience across bull and bear
              cycles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mb-4 text-3xl">
                    <User className="w-10 h-10 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <div className="text-teal-600 font-medium">{member.role}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {member.experience} experience
                  </div>

                  <div className="mt-4 text-sm text-gray-700">
                    <div className="font-medium">Specialization:</div>
                    <div>{member.specialization}</div>
                  </div>

                  <div className="mt-3 text-xs text-gray-500">
                    <div className="font-medium">Education:</div>
                    <div>{member.education}</div>
                  </div>

                  <div className="mt-4 text-sm text-gray-600">
                    "{member.bio}"
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Our Research Methodology
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-4">
              We use technical indicators, fundamental analysis and quantitative
              data analysis to identify potential opportunities on a short term
              and long term basis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl">
                <div className="text-teal-600 font-bold text-lg mb-2">
                  1. Technical Screening
                </div>
                <p className="text-sm text-gray-600">
                  Quantitative filters for momentum, volume, and statistical
                  patterns
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="text-teal-600 font-bold text-lg mb-2">
                  2. Fundamental Analysis
                </div>
                <p className="text-sm text-gray-600">
                  Deep dive into financials, management, industry trends, and
                  valuations
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="text-teal-600 font-bold text-lg mb-2">
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

      {/* About Section */}
      {/* <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  icon: Eye,
                  title: "Deep Market Insights",
                  description:
                    "Our research goes beyond surface-level analysis to uncover hidden opportunities and risks in the market.",
                },
                {
                  icon: Shield,
                  title: "Risk Management Focus",
                  description:
                    "Every recommendation comes with detailed risk assessment and capital protection strategies.",
                },
                {
                  icon: Zap,
                  title: "Real-time Updates",
                  description:
                    "Stay informed with instant alerts on your investments and market-moving events.",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description:
                    "Led by SEBI Registered Research Analyst with decades of experience in Indian equity markets.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6">Get Started Today</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Ready to transform your stock market journey? Contact us for
                  subscribing to our services
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-gray-300">+91 7416931626</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-teal-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-gray-300">
                      abishekkvenkatesh@outlook.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-teal-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Visit Us</div>
                    <div className="text-gray-300">
                      H.No 11-9-173, Ground Floor, LaxmiNagar, Kothapet,
                      Saroornagar Mandal, Ranga Reddy, Telangana-500035
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Market Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Research Support</span>
                    <span>24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Left Column - Logo and Social */}
            <div className="space-y-4">
              <AnimatedLogo />
              <p className="text-gray-400 leading-relaxed">
                Empowering investors with data-driven research and strategic
                insights for sustainable wealth creation in the Indian equity
                markets.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors duration-200 cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors duration-200 cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors duration-200 cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Technical Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Fundamental Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Market Trends
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Market Connect
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Risk Assessment
                  </a>
                </li>
              </ul>
            </div>

            {/* Research Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Research</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Sector Reports
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Stock Recommendations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Market Outlook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    IPO Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Earnings Preview
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Information</h4>
              <div className="text-gray-400 space-y-2">
                <div>
                  <div className="font-medium">Registered Office:</div>
                  <p>
                    H.No 11-9-173, Ground Floor, LaxmiNagar,
                    <br />
                    Kothapet, Saroornagar Mandal,
                    <br />
                    Ranga Reddy, Telangana-500035
                  </p>
                </div>
                <div>
                  <div className="font-medium">Telephone:</div>
                  <p>+91 7416931626</p>
                </div>
                <div>
                  <div className="font-medium">Email:</div>
                  <p>abishekkvenkatesh@outlook.com</p>
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
                    provide any assurance of returns to investors.
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

          {/* Copyright Section */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400">
                © 2024 AKV Equity Research. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>SEBI Registered Research Analyst - INH000022066</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
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
