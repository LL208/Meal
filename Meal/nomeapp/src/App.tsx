import React, { FC, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AreaFood from "./components/AreaFood/AreaFood";
import Home from "./components/Home/Home";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/menu/*" element={<Menu></Menu>} />
          <Route path="/about" element={<AboutUs></AboutUs>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
