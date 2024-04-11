import './App.css';


import Pricing from './component/main/Pricing.jsx'
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/nav/Navbar";
import Home from "./component/main/Home.jsx";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="App">
  <Router>
     <Navbar />

     <main className="main-content">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/pricing" element={<Pricing />} />
     
        
         {/* Define other routes that you need*/}
       </Routes>
       
       <Footer/>
     </main>
   </Router>
    </div>
  );
}

export default App;
