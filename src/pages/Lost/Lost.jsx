import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const categories = [
  "All",
  "Accessories",
  "Bags",
  "Electronics",
  "Jewelry",
  "Documents",
];

const Lost = () => {
  const [lostItems, setLostItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const serverURL = "http://127.0.0.1:3000";

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${serverURL}/lost`);
        setLostItems(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load lost items.");
        setLoading(false);
      }
    };
    fetchLostItems();
  }, []);

  const filteredItems = lostItems.filter((item) => {
    const matchesCategory =
      filterCategory === "All" || item.category === filterCategory;
    const matchesSearch =
      (item.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.location || "").toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="max-w-7xl mt-15 mx-auto px-4 py-10">
      <motion.h1
        className="text-3xl text-blue-600 font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Lost Items
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <input
          type="text"
          placeholder="Search by name or location..."
          className="border border-gray-200 rounded-xl px-4 py-2 w-full md:w-1/2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border border-gray-200 rounded-xl px-4 py-2 w-full md:w-1/4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={item._id || index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={item.image || "https://via.placeholder.com/400x300"}
              alt={item.name || "Lost Item"}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name || "Unnamed"}
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                {item.location || "Unknown"}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {item.date || "Unknown"}
              </p>
              <button
                onClick={() => setSelectedItem(item)}
                className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 backdrop-blur-sm bg-black/30"
              onClick={() => setSelectedItem(null)}
            />
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full z-10"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setSelectedItem(null)}
              >
                &times;
              </button>
              <img
                src={
                  selectedItem.image || "https://via.placeholder.com/400x300"
                }
                alt={selectedItem.name || "Lost Item"}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold text-gray-800 mt-4">
                {selectedItem.name}
              </h2>
              <p className="text-gray-600 mt-2">{selectedItem.description}</p>
              <p className="text-gray-500 text-sm mt-1">
                Location: {selectedItem.location}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Date: {selectedItem.date}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Category: {selectedItem.category}
              </p>
              {selectedItem.contact && (
                <div className="mt-5 bg-gray-100 p-3 rounded-lg text-center">
                  <p className="text-gray-800 font-medium">
                    Contact Email:{" "}
                    <span className="text-blue-600">
                      {selectedItem.contact.replace("mailto:", "")}
                    </span>
                  </p>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        selectedItem.contact.replace("mailto:", "")
                      )
                    }
                    className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-md"
                  >
                    Copy Email
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lost;
