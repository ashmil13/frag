import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-shadow-md  main-boxing" style={{width: "100%"}}>
      <h2 className="top-daster  ">Dasther</h2>
      <nav>
        <div className="nav-boxing bg-shadow-md">
          <p className="prop">
            <Link to="/">
              <i className="fas fa-tachometer-alt me-2"></i>Dashboard
            </Link>
          </p>
          <p className="prop">
            <Link to="/adminproducts">
              <i className="fas fa-box me-2"></i>Products
            </Link>
          </p>
          <p className="prop">
            <Link to="/categories">
              <i className="fas fa-tags me-2"></i>Categories
            </Link>
          </p>
          <p className="prop">
            <Link to="/coustmers">
              <i className="fas fa-users me-2"></i>Coustmers
            </Link>
          </p>
        </div>
        <div className="logout-container">
          <button className="logout-btn">
            <i className="fas fa-sign-out-alt me-2"></i>Logout
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

