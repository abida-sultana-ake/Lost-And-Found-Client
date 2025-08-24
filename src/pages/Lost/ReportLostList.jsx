import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "sweetalert2/dist/sweetalert2.min.css";

const ReportLostList = () => {
  const [lostItems, setLostItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    location: "",
    date: "",
    image: "",
  });

  const serverURL = "http://localhost:3000";

  // Fetch items from server
  const fetchLostItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${serverURL}/lost`);
      setLostItems(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      Swal.fire("Error", "Failed to load lost items", "error");
    }
  };

  useEffect(() => {
    fetchLostItems();
  }, []);

  // Delete item
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will delete the item permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`${serverURL}/lost/${id}`);
        Swal.fire("Deleted!", "Item has been deleted.", "success");
        fetchLostItems();
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Failed to delete item", "error");
      }
    }
  };

  // Start editing
  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      category: item.category,
      description: item.description,
      location: item.location,
      date: item.date,
      image: item.image,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update item
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${serverURL}/lost/${editingItem._id}`, formData);
      Swal.fire("Updated!", "Item has been updated.", "success");
      setEditingItem(null);
      fetchLostItems();
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to update item", "error");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-7xl mt-12 mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Reported Lost Items
      </h2>

      <div className="overflow-x-auto">
        <motion.table
          className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left py-3 px-4">Image</th>
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Category</th>
              <th className="text-left py-3 px-4">Description</th>
              <th className="text-left py-3 px-4">Location</th>
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {lostItems.map((item) => (
                <motion.tr
                  key={item._id}
                  className="border-b hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <td className="py-3 px-4">
                    <img
                      src={
                        item.image ||
                        "https://via.placeholder.com/100x60?text=No+Image"
                      }
                      alt={item.name}
                      className="w-20 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.category}</td>
                  <td className="py-3 px-4">{item.description}</td>
                  <td className="py-3 px-4">{item.location}</td>
                  <td className="py-3 px-4">{item.date}</td>
                  <td className="py-3 px-4 flex space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition shadow-md text-white"
                      title="Edit"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition shadow-md text-white"
                      title="Delete"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </motion.table>
      </div>

      {/* Edit Modal */}
      <AnimatePresence>
        {editingItem && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setEditingItem(null)}
              >
                &times;
              </button>
              <h3 className="text-xl font-bold mb-4">Edit Lost Item</h3>
              <form className="space-y-4" onSubmit={handleUpdate}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Item Name"
                  className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Category"
                  className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
                  required
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Image URL"
                  className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
                >
                  Update
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReportLostList;
