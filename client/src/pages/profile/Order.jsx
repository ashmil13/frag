import React, { useState } from 'react';
import { useContext } from 'react';
import { PaymentContext } from '../../Context/PaymentContest';

const Order = () => {
  const { payment } = useContext(PaymentContext);
  const [orderStatus, setOrderStatus] = useState({});

  const handleDelivered = (itemId) => {
    setOrderStatus(prev => ({
      ...prev,
      [itemId]: 'delivered'
    }));
    console.log(`Item ${itemId} marked as delivered`);
  };

  const handleOutOfDelivered = (itemId) => {
    setOrderStatus(prev => ({
      ...prev,
      [itemId]: 'out-of-delivered'
    }));
    console.log(`Item ${itemId} marked as out of delivered`);
  };

  return (
    <div className='container-fluid p-4'>
        <div className='row mb-4'>
            <div className='col-12'>
                <h2 className="mb-4">Order History</h2>
            </div>
        </div>
        
                            <div>  
                                {payment.map((item) => (
                                    <div key={item.paymentId} className='d-flex align-items-center gap-3 p-3 border-bottom'>
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            style={{ width: "80px", height: "80px", objectFit: "contain" }}
                                        />
                                        <div className='flex-grow-1'>
                                            <h6 className='mb-1'>{item.title}</h6>
                                            <p className='text-muted mb-2'>₹{item.price}</p>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <button 
                                                className={`btn btn-sm ${orderStatus[item.paymentId] === 'delivered' ? 'btn-success' : 'btn-outline-success'}`}
                                                onClick={() => handleDelivered(item.paymentId)}
                                            >
                                                Delivered
                                            </button>
                                            <button 
                                                className={`btn btn-sm ${orderStatus[item.paymentId] === 'out-of-delivered' ? 'btn-warning' : 'btn-outline-warning'}`}
                                                onClick={() => handleOutOfDelivered(item.paymentId)}
                                            >
                                                Out of Delivered
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
    </div>
  );
};

export default Order;
