import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home'
import Search from './components/search/Search'
import Upload from './components/upload/Upload'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./index.css";
import "./App.css";
import "./bootstrap.min.css";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header/>
      <Router>
        <div className="App" >
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
