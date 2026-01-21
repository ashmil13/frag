import React from "react";
import perfumeImg from "./assets/login.png";
import googleIcon from "./assets/google.png";
import facebookIcon from "./assets/facebook.png";

const Signup = () => {
  return (
    <div className="bg-white">
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="d-flex flex-wrap">

          {/* Left Image Section */}
          <div
            className="flex-fill position-relative p-3"
            style={{ maxWidth: "450px" }}
          >
            <div
              className="position-relative overflow-hidden"
              style={{
                borderTopRightRadius: "10rem",
                borderBottomLeftRadius: "10rem",
              }}
            >
              <img
                src={perfumeImg}
                alt="Perfume"
                className="img-fluid w-100 imgi"
                style={{
                  height: "62vh",
                }}
              />

              <div
                className="position-absolute top-0 start-0 h-100"
                style={{
                  width: "200px",
                  background: "rgba(0,0,0,0.4)",
                  borderTopRightRadius: "150px",
                  borderBottomLeftRadius: "150px",
                }}
              ></div>

              <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                <h2 className="fw-bold" style={{ whiteSpace: "nowrap" }}>
                  Let's Get Started!
                </h2>
                <p className="mb-0">
                  Create your account and unlock the full potential of Fragranzia.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="flex-fill p-4 d-flex justify-content-center text-center">
            <form className="w-100" style={{ maxWidth: "350px" }}>

              {/* Social Buttons */}
              <div className="mt-n2 d-flex flex-row gap-3">
                <button
                  type="button"
                  className="btn d-flex align-items-center justify-content-center gap-2"
                  style={{
                    width: "150%",
                    height: "50px",
                    border: "1px solid",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  }}
                >
                  <img src={googleIcon} alt="Google" width="24" height="24" />
                  <span style={{ fontWeight: 500 }}>Google</span>
                </button>

                <button
                  type="button"
                  className="btn d-flex align-items-center justify-content-center gap-2"
                  style={{
                    width: "150%",
                    height: "50px",
                    border: "1px solid",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  }}
                >
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    width="24"
                    height="24"
                    style={{ borderRadius: "20px" }}
                  />
                  <span style={{ fontWeight: 500 }}>Facebook</span>
                </button>
              </div>

              {/* Divider */}
              <div className="d-flex align-items-center my-3">
                <hr className="flex-grow-1" />
                <span className="px-2 text-muted">or signup with email</span>
                <hr className="flex-grow-1" />
              </div>

              {/* Inputs */}
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa-regular fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  style={{ backgroundColor: "#f0f0f0" }}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  style={{ backgroundColor: "#f0f0f0" }}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  style={{ backgroundColor: "#f0f0f0" }}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm your password"
                  style={{ backgroundColor: "#f0f0f0" }}
                />
              </div>

              {/* Checkbox */}
              <div className="form-check mb-3 text-start">
                <input className="form-check-input" type="checkbox" id="terms" />
                <label className="form-check-label" htmlFor="terms">
                  Agree with{" "}
                  <a
                    href="#"
                    style={{
                      color: "#00354B",
                      textDecoration: "underline",
                      fontWeight: 600,
                    }}
                  >
                    Terms & Conditions
                  </a>
                </label>
              </div>

              {/* Button */}
              <a
                href="/signup"
                className="btn btn-primary w-100"
                style={{ backgroundColor: "#00354B" }}
              >
                Sign up
              </a>

              <p className="text-center mt-3">
                Already have an account? <a href="/login">Sign in</a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;
