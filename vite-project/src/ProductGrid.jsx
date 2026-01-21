
import React, { useEffect, useState } from "react";

const ProductGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
      <div className="container-md mt-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 ms-3">

          {data.map((item) => (
            <div className="main-card col" key={item.id}>
              <div className="crd shadow-lg">
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

                
                  <button>Add to Cart</button>
                
              </div>
            </div>
          ))}

        </div>
      </div>
  );
};

export default ProductGrid;
