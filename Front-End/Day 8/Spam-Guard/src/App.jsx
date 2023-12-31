import './App.css';
import AdminDash from './Admin Dashboard/AdminDash';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/Sign-up';
import DashBoard from './DashBoard/Dashboard';
import HomePage from './HomePage';
import Hero from './Components/Hero';
import Stats from './Components/Stats';
import Header from './Components/Header';
import CTA from './Components/CTA';
import AdminLogin from './Pages/Admin Dashboard/AdminLogin';
import Page_404 from './Pages/Page_404';
import Construction from './Pages/Construction'
import 'bootstrap/dist/css/bootstrap.min.css';
import SpamDummy from './DashBoard/SpamDummy';
import ReportDummy from './DashBoard/ReportDummy';
import AdminDummyDashboard from './Pages/Admin Dashboard/AdminDummyDash';

function App() {
  return (
    <>
      {/* <AdminDash/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dash" element={<DashBoard />} />
          <Route path="/admin/*" element={<AdminDash />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/spamdummy" element={<SpamDummy />} />
          <Route path="/reportdummy" element={<ReportDummy />} />
          <Route path="/admindummyDash" element={<AdminDummyDashboard />} />
          <Route path="/construction" element={<Construction />} />

          <Route path="/#product" element={<Hero />} />
          <Route path="/#impact" element={<Header />} />
          <Route path="/#stats" element={<Stats />} />
          <Route path="/#spam-free" element={<CTA />} />
          <Route path="*" element={<Page_404/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
