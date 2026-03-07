import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PaymentContext } from './Context/PaymentContest'
import './Payment.css'

const Payment = () => {
  let {payment, removeFromPayment} = useContext(PaymentContext)
  const navigate = useNavigate();

  useEffect(() => {
    if (payment.length === 0) {
      navigate('/cart');
    }
  }, [payment, navigate]);

  if (payment.length === 0) {
    return (
      <div className="container text-center py-5">
        <h3>No items in payment</h3>
        <p>Redirecting to cart...</p>
      </div>
    );
  }

  return (
    <div>
        <div className="container">
        <div className="row">
          
          {/* Left Section */}
           <div className="col-12 col-lg-8">
            <div className="shadow-lg card mt-5 rounded-3">
              <div className="m-3 m-md-5 custom-scrollbar" style={{ maxHeight: "600px", overflowY: "scroll", overflowX: "hidden" }}>
             {payment.map((item) => (
      <div
        key={item.paymentId}
        className="d-flex gap-5  align-items-center gap-3 mb-5 p-3 bg-white "
        
      >
        <img
          src={item.image}

          alt={item.title}
          style={{ width: "250px", height: "280px", objectFit: "contain" }}
          
        />
       
        <div>
          <h6 className="mb-1">{item.title}</h6>
          <p className="mb-1 fw-bold">RS ₹ {item.price} </p>
          <h4>Autograph eau de parfum 100ml for men</h4>
          <p className="text-muted small">A sophisticated fragrance with notes of bergamot, lavender, and sandalwood. Perfect for modern gentleman who appreciates timeless elegance.</p>
           
          
        </div>

 
      </div>
    ))}
    <button className='btn btn-primary' style={{ background: "#00354B", color: "#fff" , width: "100%" }}>Purchase now</button>

     <button className='btn btn-primary' onClick={() => removeFromPayment(item.paymentId)} style={{ background: "#00354B", color: "#fff" , width: "100%", marginTop: "10px" }}>Delete</button>
              </div>
               
            </div>

            {/* Address */}
            <div className="m-3 m-md-5">
              <h3>Personal details</h3>

              <div className="d-flex flex-wrap gap-3 mt-3">
                <button className="btn rounded-3" style={{ background: "#EBE8E8" }}>
                  Add address +
                </button>
                <button className="btn text-white rounded-3" style={{ background: "#00354B" }}>
                  Home
                </button>
                <button className="btn rounded-3" style={{ background: "#EBE8E8" }}>
                  Office
                </button>
              </div>
            </div>

            <div className="shadow-lg card m-3 m-md-5 rounded-3">
              <div className="p-4">
                <h4>Rabon Jhone</h4>
                <p>
                  No. 104, Emerald Heights Opposite Lulu Mall Edappally,
                  Kochi Kerala 682024
                </p>
                <p>+91 9876543210</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-lg-4">
            <div className="card shadow-lg mt-5 rounded-3">
              <div className="m-4">
                <h4>Price Details</h4>

                <div className="d-flex justify-content-between">
                  <p>Price</p>
                  <p>Rs 899 <del>Rs 2000</del></p>
                </div>

                <div className="d-flex justify-content-between">
                  <p>Discount</p>
                  <p>Rs 1101</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p>Delivery</p>
                  <p className="text-success">Free</p>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold">
                  <p>Total</p>
                  <p>Rs 899</p>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="card shadow-lg mt-4 rounded-3">
              <div className="m-4">
                <form>
                  {[
                    "Google Pay",
                    "Cash on Delivery",
                    "UPI",
                    "Credit/Debit Card",
                    "Net Banking",
                  ].map((method, i) => (
                    <div className="form-check d-flex justify-content-between mb-2" key={i}>
                      <label className="form-check-label">{method}</label>
                      <input type="radio" name="payment" className="form-check-input" />
                    </div>
                  ))}

                  <a href="paymentsuces.html">
                    <button className="btn w-100 mt-3" style={{ backgroundColor: "#00354B", color: "#fff", }}>
                      Pay Now
                    </button>
                  </a>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Payment;