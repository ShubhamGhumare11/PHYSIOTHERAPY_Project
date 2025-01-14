import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Chatbot from "../src/Components/Chatbot";
import Contact from './Components/Contact';


// Aarti comment2
//Shubham comm1
// aarti comm 3
// shubham comm 2
//aarti comment 4
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

       {/*   <Route path="/about" element={<About />} />
       <Route path="/numerology" element={<Numerology />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/prediction/:id" element={<PredictSubCard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/subcard/:id" element={<SubCardPage />} />
        <Route path="usdservice" element={<UsdService />} />
        <Route path="/usdservices/:id" element={<SubUsdCard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termscondition" element={<TermsConditions />} />
        <Route path="/mulank1" element={<Mulank1 />} />
        <Route path="/mulank2" element={<Mulank2 />} />
        <Route path="/mulank3" element={<Mulank3 />} />
        <Route path="/mulank4" element={<Mulank4 />} />
        <Route path="/mulank5" element={<Mulank5 />} />
        <Route path="/mulank6" element={<Mulank6 />} />
        <Route path="/mulank7" element={<Mulank7 />} />
        <Route path="/mulank8" element={<Mulank8 />} />
        <Route path="/mulank9" element={<Mulank9 />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/orderreceived" element={<OrderReceived />} /> */}
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
