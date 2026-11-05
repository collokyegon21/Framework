export default function Features() {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row text-center g-4">
          {/* Feature 1 */}
          <div className="col-md-4">
            <i className="bi bi-battery-charging fs-1 text-warning"></i>
            <h3 className="mt-3 fs-4 fw-bold">20 hours of battery</h3>
            <p className="text-secondary">
              We paired the efficiency gains of Intel® Core™ Ultra Series 3
              processors with a 21% increase in battery capacity.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4">
            <i className="bi bi-laptop fs-1 text-warning"></i>
            <h3 className="mt-3 fs-4 fw-bold">CNC aluminum chassis</h3>
            <p className="text-secondary">
              The new graphite-anodized aluminum chassis is CNC machined from a
              raw block of 6000-series aluminum.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4">
            <i className="bi bi-ubuntu fs-1 text-warning"></i>
            <h3 className="mt-3 fs-4 fw-bold">Linux first</h3>
            <p className="text-secondary">
              Available with officially certified distributions like Fedora,
              Bazzite, and CachyOS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
