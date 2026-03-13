import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_URL = "http://localhost:3000/api/products";

const AdminProducts = () => {

    const [products, setProducts] = useState([]);


    const fetchProducts = async () => {
        const response = await axios.get(API_URL);
        setProducts(response.data);
    };





  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/productsdetails');
  };

  const HandleDelete = async (productId) => {
    await axios.delete(`${API_URL}/${productId}`);
    fetchProducts();
  };

useEffect(() => {
    fetchProducts();
    
}, []);


  return (
    <div className='container-fluid p-4'>
        <div className='row mb-4'>
            <div className='col-12'>
                <h2 className="mb-4">Admin Products</h2>
            </div>
        </div>
        
        <div className='d-flex justify-content-between align-items-center mb-4'>
         <div>
          <button className='exp-button '>export</button>
          <button className='exp-button '>import</button>
         </div>
            <button className='btn btn-primary' onClick={handleAddProduct}>Add Product</button>
        </div>
        
        <div className='card shadow-md'>
            <div className='tb-body'>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr className='tred'>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Sale Price</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={product._id || index}>
                                    <td>{product.name}</td>
                                    <td>{product.category?.name || 'N/A'}</td>
                                    <td>{product.price}</td>
                                    <td>{product.salePrice}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <button className='btn btn-sm btn-danger' onClick={()=>HandleDelete(product._id )}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

      
    </div>
  );
};

export default AdminProducts ;