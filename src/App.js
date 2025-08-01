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

function App() {
  return (
  <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/privacypolicy" element={<PrivacyPolicy />} />
  <Route path="/refundpolicy" element={<RefundPolicy />} />
  <Route path="/disclosure" element={<StandardDisclosures />} />
  <Route path="/grievance" element={<GrievanceRedressal />} />
  <Route path="/internalPolicies" element={<InternalPolicies />} />
  <Route path="/codeOfConduct" element={<CodeOfConduct />} />
  <Route path="/investorCharter" element={<InvestorCharter />} />
</Routes>
  );
}

export default App;
