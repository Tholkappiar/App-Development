import Login from './Pages/Login';
import SignUp from './Pages/Sign-up';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from '../src/Pages/DashBoard/Dashboard'
import HomePage from './Pages/HomePage';
import Hero from './Components/Hero';
import Stats from './Components/Stats';
import Header from './Components/Header';
import CTA from './Components/CTA';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dash" element={<DashBoard />} />

            <Route path="/#product" element={<Hero />}/>
            <Route path="/#impact" element={<Header />}/>
            <Route path="/#stats" element={<Stats />}/>
            <Route path="/#spam-free" element={<CTA />}/>
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
