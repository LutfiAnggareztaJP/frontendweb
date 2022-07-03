// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GalleryApp from "./Gallery";
import Home from "./Home";
import Header from "./component/Header";
import About from "./About";
import Ppdb from "./ppdb";
// import NotFound from "./404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<GalleryApp />} />
          <Route path="about" element={<About />} />
          <Route path="ppdb" element={<Ppdb />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <Route path="*" element={< NotFound/>} />