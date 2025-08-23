import React from "react";
import { Link } from "react-router";
import {
  FaSearch,
  FaExclamationTriangle,
  FaCheckCircle,
  FaBoxOpen,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section with Background */}
      <section
        className="relative w-full pt-12 h-[500px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/1e/a2/6d/1ea26dc520337a320781557786eb2597.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Reunite <span className="text-blue-400">Lost Items</span> With Their
            Owners
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Search for lost items or report what you've found — quick, easy, and
            reliable.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Lost Section */}
        <Link
          to="/lost"
          className="group flex flex-col items-center justify-center p-8 bg-white shadow-xl rounded-2xl hover:-translate-y-2 hover:shadow-2xl transition transform text-center"
        >
          <FaBoxOpen
            size={50}
            className="text-blue-600 mb-4 group-hover:scale-110 transition"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Browse Lost Items
          </h2>
          <p className="text-gray-600">
            Check reported lost items and see if someone has found yours.
          </p>
        </Link>

        {/* Report Lost */}
        <Link
          to="/report-lost"
          className="group flex flex-col items-center justify-center p-8 bg-white shadow-xl rounded-2xl hover:-translate-y-2 hover:shadow-2xl transition transform text-center"
        >
          <FaExclamationTriangle
            size={50}
            className="text-red-500 mb-4 group-hover:scale-110 transition"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Report Lost Item
          </h2>
          <p className="text-gray-600">
            Quickly create a lost report so others can help you locate your
            item.
          </p>
        </Link>

        {/* Report Found */}
        <Link
          to="/report-found"
          className="group flex flex-col items-center justify-center p-8 bg-white shadow-xl rounded-2xl hover:-translate-y-2 hover:shadow-2xl transition transform text-center"
        >
          <FaCheckCircle
            size={50}
            className="text-green-500 mb-4 group-hover:scale-110 transition"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Report Found Item
          </h2>
          <p className="text-gray-600">
            Found something valuable? Report it and return it to its rightful
            owner.
          </p>
        </Link>
      </section>
    </div>
  );
};

export default Home;
