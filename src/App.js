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
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
<<<<<<< HEAD
    <div className="App">
    Hello world!
     <Home/>
    </div>
=======
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
>>>>>>> 229c0357995bb1e4ff6af1cc3d2e7b08a4024fd0
  );
}

export default App;
