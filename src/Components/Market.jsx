import React, { useState } from "react";
import ProductCard from "./ProductCard";
import AddProductForm from "./AddProductForm";

const products = [
  {
    id: 1,
    name: "Framework Laptop 12 (Intel® Core™ Series 3)",
    image: "/imege 1.jpg",
    description: "13-inch modular laptop...",
    price: 699,
    isAvailable: true,
  },
  {
    id: 2,
    name: "Framework Laptop 12 DIY Edition (Intel® Core™ Series 3)",
    image: "/Hp Omega 16 Max Ultra.webp",
    description: "16-inch performance laptop...",
    price: 549,
    isAvailable: true,
  },
  {
    id: 3,
    name: "Framework Laptop 13 Pro DIY Edition (AMD Ryzen™ AI 300 Series)",
    image: "/Laptop 13.jpg",
    description: "12-inch compact laptop...",
    price: 1399,
    isAvailable: false,
  },
  {
    id: 4,
    name: "Framework Laptop 13 Pro DIY Edition (Intel® Core™ Ultra Series 3)",
    image: "/Laptop12.jpg",
    description: "13-inch modular laptop...",
    price: 1199,
    isAvailable: false,
  },
  {
    id: 5,
    name: "Framework Laptop 16 Pro DIY Edition (Intel® Core™ Ultra Series 3)",
    image: "/Laptop 16.png",
    description: "16-inch performance laptop...",
    price: 1699,
    isAvailable: true,
  },
  {
    id: 6,
    name: "Framework Laptop 13 Pro (AMD Ryzen™ AI 300 Series)",
    image: "/framework-laptop-13-pro-amd.jpg",
    description:
      "13-inch premium modular laptop powered by AMD Ryzen AI 300 Series.",
    price: 2299,
    isAvailable: true,
  },
  {
    id: 7,
    name: "Framework Laptop 13 Pro (Intel® Core™ Ultra Series 3)",
    image: "/framework-laptop-13-pro-intel.jpg",
    description:
      "13-inch premium modular laptop powered by Intel Core Ultra Series 3.",
    price: 1599,
    isAvailable: true,
  },
  {
    id: 8,
    name: "Framework Laptop 16 (AMD Ryzen™ AI 300 Series)",
    image: "/framework-laptop-16-amd.jpg",
    description:
      "16-inch modular performance laptop powered by AMD Ryzen AI 300 Series.",
    price: 1839,
    isAvailable: true,
  },
  {
    id: 9,
    name: "Framework Laptop 16 DIY Edition (AMD Ryzen™ AI 300 Series)",
    image: "/framework-laptop-16-diy.jpg",
    description:
      "16-inch customizable DIY modular laptop powered by AMD Ryzen AI 300 Series.",
    price: 1249,
    isAvailable: true,
  },
  {
    id: 10,
    name: "Framework Laptop 13 DIY Edition (AMD Ryzen™ AI 300 Series)",
    image: "/framework-laptop-13-diy.jpg",
    description:
      "13-inch customizable modular laptop powered by AMD Ryzen AI 300 Series.",
    price: 849,
    isAvailable: true,
  },
  {
    id: 11,
    name: "Framework Laptop 13 (AMD Ryzen™ AI 300 Series)",
    image: "/framework-laptop-13-pro-amd.jpg",
    description:
      "13-inch modular laptop with AMD Ryzen AI 300 Series processors.",
    price: 1049,
    isAvailable: true,
  },
  {
    id: 12,
    name: "Framework Laptop 12 (13th Gen Intel® Core™)",
    image: "/framework-laptop-12-intel.jpg",
    description:
      "12-inch modular laptop powered by 13th Gen Intel Core processors.",
    price: 699,
    isAvailable: true,
  },
];

function Market({ cart, addToCart, search }) {
  const [addedProducts, setAddedProducts] = useState([]);

  function handleAddProduct(newProduct) {
    setAddedProducts((previousProducts) => [
      ...previousProducts,
      {
        ...newProduct,
        id: newProduct.id ?? Date.now(),
      },
    ]);
  }

  const allProducts = [...products, ...addedProducts];

  const filteredProducts = allProducts.filter((product) => {
    const searchTerm = search?.toLowerCase().trim();

    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  });

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section
      className="row g-3 align-items-stretch"
      aria-labelledby="products-heading"
    >
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

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div className="col-12 col-sm-6 col-lg-4 mb-5" key={product.id}>
            <ProductCard product={product} />

            <button
              type="button"
              className="btn btn-primary mt-2 w-100"
              onClick={() => addToCart(product)}
              disabled={!product.isAvailable}
            >
              {product.isAvailable
                ? `Add to cart — $${product.price}`
                : "Out of stock"}
            </button>
          </div>
        ))
      ) : (
        <div className="col-12 text-center py-5">
          <h2 className="mt-3">No products found</h2>
        </div>
      )}
    </section>
  );
}

export default Market;
