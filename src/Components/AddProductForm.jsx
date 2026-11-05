import { useState } from "react";

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

export default AddProductForm;
