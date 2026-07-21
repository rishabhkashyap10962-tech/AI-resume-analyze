import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">

        <Link className="navbar-brand fw-bold fs-3" to="/">
          AI Placement Test
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
    <a className="nav-link" href="#contact">
        Contact
    </a>
</li>

            <li className="nav-item ms-3">

<Link className="btn btn-outline-light me-2" to="/register">

Register

</Link>

</li>

<li className="nav-item">

<Link className="btn btn-gradient" to="/login">

Login

</Link>

</li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;