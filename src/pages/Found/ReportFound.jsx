import React, { useState } from "react";

const ReportFound = () => {
  const [preview, setPreview] = useState("");

  // Handle local image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  // Handle image link
  const handleImageLink = (e) => {
    setPreview(e.target.value);
  };

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-b from-blue-50 to-white py-12 px-6 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Report Found Item
        </h1>
        <form className="space-y-5">
          {/* Item Name */}
          <div>
            <label className="block text-blue-700 font-medium mb-1">
              Item Name
            </label>
            <input
              type="text"
              placeholder="e.g. Black Wallet"
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-blue-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="e.g. Black Wallet"
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-blue-700 font-medium mb-1">
              Category
            </label>
            <select className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white">
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Bags">Bags</option>
              <option value="Documents">Documents</option>
              <option value="Accessories">Accessories</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-blue-700 font-medium mb-1">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Provide details about the found item..."
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Location */}
          <div>
            <label className="block text-blue-700 font-medium mb-1">
              Found Location
            </label>
            <input
              type="text"
              placeholder="e.g. Near Central Park Gate 3"
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-blue-700 font-medium mb-1">
              Date Found
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-blue-700 font-medium mb-1">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full border border-blue-200 rounded-lg cursor-pointer focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Image Link */}
          <div>
            <label className="block text-blue-700 font-medium mb-1">
              Image URL
            </label>
            <input
              type="url"
              placeholder="https://example.com/image.jpg"
              onChange={handleImageLink}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Preview */}
          {preview && (
            <div className="mt-4">
              <p className="text-blue-700 font-medium mb-2">Preview:</p>
              <img
                src={preview}
                alt="Preview"
                className="w-full max-h-64 object-cover rounded-lg border border-blue-200 shadow"
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition font-semibold w-full sm:w-auto"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportFound;