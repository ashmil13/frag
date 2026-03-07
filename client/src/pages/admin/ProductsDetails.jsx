import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = "http://localhost:3000/api/products";


const ProductsDetails = () => {

    const [product, setProduct] = useState({
        name:'',
        price:'',
        salePrice:'',
        quality:'',
        description:'',
        

    });
 
    // const fetchProducts = async () => {
    //     const response = await axios.get(API_URL);
    //     setProduct(response.data);
    // };
    
    const handleChange=(e)=>{

        setProduct({
            ...product,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=async(e)=>{
       
        try {
            const response = await axios.post(API_URL, product);
           
            setProduct({name:'',title:'',salePrice:'',quality:'',description:''});
            // fetchProducts();
        } catch (error) {
            console.error('Error saving product:', error);
        }
    }



// useEffect(() => {
//     fetchProducts();
// }, []);


  return (
    <div className='container-fluid p-4'>
        <div className='row mb-4'>
            <div className='col-12'>
                <h2 className="mb-4">Product Details</h2>
            </div>
        </div>
        
        <div className='card shadow-md carf'>
            <div className='card-by'>
                <form onSubmit={handleSubmit}>
            
                    <div className='row mb-3'>
                        <div className='col-md-6'>
                            <label htmlFor='productName' className='form-label'>Product Name</label>
                            <input 
                                type='text' 
                                name="name"
                                className='form-control' 
                                value={product.name}
                                onChange={handleChange}
                                id='productName' 
                                placeholder='Enter product name'
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='productTitle' className='form-label'>Product Price</label>
                            <input 
                                type='text' 
                                className='form-control'
                                name='price' 
                                value={product.price}
                                onChange={handleChange}
                                id='productTitle' 
                                placeholder='Enter product title'
                            />
                        </div>
                    </div>

                   
                    <div className='row mb-3'>
                        <div className='col-md-6'>
                            <label htmlFor='salePrice' className='form-label'>Sale Price</label>
                            <input 
                                type='text' 
                                className='form-control'
                                name='salePrice'
                                value={product.salePrice}
                                onChange={handleChange} 
                                id='salePrice' 
                                placeholder='Enter sale price'
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='productQuality' className='form-label'>Product Quality</label>
                            <input 
                                type='text' 
                                className='form-control'
                                name="quality" 
                                value={product.quality}
                                onChange={handleChange} 
                                id='productQuality' 
                                placeholder='Enter product quality'
                            />
                        </div>
                    </div>

          
                    <div className='row mb-3'>
                        <div className='col-md-6'>
                            <label htmlFor='category' className='form-label'>Category</label>
                            <select className='form-select' id='category'>
                                <option value=''>Select options</option>
                                
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='offer' className='form-label'>Offer</label>
                            <select className='form-select' id='offer'>
                                <option value=''>Select offer</option>
                                
                            </select>
                        </div>
                    </div>

                  
                    <div className='row mb-3'>
                        <div className='col-12'>
                            <label htmlFor='productDescription' className='form-label'>Product Description</label>
                            <textarea 
                                className='form-control' 
                                id='productDescription' 
                                name="description"
                                value={product.description}
                                onChange={handleChange} 
                                rows='4' 
                                placeholder='Enter product description'
                            ></textarea>
                        </div>
                    </div>

                    
                    <div className='row mb-4'>
                        <div className='col-12'>
                            <label htmlFor='productImage' className='form-label'>Product Image</label>
                            <input 
                                type='file' 
                                className='form-control' 
                                id='productImage' 
                                accept='image/*'
                            />
                        </div>
                    </div>

                   
                     

                       

                    
                 <div className='row'>
                        <div className='col-4 d-flex justify-content-center gap-2'>
                            <button type='submit' className='btn btn-sm btn-primary px-1 py-1'>
                                Submit
                            </button>
                        </div>
                    </div>

                    
                 </form>    
                </div>
            </div>
        
    </div>
    
  );
};

export default ProductsDetails;