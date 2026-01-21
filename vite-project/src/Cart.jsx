import React, { useContext } from 'react'
import { CartContext } from './Context/Cartcontext'

const Cart = () => {
  let {cart} = useContext(CartContext)
  return (
    <>

    <div className=" container py-4">
      <div className="row gy-4">
        
        {/* Product List */}

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
        </div>

        <button className="btn bops btn-sm">
          Remove
        </button>
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

          <button className="btn btn-dark w-100 mt-3">
            Proceed to Buy
          </button>
        </div>

      </div>
    </div>

  
          

    </>
  )
}

export default Cart
