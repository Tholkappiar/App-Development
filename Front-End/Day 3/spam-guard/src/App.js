import Login from './Pages/Login';
import SignUp from './Pages/Sign-up';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from '../src/Pages/DashBoard/Dashboard'
import HomePage from './Pages/HomePage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dash" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
