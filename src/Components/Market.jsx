import React, { useState } from "react";
import ProductCard from "./ProductCard";

function AddProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    isAvailable: true,
  });

  function handleFormChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formData.name || !formData.price) return;

    onAddProduct({
      id: Date.now(),
      name: formData.name,
      price: parseFloat(formData.price),
      description: formData.description || "No description provided.",
      image: formData.image || "https://placeholder.com",
      isAvailable: formData.isAvailable,
    });

    setFormData({
      name: "",
      price: "",
      description: "",
      image: "",
      isAvailable: true,
    });
  }

  return (
    <div className="card p-4 mb-5 border-primary shadow-sm">
      <h3 className="h4 mb-3 text-primary">Add New Product</h3>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Price ($)</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleFormChange}
            required
            min="0"
            step="0.01"
          />
        </div>
        <div className="col-12">
          <label className="form-label">Image URL</label>
          <input
            type="url"
            className="form-control"
            name="image"
            value={formData.image}
            onChange={handleFormChange}
            placeholder="https://example.com"
          />
        </div>
        <div className="col-12">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleFormChange}
            rows="2"
          ></textarea>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isAvailableCheck"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleFormChange}
            />
            <label className="form-check-label" htmlFor="isAvailableCheck">
              In Stock &amp; Available Immediately
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success w-100">
            Create and Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

function Market({ cart, addToCart }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Framework Laptop 12 (Intel® Core™ Series 3)",
      image: "public/imege 1.jpg",
      description: "13-inch modular laptop...",
      price: 699,
      isAvailable: true,
    },
    {
      id: 2,
      name: "Framework Laptop 12 DIY Edition (Intel® Core™ Series 3)",
      image: "public/Hp Omega 16 Max Ultra.webp",
      description: "16-inch performance laptop...",
      price: 549,
      isAvailable: true,
    },
    {
      id: 3,
      name: "Framework Laptop 13 Pro DIY Edition (AMD Ryzen™ AI 300 Series)",
      image: "public/Laptop 13.jpg",
      description: "12-inch compact laptop...",
      price: 1399,
      isAvailable: false,
    },
    {
      id: 4,
      name: "Framework Laptop 13 Pro DIY Edition (Intel® Core™ Ultra Series 3)",
      image: "public/Laptop12.jpg",
      description: "13-inch modular laptop...",
      price: 1199,
      isAvailable: false,
    },
    {
      id: 5,
      name: "public/Framework Laptop 16 Pro DIY Edition (Intel® Core™ Ultra Series 3)",
      image: "public/Laptop 16.png",
      description: "16-inch performance laptop...",
      price: 1699,
      isAvailable: true,
    },
  ]);

  function handleAddProduct(newProduct) {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  }

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section className="row g-3 align-items-stretch" aria-labelledby="products-heading">
      <div className="col-12">
        <AddProductForm onAddProduct={handleAddProduct} />
      </div>

      <div className="col-12 d-flex justify-content-between align-items-center mb-3">
        <h2 id="products-heading" className="h2 mb-0">
          Laptops
        </h2>
        {cart.length > 0 && (
          <div className="badge bg-success fs-6 p-2">
            Cart: {cart.length} item(s) — Total: ${cartTotal}
          </div>
        )}
      </div>

      {products.map((product) => (
        <div className="col-12 col-sm-6 col-lg-4 mb-5" key={product.id}>
          <ProductCard product={product} />
          <button
            type="button"
            className="btn btn-primary mt-2 w-100"
            onClick={() => addToCart(product)}
            disabled={!product.isAvailable}
          >
            {product.isAvailable ? `Add to cart — $${product.price}` : "Out of stock"}
          </button>
        </div>
      ))}
    </section>
  );
}

export default Market;