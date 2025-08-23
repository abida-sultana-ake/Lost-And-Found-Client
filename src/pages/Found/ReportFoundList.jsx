import React from "react";

const ReportFoundList = () => {
  const foundItems = [
    {
      name: "Silver Bracelet",
      description: "Found near City Mall entrance.",
      image: "https://via.placeholder.com/300x200?text=Bracelet",
      date: "2025-08-19",
    },
    {
      name: "Black Wallet",
      description: "Found inside a taxi with ID cards.",
      image: "https://via.placeholder.com/300x200?text=Wallet",
      date: "2025-08-17",
    },
    {
      name: "Samsung Galaxy S23",
      description: "Found at coffee shop table.",
      image: "https://via.placeholder.com/300x200?text=Phone",
      date: "2025-08-15",
    },
  ];

  return (
    <div className="max-w-7xl m-20 mx-auto px-4 py-8">
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
            </tr>
          </thead>
          <tbody>
            {foundItems.map((item, index) => (
              <tr key={index} className="border-b hover:bg-blue-50 transition">
                <td className="px-6 py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-16 object-cover rounded-lg shadow-sm"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-800">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-gray-600">{item.description}</td>
                <td className="px-6 py-4 text-gray-500">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportFoundList;
