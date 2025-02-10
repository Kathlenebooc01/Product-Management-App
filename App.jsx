import React, { useState } from "react";
import ProductManager from "./ProductManager";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Headphones", price: 200, inStock: false },
    { id: 3, name: "Smartphone", price: 800, inStock: true },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6">Product Management App</h1>
      <ProductManager products={products} addProduct={addProduct} />
    </div>
  );
};

export default App;