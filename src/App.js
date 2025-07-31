import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./component/Dashboard";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./component/PrivacyPolicy";
import RefundPolicy from "./component/RefundPolicy";
import ThankYouPage from "./component/ThankyouPage";
import InvestorCharter from "./component/InvestorCharter";

function App() {
  return (
  <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/privacypolicy" element={<PrivacyPolicy />} />
  <Route path="/refundpolicy" element={<RefundPolicy />} />
  <Route path="/thankyou" element={<ThankYouPage />} />
  <Route path="/investorCharter" element={<InvestorCharter />} />
</Routes>
  );
}

export default App;
