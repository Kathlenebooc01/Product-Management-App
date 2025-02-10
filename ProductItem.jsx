import React from "react";

const ProductItem = ({ name, price, inStock }) => {
  return (
    <div className="border border-gray-200 p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-600 text-lg">${price}</p>
      <span
        className={`px-4 py-2 rounded-full text-white text-sm font-semibold mt-2 inline-block ${
          inStock ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
};

export default ProductItem;