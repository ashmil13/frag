import React, { createContext, useContext, useState } from 'react'
import { ProductContext } from './ProductContext';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {

      const {product} = useContext(ProductContext)
      
     let [cart, setCart] = useState([]);
    
    
    let addToCart = (id) => {
    
    let arry = product.find((item) => item.id === id)
    setCart([...cart,arry])
    

    
   
   
    
    
    } 

    



 return<CartContext.Provider value={{cart,addToCart}} >{children}</CartContext.Provider>
}
