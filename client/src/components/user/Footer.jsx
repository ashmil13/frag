import React from 'react'

function Footer() {
  return (
    <div>
        <footer
      className="text-white mt-5"
      style={{ backgroundColor: "#8BB8BE", padding: "40px 0" }}
    >
      <div className="container">
        <div className="row">

          <div className="col-md-3 mt-5">
            <h4 style={{ fontWeight: "bold" }}>Fragranzia</h4>
          </div>

          <div className="col-md-3 mb-4">
            <h5 style={{ fontWeight: "bold" }}>Pages</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white" style={{ textDecoration: "none" }}>Home</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: "none" }}>Products</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: "none" }}>Gifting</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: "none" }}>About</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: "none" }}>Profile</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 style={{ fontWeight: "bold" }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white" style={{ textDecoration: "none" }}>Privacy Policy</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: "none" }}>Terms and Conditions</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: "none" }}>FAQs</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: "none" }}>Customer Service</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 style={{ fontWeight: "bold" }}>Contact</h5>
            <p style={{ marginBottom: "5px" }}>
              <i className="fa-solid fa-envelope"></i> tfraftfurniture@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> +91 9876543210
            </p>
            <div>
              <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <hr style={{ backgroundColor: "white" }} />

        <div className="row text-center">
          <div className="col-md-12">
            <a href="#" className="text-white me-3" style={{ textDecoration: "none" }}>Web Accessibility</a>
            <a href="#" className="text-white me-3" style={{ textDecoration: "none" }}>Terms of Use</a>
            <a href="#" className="text-white me-3" style={{ textDecoration: "none" }}>Privacy Statement</a>
            <a href="#" className="text-white" style={{ textDecoration: "none" }}>Contact Us</a>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p style={{ margin: 0 }}>
              © 2024 Fragranzia Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
