

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi"; // Cart icon
import { HiOutlineUser } from "react-icons/hi"; // User icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false); // State for sub-dropdown
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // State for user dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setIsSubDropdownOpen(false); // Close sub-dropdown on mouse leave
  };

  const toggleSubDropdown = () => {
    setIsSubDropdownOpen(!isSubDropdownOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsSubDropdownOpen(false);
    setIsUserMenuOpen(false); // Close user menu
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 to-purple-950 text-white p-3 sticky top-0 z-50 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <div className="text-xl font-bold">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-40 h-auto sm:w-48 md:w-40 lg:w-64"
            />
          </Link>
        </div> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-5 lg:space-x-7 text-base lg:text-lg font-serif">
          <Link to="/" className="hover:text-customLightOrange">
            Home
          </Link>
          <Link to="/about" className="hover:text-customLightOrange">
            About
          </Link>

          {/* Dropdown for Our Services */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center space-x-1 hover:text-customLightOrange"
            >
              <span>Our Services</span>
              <IoChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-36 bg-gradient-to-r from-blue-800 to-purple-950 text-white shadow-lg rounded-lg z-10">
                <button
                  onClick={toggleSubDropdown}
                  className="block w-full px-2 py-2 hover:text-customLightOrange flex justify-between items-center"
                >
                  Services
                  <IoChevronDown
                    className={`inline-block w-4 h-4 transition-transform duration-300 ${isSubDropdownOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </button>

                {/* Sub-dropdown Menu */}
                {isSubDropdownOpen && (
                  <div className="absolute left-full top-0 mt-6 w-40 bg-gradient-to-r from-blue-800 to-purple-950 text-white shadow-lg rounded-lg z-10">
                    <Link
                      to="/services"
                      className="block px-3 py-2 hover:text-customLightOrange"
                      onClick={closeMenu} // Close on selection
                    >
                      Services in India
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          <Link to="/videos" className="hover:text-customLightOrange">
            Videos
          </Link>
          <Link to="/blogs" className="hover:text-customLightOrange">
            Blogs
          </Link>
          <Link to="/contact" className="hover:text-customLightOrange">
            Contact Us
          </Link>
          <Link to="/quize" className="hover:text-customLightOrange">
            Quize
          </Link>

          {/* Desktop User Icon (Rightmost) */}
          <div
            className="relative"
            onMouseEnter={() => setIsUserMenuOpen(true)}
            onMouseLeave={() => setIsUserMenuOpen(false)}
          >
            <button
              onClick={toggleUserMenu}
              className="flex items-center space-x-1 hover:text-customLightOrange"
            >
              <HiOutlineUser className="w-6 h-6" />
              <IoChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isUserMenuOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            {isUserMenuOpen && (
              <div className="absolute left-0 mt-2 w-36 bg-gradient-to-r from-blue-300 to-purple-700 text-white shadow-lg rounded-lg z-10">
                <Link
                  to="/userprofile"
                  className="block px-4 py-2 hover:text-customLightOrange"
                  onClick={closeMenu}
                >
                  Profile
                </Link>
                
                <Link
                  to="/orderdetails"
                  className="block px-4 py-2 hover:text-customLightOrange"
                  onClick={closeMenu}
                >
                  Order Details
                </Link>

                <Link
                  to="/payment"
                  className="block px-4 py-2 hover:text-customLightOrange"
                  onClick={closeMenu}
                >
                  Appointment 
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:text-customLightOrange"
                  onClick={closeMenu}
                >
                  Login/Register
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Cart Button and Hamburger */}
        <div className="block md:hidden flex items-center space-x-4">
          {/* Cart Button */}
          <Link to="/services">
            <FiShoppingCart className="text-white w-6 h-6" />
          </Link>

          {/* User Icon for Mobile View */}
          <div
            className="relative"
            onMouseEnter={() => setIsUserMenuOpen(true)}
            onMouseLeave={() => setIsUserMenuOpen(false)}
          >
            <button
              onClick={toggleUserMenu}
              className="flex items-center space-x-1 hover:text-customLightOrange"
            >
              <HiOutlineUser className="w-6 h-6" />
              <IoChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isUserMenuOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            {isUserMenuOpen && (
              <div className="absolute left-0 mt-2 w-36 bg-gradient-to-r from-blue-300 to-purple-700 text-white shadow-lg rounded-lg z-10">
                <Link
                  to="/orderdetails"
                  className="block px-4 py-2 hover:text-customLightOrange"
                  onClick={closeMenu}
                >
                  Order Details
                </Link>

                <Link
                  to="/payment"
                  className="block px-4 py-2 hover:text-customLightOrange"
                  onClick={closeMenu}
                >
                  Appointment 
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:text-customLightOrange"
                  onClick={closeMenu}
                >
                  Login/Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col items-center font-serif space-y-4 mt-4 text-base sm:text-lg">
          <Link to="/" className="hover:text-customLightOrange" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="hover:text-customLightOrange" onClick={closeMenu}>
            About
          </Link>

          {/* Mobile Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center space-x-1 hover:text-customLightOrange"
            >
              <span>Our Services</span>
              <IoChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="mt-2 w-40 bg-gradient-to-r from-blue-800 to-purple-950 text-white shadow-lg rounded-lg z-10">
                <button
                  onClick={toggleSubDropdown}
                  className="block w-full px-4 py-2 flex justify-between items-center"
                >
                  Services
                  <IoChevronDown
                    className={`inline-block w-4 h-4 ml-2 transition-transform duration-300 ${isSubDropdownOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </button>

                {isSubDropdownOpen && (
                  <div className="absolute left-20 top-0 mt-14 w-40 bg-gradient-to-r from-blue-800 to-purple-950 text-white shadow-lg rounded-lg z-10">
                    <Link
                      to="/services"
                      className="block px-4 py-2 hover:text-customLightOrange"
                      onClick={closeMenu}
                    >
                      Services in India
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          <Link to="/videos" className="hover:text-customLightOrange" onClick={closeMenu}>
            Videos
          </Link>
          <Link to="/blogs" className="hover:text-customLightOrange" onClick={closeMenu}>
            Blogs
          </Link>
          <Link to="/contact" className="hover:text-customLightOrange" onClick={closeMenu}>
            Contact Us
          </Link>
         
        </nav>
      </div>
    </header>
  );
};

export default Header;
  