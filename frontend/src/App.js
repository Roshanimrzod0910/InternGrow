import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";

import TemporaryHome from "./pages/TemporaryHome";
import OurServices from "./pages/OurServices"; // Import OurServices component


const App = () => {
  return (
    <Router>
      <div className="grid-container">
        <NavigationBar />
        <Routes>
          
        <Route path="/" element={<TemporaryHome />} /> // Render TemporaryHome component at root path
          <Route path="/services" element={<OurServices />} /> // Render OurServices component at /services path
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
