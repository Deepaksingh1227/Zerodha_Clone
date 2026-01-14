import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./landing_page/home/HomePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./landing_page/signup/Signup.jsx";
import Login from "./landing_page/signup/Login.jsx";
import Loading_Page from "./landing_page/about/LoadingPage.jsx";
import PricingPage from "./landing_page/pricing/PricingPage.jsx";
import Universe from "./landing_page/product/Universe.jsx";
import Navbar from "./landing_page/NavBar.jsx";
import FooterPage from "./landing_page/FooterPage.jsx";
import SearchResults from "./landing_page/SearchResults.jsx";

import SupportPage from "./landing_page/support/SupportPage.jsx";
import NotFound from "./landing_page/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Loading_Page />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/product" element={<Universe />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterPage />
    </BrowserRouter>
  );
}

export default App;
