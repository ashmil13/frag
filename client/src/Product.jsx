
import React, { useEffect, useState } from "react";
import filter from "./assets/filter.png"
import { useContext } from "react";
import { ProductContext } from "./Context/ProductContext";
import { CartContext } from "./Context/Cartcontext";
import { WhislistContext } from "./Context/WhislistContext";

function Product() { 
    const {product} = useContext(ProductContext)
    const {addToCart} = useContext(CartContext)
    const {addToWhislist} = useContext(WhislistContext)
  return (
    <div>
        <div className="container-fluid">
      <div className="row">
        <div className="sorted d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mt-4 gap-3 px-3">

          <div>
            <h3>All Product</h3>
            <p>Home &gt; product</p>
          </div>

          <div className="list">
            <ul className="list-unstyled d-flex flex-wrap gap-3 align-items-center mb-0">
              <li>Sort By:</li>
              <li>
                <span style={{ color: "#173de7ff", fontWeight: "bold" }}>
                  Relevance
                </span>
              </li>
              <li>Newest First</li>
              <li>Popularity</li>
              <li>Price--Low to High</li>
              <li>Price--High to Low</li>
              <li>
                <button
                  type="button"
                  className="btn btn-light d-flex align-items-center gap-2 prbtn"
                >
                  Filter
                  <img src={filter} height="29px" alt="" />
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
      <div className="container-md mt-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 ms-3">

          {product.map((item) => (
            <div className="main-card col" key={item.id}>
              <div className="crdp shadow-lg position-relative">
                <button 
                  className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow-sm d-flex justify-content-center align-items-center" 
                  style={{ width: "35px", height: "35px", zIndex: 1, padding: "0" }} 
                  onClick={() => addToWhislist(item.id)} 
                >
                  <i className="fa-regular fa-heart text-danger"></i>
                </button>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />
              </div>

              <div className="card-body mt-3 text-center">
                <p className="card-text">
                  {item.title.length > 35
                    ? item.title.substring(0, 35) + "..."
                    : item.title}
                </p>

                <h5 className="card-title">
                  RS {Math.round(item.price * 80)} &nbsp;
                  <span>Rs {Math.round(item.price * 120)}</span>
                </h5>

                <div className="d-flex justify-content-center gap-2">
                  <button className="bt" onClick={() => addToCart(item.id)} >Add to Cart</button>
                </div>
                
              </div>
            </div>
          ))}

        </div>
      </div>
      
    </div>
  )
}

export default Product
