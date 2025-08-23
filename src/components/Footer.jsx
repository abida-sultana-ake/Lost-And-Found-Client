import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 shadow-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-700 mb-4">
            Lost & Found
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            A simple platform to reunite people with their lost items. Search,
            report, and help someone today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-700 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/lost" className="hover:text-blue-700 transition">
                Lost
              </Link>
            </li>
            <li>
              <Link
                to="/report-lost"
                className="hover:text-blue-700 transition"
              >
                Report Lost
              </Link>
            </li>
            <li>
              <Link to="/found" className="hover:text-blue-700 transition">
                Found
              </Link>
            </li>
            <li>
              <Link
                to="/report-found"
                className="hover:text-blue-700 transition"
              >
                Report Found
              </Link>
            </li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Connect With Us
          </h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com/sodiumtaurochlate"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-50 hover:bg-blue-100 transition text-blue-700"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-50 hover:bg-blue-100 transition text-blue-500"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-50 hover:bg-pink-100 transition text-pink-500"
            >
              <FaInstagram size={16} />
            </a>
          </div>
          <p className="text-gray-600 text-sm">Email: support@lostfound.com</p>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Lost & Found. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
