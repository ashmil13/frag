import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { CartContext } from './Context/Cartcontext'
import { PaymentContext } from './Context/PaymentContest'
const Cart = () => {
  let {cart} = useContext(CartContext)
let {addToPayment} = useContext(PaymentContext)
const navigate = useNavigate();

const [quantities, setQuantities] = useState({});

const incrementQuantity = (id) => {
  setQuantities(prev => ({
    ...prev,
    [id]: (prev[id] || 1) + 1
  }));
};

const decrementQuantity = (id) => {
  setQuantities(prev => ({
    ...prev,
    [id]: Math.max(1, (prev[id] || 1) - 1)
  }));
};
  return (
    <>

    <div className=" container py-4">
      <div className="row gy-4">
        
   

<div className=" col-12 col-lg-8">
  <div
    className=" m-3 p-3"
    style={{ maxHeight: "600px", overflowY: "scroll", scrollbarWidth: "thin" }}
  >
    {cart.map((item) => (
      <div
        key={item.id}
        className="d-flex align-items-center gap-3 mb-3 p-3 bg-white rounded border "
        
      >
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "180px", height: "130px", objectFit: "contain" }}
        />

        <div className="flex-grow-1">
          <h6 className="mb-1">{item.title}</h6>
          <p className="mb-1 fw-bold">RS ₹ {item.price}</p>
          <div className="d-flex align-items-center gap-3 mb-2">
            <div className="d-flex align-items-center border rounded">
              <button 
                className="btn btn-sm btn-outline-secondary" 
                onClick={() => decrementQuantity(item.id)}
                style={{ border: 'none', borderRadius: '0' }}
              >
                -
              </button>
              <span className="px-3 py-1">{quantities[item.id] || 1}</span>
              <button 
                className="btn btn-sm btn-outline-secondary" 
                onClick={() => incrementQuantity(item.id)}
                style={{ border: 'none', borderRadius: '0' }}
              >
                +
              </button>
            </div>
            <span className="text-muted">Qty: {quantities[item.id] || 1}</span>
          </div>
          <div className="d-flex gap-3">
            <button className=" btn bops btn-lg dlte">
              Delete
            </button>
             <button className="btn bops btn-lg sharebtn ">
              Share
            </button>
             <button className="btn bops btn-lg buybtn " onClick={() => {
              addToPayment(item.id);
              navigate("/payment");
            }}>
             Buy
            </button>

          </div>
        </div>

       
      </div>
    ))}
  </div>
</div>



        {/* Checkout Summary */}
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Check Out</h5>

              <div className="d-flex justify-content-between">
                <p>Price (3 items)</p>
                <p className="fw-bold">Rs 3,097</p>
              </div>

              <div className="d-flex justify-content-between">
                <p>Discount</p>
                <p className="fw-bold">Rs 4,404</p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <p>Delivery Charge</p>
                <p className="text-success">Free</p>
              </div>

              <div className="d-flex justify-content-between">
                <p className="fw-bold">Total Amount</p>
                <p className="fw-bold">Rs 3,493</p>
              </div>
            </div>
          </div>

          <button
      className="btn btn-dark w-100 mt-3"
      onClick={() => {
        if (cart.length > 0) {
          navigate("/payment");
        } else {
          alert("Please add items to cart first!");
        }
      }}
      disabled={cart.length === 0}
    >
      {cart.length === 0 ? "Cart is Empty" : "Proceed to Buy"}
    </button>
        </div>

      </div>
    </div>

  
          

    </>
  )
}

export default Cart
