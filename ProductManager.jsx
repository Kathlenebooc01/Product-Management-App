import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductManager = ({ products, addProduct }) => {
  const [showInStock, setShowInStock] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", inStock: true });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price) {
      addProduct({ ...newProduct, price: Number(newProduct.price) });
      setNewProduct({ name: "", price: "", inStock: true });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <button
        className="mb-6 p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg w-full"
        onClick={() => setShowInStock(!showInStock)}
      >
        {showInStock ? "Show All Products" : "Show Only In-Stock Products"}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products
          .filter((product) => !showInStock || product.inStock)
          .map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 text-gray-800">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-4 rounded-lg shadow-md">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
          className="border border-gray-300 p-3 w-full rounded-md focus:ring focus:ring-blue-300"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
          className="border border-gray-300 p-3 w-full rounded-md focus:ring focus:ring-blue-300"
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            name="inStock"
            checked={newProduct.inStock}
            onChange={handleInputChange}
            className="mr-2"
          />
          <span className="text-gray-700">In Stock</span>
        </label>
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg w-full font-bold">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductManager;