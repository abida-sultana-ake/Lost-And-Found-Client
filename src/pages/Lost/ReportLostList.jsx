import React from "react";

const reportedItems = [
  {
    name: "Red Wallet",
    category: "Wallet",
    description: "Lost near downtown park, contains ID and credit cards.",
    location: "Downtown Park",
    date: "2025-08-20",
    image: "https://via.placeholder.com/100x60?text=Wallet",
  },
  {
    name: "Silver Necklace",
    category: "Jewelry",
    description: "Lost at shopping mall, engraved with initials A.B.",
    location: "City Mall",
    date: "2025-08-18",
    image: "https://via.placeholder.com/100x60?text=Necklace",
  },
  {
    name: "Black Backpack",
    category: "Bag",
    description: "Lost in metro station, contains laptop and books.",
    location: "Metro Station",
    date: "2025-08-16",
    image: "https://via.placeholder.com/100x60?text=Backpack",
  },
  {
    name: "iPhone 14 Pro",
    category: "Phone",
    description: "Lost at coffee shop, around 5 PM.",
    location: "Central Coffee Shop",
    date: "2025-08-15",
    image: "https://via.placeholder.com/100x60?text=Phone",
  },
];

const ReportLostList = () => {
  return (
    <div className="max-w-7xl mt-15 mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Reported Lost Items
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left py-3 px-4">Image</th>
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Category</th>
              <th className="text-left py-3 px-4">Description</th>
              <th className="text-left py-3 px-4">Location</th>
              <th className="text-left py-3 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {reportedItems.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-12 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.category}</td>
                <td className="py-3 px-4">{item.description}</td>
                <td className="py-3 px-4">{item.location}</td>
                <td className="py-3 px-4">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportLostList;