import React, { useState, useContext } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses = ({ isActive }) =>
    `relative font-medium cursor-pointer transition duration-300 
     ${isActive ? "text-blue-700" : "text-gray-700 hover:text-blue-700"}
     after:content-[''] after:absolute after:-bottom-1 after:left-0 
     after:w-0 after:h-[2px] after:bg-blue-700 hover:after:w-full 
     after:transition-all after:duration-300`;

  return (
    <nav className="w-full bg-white/70 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Brand Logo */}
        <NavLink to="/" className="text-2xl font-extrabold text-blue-700">
          Lost & Found
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/lost" className={linkClasses}>
            Lost
          </NavLink>
          <NavLink to="/found" className={linkClasses}>
            Found
          </NavLink>

          {/* Only show these if user is logged in */}
          {user && (
            <>
              <NavLink to="/report-lost" className={linkClasses}>
                Report Lost
              </NavLink>
              <NavLink to="/report-lost-list" className={linkClasses}>
                Report Lost List
              </NavLink>
              <NavLink to="/report-found" className={linkClasses}>
                Report Found
              </NavLink>
              <NavLink to="/report-found-list" className={linkClasses}>
                Report Found List
              </NavLink>
            </>
          )}

          {/* Conditional Login/Logout */}
          {user ? (
            <button
              onClick={logOut}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium shadow-md"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition font-medium shadow-md"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/90 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4 font-medium text-gray-700">
          <li>
            <NavLink onClick={toggleMenu} to="/" className={linkClasses}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} to="/lost" className={linkClasses}>
              Lost
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} to="/found" className={linkClasses}>
              Found
            </NavLink>
          </li>

          {/* Only show these if user is logged in */}
          {user && (
            <>
              <li>
                <NavLink
                  onClick={toggleMenu}
                  to="/report-lost"
                  className={linkClasses}
                >
                  Report Lost
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleMenu}
                  to="/report-lost-list"
                  className={linkClasses}
                >
                  Report Lost List
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleMenu}
                  to="/report-found"
                  className={linkClasses}
                >
                  Report Found
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleMenu}
                  to="/report-found-list"
                  className={linkClasses}
                >
                  Report Found List
                </NavLink>
              </li>
            </>
          )}

          {/* Conditional Mobile Login/Logout */}
          <li>
            {user ? (
              <button
                onClick={() => {
                  logOut();
                  toggleMenu();
                }}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium text-center shadow-md w-full"
              >
                Logout
              </button>
            ) : (
              <NavLink
                onClick={toggleMenu}
                to="/login"
                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition font-medium text-center shadow-md block"
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
