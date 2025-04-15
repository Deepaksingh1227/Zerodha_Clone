
import './App.css'
import HomePage from './landing_page/home/HomePage';
import{ BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './landing_page/signup/Signup';
import Loading_Page from './landing_page/about/LoadingPage';
import PricingPage from './landing_page/pricing/PricingPage';
import Universe from './landing_page/product/Universe';
import Navbar from "./landing_page/NavBar";
import FooterPage from "./Landing_page/FooterPage";

import SupportPage from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';


function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/about" element={<Loading_Page />} />
    <Route path="/pricing" element={<PricingPage />} />
    <Route path="/product" element={<Universe />} />
    <Route path="/support" element={<SupportPage />} />
    <Route path="*" element={<NotFound />} />
   
    </Routes>
    <FooterPage/>
    </BrowserRouter>
  
  );
}

export default App;
