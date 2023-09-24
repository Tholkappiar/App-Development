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
          <Route path="/admin*" element={<AdminDash />} />
          <Route path="/adminLogin" element={<AdminLogin />} />

          <Route path="/#product" element={<Hero />} />
          <Route path="/#impact" element={<Header />} />
          <Route path="/#stats" element={<Stats />} />
          <Route path="/#spam-free" element={<CTA />} />
        </Routes>
      </BrowserRouter>
      {/* <AdminDash/> */}
    </>
  );
}

export default App;
