import React, { useState } from "react";

const foundItems = [
  {
    name: "Gold Watch",
    category: "Accessory",
    description: "Found near City Mall entrance. Expensive looking watch.",
    image: "https://via.placeholder.com/300x200?text=Watch",
    date: "2025-08-21",
  },
  {
    name: "Red Purse",
    category: "Bag",
    description: "Found in taxi. Contains some cash and receipts.",
    image: "https://via.placeholder.com/300x200?text=Purse",
    date: "2025-08-20",
  },
  {
    name: "Samsung S24",
    category: "Electronics",
    description: "Found at coffee shop table around 4 PM.",
    image: "https://via.placeholder.com/300x200?text=Phone",
    date: "2025-08-18",
  },
];

const Found = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen mt-17 bg-gradient-to-b from-blue-50 to-white py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
        Found Items
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {foundItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border border-blue-100"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-blue-700">
                {item.name}
              </h2>
              <p className="text-blue-400 text-sm">{item.category}</p>
              <p className="text-gray-600 mt-2 line-clamp-2">
                {item.description}
              </p>
              <p className="text-gray-400 text-sm mt-2">Found on {item.date}</p>
              <button
                onClick={() => setSelectedItem(item)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full font-medium"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative border-t-4 border-blue-600 animate-fadeIn">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-blue-600 text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {selectedItem.name}
            </h2>
            <p className="text-blue-400 mb-2">{selectedItem.category}</p>
            <p className="text-gray-700 mb-4">{selectedItem.description}</p>
            <p className="text-gray-500 text-sm">
              Found on {selectedItem.date}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Found;
