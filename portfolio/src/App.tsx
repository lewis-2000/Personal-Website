import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Nav from "./components/nav/nav";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
