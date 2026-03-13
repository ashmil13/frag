import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { WhislistContext } from "../../Context/WhislistContext";
import { CartContext } from "../../Context/Cartcontext";

function Navbar() {
  const { whislist } = useContext(WhislistContext);
  const { cart } = useContext(CartContext);

  return (
    <div>




      <div className="container-fluid">
        <div className="nav-bar">
          <nav className="navbar shadow-lg navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <h1 className="head">Fragzin</h1>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="bar navbar-nav m-auto mb-2 gap-3">
                  <Link className="nav-link active" to="/">Home</Link>
                  <Link className="nav-link active" to="/product">Product</Link>
                  <Link className="nav-link active" to="#">Gifting</Link>
                  <Link className="nav-link active" to="/about">About</Link>
                </ul>

                {/* Search */}
                <form className="d-flex">
                  <input
                    className="sch form-control me-2 rounded-pill"
                    type="search"
                    placeholder="Search"
                  />
                </form>

                {/* Icons */}
                <div className="d-flex icin">
                  <Link className="nav-link me-1 position-relative" to="/cart">
                    <span
                      className="d-inline-flex align-items-center justify-content-center bg-light border shadow-sm rounded-circle position-relative"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                      {cart && cart.length > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.65em" }}>
                          {cart.length}
                        </span>
                      )}
                    </span>
                  </Link>

                  <Link className="nav-link ms-1" to="/whislist">
                    <span
                      className="d-inline-flex align-items-center justify-content-center bg-light border shadow-sm rounded-circle position-relative"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="fa-regular fa-heart"></i>
                      {whislist && whislist.length > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.65em" }}>
                          {whislist.length}
                        </span>
                      )}
                    </span>
                  </Link>

                  <Link className="nav-link ms-1" to="#">
                    <span
                      className="d-inline-flex align-items-center justify-content-center bg-light border shadow-sm rounded-circle"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="fa-regular fa-bell"></i>
                    </span>
                  </Link>

                  <Link className="nav-link ms-2" to="/user">
                    <span
                      className="d-inline-flex align-items-center justify-content-center bg-light border shadow-sm rounded-circle"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="fa-regular fa-user"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Offer Bar */}
        <div
          style={{
            backgroundColor: "#00354B",
            textAlign: "center",
            height: "35px",
            color: "white",
          }}
        >
          <p className="mb-0">ENJOY FESTIVE DISCOUNTS! FREE SHIPPING ABOVE 999 !</p>
        </div>
      </div>


    </div>
  )
}

export default Navbar
