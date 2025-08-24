import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        {/* Loading Text */}
        <p className="text-blue-700 font-semibold text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
