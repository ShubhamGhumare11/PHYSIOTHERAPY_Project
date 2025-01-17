import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Other/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Other/Footer";
import Chatbot from "./Components/Other/Chatbot";
import Contact from "./Components/Other/Contact";
import Blog from "./TestComponent/BlogBanner";

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
        <Route path="/blogs" element={<Blog />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
