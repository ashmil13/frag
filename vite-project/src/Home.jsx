import React, { useEffect, useState } from "react";
import orange from "./assets/orange.png";
import blue from "./assets/blue.png";
import bgimage from "./assets/bgimage.png";
import orangeglass from "./assets/orangeglass.png";
import whiteglass from "./assets/whiteglass.png";
import blackglass from "./assets/blackglass.png";
import sticker from "./assets/sticker.png";
import truck from "./assets/truck.png";
import secure from "./assets/secure.png";
import location from "./assets/location.png";
import bottlesend from "./assets/bottlesend.png";
import whitebottle from "./assets/whitebottle.png";
import women from "./assets/women.png";
import smallbottle from "./assets/smallbottle.png";
import whitespray from "./assets/whitespray.png";
import topwhite from "./assets/topwhite.png";
import doublespray from "./assets/doublespray.png";
import topgolden from "./assets/topgolden.png";
import goldsprey from "./assets/goldsprey.png";
import lastimage from "./assets/lastimage.png";
import { useContext } from "react";
import { ProductContext } from "./Context/ProductContext";
import { CartContext } from "./Context/Cartcontext"; 




const Home = () => {
  const {product} = useContext(ProductContext)
 const {addToCart} = useContext(CartContext)

  return (

   <>
   <div className="container-fluid">

     <div className="container">
      <div className="text-bg-white p-3">
        <div
          id="perfumecarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div
              className="carousel-item active rounded-3"
              style={{
                backgroundColor: "rgb(187, 129, 42)",
                minHeight: "400px",
                position: "relative",
                backgroundImage: `url(${bgimage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="container py-5 position-relative">
                <div className="row align-items-center text-center text-md-start">
                  <div className="col-12 col-md-6">
                    <h2
                      className="fw-bold"
                      style={{
                        color: "white",
                        fontFamily: "'Poppins', sans-serif",
                        paddingTop: "50px",
                      }}
                    >
                      Discover perfumes that
                      <br />
                      celebrate individuality
                    </h2>
                    <p
                      className="mt-3"
                      style={{
                        color: "white",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      Every moment with an unforgettable essence.
                    </p>
                    <button
                      type="button"
                      className="btn btn-light mt-2"
                      style={{ width: "130px" }}
                    >
                      Shop Now
                    </button>
                  </div>

                  <div className="col-12 col-md-6 position-relative mt-4 mt-md-0">
                    <div className="position-relative img-corseer">
                      <img
                        src={orange}
                        alt="Perfume"
                        style={{
                          position: "absolute",
                          top: "-9px",
                          marginTop: "-90px",
                          marginLeft: "200px",
                          width: "310px",
                          transform: "rotate(-18deg)",
                        }}
                      />
                      <img
                        src={bottlesend}
                        alt="Perfume"
                        style={{
                          position: "absolute",
                          left: "40px",
                          marginTop: "-50px",
                          marginLeft: "330px",
                          width: "250px",
                          height: "250px",
                          transform: "rotate(18deg)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div
              className="carousel-item rounded-3"
              style={{
                backgroundColor: "#00354B",
                minHeight: "400px",
                position: "relative",
                backgroundImage: `url(${bgimage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="container py-5 position-relative">
                <div className="row align-items-center text-center text-md-start">
                  <div className="col-12 col-md-6">
                    <h2
                      className="fw-bold"
                      style={{
                        color: "white",
                        fontFamily: "'Poppins', sans-serif",
                        paddingTop: "50px",
                      }}
                    >
                      Discover perfumes that
                      <br />
                      celebrate individuality
                    </h2>
                    <p
                      className="mt-3"
                      style={{
                        color: "white",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      Every moment with an unforgettable essence.
                    </p>
                    <button
                      type="button"
                      className="btn btn-light mt-2"
                      style={{ width: "130px" }}
                    >
                      Shop Now
                    </button>
                  </div>

                  <div className="col-12 col-md-6 position-relative mt-4 mt-md-0">
                    <div className="position-relative d-none d-md-block">
                      <img
                        src={blue}
                        alt="Perfume"
                        style={{
                          position: "absolute",
                          marginTop: "-90px",
                          marginLeft: "200px",
                          width: "310px",
                          transform: "rotate(-18deg)",
                        }}
                      />
                      <img
                        src={blue}
                        alt="Perfume"
                        style={{
                          position: "absolute",
                          top: "20px",
                          marginTop: "-60px",
                          marginLeft: "330px",
                          width: "250px",
                          transform: "rotate(18deg)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#perfumecarousel"
              data-bs-slide-to="0"
              className="active"
              style={{ width: "4px", height: "4px", borderRadius: "50%" }}
            />
            <button
              type="button"
              data-bs-target="#perfumecarousel"
              data-bs-slide-to="1"
              style={{ width: "4px", height: "4px", borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
    </div>

    <div className="container-md mt-4">
      <div className="row g-4">

        {/* Card 1 */}
        <div className="col-12 col-md-4 d-flex align-items-stretch">
          <div className="card flex-fill">
            <div className="boxing card-body d-flex flex-column flex-sm-row gap-3">
              <div className="text">
                <h5 className="card-title">Unlock Exclusive Offers</h5>
                <p>Discover special deals tailored just for you!</p>
              </div>
              <div className="text-center text-sm-start">
                <img
                  src={orangeglass}
                  className="img-fluid"
                  style={{ maxHeight: "178px" }}
                  alt="Perfume"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-4 d-flex align-items-stretch">
          <div className="card flex-fill">
            <div className="boxing card-body d-flex flex-column flex-sm-row gap-3">
              <div className="text ps-3">
                <h5 className="card-title">
                  Gift a Scent to your loved one.
                </h5>
                <p>Make your love more beautiful</p>
                <img
                  src={blackglass}
                  className="img-fluid"
                  style={{ maxHeight: "105px" }}
                  alt="Gift Perfume"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-4 d-flex align-items-stretch">
          <div className="card flex-fill">
            <div className="boxing card-body d-flex flex-column flex-sm-row gap-3">
              <div className="ps-3">
                <h5>Luxury Scents Starting at ₹4,000</h5>
                <img
                  src={whiteglass}
                  className="img-fluid"
                  style={{ maxHeight: "122px" }}
                  alt="Luxury Perfume"
                />
              </div>
              <div className="lastpos text-center text-sm-start">
                <img
                  src={sticker}
                  className="img-fluid"
                  style={{ maxHeight: "150px" }}
                  alt="Perfume Bottle"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
 <div className="container my-5">
      <div
        className="card shadow-lg border-0"
        style={{ borderRadius: "20px" }}
      >
        <div className="card-body">
          <div className="row text-start">

            {/* Delivery */}
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="d-flex align-items-start gap-3">
                <img src={truck} alt="Delivery" />
                <div>
                  <h5 className="mt-1">Fast & Reliable Delivery</h5>
                  <p className="text-muted">
                    Get your orders delivered on
                    <br />
                    time, every time.
                  </p>
                </div>
              </div>
            </div>

            {/* Secure Payments */}
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="d-flex align-items-start gap-3">
                <img src={secure} alt="Secure Payment" />
                <div>
                  <h5 className="mt-1">Secure Payments</h5>
                  <p className="text-muted">
                    Shop with confidence using our
                    <br />
                    encrypted payment gateways.
                  </p>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="col-md-4">
              <div className="d-flex align-items-start gap-3">
                <img src={location} alt="Customer Support" />
                <div>
                  <h5 className="mt-1">24/7 Customer Support</h5>
                  <p className="text-muted">
                    We’re here to assist you anytime,
                    <br />
                    anywhere.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div className="flek d-flex mt-5 mb-5 justify-content-between align-items-center">
      <h5>
        Featured <span style={{ color: "#00354B" }}>Collections</span>
      </h5>

      <div className="d-inline-flex">
        <button
          className="shadow-lg border-1 me-3"
          style={{ borderRadius: "60px" }}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <button
          className="shadow-lg border-1"
          style={{ borderRadius: "60px" }}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>

     <div
      className="container mt-4"
      style={{
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      <div
        className="row g-4 justify-content-center"
        style={{ flexWrap: "nowrap" }}
      >
        {product.map((item) => (
          <div
            key={item.id}
            className="main-card col-12 col-sm-6 col-md-4 col-lg-3"
            style={{ display: "inline-block" }}
          >
            {/* Image Card */}
            <div className="crd shadow-lg text-center p-3">
              <img
                src={item.image}
                className="img-fluid"
                style={{
                  borderRadius: "140%",
                  height: "200px",
                  objectFit: "contain",
                }}
                alt={item.title}
              />
            </div>

            {/* Content */}
            <div className="card-body mt-3 text-center">
              <p className="card-text">
                {item.title.length > 40
                  ? item.title.substring(0, 40) + "..."
                  : item.title}
              </p>

              <h5 className="card-title">
                Rs {Math.round(item.price * 80)}{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "gray",
                    fontSize: "0.9rem",
                  }}
                >
                  Rs {Math.round(item.price * 120)}
                </span>
              </h5>

             <button onClick={() => addToCart(item.id)} >Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container-fluid">
      <div className="row mt-5 mb-5">
        <div className="col-12">
          <p className="center-text">
            "It's an art. A craft. A science. At Fragranzia, we're in <br />
            the business of creating memories that last forever <br />
            through our fragrances."
          </p>
        </div>
      </div>
    </div>

<div className="container">
  <div className="container-md">
    <div className="row text-center">
      
      <div className="col-12 col-md-4">
        <div
          className="new-box"
          style={{ backgroundImage: `url(${whitebottle})` }}
        >
          <p className="fonts2 text_fix">New Arrivals</p>
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div
          className="new-box2"
          style={{ backgroundImage: `url(${women})` }}
        >
          <p className="fonts2 text_fix">Limited Edition</p>
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div
          className="new-box3"
          style={{ backgroundImage: `url(${smallbottle})` }}
        >
          <p className="fonts2 text_fix">Best Sellers</p>
        </div>
      </div>

    </div>
  </div>
</div>

<div className="flek d-flex mt-5 mb-5">
      <h5>
        Explore <span style={{ color: "#00354B" }}>Categories</span>
      </h5>

      <div className="d-inline-flex">
        <p style={{ textDecoration: "underline" }}>See all</p>
      </div>
    </div>

   <div className="container-md">
      <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">

        <div className="circle-content">
          <img
            src={whitespray}
            className="img-fluid"
            style={{
              borderRadius: "40%",
              height: "180px",
              marginLeft: "20px",
              marginTop: "30px",
            }}
            alt=""
          />
          <p
            style={{
              marginTop: "40px",
              marginLeft: "60px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            Eau De Parfum
          </p>
        </div>

        <div className="circle-content">
          <img
            src={topwhite}
            className="img-fluid"
            style={{
              borderRadius: "40%",
              height: "180px",
              marginLeft: "20px",
              marginTop: "30px",
            }}
            alt=""
          />
          <p
            style={{
              marginTop: "40px",
              marginLeft: "60px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            Concentrated
          </p>
        </div>

        <div className="circle-content">
          <img
            src={goldsprey}
            className="img-fluid"
            style={{
              borderRadius: "40%",
              height: "180px",
              marginLeft: "20px",
              marginTop: "30px",
            }}
            alt=""
          />
          <p
            style={{
              marginTop: "40px",
              marginLeft: "60px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            Deodorants
          </p>
        </div>

        <div className="circle-content">
          <img
            src={topgolden}
            className="img-fluid"
            style={{
              borderRadius: "40%",
              height: "180px",
              marginLeft: "20px",
              marginTop: "30px",
            }}
            alt=""
          />
          <p
            style={{
              marginTop: "40px",
              marginLeft: "60px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            Body Mist
          </p>
        </div>

        <div className="circle-content">
          <img
            src={doublespray}
            className="img-fluid"
            style={{
              borderRadius: "40%",
              height: "180px",
              marginLeft: "20px",
              marginTop: "30px",
            }}
            alt=""
          />
          <p
            style={{
              marginTop: "40px",
              marginLeft: "60px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            Combo
          </p>
        </div>

      </div>
    </div>

      <br />
      <br />

      <div className="container">
      <div className="row align-items-center mt-5 shadow-lg p-3 card-last">

        <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h5 className="card-title">Elegance in Every Bottle</h5>
          <p className="card-text mt-2">
            Discover timeless fragrances crafted for every moment
          </p>
          <a href="#">
            <button className="btn btn-primary">Shop Now</button>
          </a>
        </div>

        <div className="col-12 col-md-6 text-center">
          <img
            src={lastimage}
            className="img-fluid"
            style={{ maxHeight: "220px" }}
            alt="Fragrance Bottle"
          />
        </div>

      </div>
    </div>

   


    

   </div>
   
   </>
  );
};

export default Home;
