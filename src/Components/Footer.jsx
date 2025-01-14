import React from "react";
import {
  FaTwitter,
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaSearchengin,
} from "react-icons/fa";
import Logo from "../Images/logo.png";
import android from "../Images/android.png";
import ios from "../Images/ios.jpg";
// import TermsConditions from './TermsConditions';
// import PrivacyPolicy from './PrivacyPolicy';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative  bg-gradient-to-r from-blue-800 to-purple-950 text-white ">
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-8 md:px-16 lg:px-24 font-serif">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6 mt-6">
          <div className="md:max-w-md lg:col-span-2">
            <img src={Logo} className="w-56 h-12 mr-4" />
            <div className="mt-4 lg:max-w-sm xl:max-w-screen-md">
              <p className="text-sm text-deep-purple-50">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
              <p className="mt-4 text-sm text-deep-purple-50">
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 xl:col-span-4 lg:col-span-4 md:grid-cols-4">
            {/* <div>
                            <p className="font-semibold tracking-wide text-yellow-600">
                                Category
                            </p>
                            <ul className="mt-2 space-y-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                    <li key={num} className="flex items-center space-x-2 group">
                                        <Link to={`/mulank${num}`} >
                                            <FaSearchengin  className="size-4 cursor-pointer" />
                                        </Link>
                                        <Link to={`/mulank${num}`} className="transition-colors duration-300">
                                            Mulank {num}
                                        </Link>
                                    </li>
                                ))}
                            </ul>


                        </div> */}
            <div>
              <p className="font-semibold tracking-wide text-yellow-600">
                Quick Links
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/videos"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Videos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-yellow-600">
                Help & Legal
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/termscondition"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacypolicy"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-yellow-600">
                Follow Us
              </p>
              <div className="mt-2">
                <div className="flex items-center space-x-4 sm:mt-0">
                  <a href="*" target="_blank">
                    <FaFacebookSquare className="text-2xl hover:text-white" />
                  </a>
                  <a href="*" target="_blank">
                    <FaInstagram className="text-2xl hover:text-white" />
                  </a>
                  <a href="*" target="_blank">
                    <FaYoutube className="text-2xl hover:text-white" />
                  </a>
                </div>
                <div className="mt-24 w-5/6">
                  <a
                    // href="https://play.google.com/store/apps/details?id=co.edvin.pgtlm&hl=en_IN&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <img
                      src={android}
                      alt="Android App"
                      className="w-full h-auto cursor-pointer rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    />
                  </a>
                  <a
                    // href="https://play.google.com/store/apps/details?id=co.edvin.pgtlm&hl=en_IN&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-2"
                  >
                    <img
                      src={ios}
                      alt="iOS App"
                      className="cursor-pointer rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-10 w-40"
                    />
                  </a>
                </div>
              </div>
            </div>


                

            <div class="w-full max-w-md mx-auto ">
            <p className="font-semibold tracking-wide text-yellow-600">
               Address
              </p>
              <div className="mt-4 lg:max-w-sm xl:max-w-screen-md">
              <p className="text-sm text-deep-purple-50">
            
Plot No. 1, House number 1243, Rukhmini Nagar, Wankhede Layout, 
Sawangi Meghe
WARDHA, MAHARASHTRA 442001
India

              </p>
             
            </div>
            
  <iframe 
    class="w-full h-30 sm:h-40 md:h-50 lg:h-60" 
    frameborder="0" 
    scrolling="no" 
    marginheight="0" 
    marginwidth="0" 
    src="https://maps.google.com/maps?width=300&amp;height=200&amp;hl=en&amp;q=307,%20Gera's%20Imperium%20Rise,%20Hinjawadi%20Phase%20II,%20Hinjawadi%20Rajiv%20Gandhi%20Infotech%20Park,%20Hinjawadi,%20Pune,%20Pimpri-Chinchwad,%20Maharashtra%20411057,%20India+(19+%20Sports%20Injury)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
  </iframe>
</div>



          </div>
        </div>
        <div className="w-full mx-auto border-t border-deep-purple-accent-200 max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">
            © Copyright 2024 19+ Sports Injury. All rights reserved.
          </span>
          <span className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
            {/* Designed by: UI/UX Partners */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
