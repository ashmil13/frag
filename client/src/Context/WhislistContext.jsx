import React, { createContext, useContext, useState } from 'react'
import { ProductContext } from './ProductContext';

export const WhislistContext = createContext();
export const WhislistProvider = ({ children }) => {
    const { product } = useContext(ProductContext)
    let [whislist, setWhislist] = useState([]);
    
    let addToWhislist = (id) => {
        setWhislist(prevWhislist => {
            let item = product.find((p) => String(p.id) === String(id));
            if (item && !prevWhislist.some(w => String(w.id) === String(id))) {
                return [...prevWhislist, item];
            }
            return prevWhislist;
        });
    }

    let removeFromWhislist = (id) => {
        setWhislist(prevWhislist => prevWhislist.filter(item => String(item.id) !== String(id)));
    }

    return (
        <WhislistContext.Provider value={{ whislist, addToWhislist, removeFromWhislist }}>
            {children}
        </WhislistContext.Provider>
    )
}
