import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Chatbot from "./Components/Chatbot";
import Contact from "./Components/Contact";
import Quize from "./sport-injury-recommender/Quize";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <Header />
      <Chatbot />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quize" element={<Quize />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
