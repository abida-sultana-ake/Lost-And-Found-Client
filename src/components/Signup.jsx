import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup submitted", { name, email, password });
    // Add your signup logic here
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
    // Add Google signup logic here
  };

  return (
    <div className="min-h-screen mt-15 flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-blue-100">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-8">Sign up to get started</p>

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 font-medium">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Signup */}
        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:shadow-md transition bg-white"
        >
          <FcGoogle className="mr-2 text-2xl" />
          <span className="font-medium text-gray-700">Sign up with Google</span>
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
