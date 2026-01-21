import React from "react";
import perfumeImg from "./assets/signup.png";
import googleIcon from "./assets/google.png";
import facebookIcon from "./assets/facebook.png";

const Login = () => {
  return (
    <div className="bg-white">
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="d-flex flex-wrap">

          {/* Left Image Section */}
          <div
            className="flex-fill position-relative p-3"
            style={{ maxWidth: "450px" }}
          >
            <div className="position-relative overflow-hidden">
              <img
                src={ perfumeImg}
                alt="Perfume"
                className="w-101 imgi content"
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

              {/* Social Login */}
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

              {/* Username */}
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

              {/* Password */}
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

              {/* Forgot Password */}
              <div className="forgot text-start mb-3">
                <a href="#">Forgot password?</a>
              </div>

              {/* Login Button */}
              <a
                href="/"
                className="btn btn-primary w-100"
                style={{ backgroundColor: "#00354B" }}
              >
                Log in
              </a>

              <p className="text-center mt-3">
                Already have an account? <a href="/">Signup</a>
              </p>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
