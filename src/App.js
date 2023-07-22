import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import Home from './components/home/Home'
import Search from './components/search/Search'
import Upload from './components/upload/Upload'
import Results from './components/results/Results'
import Preloader from "../src/components/Pre";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./index.css";
import "./App.css";
import "./bootstrap.min.css";




function App() {


const [load, upadateLoad] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    upadateLoad(false);
  }, 1200);

  return () => clearTimeout(timer);
}, []);


  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/search" element={<Search />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
