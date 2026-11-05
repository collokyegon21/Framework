import { useState } from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Market from "./Components/Market";
import Footer from "./Components/Footer";
import CartDrawer from "./Components/CartDrawer";
import Features from "./Components/Features";
import Highlights from "./Components/Highlights";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // 1. New function to remove a specific item from the cart
  const removeFromCart = (indexToRemove) => {
    // Keep all items EXCEPT the one at the specified index
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  return (
    <>
      <header className="app-header py-3 py-md-4">
        <NavBar
          cart={cart}
          onOpenCart={() => setIsCartOpen(true)}
          search={search}
          setSearch={setSearch}
        />
      </header>

      <main className="container app-main">
        <Hero />
        <Market cart={cart} addToCart={addToCart} search={search} />

        <Highlights />
      </main>

      <footer className="mt-4">
        <Footer />
      </footer>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </>
  );
}

export default App;
