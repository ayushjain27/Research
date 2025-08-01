import "./App.css";
import Dashboard from "./component/Dashboard";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./component/PrivacyPolicy";
import RefundPolicy from "./component/RefundPolicy";
import InvestorCharter from "./component/InvestorCharter";
import StandardDisclosures from "./component/Disclosure";
import GrievanceRedressal from "./component/Grievance";
import InternalPolicies from "./component/InternalPolices";
import CodeOfConduct from "./component/CodeOfConduct";
import TermsAndConditions from "./component/TermsAndCondition";
import ContactUs from "./component/ContactUs";

function App() {
  return (
  <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/disclosure" element={<StandardDisclosures />} />
  <Route path="/grievance" element={<GrievanceRedressal />} />
  <Route path="/internalPolicies" element={<InternalPolicies />} />
  <Route path="/codeOfConduct" element={<CodeOfConduct />} />
  <Route path="/investorCharter" element={<InvestorCharter />} />
  <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
  <Route path="/termsAndConditions" element={<TermsAndConditions />} />
  <Route path="/refundPolicy" element={<RefundPolicy />} />
  <Route path="/contact" element={<ContactUs />} />
</Routes>
  );
}

export default App;
