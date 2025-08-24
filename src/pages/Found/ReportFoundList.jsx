import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const ReportFoundList = () => {
  const [foundItems, setFoundItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    image: "",
  });

  const serverURL = "http://localhost:3000"; 

  // Fetch found items
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${serverURL}/found`);
        setFoundItems(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load found items.");
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  // Delete item
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`${serverURL}/found/${id}`);
        setFoundItems((prev) => prev.filter((item) => item._id !== id));
        Swal.fire("Deleted!", "Item has been deleted.", "success");
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Failed to delete item", "error");
      }
    }
  };

  // Open edit modal
  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name || "",
      description: item.description || "",
      date: item.date || "",
      image: item.image || "",
    });
  };

  // Update input values in modal
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit update to server
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${serverURL}/found/${editingItem._id}`,
        formData
      );
      setFoundItems((prev) =>
        prev.map((item) => (item._id === editingItem._id ? res.data : item))
      );
      setEditingItem(null);
      Swal.fire("Updated!", "Item has been updated.", "success");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to update item", "error");
    }
  };

  if (loading)
    return <p className="text-center mt-10 text-blue-600">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="max-w-7xl mt-16 mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Reported Found Items
      </h2>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Image
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Description
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Date Found
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {foundItems.map((item) => (
              <tr
                key={item._id}
                className="border-b hover:bg-blue-50 transition"
              >
                <td className="px-6 py-4">
                  <img
                    src={item.image || "https://via.placeholder.com/100x60"}
                    alt={item.name}
                    className="w-24 h-16 object-cover rounded-lg shadow-sm"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-800">
                  {item.name || "-"}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {item.description || "-"}
                </td>
                <td className="px-6 py-4 text-gray-500">{item.date || "-"}</td>
                <td className="px-6 py-4 text-center space-x-3">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
            {foundItems.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No found items reported yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setEditingItem(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-md w-full z-10">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Update Item
            </h2>
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportFoundList;
