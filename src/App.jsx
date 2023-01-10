import React from "react";
import {
  Routes,
  Route
} from 'react-router-dom';
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticaleDetails from "./components/ArticaleDetails";
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articleDetails" element={<ArticaleDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
