import React, { useState,useEffect } from "react"
export const Categoery=()=>{
    let [data,setData]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setData(json)) 
    },[])
return(
    <>
    <div className="container-fluid">
      <div className="row g-4 justify-content-center">
        {data.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="main-card col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <div className="crd shadow-lg text-center p-3">
              <img
                src={item.image}
                className="card-img-top img-fluid"
                style={{
                  borderRadius: "140%",
                  height: "200px",
                  objectFit: "contain",
                }}
                alt={item.title}
              />
            </div>

            <div className="card-body mt-3 text-center">
              <p className="card-text">{item.title}</p>

              <h5 className="card-title">
                Rs {Math.round(item.price * 80)} &nbsp;
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  Rs {Math.round(item.price * 120)}
                </span>
              </h5>

              <button className="btn btn-dark mt-2">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    


    
    </>
    )
}