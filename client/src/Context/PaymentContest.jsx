import React, { createContext, useContext, useState } from 'react'
import { ProductContext } from './ProductContext';
export const PaymentContext = createContext();
export const PaymentProvider = ({ children }) => {
    const { product } = useContext(ProductContext);
    let [payment, setPayment] = useState([]);

    let addToPayment = (id) => {
    let arry = product.find((item) => item.id === id)
    const uniqueId = `${id}_${Date.now()}_${Math.random()}`;
    setPayment([{ ...arry, paymentId: uniqueId }])
    
    }

    const incrementQuantity = (paymentId) => {
        setPayment(payment.map(item => 
            item.paymentId === paymentId ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        ));
    };

    const decrementQuantity = (paymentId) => {
        setPayment(payment.map(item => 
            item.paymentId === paymentId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    const removeFromPayment = (paymentId) => {
        setPayment(payment.filter(item => item.paymentId !== paymentId));
    };

    return<PaymentContext.Provider value={{payment,addToPayment, incrementQuantity, decrementQuantity, removeFromPayment}} >{children}</PaymentContext.Provider>
    
}
