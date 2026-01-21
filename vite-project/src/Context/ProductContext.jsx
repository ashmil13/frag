import React, { createContext, useState, useEffect } from 'react'
export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
    let [product, setProduct] = useState([]);
    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setProduct(json))
  }, [])


return<ProductContext.Provider value={{product}} >{children}</ProductContext.Provider>
}
