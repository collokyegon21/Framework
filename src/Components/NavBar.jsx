import { useState } from "react";
import SideBar from "./SideBar";

export default function NavBar({ cart, onOpenCart, search, setSearch }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top py-3">
        <div className="container-fluid px-lg-5">
          <button
            className="navbar-toggler border-0 shadow-none me-3"
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
          >
            <i className="bi bi-list fs-2"></i>
          </button>

          <a
            href="#home"
            className="navbar-brand fw-bold fs-3 text-dark me-lg-5"
          >
            Framework<span className="text-success">.</span>
          </a>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav gap-lg-3 me-auto">
              <li className="nav-item">
                <a className="nav-link fw-medium text-dark" href="#products">
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-medium text-dark" href="#marketplace">
                  Marketplace
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-medium text-dark" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-medium text-dark" href="#support">
                  Support
                </a>
              </li>
            </ul>
            {/* Search form */}

            <form
              className="d-flex mx-lg-3 my-3 my-lg-0"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <i className="bi bi-search text-secondary"></i>
                </span>

                <input
                  type="search"
                  className="form-control bg-light border-start-0 shadow-none"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search products"
                />

                {search && (
                  <button
                    type="button"
                    className="btn btn-light border"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                )}
              </div>
            </form>
            {/* Account and cart */}

            <div className="d-flex align-items-center gap-4 ms-lg-3">
              <a
                href="#account"
                className="text-dark text-decoration-none"
                aria-label="Account"
              >
                <i className="bi bi-person fs-4"></i>
              </a>

              <button
                className="btn border-0 p-0 text-dark shadow-none position-relative"
                onClick={onOpenCart}
                aria-label="Open shopping cart"
              >
                <i className="bi bi-bag fs-4"></i>

                {cart.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile cart */}
          <div className="d-flex align-items-center gap-3 ms-auto d-lg-none">
            <button
              className="btn border-0 p-0 text-dark shadow-none position-relative"
              onClick={onOpenCart}
              aria-label="Open shopping cart"
            >
              <i className="bi bi-bag fs-4"></i>

              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar */}
      {/* <SideBar isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} /> */}

      {/* Mobile search */}
      <div className="d-lg-none bg-white border-bottom p-3">
        <div className="input-group">
          <span className="input-group-text bg-light border-end-0">
            <i className="bi bi-search text-secondary"></i>
          </span>

          <input
            type="search"
            className="form-control bg-light border-start-0 shadow-none"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search products"
          />

          {search && (
            <button
              className="btn btn-light border"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
