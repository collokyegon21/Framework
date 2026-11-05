import { useState } from "react";

export default function CartDrawer({ isOpen, onClose, cart, removeFromCart }) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  if (!isOpen) return null;

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <div
        className="offcanvas-backdrop fade show"
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className="offcanvas offcanvas-end show"
        tabIndex={-1}
        id="cartDrawer"
        aria-labelledby="cartDrawerLabel"
        role="dialog"
        aria-modal="true"
      >
        <div className="offcanvas-header border-bottom">
          <h2 className="offcanvas-title fw-bold fs-4" id="cartDrawerLabel">
            Your Cart
          </h2>
          <button
            className="btn-close"
            type="button"
            aria-label="Close cart"
            onClick={onClose}
          />
        </div>

        <div className="offcanvas-body d-flex flex-column">
          {cart.length === 0 ? (
            <div className="text-center text-muted mt-5">
              <i className="bi bi-bag-x fs-1"></i>
              <p className="mt-3">Your cart is empty.</p>
            </div>
          ) : (
            <ul className="list-group list-group-flush mb-auto">
              {/* We add 'index' so we know exactly which item to remove */}
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center px-0 py-3"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                      className="rounded"
                    />
                    <div>
                      <h6
                        className="mb-1 fw-bold text-truncate"
                        style={{ maxWidth: "180px" }}
                      >
                        {item.name}
                      </h6>
                      <small className="text-muted">${item.price}</small>
                    </div>
                  </div>

                  {/* Trash button to remove the item */}
                  <button
                    className="btn btn-sm btn-outline-danger border-0"
                    onClick={() => removeFromCart(index)}
                    aria-label="Remove item"
                    title="Remove from cart"
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {cart.length > 0 && (
            <div className="border-top pt-3 mt-3">
              <div className="d-flex justify-content-between mb-3">
                <span className="fw-bold fs-5">Total:</span>
                <span className="fw-bold fs-5">${cartTotal}</span>
              </div>
              <button
                className="btn btn-primary w-100 py-2 fw-bold"
                style={{ backgroundColor: "#e76235", border: "none" }}
                onClick={() => setIsCheckoutOpen(true)}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </aside>

      {isCheckoutOpen && (
        <aside
          className="offcanvas offcanvas-end show"
          tabIndex={-1}
          id="checkoutDrawer"
          aria-labelledby="checkoutDrawerLabel"
          role="dialog"
          aria-modal="true"
        >
          <div className="offcanvas-header border-bottom">
            <h2
              className="offcanvas-title fw-bold fs-4"
              id="checkoutDrawerLabel"
            >
              Checkout
            </h2>
            <button
              className="btn-close"
              type="button"
              aria-label="Close checkout"
              onClick={() => setIsCheckoutOpen(false)}
            />
          </div>
          <div className="offcanvas-body">
            <h3 className="fs-5 fw-bold">Order summary</h3>
            <ul className="list-group list-group-flush mb-3">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between px-0"
                >
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between border-top pt-3">
              <span className="fw-bold">Total:</span>
              <span className="fw-bold">${cartTotal}</span>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
