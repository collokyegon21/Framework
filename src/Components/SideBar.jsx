function SideBar({ isOpen, onClose }) {
  if (!isOpen) return null;

  const links = [
    ["Desktop", "https://frame.work/desktop"],
    ["Framework Laptop 12", "https://frame.work/laptop-12"],
    ["Framework Laptop 13", "https://frame.work/laptop-13"],
    ["Framework Laptop 16", "https://frame.work/laptop-16"],
    ["Shop all", "https://frame.work/shop"],
    ["Support", "https://frame.work/support"],
    ["For Business", "https://frame.work/framework-for-business"],
    ["About", "https://frame.work/about"],
  ];

  return (
    <>
      <div
        className="offcanvas-backdrop fade show"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className="offcanvas offcanvas-start show"
        tabIndex={-1}
        id="navbarDrawer"
        aria-labelledby="sidebarLabel"
        role="dialog"
        aria-modal="true"
      >
        <div className="offcanvas-header">
          <h2 className="offcanvas-title fw-bold fs-4" id="sidebarLabel">
            Framework
          </h2>
          <button
            className="btn-close"
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
          />
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav flex-column gap-2">
            {links.map(([label, href]) => (
              <li className="nav-item" key={label}>
                {/* Added underline so they visually look like links */}
                <a
                  className="nav-link text-decoration-underline"
                  href={href}
                  onClick={onClose}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
